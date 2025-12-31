"use client";

import { supabase } from "../../../lib/supabase";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";  

const LoginPage = () => {
  const router = useRouter(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      router.push("/profile"); 
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

        {/* Left Section */}
        <div className="lg:w-2/5 bg-slate-800 text-white p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-6">Car Place</h1>

          <h2 className="text-2xl font-semibold mb-4">
            Welcome Back
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Log in to your account to manage your car services,
            track repairs, and get professional support.
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-3/5 p-6 md:p-12 flex items-center">
          <div className="w-full">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800">
                Login to Your Account
              </h2>
              <p className="text-gray-500 mt-2">
                Enter your credentials below
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="Email Address"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="Password"
                  required
                />
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" className="w-4 h-4" />
                  Remember me
                </label>

                <span className="text-blue-600 cursor-pointer hover:underline">
                  Forgot password?
                </span>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition"
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              {/* Register */}
              <p className="text-center text-gray-600 text-sm">
                Don’t have an account?{" "}
                <Link href="/register" className="text-blue-600 font-semibold cursor-pointer hover:underline">
                  Create one
                </Link >
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
