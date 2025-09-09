import React from 'react';

// --- MOCK DATA ---
const systemAlerts = [
    { id: 1, message: 'Database backup completed successfully', timestamp: '2 hours ago', type: 'success' },
    { id: 2, message: 'High memory usage detected on server 2', timestamp: '4 hours ago', type: 'warning' },
    { id: 3, message: 'Security patch applied successfully', timestamp: '1 day ago', type: 'success' },
];

export default function SystemMonitoringPage() {
    const getAlertColor = (type) => {
        switch (type) {
            case 'warning': return 'border-l-4 border-yellow-500';
            default: return 'border-l-4 border-gray-300';
        }
    };

    return (
        <div className="space-y-8">
            {/* System Health Overview */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-lg font-bold text-gray-800 mb-1">System Health Overview</h2>
                <p className="text-sm text-gray-500 mb-6">Monitor system performance and health metrics</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                        <p className="text-sm font-medium text-gray-600">System Uptime</p>
                        <p className="text-4xl font-bold text-green-600 mt-2">99.9%</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                        <p className="text-sm font-medium text-gray-600">Response Time</p>
                        <p className="text-4xl font-bold text-blue-600 mt-2">235 ms</p>
                    </div>
                </div>
            </div>

            {/* System Alerts */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-lg font-bold text-gray-800 mb-1">System Alerts</h2>
                <p className="text-sm text-gray-500 mb-6">Recent system notifications and alerts</p>
                <div className="space-y-4">
                    {systemAlerts.map(alert => (
                        <div key={alert.id} className={`bg-gray-50 p-4 rounded-lg border ${getAlertColor(alert.type)} flex justify-between items-center`}>
                            <p className="text-gray-800">{alert.message}</p>
                            <p className="text-sm text-gray-500">{alert.timestamp}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
