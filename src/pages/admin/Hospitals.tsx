import React from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Filter, MoreHorizontal, Building, MapPin, ShieldCheck, Globe } from 'lucide-react';

const hospitals = [
    { id: '1', name: 'City General Hospital', location: 'Downtown Metropolitan', doctors: 142, status: 'Verified', level: 'Level 1 Trauma' },
    { id: '2', name: 'St. Mary Childrens Hospital', location: 'North District', doctors: 89, status: 'Verified', level: 'Specialized' },
    { id: '3', name: 'Advanced Neuro Institute', location: 'Tech Park East', doctors: 56, status: 'Pending Review', level: 'Research' },
    { id: '4', name: 'Wellness Hub', location: 'Coastal Bay', doctors: 34, status: 'Verified', level: 'Clinic' },
    { id: '5', name: 'Global Health Center', location: 'West End', doctors: 210, status: 'Verified', level: 'Multi-Specialty' },
    { id: '6', name: 'Eastside Medical', location: 'Industrial Zone', doctors: 45, status: 'Suspended', level: 'Primary Care' },
];

const Hospitals: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Registered Hospitals</h1>
                    <p className="text-muted-foreground">Manage and audit healthcare facilities across the network.</p>
                </div>
                <button className="btn-primary-portal flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Register New Hospital
                </button>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search by name, location or ID..."
                        className="w-full bg-secondary/50 border border-border rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                </div>
                <button className="flex items-center gap-2 bg-secondary border border-border px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary/80">
                    <Filter className="w-4 h-4" />
                    Advanced Filters
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hospitals.map((hospital, i) => (
                    <motion.div
                        key={hospital.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="card group hover:border-primary/30 cursor-pointer relative overflow-hidden"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <Building className="w-6 h-6" />
                            </div>
                            <button className="text-muted-foreground hover:text-foreground">
                                <MoreHorizontal className="w-5 h-5" />
                            </button>
                        </div>

                        <h3 className="text-lg font-bold mb-1 truncate">{hospital.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <MapPin className="w-4 h-4" />
                            {hospital.location}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                            <div className="flex flex-col">
                                <span className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">Capacity</span>
                                <span className="text-sm font-semibold">{hospital.doctors} Doctors</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">Status</span>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${hospital.status === 'Verified' ? 'bg-emerald-500/10 text-emerald-500' :
                                        hospital.status === 'Suspended' ? 'bg-red-500/10 text-red-500' : 'bg-yellow-500/10 text-yellow-500'
                                    }`}>
                                    {hospital.status}
                                </span>
                            </div>
                        </div>

                        <div className="mt-4 flex gap-2">
                            <span className="text-[10px] bg-secondary px-2 py-1 rounded text-muted-foreground uppercase font-bold">
                                {hospital.level}
                            </span>
                            <div className="flex ml-auto text-muted-foreground">
                                <ShieldCheck className="w-4 h-4 mr-1 text-emerald-500 opacity-50" />
                                <Globe className="w-4 h-4 opacity-50" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Hospitals;
