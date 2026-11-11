import { createFileRoute, Link } from "@tanstack/react-router";
import { publishedPosts } from "@/data/site";

export const Route = createFileRoute("/news/")({
  head: () => ({ meta: [
    { title: "News — Brown Town Café" },
    { name: "description", content: "News and updates from Brown Town Café in Mirdif." },
    { property: "og:title", content: "News — Brown Town Café" },
    { property: "og:description", content: "Updates from Brown Town Café." },
  ] }),
  component: () => {
    const posts = publishedPosts();
    return (
      <>
        <section className="bg-espresso pb-24 pt-[184px] text-center text-ivory max-md:pt-36"><h1 className="h1">News</h1></section>
        <section className="container-x section-y">
          {posts.length === 0 ? (
            <p className="h3 text-center">Our first stories are brewing. Check back soon.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {posts.map((p) => (
                <Link key={p.slug} to="/news/$slug" params={{ slug: p.slug }} className="zoom-img block">
                  <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-tint">{p.image && <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover" />}</div>
                  <p className="mt-4 text-sm text-muted-foreground">{p.date}</p>
                  <h2 className="card-title h5 mt-1">{p.title}</h2>
                </Link>
              ))}
            </div>
          )}
        </section>
      </>
    );
  },
});
