/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate } from '../chunks/astro/server_cuKTT-NG.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`<!-- ---
import { getCollection } from "astro:content";
import { Picture } from "astro:assets";
import Layout from "@layouts/Layout.astro";
import Container from "@components/container.astro";
import Sectionhead from "@components/sectionhead.astro";

// Filter team entries with 'draft: false' & date before current date
const publishedTeamMembers = await getCollection("team", ({ data }) => {
  return !data.draft && data.publishDate < new Date();
});
---

<Layout title="About">
  <Container>
    <Sectionhead>
      <Fragment slot="title">About</Fragment>
      <Fragment slot="desc">We are a small passionate team.</Fragment>
    </Sectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Empowering the world with Astro.
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        We're a multi-cultural team from around the world! We come from diverse
        backgrounds, bringing different personalities, experiences and skills to
        the job. This is what makes our team so special.
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12">
      {
        publishedTeamMembers.map((teamMemberEntry) => (
          <div class="group">
            <div class="w-full aspect-square">
              <Picture
                src={teamMemberEntry.data.avatar.src}
                alt={teamMemberEntry.data.avatar.alt}
                sizes="(max-width: 800px) 100vw, 400px"
                width={400}
                height={400}
                class="w-full rounded-md rounded transition group-hover:-translate-y-1 group-hover:shadow-xl bg-white object-cover object-center aspect-square"
              />
            </div>

            <div class="mt-4 text-center">
              <h2 class="text-lg text-gray-800">{teamMemberEntry.data.name}</h2>
              <h3 class="text-sm text-slate-500">
                {teamMemberEntry.data.title}
              </h3>
            </div>
          </div>
        ))
      }
    </div>
  </Container>
</Layout> -->`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/about.astro", void 0);

const $$file = "/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
