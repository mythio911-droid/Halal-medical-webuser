import React from 'react';
import { motion } from 'framer-motion';
import { Shield, User, Download, FileText, Info } from 'lucide-react';

const logs = [
    { id: 'LOG-8821', admin: 'Sr. Admin-8829', action: 'Approved Entity Change', entity: 'City General Hospital', ip: '192.168.1.104', time: '2024-04-09 11:20:45', severity: 'medium' },
    { id: 'LOG-8820', admin: 'Sr. Admin-8829', action: 'Security Config Modified', entity: 'Global Access Policy', ip: '192.168.1.104', time: '2024-04-09 10:45:12', severity: 'high' },
    { id: 'LOG-8819', admin: 'SYSTEM', action: 'Automated Backup Sequence', entity: 'Database-Primary', ip: 'internal-relay', time: '2024-04-09 00:00:00', severity: 'low' },
    { id: 'LOG-8818', admin: 'Admin-4412', action: 'Failed Login Attempt', entity: 'Auth Portal', ip: '203.0.113.5', time: '2024-04-08 23:15:33', severity: 'high' },
    { id: 'LOG-8817', admin: 'Sr. Admin-8829', action: 'Exported Audit Trail', entity: 'Audit System', ip: '192.168.1.104', time: '2024-04-08 19:12:05', severity: 'medium' },
    { id: 'LOG-8816', admin: 'Admin-2109', action: 'Rejected Practitioner', entity: 'Dr. Unverified Doe', ip: '192.168.1.112', time: '2024-04-08 16:45:00', severity: 'medium' },
];

const AuditLogs: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-b border-white/5">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-primary">
                        <Shield className="w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold font-mono tracking-tight">Security Audit Trail</h1>
                        <p className="text-muted-foreground text-sm uppercase tracking-widest font-mono">Immutable System Logs</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 transition-colors text-sm font-bold">
                    <Download className="w-4 h-4" />
                    Export Chain (PDF/JSON)
                </button>
            </div>

            <div className="space-y-4">
                {logs.map((log, i) => (
                    <motion.div
                        key={log.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="group grid grid-cols-1 md:grid-cols-6 gap-4 items-center p-4 rounded-lg bg-slate-950/40 border border-slate-900 hover:border-slate-700 transition-all font-mono text-xs"
                    >
                        <div className="text-muted-foreground font-bold">{log.id}</div>

                        <div className="flex items-center gap-2 col-span-2">
                            <div className={`w-2 h-2 rounded-full ${log.severity === 'high' ? 'bg-red-500' :
                                log.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                                }`} />
                            <div className="flex flex-col">
                                <span className="text-foreground font-bold uppercase">{log.action}</span>
                                <span className="text-muted-foreground lowercase">{log.entity}</span>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex items-center gap-1.5 text-muted-foreground">
                                <User className="w-3 h-3" />
                                <span>{log.admin}</span>
                            </div>
                            <div className="text-[10px] text-muted-foreground/60">{log.ip}</div>
                        </div>

                        <div className="text-right text-muted-foreground">{log.time}</div>

                        <div className="flex justify-end gap-2 pr-2">
                            <button className="p-2 rounded hover:bg-slate-800 text-muted-foreground">
                                <Info className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="card border-dashed bg-transparent border-slate-800 flex flex-col items-center justify-center py-10">
                <FileText className="w-12 h-12 text-slate-800 mb-4" />
                <p className="text-slate-600 font-mono text-sm uppercase tracking-widest">End of visible chain-of-custody</p>
                <button className="mt-4 text-primary text-sm hover:underline font-mono">Load archives... [2023-2024]</button>
            </div>
        </div>
    );
};

export default AuditLogs;
