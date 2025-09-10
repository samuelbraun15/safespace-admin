'use client';
 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
 
const tabs = [
  { name: 'Overview', href: '/overview' },
  { name: 'Users', href: '/users' },
  { name: 'Referral Intake', href: '/referral-intake' },
  { name: 'Referral Tracking', href: '/referral-tracking' },
  { name: 'System Monitoring', href: '/system-monitoring' },
  { name: 'Audit Compliance', href: '/audit-compliance' },
  { name: 'Reports & Analytics', href: '/reports-analytics' }
];
 
export default function DashboardTabs() {
  const pathname = usePathname();
 
  return (
    <nav className="w-full mt-6">
      <div className="border-2 border-black rounded-full p-1 mx-auto w-full max-w-screen-xl">
        <div className="overflow-x-auto scrollbar-hide ">
          <div className="flex border-2 border-gray-800 rounded-full overflow-x-auto whitespace-nowrap w-full">
            {tabs.map((tab, index) => {
              const isActive = pathname === tab.href;
              return (
                <Link
                  key={tab.name}
                  href={tab.href}
                  className={`flex-1 min-w-[120px] text-center px-6 py-3 font-medium text-sm transition
                    ${isActive
                      ? 'bg-[#5DA39E] text-white'
                      : 'bg-white text-black hover:bg-gray-100'}
                    ${index !== tabs.length - 1 ? 'border-r border-gray-800' : ''}`}
                >
                  {tab.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}