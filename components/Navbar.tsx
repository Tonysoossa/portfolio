"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projets", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Résumé", path: "/resume" },
  ];

  return (
    <nav className="bg-gray-800 text-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Tony's Portfolio
          </Link>
          <div className="flex space-x-2 md:space-x-6 xs:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`hover:text-blue-400 transition-colors ${
                  pathname === item.path ? "text-blue-400" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
