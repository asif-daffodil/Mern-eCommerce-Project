import { FaArrowTrendUp, FaBoxOpen, FaCartShopping, FaUserGroup } from "react-icons/fa6";
import { orders, products, stats, topCategories } from "./adminData";

const statIcons = [FaArrowTrendUp, FaCartShopping, FaUserGroup, FaBoxOpen];
const toneClasses = {
    emerald: "bg-emerald-50 text-emerald-700",
    cyan: "bg-cyan-50 text-cyan-700",
    amber: "bg-amber-50 text-amber-700",
    rose: "bg-rose-50 text-rose-700",
};

const Dashboard = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-sm font-semibold text-emerald-700">Admin overview</p>
                    <h1 className="mt-1 text-2xl font-bold text-slate-950">Dashboard</h1>
                </div>
                <button className="w-max rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                    Export report
                </button>
            </div>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat, index) => {
                    const Icon = statIcons[index];

                    return (
                        <article key={stat.label} className="rounded-md border border-slate-200 bg-white p-5">
                            <div className="flex items-center justify-between gap-3">
                                <span className={`grid size-11 place-items-center rounded-md ${toneClasses[stat.tone]}`}>
                                    <Icon aria-hidden="true" />
                                </span>
                                <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
                                    {stat.change}
                                </span>
                            </div>
                            <p className="mt-5 text-sm font-medium text-slate-500">{stat.label}</p>
                            <p className="mt-1 text-2xl font-bold text-slate-950">{stat.value}</p>
                        </article>
                    );
                })}
            </section>

            <section className="grid gap-6 xl:grid-cols-[1fr_360px]">
                <div className="rounded-md border border-slate-200 bg-white">
                    <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                        <h2 className="text-base font-bold">Recent orders</h2>
                        <span className="text-xs font-semibold text-slate-500">Live preview</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[640px] text-left text-sm">
                            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                                <tr>
                                    <th className="px-5 py-3">Order</th>
                                    <th className="px-5 py-3">Customer</th>
                                    <th className="px-5 py-3">Date</th>
                                    <th className="px-5 py-3">Total</th>
                                    <th className="px-5 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {orders.map((order) => (
                                    <tr key={order.id}>
                                        <td className="px-5 py-4 font-semibold text-slate-950">{order.id}</td>
                                        <td className="px-5 py-4 text-slate-600">{order.customer}</td>
                                        <td className="px-5 py-4 text-slate-600">{order.date}</td>
                                        <td className="px-5 py-4 font-semibold">{order.total}</td>
                                        <td className="px-5 py-4">
                                            <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="rounded-md border border-slate-200 bg-white p-5">
                        <h2 className="text-base font-bold">Top categories</h2>
                        <div className="mt-4 space-y-4">
                            {topCategories.map((category) => (
                                <div key={category.name}>
                                    <div className="flex justify-between text-sm">
                                        <span className="font-semibold">{category.name}</span>
                                        <span className="text-slate-500">{category.sales}</span>
                                    </div>
                                    <div className="mt-2 h-2 rounded-full bg-slate-100">
                                        <div className="h-2 rounded-full bg-emerald-600" style={{ width: category.share }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-md border border-slate-200 bg-white p-5">
                        <h2 className="text-base font-bold">Inventory alerts</h2>
                        <div className="mt-4 space-y-3">
                            {products.filter((product) => product.stock <= 8).map((product) => (
                                <div key={product.id} className="flex items-center gap-3 rounded-md bg-slate-50 p-3">
                                    <img src={product.image} alt={product.name} className="size-12 rounded-md object-contain" />
                                    <div>
                                        <p className="text-sm font-semibold">{product.name}</p>
                                        <p className="text-xs text-slate-500">{product.stock} items left</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
