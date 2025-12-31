import Link from "next/link";
import React from "react";

const WorkersPage = () => {
  const workers = [
    { id: 1, name: "Ahmed Ali", role: "Master Mechanic", img: "/worker1.png" },
    { id: 2, name: "Mohamed Cairo", role: "Electrical Expert", img: "/worker1.png" },
    { id: 3, name: "Samy Fawzy", role: "Body & Paint", img: "/worker1.png" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50/50 text-center">
      {/* Head Section */}
      <div className="mb-16">
        <span className="text-orange-600 font-semibold tracking-widest uppercase text-1xl">
          Meet Our Expertise
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mt-3">
          Our Awesome Team
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full "></div>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto px-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-30">
        {workers.map((worker) => (
          <div 
            key={worker.id} 
            className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out pb-8 mb-10 "
          >
            {/* Image Section - Centered and Overlapping */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
              <div className="relative p-1 bg-white rounded-full border-2 border-orange-500/20 group-hover:border-orange-500 transition-colors duration-500">
                <img
                  src={worker.img}
                  alt={worker.name}
                  className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover shadow-md"
                />
              </div>
            </div>

            {/* Card Content */}
            <div className="pt-24 px-6 ">
              <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-orange-600 transition-colors">
                {worker.name}
              </h3>
              <p className="text-gray-500 font-medium mb-6 text-sm italic">
                {worker.role}
              </p>
              
              <Link 
                href={`/workers/${worker.id}`}
                className="inline-block w-full py-3 px-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-orange-600 transform group-hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-orange-200"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkersPage;