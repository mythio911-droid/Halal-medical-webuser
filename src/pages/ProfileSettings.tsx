import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Shield, Hospital, LogOut, Settings, Bell, Lock } from 'lucide-react';

const ProfileSettings: React.FC = () => {
    const [user, setUser] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        } else {
            navigate('/');
        }
    }, [navigate]);

    const handleSignOut = () => {
        localStorage.removeItem('currentUser');
        navigate('/');
    };

    if (!user) return null;

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />

            <main className="flex-1 container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row gap-8"
                    >
                        {/* Sidebar */}
                        <div className="w-full md:w-64 space-y-2">
                            <button className="flex items-center gap-3 w-full px-4 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 transition-all">
                                <User className="w-5 h-5" />
                                Profile Overview
                            </button>
                            <button className="flex items-center gap-3 w-full px-4 py-3 text-slate-500 hover:bg-white rounded-xl font-medium transition-all">
                                <Bell className="w-5 h-5" />
                                Notifications
                            </button>
                            <button className="flex items-center gap-3 w-full px-4 py-3 text-slate-500 hover:bg-white rounded-xl font-medium transition-all">
                                <Lock className="w-5 h-5" />
                                Security
                            </button>
                            <button className="flex items-center gap-3 w-full px-4 py-3 text-slate-500 hover:bg-white rounded-xl font-medium transition-all">
                                <Settings className="w-5 h-5" />
                                Preferences
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-6">
                            <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2rem] overflow-hidden">
                                <div className="h-32 bg-gradient-to-r from-primary/10 to-blue-500/10 border-b border-slate-100" />
                                <CardContent className="relative pt-0 px-8 pb-8">
                                    <div className="absolute -top-12 left-8">
                                        <div className="w-24 h-24 rounded-3xl bg-white p-1 shadow-xl">
                                            <div className="w-full h-full rounded-2xl bg-slate-100 flex items-center justify-center">
                                                {user.role === 'admin' ? <Shield className="w-10 h-10 text-indigo-500" /> :
                                                    user.role === 'hospital' ? <Hospital className="w-10 h-10 text-teal-500" /> :
                                                        <User className="w-10 h-10 text-blue-500" />}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
                                        <div>
                                            <h2 className="text-3xl font-black text-slate-900 tracking-tight">{user.name}</h2>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${user.role === 'admin' ? 'bg-indigo-100 text-indigo-600' :
                                                        user.role === 'hospital' ? 'bg-teal-100 text-teal-600' :
                                                            'bg-blue-100 text-blue-600'
                                                    }`}>
                                                    {user.role} Account
                                                </span>
                                                <span className="text-slate-400 text-xs font-medium">Verified Authority</span>
                                            </div>
                                        </div>
                                        <Button onClick={handleSignOut} variant="destructive" className="rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 px-6">
                                            <LogOut className="w-4 h-4" />
                                            Sign Out
                                        </Button>
                                    </div>

                                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-slate-50">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Contact Email</p>
                                            <div className="flex items-center gap-3 text-slate-600 font-bold">
                                                <Mail className="w-4 h-4 text-slate-400" />
                                                {user.email}
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Account Type</p>
                                            <div className="flex items-center gap-3 text-slate-600 font-bold capitalize">
                                                {user.role === 'admin' ? <Shield className="w-4 h-4 text-slate-400" /> :
                                                    user.role === 'hospital' ? <Hospital className="w-4 h-4 text-slate-400" /> :
                                                        <User className="w-4 h-4 text-slate-400" />}
                                                Unified Platform Access ({user.role})
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2rem] p-8">
                                <CardTitle className="text-xl font-bold mb-6">Security Context</CardTitle>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                                                <Shield className="w-5 h-5 text-emerald-500" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">Two-Factor Authentication</p>
                                                <p className="text-xs text-slate-500">Currently active on your {user.role} identity</p>
                                            </div>
                                        </div>
                                        <Button variant="ghost" className="text-primary font-bold">Manage</Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProfileSettings;
