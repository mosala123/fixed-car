'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import {
  IoCarSportOutline,
  IoConstructOutline,
  IoSettingsOutline,
  IoShieldCheckmarkOutline,
  IoSpeedometerOutline,
  IoFlashOutline,
  IoCheckmarkCircleOutline,
  IoStarOutline,
  IoCallOutline,
  IoLocationOutline,
  IoTimeOutline,
  IoChevronForwardOutline,
  IoHammerOutline,
} from 'react-icons/io5'

// ── Animated Counter ──────────────────────────────────────────────────────────
function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const step = end / (duration / 16)
          const timer = setInterval(() => {
            start += step
            if (start >= end) { setCount(end); clearInterval(timer) }
            else setCount(Math.floor(start))
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: IoCarSportOutline,
    title: 'Car Repair',
    desc: 'Full-spectrum repair by ASE-certified technicians using OEM parts — bodywork, suspension, brakes, and beyond.',
    badge: 'Most Popular',
  },
  {
    icon: IoConstructOutline,
    title: 'Preventive Maintenance',
    desc: 'Scheduled oil changes, filter replacements, fluid top-ups, and tyre rotations to extend your vehicle\'s lifespan.',
    badge: null,
  },
  {
    icon: IoSpeedometerOutline,
    title: 'Advanced Diagnostics',
    desc: 'OBD-III scanning and live sensor analysis pinpoint faults in minutes — no guesswork, just precision.',
    badge: 'High-Tech',
  },
  {
    icon: IoFlashOutline,
    title: 'Engine & Transmission',
    desc: 'Complete rebuilds, performance tuning, and gearbox overhauls backed by a 12-month warranty.',
    badge: null,
  },
  {
    icon: IoShieldCheckmarkOutline,
    title: 'Safety Inspection',
    desc: 'Comprehensive 150-point inspection covering brakes, lights, steering, and emissions for full road compliance.',
    badge: 'Certified',
  },
  {
    icon: IoHammerOutline,
    title: 'Electrical & AC',
    desc: 'Wiring diagnostics, battery health checks, and full HVAC servicing to keep you comfortable all year round.',
    badge: null,
  },
]

const stats = [
  { icon: IoSettingsOutline, value: 2000, suffix: '+', label: 'Expert Technicians' },
  { icon: IoStarOutline,     value: 1500, suffix: '+', label: 'Happy Clients'      },
  { icon: IoTimeOutline,     value: 10,   suffix: '+', label: 'Years Experience'   },
  { icon: IoCallOutline,     value: 24,   suffix: '/7', label: 'Support Available' },
]

const whyUs = [
  'ASE-Certified Technicians on every job',
  'Genuine OEM & premium aftermarket parts',
  'Transparent pricing — no hidden charges',
  'Free courtesy vehicle during major repairs',
  '12-month / 20 000 km parts & labour warranty',
  'Real-time repair updates via SMS & app',
]

