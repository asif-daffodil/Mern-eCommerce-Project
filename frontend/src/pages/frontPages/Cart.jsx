import { useState } from "react";
import { Link } from "react-router";

const initialCartItems = [
   {
      id: 1,
      name: "Velvet Sneaker",
      image: "https://readymadeui.com/images/product14.webp",
      price: 20.0,
      quantity: 2,
      size: "SM",
   },
   {
      id: 2,
      name: "Smart Watch Timex",
      image: "https://readymadeui.com/images/watch5.webp",
      price: 60.0,
      quantity: 1,
      size: "MD",
   },
   {
      id: 3,
      name: "French Connection",
      image: "https://readymadeui.com/images/watch4.webp",
      price: 40.0,
      quantity: 1,
      size: "XL",
   },
   {
      id: 4,
      name: "Smart Watch",
      image: "https://readymadeui.com/images/watch7.webp",
      price: 60.0,
      quantity: 1,
      size: "SM",
   },
];

const SIZES = ["SM", "MD", "LG", "XL"];
const SHIPPING = 2.0;
const TAX = 4.0;

const TrashIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 fill-current inline"
      viewBox="0 0 24 24"
      aria-hidden="true"
   >
      <path
         d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
         data-original="#000000"
      />
      <path
         d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
         data-original="#000000"
      />
   </svg>
);

const MinusIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-2.5 fill-current"
      viewBox="0 0 124 124"
   >
      <path
         d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
         data-original="#000000"
      />
   </svg>
);

const PlusIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-2.5 fill-current"
      viewBox="0 0 42 42"
   >
      <path
         d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
         data-original="#000000"
      />
   </svg>
);

function CartItem({ item, isFirst, onRemove, onQuantityChange, onSizeChange }) {
   return (
      <li
         className={`grid grid-cols-2 items-start py-6 gap-6 sm:grid-cols-3 sm:gap-4 ${isFirst ? "pt-0" : ""
            }`}
      >
         <div className="col-span-2 flex items-start gap-4">
            <div className="w-24 h-24 shrink-0 bg-gray-100 p-3 rounded-md sm:w-28 sm:h-28 dark:bg-neutral-800">
               <img
                  src={item.image}
                  className="w-full h-full object-contain"
                  alt={item.name}
               />
            </div>
            <div className="flex flex-col">
               <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                  {item.name}
               </h3>
               <select
                  value={item.size}
                  onChange={(e) => onSizeChange(item.id, e.target.value)}
                  className="mt-3 px-2 py-1 w-max border border-slate-300 text-slate-900 text-xs rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-neutral-700 dark:text-slate-50 dark:bg-neutral-800"
               >
                  {SIZES.map((size) => (
                     <option key={size} value={size}>
                        {size}
                     </option>
                  ))}
               </select>
               {/* Remove button */}
               <button
                  type="button"
                  aria-label={`Remove ${item.name} from cart`}
                  onClick={() => onRemove(item.id)}
                  className="mt-6 font-semibold text-red-600 text-xs w-max flex items-center gap-2 shrink-0 cursor-pointer dark:text-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
               >
                  <TrashIcon />
                  REMOVE
               </button>
            </div>
         </div>

         <div className="flex flex-row justify-between gap-4 col-span-full sm:ml-auto sm:flex-col sm:justify-none sm:gap-0 sm:col-span-1">
            <p className="text-base font-semibold text-slate-900 dark:text-slate-50">
               ${(item.price * item.quantity).toFixed(2)}
            </p>
            {/* Quantity Selector */}
            <div className="flex items-center px-2.5 py-1.5 border border-slate-300 text-slate-900 font-medium text-xs rounded-md sm:mt-6 dark:border-neutral-700 dark:text-slate-50 dark:bg-neutral-800">
               <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                  className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
               >
                  <MinusIcon />
               </button>
               <span className="mx-3">{item.quantity}</span>
               <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                  className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
               >
                  <PlusIcon />
               </button>
            </div>
         </div>
      </li>
   );
}

