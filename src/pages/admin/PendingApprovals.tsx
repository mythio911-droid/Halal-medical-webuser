import React, { useState } from 'react';

import {
    Check,
    X,
    ExternalLink,
    Filter,
    Search
} from 'lucide-react';

interface ChangeRequest {
    id: string;
    hospital: string;
    type: string;
    content: string;
    date: string;
    severity: 'low' | 'medium' | 'high';
}

const mockRequests: ChangeRequest[] = [
    { id: '1', hospital: 'General Medical Center', type: 'Facility Update', content: 'Updating emergency ward capacity from 50 to 85 beds.', date: '2024-04-09 10:30', severity: 'medium' },
    { id: '2', hospital: 'St. Mary Childrens Hospital', type: 'Policy Change', content: 'Updating visitor policy for pediatric wards.', date: '2024-04-09 09:15', severity: 'low' },
    { id: '3', hospital: 'Advanced Neuro Institute', type: 'Entity Registration', content: 'New MRI Diagnostic Wing registration request.', date: '2024-04-08 22:10', severity: 'high' },
    { id: '4', hospital: 'City Care Clinic', type: 'Staffing Pattern', content: 'Dr. James Wilson - Change of specialty to Senior Cardiology.', date: '2024-04-08 19:45', severity: 'medium' },
    { id: '5', hospital: 'Wellness Hub', type: 'Profile Update', content: 'Updating public contact details and facility banners.', date: '2024-04-08 16:30', severity: 'low' },
];

const PendingApprovals: React.FC = () => {
    const [requests, setRequests] = useState(mockRequests);
    const [loadingId, setLoadingId] = useState<string | null>(null);

    const handleAction = async (id: string, action: 'approve' | 'reject') => {
        setLoadingId(id);

        // Mock fetch request as requested
        try {
            await fetch('http://localhost:5000/api/admin/approve-change', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    requestId: id,
                    action: action,
                    adminId: 'ADMIN-8829',
                    timestamp: new Date().toISOString()
                })
            });

            // Since backend doesn't exist yet, we simulate a successful UI update
            console.log(`Mock ${action} request for ${id} sent to backend.`);
        } catch (error) {
            console.log('Fetch error (expected if localhost:5000 is not running):', error);
        } finally {
            // Small timeout to simulate network latency
            setTimeout(() => {
                setRequests(prev => prev.filter(r => r.id !== id));
                setLoadingId(null);
            }, 800);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Pending Change Requests</h1>
                    <p className="text-muted-foreground">Review and authorize hospital infrastructure updates.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search requests..."
                            className="bg-secondary/50 border border-border rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary w-64"
                        />
                    </div>
                    <button className="flex items-center gap-2 bg-secondary border border-border px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                </div>
            </div>

            <div className="card overflow-hidden p-0">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-secondary/30 border-b border-border">
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Hospital / Entity</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Update Type</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Details</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Date submitted</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Risk Level</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {requests.map((request) => (
                                <tr key={request.id} className="table-row-hover">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="font-semibold text-sm">{request.hospital}</div>
                                        <div className="text-xs text-muted-foreground">ID: REG-{request.id}029</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">
                                            {request.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm text-slate-300 line-clamp-1">{request.content}</p>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                        {request.date}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-1.5 uppercase text-[10px] font-bold">
                                            <div className={`w-2 h-2 rounded-full ${request.severity === 'high' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' :
                                                request.severity === 'medium' ? 'bg-yellow-500' : 'bg-emerald-500'
                                                }`} />
                                            <span className={
                                                request.severity === 'high' ? 'text-red-500' :
                                                    request.severity === 'medium' ? 'text-yellow-500' : 'text-emerald-500'
                                            }>
                                                {request.severity}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleAction(request.id, 'reject')}
                                                disabled={loadingId === request.id}
                                                className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors border border-transparent hover:border-red-500/20"
                                                title="Reject"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleAction(request.id, 'approve')}
                                                disabled={loadingId === request.id}
                                                className="p-2 text-emerald-500 hover:bg-emerald-500/10 rounded-lg transition-colors border border-transparent hover:border-emerald-500/20"
                                                title="Approve"
                                            >
                                                {loadingId === request.id ? (
                                                    <div className="w-4 h-4 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
                                                ) : <Check className="w-4 h-4" />}
                                            </button>
                                            <button className="p-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors border border-border">
                                                <ExternalLink className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {requests.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-muted-foreground italic">
                                        All change requests have been processed. Systems are nominal.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PendingApprovals;
