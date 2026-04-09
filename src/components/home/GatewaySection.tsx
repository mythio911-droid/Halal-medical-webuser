import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Hospital, ArrowRight, UserCheck, Globe, Mail, Lock, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuthGateway = () => {
    const [selectedPortal, setSelectedPortal] = useState<'none' | 'admin' | 'hospital'>('none');
    const [isChecking, setIsChecking] = useState(false);
    const navigate = useNavigate();

    const handleAccess = (portal: 'admin' | 'hospital') => {
        setIsChecking(true);
        setTimeout(() => {
            setIsChecking(false);
            // Universal navigation within the same application
            navigate(portal === 'admin' ? '/admin' : '/hospital');
        }, 800);
    };

    return (
        <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-900/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="z-10 text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                    <Globe className="w-4 h-4 text-teal-400" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">Secure Access Management</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-4">
                    Halal <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Medical</span>
                </h1>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                    Corporate Gateway. Choose your destination to proceed with secure authentication.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <button
                        onClick={() => navigate('/home')}
                        className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
                    >
                        Visit Public Website
                    </button>
                </div>
            </motion.div>

            <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                {/* Super Admin Option */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPortal('admin')}
                    className={`relative overflow-hidden transition-all duration-500 cursor-pointer bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] p-10 border-2 ${selectedPortal === 'admin' ? 'border-blue-500 shadow-[0_0_50px_rgba(37,99,235,0.2)]' : 'border-white/5 hover:border-white/20'
                        }`}
                >
                    <div className="relative z-10">
                        <div className="w-20 h-20 rounded-3xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-8">
                            <ShieldCheck className="w-10 h-10 text-blue-500" />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-4">Super Admin</h3>
                        <p className="text-slate-400 font-medium mb-8 leading-relaxed">
                            Full infrastructure control, hospital registration auditing, and global platform security settings.
                        </p>
                        <button
                            onClick={(e) => { e.stopPropagation(); handleAccess('admin'); }}
                            className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all"
                        >
                            Access Admin Portal
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>

                {/* Hospital Portal Option */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPortal('hospital')}
                    className={`relative overflow-hidden transition-all duration-500 cursor-pointer bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] p-10 border-2 ${selectedPortal === 'hospital' ? 'border-teal-500 shadow-[0_0_50px_rgba(13,148,136,0.2)]' : 'border-white/5 hover:border-white/20'
                        }`}
                >
                    <div className="relative z-10">
                        <div className="w-20 h-20 rounded-3xl bg-teal-600/10 border border-teal-500/20 flex items-center justify-center mb-8">
                            <Hospital className="w-10 h-10 text-teal-500" />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-4">Hospital Portal</h3>
                        <p className="text-slate-400 font-medium mb-8 leading-relaxed">
                            Manage staff availability, update facility profile, and sync change requests with the health grid.
                        </p>
                        <button
                            onClick={(e) => { e.stopPropagation(); handleAccess('hospital'); }}
                            className="w-full py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all"
                        >
                            Access Hospital Portal
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedPortal !== 'none' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="mt-16 w-full max-w-md p-8 bg-slate-900/60 backdrop-blur-2xl rounded-3xl border border-white/10"
                    >
                        <div className="text-center mb-8">
                            <h4 className="text-xl font-bold text-white mb-2">
                                Authenticate as {selectedPortal === 'admin' ? 'Administrator' : 'Facility Staff'}
                            </h4>
                        </div>

                        <div className="space-y-4">
                            {selectedPortal === 'admin' ? (
                                <>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:border-blue-500 outline-none transition-all" />
                                    </div>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input type="password" placeholder="Password" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:border-blue-500 outline-none transition-all" />
                                    </div>
                                </>
                            ) : (
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                    <input type="tel" placeholder="Mobile Number" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:border-teal-500 outline-none transition-all" />
                                </div>
                            )}

                            <button
                                onClick={() => handleAccess(selectedPortal === 'admin' ? 'admin' : 'hospital')}
                                disabled={isChecking}
                                className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all mt-4 ${selectedPortal === 'admin' ? 'bg-blue-600 hover:bg-blue-500' : 'bg-teal-600 hover:bg-teal-500'
                                    }`}
                            >
                                {isChecking ? <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" /> : (
                                    <>
                                        Sign In to {selectedPortal}
                                        <UserCheck className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <footer className="mt-12 text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em] text-center">
                © 2026 Halal Medical Technologies • Secure Auth Node HL-44
            </footer>
        </div>
    );
};

export default AuthGateway;
