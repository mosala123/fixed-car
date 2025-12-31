"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
    const router = useRouter();
    
    // 1. State for all fields
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [vehicleType, setVehicleType] = useState(""); 
    const [modelYear, setModelYear] = useState("");    
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        setLoading(true);

        // 2. Send data to Supabase Auth with Metadata
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    firstName,
                    lastName,
                    phone,
                    vehicleType,
                    modelYear,
                },
            },
        });

        if (error) {
            alert(error.message);
        } else {
            alert("Account created successfully! You can now log in.");
            router.push("/login");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 pt-5 md:p-6 text-left" dir="ltr">
            <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

                {/* Left Section (Branding) */}
                <div className="lg:w-2/5 bg-slate-800 text-white p-8 md:p-12 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-6 text-orange-500">Car Place</h1>
                    <h2 className="text-2xl font-semibold mb-4">Professional Car Maintenance Platform</h2>
                    <p className="mb-10 leading-relaxed text-slate-300">
                        Join us to get the best maintenance services for your vehicle, track service records, and book your appointment with a click of a button.
                    </p>
                    <ul className="space-y-4 text-sm text-slate-300">
                        <li>• Certified technicians for all vehicle types</li>
                        <li>• Fast and accurate diagnostic testing</li>
                        <li>• Transparent and competitive pricing</li>
                    </ul>
                </div>

                {/* Right Section (Form) */}
                <div className="lg:w-3/5 p-6 md:p-12">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800">Create New Account</h2>
                        <p className="text-gray-500 mt-2">Enter your details to join us</p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-5">
                        {/* Name Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input
                                    type="text"
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input
                                    type="text"
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                    placeholder="example@mail.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                    placeholder="01xxxxxxxxx"
                                />
                            </div>
                        </div>

                        {/* Vehicle Section */}
                        <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                            <h3 className="text-sm font-bold text-orange-800 mb-3 text-center">Vehicle Information (Optional)</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <select 
                                    value={vehicleType}
                                    onChange={(e) => setVehicleType(e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-orange-500 bg-white"
                                >
                                    <option value="">Vehicle Type</option>
                                    <option>Sedan</option>
                                    <option>SUV</option>
                                    <option>Truck</option>
                                </select>
                                <input
                                    type="number"
                                    value={modelYear}
                                    onChange={(e) => setModelYear(e.target.value)}
                                    placeholder="Model Year"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                        </div>

                        {/* Password Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                                <input
                                    type="password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-lg transition shadow-lg shadow-orange-500/30 disabled:bg-gray-400"
                        >
                            {loading ? "Creating Account..." : "Sign Up"}
                        </button>

                        <p className="text-center text-gray-600 text-sm">
                            Already have an account?{" "}
                            <Link href="/login" className="text-orange-600 font-bold hover:underline">
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