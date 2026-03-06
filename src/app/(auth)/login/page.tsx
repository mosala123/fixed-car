"use client";

import { supabase } from "../../../lib/supabase";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoSettingsOutline, IoMailOutline, IoLockClosedOutline, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw]     = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
    } else {
      router.push("/profile");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0f0f1a] flex items-center justify-center p-4">
      {/* Glow */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-5xl bg-[#1a1a2e] border border-white/5 rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl relative z-10">

        {/* ── Left branding ── */}
        <div className="lg:w-2/5 relative bg-gradient-to-br from-[#16213e] to-[#0f0f1a] p-10 flex flex-col justify-between overflow-hidden">
          <img
            src="/images.jpg"
            alt="Workshop background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#16213e]/75 via-[#16213e]/70 to-[#0f0f1a]/95" />
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                <IoSettingsOutline size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-extrabold text-base tracking-wider leading-none">CAR REPAIR</p>
                <p className="text-gray-600 text-[10px] tracking-widest uppercase mt-0.5">Professional Auto Services</p>
              </div>
            </div>

            <h2 className="text-3xl font-extrabold text-white mb-3 leading-tight">
              Welcome <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Back!</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Log in to manage your car services, track repairs, and book your next appointment.
            </p>

            <ul className="space-y-3">
              {['Certified ASE Technicians', 'Real-time Booking Updates', 'Full Service History'].map(item => (
                <li key={item} className="flex items-center gap-3 text-gray-400 text-sm">
                  <IoCheckmarkCircle size={18} className="text-orange-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 mt-8">
            <div className="mb-5 rounded-xl overflow-hidden border border-white/10">
              <img src="/worker1.png" alt="Expert mechanic" className="w-full h-28 object-cover" />
            </div>
            <p className="text-gray-600 text-xs">Don't have an account?</p>
            <Link href="/register" className="text-orange-400 font-bold text-sm hover:text-orange-300 transition-colors">
              Create one for free →
            </Link>
          </div>
        </div>

        {/* ── Right form ── */}
        <div className="lg:w-3/5 p-8 md:p-12 flex items-center">
          <div className="w-full">
            <div className="mb-8">
              <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                Sign In
              </span>
              <h2 className="text-2xl font-extrabold text-white">Login to Your Account</h2>
              <p className="text-gray-500 text-sm mt-1">Enter your credentials below</p>
            </div>

            {error && (
              <div className="mb-5 p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <IoMailOutline size={17} className="text-gray-600" />
                  </div>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                    className="w-full pl-10 pr-4 py-3 bg-[#0f0f1a] border border-white/10 text-white rounded-xl
                               focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition
                               placeholder-gray-600 text-sm"
                    placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <IoLockClosedOutline size={17} className="text-gray-600"  />
                  </div>
                  <input type={showPw ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required
                    className="w-full pl-10 pr-10 py-3 bg-[#0f0f1a] border border-white/10 text-white rounded-xl
                               focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition
                               placeholder-gray-600 text-sm"
                    placeholder="Password" />
                  <button type="button" onClick={() => setShowPw(!showPw)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-orange-400 transition-colors">
                    {showPw ? <IoEyeOffOutline size={17} /> : <IoEyeOutline size={17} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-gray-500 text-sm cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-orange-500" />
                  Remember me
                </label>
                <span className="text-orange-400 text-sm cursor-pointer hover:text-orange-300 transition-colors">
                  Forgot password?
                </span>
              </div>

              <button type="submit" disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold py-4 rounded-xl
                           shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5
                           transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                {loading ? "Signing in..." : "Login"}
              </button>

              <p className="text-center text-gray-500 text-sm">
                Don't have an account?{" "}
                <Link href="/register" className="text-orange-400 font-bold hover:text-orange-300 transition-colors">
                  Create one
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
