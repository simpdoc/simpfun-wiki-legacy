import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Bot, BookOpen, Search } from 'lucide-react';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { source } from '@/lib/source';
import { appName } from '@/lib/shared';
import { collectDocsSections } from '@/lib/docs-sections';

export const metadata: Metadata = {
  title: { absolute: appName },
  description: '简幻欢（SFE）旧页面社区维基，保留历史文档与 AI 可读内容入口。',
};

const highlights = [
  {
    icon: BookOpen,
    title: '七套历史文档',
    description: '官网、MCJE、MCBE、泰拉瑞亚、像素工厂、铁锈战争与自定义镜像。',
  },
  {
    icon: Bot,
    title: 'AI 可直接读取',
    description: '提供 llms.txt、全站合集和逐页 Markdown 出口。',
  },
  {
    icon: Search,
    title: '静态全文搜索',
    description: '无需后端服务，可按文档分区筛选搜索结果。',
  },
];

const footerLinkGroups = [
  {
    title: '官方链接',
    items: [
      { label: '简幻欢官网', href: 'https://simpfun.cn/' },
      { label: '简幻云官网', href: 'https://v2.simpcloud.cn/' },
      { label: '简幻欢官方文档', href: 'https://www.yuque.com/simpfun/sfe/main' },
      { label: 'Bilibili 主页', href: 'https://space.bilibili.com/1493209225' },
    ],
  },
  {
    title: '相关站点',
    items: [
      { label: '新版社区维基', href: 'https://next.simpdoc.top/' },
      { label: '第三方镜像文档', href: 'https://tpmd.simpdoc.top/' },
      { label: 'GitHub', href: 'https://github.com/simpdoc/simpfun-wiki-legacy' },
    ],
  },
];

function isExternal(href: string) {
  return href.startsWith('http');
}

export default function HomePage() {
  const pages = source.getPages();
  const docEntries = collectDocsSections(source.getPageTree());
  const footerLinks = [
    {
      title: '文档列表',
      items: docEntries.map((doc) => ({ label: doc.name, href: doc.url })),
    },
    ...footerLinkGroups,
  ];

  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-5xl px-4 pt-10 pb-8 md:pt-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-md border bg-fd-card px-2.5 py-1 text-xs font-medium text-fd-muted-foreground">
              Legacy Archive
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">简幻欢社区维基</h1>
            <p className="mt-4 max-w-2xl text-balance text-fd-muted-foreground md:text-lg">
              旧页面文档归档。内容保留原文件名、原始 Markdown 与历史入口，便于继续查阅和引用。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/docs"
                className={buttonVariants({
                  className: 'gap-2 px-4',
                })}
              >
                浏览全部文档
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/docs/ai"
                className={buttonVariants({
                  variant: 'secondary',
                  className: 'gap-2 px-4',
                })}
              >
                <Bot className="size-4" />
                在 AI 中使用
              </Link>
            </div>
          </div>
          <Image
            src="/img/simpfun.png"
            alt="简幻欢社区维基标志"
            width={112}
            height={112}
            priority
            className="size-24 shrink-0 object-contain md:size-28"
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pb-10">
        <div className="grid gap-3 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-3 rounded-lg border bg-fd-card/50 p-4">
              <Icon className="mt-0.5 size-5 shrink-0 text-fd-muted-foreground" aria-hidden="true" />
              <div>
                <h2 className="font-semibold">{title}</h2>
                <p className="mt-1 text-sm text-fd-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pb-16">
        <div className="grid gap-3 md:grid-cols-3">
          {docEntries.map((doc) => {
            const count = pages.filter((page) => page.slugs[0] === doc.slug).length;

            return (
              <Link
                key={doc.url}
                href={doc.url}
                className="group flex flex-col rounded-lg border bg-fd-card p-5 transition-colors hover:bg-fd-accent/40"
              >
                <div className="flex items-center justify-between gap-2">
                  <h2 className="font-semibold">{doc.name}</h2>
                  <span className="shrink-0 text-xs text-fd-muted-foreground">{count} 篇</span>
                </div>
              <p className="mt-2 text-sm break-words text-fd-muted-foreground">{doc.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium">
                  开始阅读
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <footer className="mt-auto border-t bg-fd-card/40">
        <div className="mx-auto grid w-full max-w-5xl gap-8 px-4 py-10 sm:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold">{group.title}</p>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    {isExternal(item.href) ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t px-4 py-4 text-center text-xs text-fd-muted-foreground">
          <p>Copyright © {new Date().getFullYear()} 简幻欢社区维基</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-fd-foreground"
            >
              黑ICP备2024025211号-2
            </a>
            <a
              href="https://beian.mps.gov.cn/#/query/webSearch?code=23030002000215"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 transition-colors hover:text-fd-foreground"
            >
              <Image src="/img/beian.png" alt="公安备案图标" width={16} height={16} className="h-4 w-auto" />
              黑公网安备23030002000215号
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
