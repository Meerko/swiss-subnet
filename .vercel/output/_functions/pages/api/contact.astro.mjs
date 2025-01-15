import nodemailer from 'nodemailer';
import 'nodemailer/lib/mailer/index.js';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields"
      }),
      { status: 400 }
    );
  }
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "giorgiabagnasco@gmail.com",
      pass: "svtstzxmtjrkhjey"
    }
  });
  const mailOptions = {
    from: "giorgiabagnasco@gmail.com",
    to: "giorgiabagnasco@gmail.com",
    //cc: email,
    subject: `Swiss Subnet — Contact request from ${name} (${email})`,
    text: `
    Contact form submission:

    Name: 
    ${name}
    
    E-mail:
    ${email}

    Message: 
    ${message}`
  };
  await transport.sendMail(mailOptions);
  return new Response(
    JSON.stringify({
      message: "We receiver you email and will get back to you shortly."
    }),
    { status: 200 }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
