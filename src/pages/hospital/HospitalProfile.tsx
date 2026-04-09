import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Building,
    MapPin,
    Phone,
    Mail,
    Upload,
    Save,
    ShieldCheck,
    AlertCircle,
    FileText,
    Image as ImageIcon
} from 'lucide-react';

const HospitalProfile: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Mock fetch request as requested
        try {
            await fetch('http://localhost:5000/api/hospital/request-change', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    entityType: 'HOSPITAL_PROFILE',
                    requestedChanges: {
                        name: "City General Hospital",
                        address: "102 Health Avenue, Central District",
                        contact: "+1 (555) 998-2210"
                    },
                    timestamp: new Date().toISOString(),
                    facilityId: 'HOSP-CITY-01'
                })
            });
            console.log('Mock profile change request submitted to Super Admin.');
        } catch (err) {
            console.log('Fetch skipped (backend offline)');
        } finally {
            setTimeout(() => {
                setLoading(false);
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 3000);
            }, 1500);
        }
    };

    return (
        <div className="max-w-4xl space-y-8 pb-20">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-black text-slate-900">Hospital Profile</h1>
                    <p className="text-slate-500 font-medium">Configure your facility's public information and verification documents.</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-xl">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Verified Entity</span>
                </div>
            </div>

            <form onSubmit={handleSave} className="space-y-8">
                {/* Banner Upload Section */}
                <div className="relative h-48 rounded-[2rem] bg-slate-100 overflow-hidden group border-2 border-dashed border-slate-200 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors">
                    <ImageIcon className="w-8 h-8 text-slate-300 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Upload Primary Facility Banner</p>
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Basic Info */}
                    <div className="card space-y-6 shadow-xl shadow-slate-200/50">
                        <h3 className="font-black text-slate-900 flex items-center gap-2 pb-4 border-b border-slate-100">
                            <Building className="w-5 h-5 text-teal-600" />
                            Basic Information
                        </h3>

                        <div className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Hospital Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-700 focus:ring-2 focus:ring-teal-500/20"
                                    defaultValue="City General Hospital"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Internal Platform ID</label>
                                <input
                                    type="text"
                                    disabled
                                    className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-400 cursor-not-allowed"
                                    defaultValue="HOSP-CITY-01"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Address</label>
                                <textarea
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-700 min-h-[100px] focus:ring-2 focus:ring-teal-500/20"
                                    defaultValue="102 Health Avenue, Central District, Metropolitan City, 440291"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact & verification */}
                    <div className="space-y-8">
                        <div className="card space-y-6 shadow-xl shadow-slate-200/50">
                            <h3 className="font-black text-slate-900 flex items-center gap-2 pb-4 border-b border-slate-100">
                                <Phone className="w-5 h-5 text-teal-600" />
                                Contact Details
                            </h3>

                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Verification Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                        <input
                                            type="tel"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 font-bold text-slate-700 focus:ring-2 focus:ring-teal-500/20"
                                            defaultValue="+1 (555) 998-2210"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Public Support Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                        <input
                                            type="email"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 font-bold text-slate-700 focus:ring-2 focus:ring-teal-500/20"
                                            defaultValue="emergency@citygeneral.com"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-teal-50 border-teal-100 flex gap-4">
                            <AlertCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                            <div className="space-y-1">
                                <p className="font-bold text-teal-900 text-sm italic">Verification Notice</p>
                                <p className="text-xs text-teal-700 font-medium leading-relaxed">
                                    Updating profile information requires secondary verification from the Super Admin. Changes will be queued until the next audit cycle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-4 p-6 bg-white border border-slate-200 rounded-3xl sticky bottom-4 shadow-2xl z-20">
                    <button type="button" className="px-8 py-3 font-black text-slate-400 uppercase tracking-widest text-xs">Discard Changes</button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-teal-600 transition-all active:scale-95 flex items-center gap-3 disabled:opacity-50"
                    >
                        {loading ? <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" /> : <Save className="w-4 h-4" />}
                        Submit Changes for Approval
                    </button>
                </div>
            </form>
        </div>
    );
};

export default HospitalProfile;
