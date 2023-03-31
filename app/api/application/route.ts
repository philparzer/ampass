
import { supabase } from "@/lib/db";
import z from "zod";

const schema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  
  const res = await request.json();
  const email = res.email;


  try {schema.parse({ email })}
  catch (err) {return new Response ("invalid email", {status: 500})}

  const addEntry = async (email:string) => {

    let { data: succ, error } = await supabase
      .from("applicationMail")
      .insert({ email })
      .single();
    if (error) return new Response ("db error", {status: 500})
    else {
      return new Response ("success", {status: 200})
    }
  } 

  let entryAdd = await addEntry(email);
  return new Response("success", { status: 200 });
}
