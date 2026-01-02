"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80",
      title: "CAR REPAIRING AND SERVICE",
      description: "Typewriting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      button1: "CONTACT",
      button2: "READ MORE"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1920&q=80",
      title: "PROFESSIONAL AUTO REPAIR",
      description: "Expert technicians providing quality service for all vehicle types. We use the latest diagnostic equipment and genuine parts to ensure your car runs smoothly.",
      button1: "CONTACT",
      button2: "READ MORE"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80",
      title: "TRUSTED MECHANICS TEAM",
      description: "With years of experience in automotive repair, our certified team delivers reliable solutions for your vehicle maintenance and repair needs.",
      button1: "CONTACT",
      button2: "READ MORE"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark Overlay - أقوى من اليسار وأفتح من اليمين */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <div className="max-w-2xl">
                  {/* Title */}
                  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 leading-tight">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contactus" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition-all duration-300 uppercase text-sm tracking-wider">
                      {slide.button1}
                    </Link>
                    <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded transition-all duration-300 uppercase text-sm tracking-wider">
                      {slide.button2}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800/50 hover:bg-gray-700/70 text-white rounded flex items-center justify-center transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800/50 hover:bg-gray-700/70 text-white rounded flex items-center justify-center transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;