import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hospital, Phone, ShieldCheck, ArrowRight, MessageSquareCode } from 'lucide-react';

const HospitalLogin: React.FC = () => {
    const [step, setStep] = useState<'phone' | 'otp'>('phone');
    const [loading, setLoading] = useState(false);

    const handleSendOTP = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep('otp');
        }, 1500);
    };

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            window.location.href = '/';
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row overflow-hidden">
            {/* Visual Side */}
            <div className="hidden md:flex flex-1 bg-teal-600 items-center justify-center p-12 relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
                <div className="relative z-10 text-center text-white max-w-lg">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20"
                    >
                        <Hospital className="w-12 h-12" />
                    </motion.div>
                    <h2 className="text-4xl font-bold mb-4 tracking-tight">Healthcare Simplified.</h2>
                    <p className="text-teal-50 text-lg">Manage your facility, staff availability, and sync with the national health grid effortlessly.</p>
                </div>
            </div>

            {/* Auth Side */}
            <div className="flex-1 flex items-center justify-center p-8 bg-slate-50">
                <div className="w-full max-w-md">
                    <div className="mb-10 text-center md:text-left">
                        <h1 className="text-3xl font-black text-slate-900 mb-2">Hospital Access</h1>
                        <p className="text-slate-500 font-medium">Please verify your identity to continue.</p>
                    </div>

                    <div className="card shadow-xl border-none p-10">
                        <AnimatePresence mode="wait">
                            {step === 'phone' ? (
                                <motion.form
                                    key="phone"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    onSubmit={handleSendOTP}
                                    className="space-y-6"
                                >
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Registered Mobile Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input
                                                type="tel"
                                                required
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all placeholder:text-slate-300"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        disabled={loading}
                                        className="w-full flex items-center justify-center gap-3 bg-teal-600 text-white font-bold py-4 rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 active:scale-[0.98] disabled:opacity-50"
                                    >
                                        {loading ? (
                                            <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Request Security Code
                                                <ArrowRight className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.form
                                    key="otp"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    onSubmit={handleVerify}
                                    className="space-y-8"
                                >
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <MessageSquareCode className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900">Enter Security Code</h3>
                                        <p className="text-sm text-slate-500 mt-2">A 6-digit code has been sent to your primary mobile number.</p>
                                    </div>

                                    <div className="flex justify-between gap-2">
                                        {[1, 2, 3, 4, 5, 6].map((i) => (
                                            <input
                                                key={i}
                                                type="text"
                                                maxLength={1}
                                                className="w-full aspect-square bg-slate-50 border border-slate-200 rounded-lg text-center text-2xl font-black text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                                required
                                            />
                                        ))}
                                    </div>

                                    <div className="space-y-4">
                                        <button
                                            disabled={loading}
                                            className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98] disabled:opacity-50"
                                        >
                                            {loading ? (
                                                <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                            ) : 'Verify & Access Portal'}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setStep('phone')}
                                            className="w-full py-2 text-sm font-bold text-teal-600 hover:text-teal-700 uppercase tracking-wider"
                                        >
                                            Change Number
                                        </button>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-6 opacity-30 grayscale filter">
                        <div className="text-[10px] font-black tracking-widest flex items-center gap-1 border-2 border-slate-900 p-1">
                            <ShieldCheck className="w-3 h-3" /> HIPAA COMPLIANT
                        </div>
                        <div className="text-[10px] font-black tracking-widest border-2 border-slate-900 p-1">
                            ISO 27001 SECURE
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HospitalLogin;
