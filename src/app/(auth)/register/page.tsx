"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoSettingsOutline, IoPersonOutline, IoMailOutline, IoCallOutline, IoLockClosedOutline, IoCarSportOutline, IoEyeOutline, IoEyeOffOutline, IoCheckmarkCircle } from "react-icons/io5";

const inputClass = `
  w-full px-4 py-3 bg-[#0f0f1a] border border-white/10 text-white rounded-xl
  focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition
  placeholder-gray-600 text-sm
`;
const labelClass = "block text-gray-400 text-sm font-medium mb-2";

const RegisterPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    password: "", confirmPassword: "", vehicleType: "", modelYear: "",
  });
  const [showPw, setShowPw]   = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          firstName:   form.firstName,
          lastName:    form.lastName,
          phone:       form.phone,
          vehicleType: form.vehicleType,
          modelYear:   form.modelYear,
        },
      },
    });

    if (error) {
      setError(error.message);
    } else {
      if (data.session) {
        router.push("/profile");
      } else {
        const { error: loginError } = await supabase.auth.signInWithPassword({
          email: form.email,
          password: form.password,
        });

        if (loginError) {
          setError("Account created. Please confirm your email then login.");
        } else {
          router.push("/profile");
        }
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0f0f1a] flex items-center justify-center p-4 py-10">
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl bg-[#1a1a2e] border border-white/5 rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl relative z-10">

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
              Join Us <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Today!</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Create your account and get access to professional car maintenance services, booking, and full service history.
            </p>

            <ul className="space-y-3">
              {[
                'Certified technicians for all vehicles',
                'Fast & accurate diagnostic testing',
                'Transparent competitive pricing',
                'Real-time booking & updates',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-gray-400 text-sm">
                  <IoCheckmarkCircle size={18} className="text-orange-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 mt-8">
            <div className="mb-5 rounded-xl overflow-hidden border border-white/10">
              <img src="/worker1.png" alt="Certified team" className="w-full h-28 object-cover" />
            </div>
            <p className="text-gray-600 text-xs">Already have an account?</p>
            <Link href="/login" className="text-orange-400 font-bold text-sm hover:text-orange-300 transition-colors">
              Log in here →
            </Link>
          </div>
        </div>

        {/* ── Right form ── */}
        <div className="lg:w-3/5 p-8 md:p-12">
          <div className="mb-8">
            <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Create Account
            </span>
            <h2 className="text-2xl font-extrabold text-white">Create New Account</h2>
            <p className="text-gray-500 text-sm mt-1">Fill in your details to get started</p>
          </div>

          {error && (
            <div className="mb-5 p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-5">

            {/* Name */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <IoPersonOutline size={13} className="text-orange-400" />
                </div>
                <span className="text-white font-bold text-xs uppercase tracking-widest">Personal Info</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input type="text" required value={form.firstName} onChange={handleChange("firstName")}
                    className={inputClass} placeholder="firstName" />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input type="text" required value={form.lastName} onChange={handleChange("lastName")}
                    className={inputClass} placeholder="lastName" />
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <IoMailOutline size={16} className="text-gray-600" />
                  </div>
                  <input type="email" required value={form.email} onChange={handleChange("email")}
                    className={`${inputClass} pl-9`} placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className={labelClass}>Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <IoCallOutline size={16} className="text-gray-600" />
                  </div>
                  <input type="tel" required value={form.phone} onChange={handleChange("phone")}
                    className={`${inputClass} pl-9`} placeholder="01xxxxxxxxx" />
                </div>
              </div>
            </div>

            {/* Vehicle */}
            <div className="bg-orange-500/5 border border-orange-500/15 p-5 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <IoCarSportOutline size={18} className="text-orange-400" />
                <span className="text-orange-300 font-bold text-xs uppercase tracking-widest">Vehicle Info (Optional)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Vehicle Type</label>
                  <select value={form.vehicleType} onChange={handleChange("vehicleType")}
                    className={inputClass}>
                    <option value="">Select type</option>
                    <option>Sedan</option>
                    <option>SUV</option>
                    <option>Truck</option>
                    <option>Hatchback</option>
                    <option>Van</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Model Year</label>
                  <input type="number" value={form.modelYear} onChange={handleChange("modelYear")}
                    className={inputClass} placeholder="2022" min="1990" max="2025" />
                </div>
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <IoLockClosedOutline size={13} className="text-orange-400" />
                </div>
                <span className="text-white font-bold text-xs uppercase tracking-widest">Security</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Password</label>
                  <div className="relative">
                    <input type={showPw ? "text" : "password"} required value={form.password} onChange={handleChange("password")}
                      className={`${inputClass} pr-10`} placeholder="••••••••" />
                    <button type="button" onClick={() => setShowPw(!showPw)}
                      className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-orange-400 transition-colors">
                      {showPw ? <IoEyeOffOutline size={16} /> : <IoEyeOutline size={16} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Confirm Password</label>
                  <input type="password" required value={form.confirmPassword} onChange={handleChange("confirmPassword")}
                    className={inputClass} placeholder="Inter Paddword" />
                </div>
              </div>
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold py-4 rounded-xl
                         shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5
                         transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            <p className="text-center text-gray-500 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-orange-400 font-bold hover:text-orange-300 transition-colors">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
