'use client';

import Link from "next/link";

const GeneralHandlingError = ({ error, reset }) => {
  return (
    <main
      className="flex justify-center items-center min-h-screen px-4 relative overflow-hidden bg-[#0f0f1a]"
      style={{ backgroundImage: "linear-gradient(rgba(15,15,26,.9), rgba(15,15,26,.95)), url('/images.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="text-center p-8 rounded-2xl shadow-2xl bg-[#1a1a2e]/95 max-w-md w-full border border-white/10">
        <div className="mb-5 rounded-xl overflow-hidden border border-white/10">
          <img src="/worker1.png" alt="Support team" className="w-full h-32 object-cover" />
        </div>
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-white mb-3">Oops!</h1>
        <h4 className="text-gray-400 mb-6 text-sm leading-relaxed">Something went wrong</h4>

        <p className="mb-6 text-sm leading-relaxed text-lg font-semibold text-gray-200">
          {error?.message || "An unexpected error occurred. Please try again later."}
        </p>

        <button
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#1a1a2e]"
          onClick={reset}
        >
          Try Again
        </button>
        <Link href="/" className="mt-4 inline-block text-sm text-orange-400 hover:underline">
          Go back to Home
        </Link>

      </div>
    </main>
  );
};

export default GeneralHandlingError;
