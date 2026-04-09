import React from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    Building,
    Stethoscope,
    Megaphone,
    TrendingUp,
    AlertTriangle,
    Clock
} from 'lucide-react';

const stats = [
    { label: 'Pending Approvals', value: '42', icon: CheckCircle2, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { label: 'Active Hospitals', value: '1,284', icon: Building, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Total Doctors', value: '15,029', icon: Stethoscope, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { label: 'Notifications Sent', value: '842k', icon: Megaphone, color: 'text-purple-500', bg: 'bg-purple-500/10' },
];

const activities = [
    { type: 'approval', hospital: 'City Care Hospital', action: 'Requested Equipment Update', time: '2 mins ago', status: 'Pending' },
    { type: 'security', user: 'Admin-8829', action: 'Full System Audit Export', time: '14 mins ago', status: 'Success' },
    { type: 'alert', system: 'VoIP Server', action: 'High Latency Detected - Node EU-4', time: '45 mins ago', status: 'Warning' },
    { type: 'hospital', hospital: 'Global Health', action: 'New Doctor Onboarding (Dr. Sarah Smith)', time: '1 hour ago', status: 'Completed' },
    { type: 'security', user: 'Admin-4412', action: 'Login from new IP (192.168.1.1)', time: '3 hours ago', status: 'Investigating' },
];

const AdminDashboard: React.FC = () => {
    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="card group hover:border-primary/50 transition-all duration-300"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
                                <h3 className="text-3xl font-bold tracking-tight">{stat.value}</h3>
                            </div>
                            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-xs text-emerald-500 font-medium">
                            <TrendingUp className="w-4 h-4" />
                            <span>+12.5% from last month</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2 card">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold">Recent Activity Feed</h3>
                        <button className="text-sm text-primary hover:underline">View All</button>
                    </div>
                    <div className="space-y-4">
                        {activities.map((activity, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-transparent hover:border-border transition-all group">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${activity.type === 'approval' ? 'bg-yellow-500/10 text-yellow-500' :
                                        activity.type === 'security' ? 'bg-blue-500/10 text-blue-500' :
                                            activity.type === 'alert' ? 'bg-red-500/10 text-red-500' : 'bg-emerald-500/10 text-emerald-500'
                                    }`}>
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-sm truncate">
                                        {activity.hospital || activity.user || activity.system}
                                    </p>
                                    <p className="text-sm text-muted-foreground truncate">{activity.action}</p>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className="text-xs text-muted-foreground mb-1">{activity.time}</p>
                                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${activity.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-500' :
                                            activity.status === 'Success' ? 'bg-blue-500/20 text-blue-500' :
                                                activity.status === 'Warning' ? 'bg-red-500/20 text-red-500' : 'bg-emerald-500/20 text-emerald-500'
                                        }`}>
                                        {activity.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* System Health */}
                <div className="space-y-6">
                    <div className="portal-card">
                        <h3 className="text-lg font-bold mb-4">Infrastructure Status</h3>
                        <div className="space-y-4">
                            {[
                                { label: 'Main API Gateway', status: 'Operational', color: 'bg-emerald-500' },
                                { label: 'Hospital Sync Node', status: 'Operational', color: 'bg-emerald-500' },
                                { label: 'Audit Log Chain', status: 'Syncing', color: 'bg-yellow-500' },
                                { label: 'VoIP Relay EU', status: 'High Load', color: 'bg-red-500' },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center justify-between">
                                    <span className="text-sm font-medium">{item.label}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-muted-foreground">{item.status}</span>
                                        <div className={`w-2 h-2 rounded-full ${item.color} shadow-[0_0_8px] shadow-${item.color.split('-')[1]}-500`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card bg-primary shadow-2xl shadow-primary/20 border-transparent">
                        <AlertTriangle className="w-8 h-8 text-white mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">Critical Awareness</h3>
                        <p className="text-white/80 text-sm mb-4">
                            There are 12 unreviewed security alerts from the last hour. Immediate inspection is recommended for the Audit Logs.
                        </p>
                        <button className="w-full py-2 bg-white text-primary rounded-lg font-bold text-sm hover:bg-slate-50 transition-colors">
                            Inspect Security Logs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
