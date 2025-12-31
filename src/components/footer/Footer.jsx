import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const FooterPages = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

          {/* Logo & Description */}
          <div>
            <div className="flex justify-center sm:justify-start">
              <Image
                src="/images.jpg"
                alt="Logo img"
                width={130}
                height={40}
                priority
              />
            </div>

            <p className="mt-6 max-w-md text-center text-sm leading-relaxed text-slate-600 sm:text-left">
              Building modern, fast, and responsive web applications using
              React and Next.js.
            </p>

            {/* Social Icons */}
            <ul className="mt-8 flex justify-center gap-5 sm:justify-start">
              <li>
                <Link
                  href="https://facebook.com"
                  className="text-slate-500 transition hover:text-teal-600 hover:scale-110"
                >
                  <FaFacebookF size={18} />
                </Link>
              </li>

              <li>
                <Link
                  href="https://instagram.com"
                  className="text-slate-500 transition hover:text-teal-600 hover:scale-110"
                >
                  <FaInstagram size={18} />
                </Link>
              </li>

              <li>
                <Link
                  href="https://twitter.com"
                  className="text-slate-500 transition hover:text-teal-600 hover:scale-110"
                >
                  <FaTwitter size={18} />
                </Link>
              </li>

              <li>
                <Link
                  href="https://github.com"
                  className="text-slate-500 transition hover:text-teal-600 hover:scale-110"
                >
                  <FaGithub size={18} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-2">

            {/* Helpful Links */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-slate-900">
                Helpful Links
              </h3>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="/faq"
                    className="text-slate-600 transition hover:text-teal-600"
                  >
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link
                    href="/support"
                    className="text-slate-600 transition hover:text-teal-600"
                  >
                    Support
                  </Link>
                </li>

                <li>
                  <Link
                    href="/chat"
                    className="text-slate-600 transition hover:text-teal-600"
                  >
                    Live Chat
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-slate-900">
                Contact Us
              </h3>

              <ul className="mt-6 space-y-4 text-sm text-slate-600">
                <li>📧 elmosalah74@gmail.com</li>
                <li>📞 01024668770</li>
                <li>📍 egypt, United Kingdom</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-200 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>

            <div className="flex gap-4 text-sm">
              <Link
                href="/terms"
                className="text-slate-500 underline transition hover:text-teal-600"
              >
                Terms
              </Link>

              <Link
                href="/privacy"
                className="text-slate-500 underline transition hover:text-teal-600"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterPages;
