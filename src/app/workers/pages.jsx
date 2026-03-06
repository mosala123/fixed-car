import Link from "next/link";
import React from "react";
import { IoStarOutline, IoCheckmarkCircleOutline } from "react-icons/io5";

const WorkersPage = () => {
  const workers = [
    {
      id: 1,
      name: "Ahmed Ali",
      role: "Master Mechanic",
      img: "/worker1.png",
      exp: "12 yrs exp",
      skills: ["Engine Overhaul", "Transmission", "Diagnostics"],
      rating: 4.9,
    },
    {
      id: 2,
      name: "Mohamed Cairo",
      role: "Electrical Expert",
      img: "/worker1.png",
      exp: "8 yrs exp",
      skills: ["Wiring & ECU", "Battery Systems", "AC Electrical"],
      rating: 4.8,
    },
    {
      id: 3,
      name: "Samy Fawzy",
      role: "Body & Paint",
      img: "/worker1.png",
      exp: "10 yrs exp",
      skills: ["Dent Repair", "Oven Paint", "Panel Work"],
      rating: 5.0,
    },
  ];

  return (
    <section
      className="min-h-screen bg-[#0f0f1a] py-20 px-4"
      style={{ backgroundImage: "linear-gradient(rgba(15,15,26,.88), rgba(15,15,26,.94)), url('/images.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >

      {/* ── Header ── */}
      <div className="text-center mb-20 relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -z-10" />
        <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-5">
          Meet Our Experts
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
          Our Awesome <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Team</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-lg mx-auto text-base">
          Certified professionals dedicated to keeping your vehicle in peak condition — every single time.
        </p>
      </div>

      {/* ── Cards Grid ── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {workers.map((worker) => (
          <div
            key={worker.id}
            className="group relative bg-[#1a1a2e] border border-white/5 rounded-2xl
                       hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10
                       transition-all duration-500 hover:-translate-y-2 overflow-visible pt-16 pb-8 px-7"
          >
            {/* Floating avatar */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-2 border-orange-500/30 group-hover:border-orange-500
                                transition-colors duration-500 overflow-hidden bg-[#0f0f1a] shadow-xl">
                  <img
                    src={worker.img}
                    alt={worker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Online dot */}
                <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-[#1a1a2e] rounded-full" />
              </div>
            </div>

            {/* Rating badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded-full">
              <IoStarOutline size={12} className="text-amber-400" style={{ fill: '#f59e0b' }} />
              <span className="text-amber-400 text-xs font-bold">{worker.rating}</span>
            </div>

            {/* Name & role */}
            <div className="text-center mb-5">
              <h3 className="text-white font-extrabold text-lg group-hover:text-orange-300 transition-colors">
                {worker.name}
              </h3>
              <p className="text-orange-400 text-xs font-semibold mt-1 uppercase tracking-widest">{worker.role}</p>
              <span className="inline-block mt-2 text-gray-600 text-xs bg-white/5 px-3 py-0.5 rounded-full">
                {worker.exp}
              </span>
            </div>

            {/* Skills */}
            <ul className="space-y-2 mb-6">
              {worker.skills.map(skill => (
                <li key={skill} className="flex items-center gap-2 text-sm text-gray-400">
                  <IoCheckmarkCircleOutline className="text-orange-400 flex-shrink-0" size={16} />
                  {skill}
                </li>
              ))}
            </ul>

            <Link
              href={`/workers/${worker.id}`}
              className="block w-full py-3 text-center font-bold text-sm rounded-xl
                         bg-orange-500/10 border border-orange-500/20 text-orange-400
                         group-hover:bg-orange-500 group-hover:text-white group-hover:border-transparent
                         transition-all duration-300"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <img src="/images.jpg" alt="Team workshop" className="w-full h-40 object-cover" />
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <img src="/worker1.png" alt="Mechanic at work" className="w-full h-40 object-cover" />
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="text-center mt-20">
        <p className="text-gray-600 mb-4">Want to join our expert team?</p>
        <Link
          href="/contactus"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-orange-500/20 hover:-translate-y-0.5 transition-all"
        >
          Apply Now →
        </Link>
      </div>
    </section>
  );
};

export default WorkersPage;
