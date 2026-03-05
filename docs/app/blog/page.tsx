import Link from "next/link";
import { blog } from "@/lib/source";

export default async function BlogIndex() {
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date((b.data as any).date ?? 0).getTime() -
      new Date((a.data as any).date ?? 0).getTime(),
  );

  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Blog</h1>
      <div className="grid gap-8">
        {posts.map((post) => {
          const data = post.data as any;
          return (
            <article
              key={post.url}
              className="group relative flex flex-col space-y-2 rounded-lg border p-6 transition-shadow hover:shadow-md"
            >
              <h2 className="text-2xl font-bold">
                <Link href={post.url} className="after:absolute after:inset-0">
                  {data.title}
                </Link>
              </h2>
              {data.description && (
                <p className="text-muted-foreground">{data.description}</p>
              )}
              {data.date && (
                <p className="text-sm text-muted-foreground">
                  {new Date(data.date).toLocaleDateString()}
                </p>
              )}
            </article>
          );
        })}
      </div>
    </main>
  );
}
