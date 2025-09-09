'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function CreateReferralPage() {
    const router = useRouter();

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-8">Create New Referral</h1>
             <form className="space-y-6">
                 {/* Add form fields for creating a referral here */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">Client Name</label>
                        <input type="text" id="clientName" placeholder="Enter Client Name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg" />
                    </div>
                     <div>
                        <label htmlFor="referredBy" className="block text-sm font-medium text-gray-700">Referred By</label>
                        <input type="text" id="referredBy" placeholder="e.g., Dr. Smith, Community Clinic" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg" />
                    </div>
                </div>
                 <div className="flex justify-end gap-4 pt-4">
                    <button type="button" onClick={() => router.push('/referral-intake')} className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Cancel</button>
                    <button type="submit" className="px-6 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700">Create Referral</button>
                </div>
             </form>
        </div>
    );
}
