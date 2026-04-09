import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    CheckSquare,
    Building2,
    Users,
    UserRound,
    Phone,
    Bell,
    History,
    Settings,
    ShieldCheck,
    LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: CheckSquare, label: 'Pending Approvals', path: '/admin/approvals' },
    { icon: Building2, label: 'Hospitals', path: '/admin/hospitals' },
    { icon: UserRound, label: 'Doctors', path: '/admin/doctors' },
    { icon: Users, label: 'Users', path: '/admin/users' },
    { icon: Phone, label: 'VoIP Control', path: '/admin/voip' },
    { icon: Bell, label: 'Notifications', path: '/admin/notifications' },
    { icon: History, label: 'Audit Logs', path: '/admin/audit' },
    { icon: Settings, label: 'Security Settings', path: '/admin/security' },
];

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();

    return (
        <div className="flex h-screen bg-background text-foreground overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-card border-r border-border flex flex-col">
                <div className="p-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                        <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="font-bold text-xl tracking-tight">Super <span className="text-primary text-sm uppercase">Admin</span></h1>
                </div>

                <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
                                    isActive
                                        ? "bg-primary text-white"
                                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                )}
                            >
                                <item.icon className={cn("w-5 h-5", isActive ? "text-white" : "group-hover:text-primary")} />
                                <span className="font-medium">{item.label}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="sidebar-active"
                                        className="absolute inset-0 bg-primary rounded-lg -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-border mt-auto">
                    <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors">
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto relative bg-[#020617]">
                <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border px-8 py-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold capitalize">
                        {menuItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full border-2 border-background bg-slate-800" />
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-medium">Sr. Administrator</p>
                            <p className="text-xs text-muted-foreground">Admin-ID: 8829</p>
                        </div>
                    </div>
                </header>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
