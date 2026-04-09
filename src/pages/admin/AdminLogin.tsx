import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, Lock, Mail, Key } from 'lucide-react';

const AdminLogin: React.FC = () => {
    const [step, setStep] = useState<'credentials' | 'otp'>('credentials');
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep('otp');
        }, 1500);
    };

    const handleVerifyOTP = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            window.location.href = '/';
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-900 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-4 shadow-2xl">
                        <ShieldCheck className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Platform Control</h1>
                    <p className="text-muted-foreground">Authoritative Super Admin Access Only</p>
                </div>

                <div className="card backdrop-blur-sm bg-card/50 border-white/5 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        {step === 'credentials' ? (
                            <motion.form
                                key="credentials"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                onSubmit={handleLogin}
                                className="space-y-6"
                            >
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300 ml-1">Admin Email</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                            <input
                                                type="email"
                                                required
                                                className="w-full bg-slate-950/50 border border-border rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                                placeholder="admin@healthcare.system"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300 ml-1">Security Shield Password</label>
                                        <div className="relative group">
                                            <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                            <input
                                                type="password"
                                                required
                                                className="w-full bg-slate-950/50 border border-border rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                                placeholder="••••••••••••"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    disabled={loading}
                                    className="w-full btn-primary-portal flex items-center justify-center gap-2 h-12 text-base font-semibold"
                                >
                                    {loading ? (
                                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            Continue to Auth
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </motion.form>
                        ) : (
                            <motion.form
                                key="otp"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                onSubmit={handleVerifyOTP}
                                className="space-y-6"
                            >
                                <div className="space-y-4 text-center">
                                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                                        <Key className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold">2FA Token Required</h3>
                                    <p className="text-sm text-muted-foreground">Enter the 6-digit verification code sent to your registered device.</p>

                                    <div className="flex justify-between gap-2 mt-4">
                                        {[1, 2, 3, 4, 5, 6].map((i) => (
                                            <input
                                                key={i}
                                                type="text"
                                                maxLength={1}
                                                className="w-12 h-14 bg-slate-950/50 border border-border rounded-lg text-center text-xl font-bold focus:ring-2 focus:ring-primary transition-all"
                                                required
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <button
                                        disabled={loading}
                                        className="w-full btn-primary-portal h-12 text-base font-semibold"
                                    >
                                        {loading ? (
                                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                        ) : 'Verify & Sign In'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setStep('credentials')}
                                        className="w-full py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        Back to credentials
                                    </button>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>

                <p className="text-center mt-8 text-xs text-muted-foreground uppercase tracking-widest">
                    Secured by Quantum-Shield Protocol v4.2
                </p>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