export default function Cart() {
   const [cartItems, setCartItems] = useState(initialCartItems);
   const [promoCode, setPromoCode] = useState("");
   const [discount] = useState(0.0);

   const handleRemove = (id) => {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
   };

   const handleQuantityChange = (id, newQty) => {
      if (newQty < 1) return;
      setCartItems((prev) =>
         prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
   };

   const handleSizeChange = (id, newSize) => {
      setCartItems((prev) =>
         prev.map((item) => (item.id === id ? { ...item, size: newSize } : item))
      );
   };

   const handlePromoSubmit = (e) => {
      e.preventDefault();
      // Promo code logic placeholder
   };

   const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
   );
   const total = subtotal - discount + SHIPPING + TAX;

   return (
      <main className="px-4 md:px-8 mt-6">
         <div className="max-w-2xl mx-auto lg:max-w-6xl">
            <div className="mb-12 md:mb-16">
               <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                  Shopping Cart
               </h1>
            </div>

            <div className="grid gap-10 lg:grid-cols-3">
               {/* Cart Items */}
               <ul className="divide-y divide-slate-300 lg:col-span-2 dark:divide-neutral-700">
                  {cartItems.map((item, index) => (
                     <CartItem
                        key={item.id}
                        item={item}
                        isFirst={index === 0}
                        onRemove={handleRemove}
                        onQuantityChange={handleQuantityChange}
                        onSizeChange={handleSizeChange}
                     />
                  ))}
               </ul>

               {/* Order Details */}
               <div className="bg-gray-100 border border-slate-200 rounded-md p-6 h-max md:sticky md:top-0 dark:bg-neutral-800 dark:border-neutral-700">
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                     Order details
                  </h2>

                  <ul className="text-slate-600 font-medium mt-8 space-y-4 dark:text-slate-400">
                     <li className="flex flex-wrap gap-4 text-sm">
                        Discount{" "}
                        <span className="ml-auto text-slate-900 font-semibold dark:text-slate-50">
                           ${discount.toFixed(2)}
                        </span>
                     </li>
                     <li className="flex flex-wrap gap-4 text-sm">
                        Shipping{" "}
                        <span className="ml-auto text-slate-900 font-semibold dark:text-slate-50">
                           ${SHIPPING.toFixed(2)}
                        </span>
                     </li>
                     <li className="flex flex-wrap gap-4 text-sm">
                        Tax{" "}
                        <span className="ml-auto text-slate-900 font-semibold dark:text-slate-50">
                           ${TAX.toFixed(2)}
                        </span>
                     </li>
                     <li className="flex flex-wrap gap-4 text-sm text-slate-900 dark:text-slate-50">
                        Total{" "}
                        <span className="ml-auto font-semibold dark:text-slate-50">
                           ${total.toFixed(2)}
                        </span>
                     </li>
                  </ul>

                  <div className="mt-8 space-y-3 text-center">
                    <Link to="/checkout" >
                     <button
                        type="button"
                        className="w-full px-4 py-2.5 text-white text-sm font-semibold rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700 border border-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        to="/checkout"
                     >
                        Checkout
                     </button>
                    </Link>
                     <a
                        href="#"
                        className="inline-block text-blue-700 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-blue-500"
                     >
                        Continue Shopping
                     </a>
                  </div>

                  <hr className="my-6 border-slate-300 dark:border-neutral-700" />

                  {/* Promo Code Form */}
                  <form className="max-w-sm" onSubmit={handlePromoSubmit}>
                     <label
                        htmlFor="promocode"
                        className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-50"
                     >
                        Do you have a promo code?
                     </label>
                     <div className="flex flex-col gap-4 sm:flex-row">
                        <input
                           type="text"
                           id="promocode"
                           name="promocode"
                           required
                           placeholder="Enter promo code"
                           autoComplete="postal-code"
                           value={promoCode}
                           onChange={(e) => setPromoCode(e.target.value)}
                           className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600"
                        />
                        <button
                           type="submit"
                           className="py-2 px-3.5 text-sm w-max rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                           Apply
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </main>
   );
}