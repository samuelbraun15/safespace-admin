import React from 'react';

// --- MOCK DATA ---
const auditEvents = [
    { id: 1, event: 'User Created', description: 'Created new support worker account', timestamp: '2025-08-10 09:00:00' },
    { id: 2, event: 'Client Access', description: 'Accessed client profile for Emma Wilson', timestamp: '2025-08-10 09:00:00' },
    { id: 3, event: 'Security Alert', description: 'Multiple failed login attempts detected', timestamp: '2025-08-10 09:30:00' },
];

// --- STAT CARD COMPONENT ---
const StatCard = ({ title, value, subtitle, valueColor = 'text-gray-900' }) => (
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className={`text-4xl font-bold mt-2 ${valueColor}`}>{value}</p>
        <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
    </div>
);


export default function AuditCompliancePage() {
    return (
        <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-lg font-bold text-gray-800 mb-1">Audit & Compliance Dashboard</h2>
                <p className="text-sm text-gray-500 mb-6">Monitor system access, security events, and compliance metrics</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard title="Security Score" value="98%" subtitle="Last audit: 2 days ago" valueColor="text-blue-600" />
                    <StatCard title="Active Alerts" value="1" subtitle="Requires attention" valueColor="text-yellow-600" />
                    <StatCard title="Compliance" value="100%" subtitle="All requirements met" valueColor="text-green-600" />
                </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Audit Events</h2>
                <div className="space-y-4">
                    {auditEvents.map(event => (
                        <div key={event.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex justify-between items-center">
                            <div>
                                <p className="font-semibold text-gray-800">{event.event}</p>
                                <p className="text-sm text-gray-600">{event.description}</p>
                            </div>
                            <p className="text-sm text-gray-500">{event.timestamp}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
