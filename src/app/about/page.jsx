import Link from 'next/link'
import Image from 'next/image'
import { IoCarSportOutline, IoConstructOutline, IoSettingsOutline } from 'react-icons/io5'

const AboutPage = () => {
    return (
        <div className="min-h-screen">
            <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-2 md:gap-12 lg:gap-16">

                        <div className="order-2 md:order-1 max-w-prose text-center md:text-left">
                            <p className="text-orange-500 font-medium mb-2 text-2xl">
                                About our Company
                            </p>

                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                                How Can We Help You
                            </h1>

                            <p className="mt-4 text-base text-gray-700 sm:mt-6 sm:text-lg md:mt-8">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi.
                                Natus, provident accusamus impedit minima harum corporis iusto.
                            </p>

                            <div className="mt-6 sm:mt-8 md:mt-10">
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-base font-medium text-white shadow-md transition hover:bg-orange-600"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>

                        <div className="order-1 md:order-2 w-full max-w-md md:max-w-full">
                            <div className="relative border-l-2 border-b-2 border-dashed border-orange-500 rounded-2xl">

                                <div className="relative ml-4 mb-4 overflow-hidden rounded-2xl shadow-2xl aspect-square lg:h-[500px]">
                                    <Image
                                        src="/images.jpg"
                                        alt="about images"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* -------------------------------------- */}
           <div className="mt-4 mb-12 py-12 mx-4 md:px-10">


                <div className="flex flex-col items-center justify-center text-center mb-12">
                    <p className="text-orange-500 font-medium text-lg mb-2">
                        What We Do
                    </p>
                    <h1 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-bold">
                        Our Services
                    </h1>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                        <div className="group bg-[#f7f6f2]  shadow-lg p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:bg-orange-500">
                            <IoCarSportOutline
                                size={48}
                                className="text-orange-500 mb-4 transition-colors duration-300 group-hover:text-white text-center mx-auto"
                            />
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-white">
                                Car Repair
                            </h3>
                            <p className="text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-white">
                                Professional car repair services with certified technicians and genuine parts.
                            </p>
                        </div>

                        <div className="group bg-[#f7f6f2]  shadow-lg p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:bg-orange-500">
                            <IoConstructOutline
                                size={48}
                                className="text-orange-500 mb-4 transition-colors duration-300 group-hover:text-white text-center mx-auto"
                            />
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-white">
                                Maintenance
                            </h3>
                            <p className="text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-white">
                                Regular maintenance to keep your vehicle running smoothly and efficiently.
                            </p>
                        </div>

                        <div className="group bg-[#f7f6f2]  shadow-lg p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:bg-orange-500">
                            <IoConstructOutline
                                size={48}
                                className="text-orange-500 mb-4 transition-colors duration-300 group-hover:text-white text-center mx-auto"
                            />
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-white">
                                Diagnostics
                            </h3>
                            <p className="text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-white">
                                Advanced diagnostics using modern equipment to identify issues quickly.
                            </p>
                        </div>

                        <div className="group bg-[#f7f6f2]  shadow-lg p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:bg-orange-500">
                            <IoConstructOutline
                                size={48}
                                className="text-orange-500 mb-4 transition-colors duration-300 group-hover:text-white text-center mx-auto"
                            />
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-white">
                                Engine Service
                            </h3>
                            <p className="text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-white">
                                Complete engine check and servicing to ensure top performance.
                            </p>
                        </div>


                        <div className="group bg-[#f7f6f2]  shadow-lg p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:bg-orange-500">
                            <IoConstructOutline
                                size={48}
                                className="text-orange-500 mb-4 transition-colors duration-300 group-hover:text-white text-center mx-auto"
                            />
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-white">
                                Car Inspection
                            </h3>
                            <p className="text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-white">
                                Full car inspection services ensuring safety and reliability.
                            </p>
                        </div>

                        <div className="group bg-[#f7f6f2]  shadow-lg p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:bg-orange-500">
                            <IoConstructOutline
                                size={48}
                                className="text-orange-500 mb-4 transition-colors duration-300 group-hover:text-white text-center mx-auto"
                            />
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-white">
                                Car Inspection
                            </h3>
                            <p className="text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-white">
                                Full car inspection services ensuring safety and reliability.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
{/* ----------------------------- */}




 

  <section
      className="mt-5 md:mt-12 py-5 bg-cover bg-center relative px-5 md:px-15"
      style={{ backgroundImage: "url(/images.jpg)" }}
    >
     
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">

         
          <div className="  p-6 shadow-lg">
            <IoSettingsOutline size={40} className="text-white mx-auto mb-2" />
            <p className="text-orange-500 text-3xl font-bold">2000+</p>
            <h5 className="text-white font-semibold mt-2">
              Expert Technicians
            </h5>
          </div>

           
          <div className=" p-6 shadow-lg">
            <IoSettingsOutline size={40} className="text-white mx-auto mb-2" />
            <p className="text-orange-500 text-3xl font-bold">1500+</p>
            <h5 className="text-white font-semibold mt-2">
              Happy Clients
            </h5>
          </div>

           
          <div className="   p-6 shadow-lg">
            <IoSettingsOutline size={40} className="text-white mx-auto mb-2" />
            <p className="text-orange-500 text-3xl font-bold">10+</p>
            <h5 className="text-white font-semibold mt-2">
              Years Experience
            </h5>
          </div>

        
          <div className="  p-6 shadow-lg">
            <IoSettingsOutline size={40} className="text-white mx-auto mb-2" />
            <p className="text-orange-500 text-3xl font-bold">24/7</p>
            <h5 className="text-white font-semibold mt-2">
              Support
            </h5>
          </div>

        </div>
      </div>
    </section>

        </div>
    )
}

export default AboutPage
