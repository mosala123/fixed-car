'use client';

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";
import { FaCar, FaHistory, FaSave } from "react-icons/fa";
import {
  IoPersonOutline, IoCarSportOutline, IoTimeOutline,
  IoLogOutOutline, IoSettingsOutline, IoMailOutline,
  IoCallOutline, IoShieldCheckmarkOutline, IoAddOutline, IoImageOutline,
} from "react-icons/io5";

// ── shared styles ─────────────────────────────────────────────────
const inputClass = `
  w-full px-4 py-3 bg-[#0f0f1a] border border-white/10 text-white rounded-xl
  focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition
  placeholder-gray-600 text-sm
`;
const labelClass = "block text-gray-400 text-sm font-medium mb-2";

// ── Sub-components ────────────────────────────────────────────────
const TabButton = ({ active, onClick, icon, label }) => (
  <button onClick={onClick}
    className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-xl font-bold text-sm transition-all
      ${active
        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20"
        : "bg-[#1a1a2e] border border-white/5 text-gray-400 hover:border-orange-500/30 hover:text-orange-400"}`}>
    {icon} {label}
  </button>
);

const InputGroup = ({ label, value, onChange, type = "text", placeholder = "" }) => (
  <div>
    <label className={labelClass}>{label}</label>
    <input type={type} value={value || ""} onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder} className={inputClass} />
  </div>
);

// ── Main Component ────────────────────────────────────────────────
const ProfilePage = () => {
  const router = useRouter();
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [saved, setSaved]     = useState(false);

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
        firstName:   user.user_metadata.firstName,
        lastName:    user.user_metadata.lastName,
        phone:       user.user_metadata.phone,
        vehicleType: user.user_metadata.vehicleType,
        modelYear:   user.user_metadata.modelYear,
        avatarUrl:   user.user_metadata.avatarUrl,
      },
    });
    if (error) {
      alert("Error: " + error.message);
    } else {
      setUser(data.user);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
    setUpdating(false);
  };

  const updateMeta = (field, val) =>
    setUser({ ...user, user_metadata: { ...user.user_metadata, [field]: val } });

  const handleAvatarUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Image size must be 2MB or less.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        updateMeta("avatarUrl", reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f0f1a] flex items-center justify-center">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-2 border-orange-500/20" />
          <div className="absolute inset-0 rounded-full border-t-2 border-orange-500 animate-spin" />
          <IoSettingsOutline size={22} className="absolute inset-0 m-auto text-orange-400" />
        </div>
      </div>
    );
  }

  const firstName   = user?.user_metadata?.firstName || "";
  const lastName    = user?.user_metadata?.lastName  || "";
  const initials    = firstName && lastName ? `${firstName[0]}${lastName[0]}`.toUpperCase() : user?.email?.[0]?.toUpperCase() ?? "?";
  const displayName = firstName ? `${firstName} ${lastName}`.trim() : user?.email ?? "";

  return (
    <div className="min-h-screen bg-[#0f0f1a] p-4 md:p-10">
      <div className="fixed top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Profile Hero ── */}
        <div
          className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f1a]
                        rounded-2xl p-8 mb-8 border border-white/5"
          style={{ backgroundImage: "linear-gradient(rgba(15,15,26,.8), rgba(15,15,26,.9)), url('/images.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400
                              flex items-center justify-center text-white text-2xl font-extrabold
                              shadow-xl shadow-orange-500/30 flex-shrink-0 overflow-hidden">
                {user?.user_metadata?.avatarUrl ? (
                  <img
                    src={user.user_metadata.avatarUrl}
                    alt={displayName || "User avatar"}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  initials
                )}
              </div>
              <div>
                <h1 className="text-2xl font-extrabold text-white">
                  Welcome, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">{firstName || "User"}</span>
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <IoMailOutline size={14} className="text-gray-500" />
                  <p className="text-gray-500 text-sm">{user?.email}</p>
                </div>
                {user?.user_metadata?.phone && (
                  <div className="flex items-center gap-2 mt-0.5">
                    <IoCallOutline size={14} className="text-gray-500" />
                    <p className="text-gray-500 text-sm">{user.user_metadata.phone}</p>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={async () => { await supabase.auth.signOut(); router.push("/login"); }}
              className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400
                         hover:bg-red-500 hover:text-white hover:border-red-500
                         px-5 py-2.5 rounded-xl transition-all duration-200 text-sm font-bold">
              <IoLogOutOutline size={18} /> Logout
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* ── Sidebar tabs ── */}
          <div className="lg:w-1/4 space-y-2">
            <TabButton active={activeTab === "profile"}  onClick={() => setActiveTab("profile")}
              icon={<IoPersonOutline size={18} />}          label="Personal Info"    />
            <TabButton active={activeTab === "vehicles"} onClick={() => setActiveTab("vehicles")}
              icon={<IoCarSportOutline size={18} />}         label="My Garage"        />
            <TabButton active={activeTab === "history"}  onClick={() => setActiveTab("history")}
              icon={<IoTimeOutline size={18} />}             label="Service History"  />
          </div>

          {/* ── Content ── */}
          <div className="lg:w-3/4 bg-[#1a1a2e] border border-white/5 rounded-2xl p-6 md:p-8">

            {/* ─ Profile Tab ─ */}
            {activeTab === "profile" && (
              <div className="space-y-7">
                <div className="flex items-center gap-3 border-b border-white/5 pb-5">
                  <div className="w-9 h-9 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-400">
                    <IoPersonOutline size={18} />
                  </div>
                  <h3 className="text-white font-extrabold text-lg">Edit Profile</h3>
                </div>

                {saved && (
                  <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-xl">
                    <IoShieldCheckmarkOutline size={18} /> Profile updated successfully!
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputGroup label="First Name" value={user?.user_metadata?.firstName}
                    onChange={(v) => updateMeta("firstName", v)} placeholder="Ahmed" />
                  <InputGroup label="Last Name"  value={user?.user_metadata?.lastName}
                    onChange={(v) => updateMeta("lastName",  v)} placeholder="Mohamed" />
                  <InputGroup label="Phone Number" value={user?.user_metadata?.phone}
                    onChange={(v) => updateMeta("phone", v)} placeholder="01xxxxxxxxx" />
                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input disabled value={user?.email || ""} className={`${inputClass} opacity-50 cursor-not-allowed`} />
                    <p className="text-gray-600 text-xs mt-1">Email cannot be changed here</p>
                  </div>
                </div>

                <div className="bg-[#0f0f1a] border border-white/5 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <IoImageOutline size={17} className="text-orange-400" />
                    <h3 className="text-white font-bold text-sm">Profile Photo</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Upload Image</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarUpload}
                        className={`${inputClass} file:mr-4 file:rounded-lg file:border-0 file:bg-orange-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-orange-600`}
                      />
                      <p className="text-gray-600 text-xs mt-1">JPG/PNG up to 2MB</p>
                    </div>
                    <InputGroup
                      label="Or Image URL"
                      value={user?.user_metadata?.avatarUrl}
                      onChange={(v) => updateMeta("avatarUrl", v)}
                      placeholder="https://example.com/avatar.jpg"
                    />
                  </div>
                </div>

                {/* Vehicle section */}
                <div className="bg-orange-500/5 border border-orange-500/15 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <IoCarSportOutline size={18} className="text-orange-400" />
                    <h3 className="text-orange-300 font-bold text-sm uppercase tracking-widest">Vehicle Details</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Vehicle Type</label>
                      <select value={user?.user_metadata?.vehicleType || ""} className={inputClass}
                        onChange={(e) => updateMeta("vehicleType", e.target.value)}>
                        <option value="">Select Type</option>
                        <option>Sedan</option>
                        <option>SUV</option>
                        <option>Truck</option>
                        <option>Hatchback</option>
                        <option>Van</option>
                      </select>
                    </div>
                    <InputGroup label="Model Year" type="number" value={user?.user_metadata?.modelYear}
                      onChange={(v) => updateMeta("modelYear", v)} placeholder="2022" />
                  </div>
                </div>

                <button onClick={handleUpdate} disabled={updating}
                  className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500
                             text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-orange-500/20
                             hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all
                             disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                  <FaSave size={15} />
                  {updating ? "Saving..." : "Save Changes"}
                </button>
              </div>
            )}

            {/* ─ Vehicles Tab ─ */}
            {activeTab === "vehicles" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-400">
                      <IoCarSportOutline size={18} />
                    </div>
                    <h3 className="text-white font-extrabold text-lg">My Garage</h3>
                  </div>
                  <button className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/30
                                     text-orange-400 hover:bg-orange-500 hover:text-white hover:border-orange-500
                                     px-4 py-2 rounded-xl text-xs font-bold transition-all">
                    <IoAddOutline size={16} /> Add Vehicle
                  </button>
                </div>

                {user?.user_metadata?.vehicleType ? (
                  <div className="bg-[#0f0f1a] border border-white/5 rounded-2xl p-6 flex items-center gap-5
                                  hover:border-orange-500/20 transition-colors">
                    <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/20 rounded-2xl
                                    flex items-center justify-center text-orange-400 flex-shrink-0">
                      <IoCarSportOutline size={28} />
                    </div>
                    <div>
                      <p className="text-white font-bold">{user.user_metadata.vehicleType}</p>
                      {user.user_metadata.modelYear && (
                        <p className="text-gray-500 text-sm mt-0.5">Year: {user.user_metadata.modelYear}</p>
                      )}
                      <span className="inline-block mt-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs px-2.5 py-0.5 rounded-full font-semibold">
                        Primary Vehicle
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="p-12 text-center border-2 border-dashed border-white/5 rounded-2xl">
                    <IoCarSportOutline size={48} className="text-gray-700 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">No vehicle registered yet</p>
                    <p className="text-gray-600 text-sm mt-1">Add your vehicle in the Profile tab</p>
                  </div>
                )}
              </div>
            )}

            {/* ─ History Tab ─ */}
            {activeTab === "history" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/5 pb-5">
                  <div className="w-9 h-9 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-400">
                    <IoTimeOutline size={18} />
                  </div>
                  <h3 className="text-white font-extrabold text-lg">Service History</h3>
                </div>

                <div className="overflow-x-auto rounded-xl border border-white/5">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#0f0f1a]">
                        <th className="px-5 py-3.5 text-gray-500 text-xs font-bold uppercase tracking-widest">Date</th>
                        <th className="px-5 py-3.5 text-gray-500 text-xs font-bold uppercase tracking-widest">Service</th>
                        <th className="px-5 py-3.5 text-gray-500 text-xs font-bold uppercase tracking-widest">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-white/5">
                        <td className="px-5 py-5 text-gray-500 text-sm" colSpan={3}>
                          <div className="text-center">
                            <IoTimeOutline size={36} className="text-gray-700 mx-auto mb-3" />
                            <p className="text-gray-500 font-medium">No service history yet</p>
                            <p className="text-gray-600 text-xs mt-1">Your completed bookings will appear here</p>
                          </div>
                        </td>
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

export default ProfilePage;
