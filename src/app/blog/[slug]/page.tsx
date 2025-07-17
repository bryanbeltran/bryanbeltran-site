import { getPostHtml, getPostSlugs } from "@/lib/markdown";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return getPostSlugs().map((slug) => ({
    slug: slug.replace(/\.md$/, ""),
  }));
}

export default async function PostPage({ params }: PageProps) {
  const { meta, contentHtml } = await getPostHtml(params.slug);

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
      <p className="text-sm text-gray-500">{meta.date}</p>
      <article
        className="prose mt-6 prose-img:rounded-lg"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}
