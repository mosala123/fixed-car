'use client';

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";
import { FaCar, FaUser, FaHistory, FaPlus, FaTrash, FaSave } from "react-icons/fa";

const Profilepages = () => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [activeTab, setActiveTab] = useState("profile");

    useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (error || !data.user) {
                router.push("/login");
            } else {
                setUser(data.user);
            }
            setLoading(false);
        };
        fetchUser();
    }, [router]);

    const handleUpdate = async () => {
        setUpdating(true);
        const { error, data } = await supabase.auth.updateUser({
            data: {
                firstName: user.user_metadata.firstName,
                lastName: user.user_metadata.lastName,
                phone: user.user_metadata.phone,
                vehicleType: user.user_metadata.vehicleType,
                modelYear: user.user_metadata.modelYear,
            },
        });

        if (error) {
            alert("Error: " + error.message);
        } else {
            alert("Profile updated successfully! ✅");
            setUser(data.user);
        }
        setUpdating(false);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-10" dir="ltr">
            <div className="max-w-6xl mx-auto">
                
                {/* Header Section */}
                <div className="bg-slate-800 rounded-2xl p-8 text-white mb-8 flex flex-col md:flex-row justify-between items-center shadow-lg border-b-4 border-orange-500">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">
                            Welcome, <span className="text-orange-500">{user?.user_metadata?.firstName || "User"}</span>
                        </h1>
                        <p className="text-slate-400">Email: {user?.email}</p>
                    </div>
                    <button
                        onClick={async () => {
                            await supabase.auth.signOut();
                            router.push("/login");
                        }}
                        className="mt-4 md:mt-0 bg-red-500/10 hover:bg-red-500 border border-red-500 text-red-500 hover:text-white px-6 py-2 rounded-lg transition font-bold"
                    >
                        Logout
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="lg:w-1/4 space-y-2">
                        <TabButton 
                            active={activeTab === "profile"} 
                            onClick={() => setActiveTab("profile")} 
                            icon={<FaUser />} 
                            label="Personal Info" 
                        />
                        <TabButton 
                            active={activeTab === "vehicles"} 
                            onClick={() => setActiveTab("vehicles")} 
                            icon={<FaCar />} 
                            label="My Garage" 
                        />
                        <TabButton 
                            active={activeTab === "history"} 
                            onClick={() => setActiveTab("history")} 
                            icon={<FaHistory />} 
                            label="Service History" 
                        />
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-3/4 bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                        
                        {/* 1. Profile Tab */}
                        {activeTab === "profile" && (
                            <div className="space-y-8 animate-fadeIn text-left">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 border-b pb-4 mb-6">Edit Profile</h3>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputGroup 
                                            label="First Name" 
                                            value={user?.user_metadata?.firstName} 
                                            onChange={(val) => setUser({...user, user_metadata: {...user.user_metadata, firstName: val}})}
                                        />
                                        <InputGroup 
                                            label="Last Name" 
                                            value={user?.user_metadata?.lastName} 
                                            onChange={(val) => setUser({...user, user_metadata: {...user.user_metadata, lastName: val}})}
                                        />
                                        <InputGroup 
                                            label="Phone Number" 
                                            value={user?.user_metadata?.phone} 
                                            onChange={(val) => setUser({...user, user_metadata: {...user.user_metadata, phone: val}})}
                                        />
                                    </div>
                                </div>

                                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                                    <h3 className="text-lg font-bold text-orange-800 mb-4 flex items-center gap-2">
                                        <FaCar /> Vehicle Details
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
                                            <select 
                                                value={user?.user_metadata?.vehicleType || ""}
                                                onChange={(e) => setUser({...user, user_metadata: {...user.user_metadata, vehicleType: e.target.value}})}
                                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-orange-500 bg-white shadow-sm"
                                            >
                                                <option value="">Select Type</option>
                                                <option>Sedan</option>
                                                <option>SUV</option>
                                                <option>Truck</option>
                                            </select>
                                        </div>
                                        <InputGroup 
                                            label="Model Year" 
                                            type="number"
                                            value={user?.user_metadata?.modelYear} 
                                            onChange={(val) => setUser({...user, user_metadata: {...user.user_metadata, modelYear: val}})}
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={handleUpdate}
                                    disabled={updating}
                                    className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-bold transition shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 disabled:bg-gray-400"
                                >
                                    {updating ? "Saving..." : <><FaSave /> Save Changes</>}
                                </button>
                            </div>
                        )}

                        {/* 2. Vehicles Tab */}
                        {activeTab === "vehicles" && (
                            <div className="space-y-6 animate-fadeIn">
                                <div className="flex justify-between items-center border-b pb-4">
                                    <h3 className="text-xl font-bold text-gray-800">My Garage</h3>
                                    <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-600 transition">
                                        <FaPlus /> Add New Vehicle
                                    </button>
                                </div>
                                <div className="p-10 text-center border-2 border-dashed border-gray-200 rounded-2xl text-gray-400">
                                    <FaCar className="mx-auto mb-4 text-5xl opacity-20" />
                                    <p>Primary Vehicle: {user?.user_metadata?.vehicleType || "No vehicle registered"}</p>
                                </div>
                            </div>
                        )}

                        {/* 3. History Tab */}
                        {activeTab === "history" && (
                            <div className="space-y-6 animate-fadeIn">
                                <h3 className="text-xl font-bold text-gray-800 border-b pb-4">Service History</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-gray-50 text-gray-600 text-sm">
                                            <tr>
                                                <th className="p-4 border-b">Date</th>
                                                <th className="p-4 border-b">Service</th>
                                                <th className="p-4 border-b">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b hover:bg-gray-50 transition">
                                                <td className="p-4">No recent bookings</td>
                                                <td className="p-4">-</td>
                                                <td className="p-4">-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Sub-components
const TabButton = ({ active, onClick, icon, label }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl font-bold transition ${
            active ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30" : "bg-white text-gray-600 hover:bg-orange-50"
        }`}
    >
        {icon} {label}
    </button>
);

const InputGroup = ({ label, value, onChange, type = "text" }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        <input
            type={type}
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none transition shadow-sm"
        />
    </div>
);

export default Profilepages;