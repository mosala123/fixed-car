import React from 'react';
import { FaTools, FaCar, FaCarBattery, FaOilCan, FaFan } from 'react-icons/fa';
import { GiCarWheel } from 'react-icons/gi';
import { FiArrowRight } from 'react-icons/fi';
import { IoShieldCheckmarkOutline, IoFlashOutline } from 'react-icons/io5';
import Link from 'next/link';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Regular Maintenance & Oil Change',
      description: 'Engine oil replacement with premium synthetic oils and OEM filter changes to maximize engine life and performance.',
      icon: <FaOilCan className="w-7 h-7" />,
      price: 'From 500 EGP',
      badge: 'Most Popular',
      badgeColor: 'bg-orange-500',
    },
    {
      id: 2,
      title: 'Full Computer Diagnostics',
      description: 'Precise fault detection using the latest OBD-III tools to identify issues accurately — no guesswork, just results.',
      icon: <FaCarBattery className="w-7 h-7" />,
      price: 'From 200 EGP',
      badge: 'High-Tech',
      badgeColor: 'bg-blue-500',
    },
    {
      id: 3,
      title: 'General Mechanics',
      description: 'Engine, gearbox, and suspension repairs carried out by ASE-certified technicians with a 6-month warranty.',
      icon: <FaTools className="w-7 h-7" />,
      price: 'Based on inspection',
      badge: null,
    },
    {
      id: 4,
      title: 'Brake System Service',
      description: 'Full inspection and replacement of pads, discs, and brake fluid — because your safety is non-negotiable.',
      icon: <GiCarWheel className="w-7 h-7" />,
      price: 'From 300 EGP',
      badge: 'Safety Critical',
      badgeColor: 'bg-red-500',
    },
    {
      id: 5,
      title: 'AC & Cooling System',
      description: 'Freon recharge, compressor service, and full cooling system flush for peak summer performance.',
      icon: <FaFan className="w-7 h-7" />,
      price: 'From 400 EGP',
      badge: null,
    },
    {
      id: 6,
      title: 'Bodywork & Paint',
      description: "Precision dent repair and oven-baked painting to restore your car's finish to factory condition.", // تم تغيير علامات الاقتباس إلى علامات اقتباس مزدوجة
      icon: <FaCar className="w-7 h-7" />,
      price: 'Based on inspection',
      badge: 'Premium',
      badgeColor: 'bg-amber-500',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f1a] pb-20">

      {/* ── Hero Banner ── */}
      <div
        className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f1a] py-20"
        style={{ backgroundImage: "linear-gradient(rgba(15,15,26,.85), rgba(15,15,26,.9)), url('/images.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-orange-400/10 rounded-full blur-2xl" />
        {/* Bottom gradient border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-5">
            What We Do
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Professional</span> Services
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A full spectrum of automotive care — from routine oil changes to full engine rebuilds —
            backed by certified technicians and a warranty you can trust.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { val: '6+', label: 'Service Types' },
              { val: '98%', label: 'Satisfaction Rate' },
              { val: '24/7', label: 'Emergency Support' },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-extrabold text-orange-400">{val}</p>
                <p className="text-gray-500 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <img src="/images.jpg" alt="Garage service area" className="w-full h-44 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <img src="/worker1.png" alt="Professional mechanic" className="w-full h-44 object-cover" />
          </div>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <div className="container mx-auto px-4 md:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#1a1a2e] border border-white/5 rounded-2xl p-7 flex flex-col
                         hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/10
                         transition-all duration-300 hover:-translate-y-1"
            >
              {/* Badge */}
              {service.badge && (
                <span className={`absolute top-5 right-5 ${service.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide`}>
                  {service.badge}
                </span>
              )}

              {/* Icon */}
              <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/20 rounded-xl
                              flex items-center justify-center mb-5 text-orange-400
                              group-hover:bg-orange-500 group-hover:text-white group-hover:border-transparent
                              transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/5">
                <span className="text-xs font-bold text-orange-400 bg-orange-500/10 px-3 py-1.5 rounded-full border border-orange-500/20">
                  {service.price}
                </span>
                <Link
                  href="/booking"
                  className="flex items-center gap-1 text-sm text-gray-400 font-semibold
                             hover:text-orange-400 transition-colors group/link"
                >
                  Book Now
                  <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Why Choose Us strip ── */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <IoShieldCheckmarkOutline size={22} />, text: '6-Month Warranty' },
            { icon: <IoFlashOutline size={22} />,          text: 'Same-Day Service'  },
            { icon: <FaTools className="text-base" />,     text: 'Certified Techs'   },
            { icon: <FaCar className="text-base" />,       text: 'OEM Parts Only'    },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-3 bg-[#1a1a2e] border border-white/5 rounded-xl px-4 py-4">
              <span className="text-orange-400 flex-shrink-0">{icon}</span>
              <span className="text-gray-300 text-sm font-semibold">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div className="container mx-auto px-4 mt-14">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-600 to-amber-500 p-10 md:p-14 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full transform -translate-x-1/4 translate-y-1/4" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Didn&apos;t find what you&apos;re looking for?
            </h3>
            <p className="text-orange-100 mb-8 max-w-xl mx-auto">
              Talk to our experts directly — describe your issue and we&apos;ll diagnose and quote it for free.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contactus"
                className="px-8 py-3.5 bg-white text-orange-600 font-bold rounded-xl shadow-lg hover:bg-orange-50 transition-all hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
              <Link
                href="/booking"
                className="px-8 py-3.5 bg-orange-700/40 border border-white/30 text-white font-bold rounded-xl hover:bg-orange-700/60 transition-all"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
