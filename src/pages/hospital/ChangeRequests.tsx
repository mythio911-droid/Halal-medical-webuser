import React from 'react';
import { motion } from 'framer-motion';
import {
    Search,
    Filter,
    History,
    CheckCircle2,
    XCircle,
    Clock,
    ExternalLink,
    ChevronRight
} from 'lucide-react';

const requests = [
    { id: 'REQ-4421', type: 'Staff Schedule', doctor: 'Dr. Sarah Smith', change: 'Modified Shift (08:00 - 16:00)', status: 'Approved', date: 'Today, 09:15 AM' },
    { id: 'REQ-4420', type: 'Facility Stats', field: 'Emergency Ward', change: 'Capacity +35 Beds', status: 'Pending', date: 'Yesterday, 04:30 PM' },
    { id: 'REQ-4419', type: 'Profile Update', field: 'Contact Number', change: 'Updated to +1 (555) 998-2210', status: 'Rejected', note: 'Invalid phone format detected by validator.', date: 'Apr 07, 2024' },
    { id: 'REQ-4418', type: 'Staff Schedule', doctor: 'Dr. Kevin Park', change: 'Marked "On Leave" (Apr 10-15)', status: 'Approved', date: 'Apr 06, 2024' },
    { id: 'REQ-4417', type: 'Department Registration', field: 'Oncology', change: 'New Wing L4 Registration', status: 'Pending', date: 'Apr 05, 2024' },
];

const ChangeRequests: React.FC = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-black text-slate-900">Change Request History</h1>
                <p className="text-slate-500 font-medium">Monitor the synchronization status of your facility updates.</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-2">
                    {['All', 'Pending', 'Approved', 'Rejected'].map((tab) => (
                        <button
                            key={tab}
                            className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all ${tab === 'All' ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/20' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600">
                        <Filter className="w-4 h-4" />
                        Filter by Date
                    </button>
                </div>
            </div>

            <div className="card border-none bg-white p-0 shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Request ID</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Update Type</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Modification Details</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Submission Date</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {requests.map((req, i) => (
                                <motion.tr
                                    key={req.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="hover:bg-teal-50/10 transition-colors group"
                                >
                                    <td className="px-8 py-5 text-sm font-black text-slate-900">{req.id}</td>
                                    <td className="px-8 py-5">
                                        <span className="text-[10px] font-black uppercase tracking-tight bg-slate-100 text-slate-500 px-2 py-1 rounded">
                                            {req.type}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="text-sm font-bold text-slate-700">{req.doctor || req.field}</div>
                                        <div className="text-xs text-slate-400 font-medium italic">{req.change}</div>
                                        {req.note && <div className="text-[10px] text-red-500 font-bold mt-1">Note: {req.note}</div>}
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-2">
                                            {req.status === 'Approved' ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> :
                                                req.status === 'Rejected' ? <XCircle className="w-4 h-4 text-red-500" /> :
                                                    <Clock className="w-4 h-4 text-orange-500" />}
                                            <span className={`text-xs font-black uppercase tracking-wider ${req.status === 'Approved' ? 'text-emerald-600' :
                                                    req.status === 'Rejected' ? 'text-red-600' : 'text-orange-600'
                                                }`}>
                                                {req.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-sm font-medium text-slate-400">{req.date}</td>
                                    <td className="px-8 py-5 text-right">
                                        <button className="p-2 text-slate-300 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all">
                                            <ExternalLink className="w-4 h-4" />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-8 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Showing 5 of 124 requests</p>
                    <div className="flex gap-2">
                        <button className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:border-teal-300 transition-all"><ChevronRight className="w-4 h-4 rotate-180" /></button>
                        <button className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:border-teal-300 transition-all"><ChevronRight className="w-4 h-4" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeRequests;