const testimonials = [
  {
    name: 'Ahmed Al-Rashid',
    role: 'Fleet Manager',
    text: 'The diagnostics team found a fault three other garages missed. Back on the road same day — outstanding service.',
    rating: 5,
  },
  {
    name: 'Sara Mitchell',
    role: 'Daily Commuter',
    text: 'Transparent pricing and the free courtesy car made the whole experience stress-free. Highly recommended.',
    rating: 5,
  },
  {
    name: 'James Okonkwo',
    role: 'Car Enthusiast',
    text: 'Top-quality engine tune. Dyno results speak for themselves — 18 % power gain. These guys know their craft.',
    rating: 5,
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────
const AboutPage = () => {
  return (
    <div
      className="min-h-screen font-sans"
      style={{ fontFamily: "'Sora', 'Segoe UI', sans-serif" }}
    >

      {/* ── HERO ── */}
      <section className="bg-white py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div className="order-2 md:order-1">
              <span className="inline-block bg-orange-50 text-orange-500 font-semibold text-sm tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                About Our Company
              </span>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                Your Trusted <br />
                <span className="text-orange-500">Auto Care</span> Partner
              </h1>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Founded over a decade ago, we've grown from a single bay garage into
                a full-service automotive centre trusted by thousands of drivers.
                Every repair is backed by certified technicians, genuine parts, and
                an uncompromising commitment to your safety.
              </p>

              <ul className="mt-8 space-y-3">
                {['Free vehicle health check with every visit', 'Same-day service for most repairs', 'Nationwide warranty on all parts & labour'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <IoCheckmarkCircleOutline className="text-orange-500 shrink-0" size={22} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-white font-semibold shadow-lg shadow-orange-200 hover:bg-orange-600 transition-all hover:-translate-y-0.5"
                >
                  Our Services <IoChevronForwardOutline />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 px-7 py-3.5 text-gray-800 font-semibold hover:border-orange-400 hover:text-orange-500 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2">
              <div className="relative">
                {/* Decorative background blob */}
                <div className="absolute -top-6 -right-6 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-60 -z-10" />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-100 rounded-full blur-2xl opacity-60 -z-10" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <Image src="/images.jpg" alt="Our workshop" fill className="object-cover" priority />

                  {/* Floating badge */}
                  <div className="absolute bottom-5 left-5 bg-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3">
                    <div className="bg-orange-500 rounded-full p-2">
                      <IoShieldCheckmarkOutline className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Certified Centre</p>
                      <p className="text-sm font-bold text-gray-900">ISO 9001 · ASE Approved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="inline-block bg-orange-50 text-orange-500 font-semibold text-sm tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                Quality You Can <span className="text-orange-500">Count On</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We don't just fix cars — we build lasting relationships. Every promise
                we make is backed by industry-leading standards and a no-excuses
                service philosophy.
              </p>

              <ul className="space-y-4">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                      <IoCheckmarkCircleOutline className="text-orange-500" size={16} />
                    </span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini-stats grid */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { val: '150+', label: 'Point Inspection', sub: 'Safety Checklist' },
                { val: '98%', label: 'Customer Satisfaction', sub: 'Based on 3 000 reviews' },
                { val: '45 min', label: 'Average Wait Time', sub: 'For standard services' },
                { val: '5-star', label: 'Google Rating', sub: 'Consistently top-rated' },
              ].map(({ val, label, sub }) => (
                <div key={label} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-orange-300 transition-colors">
                  <p className="text-3xl font-extrabold text-orange-500">{val}</p>
                  <p className="text-gray-900 font-semibold mt-1">{label}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center mb-14">
            <span className="inline-block bg-orange-50 text-orange-500 font-semibold text-sm tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Our Services
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
              From a quick oil change to a full engine rebuild — we handle it all under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map(({ icon: Icon, title, desc, badge }) => (
              <div
                key={title}
                className="group relative bg-[#f9f8f5] border border-transparent rounded-2xl p-8 text-center transition-all duration-300 hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-200 hover:-translate-y-1"
              >
                {badge && (
                  <span className="absolute top-4 right-4 bg-orange-100 text-orange-600 text-xs font-bold px-2.5 py-1 rounded-full group-hover:bg-white/20 group-hover:text-white transition-colors">
                    {badge}
                  </span>
                )}
                <div className="w-16 h-16 bg-orange-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors">
                  <Icon size={32} className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-600 group-hover:text-orange-50 leading-relaxed text-sm transition-colors">
                  {desc}
                </p>
                <span className="inline-flex items-center gap-1 mt-5 text-orange-500 group-hover:text-white font-semibold text-sm transition-colors">
                  Learn more <IoChevronForwardOutline size={16} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images.jpg)' }}
      >
        <div className="absolute inset-0 bg-gray-900/75 backdrop-blur-sm" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, suffix, label }) => (
              <div key={label} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <Icon size={26} className="text-orange-400 group-hover:text-white transition-colors" />
                </div>
                <p className="text-4xl font-extrabold text-orange-400">
                  <Counter end={value} suffix={suffix} />
                </p>
                <p className="text-white font-semibold mt-2 text-sm tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center mb-14">
            <span className="inline-block bg-orange-50 text-orange-500 font-semibold text-sm tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map(({ name, role, text, rating }) => (
              <div key={name} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <IoStarOutline key={i} className="text-amber-400" size={18} style={{ fill: '#fbbf24' }} />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed flex-1 italic">"{text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-500">
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{name}</p>
                    <p className="text-gray-400 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-orange-500 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Book Your Service?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
            Drop in, call us, or book online — we'll have your car back in top shape faster than you expect.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-orange-500 px-8 py-4 font-bold shadow-lg hover:bg-orange-50 transition-all hover:-translate-y-0.5"
            >
              <IoCallOutline size={20} /> Call Now
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/50 text-white px-8 py-4 font-bold hover:bg-white/10 transition-all"
            >
              <IoLocationOutline size={20} /> Find Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutPage