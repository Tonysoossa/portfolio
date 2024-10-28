"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();
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
        console.log(language === 'fr' ? "Email envoyé:" : "Email sent:", result.text);
        setFormData({ name: "", email: "", message: "" });
        setStatus('success');
      })
      .catch((error) => {
        console.error(language === 'fr' ? "Erreur lors de l'envoi:" : "Error sending email:", error.text);
        setStatus('error');
      });
  };

  const closeModal = () => {
    setStatus('idle');
  };

  return (
    <div className="max-w-2xl mx-auto relative">
      <h1 className="text-4xl font-bold mb-8 text-center">
        {language === 'fr' ? 
          "Démarrons un projet ensemble, n'hésitez pas à me contacter" :
          "Let's start a project together, don't hesitate to contact me"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            {language === 'fr' ? 'Nom' : 'Name'}
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
          {language === 'fr' ? 'Envoyer le message' : 'Send Message'}
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
                <h3 className="mt-2 text-xl font-medium text-gray-100">
                  {language === 'fr' ? 'Message envoyé avec succès !' : 'Message sent successfully!'}
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  {language === 'fr' ? 
                    'Merci pour votre message. Je vous répondrai dans les plus brefs délais.' :
                    'Thank you for your message. I will reply to you as soon as possible.'}
                </p>
              </div>
            ) : (
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <h3 className="mt-2 text-xl font-medium text-gray-100">
                  {language === 'fr' ? "Erreur lors de l'envoi" : 'Error sending message'}
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  {language === 'fr' ? 
                    "Désolé, une erreur s'est produite. Veuillez réessayer plus tard." :
                    'Sorry, an error occurred. Please try again later.'}
                </p>
              </div>
            )}
            <button
              onClick={closeModal}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              {language === 'fr' ? 'Fermer' : 'Close'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}