
import { FaBars, FaBell, FaMagnifyingGlass } from "react-icons/fa6";

const Header = ({ onMenuClick }) => {
    return (
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="flex min-h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
                <button
                    type="button"
                    onClick={onMenuClick}
                    className="grid size-10 place-items-center rounded-md border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-950 lg:hidden"
                    aria-label="Open admin navigation"
                >
                    <FaBars aria-hidden="true" />
                </button>

                <div className="hidden min-w-0 flex-1 items-center gap-3 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 md:flex">
                    <FaMagnifyingGlass className="size-4 text-slate-400" aria-hidden="true" />
                    <input
                        type="search"
                        placeholder="Search orders, products, customers"
                        className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    />
                </div>

                <div className="ml-auto flex items-center gap-3">
                    <button
                        type="button"
                        className="relative grid size-10 place-items-center rounded-md border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                        aria-label="View notifications"
                    >
                        <FaBell aria-hidden="true" />
                        <span className="absolute right-2 top-2 size-2 rounded-full bg-rose-500" />
                    </button>
                    <div className="flex items-center gap-3 rounded-md border border-slate-200 bg-white px-2 py-1.5">
                        <div className="grid size-8 place-items-center rounded-md bg-amber-500 text-sm font-bold text-white">
                            A
                        </div>
                        <div className="hidden sm:block">
                            <p className="text-sm font-semibold leading-tight">Admin</p>
                            <p className="text-xs text-slate-500">Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
