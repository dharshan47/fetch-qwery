import { blog } from '@/lib/source';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = blog.getPage(slug);

  if (!page) notFound();

  const { title, description, date, body } = page.data as any;
  const MDX = body;

  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <h1 className="mb-4 text-4xl font-bold">{title}</h1>
        {description && (
          <p className="text-xl text-muted-foreground mb-8">
            {description}
          </p>
        )}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-12">
           {date && (
            <span>{new Date(date).toLocaleDateString()}</span>
          )}
        </div>
        <MDX components={getMDXComponents()} />
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  return blog.getPages().map((page) => ({
    slug: page.slugs,
  }));
}
