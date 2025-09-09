// File path: app/(admin)/overview/page.js

'use client';
import React, { useState } from 'react';

// --- ICONS ---
const ServerIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg> );
const DatabaseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg> );
const CloseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 hover:text-gray-800"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> );

// --- MOCK DATA & COMPONENTS ---
const StatCard = ({ title, value }) => (
    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-4xl font-bold text-gray-800 mt-2">{value}</p>
    </div>
);

const HealthCard = ({ title, status, value, statusColor = 'text-green-500', icon }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm flex-1">
        <div className="flex justify-between items-start">
            <p className="text-gray-500 text-sm">{title}</p>
            {icon}
        </div>
        <p className={`text-2xl font-bold ${statusColor} mt-2`}>{status}</p>
        <p className="text-xs text-gray-400">{value}</p>
    </div>
);

const ActivityItem = ({ title, description, time }) => (
    <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
        <div>
            <p className="font-semibold text-gray-800">{title}</p>
            <p className="text-sm text-gray-500">{description}</p>
            <p className="text-xs text-gray-400 mt-1">{time}</p>
        </div>
        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">info</span>
    </div>
);

const DetailedMetricsModal = ({ onClose }) => {
    const MetricBar = ({ label, value, threshold, percentage, status = "normal" }) => (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-1">
                <p className="text-sm font-semibold text-gray-700">{label}</p>
                <span className={`px-2 py-0.5 text-xs font-medium rounded ${status === 'normal' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>{status}</span>
            </div>
            <p className="text-2xl font-bold text-gray-800 mb-2">{value}</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-teal-500 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
            </div>
            <p className="text-right text-xs text-gray-500 mt-1">Threshold: {threshold}</p>
        </div>
    );

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-xl w-full max-w-3xl">
                 <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Detailed System Metrics</h2>
                    <button onClick={onClose}><CloseIcon /></button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <MetricBar label="CPU Usage" value="45%" threshold="80%" percentage={45} />
                    <MetricBar label="Memory Usage" value="67%" threshold="85%" percentage={67} />
                    <MetricBar label="Database Response Time" value="120 ms" threshold="500 ms" percentage={24} />
                    <MetricBar label="Users" value="200 users" threshold="5000 users" percentage={4} />
                    <MetricBar label="API Response Time" value="350 ms" threshold="1000 ms" percentage={35} />
                    <MetricBar label="Error Rate" value="0.99%" threshold="5%" percentage={19.8} />
                </div>
            </div>
        </div>
    );
};


export default function OverviewPage() {
    const [showMetricsModal, setShowMetricsModal] = useState(false);

    return (
        <>
            <div className="space-y-8">
                <h1 className="text-2xl font-bold text-gray-800">Welcome, Admin!</h1>

                {/* Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard title="Total Users" value="200" />
                    <StatCard title="System Uptime" value="99.9%" />
                    <StatCard title="Security Alerts" value="3" />
                    <StatCard title="Active Sessions" value="89" />
                </div>

                {/* System Health */}
                <div className="bg-teal-50/50 border border-teal-100 p-6 rounded-2xl">
                    <h2 className="font-bold text-lg text-gray-800 mb-4">System Health Overview</h2>
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <HealthCard title="Server Status" status="Online" value="99.9% uptime" icon={<ServerIcon />} />
                        <HealthCard title="Database" status="Healthy" value="120 ms avg response" statusColor="text-blue-500" icon={<DatabaseIcon />} />
                    </div>
                    <button 
                        onClick={() => setShowMetricsModal(true)}
                        className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                        View Detailed Metrics
                    </button>
                </div>

                {/* Recent Activities */}
                <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                    <h2 className="font-bold text-lg text-gray-800 mb-4">Recent Admin Activities</h2>
                    <div className="space-y-4 mb-6">
                        <ActivityItem title="User Created" description="Created a new support worker" time="2025-08-11 14:30:00" />
                        <ActivityItem title="Client Access" description="Access client profile for Emma Wilson" time="2025-08-11 11:30:34" />
                    </div>
                    <button className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-colors">View Full Audit Log</button>
                </div>
            </div>

            {showMetricsModal && <DetailedMetricsModal onClose={() => setShowMetricsModal(false)} />}
        </>
    );
}

