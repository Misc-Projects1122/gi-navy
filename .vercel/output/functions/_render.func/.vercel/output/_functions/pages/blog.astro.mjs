/* empty css                                 */
import { a as createComponent, r as renderTemplate } from '../chunks/astro/server_cuKTT-NG.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ---
import { getCollection } from "astro:content";
import { Picture } from "astro:assets";
import Layout from "@layouts/Layout.astro";
import Container from "@components/container.astro";
import Sectionhead from "@components/sectionhead.astro";

// Filter blog entries with 'draft: false' & date before current date
const publishedBlogEntries = await getCollection("blog", ({ data }) => {
  return !data.draft && data.publishDate < new Date();
});

// Sort content entries by publication date
publishedBlogEntries.sort(function (a, b) {
  return b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
});
---

<Layout title="Blog">
  <Container>
    <Sectionhead>
      <Fragment slot="title">Our Blog</Fragment>
      <Fragment slot="desc">
        We write about building startups and thoughts going on our mind.
      </Fragment>
    </Sectionhead>
    <main class="mt-16">
      <ul class="grid gap-16 max-w-4xl mx-auto">
        {
          publishedBlogEntries.map((blogPostEntry, index) => (
            <li>
              <a href={\`/blog/\${blogPostEntry.slug}\`}>
                <div class="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
                  <Picture
                    src={blogPostEntry.data.image.src}
                    alt={blogPostEntry.data.image.alt}
                    sizes="(max-width: 800px) 100vw, 800px"
                    width={800}
                    height={600}
                    loading={index <= 2 ? "eager" : "lazy"}
                    decoding={index <= 2 ? "sync" : "async"}
                    class="w-full rounded-md object-cover object-center bg-white"
                  />
                  <div>
                    <span class="text-blue-400 uppercase tracking-wider text-sm font-medium">
                      {blogPostEntry.data.category}
                    </span>

                    <h2 class="text-3xl font-semibold leading-snug tracking-tight mt-1 ">
                      {blogPostEntry.data.title}
                    </h2>

                    <div class="flex gap-2 mt-3">
                      <span class="text-gray-400">
                        {blogPostEntry.data.author}
                      </span>
                      <span class="text-gray-400">• </span>
                      <time
                        class="text-gray-400"
                        datetime={blogPostEntry.data.publishDate.toISOString()}>
                        {blogPostEntry.data.publishDate.toDateString()}
                      </time>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))
        }
      </ul>
    </main>
  </Container>
</Layout> -->`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/blog.astro", void 0);

const $$file = "/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
