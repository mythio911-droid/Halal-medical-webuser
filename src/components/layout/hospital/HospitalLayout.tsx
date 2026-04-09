import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Calendar,
    Layers,
    Megaphone,
    History,
    Hospital,
    UserCircle,
    Bell,
    LogOut,
    Stethoscope
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/hospital' },
    { icon: Stethoscope, label: 'Doctor Availability', path: '/hospital/availability' },
    { icon: Layers, label: 'Departments', path: '/hospital/departments' },
    { icon: Megaphone, label: 'Announcements', path: '/hospital/announcements' },
    { icon: History, label: 'Change Requests', path: '/hospital/requests' },
    { icon: Hospital, label: 'Hospital Profile', path: '/hospital/profile' },
    { icon: UserCircle, label: 'Account Settings', path: '/hospital/settings' },
];

const HospitalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();

    return (
        <div className="flex h-screen bg-background text-foreground overflow-hidden">
            {/* Sidebar */}
            <aside className="w-72 bg-white border-r border-border flex flex-col shadow-sm">
                <div className="p-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-teal-600/20">
                            <Hospital className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="font-bold text-lg leading-tight">MediConnect</h1>
                            <p className="text-[10px] text-teal-600 font-bold uppercase tracking-wider">Hospital Portal</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative",
                                    isActive
                                        ? "text-teal-700"
                                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                )}
                            >
                                <item.icon className={cn("w-5 h-5", isActive ? "text-teal-600" : "group-hover:text-teal-600")} />
                                <span className="font-semibold text-sm">{item.label}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="sidebar-active-hospital"
                                        className="absolute inset-0 bg-teal-50 rounded-xl -z-10 border border-teal-100"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-6 border-t border-border mt-auto">
                    <div className="bg-slate-50 rounded-2xl p-4 mb-4">
                        <p className="text-xs text-slate-500 font-medium mb-1">Current Facility</p>
                        <p className="text-sm font-bold text-slate-900 truncate">City General Hospital</p>
                    </div>
                    <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors font-semibold text-sm">
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto relative">
                <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-border px-10 py-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="md:hidden w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                            <Calendar className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800">
                            {menuItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
                        </h2>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:text-teal-600 hover:bg-teal-50 transition-all">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                        </button>
                        <div className="flex items-center gap-3 border-l border-border pl-6">
                            <div className="text-right">
                                <p className="text-sm font-bold text-slate-900">Admin Staff</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase">Ref: H-2210</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
                            </div>
                        </div>
                    </div>
                </header>
                <div className="p-10 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default HospitalLayout;
