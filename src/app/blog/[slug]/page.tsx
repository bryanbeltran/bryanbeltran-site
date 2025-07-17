import { getPostHtml, getPostSlugs } from "@/lib/markdown";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({
    slug: slug.replace(/\.md$/, ""),
  }));
}

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostHtml(params.slug);

  if (!post) return notFound();

  const { meta, contentHtml } = post;

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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostHtml(params.slug);

  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.description ?? "Read more from Bryan Beltran",
  };
}
