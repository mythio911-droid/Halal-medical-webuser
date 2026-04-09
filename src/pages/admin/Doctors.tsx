import React from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Filter, UserRound, GraduationCap, Clock, CheckCircle2 } from 'lucide-react';

const doctors = [
    { id: '1', name: 'Dr. Sarah Smith', hospital: 'City General Hospital', specialty: 'Cardiology', experience: '12 Years', status: 'Active' },
    { id: '2', name: 'Dr. Michael Chen', hospital: 'Advanced Neuro Institute', specialty: 'Neurology', experience: '8 Years', status: 'Active' },
    { id: '3', name: 'Dr. Elena Rodriguez', hospital: 'St. Mary Childrens Hospital', specialty: 'Pediatrics', experience: '15 Years', status: 'On Leave' },
    { id: '4', name: 'Dr. Kevin Park', hospital: 'City General Hospital', specialty: 'Surgery', experience: '22 Years', status: 'Active' },
    { id: '5', name: 'Dr. Aisha Khan', hospital: 'Wellness Hub', specialty: 'Dermatology', experience: '6 Years', status: 'Inactive' },
];

const Doctors: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Medical Professional Registry</h1>
                    <p className="text-muted-foreground">Global directory of verified practitioners and specialists.</p>
                </div>
                <button className="btn-primary-portal flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Add New Practitioner
                </button>
            </div>

            <div className="card p-4 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                    <div className="relative flex-1 min-w-[300px]">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by name, specialty or hospital..."
                            className="w-full bg-slate-950/50 border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        />
                    </div>
                    <select className="bg-slate-950/50 border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-muted-foreground">
                        <option>All Specialties</option>
                        <option>Cardiology</option>
                        <option>Neurology</option>
                        <option>Pediatrics</option>
                    </select>
                    <button className="flex items-center gap-2 bg-secondary border border-border px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary/80">
                        <Filter className="w-4 h-4" />
                        Filters
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {doctors.map((doctor, i) => (
                        <motion.div
                            key={doctor.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-transparent hover:border-primary/20 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary border border-border group-hover:bg-primary group-hover:text-white transition-all">
                                <UserRound className="w-6 h-6" />
                            </div>
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                                <div>
                                    <h4 className="font-bold text-sm flex items-center gap-2">
                                        {doctor.name}
                                        {doctor.status === 'Active' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
                                    </h4>
                                    <p className="text-xs text-muted-foreground">{doctor.hospital}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <GraduationCap className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-sm font-medium">{doctor.specialty}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">{doctor.experience} Exp</span>
                                </div>
                                <div className="text-right">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${doctor.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                                            doctor.status === 'On Leave' ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' :
                                                'bg-slate-500/10 text-slate-500 border border-slate-500/20'
                                        }`}>
                                        {doctor.status}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctors;
