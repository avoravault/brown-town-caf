import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { publishedPosts } from "@/data/site";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const p = publishedPosts().find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData: p }) => ({ meta: p ? [
    { title: `${p.title} — Brown Town Café` },
    { name: "description", content: p.excerpt },
    { property: "og:title", content: p.title },
    { property: "og:description", content: p.excerpt },
  ] : [{ title: "Unavailable — Brown Town Café" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const p = Route.useLoaderData();
    return (
      <article className="mx-auto max-w-[800px] px-6 pb-24 pt-[184px] max-md:pt-36">
        <Link to="/news" className="hover:text-caramel">← Back to News</Link>
        <p className="mt-8 text-sm text-muted-foreground">{p.date}</p>
        <h1 className="h2 mt-2">{p.title}</h1>
        {p.image && <img src={p.image} alt="" className="mt-10 aspect-video w-full rounded-3xl object-cover" />}
        <div className="mt-10 space-y-5">{p.body.map((b, i) => <p key={i}>{b}</p>)}</div>
      </article>
    );
  },
});
