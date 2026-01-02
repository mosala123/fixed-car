"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaUser, FaPhone, FaCar, FaCalendarAlt, FaClock, FaTools, FaCheckCircle } from 'react-icons/fa';
import { supabase } from '@/lib/supabase';

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const { data, error } = await supabase
        .from('appointments')
        .insert([
          {
            customer_name: formData.customer_name,
            phone_number: formData.phone_number,
            car_brand: formData.car_brand,
            car_model: `${formData.car_model} ${formData.car_year}`,
            appointment_date: `${formData.appointment_date} ${formData.appointment_time}`,
            notes: `Service: ${formData.service_type}\n${formData.notes}`,
            status: "pending"
          }
        ]);

      if (error) throw error;

      router.push('/success');
    } catch (error) {
      setMessage({ type: "error", text: "Booking failed. Please try again" });
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your <span className="text-orange-500">Car Service</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Fill out the form below to schedule your appointment
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 border-b border-orange-200">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <FaCar className="text-orange-500" />
                  Service Booking Form
                </h2>
                <p className="text-gray-600 mt-2">
                  Please provide your details to book your appointment
                </p>
              </div>

              <div className="p-6 md:p-8">
                {message.text && (
                  <div className={`mb-6 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {message.text}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <FaUser className="text-orange-500" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <FaUser className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="customer_name"
                            value={formData.customer_name}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <FaPhone className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <FaCar className="text-orange-500" />
                      Vehicle Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Make
                        </label>
                        <input
                          type="text"
                          name="car_brand"
                          value={formData.car_brand}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                          placeholder="Toyota"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Model
                        </label>
                        <input
                          type="text"
                          name="car_model"
                          value={formData.car_model}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                          placeholder="Camry"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Year
                        </label>
                        <input
                          type="number"
                          name="car_year"
                          value={formData.car_year}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                          placeholder="2020"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <FaTools className="text-orange-500" />
                      Service Information
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service Type
                        </label>
                        <select 
                          name="service_type"
                          value={formData.service_type}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                        >
                          <option value="">Select a service...</option>
                          <option>Oil Change & Maintenance</option>
                          <option>Computer Diagnostics</option>
                          <option>General Mechanical Repair</option>
                          <option>Brake System Service</option>
                          <option>AC & Cooling System</option>
                          <option>Bodywork & Paint</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Date
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                              <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="date"
                              name="appointment_date"
                              value={formData.appointment_date}
                              onChange={handleChange}
                              required
                              className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Time
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                              <FaClock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="time"
                              name="appointment_time"
                              value={formData.appointment_time}
                              onChange={handleChange}
                              required
                              className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Notes
                        </label>
                        <textarea
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                          placeholder="Describe any issues or specific requests..."
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaCheckCircle className="h-5 w-5" />
                      {loading ? 'Booking...' : 'Book Appointment Now n'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="space-y-6">
              
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Service Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold">Emergency Only</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="text-orange-400 mt-1">
                      <FaCheckCircle />
                    </div>
                    <span>Certified Technicians</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-orange-400 mt-1">
                      <FaCheckCircle />
                    </div>
                    <span>Same Day Service Available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-orange-400 mt-1">
                      <FaCheckCircle />
                    </div>
                    <span>Transparent Pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-orange-400 mt-1">
                      <FaCheckCircle />
                    </div>
                    <span>6-Month Warranty</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Need Help?</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                    <a href="tel:+15551234567" className="text-orange-500 font-bold text-lg hover:text-orange-600 transition">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Or send us an email</p>
                    <a href="mailto:support@autoservice.com" className="text-orange-500 font-bold hover:text-orange-600 transition">
                      support@autoservice.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            We'll contact you within 24 hours to confirm your appointment
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;