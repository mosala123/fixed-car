import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaCar, FaWrench } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Contact Us <span className="text-orange-600">For Immediate Assistance</span>
              </h1>
              <p className="text-lg text-gray-300">
                Our team of expert technicians is ready to help you with all your car repair needs. Contact us today for a free consultation.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-orange-600 p-6 rounded-xl shadow-2xl transform rotate-9 hover:rotate-0 transition-transform duration-300">
                <FaCar className="text-8xl text-white opacity-90" />
                <FaWrench className="text-6xl text-white opacity-90 ml-12 -mt-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">Fill out the form below and we will contact you as soon as possible</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="subject">Message Subject</label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  required
                >
                  <option value="">Select message subject</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="estimate">Request Quote</option>
                  <option value="complaint">Complaint</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <FaPhone className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Phone Number</h4>
                    <p className="text-gray-600">+20 123 456 7890</p>
                    <p className="text-gray-600">+20 987 654 3210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <FaEnvelope className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email Address</h4>
                    <p className="text-gray-600">info@carservice.com</p>
                    <p className="text-gray-600">support@carservice.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <FaMapMarkerAlt className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Address</h4>
                    <p className="text-gray-600">123 Tahrir Street, Downtown</p>
                    <p className="text-gray-600">Cairo, Egypt</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <FaClock className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Working Hours</h4>
                    <p className="text-gray-600">Saturday to Thursday: 8 AM - 10 PM</p>
                    <p className="text-gray-600">Friday: 10 AM - 6 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Us Via</h3>
              <div className="space-y-6">
                <div className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition duration-300 cursor-pointer">
                  <div className="flex items-center">
                    <div className="bg-orange-600 p-2 rounded-lg ml-4">
                      <FaPhone className="text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold">Phone Call</h4>
                      <p className="text-sm text-gray-300">For general inquiries</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition duration-300 cursor-pointer">
                  <div className="flex items-center">
                    <div className="bg-orange-600 p-2 rounded-lg ml-4">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold">Email</h4>
                      <p className="text-sm text-gray-300">For official messages and details</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition duration-300 cursor-pointer">
                  <div className="flex items-center">
                    <div className="bg-orange-600 p-2 rounded-lg ml-4">
                      <FaWhatsapp className="text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold">WhatsApp</h4>
                      <p className="text-sm text-gray-300">For quick and direct contact</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-lg font-bold mb-2">For Emergencies:</p>
                <div className="bg-orange-600 text-white py-3 px-4 rounded-lg text-center font-bold text-xl">
                  +20 111 222 3333
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Location on Map</h3>
          <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <FaMapMarkerAlt className="text-orange-600 text-5xl mx-auto mb-4" />
              <p className="text-gray-700 font-bold">123 Tahrir Street, Downtown, Cairo, Egypt</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-2">Our Support Team is Always With You</h3>
          <p className="text-gray-600 text-center mb-10">Our team of professional technicians is ready to help you anytime</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition duration-300">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-orange-600 text-3xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Technical Support</h4>
              <p className="text-gray-600 mb-4">Our certified technicians are ready to answer your technical inquiries</p>
              <p className="text-orange-600 font-bold">+20 100 200 3000</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition duration-300">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaWrench className="text-orange-600 text-3xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Customer Service</h4>
              <p className="text-gray-600 mb-4">Our teams are ready to serve you and schedule repair and maintenance appointments</p>
              <p className="text-orange-600 font-bold">+20 200 300 4000</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition duration-300">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCar className="text-orange-600 text-3xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Roadside Emergency</h4>
              <p className="text-gray-600 mb-4">Repair service for your car on the road anywhere and anytime</p>
              <p className="text-orange-600 font-bold">+20 111 222 3333</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;