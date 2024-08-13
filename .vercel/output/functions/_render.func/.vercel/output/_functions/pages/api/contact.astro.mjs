import mailchimp from '@mailchimp/mailchimp_marketing';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const MAILCHIMP_API_KEY = "31b5c74f371d84c43f9ed5835f03b029";
const MAILCHIMP_SERVER_PREFIX = "us22";
console.log(`Mailchimp Server Prefix: ${MAILCHIMP_SERVER_PREFIX}`);
mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_SERVER_PREFIX
  // e.g., 'us1', 'us2'
});
const POST = async ({ request }) => {
  const { email, name, message } = await request.json();
  if (!email || !name || !message) {
    return new Response(JSON.stringify({ error: "All fields are required" }), {
      status: 400
    });
  }
  try {
    await mailchimp.lists.addListMember("99ea908dd7", {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: name,
        MESSAGE: message
      }
    });
    return new Response(JSON.stringify({ message: "Submission successful" }), {
      status: 201
    });
  } catch (error) {
    console.error("Mailchimp API Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
