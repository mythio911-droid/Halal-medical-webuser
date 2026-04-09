import React from 'react';
import { motion } from 'framer-motion';
import {
    Stethoscope,
    Clock,
    CheckCircle2,
    Layers,
    AlertCircle,
    TrendingUp,
    ArrowRight,
    MessageSquare
} from 'lucide-react';

const stats = [
    { label: 'Pending Approvals', value: '3', sub: '2 items high priority', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'Active Doctors', value: '42', sub: '6 currently on shift', icon: Stethoscope, color: 'text-teal-600', bg: 'bg-teal-50' },
    { label: 'Approved Requests', value: '156', sub: 'This month', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Departments', value: '12', sub: 'Fully operational', icon: Layers, color: 'text-blue-600', bg: 'bg-blue-50' },
];

const HospitalDashboard: React.FC = () => {
    return (
        <div className="space-y-10">
            {/* Welcome Banner */}
            <div className="relative overflow-hidden bg-slate-900 rounded-[2rem] p-10 text-white shadow-2xl">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/20 to-transparent" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight">Welcome back, <span className="text-teal-400">City General</span>.</h1>
                        <p className="text-slate-400 max-w-lg">Your facility is currently synchronized with the national grid. There are 3 pending change requests awaiting Super Admin verification.</p>
                        <div className="flex gap-4 pt-2">
                            <button className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2">
                                Manage Availability
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold backdrop-blur-md transition-all">
                                System Analytics
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:grid grid-cols-2 gap-4">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                            <p className="text-teal-400 font-black text-2xl">98%</p>
                            <p className="text-xs text-white/60 font-medium">Sync Uptime</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                            <p className="text-teal-400 font-black text-2xl">1.2s</p>
                            <p className="text-xs text-white/60 font-medium">API Latency</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="portal-card"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className="flex items-center gap-1 text-emerald-600 text-[10px] font-black bg-emerald-50 px-2 py-0.5 rounded-full">
                                <TrendingUp className="w-3 h-3" />
                                <span>+4.2%</span>
                            </div>
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
                        <p className="text-slate-800 font-bold text-sm">{stat.label}</p>
                        <p className="text-xs text-slate-400 font-medium mt-1">{stat.sub}</p>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Platform Notices */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-black text-slate-900 flex items-center gap-3">
                            <AlertCircle className="w-6 h-6 text-teal-600" />
                            Platform Notices
                        </h3>
                        <button className="text-sm font-bold text-teal-600 hover:underline">Mark all as read</button>
                    </div>
                    <div className="space-y-4">
                        {[
                            { title: 'New Security Protocol v4.2 Deployment', date: 'Today, 10:30 AM', desc: 'The Super Admin has mandated 2FA rotation for all facility staff.', priority: 'High' },
                            { title: 'VoIP Server Maintenance Schedule', date: 'April 12, 2024', desc: 'Communication services will be degraded for 15 minutes between 02:00-02:15 UTC.', priority: 'Normal' },
                            { title: 'Emergency Ward Capacity Verification', date: 'Yesterday', desc: 'Your recent request for +35 beds is undergoing final site verification.', priority: 'In-Progress' },
                        ].map((notice, i) => (
                            <div key={i} className="card border-none bg-white p-6 relative group overflow-hidden">
                                <div className={`absolute left-0 top-0 bottom-0 w-1 ${notice.priority === 'High' ? 'bg-orange-500' :
                                    notice.priority === 'Normal' ? 'bg-blue-500' : 'bg-teal-500'
                                    }`} />
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-slate-800 group-hover:text-teal-600 transition-colors">{notice.title}</h4>
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${notice.priority === 'High' ? 'bg-orange-50 text-orange-600' :
                                        notice.priority === 'Normal' ? 'bg-blue-50 text-blue-600' : 'bg-teal-50 text-teal-600'
                                        }`}>
                                        {notice.priority}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{notice.desc}</p>
                                <p className="text-[10px] text-slate-400 font-black mt-4 uppercase tracking-tighter">{notice.date}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions / Activity */}
                <div className="space-y-6">
                    <h3 className="text-xl font-black text-slate-900 flex items-center gap-3">
                        <MessageSquare className="w-6 h-6 text-teal-600" />
                        Internal Feed
                    </h3>
                    <div className="card space-y-6">
                        {[
                            { name: 'Dr. Sarah Smith', action: 'Shift Start', time: '12m ago', color: 'bg-teal-500' },
                            { name: 'Radiology Dept', action: 'Upload Status', time: '45m ago', color: 'bg-blue-500' },
                            { name: 'Supply Chain', action: 'Inventory Check', time: '2h ago', color: 'bg-slate-500' },
                            { name: 'Facility Admin', action: 'Sync Success', time: '5h ago', color: 'bg-emerald-500' },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${item.color}`} />
                                <div>
                                    <p className="text-sm font-bold text-slate-800">{item.name}</p>
                                    <p className="text-xs text-slate-500 font-medium">{item.action} • {item.time}</p>
                                </div>
                            </div>
                        ))}
                        <button className="w-full py-3 bg-slate-50 text-slate-600 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-teal-50 hover:text-teal-600 transition-all">
                            View Internal Logs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HospitalDashboard;
