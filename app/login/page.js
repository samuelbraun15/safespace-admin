'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// --- SVG ICON COMPONENTS ---
const LogoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0Z" fill="url(#paint0_linear_1_2)"/>
    <path d="M25.41 14.59C24.3463 13.526 23.0937 12.6937 21.72 12.15C21.72 12.15 21.21 15.35 24.34 16.3C26.17 16.82 27.81 17.8 28.98 19.14C28.98 19.14 28.01 16.53 25.41 14.59Z" fill="white"/>
    <path d="M18.28 27.85C16.9063 27.3063 15.6537 26.474 14.59 25.41C13.526 24.3463 12.6937 23.0937 12.15 21.72C12.15 21.72 15.35 21.21 16.3 24.34C16.82 26.17 17.8 27.81 19.14 28.98C19.14 28.98 16.53 28.01 18.28 27.85Z" fill="#319795"/>
    <defs>
      <linearGradient id="paint0_linear_1_2" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E0EBE8"/>
        <stop offset="1" stopColor="#B3D4CE"/>
      </linearGradient>
    </defs>
  </svg>
);


export default function LoginPage() {
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    // In a real app, you'd handle authentication here.
    // For now, we'll just navigate to the dashboard.
    router.push('/overview');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#E0EBE8] font-sans">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-2xl">
        {!showForm ? (
          <div className="text-center cursor-pointer" onClick={() => setShowForm(true)}>
             <div className="flex justify-center items-center mb-6">
                <LogoIcon />
            </div>
            <h1 className="text-6xl font-bold text-gray-800 tracking-tighter">ADMIN</h1>
          </div>
        ) : (
          <div>
            <div className="flex justify-center items-center mb-4">
                <LogoIcon />
            </div>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">SafeSpace</h2>
                <p className="text-gray-500">Mental Health Support Platform</p>
            </div>
            <div className="mt-8">
                <button
                  type="button"
                  onClick={handleLogin}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-transform transform hover:scale-105"
                >
                  Sign In
                </button>
            </div>
          </div>
        )}
      </div>
      <footer className="absolute bottom-0 w-full text-center p-4 text-gray-600 text-sm">
        2025 SafeSpace. All Right Reserved
      </footer>
    </div>
  );
};
