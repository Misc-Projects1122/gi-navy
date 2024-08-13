/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../../chunks/astro/server_cuKTT-NG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_C0YCuAP6.mjs';
import 'clsx';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_oo8R5nI5.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$OurServices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OurServices;
  const {
    imgSrc,
    altText,
    title,
    desc,
    parentStyle,
    textStyle,
    imgStyle,
    index
  } = Astro2.props;
  console.log(index);
  return renderTemplate`${maybeRenderHead()}<div data-aos="fade-up"${addAttribute(parentStyle, "class")}> <div${addAttribute(imgStyle, "class")}> <img${addAttribute(imgSrc, "src")}${addAttribute(altText, "alt")} class="h-[80px] md:h-[120px] w-[120px] m-2 drop-shadow-primary"> <div class="flex items-center"> <h2 class="block md:hidden text-[15px] font-semibold mb-3 text-primary xs:pr-5 md:pr-0 xxs:pl-0 pl-3"> ${title} </h2> </div> </div> <div${addAttribute(textStyle, "class")}> <h2 class="hidden md:block text-[15px] font-semibold mb-3 text-primary"> ${title} </h2> <p class="text-justify text-[13px] truncate md:hidden"${addAttribute(`short-description${index}`, "id")}> ${desc.split(" ").slice(0, 20).join(" ")} </p> <p class="text-justify text-[13px] hidden md:block"${addAttribute(`full-description${index}`, "id")}> ${desc} </p> <div class="md:hidden flex items-center mt-4"${addAttribute(`toggle-button${index}`, "id")}> <span class="text-teal-400 focus:outline-none"> Read more </span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="keyboard-down-arrow" fill="#01BDB7"><path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"></path></svg> </div> </div> </div>`;
}, "/Users/veestar/veestar/gi-navy/src/screens/habitat-solutions/ourServices.astro", void 0);

