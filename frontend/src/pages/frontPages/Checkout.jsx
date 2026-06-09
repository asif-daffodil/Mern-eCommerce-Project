import { useState } from "react";

const products = [
   {
      id: 1,
      name: "Black Sweater",
      image: "https://readymadeui.com/images/black-sweaters-1.webp",
      alt: "black sweater",
      quantity: 2,
      price: "$40",
   },
   {
      id: 2,
      name: "Dark Green Tshirt",
      image: "https://readymadeui.com/images/dark-green-tshirt-2.webp",
      alt: "dark green tshirt",
      quantity: 1,
      price: "$16",
   },
   {
      id: 3,
      name: "Jacket",
      image: "https://readymadeui.com/images/green-jacket-3.webp",
      alt: "jacket",
      quantity: 1,
      price: "$16",
   },
   {
      id: 4,
      name: "Black & White Sneakers",
      image: "https://readymadeui.com/images/product14.webp",
      alt: "black & white sneakers",
      quantity: 1,
      price: "$16",
   },
];

function OrderSidebar() {
   return (
      <section className="bg-gray-100 md:h-screen md:sticky md:top-0 md:min-w-[370px] lg:min-w-[420px] dark:bg-neutral-800">
         <div className="relative h-full">
            <div className="px-6 py-8 md:overflow-auto md:h-screen">
               {/* Product List */}
               <ul className="space-y-6">
                  {products.map((product) => (
                     <li key={product.id} className="flex items-start gap-4">
                        <div className="w-24 h-24 flex p-3 shrink-0 bg-white rounded-md dark:bg-neutral-700">
                           <img
                              src={product.image}
                              className="w-full object-contain"
                              alt={product.alt}
                           />
                        </div>
                        <div className="w-full">
                           <h3 className="text-sm text-slate-900 font-semibold dark:text-slate-50">
                              {product.name}
                           </h3>
                           <ul className="text-sm text-slate-500 font-medium space-y-2 mt-2 dark:text-slate-400">
                              <li className="flex flex-wrap gap-4">
                                 Quantity <span className="ml-auto">{product.quantity}</span>
                              </li>
                              <li className="flex flex-wrap gap-4">
                                 Total Price{" "}
                                 <span className="ml-auto text-slate-900 font-semibold dark:text-slate-50">
                                    {product.price}
                                 </span>
                              </li>
                           </ul>
                        </div>
                     </li>
                  ))}
               </ul>

               <hr className="border-slate-300 my-6 dark:border-neutral-700" />

               {/* Order Summary */}
               <div>
                  <ul className="text-slate-500 font-medium space-y-4 dark:text-slate-400">
                     <li className="flex flex-wrap gap-4 text-sm">Subtotal <span
                        className="ml-auto text-slate-900 font-semibold dark:text-slate-50">$102.00</span>
                     </li>
                     <li className="flex flex-wrap gap-4 text-sm">Shipping <span
                        className="ml-auto text-slate-900 font-semibold dark:text-slate-50">$6.00</span>
                     </li>
                     <li className="flex flex-wrap gap-4 text-sm">Tax <span
                        className="ml-auto text-slate-900 font-semibold dark:text-slate-50">$5.00</span>
                     </li>
                     <hr className="border-slate-300 dark:border-neutral-700" />
                     <li className="flex flex-wrap gap-4 text-sm font-semibold text-slate-900 dark:text-slate-50">
                        Total <span className="ml-auto">$113.00</span></li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}

function DeliveryDetailsForm({ paymentMethod, billingAddressSame, setPaymentMethod, setBillingAddressSame }) {
   return (
      <section className="w-full h-max rounded-md py-8 px-8 xl:px-12">
         <form>
            {/* Delivery Details */}
            <fieldset>
               <legend className="text-xl text-slate-900 font-semibold mb-6 dark:text-slate-50">
                  Delivery Details
               </legend>
               <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                     <label
                        htmlFor="fname"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
                     >
                        First Name
                     </label>
                     <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="John"
                        required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="lname"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
                     >
                        Last Name
                     </label>
                     <input
                        type="text"
                        id="lname"
                        name="lname"
                        placeholder="Doe"
                        required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="email"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
                     >
                        Email
                     </label>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@readymadeui.com"
                        required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="mobile"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
                     >
                        Mobile Number
                     </label>
                     <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        placeholder="123-456-7890"
                        required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="address"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
                     >
                        Address Line
                     </label>
                     <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="123 Main Street"
                        required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="city"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
                     >
                        City
                     </label>
                     <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="New York"
                        required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="state"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
                     >
                        State
                     </label>
                     <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                        required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="postal-code"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
                     >
                        Postal code
                     </label>
                     <input
                        type="text"
                        id="postal-code"
                        name="postalCode"
                        placeholder="10001"
                        required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
                     />
                  </div>
               </div>
            </fieldset>

            {/* Payment Methods */}
            <fieldset className="mt-12">
               <legend className="text-xl text-slate-900 font-semibold mb-6 dark:text-slate-50">
                  Payment method
               </legend>
               <div className="grid gap-4 lg:grid-cols-2">
                  {/* Card Payment */}
                  <div className="bg-gray-100 p-4 rounded-md border border-slate-300 max-w-sm dark:bg-neutral-800 dark:border-neutral-700">
                     <div>
                        <div className="flex items-center">
                           <input
                              type="radio"
                              name="method"
                              id="card"
                              className="w-[18px] h-[18px] appearance-none rounded-full border border-slate-400 bg-white focus:outline-blue-500
                          checked:ring-2 checked:ring-inset checked:ring-white checked:bg-blue-600
                          dark:checked:ring-neutral-900 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-600"
                              checked={paymentMethod === "card"}
                              onChange={() => setPaymentMethod("card")}
                           />
                           <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                              <img
                                 src="https://readymadeui.com/images/visa.webp"
                                 className="w-12"
                                 alt="visa"
                              />
                              <img
                                 src="https://readymadeui.com/images/american-express.webp"
                                 className="w-12"
                                 alt="american-express"
                              />
                              <img
                                 src="https://readymadeui.com/images/master.webp"
                                 className="w-12"
                                 alt="master"
                              />
                           </label>
                        </div>
                     </div>
                     <p className="mt-4 text-sm text-slate-500 font-medium">
                        Pay with your debit or credit card
                     </p>
                  </div>

                  {/* PayPal Payment */}
                  <div className="bg-gray-100 p-4 rounded-md border border-slate-300 max-w-sm dark:bg-neutral-800 dark:border-neutral-700">
                     <div>
                        <div className="flex items-center">
                           <input
                              type="radio"
                              name="method"
                              id="paypal"
                              className="w-[18px] h-[18px] appearance-none rounded-full border border-slate-400 bg-white focus:outline-blue-500
                          checked:ring-2 checked:ring-inset checked:ring-white checked:bg-blue-600
                          dark:checked:ring-neutral-900 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-600"
                              checked={paymentMethod === "paypal"}
                              onChange={() => setPaymentMethod("paypal")}
                           />
                           <label htmlFor="paypal" className="ml-4 flex gap-2 cursor-pointer">
                              <img
                                 src="https://readymadeui.com/images/paypal.webp"
                                 className="w-20"
                                 alt="paypalCard"
                              />
                           </label>
                        </div>
                     </div>
                     <p className="mt-4 text-sm text-slate-500 font-medium">
                        Pay with your paypal account
                     </p>
                  </div>
               </div>
            </fieldset>

            {/* Billing Address Checkbox */}
            <label className="inline-flex items-center group has-[input:checked]:text-slate-900 mt-6">
               <input
                  id="billing-address"
                  name="billing-address"
                  type="checkbox"
                  required
                  className="sr-only"
                  checked={billingAddressSame}
                  onChange={(e) => setBillingAddressSame(e.target.checked)}
               />
               {/* Custom box */}
               <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 dark:outline-neutral-700
                                bg-white dark:bg-neutral-800
                                group-has-[input:checked]:bg-blue-600
                                group-has-[input:checked]:outline-blue-600
                                group-focus-within:outline-2
                                group-focus-within:outline-blue-600" aria-hidden="true">
                  {/* Checkmark  */}
                  <svg className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                     viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2">
                     <path d="M1 5l3 3 7-7" />
                  </svg>
               </span>
               <span className="ml-3 text-sm text-slate-700 dark:text-slate-300">
                  Billing address is the same as shipping address
               </span>
            </label>

            {/* Submit Button */}
            <div className="mt-8">
               <button
                  type="submit"
                  className="w-full px-3.5 py-2 text-white text-sm font-semibold rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700 border border-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
               >
                  Pay $113.00
               </button>
            </div>
         </form>
      </section>
   )
}

export default function Checkout() {
   const [paymentMethod, setPaymentMethod] = useState("card");
   const [billingAddressSame, setBillingAddressSame] = useState(true);


   return (
      <main className="max-w-7xl mx-auto">
         <h1 className="sr-only">Checkout</h1>
         <div className="flex flex-col h-full md:flex-row">
            {/* Sidebar */}
            <OrderSidebar />

            {/* Delivery Details Form */}
            <DeliveryDetailsForm
               paymentMethod={paymentMethod}
               billingAddressSame={billingAddressSame}
               setPaymentMethod={setPaymentMethod}
               setBillingAddressSame={setBillingAddressSame}
            />
         </div>
      </main>
   );
}