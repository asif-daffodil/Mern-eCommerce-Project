import { orders } from "./adminData";

const Orders = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-950">Orders</h1>
                <p className="mt-1 text-sm text-slate-500">Track payment, fulfillment, and delivery state.</p>
            </div>

            <section className="rounded-md border border-slate-200 bg-white">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] text-left text-sm">
                        <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                            <tr>
                                <th className="px-5 py-3">Order</th>
                                <th className="px-5 py-3">Customer</th>
                                <th className="px-5 py-3">Date</th>
                                <th className="px-5 py-3">Total</th>
                                <th className="px-5 py-3">Payment</th>
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
                                    <td className="px-5 py-4 text-slate-600">{order.payment}</td>
                                    <td className="px-5 py-4">
                                        <span className="rounded-md bg-cyan-50 px-2 py-1 text-xs font-semibold text-cyan-700">
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Orders;
