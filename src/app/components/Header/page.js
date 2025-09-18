"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/reviews", label: "Reviews Section" },
  ];

  return (
    <nav className="sticky top-0 z-50 text-secondary shadow-md bg-white">
      <div className="w-[90%] mx-auto flex justify-between items-center py-4">
        {/* Logo + Text ek sath */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo1.png"
            alt="KTZ Physio Logo"
            width={190}
            height={210}
          />      
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-lg transition hover:font-semibold ${
                  pathname === link.href
                    ? "text-secondary font-semibold border-b-2 border-secondary pb-1"
                    : "text-secondary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/923291500326?text=Hello%20I%20want%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-white rounded-md bg-secondary
               transition-all duration-300 ease-in-out
               hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.2)]
               active:scale-95"
            >
              Get Appointment
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-secondary"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6">
          <ul className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-lg transition hover:font-semibold ${
                    pathname === link.href
                      ? "text-secondary font-semibold border-b-2 border-secondary pb-1"
                      : "text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/923245549172?text=Hello%20I%20want%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block w-full px-4 py-2 text-white rounded-md bg-secondary
                 transition-all duration-300 ease-in-out
                 hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.2)]
                 active:scale-95"
              >
                Get Appointment
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
