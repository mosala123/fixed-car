

import Link from "next/link"

const HeroSectionPage = () => {
  return (
    <div >
      <section className="min-h-screen   py-16 sm:py-24 lg:py-32  " style={{}}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
            <div className="max-w-prose text-left">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl pt-9">
                FIND CLOTHES THAT MATCHES YOUR STYLE
                <strong className="text-indigo-600"></strong>
              </h1>

              <p className="mt-4 text-base text-gray-700 sm:text-lg">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
              </p>
              <div className="mt-8 flex items-center gap-4">
                
                <Link href="/arrivals"  className="inline-block rounded-lg border border-[#000]  bg-[#000] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#fff] hover:text-[#000] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  > Shop Now
                </Link>
              </div>

              <div className="mt-10 flex   gap-6   sm:gap-10 " style={{ justifyContent: "flex-start", display: "flex", alignItems: "center" }}>

                <div className="flex flex-col items-start" style={{ justifyContent: "center", alignItems: "center" }}>
                  <h2 className="text-3xl font-bold text-gray-900">200+</h2>
                  <p className="text-sm text-gray-600">International Brands</p>
                </div>

                <div className="flex flex-col items-start" style={{ justifyContent: "center", alignItems: "center" }}>
                  <h2 className="text-3xl font-bold text-gray-900">2,000+</h2>
                  <p className="text-sm text-gray-600">High-Quality Products</p>
                </div>

                <div className="flex flex-col items-start" style={{ justifyContent: "center", alignItems: "center" }}>
                  <h2 className="text-3xl font-bold text-gray-900">30,000+</h2>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-0 flex justify-center items-center">
              <img
                className="w-full max-w-lg  "
                src="/download-removebg-preview (7).png"
                alt="Fashion Model"
              />

            </div>

          </div>
        </div>

      </section>
      <div className='py-2  gap-2     ' style={{ backgroundColor: "#000", flexWrap: "nowrap", overflowX: "auto", display: "flex ", justifyContent: "space-around" }}>
        <h1 className="fs-7 text-nowrap mb-0 py-5" style={{ color: "white", fontSize: "clamp(14px, 2vw, 18px)" }}>ZARA</h1>
        <h1 className="fs-7 text-nowrap mb-0 py-5" style={{ color: "white", fontSize: "clamp(14px, 2vw, 18px)" }}>GUCCI</h1>
        <h1 className="fs-7 text-nowrap mb-0 py-5" style={{ color: "white", fontSize: "clamp(14px, 2vw, 18px)" }}>PRADA</h1>
        <h1 className="fs-7 text-nowrap mb-0 py-5" style={{ color: "white", fontSize: "clamp(14px, 2vw, 18px)" }}> VERSACE</h1>
        <h1 className="fs-7 text-nowrap mb-0 py-5" style={{ color: "white", fontSize: "clamp(14px, 2vw, 18px)" }}> CALVIN KLEIN</h1>
      </div>

    </div>
  );
};

export default HeroSectionPage;