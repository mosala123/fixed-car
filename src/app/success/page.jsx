"use client"

import React from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaCar, FaHome, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { IoCalendarOutline, IoShieldCheckmarkOutline, IoCarSportOutline } from 'react-icons/io5';

const SuccessPage = () => {
  return (
    <div
      className="min-h-screen bg-[#0f0f1a] flex items-center justify-center px-4 py-16"
      style={{ backgroundImage: "linear-gradient(rgba(15,15,26,.9), rgba(15,15,26,.92)), url('/images.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >

      {/* Background glow */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-1/3 left-1/3 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full relative z-10">

        {/* ── Card ── */}
        <div className="bg-[#1a1a2e] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">

          {/* Top success bar */}
          <div className="relative bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 p-10 text-center overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full" />

            <div className="relative z-10">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-xl animate-bounce">
                <FaCheckCircle className="text-green-500 text-4xl" />
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Booking Confirmed!</h1>
              <p className="text-green-100 text-base">Your appointment has been successfully scheduled</p>
            </div>
          </div>

          {/* Body */}
          <div className="p-8 md:p-10">

            <div className="text-center mb-8">
              <h2 className="text-xl font-extrabold text-white mb-2">What Happens Next?</h2>
              <p className="text-gray-500 text-sm">Here's what to expect after your booking</p>
            </div>

            <div className="mb-7 rounded-xl overflow-hidden border border-white/10">
              <img src="/worker1.png" alt="Service team ready" className="w-full h-36 object-cover" />
            </div>

            {/* Steps */}
            <div className="space-y-4 mb-8">
              {[
                {
                  num: '1',
                  icon: <FaPhoneAlt />,
                  title: 'Confirmation Call',
                  desc: "We'll contact you within 24 hours to confirm your appointment details.",
                  color: 'orange',
                },
                {
                  num: '2',
                  icon: <IoShieldCheckmarkOutline />,
                  title: 'Service Preparation',
                  desc: 'Our technicians will prepare specifically for your vehicle and service type.',
                  color: 'blue',
                },
                {
                  num: '3',
                  icon: <IoCarSportOutline />,
                  title: 'Appointment Day',
                  desc: 'Arrive at the scheduled time and our team will take care of everything.',
                  color: 'green',
                },
              ].map(({ num, icon, title, desc, color }) => (
                <div
                  key={num}
                  className={`flex items-start gap-4 p-5 rounded-xl border
                    ${color === 'orange' ? 'bg-orange-500/5 border-orange-500/20' :
                      color === 'blue'   ? 'bg-blue-500/5 border-blue-500/20' :
                                           'bg-green-500/5 border-green-500/20'}`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0
                    ${color === 'orange' ? 'bg-orange-500' :
                      color === 'blue'   ? 'bg-blue-500' :
                                           'bg-green-500'}`}>
                    {num}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">{title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact card */}
            <div className="bg-[#0f0f1a] border border-white/5 rounded-2xl p-6 mb-7">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-sm">
                <FaPhoneAlt className="text-orange-400" />
                Need to Make Changes?
              </h3>
              <div className="space-y-3">
                <a href="tel:+15551234567" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <FaPhoneAlt size={12} />
                  </div>
                  <span className="text-gray-400 text-sm group-hover:text-orange-400 transition-colors">+1 (555) 123-4567</span>
                </a>
                <a href="mailto:support@autoservice.com" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <FaEnvelope size={12} />
                  </div>
                  <span className="text-gray-400 text-sm group-hover:text-orange-400 transition-colors">support@autoservice.com</span>
                </a>
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500
                           text-white font-bold py-3.5 rounded-xl shadow-lg shadow-orange-500/20
                           hover:-translate-y-0.5 hover:shadow-orange-500/40 transition-all text-sm"
              >
                <FaHome /> Back to Home
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 bg-[#0f0f1a] border border-white/10
                           text-gray-300 font-bold py-3.5 rounded-xl hover:border-orange-500/40
                           hover:text-orange-400 transition-all text-sm"
              >
                <FaCar /> View Services
              </Link>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          A confirmation email has been sent to your registered email address
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
