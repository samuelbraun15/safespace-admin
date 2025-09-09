'use client';
import React from 'react';
import Link from 'next/link';

// --- MOCK DATA ---
const users = [
    { id: 1, firstName: 'Emerson', lastName: 'Pascual', email: 'emer.pascual@gmail.com', lastLogin: '2025-08-11 05:00 PM', createdAt: '2025-01-01 09:00 AM', status: 'Active', role: 'Support Worker' },
    { id: 2, firstName: 'Freddie', lastName: 'Aguilar', email: 'fred.aguilar@gmail.com', lastLogin: '2025-08-11 05:00 PM', createdAt: '2025-01-02 09:00 AM', status: 'Active', role: 'Therapist' },
    { id: 3, firstName: 'Gerard', lastName: 'Chua', email: 'gerard.chua@gmail.com', lastLogin: '2025-08-11 05:00 PM', createdAt: '2025-01-03 09:00 AM', status: 'Active', role: 'Admin' },
    { id: 4, firstName: 'Komal', lastName: 'Kaur', email: 'komal.kaur@gmail.com', lastLogin: '2025-08-11 05:00 PM', createdAt: '2025-01-04 09:00 AM', status: 'Active', role: 'Support Worker' },
    { id: 5, firstName: 'John', lastName: 'Doe', email: 'john.doe@gmail.com', lastLogin: '2025-08-11 05:00 PM', createdAt: '2025-01-05 09:00 AM', status: 'Active', role: 'Patient' },
];

// --- ICONS ---
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
        <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 hover:text-gray-800">
        <circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
);


export default function UsersPage() {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                <div className="relative w-full md:max-w-xs">
                    <input
                        type="text"
                        placeholder="Search Users..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon />
                    </div>
                </div>
                <Link href="/users/create" className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">
                    <PlusIcon />
                    Create New User
                </Link>
            </div>

            {/* Filter and Order By */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                 <div>
                    <label className="text-sm font-medium text-gray-500">Filter by:</label>
                    <select className="mt-1 w-full p-2 border border-gray-300 rounded-lg">
                        <option>Role</option>
                        <option>Status</option>
                        <option>Created At</option>
                    </select>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-500 invisible">Operator</label>
                     <select className="mt-1 w-full p-2 border border-gray-300 rounded-lg">
                        <option>equal to</option>
                        <option>not equal to</option>
                    </select>
                </div>
                 <div>
                    <label className="text-sm font-medium text-gray-500 invisible">Value</label>
                    <input type="text" placeholder="Support Worker" className="mt-1 w-full p-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-500">Order by:</label>
                    <div className="flex gap-2 mt-1">
                        <select className="w-full p-2 border border-gray-300 rounded-lg">
                            <option>Created At</option>
                            <option>Last Name</option>
                            <option>Last Login</option>
                        </select>
                        <select className="w-full p-2 border border-gray-300 rounded-lg">
                            <option>Ascending</option>
                            <option>Descending</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-teal-50">
                        <tr>
                            {['ID', 'First Name', 'Last Name', 'Email Address', 'Last Login', 'Created At', 'Status', 'Action'].map(header => (
                                <th key={header} className="px-6 py-3 text-left text-xs font-bold text-teal-800 uppercase tracking-wider">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map(user => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.firstName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.lastName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.lastLogin}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.createdAt}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        {user.status}
                                    </span>
                                </td>
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

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6">
                <div className="flex items-center gap-4">
                     <span className="text-sm font-semibold text-teal-700 bg-teal-100 px-4 py-2 rounded-lg">20 Results Found</span>
                     <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Show:</span>
                        {[5, 20, 50, 100].map(val => (
                            <button key={val} className={`px-3 py-1 rounded-md text-sm ${val === 20 ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'}`}>{val}</button>
                        ))}
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100">Previous</button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100">Next</button>
                </div>
            </div>
        </div>
    );
}

