import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, h as renderSlot } from './astro/server_cuKTT-NG.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["max-w-screen-xl mx-auto px-5", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/components/container.astro", void 0);

export { $$Container as $ };
