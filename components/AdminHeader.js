import React from 'react';

// --- SVG ICONS ---
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
const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
);
const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
);
const SignOutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
);


export default function AdminHeader() {
    return (
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <LogoIcon />
                <h1 className="text-xl font-semibold text-gray-800">SafeSpace</h1>
            </div>
            <div className="flex items-center gap-6 text-gray-600">
                <button className="hover:text-gray-900 transition-colors"><RefreshIcon /></button>
                <button className="hover:text-gray-900 transition-colors"><SettingsIcon /></button>
                {/* In a real app, this would trigger a sign-out function */}
                <a href="/login" className="flex items-center gap-2 font-medium hover:text-red-600 transition-colors">
                    <SignOutIcon />
                    Sign out
                </a>
            </div>
        </header>
    );
}
