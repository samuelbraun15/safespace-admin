import React from 'react';

// --- MOCK DATA ---
const trackedReferrals = [
    { id: 'RFP-000', clientName: 'Mike Ross', assigned: 'Dr. Emily Carter', status: 'In Progress', lastUpdate: '2025-09-08 10:00 AM' },
    { id: 'RFP-005', clientName: 'Sarah Connor', assigned: 'Dr. Ben Adams', status: 'Pending Acceptance', lastUpdate: '2025-09-07 02:30 PM' },
     { id: 'RFP-006', clientName: 'Kyle Reese', assigned: 'Dr. Emily Carter', status: 'Completed', lastUpdate: '2025-09-05 11:00 AM' },
];

// --- ICONS ---
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
        <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);
const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 hover:text-gray-800">
        <circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
);

// --- STATUS BADGE COMPONENT ---
const StatusBadge = ({ status }) => {
    const styles = {
        'In Progress': 'bg-yellow-100 text-yellow-800',
        'Pending Acceptance': 'bg-orange-100 text-orange-800',
        'Completed': 'bg-green-100 text-green-800',
    };
    return <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${styles[status] || 'bg-gray-100 text-gray-800'}`}>{status}</span>;
}


export default function ReferralTrackingPage() {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="relative w-full md:max-w-xs mb-6">
                <input
                    type="text"
                    placeholder="Search Referrals..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon />
                </div>
            </div>
            
             <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-teal-50">
                        <tr>
                            {['Referral ID', 'Client Name', 'Assigned Therapist', 'Status', 'Last Update', 'Action'].map(header => (
                                <th key={header} className="px-6 py-3 text-left text-xs font-bold text-teal-800 uppercase tracking-wider">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {trackedReferrals.map(referral => (
                            <tr key={referral.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{referral.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{referral.clientName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{referral.assigned}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm"><StatusBadge status={referral.status} /></td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{referral.lastUpdate}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="p-1 rounded-full hover:bg-gray-200 transition-colors">
                                        <SettingsIcon />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
