import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactForm() {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }
  const labelClasses =
    "flex flex-col items-start p-4 focus-within:bg-zinc-200/80";
  const inputClasses = "bg-transparent focus:outline-none text-xl";
  return (
    <form
      onSubmit={submit}
      className="flex flex-col gap-2 mx-auto w-full max-w-xl"
    >
      {responseMessage ? (
        <p className="text-center">{responseMessage}</p>
      ) : (
        <div>
          <label htmlFor="name" className={`${labelClasses} bg-zinc-200/60`}>
            <span className="form-label">Name</span>
            <input
              className={`${inputClasses} `}
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              required
            />
          </label>
          <label htmlFor="email" className={`${labelClasses} bg-zinc-200/40`}>
            <span className="form-label">Email</span>
            <input
              className={`${inputClasses}`}
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
            />
          </label>
          <label htmlFor="message" className={`${labelClasses} bg-zinc-200/20`}>
            <span className="form-label">Message</span>
            <textarea
              className={`${inputClasses}`}
              id="message"
              name="message"
              autoComplete="off"
              required
            />
          </label>
          <button className="btn mt-4">Send</button>
        </div>
      )}
    </form>
  );
}
