import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, s as spreadAttributes, u as unescapeHTML, d as renderComponent, m as maybeRenderHead, i as defineScriptVars, h as renderSlot, F as Fragment, j as renderTransition, k as renderHead } from './astro/server_cuKTT-NG.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro$l = createAstro("https://astroship.web3templates.com");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$k = createAstro("https://astroship.web3templates.com");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$j = createAstro("https://astroship.web3templates.com");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$i = createAstro("https://astroship.web3templates.com");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$h = createAstro("https://astroship.web3templates.com");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$g = createAstro("https://astroship.web3templates.com");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$f = createAstro("https://astroship.web3templates.com");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$e = createAstro("https://astroship.web3templates.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="hidden md:block bg-gray-900 text-backgroundSec pt-12 pb-8"> <div class="container mx-auto px-6 md:px-12 lg:px-[38px]"> <div class="grid grid-cols-1 md:grid-cols-12 gap-8"> <!-- Contact Section --> <div class="col-span-6 max-w-96"> <h3 class="text-lg mb-4">Contact</h3> <p class="text-sm">
Unit no.110, A Wing, 1st Floor,<br> Kailash Business Park, Vikhroli(West),<br>
Mumbai – 400078
</p> <p class="mt-6 text-sm">Contact : +91 9495469520 / +91 7356301924</p> <p class="mt-1 text-sm">Mail : business@g-1.tech.com</p> </div> <!-- Company Section --> <div class="col-span-2"> <h3 class="text-lg mb-4">Company</h3> <ul> <li class="mb-2"> <a href="/about" class="hover:underline text-base">About Us</a> </li> <li class="mb-2"> <a href="/careers" class="hover:underline text-base">Careers</a> </li> <li class="mb-2"> <a href="/resources" class="hover:underline text-base">Resources</a> </li> <li class="mb-2"> <a href="/contact" class="hover:underline text-base">Contact Us</a> </li> </ul> </div> <!-- Legal Section --> <div class="col-span-2"> <h3 class="text-lg mb-4">Legal</h3> <ul> <li class="mb-2"> <a href="/cookies-policy" class="hover:underline text-base">Cookies Policy</a> </li> <li class="mb-2"> <a href="/privacy-policy" class="hover:underline text-base">Privacy Policy</a> </li> <li class="mb-2"> <a href="/terms-of-service" class="hover:underline text-base">Terms of Service</a> </li> </ul> </div> <!-- Icons Section --> <div class="flex items-center flex-col col-span-2"> <div class="flex items-center"> <img src="/assets/logo-white.webp" alt="Logo" class="h-14"> </div> <div class="flex items-center space-x-4 pt-8"> <a href="#" class="hover:underline"><img src="/assets/linkedin.svg" alt="LinkedIn" class="h-6"></a> <a href="#" class="hover:underline"><img src="/assets/whatsapp.svg" alt="WhatsApp" class="h-6"></a> <a href="#" class="hover:underline"><img src="/assets/x.svg" alt="Other" class="h-6"></a> </div> </div> </div> </div> </footer> <footer class="block md:hidden bg-gray-900 text-backgroundSec py-10"> <div class="container mx-auto px-6 md:px-12 lg:px-20"> <!-- Company Section --> <div class="col-span-2"> <h3 class="text-lg text-primary mb-3">Company</h3> <ul> <li class="mb-2 text-base"> <a href="/about" class="hover:underline">About Us</a> </li> <li class="mb-2 text-base"> <a href="/careers" class="hover:underline">Careers</a> </li> <li class="mb-2 text-base"> <a href="/resources" class="hover:underline">Resources</a> </li> <li class="mb-2 text-base"> <a href="/contact" class="hover:underline">Contact Us</a> </li> </ul> </div> <!-- Contact Section --> <div class="col-span-6 max-w-96"> <h3 class="text-lg mb-4 mt-8 text-primary">Contact</h3> <p class="text-sm leading-8">
Unit no.110, A Wing, 1st Floor,<br> Kailash Business Park, Vikhroli(West),<br>
Mumbai – 400078
</p> <p class="mt-7 text-sm">Contact : +91 9495469520</p> <p class="ml-[68px] mt-2 text-sm">+91 7356301924</p> <p class="mt-2 text-sm">Mail : business@g-1.tech.com</p> </div> <!-- Icons Section --> <div class="flex pt-8 py-4 flex-col mb-3"> <h3 class="text-lg text-primary mb-2">Follow Us</h3> <div class="flex gap-8"> <a href="#" class="hover:underline"><img src="/assets/linkedin.svg" alt="LinkedIn" class="h-6"></a> <a href="#" class="hover:underline"><img src="/assets/whatsapp.svg" alt="WhatsApp" class="h-6"></a> <a href="#" class="hover:underline"><img src="/assets/x.svg" alt="Other" class="h-6"></a> </div> </div> <!-- Legal Section --> <div class="flex flex-row xs:gap-10 gap-3.5 justify-center text-center border-t-2 border-background pt-6"> <a href="/cookies-policy" class="hover:underline text-xs">Cookies Policy</a> <a href="/privacy-policy" class="hover:underline text-xs">Privacy Policy</a> <a href="/terms-of-service" class="hover:underline text-xs">Terms of Service</a> </div> </div> </footer>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/components/footer.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Astro$d = createAstro("https://astroship.web3templates.com");
const $$Astronav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Astronav;
  const { closeOnClick = false } = Astro2.props;
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", " <script>(function(){", '\n["DOMContentLoaded", "astro:after-swap"].forEach((event) => {\n  document.addEventListener(event, addListeners);\n});\n\n// Function to clone and replace elements\nfunction cloneAndReplace(element) {\n  const clone = element.cloneNode(true);\n  element.parentNode.replaceChild(clone, element);\n}\n\nfunction addListeners() {\n  // Clean up existing listeners\n  const oldMenuButton = document.getElementById("astronav-menu");\n  if (oldMenuButton) {\n    cloneAndReplace(oldMenuButton);\n  }\n\n  const oldDropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  oldDropdownMenus.forEach((menu) => {\n    cloneAndReplace(menu);\n  });\n\n  // Mobile nav toggle\n  const menuButton = document.getElementById("astronav-menu");\n  menuButton && menuButton.addEventListener("click", toggleMobileNav);\n\n  // Dropdown menus\n  const dropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  dropdownMenus.forEach((menu) => {\n    const button = menu.querySelector("button");\n    button &&\n      button.addEventListener("click", (event) =>\n        toggleDropdownMenu(event, menu, dropdownMenus)\n      );\n\n    // Handle Submenu Dropdowns\n    const dropDownSubmenus = menu.querySelectorAll(\n      ".astronav-dropdown-submenu"\n    );\n\n    dropDownSubmenus.forEach((submenu) => {\n      const submenuButton = submenu.querySelector("button");\n      submenuButton &&\n        submenuButton.addEventListener("click", (event) => {\n          event.stopImmediatePropagation();\n          toggleSubmenuDropdown(event, submenu);\n        });\n    });\n  });\n\n  // Clicking away from dropdown will remove the dropdown class\n  document.addEventListener("click", closeAllDropdowns);\n\n  if (closeOnClick) {\n    handleCloseOnClick();\n  }\n}\n\nfunction toggleMobileNav() {\n  [...document.querySelectorAll(".astronav-toggle")].forEach((el) => {\n    el.classList.toggle("hidden");\n  });\n}\n\nfunction toggleDropdownMenu(event, menu, dropdownMenus) {\n  toggleMenu(menu);\n\n  // Close one dropdown when selecting another\n  Array.from(dropdownMenus)\n    .filter((el) => el !== menu && !menu.contains(el))\n    .forEach(closeMenu);\n\n  event.stopPropagation();\n}\n\nfunction toggleSubmenuDropdown(event, submenu) {\n  event.stopPropagation();\n  toggleMenu(submenu);\n\n  // Close sibling submenus at the same nesting level\n  const siblingSubmenus = submenu\n    .closest(".astronav-dropdown")\n    .querySelectorAll(".astronav-dropdown-submenu");\n  Array.from(siblingSubmenus)\n    .filter((el) => el !== submenu && !submenu.contains(el))\n    .forEach(closeMenu);\n}\n\nfunction closeAllDropdowns(event) {\n  const dropdownMenus = document.querySelectorAll(".dropdown-toggle");\n  const dropdownParent = document.querySelectorAll(\n    ".astronav-dropdown, .astronav-dropdown-submenu"\n  );\n  const isButtonInsideDropdown = [\n    ...document.querySelectorAll(\n      ".astronav-dropdown button, .astronav-dropdown-submenu button, #astronav-menu"\n    ),\n  ].some((button) => button.contains(event.target));\n  if (!isButtonInsideDropdown) {\n    dropdownMenus.forEach((d) => {\n      // console.log("I ran", d);\n      // if (!d.contains(event.target)) {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.classList.add("hidden");\n      // }\n    });\n    dropdownParent.forEach((d) => {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.setAttribute("aria-expanded", "false");\n    });\n  }\n}\n\nfunction toggleMenu(menu) {\n  menu.classList.toggle("open");\n  const expanded = menu.getAttribute("aria-expanded") === "true";\n  menu.setAttribute("aria-expanded", expanded ? "false" : "true");\n  menu.hasAttribute("open")\n    ? menu.removeAttribute("open")\n    : menu.setAttribute("open", "");\n\n  const dropdownToggle = menu.querySelector(".dropdown-toggle");\n  const dropdownExpanded = dropdownToggle.getAttribute("aria-expanded");\n  dropdownToggle.classList.toggle("hidden");\n  dropdownToggle.setAttribute(\n    "aria-expanded",\n    dropdownExpanded === "true" ? "false" : "true"\n  );\n}\n\nfunction closeMenu(menu) {\n  // console.log("closing", menu);\n  menu.classList.remove("open");\n  menu.removeAttribute("open");\n  menu.setAttribute("aria-expanded", "false");\n  const dropdownToggles = menu.querySelectorAll(".dropdown-toggle");\n  dropdownToggles.forEach((toggle) => {\n    toggle.classList.add("hidden");\n    toggle.setAttribute("aria-expanded", "false");\n  });\n}\n\nfunction handleCloseOnClick() {\n  const navMenuItems = document.querySelector(".astronav-items");\n  const navToggle = document.getElementById("astronav-menu");\n  const navLink = navMenuItems && navMenuItems.querySelectorAll("a");\n\n  const MenuIcons = navToggle.querySelectorAll(".astronav-toggle");\n\n  navLink &&\n    navLink.forEach((item) => {\n      item.addEventListener("click", () => {\n        navMenuItems?.classList.add("hidden");\n        MenuIcons.forEach((el) => {\n          el.classList.toggle("hidden");\n        });\n      });\n    });\n}\n})();<\/script>'])), renderSlot($$result, $$slots["default"]), defineScriptVars({ closeOnClick }));
}, "/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/astro-navbar/src/Astronav.astro", void 0);

