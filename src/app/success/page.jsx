"use client"

import React from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaCar, FaCalendarAlt, FaHome, FaPhoneAlt } from 'react-icons/fa';

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 animate-bounce">
              <FaCheckCircle className="text-green-500 text-5xl" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Booking Confirmed!
            </h1>
            <p className="text-green-100 text-lg">
              Your appointment has been successfully scheduled
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                What Happens Next?
              </h2>
              <p className="text-gray-600 text-lg">
                We've received your booking request and our team is reviewing it
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Confirmation Call</h3>
                  <p className="text-gray-600">
                    We'll contact you within 24 hours to confirm your appointment details
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Service Preparation</h3>
                  <p className="text-gray-600">
                    Our technicians will prepare for your specific service requirements
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Appointment Day</h3>
                  <p className="text-gray-600">
                    Bring your vehicle at the scheduled time and we'll take care of the rest
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <FaPhoneAlt className="text-orange-400" />
                Need to Make Changes?
              </h3>
              <p className="text-gray-300 mb-4">
                If you need to reschedule or modify your appointment, please contact us
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-orange-400 font-semibold">Phone:</span>
                  <a href="tel:+15551234567" className="text-white hover:text-orange-400 transition">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-400 font-semibold">Email:</span>
                  <a href="mailto:support@autoservice.com" className="text-white hover:text-orange-400 transition">
                    support@autoservice.com
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaHome className="text-xl" />
                Back to Home
              </Link>
              
              <Link 
                href="/services"
                className="flex items-center justify-center gap-3 bg-white text-orange-600 font-bold py-4 px-6 rounded-xl border-2 border-orange-500 hover:bg-orange-50 transition-all duration-300"
              >
                <FaCar className="text-xl" />
                View Services
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            A confirmation email has been sent to your registered email address
          </p>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;