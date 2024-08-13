/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../../chunks/astro/server_cuKTT-NG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BdMBmk4Z.mjs';
import 'clsx';
import { e as enginnerItemCards } from '../../chunks/cards_DzhFrJ2S.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_G2WeIkvr.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$EngineerItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EngineerItem;
  const { imgSrc, altText, title, desc, bgColor, textColor, descColor } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-aos="fade-up" class="flex flex-col items-center text-left"> <img${addAttribute(imgSrc, "src")}${addAttribute(altText, "alt")} class="w-10/12 md:w-full h-auto object-cover"> <div${addAttribute(`${bgColor} py-[13px] px-[24px] ${descColor} w-10/12 md:w-full`, "class")}> <h2${addAttribute(`text-sm md:text-xl font-semibold ${textColor}`, "class")}>${title}</h2> <p class="text-[10px] md:text-sm">${desc}</p> </div> </div>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/screens/what-we-do/engineering-solutions/engineerItem.astro", void 0);

const $$EngineeringSolutions = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbItems = [
    { title: "Home", path: "/" },
    { title: "What we do", path: "/" },
    { title: "Engineering solutions", isActive: true }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Engineering solutions" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-gray-900"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} <!-- Engineering solutions --> <section id="leading" class="max-w-2xl mx-auto space-y-6 md:space-y-8 mb-[32px] md:mb-[16px] mt-[32px] md:mt-[64px] px-[37px] md:px-0"> <div class="text-[13px] xxs:text-[16px] md:text-[36px] font-semibold md:font-medium text-justify flex justify-center md:mb-[24px]"> <div data-aos="fade-up" class="">Engineering Solutions</div> </div> <p data-aos="fade-up" class="text-justify text-[13px] xxs:text-sm md:text-base font-light">
We offer comprehensive engineering and technological solutions across a
        range of specialties, including naval construction, safety engineering,
        thermal insulation, fabrication, and testing. This versatility enables
        us to execute critical projects on various Indian Navy ships and
        commercial vessels.
</p> <p data-aos="fade-up" class="text-justify text-sm md:text-base font-light">
In recent years, we have provided extensive services to several naval
        ships, addressing a variety of engineering challenges.
</p> </section> <!-- Ships --> <div class="block md:hidden container mx-auto"> <div class="grid grid-cols-1 py-8 md:py-16 md:grid-cols-3"> ${enginnerItemCards.map((card) => renderTemplate`${renderComponent($$result2, "SolutionItem", $$EngineerItem, { ...card })}`)} </div> </div> <div class="hidden md:block"> <div class="grid grid-cols-1 py-12 md:grid-cols-3"> ${enginnerItemCards.map((card) => renderTemplate`${renderComponent($$result2, "SolutionItem", $$EngineerItem, { ...card })}`)} </div> </div> </div> ` })}`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/what-we-do/engineering-solutions.astro", void 0);

const $$file = "/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/what-we-do/engineering-solutions.astro";
const $$url = "/what-we-do/engineering-solutions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EngineeringSolutions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
