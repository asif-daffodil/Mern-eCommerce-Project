import { FaPen, FaPlus, FaTrash } from "react-icons/fa6";
import { products } from "./adminData";

const Products = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-950">Products</h1>
                    <p className="mt-1 text-sm text-slate-500">Manage catalog items, prices, stock, and status.</p>
                </div>
                <button className="inline-flex w-max items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                    <FaPlus aria-hidden="true" />
                    Add product
                </button>
            </div>

            <section className="rounded-md border border-slate-200 bg-white">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] text-left text-sm">
                        <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                            <tr>
                                <th className="px-5 py-3">Product</th>
                                <th className="px-5 py-3">Category</th>
                                <th className="px-5 py-3">Stock</th>
                                <th className="px-5 py-3">Price</th>
                                <th className="px-5 py-3">Status</th>
                                <th className="px-5 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-3">
                                            <img src={product.image} alt={product.name} className="size-12 rounded-md bg-slate-100 object-contain p-1" />
                                            <div>
                                                <p className="font-semibold text-slate-950">{product.name}</p>
                                                <p className="text-xs text-slate-500">{product.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4 text-slate-600">{product.category}</td>
                                    <td className="px-5 py-4 font-semibold">{product.stock}</td>
                                    <td className="px-5 py-4 font-semibold">{product.price}</td>
                                    <td className="px-5 py-4">
                                        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="flex justify-end gap-2">
                                            <button className="grid size-9 place-items-center rounded-md border border-slate-200 text-slate-600 hover:bg-slate-100" aria-label={`Edit ${product.name}`}>
                                                <FaPen aria-hidden="true" />
                                            </button>
                                            <button className="grid size-9 place-items-center rounded-md border border-slate-200 text-rose-600 hover:bg-rose-50" aria-label={`Delete ${product.name}`}>
                                                <FaTrash aria-hidden="true" />
                                            </button>
                                        </div>
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

export default Products;
