import { getDocumentBySlug } from "outstatic/server";
import { marked } from "marked";

export default async function HomePage() {
  const page = getDocumentBySlug("pages", "home", ["title", "content", "description"]);
  const content = page?.content ? await marked(page.content) : "";

  return (
    <div>
      <section className="bg-gradient-to-b from-blue-900 to-blue-700 text-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            {page?.title ?? "Celebrating the World's Rivers"}
          </h1>
          {page?.description && (
            <p className="text-xl text-blue-100 leading-relaxed">{page.description}</p>
          )}
        </div>
      </section>

      {content && (
        <section className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
        </section>
      )}
    </div>
  );
}
