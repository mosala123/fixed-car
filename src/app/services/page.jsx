import React from 'react';
import { FaTools, FaCar, FaCarBattery, FaOilCan, FaFan } from 'react-icons/fa';
import { GiCarWheel } from 'react-icons/gi';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const ServicesPage = () => {

    const services = [
        {
            id: 1,
            title: 'Regular Maintenance & Oil Change',
            description: 'Engine oil replacement with premium oils and filter changes to ensure maximum engine life.',
            icon: <FaOilCan className="w-8 h-8" />,
            price: 'Starting from 500 EGP'
        },
        {
            id: 2,
            title: 'Full Computer Diagnostics',
            description: 'Precise fault detection using the latest diagnostic tools to identify issues accurately and save money.',
            icon: <FaCarBattery className="w-8 h-8" />,
            price: 'Starting from 200 EGP'
        },
        {
            id: 3,
            title: 'General Mechanics',
            description: 'Repair of engine, gearbox, and suspension issues by experienced professional technicians.',
            icon: <FaTools className="w-8 h-8" />,
            price: 'Based on inspection'
        },
        {
            id: 4,
            title: 'Brake System Service',
            description: 'Inspection and replacement of brake pads and discs to ensure your safety and your family’s safety on the road.',
            icon: <GiCarWheel className="w-8 h-8" />,
            price: 'Starting from 300 EGP'
        },
        {
            id: 5,
            title: 'AC & Cooling System',
            description: 'Freon refill, compressor maintenance and cooling system clean-up for perfect summer performance.',
            icon: <FaFan className="w-8 h-8" />,
            price: 'Starting from 400 EGP'
        },
        {
            id: 6,
            title: 'Bodywork & Paint',
            description: 'Exterior body repair and high-quality oven painting to restore your car like new.',
            icon: <FaCar className="w-8 h-8" />,
            price: 'Based on inspection'
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-16">

            <div className="bg-white shadow-sm py-12 mb-10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Our <span className="text-orange-500">Professional</span> Services
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        We offer a full range of car maintenance services with the highest quality standards and competitive pricing.
                        Select the service you need and leave the rest to us.
                    </p>

                    <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-6 rounded-full"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 group"
                        >

                            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                            <p className="text-gray-500 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                                <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                    {service.price}
                                </span>

                                <Link
                                    href="/booking"
                                    className="flex items-center text-orange-500 font-bold hover:text-orange-600 transition-colors"
                                >
                                    Book Now
                                    <FiArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 mt-20">
                <div className="bg-gray-800 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Didn’t find what you’re looking for?</h3>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            We're here to help. Contact us directly, explain your car issue, and our experts will diagnose it and provide the best solution.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                href="/contact"
                                className="px-8 py-3 bg-transparent border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href="/booking"
                                className="px-8 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 hover:shadow-orange-500/30 transition-all"
                            >
                                Book Service Appointment
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ServicesPage;
