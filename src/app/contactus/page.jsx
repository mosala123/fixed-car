import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaCar, FaWrench } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#0f0f1a]">

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f1a] py-20 px-4"
        style={{ backgroundImage: "linear-gradient(rgba(15,15,26,.85), rgba(15,15,26,.9)), url('/images.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
            <div className="md:w-1/2">
              <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-5">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                Contact Us For <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                  Immediate Assistance
                </span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our team of expert technicians is ready to help with all your car repair needs.
                Reach out today for a free consultation.
              </p>
            </div>
            <div className="md:w-auto flex justify-center">
              <div className="relative">
                <div className="w-44 h-44 bg-orange-500/10 border border-orange-500/20 rounded-3xl overflow-hidden rotate-6 hover:rotate-0 transition-all duration-500 cursor-pointer group">
                  <img src="/worker1.png" alt="Contact support team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Form ── */}
          <div className="lg:col-span-2 bg-[#1a1a2e] border border-white/5 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-white mb-1">Send Us a Message</h2>
            <p className="text-gray-500 mb-8 text-sm">Fill out the form and we'll contact you as soon as possible</p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-medium" htmlFor="name">Full Name</label>
                  <input
                    type="text" id="name"
                    className="w-full px-4 py-3 bg-[#0f0f1a] border border-white/10 text-white rounded-xl
                               focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition
                               placeholder-gray-600 text-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-medium" htmlFor="phone">Phone Number</label>
                  <input
                    type="tel" id="phone"
                    className="w-full px-4 py-3 bg-[#0f0f1a] border border-white/10 text-white rounded-xl
                               focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition
                               placeholder-gray-600 text-sm"
                    placeholder="+20 xxx xxx xxxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2 font-medium" htmlFor="email">Email Address</label>
                <input
                  type="email" id="email"
                  className="w-full px-4 py-3 bg-[#0f0f1a] border border-white/10 text-white rounded-xl
                             focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition
                             placeholder-gray-600 text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2 font-medium" htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 bg-[#0f0f1a] border border-white/10 text-gray-400 rounded-xl
                             focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition text-sm"
                >
                  <option value="">Select a subject</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="estimate">Request Quote</option>
                  <option value="complaint">Complaint</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2 font-medium" htmlFor="message">Your Message</label>
                <textarea
                  id="message" rows="5"
                  className="w-full px-4 py-3 bg-[#0f0f1a] border border-white/10 text-white rounded-xl
                             focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition
                             placeholder-gray-600 text-sm resize-none"
                  placeholder="Describe your issue or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 rounded-xl
                           shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5
                           transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-6">

            {/* Contact info */}
            <div className="bg-[#1a1a2e] border border-white/5 rounded-2xl p-7">
              <h3 className="text-lg font-extrabold text-white mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  { icon: <FaPhone />, label: 'Phone', lines: ['+20 123 456 7890', '+20 987 654 3210'] },
                  { icon: <FaEnvelope />, label: 'Email', lines: ['info@carservice.com', 'support@carservice.com'] },
                  { icon: <FaMapMarkerAlt />, label: 'Address', lines: ['123 Tahrir Street, Downtown', 'Cairo, Egypt'] },
                  { icon: <FaClock />, label: 'Working Hours', lines: ['Sat – Thu: 8 AM – 10 PM', 'Friday: 10 AM – 6 PM'] },
                ].map(({ icon, label, lines }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{label}</p>
                      {lines.map(l => <p key={l} className="text-gray-500 text-xs mt-0.5">{l}</p>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact via */}
            <div className="bg-[#1a1a2e] border border-white/5 rounded-2xl p-7">
              <h3 className="text-lg font-extrabold text-white mb-5">Quick Contact</h3>
              <div className="space-y-3">
                {[
                  { icon: <FaPhone />, label: 'Phone Call', sub: 'General inquiries' },
                  { icon: <FaEnvelope />, label: 'Email', sub: 'Official messages' },
                  { icon: <FaWhatsapp />, label: 'WhatsApp', sub: 'Quick & direct' },
                ].map(({ icon, label, sub }) => (
                  <div key={label} className="flex items-center gap-4 bg-[#0f0f1a] border border-white/5 p-4 rounded-xl
                                               hover:border-orange-500/30 hover:bg-orange-500/5 transition-all cursor-pointer group">
                    <div className="w-9 h-9 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      {icon}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{label}</p>
                      <p className="text-gray-600 text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/5">
                <p className="text-gray-400 text-xs font-semibold mb-2 uppercase tracking-widest">Emergency Line</p>
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 px-4 rounded-xl text-center font-extrabold text-lg tracking-wider">
                  +20 111 222 3333
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Map Placeholder ── */}
        <div className="mt-10 bg-[#1a1a2e] border border-white/5 rounded-2xl p-8">
          <h3 className="text-lg font-extrabold text-white mb-6">Our Location</h3>
          <div className="bg-[#0f0f1a] border border-white/5 h-56 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <FaMapMarkerAlt className="text-orange-500 text-5xl mx-auto mb-3" />
              <p className="text-gray-400 font-semibold">123 Tahrir Street, Downtown, Cairo, Egypt</p>
            </div>
          </div>
        </div>

        {/* ── Support Team ── */}
        <div className="mt-10">
          <div className="text-center mb-10">
            <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-4">
              Support
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">Our Team Is Always With You</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { icon: <FaPhone className="text-2xl" />, title: 'Technical Support', desc: 'ASE-certified technicians ready to answer your technical inquiries', phone: '+20 100 200 3000' },
              { icon: <FaWrench className="text-2xl" />, title: 'Customer Service', desc: 'Scheduling repairs, maintenance, and follow-ups made simple', phone: '+20 200 300 4000' },
              { icon: <FaCar className="text-2xl" />, title: 'Roadside Emergency', desc: 'On-road breakdown assistance — anywhere, anytime', phone: '+20 111 222 3333' },
            ].map(({ icon, title, desc, phone }) => (
              <div key={title} className="group bg-[#1a1a2e] border border-white/5 rounded-2xl p-7 text-center
                                          hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10 transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-center
                                text-orange-400 mx-auto mb-5 group-hover:bg-orange-500 group-hover:text-white group-hover:border-transparent transition-all">
                  {icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <p className="text-orange-400 font-extrabold">{phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
