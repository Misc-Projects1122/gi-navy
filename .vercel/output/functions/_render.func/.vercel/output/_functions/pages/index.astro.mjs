/* empty css                                 */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, c as createAstro, d as renderComponent } from '../chunks/astro/server_cuKTT-NG.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_BdMBmk4Z.mjs';
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="md:relative md:border-y-4 md:border-primary" data-astro-cid-zi4ldr3x> <div class="carousel_container" data-astro-cid-zi4ldr3x> <div class="flex flex-nowrap overflow-hidden border-b-2 border-primary md:border-b-0" data-astro-cid-zi4ldr3x> <div class="carousel_item" data-astro-cid-zi4ldr3x> <img src="/hero/heroBanner1.webp" class="h-full w-full" data-astro-cid-zi4ldr3x> </div> <div class="carousel_item" data-astro-cid-zi4ldr3x> <img src="/hero/heroBanner2.webp" class="h-full w-full" data-astro-cid-zi4ldr3x> </div> <div class="carousel_item" data-astro-cid-zi4ldr3x> <img src="/hero/heroBanner3.webp" class="h-full w-full" data-astro-cid-zi4ldr3x> </div> <div class="carousel_item" data-astro-cid-zi4ldr3x> <img src="/hero/heroBanner4.webp" class="h-full w-full" data-astro-cid-zi4ldr3x> </div> </div> </div> <div class="md:absolute inset-0 bg-black opacity-50" data-astro-cid-zi4ldr3x></div> <div class="md:absolute inset-0 flex items-center justify-start md:px-16" data-astro-cid-zi4ldr3x> <div data-aos="fade-zoom-in" class="flex flex-col items-center md:items-start text-white text-center md:text-left py-4 md:py-0 px-7 md:px-0 bg-dark md:bg-transparent max-w-xl" data-astro-cid-zi4ldr3x> <h1 class="text-base xxs:text-lg md:text-5xl font-semibold font-condensed" data-astro-cid-zi4ldr3x>\nPioneering Engineering, Delivering Excellence\n</h1> <p class="mt-4 text-xs md:text-lg lg:text-sm font-normal md:font-medium md:w-3/4 carousel_text" data-astro-cid-zi4ldr3x>\nMission-driven, customer-centric, multi-domain maritime solutions using\n        cutting-edge technologies to envision and safeguard the fleet of the\n        future.\n</p> <div data-aos="fade-zoom-in" class="mt-5 md:mt-8 space-x-4" data-astro-cid-zi4ldr3x> <a href="/who-we-are" class="text-white border-2 border-white px-3 md:px-8 py-1 md:py-[8px] md:text-base inline-block font-condensed font-semibold transition duration-300 ease-in-out hover:bg-primary cursor-pointer" data-astro-cid-zi4ldr3x>\nLEARN MORE\n</a> <a href="/contact" class="text-white text-md md:text-base font-medium px-3 md:px-8 py-1 md:py-[8px] border-2 border-secondary bg-secondary inline-block transition duration-300 ease-in-out hover:bg-primary hover:border-primary cursor-pointer font-condensed" data-astro-cid-zi4ldr3x>\nCONTACT US\n</a> </div> </div> </div> </div>  <script>\n  const carouselItems = document.querySelectorAll(".carousel_item");\n\n  let i = 0; // start with the first image\n  let delay = 1000; // initial delay for the first image\n\n  // Function to move carousel items\n  const moveCarousel = () => {\n    Array.from(carouselItems).forEach((item, index) => {\n      if (i < carouselItems.length) {\n        item.style.transform = `translateX(-${i * 100}%)`;\n      }\n    });\n\n    if (i < carouselItems.length - 1) {\n      i++;\n    } else {\n      i = 0;\n    }\n\n    // Adjust the delay for the next interval\n    if (i === 1) {\n      delay = 4000; // 2 seconds for the second and third images\n    } else {\n      delay = 3000; // 1 second for other images\n    }\n    setTimeout(moveCarousel, delay);\n  };\n\n  // Start the carousel\n  setTimeout(moveCarousel, delay);\n<\/script>'], ["", '<div class="md:relative md:border-y-4 md:border-primary" data-astro-cid-zi4ldr3x> <div class="carousel_container" data-astro-cid-zi4ldr3x> <div class="flex flex-nowrap overflow-hidden border-b-2 border-primary md:border-b-0" data-astro-cid-zi4ldr3x> <div class="carousel_item" data-astro-cid-zi4ldr3x> <img src="/hero/heroBanner1.webp" class="h-full w-full" data-astro-cid-zi4ldr3x> </div> <div class="carousel_item" data-astro-cid-zi4ldr3x> <img src="/hero/heroBanner2.webp" class="h-full w-full" data-astro-cid-zi4ldr3x> </div> <div class="carousel_item" data-astro-cid-zi4ldr3x> <img src="/hero/heroBanner3.webp" class="h-full w-full" data-astro-cid-zi4ldr3x> </div> <div class="carousel_item" data-astro-cid-zi4ldr3x> <img src="/hero/heroBanner4.webp" class="h-full w-full" data-astro-cid-zi4ldr3x> </div> </div> </div> <div class="md:absolute inset-0 bg-black opacity-50" data-astro-cid-zi4ldr3x></div> <div class="md:absolute inset-0 flex items-center justify-start md:px-16" data-astro-cid-zi4ldr3x> <div data-aos="fade-zoom-in" class="flex flex-col items-center md:items-start text-white text-center md:text-left py-4 md:py-0 px-7 md:px-0 bg-dark md:bg-transparent max-w-xl" data-astro-cid-zi4ldr3x> <h1 class="text-base xxs:text-lg md:text-5xl font-semibold font-condensed" data-astro-cid-zi4ldr3x>\nPioneering Engineering, Delivering Excellence\n</h1> <p class="mt-4 text-xs md:text-lg lg:text-sm font-normal md:font-medium md:w-3/4 carousel_text" data-astro-cid-zi4ldr3x>\nMission-driven, customer-centric, multi-domain maritime solutions using\n        cutting-edge technologies to envision and safeguard the fleet of the\n        future.\n</p> <div data-aos="fade-zoom-in" class="mt-5 md:mt-8 space-x-4" data-astro-cid-zi4ldr3x> <a href="/who-we-are" class="text-white border-2 border-white px-3 md:px-8 py-1 md:py-[8px] md:text-base inline-block font-condensed font-semibold transition duration-300 ease-in-out hover:bg-primary cursor-pointer" data-astro-cid-zi4ldr3x>\nLEARN MORE\n</a> <a href="/contact" class="text-white text-md md:text-base font-medium px-3 md:px-8 py-1 md:py-[8px] border-2 border-secondary bg-secondary inline-block transition duration-300 ease-in-out hover:bg-primary hover:border-primary cursor-pointer font-condensed" data-astro-cid-zi4ldr3x>\nCONTACT US\n</a> </div> </div> </div> </div>  <script>\n  const carouselItems = document.querySelectorAll(".carousel_item");\n\n  let i = 0; // start with the first image\n  let delay = 1000; // initial delay for the first image\n\n  // Function to move carousel items\n  const moveCarousel = () => {\n    Array.from(carouselItems).forEach((item, index) => {\n      if (i < carouselItems.length) {\n        item.style.transform = \\`translateX(-\\${i * 100}%)\\`;\n      }\n    });\n\n    if (i < carouselItems.length - 1) {\n      i++;\n    } else {\n      i = 0;\n    }\n\n    // Adjust the delay for the next interval\n    if (i === 1) {\n      delay = 4000; // 2 seconds for the second and third images\n    } else {\n      delay = 3000; // 1 second for other images\n    }\n    setTimeout(moveCarousel, delay);\n  };\n\n  // Start the carousel\n  setTimeout(moveCarousel, delay);\n<\/script>'])), maybeRenderHead());
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/components/hero.astro", void 0);

