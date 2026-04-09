import React from 'react';
import { motion } from 'framer-motion';
import { User, Building2, Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PortalSelection = () => {
    const navigate = useNavigate();

    const portals = [
        {
            title: "Patient Portal",
            description: "Book appointments and view your medical records.",
            icon: User,
            path: "/login",
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            title: "Hospital Portal",
            description: "Manage doctors, departments, and hospital profile.",
            icon: Building2,
            path: "/hospital/login",
            color: "text-teal-500",
            bg: "bg-teal-50"
        },
        {
            title: "Super Admin",
            description: "Platform governance and system controls.",
            icon: Shield,
            path: "/admin/login",
            color: "text-indigo-500",
            bg: "bg-indigo-50"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Welcome to <span className="text-primary">Halal Medical</span>
                </h1>
                <p className="text-slate-600 text-lg max-w-xl mx-auto font-medium">
                    Select your portal destination below to securely manage your healthcare journey.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                {portals.map((portal, index) => (
                    <motion.div
                        key={portal.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        onClick={() => navigate(portal.path)}
                        className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 cursor-pointer group hover:shadow-xl hover:border-primary/20 transition-all flex flex-col items-center text-center"
                    >
                        <div className={`w-20 h-20 rounded-2xl ${portal.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <portal.icon className={`w-10 h-10 ${portal.color}`} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{portal.title}</h3>
                        <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                            {portal.description}
                        </p>
                        <div className="mt-auto w-full">
                            <button className="flex items-center justify-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                                Enter Portal
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <footer className="mt-20 text-slate-400 text-xs font-semibold uppercase tracking-[0.2em] text-center">
                © 2026 Halal Medical Group • Secure Gateway
            </footer>
        </div>
    );
};

export default PortalSelection;
