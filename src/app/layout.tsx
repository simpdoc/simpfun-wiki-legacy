import type { Metadata } from 'next';
import { Provider } from '@/components/provider';
import { appName, siteUrl } from '@/lib/shared';
import { source } from '@/lib/source';
import { collectDocsSections } from '@/lib/docs-sections';
import { LegacyNotice } from '@/components/legacy-notice';
import './global.css';
// Shared css chunk for all routes: ImageZoom (used by docs pages) imports the
// same file, so route-prefetch css hints always match a stylesheet that is
// already loaded on every page — no "preloaded but not used" warnings.
import 'fumadocs-ui/components/image-zoom.css';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: appName,
    template: `%s | ${appName}`,
  },
  icons: {
    icon: '/img/favicon.ico',
  },
  description: '简幻欢（SFE）旧页面社区维基，保留历史文档与 AI 可读内容入口。',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col overflow-x-hidden">
        <Provider sections={collectDocsSections(source.getPageTree())}>
          <LegacyNotice />
          {children}
        </Provider>
      </body>
    </html>
  );
}
