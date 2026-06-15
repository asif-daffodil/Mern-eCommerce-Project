
import { NavLink } from "react-router";
import {
    FaBoxesStacked,
    FaCartShopping,
    FaChartLine,
    FaGear,
    FaHouse,
    FaUserGroup,
    FaXmark,
} from "react-icons/fa6";

const navItems = [
    { to: "/admin", label: "Dashboard", icon: FaChartLine, end: true },
    { to: "/admin/products", label: "Products", icon: FaBoxesStacked },
    { to: "/admin/orders", label: "Orders", icon: FaCartShopping },
    { to: "/admin/customers", label: "Customers", icon: FaUserGroup },
    { to: "/admin/settings", label: "Settings", icon: FaGear },
];

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <>
            <div
                className={`fixed inset-0 z-30 bg-slate-950/40 transition-opacity lg:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
                onClick={onClose}
                aria-hidden="true"
            />
            <aside
                className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-200 lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex min-h-16 items-center justify-between border-b border-slate-200 px-5">
                    <NavLink to="/admin" className="flex items-center gap-3" onClick={onClose}>
                        <span className="grid size-10 place-items-center rounded-md bg-emerald-600 text-white">
                            <FaHouse aria-hidden="true" />
                        </span>
                        <span>
                            <span className="block text-base font-bold">Shop Admin</span>
                            <span className="block text-xs font-medium text-slate-500">Commerce control</span>
                        </span>
                    </NavLink>
                    <button
                        type="button"
                        onClick={onClose}
                        className="grid size-9 place-items-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-900 lg:hidden"
                        aria-label="Close admin navigation"
                    >
                        <FaXmark aria-hidden="true" />
                    </button>
                </div>

                <nav className="flex-1 space-y-1 px-3 py-5" aria-label="Admin navigation">
                    {navItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.end}
                                onClick={onClose}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-semibold transition-colors ${isActive
                                        ? "bg-emerald-50 text-emerald-700"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                                    }`
                                }
                            >
                                <Icon className="size-4" aria-hidden="true" />
                                {item.label}
                            </NavLink>
                        );
                    })}
                </nav>

                <div className="border-t border-slate-200 p-4">
                    <div className="rounded-md bg-slate-900 p-4 text-white">
                        <p className="text-sm font-semibold">Today</p>
                        <p className="mt-1 text-2xl font-bold">$8,240</p>
                        <p className="mt-1 text-xs text-slate-300">Revenue from 42 paid orders</p>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
