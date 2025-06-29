"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className="text-2xl font-bold tracking-wider"
            style={{
              background:
                "linear-gradient(to right, var(--foreground), var(--accent))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            THE SALON
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="font-medium hover:text-[var(--accent)] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/men"
            className="font-medium hover:text-[var(--accent)] transition-colors"
          >
            Men
          </Link>
          <Link
            href="/women"
            className="font-medium hover:text-[var(--accent)] transition-colors"
          >
            Women
          </Link>
          <Link
            href="/contact"
            className="font-medium hover:text-[var(--accent)] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Book Appointment Button */}
        <Link
          href="/contact#booking"
          className="hidden md:block bg-[var(--accent)] text-white px-6 py-2 rounded hover:bg-[var(--foreground)] transition-colors"
        >
          Book Appointment
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          style={{ color: "var(--foreground)" }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="font-medium hover:text-[var(--accent)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/men"
              className="font-medium hover:text-[var(--accent)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Men
            </Link>
            <Link
              href="/women"
              className="font-medium hover:text-[var(--accent)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Women
            </Link>
            <Link
              href="/contact"
              className="font-medium hover:text-[var(--accent)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact#booking"
              className="bg-[var(--accent)] text-white px-6 py-2 rounded text-center hover:bg-[var(--foreground)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
