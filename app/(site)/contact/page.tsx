import { getDocumentBySlug } from "outstatic/server";
import { marked } from "marked";

export default async function ContactPage() {
  const page = getDocumentBySlug("pages", "contact", ["title", "content"]);
  const content = page?.content ? await marked(page.content) : "";

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">
        {page?.title ?? "Contact Us"}
      </h1>
      {content ? (
        <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <p className="text-slate-500">Contact information coming soon.</p>
      )}
    </div>
  );
}
