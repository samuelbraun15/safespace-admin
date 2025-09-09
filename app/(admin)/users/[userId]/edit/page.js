// File path: app/(admin)/users/[userId]/edit/page.js

'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

// --- MOCK DATA (In a real app, you would fetch this from your database) ---
const allUsers = [
    { id: 1, firstName: 'Emerson', lastName: 'Pascual', role: 'Support Worker', email: 'emer.pascual@gmail.com' },
    { id: 2, firstName: 'Freddie', lastName: 'Aguilar', role: 'Team Leader', email: 'fred.aguilar@gmail.com' },
    { id: 3, firstName: 'Gerard', lastName: 'Chua', role: 'Support Worker', email: 'gerard.chua@gmail.com' },
    { id: 4, firstName: 'Komal', lastName: 'Kaur', role: 'Administrator', email: 'komal.kaur@gmail.com' },
    { id: 5, firstName: 'John', lastName: 'Doe', role: 'Support Worker', email: 'john.doe@gmail.com' },
    { id: 6, firstName: 'Jane', lastName: 'Doe', role: 'Support Worker', email: 'jane.doe@gmail.com' },
];

// --- SUCCESS MODAL ---
const SaveSuccessModal = ({ onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">User Settings Saved</h2>
            <p className="text-gray-600 mb-8">User settings saved successfully.</p>
            <button onClick={onClose} className="w-full bg-teal-600 text-white font-semibold py-3 rounded-lg hover:bg-teal-700 transition-colors">Close</button>
        </div>
    </div>
);


export default function EditUserPage() {
    const router = useRouter();
    const params = useParams();
    const [user, setUser] = useState(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    useEffect(() => {
        // Find the user from our mock data based on the ID in the URL
        const userId = parseInt(params.userId, 10);
        const foundUser = allUsers.find(u => u.id === userId);
        if (foundUser) {
            setUser(foundUser);
        }
        // In a real app, you'd show a loading state and then fetch the user data here.
    }, [params.userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would add logic to save the updated user data to your database
        console.log('Saving user:', user);
        setShowSuccessModal(true);
    };
    
    const handleCloseModal = () => {
        setShowSuccessModal(false);
        router.push('/users'); // Navigate back to the user list after closing the modal
    }

    if (!user) {
        return <div>Loading user data...</div>; // Or a proper loading spinner
    }

    return (
        <>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h1 className="text-2xl font-bold text-gray-800 mb-8">Edit User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">First Name</label>
                            <input type="text" id="firstName" name="firstName" value={user.firstName} onChange={handleInputChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"/>
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">Last Name</label>
                            <input type="text" id="lastName" name="lastName" value={user.lastName} onChange={handleInputChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"/>
                        </div>
                        <div className="md:col-span-2">
                             <label htmlFor="role" className="block text-sm font-semibold text-gray-700">Role</label>
                             <select id="role" name="role" value={user.role} onChange={handleInputChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg bg-white">
                                <option>Support Worker</option>
                                <option>Team Leader</option>
                                <option>Administrator</option>
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
                            <input type="email" id="email" name="email" value={user.email} onChange={handleInputChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"/>
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="tempPassword" className="block text-sm font-semibold text-gray-700">Temporary Password</label>
                            <input type="password" id="tempPassword" placeholder="Enter new temporary password if needed" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"/>
                        </div>
                    </div>
                    <div className="flex justify-end gap-4 mt-10">
                        <button type="button" onClick={() => router.push('/users')} className="px-8 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100">Cancel</button>
                        <button type="submit" className="px-8 py-3 border border-transparent rounded-lg font-semibold text-white bg-teal-600 hover:bg-teal-700">Save Changes</button>
                    </div>
                </form>
            </div>
            {showSuccessModal && <SaveSuccessModal onClose={handleCloseModal} />}
        </>
    );
}