const $$Astro$c = createAstro("https://astroship.web3templates.com");
const $$MenuIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$MenuIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button id="astronav-menu" aria-label="Toggle Menu"> ${renderSlot($$result, $$slots["default"], renderTemplate` <svg fill="currentColor"${addAttribute([className], "class:list")} width="24" height="24" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"${spreadAttributes(rest)}> <title>Toggle Menu</title> <path class="astronav-close-icon astronav-toggle hidden" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path> <path class="astronav-open-icon astronav-toggle" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path> </svg> `)} </button>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/astro-navbar/src/components/MenuIcon.astro", void 0);

const $$Astro$b = createAstro("https://astroship.web3templates.com");
const $$OpenIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$OpenIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-open-icon astronav-toggle", className], "class:list")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/astro-navbar/src/components/OpenIcon.astro", void 0);

const $$Astro$a = createAstro("https://astroship.web3templates.com");
const $$CloseIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$CloseIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-close-icon astronav-toggle hidden", className], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/astro-navbar/src/components/CloseIcon.astro", void 0);

const $$Astro$9 = createAstro("https://astroship.web3templates.com");
const $$MenuItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$MenuItems;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["astronav-items astronav-toggle", className], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </nav>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/astro-navbar/src/components/MenuItems.astro", void 0);

const $$Astro$8 = createAstro("https://astroship.web3templates.com");
const $$Dropdown$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Dropdown$1;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<menu${addAttribute(["astronav-dropdown", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false">${renderSlot($$result, $$slots["default"])}</menu>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/astro-navbar/src/components/Dropdown.astro", void 0);

const $$Astro$7 = createAstro("https://astroship.web3templates.com");
const $$DropdownSubmenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$DropdownSubmenu;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown-submenu", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/astro-navbar/src/components/DropdownSubmenu.astro", void 0);

const $$Astro$6 = createAstro("https://astroship.web3templates.com");
const $$DropdownItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$DropdownItems;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown dropdown-toggle hidden", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/astro-navbar/src/components/DropdownItems.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$5 = createAstro("https://astroship.web3templates.com");
const $$StickyHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$StickyHeader;
  const {
    scrollY = 100,
    defaultClass = "",
    activeClass = "",
    class: className = "",
    ...rest
  } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "<header", "", "> ", " </header> <script>(function(){", '\nlet scrollPos = 0;\nlet ticking = false;\n\nfunction OnScroll(scrollPos) {\n  const headers = document.querySelectorAll(".astronav-sticky-header");\n  const classArray = activeClass.split(" ");\n  const replaceArray = defaultClass.split(" ");\n\n  headers.forEach((header) => {\n    if (scrollPos > scrollY) {\n      header.classList.remove(...replaceArray);\n      header.classList.add("is-active", ...classArray);\n      header.setAttribute("active", "");\n    }\n    //reduce the scrollY to avoid flickering when scrolling up\n    if (scrollPos < Math.max(scrollY - 40, 10)) {\n      header.classList.remove("is-active", ...classArray);\n      header.classList.add(...replaceArray);\n      header.removeAttribute("active");\n    }\n  });\n}\n\n// Scroll event throttling as per MDN\n// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event\n\ndocument.addEventListener("scroll", (event) => {\n  scrollPos = window.scrollY;\n  if (!ticking) {\n    window.requestAnimationFrame(() => {\n      OnScroll(scrollPos);\n      ticking = false;\n    });\n\n    ticking = true;\n  }\n});\n})();<\/script>'])), maybeRenderHead(), addAttribute(["astronav-sticky-header", className, defaultClass], "class:list"), spreadAttributes(rest), renderSlot($$result, $$slots["default"]), defineScriptVars({ scrollY, defaultClass, activeClass }));
}, "/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/astro-navbar/src/components/StickyHeader.astro", void 0);

