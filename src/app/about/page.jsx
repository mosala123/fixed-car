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

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

// ── Data ──────────────────────────────────────────────────────────────────────
const services = [
  { icon: IoCarSportOutline,        title: 'Car Repair',            desc: 'Full-spectrum repair by ASE-certified technicians using OEM parts — bodywork, suspension, brakes, and beyond.',      badge: 'Most Popular' },
  { icon: IoConstructOutline,       title: 'Preventive Maintenance', desc: "Scheduled oil changes, filter replacements, fluid top-ups, and tyre rotations to extend your vehicle's lifespan.", badge: null },
  { icon: IoSpeedometerOutline,     title: 'Advanced Diagnostics',  desc: 'OBD-III scanning and live sensor analysis pinpoint faults in minutes — no guesswork, just precision.',              badge: 'High-Tech' },
  { icon: IoFlashOutline,           title: 'Engine & Transmission', desc: 'Complete rebuilds, performance tuning, and gearbox overhauls backed by a 12-month warranty.',                        badge: null },
  { icon: IoShieldCheckmarkOutline, title: 'Safety Inspection',     desc: 'Comprehensive 150-point inspection covering brakes, lights, steering, and emissions for full road compliance.',       badge: 'Certified' },
  { icon: IoHammerOutline,          title: 'Electrical & AC',       desc: 'Wiring diagnostics, battery health checks, and full HVAC servicing to keep you comfortable all year round.',         badge: null },
]

const stats = [
  { icon: IoSettingsOutline, value: 2000, suffix: '+',  label: 'Expert Technicians' },
  { icon: IoStarOutline,     value: 1500, suffix: '+',  label: 'Happy Clients'      },
  { icon: IoTimeOutline,     value: 10,   suffix: '+',  label: 'Years Experience'   },
  { icon: IoCallOutline,     value: 24,   suffix: '/7', label: 'Support Available'  },
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
  { name: 'Ahmed Al-Rashid', role: 'Fleet Manager',  text: 'The diagnostics team found a fault three other garages missed. Back on the road same day — outstanding service.', rating: 5 },
  { name: 'Sara Mitchell',   role: 'Daily Commuter', text: 'Transparent pricing and the free courtesy car made the whole experience stress-free. Highly recommended.',         rating: 5 },
  { name: 'James Okonkwo',   role: 'Car Enthusiast', text: 'Top-quality engine tune. Dyno results speak for themselves — 18% power gain. These guys know their craft.',       rating: 5 },
]

