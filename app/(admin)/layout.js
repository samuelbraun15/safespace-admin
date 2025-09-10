// This file defines the layout specific to the admin section of the application.
// It wraps all pages within the (admin) route group, providing a consistent header, navigation, and footer.

// Import the AdminHeader component, which displays the application logo and navigation links.
import AdminHeader from '@/components/AdminHeader';
// Import the AdminNav component, which provides the main navigation for the admin dashboard.
// Define the AdminLayout component.
// This component receives 'children' as a prop, representing the content of the current admin page.
export default function AdminLayout({ children }) {
  return (
    // Main container for the admin layout.
    // It sets up a flex column layout to stack header, nav, main content, and footer.
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800 flex flex-col">
      {/* Renders the administrative header at the top of the page. */}
      <AdminHeader />
      {/* Main content area. It grows to fill available available space and has padding. */}
      <main className="flex-grow p-8">
        {/* Renders the specific content of the current admin page. */}
        {children}
      </main>
      {/* Footer displayed at the bottom of the admin section. */}
      <footer className="w-full text-center p-4 text-sm bg-gray-800 text-white">
        2025 SafeSapce. All Right Reserved
      </footer>
    </div>
  );
}
