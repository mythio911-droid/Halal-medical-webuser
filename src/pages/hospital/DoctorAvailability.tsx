import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    Filter,
    Clock,
    Calendar,
    Save,
    AlertCircle,
    X,
    ChevronRight,
    UserRound,
    History
} from 'lucide-react';

interface Doctor {
    id: string;
    name: string;
    specialty: string;
    onLeave: boolean;
    shift: string;
}

const mockDoctors: Doctor[] = [
    { id: '1', name: 'Dr. Sarah Smith', specialty: 'Cardiology', onLeave: false, shift: '09:00 - 17:00' },
    { id: '2', name: 'Dr. Michael Chen', specialty: 'Neurology', onLeave: false, shift: '08:00 - 16:00' },
    { id: '3', name: 'Dr. Elena Rodriguez', specialty: 'Pediatrics', onLeave: true, shift: '10:00 - 18:00' },
    { id: '4', name: 'Dr. Kevin Park', specialty: 'Surgery', onLeave: false, shift: '07:00 - 15:00' },
    { id: '5', name: 'Dr. Aisha Khan', specialty: 'Dermatology', onLeave: false, shift: '11:00 - 19:00' },
    { id: '6', name: 'Dr. Robert Miller', specialty: 'General Practice', onLeave: false, shift: '09:00 - 17:00' },
];

const DoctorAvailability: React.FC = () => {
    const [doctors] = useState<Doctor[]>(mockDoctors);
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmitRequest = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedDoctor) return;

        setIsSubmitting(true);

        // Mock fetch request as requested
        try {
            await fetch('http://localhost:5000/api/hospital/request-change', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    entityType: 'DOCTOR_AVAILABILITY',
                    doctorId: selectedDoctor.id,
                    doctorName: selectedDoctor.name,
                    requestedChanges: {
                        onLeave: selectedDoctor.onLeave,
                        shift: selectedDoctor.shift
                    },
                    timestamp: new Date().toISOString(),
                    facilityId: 'HOSP-CITY-01'
                })
            });
            console.log('Mock change request submitted for doctor:', selectedDoctor.name);
        } catch (err) {
            console.log('Fetch skipped (backend offline)');
        } finally {
            setTimeout(() => {
                setIsSubmitting(false);
                setSelectedDoctor(null);
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 3000);
            }, 1500);
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black text-slate-900">Doctor Availability</h1>
                    <p className="text-slate-500 font-medium">Manage practitioner schedules and leave status.</p>
                </div>
                <div className="flex gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search staff..."
                            className="bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                        />
                    </div>
                    <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-teal-600 text-white p-4 rounded-2xl flex items-center justify-between shadow-lg shadow-teal-600/20"
                    >
                        <div className="flex items-center gap-3">
                            <AlertCircle className="w-5 h-5" />
                            <p className="font-bold text-sm">Change request submitted to Super Admin successfully.</p>
                        </div>
                        <button onClick={() => setShowSuccess(false)}><X className="w-4 h-4" /></button>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doctor) => (
                    <motion.div
                        key={doctor.id}
                        whileHover={{ y: -4 }}
                        className="card group cursor-pointer border-none bg-white p-0 overflow-hidden shadow-md"
                        onClick={() => setSelectedDoctor(doctor)}
                    >
                        <div className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                                    <UserRound className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-black text-slate-900 group-hover:text-teal-600 transition-colors">{doctor.name}</h3>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">{doctor.specialty}</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <Clock className="w-4 h-4" />
                                        <span className="text-xs font-bold uppercase">Shift</span>
                                    </div>
                                    <span className="text-sm font-black text-slate-700">{doctor.shift}</span>
                                </div>

                                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <Calendar className="w-4 h-4" />
                                        <span className="text-xs font-bold uppercase">Status</span>
                                    </div>
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${doctor.onLeave ? 'bg-orange-50 text-orange-600' : 'bg-emerald-50 text-emerald-600'
                                        }`}>
                                        {doctor.onLeave ? 'On Leave' : 'On Guard'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between group-hover:bg-teal-50/50 transition-colors">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Click to Edit Schedule</span>
                            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-teal-600 transition-all font-black" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Edit Dialog Mock */}
            <AnimatePresence>
                {selectedDoctor && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                            onClick={() => setSelectedDoctor(null)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-black text-slate-900">Request Schedule Change</h3>
                                    <p className="text-sm text-slate-500 font-medium">For {selectedDoctor.name}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedDoctor(null)}
                                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-slate-400" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmitRequest} className="p-8 space-y-6">
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                    <div className="space-y-0.5">
                                        <p className="text-sm font-bold text-slate-900 italic">"On Leave" Switch</p>
                                        <p className="text-xs text-slate-500">Temporarily mark practitioner as absent.</p>
                                    </div>
                                    <div
                                        onClick={() => setSelectedDoctor({ ...selectedDoctor, onLeave: !selectedDoctor.onLeave })}
                                        className={`w-14 h-8 rounded-full p-1 cursor-pointer transition-colors duration-300 ${selectedDoctor.onLeave ? 'bg-orange-500' : 'bg-slate-200'}`}
                                    >
                                        <motion.div
                                            animate={{ x: selectedDoctor.onLeave ? 24 : 0 }}
                                            className="w-6 h-6 bg-white rounded-full shadow-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Assigned Shift Hours</label>
                                    <input
                                        type="text"
                                        value={selectedDoctor.shift}
                                        onChange={(e) => setSelectedDoctor({ ...selectedDoctor, shift: e.target.value })}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                                    />
                                </div>

                                <div className="bg-blue-50/50 p-4 rounded-2xl flex gap-3 items-start border border-blue-100">
                                    <History className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                    <p className="text-xs text-blue-800 font-medium leading-relaxed">
                                        Changes to doctor availability are <span className="font-bold underline">not immediate</span>. Your request will be submitted for Super Admin approval to ensure grid synchronization.
                                    </p>
                                </div>

                                <div className="pt-4 flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedDoctor(null)}
                                        className="flex-1 py-4 font-black text-slate-500 uppercase tracking-widest text-xs"
                                    >
                                        Discard
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-[2] btn-primary-portal h-14 flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <Save className="w-4 h-4" />
                                                Submit for Approval
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DoctorAvailability;