const $$OurPartners = createComponent(($$result, $$props, $$slots) => {
  const partners = [
    { src: "/alliance/alliance1.webp", alt: "Partner 1" },
    { src: "/alliance/alliance3.webp", alt: "Partner 3" },
    { src: "/alliance/alliance4.webp", alt: "Partner 4" },
    { src: "/alliance/alliance5.webp", alt: "Partner 5" },
    { src: "/alliance/alliance6.webp", alt: "Partner 6" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-backgroundSec lg:bg-white py-6 md:py-[74px]"> <div class="max-w-6xl mx-auto text-center"> <h2 data-aos="fade-up" class="text-xl md:text-4xl font-medium mb-2 md:mb-6 font-condensed">
OUR PARTNERS
</h2> <p data-aos="fade-up" class="text-md md:text-[22px] text-gray-600 mb-6 md:mb-9">
Joining hands with the top leaders in the industry
</p> <div data-aos="fade-up" class="flex flex-wrap justify-center items-center gap-8 xs:gap-10 md:gap-[60px]"> ${partners.map((partner) => renderTemplate`<div class="flex justify-center items-center"> <img${addAttribute(partner.src, "src")}${addAttribute(partner.alt, "alt")} class="h-7 xxs:h-10 md:h-20"> </div>`)} </div> </div> </section>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/components/ourPartners.astro", void 0);

const $$ServingBharat = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center bg-white w-full text-center mt-[32px] mb-[32px] md:mb-[88px] md:mt-[74px]"> <div data-aos="fade-up" class="w-10/12 lg:w-1/2"> <h2 class="text-[26px] xxs:text-[30px] xs:text-[36px] lg:text-[52px] xl:text-[64px] font-medium text-textPrimary mb-[24px] md:mb-[48px] font-condensed">
Serving <span class="text-secondary font-condensed">Bharat</span> and its Allies
</h2> <div> <p class="text-textPrimary mb-4 text-justify text-[12px] xxs:text-[14px] xs:text-[16px] md:text-xl md:leading-[30px]">
With nearly two decades of experience, <span class="font-serifa">GI </span> Tech has established an
        outstanding reputation in executing complex offshore and maritime
        projects, serving both the Indian Navy and in the offshore
        infrastructure space.
</p> <p class="text-textPrimary text-justify text-[12px] xxs:text-[14px] xs:text-[16px] md:text-xl md:leading-[30px]">
Since 2017, <span class="font-serifa">GI</span> has been committed to supporting
        the Indian Navy, delivering significant projects such as enhancing habitability
        on the INS Vikrant, multi-role naval vessels, and critical infrastructure.
        Our focus is on expanding our service offerings to armed forces through advanced
        engineering and cutting-edge technological innovations.
</p> </div> </div> </section>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/components/servingBharat.astro", void 0);

const $$Astro$1 = createAstro("https://astroship.web3templates.com");
const $$NavyCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavyCard;
  const { image, title, description, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center relative group w-full mb-2 lg:mb-0 lg:h-[400px] xl:h-[500px] overflow-hidden"> <a${addAttribute(link, "href")} class="block md:hidden w-9/12 lg:w-full lg:object-fill transition-transform duration-300 group-hover:scale-105"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class=""> </a> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="hidden md:block w-9/12 lg:w-full lg:object-fill transition-transform duration-300 group-hover:scale-105"> <div class="hidden md:flex absolute inset-0 bg-black bg-opacity-50 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> <div class="hidden md:flex absolute inset-0 bg-primary bg-opacity-80 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10/12 lg:w-full left-16 lg:left-0"> <div class="flex flex-col items-center text-white p-6"> <div class="text-2xl font-semibold mb-[34px] font-condensed w-2/3"> ${title} </div> ${description && renderTemplate`<p class="mb-[42px] text-sm font-medium w-4/5 text-justify"> <span class="font-serifa font-bold">GI’s </span> ${description} </p>`} <a${addAttribute(link, "href")} class="text-white border-2 border-white px-3 md:px-8 py-1 md:py-[8px] text-md md:text-base inline-block font-condensed font-semibold transition duration-300 ease-in-out hover:bg-primary cursor-pointer">
LEARN MORE
</a> </div> </div> <div class="text-[15px] md:text-2xl lg:text-lg xl:text-2xl font-semibold absolute bottom-2 md:bottom-6 left-12 xxs:left-16 md:left-32 lg:left-6 text-white transition-all duration-300 group-hover:opacity-0 font-condensed"> ${title} </div> </div>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/components/navyCard.astro", void 0);

const $$ProjectsGrid = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      image: "/boat1.webp",
      title: "Habitability for INS Vikrant",
      description: "habitat expertise enabled the Indian Navy to ensure the best accommodation in the flagship aircraft carrier INS Vikrant, thus enhancing their operational capabilities by ensuring utmost safety and comfort for the crew.",
      link: "/ins-vikrant"
    },
    {
      image: "/boat2.webp",
      title: "Critical structures for Naval Support Vessels",
      description: "helideck expertise enabled Hindustan Shipyard to equip cutting-edge Nistar class Diving Support Vessels with lightweight decks, enhancing Indian Navy flight operations across diverse environments.",
      link: "/nistar-class-dsv"
    },
    {
      image: "/boat3.webp",
      title: "Engineering Solutions",
      description: "proficiency in naval design and engineering has empowered us to successfully execute numerous complex projects across various sectors for the Indian Navy.",
      link: "/what-we-do/engineering-solutions"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class=""> <div class="w-full text-center"> <h2 data-aos="fade-up" class="hidden lg:block text-xl md:text-3xl text-gray-800 my-10 md:mt-[72px] md:mb-[48px]">
Finding <span class="text-secondary"> elegant solutions</span> to complex challenges
</h2> <h2 class="block lg:hidden text-xl md:text-3xl text-gray-800 my-8 md:mt-[72px] md:mb-[48px]"> <span class="text-secondary">Elegant solutions</span> to complex challenges
</h2> <div class="lg:flex w-[100vw] mb-8 md:mb-0"> ${cards.map((card) => renderTemplate`${renderComponent($$result, "NavyCard", $$NavyCard, { ...card })}`)} </div> </div> </section>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/components/projectsGrid.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$NavySection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="relative bg-cover bg-center text-white py-[34px] md:py-12 lg:py-20 bg-black" style="background-image: url(\'/india-map-background.webp\');"> <div class="relative max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center px-10 lg:px-16"> <div data-aos="fade-up" class="lg:w-2/3 mt-10 lg:mt-0"> <h2 class="hidden lg:block text-[40px] font-semibold mb-3 leading-tight font-condensed">\nOfficial Solutions Provider: Indian Navy\n</h2> <div class="hidden lg:block border-b-4 border-primary w-[50%] mb-8"></div> <p class="mb-6 text-[13px] md:text-[16px] leading-relaxed text-justify">\nOur dedication and accomplishments were formally acknowledged when we\n        attained the prestigious Indian Navy vendor approval on the 24th of May\n        2023. This significant milestone signifies our recognition as a trusted\n        and authorized partner, empowering us to serve all four Naval Commands:\n</p> <ul id="naval-list" class="mb-6 text-[13px] md:text-[16px] leading-relaxed font-semibold"> <li id="western-command" class="mb-2 cursor-pointer hover:underline">\nWestern Naval Command - Mumbai\n</li> <li id="eastern-command" class="mb-2 cursor-pointer hover:underline">\nEastern Naval Command - Visakhapatnam\n</li> <li id="southern-command" class="mb-2 cursor-pointer hover:underline">\nSouthern Naval Command - Kochi\n</li> <li id="tri-services-command" class="cursor-pointer hover:underline">\nTri-services Command - Port Blair\n</li> </ul> <p data-aos="fade-up" class="text-[13px] md:text-[16px] leading-relaxed text-justify">\nThis underscores our comprehensive reach and steadfast commitment to\n        bolstering the Indian Navy across diverse geographical locations.\n</p> </div> <div data-aos="fade-up"> <h2 class="block lg:hidden text-xl font-semibold mb-3 leading-tight font-condensed">\nOfficial Solutions Provider: Indian Navy\n</h2> <div class="block lg:hidden border-b-4 border-teal-400 w-[50%] mb-4"></div> <div class="w-full mt-8 lg:mt-0 flex justify-center relative"> <img src="/india-map.webp" alt="Indian Navy Commands" class="w-full lg:w-3/4"> <svg id="icon-eastern-command" class="location-icon h-9 w-9 absolute bottom-[105px] right-[85px] xxs:bottom-[128px] xxs:right-[108px] xs:bottom-[148px] xs:right-[132px] md:bottom-[300px] md:right-[280px] lg:bottom-[170px] lg:right-[220px] xl:bottom-[185px] xl:right-60" width="25" height="36" viewBox="0 0 25 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.4926 0C5.6041 0 0 5.60492 0 12.4936C0 19.1246 11.3348 34.6168 11.8174 35.2728L12.2678 35.8858C12.3205 35.9579 12.4044 36 12.4926 36C12.5822 36 12.6656 35.9579 12.7188 35.8858L13.1689 35.2728C13.6518 34.6168 24.9863 19.1246 24.9863 12.4936C24.9863 5.60492 19.3813 0 12.4926 0ZM12.4926 8.01842C14.9608 8.01842 16.9678 10.0255 16.9678 12.4936C16.9678 14.9604 14.9607 16.9688 12.4926 16.9688C10.0259 16.9688 8.01742 14.9604 8.01742 12.4936C8.01742 10.0255 10.0258 8.01842 12.4926 8.01842Z" fill="white"></path> </svg> <svg id="icon-western-command" class="location-icon h-9 w-9 absolute bottom-[100px] left-[25px] xxs:bottom-[135px] xxs:left-[32px] xs:bottom-[160px] xs:left-[37px] md:bottom-[352px] md:left-[92px] lg:bottom-[182px] lg:left-[111px] xl:bottom-[192px] xl:left-[123px]" width="25" height="36" viewBox="0 0 25 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.4926 0C5.6041 0 0 5.60492 0 12.4936C0 19.1246 11.3348 34.6168 11.8174 35.2728L12.2678 35.8858C12.3205 35.9579 12.4044 36 12.4926 36C12.5822 36 12.6656 35.9579 12.7188 35.8858L13.1689 35.2728C13.6518 34.6168 24.9863 19.1246 24.9863 12.4936C24.9863 5.60492 19.3813 0 12.4926 0ZM12.4926 8.01842C14.9608 8.01842 16.9678 10.0255 16.9678 12.4936C16.9678 14.9604 14.9607 16.9688 12.4926 16.9688C10.0259 16.9688 8.01742 14.9604 8.01742 12.4936C8.01742 10.0255 10.0258 8.01842 12.4926 8.01842Z" fill="white"></path> </svg> <svg id="icon-southern-command" class="location-icon h-9 w-9 absolute bottom-[25px] left-[52px] xxs:bottom-[40px] xxs:left-[65px] xs:bottom-[45px] xs:left-[82px] md:bottom-[70px] md:left-[184px] lg:bottom-[47px] lg:left-[162px] xl:bottom-[47px] xl:left-[178px]" width="25" height="36" viewBox="0 0 25 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.4926 0C5.6041 0 0 5.60492 0 12.4936C0 19.1246 11.3348 34.6168 11.8174 35.2728L12.2678 35.8858C12.3205 35.9579 12.4044 36 12.4926 36C12.5822 36 12.6656 35.9579 12.7188 35.8858L13.1689 35.2728C13.6518 34.6168 24.9863 19.1246 24.9863 12.4936C24.9863 5.60492 19.3813 0 12.4926 0ZM12.4926 8.01842C14.9608 8.01842 16.9678 10.0255 16.9678 12.4936C16.9678 14.9604 14.9607 16.9688 12.4926 16.9688C10.0259 16.9688 8.01742 14.9604 8.01742 12.4936C8.01742 10.0255 10.0258 8.01842 12.4926 8.01842Z" fill="white"></path> </svg> <svg id="icon-tri-services-command" class="location-icon h-10 w-10 absolute bottom-[45px] right-[20px] xxs:bottom-[55px] xxs:right-[30px] xs:bottom-[65px] xs:right-[39px] md:bottom-[145px] md:right-[85px] lg:bottom-[85px] lg:right-[112px]" width="25" height="36" viewBox="0 0 25 36" fill="red" xmlns="http://www.w3.org/2000/svg"> <path d="M12.4926 0C5.6041 0 0 5.60492 0 12.4936C0 19.1246 11.3348 34.6168 11.8174 35.2728L12.2678 35.8858C12.3205 35.9579 12.4044 36 12.4926 36C12.5822 36 12.6656 35.9579 12.7188 35.8858L13.1689 35.2728C13.6518 34.6168 24.9863 19.1246 24.9863 12.4936C24.9863 5.60492 19.3813 0 12.4926 0ZM12.4926 8.01842C14.9608 8.01842 16.9678 10.0255 16.9678 12.4936C16.9678 14.9604 14.9607 16.9688 12.4926 16.9688C10.0259 16.9688 8.01742 14.9604 8.01742 12.4936C8.01742 10.0255 10.0258 8.01842 12.4926 8.01842Z" fill="white"></path> </svg> </div> </div> </div> </div> <script>\n  window.addEventListener("load", () => {\n    const listItems = document.querySelectorAll("#naval-list li");\n    const icons = document.querySelectorAll(".location-icon");\n\n    listItems.forEach((item) => {\n      item.addEventListener("click", (event) => {\n        event.stopPropagation(); // Prevents the event from bubbling up\n\n        listItems.forEach((li) =>\n          li.classList.remove("text-primary", "font-extrabold")\n        );\n        icons.forEach((icon) => {\n          icon.querySelector("path").setAttribute("fill", "white");\n          icon.classList.remove("animate-pop-up");\n        });\n\n        item.classList.add("text-primary", "font-extrabold");\n        const icon = document.querySelector(`#icon-${item.id}`);\n        icon.querySelector("path").setAttribute("fill", "#01BDB7");\n        icon.classList.add("animate-pop-up");\n      });\n    });\n  });\n<\/script>'], ["", '<div class="relative bg-cover bg-center text-white py-[34px] md:py-12 lg:py-20 bg-black" style="background-image: url(\'/india-map-background.webp\');"> <div class="relative max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center px-10 lg:px-16"> <div data-aos="fade-up" class="lg:w-2/3 mt-10 lg:mt-0"> <h2 class="hidden lg:block text-[40px] font-semibold mb-3 leading-tight font-condensed">\nOfficial Solutions Provider: Indian Navy\n</h2> <div class="hidden lg:block border-b-4 border-primary w-[50%] mb-8"></div> <p class="mb-6 text-[13px] md:text-[16px] leading-relaxed text-justify">\nOur dedication and accomplishments were formally acknowledged when we\n        attained the prestigious Indian Navy vendor approval on the 24th of May\n        2023. This significant milestone signifies our recognition as a trusted\n        and authorized partner, empowering us to serve all four Naval Commands:\n</p> <ul id="naval-list" class="mb-6 text-[13px] md:text-[16px] leading-relaxed font-semibold"> <li id="western-command" class="mb-2 cursor-pointer hover:underline">\nWestern Naval Command - Mumbai\n</li> <li id="eastern-command" class="mb-2 cursor-pointer hover:underline">\nEastern Naval Command - Visakhapatnam\n</li> <li id="southern-command" class="mb-2 cursor-pointer hover:underline">\nSouthern Naval Command - Kochi\n</li> <li id="tri-services-command" class="cursor-pointer hover:underline">\nTri-services Command - Port Blair\n</li> </ul> <p data-aos="fade-up" class="text-[13px] md:text-[16px] leading-relaxed text-justify">\nThis underscores our comprehensive reach and steadfast commitment to\n        bolstering the Indian Navy across diverse geographical locations.\n</p> </div> <div data-aos="fade-up"> <h2 class="block lg:hidden text-xl font-semibold mb-3 leading-tight font-condensed">\nOfficial Solutions Provider: Indian Navy\n</h2> <div class="block lg:hidden border-b-4 border-teal-400 w-[50%] mb-4"></div> <div class="w-full mt-8 lg:mt-0 flex justify-center relative"> <img src="/india-map.webp" alt="Indian Navy Commands" class="w-full lg:w-3/4"> <svg id="icon-eastern-command" class="location-icon h-9 w-9 absolute bottom-[105px] right-[85px] xxs:bottom-[128px] xxs:right-[108px] xs:bottom-[148px] xs:right-[132px] md:bottom-[300px] md:right-[280px] lg:bottom-[170px] lg:right-[220px] xl:bottom-[185px] xl:right-60" width="25" height="36" viewBox="0 0 25 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.4926 0C5.6041 0 0 5.60492 0 12.4936C0 19.1246 11.3348 34.6168 11.8174 35.2728L12.2678 35.8858C12.3205 35.9579 12.4044 36 12.4926 36C12.5822 36 12.6656 35.9579 12.7188 35.8858L13.1689 35.2728C13.6518 34.6168 24.9863 19.1246 24.9863 12.4936C24.9863 5.60492 19.3813 0 12.4926 0ZM12.4926 8.01842C14.9608 8.01842 16.9678 10.0255 16.9678 12.4936C16.9678 14.9604 14.9607 16.9688 12.4926 16.9688C10.0259 16.9688 8.01742 14.9604 8.01742 12.4936C8.01742 10.0255 10.0258 8.01842 12.4926 8.01842Z" fill="white"></path> </svg> <svg id="icon-western-command" class="location-icon h-9 w-9 absolute bottom-[100px] left-[25px] xxs:bottom-[135px] xxs:left-[32px] xs:bottom-[160px] xs:left-[37px] md:bottom-[352px] md:left-[92px] lg:bottom-[182px] lg:left-[111px] xl:bottom-[192px] xl:left-[123px]" width="25" height="36" viewBox="0 0 25 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.4926 0C5.6041 0 0 5.60492 0 12.4936C0 19.1246 11.3348 34.6168 11.8174 35.2728L12.2678 35.8858C12.3205 35.9579 12.4044 36 12.4926 36C12.5822 36 12.6656 35.9579 12.7188 35.8858L13.1689 35.2728C13.6518 34.6168 24.9863 19.1246 24.9863 12.4936C24.9863 5.60492 19.3813 0 12.4926 0ZM12.4926 8.01842C14.9608 8.01842 16.9678 10.0255 16.9678 12.4936C16.9678 14.9604 14.9607 16.9688 12.4926 16.9688C10.0259 16.9688 8.01742 14.9604 8.01742 12.4936C8.01742 10.0255 10.0258 8.01842 12.4926 8.01842Z" fill="white"></path> </svg> <svg id="icon-southern-command" class="location-icon h-9 w-9 absolute bottom-[25px] left-[52px] xxs:bottom-[40px] xxs:left-[65px] xs:bottom-[45px] xs:left-[82px] md:bottom-[70px] md:left-[184px] lg:bottom-[47px] lg:left-[162px] xl:bottom-[47px] xl:left-[178px]" width="25" height="36" viewBox="0 0 25 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.4926 0C5.6041 0 0 5.60492 0 12.4936C0 19.1246 11.3348 34.6168 11.8174 35.2728L12.2678 35.8858C12.3205 35.9579 12.4044 36 12.4926 36C12.5822 36 12.6656 35.9579 12.7188 35.8858L13.1689 35.2728C13.6518 34.6168 24.9863 19.1246 24.9863 12.4936C24.9863 5.60492 19.3813 0 12.4926 0ZM12.4926 8.01842C14.9608 8.01842 16.9678 10.0255 16.9678 12.4936C16.9678 14.9604 14.9607 16.9688 12.4926 16.9688C10.0259 16.9688 8.01742 14.9604 8.01742 12.4936C8.01742 10.0255 10.0258 8.01842 12.4926 8.01842Z" fill="white"></path> </svg> <svg id="icon-tri-services-command" class="location-icon h-10 w-10 absolute bottom-[45px] right-[20px] xxs:bottom-[55px] xxs:right-[30px] xs:bottom-[65px] xs:right-[39px] md:bottom-[145px] md:right-[85px] lg:bottom-[85px] lg:right-[112px]" width="25" height="36" viewBox="0 0 25 36" fill="red" xmlns="http://www.w3.org/2000/svg"> <path d="M12.4926 0C5.6041 0 0 5.60492 0 12.4936C0 19.1246 11.3348 34.6168 11.8174 35.2728L12.2678 35.8858C12.3205 35.9579 12.4044 36 12.4926 36C12.5822 36 12.6656 35.9579 12.7188 35.8858L13.1689 35.2728C13.6518 34.6168 24.9863 19.1246 24.9863 12.4936C24.9863 5.60492 19.3813 0 12.4926 0ZM12.4926 8.01842C14.9608 8.01842 16.9678 10.0255 16.9678 12.4936C16.9678 14.9604 14.9607 16.9688 12.4926 16.9688C10.0259 16.9688 8.01742 14.9604 8.01742 12.4936C8.01742 10.0255 10.0258 8.01842 12.4926 8.01842Z" fill="white"></path> </svg> </div> </div> </div> </div> <script>\n  window.addEventListener("load", () => {\n    const listItems = document.querySelectorAll("#naval-list li");\n    const icons = document.querySelectorAll(".location-icon");\n\n    listItems.forEach((item) => {\n      item.addEventListener("click", (event) => {\n        event.stopPropagation(); // Prevents the event from bubbling up\n\n        listItems.forEach((li) =>\n          li.classList.remove("text-primary", "font-extrabold")\n        );\n        icons.forEach((icon) => {\n          icon.querySelector("path").setAttribute("fill", "white");\n          icon.classList.remove("animate-pop-up");\n        });\n\n        item.classList.add("text-primary", "font-extrabold");\n        const icon = document.querySelector(\\`#icon-\\${item.id}\\`);\n        icon.querySelector("path").setAttribute("fill", "#01BDB7");\n        icon.classList.add("animate-pop-up");\n      });\n    });\n  });\n<\/script>'])), maybeRenderHead());
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/components/navySection.astro", void 0);

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<!-- <html>
  <head>
    <title>Astro with Tailwind CSS</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&display=swap" rel="stylesheet">
  </head>
  <body> -->${renderComponent($$result, "Layout", $$Layout, { "title": "G1 Offshore" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "ServingBharat", $$ServingBharat, {})} ${renderComponent($$result2, "NavySection", $$NavySection, {})} ${renderComponent($$result2, "ProjectsGrid", $$ProjectsGrid, {})} ${renderComponent($$result2, "OurPartners", $$OurPartners, {})} ` })} <!-- </body>
</html> -->`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/index.astro", void 0);

const $$file = "/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };