"use client";

import { useState } from "react";
import z from "zod";

enum Status {
  "pending",
  "accepted",
  "rejected",
}

export default function ApplyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>();
  const [valid, setValid] = useState<boolean | undefined>();

  const validateEmail = (email: string) => {
    setEmail(email);
    const emailSchema = z.string().email();
    const isValid = emailSchema.safeParse(email);
    if (isValid.success) setValid(true);
    else setValid(false);
  };

  const apply = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the form from submitting in the default way

    if (valid === undefined || valid === false || email === "") return;

    setStatus(Status.pending)

    const res = await fetch("/api/application", {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (res.status === 200) {
      setEmail("");
      setStatus(Status.accepted);
    } else {
      setStatus(Status.rejected);
    }
  };

  return (
    <div className="text-white flex flex-col gap-2">
      <h2 className="font-bold text-xl">
        Wir bringen deine Side-Projects unter die Leute
      </h2>
      <p className="opacity-50">Hast was, das dazupasst? Gib E-Mail.</p>
      <form className="flex flex-col gap-8 relative w-full mt-4" onSubmit={(e) => apply(e)}>
        <div className="relative z-10">
          <label className="sr-only">email</label>
          <input
            id="email"
            type="email"
            value={email}
            required
            disabled={status === Status.accepted}
            onChange={(e) => validateEmail(e.target.value)}
            className="w-full disabled:cursor-not-allowed max-w-[300px] md:max-w-none md:w-[400px] h-[50px] appearance-none transition-all bg-white bg-opacity-20 backdrop-blur-sm !font-body border border-white rounded-[10px] p-4 text-lg focus:outline-lagoon-500"
          ></input>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
          <div>
          <button
            disabled={valid === undefined ? false : status === Status.accepted ? true : !valid}
            className="font-display disabled:opacity-20 font-var-heading p-1.5 px-2 bg-scorch-500 disabled:hover:bg-scorch-500 disabled:cursor-not-allowed hover:bg-scorch-300 rounded-[5px]"
            type={"submit"}
          >
            ANMELDEN
          </button>
          </div>
          {valid === false && <p className="text-scorch-500">keine gültige E-Mail</p>}
          {status === Status.accepted ? <p className="text-lagoon-500">Wir melden uns!</p>
          : status === Status.rejected ? <p className="text-scorch-500">Fehler :{"("}</p>
          : status === Status.pending ? <p className="opacity-50">Warte kurz...</p>
          : null  
        }
        </div>
        <div className="absolute hidden md:flex left-[40%] md:left-[55%] w-full z-0">
          <h3 className="font-display text-[30px] md:text-[60px] font-var-heading">
            willst rein?
          </h3>
        </div>
      </form>
    </div>
  );
}
