import React from 'react';

// --- SVG ICONS ---
const ServerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
);
const DatabaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
);

const StatCard = ({ title, value }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg flex-1">
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-4xl font-bold text-gray-900 mt-2">{value}</p>
    </div>
);

export default function OverviewPage() {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl text-gray-700">Welcome, Admin!</h2>
            <div className="flex flex-col sm:flex-row gap-8">
                <StatCard title="Total Users" value="200" />
                <StatCard title="System Uptime" value="99.9%" />
                <StatCard title="Security Alerts" value="3" />
                <StatCard title="Active Sessions" value="89" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[#D9E7E5] p-6 rounded-2xl shadow-md">
                    <h3 className="font-semibold text-gray-800 mb-4">System Health Overview</h3>
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl flex-1 flex items-center gap-4">
                            <ServerIcon />
                            <div>
                                <p className="text-sm text-gray-600">Server Status</p>
                                <p className="font-bold text-lg text-green-600">Online</p>
                                <p className="text-xs text-gray-500">99.9% uptime</p>
                            </div>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl flex-1 flex items-center gap-4">
                            <DatabaseIcon />
                            <div>
                                <p className="text-sm text-gray-600">Database</p>
                                <p className="font-bold text-lg text-green-600">Healthy</p>
                                <p className="text-xs text-gray-500">120 ms avg response</p>
                            </div>
                        </div>
                    </div>
                    <button className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105">View Detailed Metrics</button>
                </div>
                <div className="bg-[#D9E7E5] p-6 rounded-2xl shadow-md">
                    <h3 className="font-semibold text-gray-800 mb-4">Recent Admin Activities</h3>
                    <div className="space-y-3 mb-6">
                        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl flex justify-between items-center">
                            <div>
                                <p className="font-semibold text-sm text-gray-800">User Created</p>
                                <p className="text-xs text-gray-600">Created a new support worker</p>
                                <p className="text-xs text-gray-500 mt-1">2025-08-11 14:30:00</p>
                            </div>
                            <span className="bg-sky-200 text-sky-800 text-xs font-bold px-3 py-1 rounded-full">info</span>
                        </div>
                         <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl flex justify-between items-center">
                            <div>
                                <p className="font-semibold text-sm text-gray-800">Client Access</p>
                                <p className="text-xs text-gray-600">Access client profile for Emma Wilson</p>
                                <p className="text-xs text-gray-500 mt-1">2025-08-11 11:30:34</p>
                            </div>
                            <span className="bg-sky-200 text-sky-800 text-xs font-bold px-3 py-1 rounded-full">info</span>
                        </div>
                    </div>
                    <button className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105">View Full Audit Log</button>
                </div>
            </div>
        </div>
    );
}
