import Link from "next/link";
import { getPostSlugs } from "@/lib/markdown";

export default function BlogPage() {
  const slugs = getPostSlugs(); // no await

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {slugs.map((slug) => {
          const postSlug = slug.replace(/\\.md$/, "");
          return (
            <li key={slug}>
              <Link
                href={`/blog/${postSlug}`}
                className="text-xl text-blue-600 hover:underline"
              >
                {postSlug}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
