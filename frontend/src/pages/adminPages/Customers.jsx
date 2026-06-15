import { customers } from "./adminData";

const Customers = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-950">Customers</h1>
                <p className="mt-1 text-sm text-slate-500">Review customer value, order count, and account status.</p>
            </div>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {customers.map((customer) => (
                    <article key={customer.email} className="rounded-md border border-slate-200 bg-white p-5">
                        <div className="flex items-center gap-3">
                            <div className="grid size-11 place-items-center rounded-md bg-amber-500 font-bold text-white">
                                {customer.name.charAt(0)}
                            </div>
                            <div className="min-w-0">
                                <h2 className="truncate text-sm font-bold">{customer.name}</h2>
                                <p className="truncate text-xs text-slate-500">{customer.email}</p>
                            </div>
                        </div>
                        <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                            <div className="rounded-md bg-slate-50 p-3">
                                <p className="text-xs text-slate-500">Orders</p>
                                <p className="mt-1 font-bold">{customer.orders}</p>
                            </div>
                            <div className="rounded-md bg-slate-50 p-3">
                                <p className="text-xs text-slate-500">Spent</p>
                                <p className="mt-1 font-bold">{customer.spent}</p>
                            </div>
                        </div>
                        <span className="mt-4 inline-block rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                            {customer.status}
                        </span>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default Customers;
