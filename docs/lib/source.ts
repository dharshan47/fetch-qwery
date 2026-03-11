import { docs, blog as blogCollection } from 'fumadocs-mdx:collections/server';
import { type InferPageType, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export const blog = loader({
  baseUrl: '/blog',
  source: blogCollection.toFumadocsSource(),
});

export function generateStaticParams() {
  return source.getPages().map((page: InferPageType<typeof source>) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `/og/docs/${segments.join('/')}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  // @ts-ignore
  const processed = await page.data.getText?.('processed') ?? '';

  return `# ${page.data.title}\n\n${processed}`;
}
