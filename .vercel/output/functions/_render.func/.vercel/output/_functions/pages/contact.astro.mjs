/* empty css                                 */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_cuKTT-NG.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { $ as $$Layout } from '../chunks/Layout_BdMBmk4Z.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_G2WeIkvr.mjs';
export { renderers } from '../renderers.mjs';

const Loader = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    "aria-hidden": "true",
    style: { margin: "auto" },
    className: "flex w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 justify-start items-start",
    viewBox: "0 0 100 101",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
          fill: "currentFill"
        }
      )
    ]
  }
);
function SubscribeForm() {
  const [responseMessage, setResponseMessage] = useState("");
  const [values, setValues] = useState({
    email: "",
    name: "",
    message: "",
    subject: ""
  });
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (responseMessage) {
      setTimeout(() => {
        setResponseMessage("");
      }, 5e3);
    }
  }, [responseMessage]);
  async function submit(e) {
    e.preventDefault();
    if (!values.email || !values.name || !values.message || !values.subject) {
      return null;
    }
    setLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });
    const data = await response.json();
    setLoading(false);
    if (data.message) {
      setResponseMessage(data.message);
      setValues({ email: "", name: "", message: "", subject: "" });
    }
  }
  const onChange = (ev, key) => {
    setValues((v) => ({ ...v, [key]: ev.target.value }));
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: submit, noValidate: true, className: " w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 w-full", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { children: "Name" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "name",
            id: "name",
            className: "w-full mt-2 px-4 py-3 border-[1px]  rounded-md outline-none focus:ring-4 border-black focus:border-gray-600 ring-gray-100",
            required: true,
            onChange: (event) => onChange(event, "name"),
            value: values.name,
            autoComplete: "name"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { children: "Email" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            name: "email",
            id: "email",
            className: "w-full mt-2 px-4 py-3 border-[1px]  rounded-md outline-none focus:ring-4 border-black focus:border-gray-600 ring-gray-100",
            required: true,
            value: values.email,
            onChange: (event) => onChange(event, "email"),
            autoComplete: "email"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { children: "Subject" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "subject",
            id: "subject",
            className: "w-full mt-2 px-4 py-3 border-[1px]  rounded-md outline-none focus:ring-4 border-black focus:border-gray-600 ring-gray-100",
            required: true,
            onChange: (event) => onChange(event, "subject"),
            value: values.subject,
            autoComplete: "subject"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
        /* @__PURE__ */ jsx("span", { children: "Message" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            name: "message",
            id: "message",
            className: "w-full mt-2 px-4 py-3 border-[1px]  rounded-md outline-none h-44 focus:ring-4 border-black focus:border-gray-600 ring-gray-100",
            onChange: (event) => onChange(event, "message"),
            value: values.message,
            autoComplete: "message",
            required: true
          }
        )
      ] })
    ] }),
    isLoading ? /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(Loader, {}) }) : /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx("button", { className: "text-white text-base md:text-base font-semibold px-8 py-[8px] border-[1px] border-secondary bg-secondary inline-block transition duration-300 ease-in-out hover:bg-primary hover:border-primary cursor-pointer font-condensed", children: "SEND MESSAGE" }) }),
    responseMessage && /* @__PURE__ */ jsx("p", { className: "flex justify-end text-black mt-4", children: responseMessage })
  ] });
}

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbItems = [
    { title: "Home", path: "/" },
    { title: "Contact Us", isActive: true }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col min-h-screen"> ${renderComponent($$result, "Layout", $$Layout, { "title": "Contact Us" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} <div class="md:grid md:grid-cols-2 md:gap-10 md:px-10 lg:px-40 xl:px-60 flex flex-col-reverse mt-[32px] md:mt-[90px] mb-[32px] md:mb-[126px]"> <div class="xs:m-5 m-3 md:m-0 flex flex-col"> <div class="text-3xl text-dark font-semibold font-condensed hidden md:block mb-[32px]">
Get in touch
</div> <p class="text-sm md:text-base leading-relaxed text-dark text-justify font-light mb-[32px] px-4 md:px-0">
Thank you for your interest in <span class="font-serifa">GI</span>. As
          a leading defence contractor for Navy Ships, we are committed to
          providing our clients with the highest quality services. Whether you
          need habitability solutions, structural repairs and upgrades or
          defence contracting services, we are here to help. Please contact us
          using the information provided below or fill out the contact form and
          a member of our team will get back to you as soon as possible. We look
          forward to hearing from you.
</p> <div class="flex justify-center md:justify-start gap-5"> <a href="#" class="hover:underline"><img src="/assets/linkedin.svg" alt="LinkedIn" class="h-8 bg-white"></a> <a href="#" class="hover:underline"><img src="/assets/whatsapp.svg" alt="WhatsApp" class="h-8 bg-white"></a> <a href="#" class="hover:underline"><img src="/assets/x.svg" alt="Other" class="h-8 bg-white"></a> </div> </div> <div class="mx-7"> <div class="md:hidden text-[16px] text-dark font-semibold text-center mb-6">
Get in touch
</div> <!-- <Contactform />  --> ${renderComponent($$result2, "Contactform", SubscribeForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ContactForm.tsx", "client:component-export": "default" })} </div> </div> ` })} </div>`;
}, "/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/contact.astro", void 0);

const $$file = "/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