const $$Astro$4 = createAstro("https://astroship.web3templates.com");
const $$Dropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { title, lastItem, children, active } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="relative"> ${renderComponent($$result, "DropdownContainer", $$Dropdown$1, { "class": "group" }, { "default": ($$result2) => renderTemplate` <button class="flex items-center gap-1 w-full lg:w-auto lg:pr-3 text-black hover:text-primary"> <span${addAttribute(`text-sm text-center flex align-middle items-center md:my-1 my-0 md:mt-1 mt-2 ${active && "text-secondary"}`, "class")}>${title}</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3 mt-0.5 group-open:rotate-180"> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path> </svg> </button> ${renderComponent($$result2, "DropdownItems", $$DropdownItems, {}, { "default": ($$result3) => renderTemplate` <div${addAttribute([
    "md:absolute w-full md:w-48 z-10",
    lastItem ? "md:right-0 origin-top-right" : "md:left-0 origin-top-left"
  ], "class:list")}> <div class="md:bg-white md:shadow md:border flex flex-col py-4"> ${children.map((item) => renderTemplate`<a${addAttribute(item.path, "href")} class=" text-black hover:text-white hover:bg-primary text-sm px-[16px] py-[8px]"> ${item.title} </a>`)} </div> </div> ` })} ` })} </li>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/components/navbar/dropdown.astro", void 0);

