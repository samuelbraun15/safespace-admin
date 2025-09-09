'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminNav() {
    const pathname = usePathname();
    const navLinks = [
        { name: 'Overview', href: '/overview' },
        { name: 'Users', href: '/users' },
        { name: 'Referral Intake', href: '/referral-intake' },
        { name: 'Referral Tracking', href: '/referral-tracking' },
        { name: 'System Monitoring', href: '/system-monitoring' },
        { name: 'Audit & Compliance', href: '/audit-compliance' },
        { name: 'Reports & Analytics', href: '/reports-analytics' },
    ];

    return (
        <div className="bg-white p-2 border-b-2 border-t-2 border-gray-200">
            <nav className="p-1 border border-gray-300 rounded-full flex items-center justify-start max-w-max">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out
                                ${isActive ? 'bg-teal-100 text-teal-800 shadow-inner' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};
