import type { APIRoute } from "astro";
import mailchimp from "@mailchimp/mailchimp_marketing";

export const prerender = false;

// const { MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX } = import.meta.env;
const MAILCHIMP_API_KEY = "31b5c74f371d84c43f9ed5835f03b029";
const MAILCHIMP_SERVER_PREFIX = "us22";
console.log(`Mailchimp Server Prefix: ${MAILCHIMP_SERVER_PREFIX}`); // Debugging line

mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_SERVER_PREFIX, // e.g., 'us1', 'us2'
});

export const POST: APIRoute = async ({ request }) => {
  const { email, name, message } = (await request.json()) as {
    email: string;
    name: string;
    message: string;
  };

  if (!email || !name || !message) {
    return new Response(JSON.stringify({ error: "All fields are required" }), {
      status: 400,
    });
  }

  try {
    // Add member to Mailchimp list
    await mailchimp.lists.addListMember("99ea908dd7", {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: name,
        MESSAGE: message,
      },
    });

    return new Response(JSON.stringify({ message: "Submission successful" }), {
      status: 201,
    });
  } catch (error) {
    console.error("Mailchimp API Error:", error); // Debugging line
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
    });
  }
};