const $$Astro$3 = createAstro("https://astroship.web3templates.com");
const $$Dropdownmobile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Dropdownmobile;
  const { title, lastItem, children } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="relative"> <span class="text-xl text-center flex align-middle items-center font-medium">${title}</span> <div${addAttribute([
    "lg:absolute w-full lg:w-48 z-10",
    lastItem ? "lg:right-0 origin-top-right" : "lg:left-0 origin-top-left"
  ], "class:list")}> <div class="p-2 lg:py-2 lg:bg-white lg:rounded-md lg:shadow lg:border flex flex-col"> ${children.map((item) => renderTemplate`<a${addAttribute(item.path, "href")} class=" text-background leading-5 hover:text-secondary text-base py-2 px-4"> ${item.title} </a>`)} </div> </div> </li>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/components/navbar/dropdownmobile.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://astroship.web3templates.com");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  const menuitems = [
    {
      title: "Home",
      path: "/",
      key: ""
    },
    {
      title: "Who we are",
      path: "/who-we-are",
      key: "who-we-are"
    },
    {
      title: "What we do",
      path: "#",
      key: "what-we-do",
      children: [
        { title: "Habitat Solutions", path: "/what-we-do/habitat-solutions" },
        {
          title: "Critical Structures",
          path: "/what-we-do/critical-structures"
        },
        {
          title: "Engineering Solutions",
          path: "/what-we-do/engineering-solutions"
        }
      ]
    }
  ];
  const menuItemsMobile = [
    {
      title: "Careers",
      path: "/"
    },
    {
      title: "Resources",
      path: "/"
    },
    {
      title: "Privacy Policy",
      path: "/"
    },
    {
      title: "Terms of Service",
      path: "/"
    }
  ];
  const pathname = new URL(Astro2.request.url).pathname;
  const currentPath = pathname.slice(1);
  console.log("current path", currentPath);
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header class="fixed top-0 left-0 w-full flex flex-col md:flex-row justify-between md:items-center mx-auto lg:px-20 py-4 md:py-6 bg-white z-50 md:px-5 md:border-0 border-b-4 border-primary"> ', ' </header> <script>\n  document.addEventListener("DOMContentLoaded", function () {\n    const navbarToggle = document.getElementById("navbar-toggle");\n    const closeNavbar = document.getElementById("close-navbar");\n    const navbar = document.getElementById("navbar");\n\n    function toggleDrawer(event) {\n      navbar.classList.toggle("translate-x-full");\n    }\n\n    function handleClickOutside(event) {\n      if (!navbar.contains(event.target) && !navbarToggle.contains(event.target)) {\n        if (!navbar.classList.contains("translate-x-full")) {\n          navbar.classList.add("translate-x-full");\n        }\n      }\n    }\n\n    navbarToggle.addEventListener("click", toggleDrawer);\n    closeNavbar.addEventListener("click", toggleDrawer);\n    document.addEventListener("click", handleClickOutside);\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Astronav", $$Astronav, {}, { "default": ($$result2) => renderTemplate` <div class="flex w-full md:w-auto items-center justify-between px-4"> <a href="/" class="text-lg"> <img src="/assets/logo-black.webp" class="w-16 lg:w-20"> </a> <button class="block md:hidden navbar-toggle" id="navbar-toggle" type="button" onclick="toggleDrawer()"> <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <title>Toggle Menu</title> <path class="astronav-close-icon astronav-toggle hidden" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path> <path class="astronav-open-icon astronav-toggle" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path> </svg> </button> </div> <div id="navbar" class="md:hidden navbar-mobile fixed top-0 left-0 w-3/4 h-full bg-white transform -translate-x-full transition-transform duration-300 z-20"> <button id="close-navbar" type="button" onclick="toggleDrawer()" class="block md:hidden absolute top-4 right-4 text-xl">&times;</button> <ul class="flex flex-col md:flex-row md:gap-3 pl-10"> ${menuitems.map((item, index) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${item.children && renderTemplate`<div${addAttribute(`hidden md:block`, "class")}> ${renderComponent($$result3, "Dropdown", $$Dropdown, { "title": item.title, "active": currentPath.includes(item.key), "children": item.children, "lastItem": index === menuitems.length - 1 })} </div>
              <div class="block md:hidden mt-6"> ${renderComponent($$result3, "DropdownMobile", $$Dropdownmobile, { "title": item.title, "children": item.children, "lastItem": index === menuitems.length - 1 })} </div>`}${!item.children && renderTemplate`<li> <a${addAttribute(item.path, "href")}${addAttribute(`flex md:pr-3 border-r-1 items-center text-sm leading-6 border-r-[1px] border-blue-900 hover:text-primary ${currentPath === item.key ? "text-secondary" : "text-background"}`, "class")}> <span class="text-xl md:text-sm my-0 md:my-1 mt-6 font-medium  md:mt-1"> ${item.title} </span> </a> </li>`}` })}`)} <div class="md:hidden flex items-center gap-4"> <a href="/contact" class="flex lg:px-3 items-center text-black hover:text-blue-500"> <span class="text-xl mt-2 font-medium"> Contact Us</span> </a> </div> <div class="block md:hidden mt-6">${menuItemsMobile.map((item, index) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <li> <a${addAttribute(item.path, "href")} class="flex lg:px-3 items-center  py-1 text-background font-light text-sm leading-8 hover:text-blue-500"> <span class=""> ${item.title}</span> </a> </li> ` })}`)}</div> </ul> </div> <div class="flex items-center"> ${renderComponent($$result2, "MenuItems", $$MenuItems, { "class": "hidden w-full md:w-auto mt-5 md:flex md:mt-0 text-sm border-t-4 border-primary md:border-t-0 h-svh md:h-auto md:mr-3" }, { "default": ($$result3) => renderTemplate` <ul class="flex flex-col md:flex-row md:gap-3 pl-10"> ${menuitems.map((item, index) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${item.children && renderTemplate`<div${addAttribute(`hidden md:block`, "class")}> ${renderComponent($$result4, "Dropdown", $$Dropdown, { "title": item.title, "active": currentPath.includes(item.key), "children": item.children, "lastItem": index === menuitems.length - 1 })} </div>
                <div class="block md:hidden mt-6"> ${renderComponent($$result4, "DropdownMobile", $$Dropdownmobile, { "title": item.title, "children": item.children, "lastItem": index === menuitems.length - 1 })} </div>`}${!item.children && renderTemplate`<li> <a${addAttribute(item.path, "href")}${addAttribute(`flex md:pr-3 border-r-1 items-center text-sm leading-6 border-r-[1px] border-blue-900 hover:text-primary ${currentPath === item.key ? "text-secondary" : "text-background"}`, "class")}> <span class="text-xl md:text-sm my-0 md:my-1 mt-6 font-medium  md:mt-1"> ${item.title} </span> </a> </li>`}` })}`)} <div class="md:hidden flex items-center gap-4"> <a href="/contact" class="flex lg:px-3 items-center text-black hover:text-blue-500"> <span class="text-xl mt-2 font-medium"> Contact Us</span> </a> </div> <div class="block md:hidden mt-6">${menuItemsMobile.map((item, index) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate` <li> <a${addAttribute(item.path, "href")} class="flex lg:px-3 items-center  py-1 text-background font-light text-sm leading-8 hover:text-blue-500"> <span class=""> ${item.title}</span> </a> </li> ` })}`)}</div> </ul> ` })} <div class="hidden md:flex items-center gap-4"> <a href="/contact" class="text-white text-md md:text-base font-medium px-3 md:px-8 py-1 md:py-[8px] border-2 border-secondary bg-secondary inline-block transition duration-300 ease-in-out hover:bg-primary hover:border-primary cursor-pointer font-condensed">
