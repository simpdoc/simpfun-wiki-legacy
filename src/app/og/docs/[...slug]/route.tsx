import { source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { generateOGImage } from 'fumadocs-ui/og';
import { appName, getPageImageUrl } from '@/lib/shared';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const revalidate = false;

const [regularFont, boldFont] = await Promise.all([
  readFile(join(process.cwd(), 'src/assets/fonts/NotoSansSC-Regular.ttf')),
  readFile(join(process.cwd(), 'src/assets/fonts/NotoSansSC-Bold.ttf')),
]);

export async function GET(_req: Request, { params }: RouteContext<'/og/docs/[...slug]'>) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: appName,
    fonts: [
      {
        name: 'Noto Sans SC',
        data: regularFont,
        style: 'normal',
        weight: 400,
      },
      {
        name: 'Noto Sans SC',
        data: boldFont,
        style: 'normal',
        weight: 800,
      },
    ],
  });
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImageUrl(page).segments,
  }));
}
