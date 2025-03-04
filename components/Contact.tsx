"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const { translations } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_pfoliofront1",
        "template_pfoliofront1",
        templateParams,
        "attwSkjADtRjxXset"
      )
      .then((result) => {
        console.log("Email sent:", result.text);
        setFormData({ name: "", email: "", message: "" });
        setStatus("success");
      })
      .catch((error) => {
        console.error("Error sending email:", error.text);
        setStatus("error");
      });
  };

  const closeModal = () => {
    setStatus("idle");
  };

  return (
    <div className="relative">
      <h1 className="text-4xl font-bold mt-14 mb-20 flex text-center justify-center">
        {translations.contact.title}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8 flex flex-col text-xl">
        <div className="flex flex-row gap-12 justify-center w-full">
          <div className="w-full">
            <label htmlFor="name" className="block lg:text-[1.2rem] text-sm font-medium mb-4">
              {translations.contact.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full h-12 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="block lg:text-[1.2rem] text-sm font-medium mb-4">
              {translations.contact.mail}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-12 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block lg:text-[1.2rem] text-sm font-medium mb-4">
            {translations.contact.message}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full h-48 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-2/5 mx-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          {translations.contact.submit}
        </button>
      </form>

      {status !== "idle" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full">
            {status === "success" ? (
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <h3 className="mt-2 text-xl font-medium text-gray-100">
                  {translations.contact.success}
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  {translations.contact.successReply}
                </p>
              </div>
            ) : (
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <h3 className="mt-2 text-xl font-medium text-gray-100">
                  {translations.contact.error}
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  {translations.contact.errorMessage}
                </p>
              </div>
            )}
            <button
              onClick={closeModal}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              {translations.contact.closeErrorModal}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