CONTACT US
</a> </div> </div> ` }));
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/components/navbar/navbar.astro", void 0);

const $$Astro$1 = createAstro("https://astroship.web3templates.com");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site).toString();
  const resolvedImageWithDomain = new URL(
    "/opengraph.webp",
    Astro2.site
  ).toString();
  const { title } = Astro2.props;
  const makeTitle = title || "G1 Offshore";
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"><!-- <link rel="preload" as="image" href={src} alt="Hero" /> -->', '<script src="https://www.google.com/recaptcha/api.js" async defer><\/script><script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"><\/script>', "", "</head> <body", "> ", ' <main class="md:pt-[96px] pt-[72px]"', "> ", " </main> ", "  </body> </html>"])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SEO", $$SEO, { "title": makeTitle, "description": "GI has established an outstanding reputation in executing complex offshore and maritime projects, serving both the Indian Navy and in the offshore infrastructure space.", "canonical": canonicalURL, "twitter": {
    creator: "@surjithctly",
    site: "@web3templates",
    card: "summary_large_image"
  }, "openGraph": {
    basic: {
      url: canonicalURL,
      type: "website",
      title: `G1 Offshore - Serving Bharat and its Allies`,
      image: resolvedImageWithDomain
    },
    image: {
      alt: "Astroship Homepage Screenshot"
    }
  } }), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), addAttribute(renderTransition($$result, "4vhbyfto", "none"), "data-astro-transition-scope"), renderComponent($$result, "Navbar", $$Navbar, {}), addAttribute(renderTransition($$result, "hvl3seze", "fade"), "data-astro-transition-scope"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/layouts/Layout.astro", "self");

export { $$Layout as $ };
