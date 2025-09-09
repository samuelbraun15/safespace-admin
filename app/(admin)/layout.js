import AdminHeader from '@/components/AdminHeader';
import AdminNav from '@/components/AdminNav';

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800 flex flex-col">
      <AdminHeader />
      <AdminNav />
      <main className="flex-grow p-8">
        {children}
      </main>
      <footer className="w-full text-center p-4 text-sm bg-gray-800 text-white">
        2025 SafeSapce. All Right Reserved
      </footer>
    </div>
  );
}
