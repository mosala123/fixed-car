"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaUser, FaPhone, FaCar, FaCalendarAlt, FaClock, FaTools, FaCheckCircle } from 'react-icons/fa';
import { IoShieldCheckmarkOutline, IoCallOutline, IoMailOutline, IoTimeOutline } from 'react-icons/io5';
import { supabase } from '@/lib/supabase';

const inputClass = `
  w-full px-4 py-3 bg-[#0f0f1a] border border-white/10 text-white rounded-xl
  focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition
  placeholder-gray-600 text-sm
`;

const labelClass = "block text-gray-400 text-sm font-medium mb-2";

const BookingPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    customer_name: "",
    phone_number: "",
    car_brand: "",
    car_model: "",
    car_year: "",
    service_type: "",
    appointment_date: "",
    appointment_time: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });
    try {
      const { error } = await supabase
        .from('appointments')
        .insert([{
          customer_name: formData.customer_name,
          phone_number: formData.phone_number,
          car_brand: formData.car_brand,
          car_model: `${formData.car_model} ${formData.car_year}`,
          appointment_date: `${formData.appointment_date} ${formData.appointment_time}`,
          notes: `Service: ${formData.service_type}\n${formData.notes}`,
          status: "pending"
        }]);
      if (error) throw error;
      router.push('/success');
    } catch (error) {
      setMessage({ type: "error", text: "Booking failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f1a]">

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f1a] py-16 md:py-20"
        style={{ backgroundImage: "linear-gradient(rgba(15,15,26,.86), rgba(15,15,26,.92)), url('/images.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-5">
            Book an Appointment
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Book Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
              Car Service
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Fill out the form below to schedule your appointment — we'll confirm within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Main ── */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">

          {/* ── Form ── */}
          <div className="lg:w-2/3">
            <div className="bg-[#1a1a2e] border border-white/5 rounded-2xl overflow-hidden">

              {/* Form header */}
              <div className="border-b border-white/5 p-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-400">
                  <FaCar size={18} />
                </div>
                <div>
                  <h2 className="text-white font-extrabold text-lg">Service Booking Form</h2>
                  <p className="text-gray-500 text-xs">Please provide your details to book your appointment</p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {/* Error message */}
                {message.text && (
                  <div className={`mb-6 p-4 rounded-xl border text-sm font-medium
                    ${message.type === 'success'
                      ? 'bg-green-500/10 border-green-500/30 text-green-400'
                      : 'bg-red-500/10 border-red-500/30 text-red-400'}`}>
                    {message.text}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">

                  {/* Section: Personal */}
                  <div>
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-7 h-7 bg-orange-500/10 rounded-lg flex items-center justify-center">
                        <FaUser size={12} className="text-orange-400" />
                      </div>
                      <h3 className="text-white font-bold text-sm uppercase tracking-widest">Personal Information</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Full Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <FaUser size={13} className="text-gray-600" />
                          </div>
                          <input type="text" name="customer_name" value={formData.customer_name} onChange={handleChange} required
                            className={`${inputClass} pl-9`} placeholder="Your full name" />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Phone Number</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <FaPhone size={13} className="text-gray-600" />
                          </div>
                          <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} required
                            className={`${inputClass} pl-9`} placeholder="+20 xxx xxx xxxx" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section: Vehicle */}
                  <div>
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-7 h-7 bg-orange-500/10 rounded-lg flex items-center justify-center">
                        <FaCar size={12} className="text-orange-400" />
                      </div>
                      <h3 className="text-white font-bold text-sm uppercase tracking-widest">Vehicle Details</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      <div>
                        <label className={labelClass}>Make</label>
                        <input type="text" name="car_brand" value={formData.car_brand} onChange={handleChange} required
                          className={inputClass} placeholder="Toyota" />
                      </div>
                      <div>
                        <label className={labelClass}>Model</label>
                        <input type="text" name="car_model" value={formData.car_model} onChange={handleChange} required
                          className={inputClass} placeholder="Camry" />
                      </div>
                      <div>
                        <label className={labelClass}>Year</label>
                        <input type="number" name="car_year" value={formData.car_year} onChange={handleChange} required
                          className={inputClass} placeholder="2022" min="1990" max="2025" />
                      </div>
                    </div>
                  </div>

                  {/* Section: Service */}
                  <div>
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-7 h-7 bg-orange-500/10 rounded-lg flex items-center justify-center">
                        <FaTools size={12} className="text-orange-400" />
                      </div>
                      <h3 className="text-white font-bold text-sm uppercase tracking-widest">Service & Schedule</h3>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className={labelClass}>Service Type</label>
                        <select name="service_type" value={formData.service_type} onChange={handleChange} required
                          className={inputClass}>
                          <option value="">Select a service...</option>
                          <option>Oil Change & Maintenance</option>
                          <option>Computer Diagnostics</option>
                          <option>General Mechanical Repair</option>
                          <option>Brake System Service</option>
                          <option>AC & Cooling System</option>
                          <option>Bodywork & Paint</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className={labelClass}>Preferred Date</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                              <FaCalendarAlt size={13} className="text-gray-600" />
                            </div>
                            <input type="date" name="appointment_date" value={formData.appointment_date} onChange={handleChange} required
                              className={`${inputClass} pl-9`} />
                          </div>
                        </div>
                        <div>
                          <label className={labelClass}>Preferred Time</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                              <FaClock size={13} className="text-gray-600" />
                            </div>
                            <input type="time" name="appointment_time" value={formData.appointment_time} onChange={handleChange} required
                              className={`${inputClass} pl-9`} />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>Additional Notes</label>
                        <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3}
                          className={`${inputClass} resize-none`}
                          placeholder="Describe any issues or specific requests..." />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold py-4 rounded-xl
                               shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5
                               transition-all duration-300 flex items-center justify-center gap-2
                               disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    <FaCheckCircle size={16} />
                    {loading ? 'Booking...' : 'Book Appointment Now'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="lg:w-1/3 space-y-5">
            <div className="bg-[#1a1a2e] border border-white/5 rounded-2xl overflow-hidden">
              <img src="/worker1.png" alt="Book a service with experts" className="w-full h-40 object-cover" />
            </div>

            {/* Hours */}
            <div className="bg-[#1a1a2e] border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-400">
                  <IoTimeOutline size={18} />
                </div>
                <h3 className="text-white font-bold">Service Hours</h3>
              </div>
              <div className="space-y-3">
                {[
                  { day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
                  { day: 'Saturday',        hours: '9:00 AM – 4:00 PM' },
                  { day: 'Sunday',          hours: 'Emergency Only'    },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0">
                    <span className="text-gray-500 text-sm">{day}</span>
                    <span className={`text-sm font-semibold ${hours === 'Emergency Only' ? 'text-orange-400' : 'text-white'}`}>
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-[#1a1a2e] border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-400">
                  <IoShieldCheckmarkOutline size={18} />
                </div>
                <h3 className="text-white font-bold">Why Choose Us</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'ASE-Certified Technicians',
                  'Same-Day Service Available',
                  'Transparent Pricing',
                  '6-Month Warranty',
                  'Free Vehicle Health Check',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-orange-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle size={10} className="text-orange-400" />
                    </span>
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Need Help */}
            <div className="bg-[#1a1a2e] border border-white/5 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Need Help?</h3>
              <div className="space-y-4">
                <a href="tel:+15551234567" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-400
                                  group-hover:bg-orange-500 group-hover:border-transparent group-hover:text-white transition-all">
                    <IoCallOutline size={16} />
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs">Call for immediate assistance</p>
                    <p className="text-orange-400 font-bold text-sm group-hover:text-orange-300 transition-colors">+1 (555) 123-4567</p>
                  </div>
                </a>
                <a href="mailto:support@autoservice.com" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-400
                                  group-hover:bg-orange-500 group-hover:border-transparent group-hover:text-white transition-all">
                    <IoMailOutline size={16} />
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs">Send us an email</p>
                    <p className="text-orange-400 font-bold text-sm group-hover:text-orange-300 transition-colors">support@autoservice.com</p>
                  </div>
                </a>
              </div>

              {/* Emergency */}
              <div className="mt-5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-4 text-center">
                <p className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-1">Emergency Line</p>
                <p className="text-white font-extrabold text-xl">+20 111 222 3333</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom notice ── */}
      <div className="border-t border-white/5 py-6 mt-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            We'll contact you within <span className="text-orange-400 font-semibold">24 hours</span> to confirm your appointment
          </p>
        </div>
      </div>

    </div>
  );
};

export default BookingPage;
