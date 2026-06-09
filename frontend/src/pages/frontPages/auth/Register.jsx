import React from 'react';
import { Link } from 'react-router';
import Logo from "../../../assets/images/logo.svg";

export default function Register() {

   return (
      <main className="min-h-screen flex flex-col justify-center p-4 md:p-8">
         <div className="w-full max-w-lg mx-auto sm:max-w-4xl border border-slate-200 dark:border-neutral-700 rounded-md p-6 sm:p-12 bg-white dark:bg-neutral-900">
            <div className="mb-12">
               <a href="#"><img src={Logo} alt="logo"
                  className="w-40 inline-block dark:invert dark:brightness-100" />
               </a>
               <p className="text-slate-600 text-base mt-6 dark:text-slate-400">Create your account and get started</p>
            </div>

            <form className="w-full">
               <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                     <label htmlFor="fname" className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">First
                        Name</label>
                     <input type="text" id="fname" name="fname" placeholder="John" required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                  </div>
                  <div>
                     <label htmlFor="lname" className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Last
                        Name</label>
                     <input type="text" id="lname" name="lname" placeholder="Doe" required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                  </div>
                  <div>
                     <label htmlFor="email"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Email</label>
                     <input type="email" id="email" name="email" placeholder="john@readymadeui.com" required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                  </div>
                  <div>
                     <label htmlFor="mobile"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Mobile Number</label>
                     <input type="tel" id="mobile" name="mobile" placeholder="123-456-7890" required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                  </div>
                  <div>
                     <label htmlFor="password"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Password</label>
                     <input type="password" id="password" name="password" placeholder="••••••••" required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                  </div>
                  <div>
                     <label htmlFor="cpassword"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Confirm
                        Password</label>
                     <input type="password" id="cpassword" name="cpassword" placeholder="••••••••" required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                  </div>
                  <div className="flex items-start flex-wrap gap-2">
                     <label className="flex items-center group has-[input:checked]:text-slate-900">
                        <input id="tmc" name="tmc" type="checkbox" required className="sr-only" />
                        {/* Custom box */}
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 dark:outline-neutral-700
                              bg-white dark:bg-neutral-800
                              group-has-[input:checked]:bg-blue-600
                              group-has-[input:checked]:outline-blue-600
                              group-focus-within:outline-2
                              group-focus-within:outline-blue-600" aria-hidden="true">
                           {/* Checkmark */}
                           <svg className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100" viewBox="0 0 12 10"
                              fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M1 5l3 3 7-7" />
                           </svg>
                        </span>
                        <span className="ml-3 text-sm text-slate-700 dark:text-slate-300">
                           I accept the
                        </span>
                     </label>

                     <a href="#"
                        className="ml-1 text-sm font-medium text-blue-700 dark:text-blue-500 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                        Terms and Conditions
                     </a>
                  </div>
               </div>

               <div className="mt-6">
                  <button type="submit"
                     className="py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                     Create an account</button>
               </div>
               <div className="mt-4 flex items-center gap-3">
                  <span className="h-px flex-1 bg-slate-200 dark:bg-neutral-700"></span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">or</span>
                  <span className="h-px flex-1 bg-slate-200 dark:bg-neutral-700"></span>
               </div>
               <div className="mt-4">
                  <button type="button"
                     className="w-full inline-flex items-center justify-center gap-2 py-2 px-3.5 text-sm rounded-md font-semibold text-slate-700 border border-slate-300 bg-white hover:bg-slate-50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-100 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700">
                     <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#4285F4" d="M23.64 12.204c0-.823-.074-1.615-.214-2.387H12.24v4.52h6.356c-.274 1.474-1.1 2.724-2.354 3.57v2.966h3.806c2.232-2.054 3.514-5.088 3.514-8.67z"/>
                        <path fill="#34A853" d="M12.24 24c3.24 0 5.958-1.072 7.944-2.915l-3.806-2.966c-1.058.71-2.414 1.132-4.138 1.132-3.18 0-5.876-2.146-6.84-5.027H1.468v3.16C3.43 21.77 7.54 24 12.24 24z"/>
                        <path fill="#FBBC05" d="M5.4 14.224c-.24-.71-.38-1.465-.38-2.244 0-.779.14-1.534.38-2.244V6.576H1.468A11.99 11.99 0 0 0 0 11.98c0 1.96.47 3.81 1.468 5.404l3.932-3.16z"/>
                        <path fill="#EA4335" d="M12.24 4.78c1.757 0 3.34.606 4.578 1.796l3.433-3.433C18.2 1.232 15.48 0 12.24 0 7.54 0 3.43 2.23 1.468 5.576l3.932 3.16C6.364 6.926 9.06 4.78 12.24 4.78z"/>
                     </svg>
                     Signup with Google
                  </button>
               </div>
               <div className="mt-6 text-sm text-slate-700 dark:text-slate-300 text-center">
                  Already have an account? <Link to="/login" className="font-medium text-blue-700 hover:underline dark:text-blue-500">Login Here</Link>
               </div>
            </form>
         </div>
      </main>
   );
}