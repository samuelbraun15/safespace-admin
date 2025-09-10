import AdminHeader from '@/components/AdminHeader';
<<<<<<< HEAD
// Import the AdminNav component, which provides the main navigation for the admin dashboard.
// Define the AdminLayout component.
// This component receives 'children' as a prop, representing the content of the current admin page.
=======
import AdminNav from '@/components/AdminNav';

>>>>>>> parent of fdde699 (added comments and fixed login page)
export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800 flex flex-col">
      <AdminHeader />
<<<<<<< HEAD
      {/* Main content area. It grows to fill available available space and has padding. */}
=======
      <AdminNav />
>>>>>>> parent of fdde699 (added comments and fixed login page)
      <main className="flex-grow p-8">
        {children}
      </main>
      <footer className="w-full text-center p-4 text-sm bg-gray-800 text-white">
        2025 SafeSapce. All Right Reserved
      </footer>
    </div>
  );
}
