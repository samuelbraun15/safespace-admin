'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// --- Create User Form Page ---
export default function CreateUserPage() {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send data to your backend
        console.log("Form submitted");
        setShowSuccessModal(true);
    };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        router.push('/users'); // Navigate back to the user list
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-8">Create New User Account</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input type="text" id="firstName" placeholder="Enter First Name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text" id="lastName" placeholder="Enter Last Name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
                    </div>
                </div>

                <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                    <select id="role" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500">
                        <option>Select Role</option>
                        <option>Support Worker</option>
                        <option>Therapist</option>
                        <option>Admin</option>
                        <option>Patient</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" id="email" placeholder="Enter email address" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
                </div>

                <div>
                    <label htmlFor="tempPassword" className="block text-sm font-medium text-gray-700">Temporary Password</label>
                    <input type="text" id="tempPassword" placeholder="Generate secure password" readOnly value="************" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-gray-100 focus:outline-none" />
                </div>

                <div className="flex justify-end gap-4 pt-4">
                    <button type="button" onClick={() => router.push('/users')} className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Cancel</button>
                    <button type="submit" className="px-6 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700">Create User</button>
                </div>
            </form>

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm w-full">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">User Created</h2>
                        <p className="text-gray-600 mb-6">User created successfully.</p>
                        <button 
                            onClick={handleCloseModal} 
                            className="w-full bg-teal-600 text-white font-semibold py-3 rounded-lg hover:bg-teal-700 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

