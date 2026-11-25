import Link from 'next/link';
import { History } from 'lucide-react';

export function LegacyNotice() {
  return (
    <aside className="overflow-hidden border-b border-amber-300/70 bg-amber-50 px-4 py-2 text-center text-sm text-amber-950 dark:border-amber-700/60 dark:bg-amber-950/40 dark:text-amber-100">
      <span className="mx-auto flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 max-sm:flex-col max-sm:gap-y-0">
        <History className="size-4 shrink-0" aria-hidden="true" />
        <span>旧页面 Wiki 已停止支持，仅作历史参考与必要维护。</span>
        <Link
          href="https://next.simpdoc.top/"
          className="max-w-full font-medium break-words underline underline-offset-4 hover:no-underline"
        >
          前往新版维基
        </Link>
      </span>
    </aside>
  );
}
