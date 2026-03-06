import React from "react";
import Link from "next/link";
import { IoSettingsOutline, IoLocationOutline, IoCallOutline, IoMailOutline, IoChevronForwardOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";

const FooterPages = () => {
  return (
    <footer className="bg-[#0a0a15] border-t border-white/5">

      {/* ── Top gradient line ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">

          {/* ── Brand ── */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow">
                <IoSettingsOutline size={20} className="text-white group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <div>
                <p className="text-white font-extrabold text-base tracking-wider leading-none">CAR REPAIR</p>
                <p className="text-gray-600 text-[10px] tracking-widest uppercase mt-0.5">Professional Auto Services</p>
              </div>
            </Link>

            <p className="mt-6 text-gray-500 text-sm leading-relaxed max-w-xs">
              Your trusted automotive partner — certified technicians, genuine parts,
              and a warranty you can count on.
            </p>

            {/* Socials */}
            <div className="mt-7 flex gap-3">
              {[
                { Icon: FaFacebookF, href: "https://facebook.com"  },
                { Icon: FaInstagram, href: "https://instagram.com" },
                { Icon: FaTwitter,   href: "https://twitter.com"   },
                { Icon: FaYoutube,   href: "#"                     },
                { Icon: FaGithub,    href: "https://github.com"    },
              ].map(({ Icon, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="w-9 h-9 bg-[#1a1a2e] border border-white/5 rounded-lg flex items-center justify-center
                             text-gray-500 hover:text-orange-400 hover:border-orange-500/30 hover:bg-orange-500/5
                             transition-all duration-200"
                >
                  <Icon size={14} />
                </Link>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home',       href: '/'          },
                { label: 'About Us',   href: '/about'     },
                { label: 'Services',   href: '/services'  },
                { label: 'Booking',    href: '/booking'   },
                { label: 'Our Team',   href: '/workers'   },
                { label: 'Contact Us', href: '/contactus' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-gray-500 text-sm hover:text-orange-400 transition-colors group/link"
                  >
                    <IoChevronForwardOutline size={13} className="text-orange-500/0 group-hover/link:text-orange-400 -ml-1 transition-all group-hover/link:ml-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                'Oil Change & Maintenance',
                'Computer Diagnostics',
                'Engine & Transmission',
                'Brake System Service',
                'AC & Cooling System',
                'Bodywork & Paint',
              ].map(item => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="flex items-center gap-2 text-gray-500 text-sm hover:text-orange-400 transition-colors group/link"
                  >
                    <IoChevronForwardOutline size={13} className="text-orange-500/0 group-hover/link:text-orange-400 -ml-1 transition-all group-hover/link:ml-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {[
                { icon: <IoMailOutline size={16} />,     text: 'elmosalah74@gmail.com', href: 'mailto:elmosalah74@gmail.com' },
                { icon: <IoCallOutline size={16} />,     text: '01024668770',            href: 'tel:01024668770'             },
                { icon: <IoLocationOutline size={16} />, text: 'Cairo, Egypt',           href: '#'                          },
              ].map(({ icon, text, href }) => (
                <li key={text}>
                  <Link
                    href={href}
                    className="flex items-start gap-3 group"
                  >
                    <span className="mt-0.5 w-8 h-8 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 flex-shrink-0 group-hover:bg-orange-500 group-hover:border-transparent group-hover:text-white transition-all">
                      {icon}
                    </span>
                    <span className="text-gray-500 text-sm group-hover:text-orange-400 transition-colors pt-1">{text}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Emergency */}
            <div className="mt-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-4">
              <p className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-1">Emergency Line</p>
              <p className="text-white font-extrabold text-lg">+20 111 222 3333</p>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} <span className="text-gray-500 font-semibold">Car Repair</span>. All rights reserved.
          </p>
          <div className="flex gap-5">
            {[
              { label: 'Terms',   href: '/terms'   },
              { label: 'Privacy', href: '/privacy' },
              { label: 'FAQs',    href: '/faq'     },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="text-gray-600 text-xs hover:text-orange-400 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPages;