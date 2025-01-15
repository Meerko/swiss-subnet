export const prerender = false; // Not needed in 'server' mode
import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  // Validate the data - you'll probably want to do more than this
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: import.meta.env.USER_MAIL,
      pass: import.meta.env.USER_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: import.meta.env.USER_MAIL,
    to: import.meta.env.USER_MAIL,
    //cc: email,
    subject: `Swiss Subnet — Contact request from ${name} (${email})`,
    text: `
    Contact form submission:

    Name: 
    ${name}
    
    E-mail:
    ${email}

    Message: 
    ${message}`,
  };

  await transport.sendMail(mailOptions);

  return new Response(
    JSON.stringify({
      message: "Success!",
    }),

    { status: 200 }
  );
};
