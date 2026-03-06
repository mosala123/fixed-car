"use client"
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IoLocationOutline, IoSettingsOutline, IoStopwatch, IoPersonOutline, IoLogOutOutline, IoPersonCircleOutline, IoCalendarOutline } from "react-icons/io5";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { supabase } from "@/lib/supabase";
import './HeaderStyle.css';

const navLinks = [
  { href: "/",          label: "HOME"     },
  { href: "/about",     label: "ABOUT"    },
  { href: "/services",  label: "SERVICES" },
  { href: "/booking",   label: "BOOKING"  },
  { href: "/contactus", label: "CONTACT"  },
];

const HeaderPages = () => {
  const [toggle, setToggle]     = useState(false);
  const [user, setUser]         = useState(null);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef                 = useRef(null);
  const pathname                = usePathname();
  const router                  = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data?.user ?? null));
    const { data: listener } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setDropOpen(false);
    router.push("/");
  };

  const isActive    = (href) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  const firstName   = user?.user_metadata?.firstName || "";
  const lastName    = user?.user_metadata?.lastName  || "";
  const initials    = firstName && lastName
    ? `${firstName[0]}${lastName[0]}`.toUpperCase()
    : user?.email?.[0]?.toUpperCase() ?? "?";
  const displayName = firstName ? `${firstName} ${lastName}`.trim() : user?.email ?? "";

  return (
    <header className="header-pages shadow-md">

      {/* ── Top Bar ── */}
      <div className="header-top-section py-2 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-2">
              <IoStopwatch size={16} className="text-orange-400" />
              <span className="text-xs font-medium tracking-wide text-gray-300">MON – FRI &nbsp;·&nbsp; 8AM – 6PM</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <IoLocationOutline size={16} className="text-orange-400" />
              <span className="text-xs font-medium tracking-wide text-gray-300">CAIRO, EGYPT</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-4">
              {[{ Icon: FaYoutube, href: "#" }, { Icon: FaInstagram, href: "#" }, { Icon: FaFacebookF, href: "#" }].map(({ Icon, href }) => (
                <Link key={Icon.name} href={href} className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <div className="main-header py-0 px-4">
        <div className="container mx-auto h-full flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="logo-icon-wrap p-2.5 rounded-xl">
              <IoSettingsOutline size={22} className="text-white" />
            </div>
            <div>
              <p className="text-base font-extrabold text-white tracking-wider leading-none">CAR REPAIR</p>
              <p className="text-[10px] text-gray-400 tracking-widest uppercase mt-0.5">Professional Auto Services</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className={`header-link ${toggle ? "active" : ""}`}>
            <ul className="flex items-center gap-7">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} onClick={() => setToggle(false)} className={`nav-link ${isActive(href) ? "active" : ""}`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Search */}
            <div className="relative hidden md:block w-36">
              <div className="search-wrap flex items-center gap-2 border border-white/20 rounded-full px-3 py-2">
                <IoMdSearch size={16} className="text-gray-400" />
                <input type="text" placeholder="Search..." className="outline-none w-full bg-transparent text-white placeholder-gray-500 text-xs" />
              </div>
            </div>

            {/* ── NOT logged in ── */}
            {!user ? (
              <Link href="/login"
                className="hidden md:flex items-center gap-2 bg-orange-500/10 border border-orange-500/30
                           text-orange-400 hover:bg-orange-500 hover:text-white hover:border-orange-500
                           px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-200">
                <IoPersonOutline size={16} />
                LOGIN
              </Link>
            ) : (
              /* ── Logged in → avatar + dropdown ── */
              <div className="relative" ref={dropRef}>
                <button onClick={() => setDropOpen(!dropOpen)}
                  className="flex items-center gap-2.5 bg-[#1a1a2e] border border-orange-500/30
                             hover:border-orange-500/60 rounded-xl px-3 py-2 transition-all duration-200">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-amber-400
                                  flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0">
                    {initials}
                  </div>
                  <span className="hidden md:block text-white text-xs font-semibold max-w-[80px] truncate">
                    {firstName || "Profile"}
                  </span>
                  <svg className={`w-3.5 h-3.5 text-gray-400 transition-transform ${dropOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {dropOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-[#1a1a2e] border border-white/10
                                  rounded-2xl shadow-2xl shadow-black/40 overflow-hidden z-50">
                    <div className="px-4 py-4 border-b border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-400
                                        flex items-center justify-center text-white font-extrabold">
                          {initials}
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-white font-bold text-sm truncate">{displayName}</p>
                          <p className="text-gray-500 text-xs truncate">{user.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="py-2">
                      <Link href="/profile" onClick={() => setDropOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-orange-500/10 hover:text-orange-400 transition-colors text-sm">
                        <IoPersonCircleOutline size={18} className="text-orange-400" /> My Profile
                      </Link>
                      <Link href="/booking" onClick={() => setDropOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-orange-500/10 hover:text-orange-400 transition-colors text-sm">
                        <IoCalendarOutline size={18} className="text-orange-400" /> Book Service
                      </Link>
                    </div>
                    <div className="border-t border-white/5 py-2">
                      <button onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-red-500/10 transition-colors text-sm">
                        <IoLogOutOutline size={18} /> Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button className="icons-bar md:hidden" onClick={() => setToggle(!toggle)} aria-label="Toggle menu">
            <FaBarsStaggered size={24} />
          </button>
        </div>
      </div>

      {toggle && (
        <div className="fixed inset-0 bg-black/60 z-[98] lg:hidden backdrop-blur-sm" onClick={() => setToggle(false)} />
      )}
    </header>
  );
};

export default HeaderPages;