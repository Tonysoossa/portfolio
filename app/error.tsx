"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { translations } = useLanguage();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <h1 className="text-6xl font-bold mb-4">Oops!</h1>
      <h2 className="text-2xl mb-4">{translations.error.infoMessage}</h2>
      <p className="text-xl mb-8">
        {error.message || translations.error.infoMessage2}
      </p>
      <div className="flex space-x-4">
        <button
          onClick={reset}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          {translations.error.retryBtn}
        </button>
        <Link
          href="/"
          className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          {translations.error.homeBtn}
        </Link>
      </div>
    </div>
  );
}
