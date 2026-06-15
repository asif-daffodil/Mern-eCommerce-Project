import { useState } from "react";
import { Outlet } from "react-router";
import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";
import Footer from "../components/admin/Footer";

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <div className="min-h-screen lg:pl-72">
                <Header onMenuClick={() => setIsSidebarOpen(true)} />
                <main className="px-4 py-6 sm:px-6 lg:px-8">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default AdminLayout;
