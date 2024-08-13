import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute, F as Fragment } from './astro/server_cuKTT-NG.mjs';
import 'kleur/colors';

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-background text-xs py-2 pl-4 md:pl-24 text-white flex items-center"> ${items.map((item, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${item.path ? renderTemplate`<a${addAttribute(item.path, "href")}> <span${addAttribute(item.isActive ? "text-primary" : "", "class")}> ${item.title} </span> </a>` : renderTemplate`<span${addAttribute(item.isActive ? "text-primary" : "", "class")}>${item.title}</span>`}${index < items.length - 1 && renderTemplate`<img src="/assets/keyboard-arrow-right.svg" class="w-4">`}` })}`)} </div>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/components/Breadcrumbs.astro", void 0);

export { $$Breadcrumbs as $ };
