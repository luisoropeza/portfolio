import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_qetbvwi", "template_z4v995v", form.current, {
        publicKey: "GPiVvX7ET5AxqWwmx",
      })
      .then(
        () => {
          alert("¡ÉXITO!");
          nameInput.current.value = "";
          emailInput.current.value = "";
          messageInput.current.value = "";
          setLoading(false);
        },
        (error) => {
          alert("¡FALLÓ...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xl font-bold text-yellow-600">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            ref={nameInput}
            className="w-full rounded-lg border-2 border-slate-500/50 p-2 bg-white text-black"
            autoComplete="off"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xl font-bold text-yellow-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            ref={emailInput}
            className="w-full rounded-lg border-2 border-slate-500/50 p-2 bg-white text-black"
            autoComplete="off"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-xl font-bold text-yellow-600"
          >
            Mensaje
          </label>
          <textarea
            name="message"
            id="message"
            ref={messageInput}
            className="w-full rounded-lg border-2 border-slate-500/50 p-2 bg-white text-black h-40"
            required
          ></textarea>
        </div>
        <div>
          <input
            type="submit"
            value="Enviar"
            className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg px-4 py-2 w-full"
            disabled={loading}
          />
        </div>
      </div>
    </form>
  );
};

export default ContactMe;
