"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
        console.log("Email envoyé:", result.text);
        setFormData({ name: "", email: "", message: "" });
        setStatus('success');
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi:", error.text);
        setStatus('error');
      });
  };

  const closeModal = () => {
    setStatus('idle');
  };

  return (
    <div className="max-w-2xl mx-auto relative">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Démarrons un projet ensemble, n'hésitez pas à me contacter
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Send Message
        </button>
      </form>

      {status !== 'idle' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full">
            {status === 'success' ? (
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="mt-2 text-xl font-medium text-gray-100">Message envoyé avec succès !</h3>
                <p className="mt-1 text-sm text-gray-400">Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
              </div>
            ) : (
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <h3 className="mt-2 text-xl font-medium text-gray-100">Erreur lors de l'envoi</h3>
                <p className="mt-1 text-sm text-gray-400">Désolé, une erreur s'est produite. Veuillez réessayer plus tard.</p>
              </div>
            )}
            <button
              onClick={closeModal}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}