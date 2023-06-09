
import { Resend } from 'resend';
import z from "zod";
const resend = new Resend(process.env.RESEND_API_KEY);


const schema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  
  const res = await request.json();
  const email = res.email;


  try {schema.parse({ email })}
  catch (err) {return new Response ("invalid email", {status: 500})}

  try {
    const data = await resend.emails.send({
      from: 'Ampass <hi@ampass.at>',
      to: [email],
      subject: 'Hi',
      html: 'Wir melden uns bald bei dir.'
    });
  } catch (error) {
    return new Response ("resend error", {status: 500})
  }

  return new Response ("success", {status: 200})
}
