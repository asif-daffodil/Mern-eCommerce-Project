const Settings = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-950">Settings</h1>
                <p className="mt-1 text-sm text-slate-500">Configure store profile and fulfillment defaults.</p>
            </div>

            <section className="grid gap-6 xl:grid-cols-2">
                <form className="rounded-md border border-slate-200 bg-white p-5">
                    <h2 className="text-base font-bold">Store profile</h2>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <label className="block text-sm font-semibold">
                            Store name
                            <input className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-600" defaultValue="ReadyMade Shop" />
                        </label>
                        <label className="block text-sm font-semibold">
                            Support email
                            <input className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-600" defaultValue="support@example.com" />
                        </label>
                        <label className="block text-sm font-semibold sm:col-span-2">
                            Store address
                            <textarea className="mt-2 min-h-24 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-600" defaultValue="Dhaka, Bangladesh" />
                        </label>
                    </div>
                    <button type="button" className="mt-5 rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                        Save changes
                    </button>
                </form>

                <div className="rounded-md border border-slate-200 bg-white p-5">
                    <h2 className="text-base font-bold">Operations</h2>
                    <div className="mt-5 space-y-4">
                        {["Accept cash on delivery", "Send low stock alerts", "Auto-confirm paid orders"].map((label, index) => (
                            <label key={label} className="flex items-center justify-between gap-4 rounded-md bg-slate-50 p-4 text-sm font-semibold">
                                {label}
                                <input type="checkbox" defaultChecked={index !== 2} className="size-5 accent-emerald-600" />
                            </label>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Settings;
