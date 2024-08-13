/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, d as renderComponent } from '../../chunks/astro/server_cuKTT-NG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BdMBmk4Z.mjs';
import 'clsx';
import { c as criticalItemCards } from '../../chunks/cards_DzhFrJ2S.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_G2WeIkvr.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro = createAstro("https://astroship.web3templates.com");
const $$CriticalItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CriticalItem;
  const { imgSrc, altText, title, desc, index } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div data-aos="fade-up" class="bg-background pt-6 md:p-4 shadow-lg"> <img', "", ' class="h-48 w-full object-cover px-6 md:px-0"> <h2 class="text-[13px] xs:text-[15px] md:text-sm font-semibold mt-4 text-primary md:px-0 px-6"> ', ' </h2> <p class="mt-2 px-6 md:block hidden md:px-0 text-[12px] text-justify leading-5"', "> ", ' </p> <div class="h-8 border-t-2 flex justify-center border-[#0b2438] mt-3 items-center md:hidden"', '> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="keyboard-down-arrow" fill="#01BDB7"><path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"></path></svg> </div> </div> <script>\n  document.addEventListener("DOMContentLoaded", () => {\n    /* Ensure DOM is fully loaded */\n    for (let index = 1; index <= 5; index++) {\n      // Adjust the upper limit as needed\n      const text = document.getElementById(`text${index}`);\n      const toggleButton = document.getElementById(`toggle-button${index}`);\n\n      toggleButton.addEventListener("click", () => {\n        if (text.classList.contains("hidden")) {\n          text.classList.remove("hidden"); /* Remove hidden class */\n          text.classList.add("expanded"); /* Add expanded class */\n          toggleButton.innerHTML =\n            \'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="keyboard-up-arrow" fill="#01BDB7"><path d="M8.12 14.71L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.39-.39-1.02-.39-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z"></path></svg>\';\n        } else {\n          text.classList.add("hidden"); /* Add hidden class */\n          text.classList.remove("expanded"); /* Remove expanded class */\n          toggleButton.innerHTML =\n            \'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="keyboard-down-arrow" fill="#01BDB7"><path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"></path></svg>\';\n        }\n      });\n    }\n  });\n<\/script>'], ["", '<div data-aos="fade-up" class="bg-background pt-6 md:p-4 shadow-lg"> <img', "", ' class="h-48 w-full object-cover px-6 md:px-0"> <h2 class="text-[13px] xs:text-[15px] md:text-sm font-semibold mt-4 text-primary md:px-0 px-6"> ', ' </h2> <p class="mt-2 px-6 md:block hidden md:px-0 text-[12px] text-justify leading-5"', "> ", ' </p> <div class="h-8 border-t-2 flex justify-center border-[#0b2438] mt-3 items-center md:hidden"', '> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="keyboard-down-arrow" fill="#01BDB7"><path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"></path></svg> </div> </div> <script>\n  document.addEventListener("DOMContentLoaded", () => {\n    /* Ensure DOM is fully loaded */\n    for (let index = 1; index <= 5; index++) {\n      // Adjust the upper limit as needed\n      const text = document.getElementById(\\`text\\${index}\\`);\n      const toggleButton = document.getElementById(\\`toggle-button\\${index}\\`);\n\n      toggleButton.addEventListener("click", () => {\n        if (text.classList.contains("hidden")) {\n          text.classList.remove("hidden"); /* Remove hidden class */\n          text.classList.add("expanded"); /* Add expanded class */\n          toggleButton.innerHTML =\n            \'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="keyboard-up-arrow" fill="#01BDB7"><path d="M8.12 14.71L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.39-.39-1.02-.39-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z"></path></svg>\';\n        } else {\n          text.classList.add("hidden"); /* Add hidden class */\n          text.classList.remove("expanded"); /* Remove expanded class */\n          toggleButton.innerHTML =\n            \'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="keyboard-down-arrow" fill="#01BDB7"><path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"></path></svg>\';\n        }\n      });\n    }\n  });\n<\/script>'])), maybeRenderHead(), addAttribute(imgSrc, "src"), addAttribute(altText, "alt"), title, addAttribute(`text${index}`, "id"), desc, addAttribute(`toggle-button${index}`, "id"));
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/screens/what-we-do/critical-structures/criticalItem.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$CriticalStructures = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbItems = [
    { title: "Home", path: "/" },
    { title: "What we do", path: "/" },
    { title: "Critical Structures", isActive: true }
  ];
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  for (let index = 1; index <= 5; index++) {\n    const text = document.getElementById(`text${index}`);\n    const toggleButton = document.getElementById(`toggle-button${index}`);\n\n    toggleButton.addEventListener("click", () => {\n      if (text.classList.contains("hidden")) {\n        text.classList.remove("hidden");\n        toggleButton.innerHTML =\n          \'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="keyboard-up-arrow" fill="#01BDB7"><path d="M8.12 14.71L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.39-.39-1.02-.39-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z"></path></svg>\';\n      } else {\n        text.classList.add("hidden");\n        toggleButton.innerHTML =\n          \'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="keyboard-down-arrow" fill="#01BDB7"><path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"></path></svg>\';\n      }\n    });\n  }\n<\/script>'], ["", ' <script>\n  for (let index = 1; index <= 5; index++) {\n    const text = document.getElementById(\\`text\\${index}\\`);\n    const toggleButton = document.getElementById(\\`toggle-button\\${index}\\`);\n\n    toggleButton.addEventListener("click", () => {\n      if (text.classList.contains("hidden")) {\n        text.classList.remove("hidden");\n        toggleButton.innerHTML =\n          \'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="keyboard-up-arrow" fill="#01BDB7"><path d="M8.12 14.71L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.39-.39-1.02-.39-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z"></path></svg>\';\n      } else {\n        text.classList.add("hidden");\n        toggleButton.innerHTML =\n          \'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="keyboard-down-arrow" fill="#01BDB7"><path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"></path></svg>\';\n      }\n    });\n  }\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="border-b-4 md:border-y-4 border-primary"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} <img src="/assets/critical-structures.webp" alt="Customized Habitat Design" class="h-full w-full"> </div>  <section id="leading" class="max-w-2xl lg:max-w-2xl mx-auto space-y-6 md:space-y-8 mb-[32px] md:mb-[77px] mt-[32px] md:mt-[64px] px-[37px] md:px-0"> <div data-aos="fade-up" class="text-[13px] xxs:text-[16px] md:text-[36px] font-semibold md:font-medium text-justify flex justify-center md:mb-[45px]"> <div class="">Pioneers in</div> <div class="ml-2 text-secondary">Critical Structures</div> </div> <p data-aos="fade-up" class="text-justify text-[13px] xxs:text-sm md:text-base font-light"> <span class="font-serifa font-bold">GI</span> Tech is your premier partner in advancing naval operations throughthe
<span class="text-secondary font-medium">
design, fabrication, and installation of critical structures,
          particularly helidecks,
</span>
tailored to meet the rigorous demands of modern naval vessels. As a trusted
        leader in habitat solutions for the Navy, we have a track record of excellence,
        innovation, and reliability in delivering cutting-edge infrastructure solutions
        that enhance operational capabilities and readiness.
</p> <p data-aos="fade-up" class="text-justify text-sm md:text-base font-light">
Our commitment to
<span class="text-secondary font-medium">
precision engineering, uncompromising quality, and unwavering
          dedication to customer satisfaction
</span>
sets us apart as the preferred choice for designing, fabricating, and installing
        critical structures for Navy vessels, with particular distinguished capabilities
        for lightweight aluminium helidecks.
</p> </section>  <section id="why gi" class="bg-dark text-white relative overflow-hidden pt-[32px] mb:pt-[72px] pb-[32px] md:pb-[84px] px-[24px] xl:px-[200px]"> <!-- <img
        src="/assets/web1.svg"
        alt="Customized Habitat Design"
        class="w-full absolute z-0 opacity-[2%]"
      /> --> <div data-aos="fade-up" class="font-semibold px-4 py-2 text-white z-10 text-[20px] md:text-[40px] xl:ml-[20px] lg:ml-[40px] md:ml-16 font-condensed">
Why <span class="font-serifa">GI</span> for critical structures ?
<div class="border-b-4 border-primary w-[20vw] pt-[6px] md:pt-4"></div> </div> <div class="max-w-6xl mx-4 md:mx-16 lg:mx-8 xl:mx-auto pt-4 md:pt-14"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> ${criticalItemCards.slice(0, 3).map((item) => renderTemplate`${renderComponent($$result2, "CriticalItem", $$CriticalItem, { ...item })}`)} </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:mt-12 mt-8 lg:max-w-[66%] mx-auto"> ${criticalItemCards.slice(3, 5).map((item) => renderTemplate`${renderComponent($$result2, "CriticalItem", $$CriticalItem, { ...item })}`)} </div> </div> </section>  <section id="upgrading habitability" class="max-w-4xl mx-10 lg:mx-auto flex flex-col-reverse md:flex-row-reverse mb-11 md:mb-20 mt-8 md:mt-16 bgiwhite relative"> <div> <div data-aos="fade-up" class="hidden md:block text-xs md:text-4xl text-white md:text-black font-bold lg:mt-12 absolute md:relative bottom-40 xxs:bottom-36 xs:bottom-32 md:bottom-0 z-50 font-condensed"> <span class="font-serifa">GI</span>: Delivering Unmatched Structural Solutions
</div> <p data-aos="fade-up" class="text-justify font-light md:mb-8 mt-3 md:mt-8 text-sm md:text-base">
Discover how GI’s expertise in helideck structures enabled Hindustan
          Shipyard to equip the cutting edge Nistar class Diving Support Vessels
          with lightweight helideck. A first in class feature , this provides
          Indian Navy with flight ops capability to support their mission across
          different environments.
</p> <a data-aos="fade-up" href="/nistar-class-dsv" class="hidden md:inline-block text-secondary border-2 border-secondary px-3 md:px-8 py-1 md:py-[8px] text-sm md:text-base font-condensed font-semibold transition duration-300 ease-in-out hover:bg-primary cursor-pointer">
LEARN MORE
</a> </div> <img src="/assets/IAC-Vikrant.webp" alt="Customized Habitat Design" class="hidden md:block w-full md:w-[50%] h-[50%] md:mr-10 rounded-lg" data-aos="fade-up"> <div class="flex md:hidden justify-center relative group w-full mb-2 lg:mb-0 lg:h-[400px] xl:h-[500px] overflow-hidden"> <img src="/assets/vikrant2.webp" alt="Customized Habitat Design" class="w-12/12 lg:w-full lg:object-fill transition-transform duration-300 group-hover:scale-105"> <div class="text-[13px] xxs:text-[15px] font-semibold absolute bottom-8 left-2 xxs:left-6 md:left-32 lg:left-6 text-white transition-all duration-300 group-hover:opacity-0"> <span class="font-serifa">GI</span> Tech: Delivering Unmatched
</div> <div class="text-[11px] xxs:text-[13px] font-semibold absolute bottom-2 md:bottom-6 left-2 xxs:left-6 md:left-32 lg:left-6 text-white transition-all duration-300 group-hover:opacity-0">
Structural Solutions
</div> </div> </section> ` }));
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/what-we-do/critical-structures.astro", void 0);

const $$file = "/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/what-we-do/critical-structures.astro";
const $$url = "/what-we-do/critical-structures";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CriticalStructures,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