const cards = [
  {
    index: 1,
    imgSrc: "/assets/service1.svg",
    altText: "Customized Habitat Design",
    title: "Customized Habitat Design",
    desc: "We specialize in creating bespoke habitat solutions that align seamlessly with the specific needs and operational requirements of the Navy. Whether its optimizing space utilization, enhancing sustainability, or integrating advanced technologies, our designs are meticulously crafted to exceed expectations",
    // direction: "left",
    // gredientDirection: "r",
    // spaceDirection: "ml",
    parentStyle: "relative flex flex-col md:flex-row p-5 md:ml-20 lg:ml-0 flex md:items-center md:bg-gradient-to-r from-[#0E1D2B] from-25% bg-gradient-to-b from-[#0E1D2B] from-25% ",
    textStyle: "text-left md:mt-0 mt-3",
    imgStyle: "md:absolute flex item md:flex-shrink-0 md:-left-36 lg:-left-36"
  },
  {
    index: 2,
    imgSrc: "/assets/service2.svg",
    altText: "Construction and Installation",
    title: "Construction and Installation",
    desc: "We prioritize precision and quality craftsmanship in constructing and installing habitats, ensuring utmost diligence and attention to detail. From modular living quarters to advanced workspace configurations, we ensure timely delivery while adhering to the highest standards of safety and compliance.",
    // direction: "right",
    // gredientDirection: "l",
    // spaceDirection: "mr",
    parentStyle: "relative flex flex-col md:flex-row p-5 md:mr-20 lg:mr-0 flex md:items-center md:bg-gradient-to-l from-[#0E1D2B] from-25% bg-gradient-to-b from-[#0E1D2B] from-25%",
    textStyle: "text-left md:mt-0 mt-3",
    imgStyle: "md:absolute flex item md:flex-shrink-0 md:-right-36 lg:-right-36"
  },
  {
    index: 3,
    imgSrc: "/assets/service3.svg",
    altText: "Innovation and Sustainability",
    title: "Innovation and Sustainability",
    desc: "As champions of innovation and sustainability, we leverage cutting-edge technologies and best practices to optimize energy efficiency, resource utilization, and environmental stewardship across all our habitat solutions. From renewable energy systems to eco-friendly materials, we strive to minimize our ecological footprint while maximizing operational effectiveness.",
    // direction: "left",
    // gredientDirection: "r",
    // spaceDirection: "ml",
    parentStyle: "relative flex flex-col md:flex-row p-5 md:ml-20 lg:ml-0 flex md:items-center md:bg-gradient-to-r from-[#0E1D2B] from-25% bg-gradient-to-b from-[#0E1D2B] from-25%",
    textStyle: "text-left md:mt-0 mt-3",
    imgStyle: "md:absolute flex item md:flex-shrink-0 md:-left-36 lg:-left-36"
  },
  {
    index: 4,
    imgSrc: "/assets/service4.svg",
    altText: "Responsive Support and Collaboration",
    title: "Responsive Support and Collaboration",
    desc: "Our dedicated team remains steadfastly committed to providing responsive support and collaboration at every stage of the engagement. Whether it’s addressing emergent needs, facilitating seamless transitions, or fostering open communication, we are always available to serve as trusted partners in achieving mission success.",
    // direction: "right",
    // gredientDirection: "l",
    // spaceDirection: "mr",
    parentStyle: "relative flex flex-col md:flex-row p-5 md:mr-20 lg:mr-0 flex md:items-center md:bg-gradient-to-l from-[#0E1D2B] from-25% bg-gradient-to-b from-[#0E1D2B] from-25%",
    textStyle: "text-left md:mt-0 mt-3",
    imgStyle: "md:absolute flex item md:flex-shrink-0 md:-right-36 lg:-right-36"
  },
  {
    index: 5,
    imgSrc: "/assets/service5.svg",
    altText: "Maintenance and Upkeep",
    title: "Maintenance and Upkeep",
    desc: "Our commitment to long-term partnerships extends beyond the initial deployment. We offer comprehensive maintenance and upkeep services to ensure the continued functionality, durability, and resilience of naval habitats, minimizing downtime and maximizing operational readiness.",
    // direction: "left",
    // gredientDirection: "r",
    // spaceDirection: "ml",
    parentStyle: "relative flex flex-col md:flex-row p-5 md:ml-20 lg:ml-0 flex md:items-center md:bg-gradient-to-r from-[#0E1D2B] from-25% bg-gradient-to-b from-[#0E1D2B] from-25%",
    textStyle: "text-left md:mt-0 mt-3",
    imgStyle: "md:absolute flex item md:flex-shrink-0 md:-left-36 lg:-left-36"
  }
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$HabitatSolutions = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbItems = [
    { title: "Home", path: "/" },
    { title: "What we do", path: "/" },
    { title: "Habitat Solutions", isActive: true }
  ];
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  for (let index = 1; index <= 5; index++) {\n    const short = document.getElementById(`short-description${index}`);\n    const full = document.getElementById(`full-description${index}`);\n    const toggleButton = document.getElementById(`toggle-button${index}`);\n\n    toggleButton.addEventListener("click", () => {\n      if (short.classList.contains("hidden")) {\n        short.classList.remove("hidden");\n        full.classList.add("hidden");\n        toggleButton.innerHTML =\n          \'Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="keyboard-down-arrow" fill="#01BDB7"><path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"></path></svg>\';\n      } else {\n        short.classList.add("hidden");\n        full.classList.remove("hidden");\n        toggleButton.innerHTML =\n          \'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="keyboard-up-arrow" fill="#01BDB7"><path d="M8.12 14.71L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.39-.39-1.02-.39-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z"></path></svg>\';\n      }\n    });\n  }\n<\/script>'], ["", ' <script>\n  for (let index = 1; index <= 5; index++) {\n    const short = document.getElementById(\\`short-description\\${index}\\`);\n    const full = document.getElementById(\\`full-description\\${index}\\`);\n    const toggleButton = document.getElementById(\\`toggle-button\\${index}\\`);\n\n    toggleButton.addEventListener("click", () => {\n      if (short.classList.contains("hidden")) {\n        short.classList.remove("hidden");\n        full.classList.add("hidden");\n        toggleButton.innerHTML =\n          \'Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="keyboard-down-arrow" fill="#01BDB7"><path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"></path></svg>\';\n      } else {\n        short.classList.add("hidden");\n        full.classList.remove("hidden");\n        toggleButton.innerHTML =\n          \'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="keyboard-up-arrow" fill="#01BDB7"><path d="M8.12 14.71L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.39-.39-1.02-.39-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z"></path></svg>\';\n      }\n    });\n  }\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Our Services" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="border-b-4 md:border-y-4 border-primary"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} <div class="flex bg-textPrimary"> <img src="/habitate/background-left.webp" alt="Customized Habitat Design" class="h-full w-1/2 border-r-2 border-dark"> <img src="/habitate/background-right.webp" alt="Customized Habitat Design" class="h-full w-1/2 border-l-2 border-dark"> </div> </div>  <section id="leading" class="max-w-2xl lg:max-w-2xl mx-auto space-y-6 md:space-y-8 mb-[32px] md:mb-[77px] mt-[32px] md:mt-[64px] px-[37px] md:px-0"> <div data-aos="fade-up" class="text-[13px] xxs:text-[16px] md:text-[36px] font-semibold md:font-medium text-justify flex justify-center md:mb-[45px]"> <div class="">Leading the Way in</div> <div class="ml-2 text-secondary">Habitat Services</div> </div> <p data-aos="fade-up" class="text-justify text-[13px] xxs:text-sm md:text-base font-light"> <span class="text-secondary font-medium"><span class="font-serifa font-bold">GI</span>-Tech is a premier habitat service
          provider</span> catering specifically to the needs of the esteemed Navy. With an unwavering
        commitment to excellence, innovation, and service, we stand ready to support
        and enhance the operational efficiency and effectiveness of naval operations
        through our comprehensive habitat solutions.
</p> <p data-aos="fade-up" class="text-justify text-sm md:text-base font-light">
At <span class="font-serifa font-bold">GI</span>-Tech, we recognize the critical
        importance of maintaining optimal living and working environments for
        naval personnel, <span class="text-secondary font-medium">ensuring their comfort, safety, and productivity</span>. Our team of seasoned professionals brings a wealth of expertise and
        experience in designing, constructing, and managing habitats tailored to
        the unique requirements of naval installations, vessels, and facilities.
</p> </section>  <section id="our services" class="bg-dark text-white relative overflow-hidden pt-[32px] md:pt-[72px] pb-[32px] md:pb-[88px] px-[14px]"> <img src="/assets/web1.svg" alt="background texture" class="w-full absolute z-0 opacity-[3%]"> <div data-aos="fade-up" class="font-semibold font-condensed pr-4 text-white z-10 text-[20px] md:text-[40px] ml-[8%] xs:ml-[6%] md:ml-[2%] lg:ml-[7%] xl:ml-[20%] mb-[6px] md:mb-[16px]">
Our Services
</div> <div data-aos="fade-up" class="h-[2px] md:h-1 w-[25%] md:w-[20%] bg-primary md:mb-[22px] ml-[8%] xs:ml-[6%] md:ml-[2%] lg:ml-[7%] xl:ml-[20%]"></div> <div class="max-w-2xl mx-auto p-6 space-y-8 z-10 md:mt-7"> ${cards.map((card) => renderTemplate`${renderComponent($$result2, "OurServices", $$OurServices, { ...card })}`)} </div> </section>  <section id="upgrading habitability" class="max-w-4xl mx-10 lg:mx-auto flex flex-col-reverse md:flex-row mb-11 md:mb-20 mt-8 md:mt-16 bgiwhite relative"> <div> <div data-aos="fade-up" class="hidden md:block text-xs md:text-4xl text-white md:text-black font-bold lg:mt-12 absolute md:relative bottom-40 xxs:bottom-36 xs:bottom-32 md:bottom-0 font-condensed">
Upgrading Habitability: A Game-Changing Partnership with <span class="font-serifa">GI</span> </div> <p data-aos="fade-up" class="text-justify font-light md:mb-8 mt-3 md:mt-8 text-sm md:text-base">
Learn how <span class="font-serifa font-bold">GI</span>'s habitat
          expertise enabled the Indian Navy to ensure the best accommodation in
          the flagship aircraft carrier INS Vikrant , thus ehancing their
          operational capabilities by ensuring utmost safety and comfort for the
          crew.
</p> <a data-aos="fade-up" href="/ins-vikrant" class="hidden md:inline-block text-secondary border-2 border-secondary px-3 md:px-8 py-1 md:py-[8px] text-sm md:text-base font-condensed font-semibold transition duration-300 ease-in-out hover:bg-primary hover:text-white hover:border-white cursor-pointer">
LEARN MORE
</a> </div> <img src="/assets/IAC-Vikrant.webp" alt="Customized Habitat Design" class="hidden md:block w-full md:w-[50%] h-[50%] md:ml-10 rounded-lg" data-aos="fade-up"> <div class="flex md:hidden justify-center relative group w-full mb-2 lg:mb-0 lg:h-[400px] xl:h-[500px] overflow-hidden"> <img src="/assets/IAC-Vikrant.webp" alt="Customized Habitat Design" class="w-12/12 lg:w-full lg:object-fill transition-transform duration-300 group-hover:scale-105"> <div class="text-[13px] xxs:text-[15px] font-semibold absolute bottom-8 left-2 xxs:left-6 md:left-32 lg:left-6 text-white transition-all duration-300 group-hover:opacity-0">
Upgrading Habitability:
</div> <div class="text-[11px] xxs:text-[13px] font-semibold absolute bottom-2 md:bottom-6 left-2 xxs:left-6 md:left-32 lg:left-6 text-white transition-all duration-300 group-hover:opacity-0">
A Game-Changing Partnership with <span class="font-serifa">GI</span> </div> </div> </section> ` }));
}, "/Users/veestar/veestar/gi-navy/src/pages/what-we-do/habitat-solutions.astro", void 0);

const $$file = "/Users/veestar/veestar/gi-navy/src/pages/what-we-do/habitat-solutions.astro";
const $$url = "/what-we-do/habitat-solutions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HabitatSolutions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