// ── Page ──────────────────────────────────────────────────────────────────────
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#0f0f1a]">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f1a] py-20 md:py-28">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div className="order-2 md:order-1">
              <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-5">
                About Our Company
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Your Trusted <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Auto Care</span> Partner
              </h1>
              <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                Founded over a decade ago, we've grown from a single bay garage into a full-service
                automotive centre trusted by thousands of drivers. Every repair is backed by certified
                technicians, genuine parts, and an uncompromising commitment to your safety.
              </p>
              <ul className="mt-8 space-y-3">
                {['Free vehicle health check with every visit', 'Same-day service for most repairs', 'Nationwide warranty on all parts & labour'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <IoCheckmarkCircleOutline className="text-orange-400 shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/services" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-7 py-3.5 text-white font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all">
                  Our Services <IoChevronForwardOutline />
                </Link>
                <Link href="/contactus" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-gray-300 font-bold hover:border-orange-500/40 hover:text-orange-400 transition-all">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl -z-10" />
                <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl aspect-[4/3]">
                  <Image src="/images.jpg" alt="Our workshop" fill className="object-cover" priority />
                  <div className="absolute bottom-5 left-5 bg-[#1a1a2e]/90 border border-white/10 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3">
                    <div className="bg-orange-500 rounded-lg p-1.5">
                      <IoShieldCheckmarkOutline className="text-white" size={18} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-[10px] font-medium">Certified Centre</p>
                      <p className="text-white text-xs font-bold">ISO 9001 · ASE Approved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-[#0f0f1a] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-5">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
                Quality You Can{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Count On</span>
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                We don't just fix cars — we build lasting relationships. Every promise we make is
                backed by industry-leading standards and a no-excuses service philosophy.
              </p>
              <ul className="space-y-3">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-4 bg-[#1a1a2e] border border-white/5 rounded-xl p-4 hover:border-orange-500/20 transition-colors">
                    <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <IoCheckmarkCircleOutline className="text-orange-400" size={15} />
                    </span>
                    <span className="text-gray-300 font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { val: '150+',   label: 'Point Inspection',      sub: 'Safety Checklist'       },
                { val: '98%',    label: 'Customer Satisfaction',  sub: 'Based on 3 000 reviews' },
                { val: '45 min', label: 'Average Wait Time',      sub: 'For standard services'  },
                { val: '5-star', label: 'Google Rating',          sub: 'Consistently top-rated' },
              ].map(({ val, label, sub }) => (
                <div key={label} className="bg-[#1a1a2e] border border-white/5 rounded-2xl p-6 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10 transition-all hover:-translate-y-0.5">
                  <p className="text-3xl font-extrabold text-orange-400">{val}</p>
                  <p className="text-white font-semibold mt-1 text-sm">{label}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-[#1a1a2e] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-5">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Our Services</h2>
            <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
              From a quick oil change to a full engine rebuild — we handle it all under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map(({ icon: Icon, title, desc, badge }) => (
              <div key={title} className="group relative bg-[#0f0f1a] border border-white/5 rounded-2xl p-7 text-center transition-all duration-300 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1">
                {badge && (
                  <span className="absolute top-4 right-4 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold px-2.5 py-1 rounded-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-transparent transition-colors">
                    {badge}
                  </span>
                )}
                <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-orange-500 group-hover:border-transparent transition-all">
                  <Icon size={28} className="text-orange-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-orange-300 mb-3 transition-colors">{title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
                <span className="inline-flex items-center gap-1 mt-5 text-orange-400 font-semibold text-sm">
                  Learn more <IoChevronForwardOutline size={15} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'url(/images.jpg)' }}>
        <div className="absolute inset-0 bg-[#0f0f1a]/82 backdrop-blur-sm" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, suffix, label }) => (
              <div key={label} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:border-transparent transition-all">
                  <Icon size={24} className="text-orange-400 group-hover:text-white transition-colors" />
                </div>
                <p className="text-4xl font-extrabold text-orange-400">
                  <Counter end={value} suffix={suffix} />
                </p>
                <p className="text-gray-300 font-semibold mt-2 text-sm tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#0f0f1a] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-5">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map(({ name, role, text, rating }) => (
              <div key={name} className="bg-[#1a1a2e] border border-white/5 rounded-2xl p-7 flex flex-col hover:border-orange-500/20 hover:shadow-xl hover:shadow-orange-500/5 transition-all">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <IoStarOutline key={i} className="text-amber-400" size={16} style={{ fill: '#f59e0b' }} />
                  ))}
                </div>
                <p className="text-gray-400 leading-relaxed flex-1 italic text-sm">"{text}"</p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-white/5">
                  <div className="w-9 h-9 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center font-bold text-orange-400 text-sm">
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{name}</p>
                    <p className="text-gray-600 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 py-16">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full pointer-events-none" />
          <div className="relative mx-auto max-w-4xl px-6 text-center z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to Book Your Service?</h2>
            <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
              Drop in, call us, or book online — we'll have your car back in top shape faster than you expect.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contactus" className="inline-flex items-center gap-2 rounded-xl bg-white text-orange-600 px-8 py-4 font-bold shadow-lg hover:bg-orange-50 hover:-translate-y-0.5 transition-all">
                <IoCallOutline size={20} /> Call Now
              </Link>
              <Link href="/booking" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 text-white px-8 py-4 font-bold hover:bg-white/10 transition-all">
                <IoLocationOutline size={20} /> Book Online
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutPage