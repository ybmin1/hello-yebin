import emailjs from "@emailjs/browser";
import React, { useCallback, useState } from "react";

interface FormData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  [key: string]: string;
}
interface TextContent {
  name: string;
  emailAddress: string;
  subject: string;
  message: string;
  sending: string;
  sendEmail: string;
  successMsg: string;
  failMsg: string;
}

const textContent: TextContent = {
  name: "Name",
  emailAddress: "Email Address",
  subject: "Subject",
  message: "Message",
  sending: "Sending...",
  sendEmail: "Send Email",
  successMsg: "The email has been successfully sent!",
  failMsg: "Failed to send the email. Please try again.",
};

const EmailForm = () => {
  const [formData, setFormData] = useState<FormData>({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    []
  );
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus("sending");
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("success");
          setFormData({
            from_name: "",
            from_email: "",
            subject: "",
            message: "",
          });
        })
        .catch((err) => {
          console.log("FAILED...", err);
          setStatus("error");
        });
    },
    [formData]
  );

  return (
    <div className="w-[500px] lg:h-full">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1 pb-2">
          <label htmlFor="from_name">{textContent.name}</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            className="bg-black border box-border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white"
          />
        </div>
        <div className="flex flex-col gap-1 pb-2">
          <label htmlFor="from_email">{textContent.emailAddress}</label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            className="bg-black border box-border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white"
          />
        </div>
        <div className="flex flex-col gap-1 pb-2">
          <label htmlFor="subject">{textContent.subject}</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="bg-black border box-border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white"
          />
        </div>
        <div className="flex flex-col gap-1 pb-2">
          <label htmlFor="message">{textContent.message}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="bg-black border box-border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white"
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-gray-200 bg-opacity-20 border-white rounded-[15px] shadow-[4px_4px_0_0_white] select-none touch-manipulation focus:outline-none focus-visible:outline-none active:shadow-[2px_2px_0_0_white] active:transform active:translate-x-[2px] active:translate-y-[2px] relative overflow-hidden group transition-all duration-300 ease-in-out"
        >
          <span className="z-20">
            {status === "sending"
              ? `${textContent.sending}`
              : `${textContent.sendEmail}`}
          </span>
          <span className="absolute -left-[80px] -top-[30px] w-[50px] h-[140px] bg-white opacity-30 rotate-[35deg] -z-100 transition-all duration-550 ease-cubic-bezier group-hover:left-full"></span>
        </button>
        {status === "success" && <p className="">{textContent.successMsg}</p>}
        {status === "error" && <p className="">{textContent.failMsg}</p>}
      </form>
    </div>
  );
};

export default EmailForm;
