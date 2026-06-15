export const stats = [
    { label: "Revenue", value: "$48,240", change: "+12.5%", tone: "emerald" },
    { label: "Orders", value: "1,284", change: "+8.2%", tone: "cyan" },
    { label: "Customers", value: "8,420", change: "+4.8%", tone: "amber" },
    { label: "Pending", value: "37", change: "-3.1%", tone: "rose" },
];

export const products = [
    {
        id: "PRD-1042",
        name: "Velvet Sneaker",
        category: "Shoes",
        stock: 64,
        price: "$80.00",
        status: "Published",
        image: "https://readymadeui.com/images/product14.webp",
    },
    {
        id: "PRD-1043",
        name: "Smart Watch Timex",
        category: "Accessories",
        stock: 22,
        price: "$120.00",
        status: "Published",
        image: "https://readymadeui.com/images/watch5.webp",
    },
    {
        id: "PRD-1044",
        name: "Green Jacket",
        category: "Clothing",
        stock: 8,
        price: "$68.00",
        status: "Low stock",
        image: "https://readymadeui.com/images/green-jacket-3.webp",
    },
    {
        id: "PRD-1045",
        name: "Black Sweater",
        category: "Clothing",
        stock: 0,
        price: "$40.00",
        status: "Draft",
        image: "https://readymadeui.com/images/black-sweaters-1.webp",
    },
];

export const orders = [
    { id: "#ORD-7291", customer: "Asif Rahman", date: "Jun 15, 2026", total: "$228.00", payment: "Paid", status: "Processing" },
    { id: "#ORD-7290", customer: "Nadia Islam", date: "Jun 14, 2026", total: "$89.00", payment: "Paid", status: "Delivered" },
    { id: "#ORD-7289", customer: "Samin Khan", date: "Jun 14, 2026", total: "$144.00", payment: "COD", status: "Shipped" },
    { id: "#ORD-7288", customer: "Mila Chowdhury", date: "Jun 13, 2026", total: "$62.00", payment: "Refunded", status: "Cancelled" },
];

export const customers = [
    { name: "Asif Rahman", email: "asif@example.com", orders: 12, spent: "$1,428.00", status: "VIP" },
    { name: "Nadia Islam", email: "nadia@example.com", orders: 8, spent: "$820.00", status: "Active" },
    { name: "Samin Khan", email: "samin@example.com", orders: 4, spent: "$388.00", status: "Active" },
    { name: "Mila Chowdhury", email: "mila@example.com", orders: 2, spent: "$126.00", status: "New" },
];

export const topCategories = [
    { name: "Shoes", sales: "$18,420", share: "38%" },
    { name: "Accessories", sales: "$12,780", share: "27%" },
    { name: "Clothing", sales: "$10,210", share: "21%" },
    { name: "Watches", sales: "$6,830", share: "14%" },
];
