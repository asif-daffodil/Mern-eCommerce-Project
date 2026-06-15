import Web from "../../assets/icons/web.svg";
import Map from "../../assets/icons/map.svg";

export default function Contact() {

   return (
      <section className="px-4 md:px-8 mt-6">
         <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 md:text-4xl dark:text-slate-50">
               Contact us
            </h2>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
               Have a question, need support, or want to discuss your next project? We’re here to help.
            </p>
         </div>

         <div className="grid lg:grid-cols-2 items-start gap-12 w-full max-w-6xl mx-auto max-lg:max-w-3xl">
            <form
               className="space-y-4 bg-white p-6 rounded-md shadow-xs border border-slate-300 dark:bg-neutral-800 dark:border-neutral-700">
               <div>
                  <label htmlFor="name"
                     className="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Name</label>
                  <input type="text" id="name" name="name" placeholder="John doe"
                     className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
               </div>
               <div>
                  <label htmlFor="email"
                     className="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Email</label>
                  <input type="email" id="email" name="email" placeholder="john@readymadeui.com"
                     className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
               </div>
               <div>
                  <label htmlFor="phone" className="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Phone
                     number</label>
                  <input type="number" id="phone" name="phone" placeholder="+11800-259-854"
                     className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
               </div>
               <div>
                  <label htmlFor="company"
                     className="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Company</label>
                  <input type="text" id="company" name="company" placeholder="XYZ pvt. ltd."
                     className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
               </div>
               <div>
                  <label htmlFor="message"
                     className="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Message</label>
                  <textarea placeholder="Write message" rows="6" type="text" id="message" name="message"
                     className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"></textarea>
               </div>

               <button type="submit"
                  className="py-2.5 px-4 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Send
                  message</button>
            </form>

            <div className="space-y-8">
               <div className="flex items-start gap-4">
                  <div
                     className="shrink-0 w-10 h-10 flex items-center justify-center rounded-md bg-slate-200 dark:bg-neutral-700">
                     <img src={Map} alt="map" className="size-7 fill-blue-700 dark:fill-blue-500" />
                  </div>
                  <div>
                     <h3 className="text-slate-900 text-base font-semibold dark:text-slate-50">Visit office</h3>
                     <p className="text-sm text-slate-600 mt-1 dark:text-slate-400">123, Shat-masjid Road, West Dhanmondi</p>
                  </div>
               </div>

               <div className="flex items-start gap-4">
                  <div
                     className="shrink-0 w-10 h-10 flex items-center justify-center rounded-md bg-slate-200 dark:bg-neutral-700">
                     <svg xmlns="http://www.w3.org/2000/svg" className="size-5 fill-blue-700 dark:fill-blue-500"
                        viewBox="0 0 32 32">
                        <path
                           d="M22.56 30a5.2 5.2 0 0 1-2-.41A34.53 34.53 0 0 1 2.4 11.42a5 5 0 0 1 1.06-5.51l3-3a3 3 0 0 1 4.24 0l3.53 3.53a3 3 0 0 1 0 4.24l-1.63 1.65a12.54 12.54 0 0 0 7.07 7.07l1.68-1.67a3 3 0 0 1 4.24 0l3.53 3.53a3 3 0 0 1 0 4.24l-3 3a5 5 0 0 1-3.56 1.5M8.62 4a1 1 0 0 0-.71.29l-3 3a3 3 0 0 0-.64 3.31 32.47 32.47 0 0 0 17.1 17.16 3 3 0 0 0 3.31-.64l3-3a1 1 0 0 0 0-1.42l-3.54-3.53a1 1 0 0 0-1.41 0l-2.12 2.12a1 1 0 0 1-1 .24 14.42 14.42 0 0 1-9.12-9.12 1 1 0 0 1 .24-1l2.12-2.12a1 1 0 0 0 .29-.71 1 1 0 0 0-.29-.7L9.33 4.29A1 1 0 0 0 8.62 4"
                           data-original="#000000" />
                     </svg>
                  </div>
                  <div>
                     <h3 className="text-slate-900 text-base font-semibold dark:text-slate-50">Call us</h3>
                     <p className="text-sm text-slate-600 mt-1 dark:text-slate-400"> +880 1948 948786</p>
                  </div>
               </div>

               <div className="flex items-start gap-4">
                  <div
                     className="shrink-0 w-10 h-10 flex items-center justify-center rounded-md bg-slate-200 dark:bg-neutral-700">
                     <svg xmlns="http://www.w3.org/2000/svg" className="size-5 fill-blue-700 dark:fill-blue-500"
                        viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd"
                           d="M.41 4.747A4.35 4.35 0 0 1 4.76.4h14.488a4.35 4.35 0 0 1 4.35 4.352l-.007 10.109a4.35 4.35 0 0 1-4.35 4.346H13.52a.3.3 0 0 0-.188.07l-4.548 3.84c-1.319 1.113-3.338.176-3.338-1.552v-2.068a.29.29 0 0 0-.29-.29h-.403a4.35 4.35 0 0 1-4.35-4.352zM4.76 2.14a2.61 2.61 0 0 0-2.61 2.608l-.008 10.108a2.61 2.61 0 0 0 2.61 2.611h.403c1.12 0 2.03.91 2.03 2.03v2.068a.29.29 0 0 0 .475.22l4.548-3.839a2.03 2.03 0 0 1 1.31-.479h5.723a2.61 2.61 0 0 0 2.61-2.608l.007-10.108a2.61 2.61 0 0 0-2.61-2.61zm2.128 5.29a.87.87 0 0 1 .87-.87h8.485a.87.87 0 0 1 0 1.74H7.757a.87.87 0 0 1-.87-.87zm0 4.744a.87.87 0 0 1 .87-.87h4.781a.87.87 0 0 1 0 1.74H7.758a.87.87 0 0 1-.87-.87"
                           clipRule="evenodd" data-original="#000000" />
                     </svg>
                  </div>
                  <div>
                     <h3 className="text-slate-900 text-base font-semibold dark:text-slate-50">Chat to us</h3>
                     <p className="text-sm text-slate-600 mt-1 dark:text-slate-400">info@doordie.com</p>
                  </div>
               </div>

               <div className="flex items-start gap-4">
                  <div
                     className="shrink-0 w-10 h-10 flex items-center justify-center rounded-md bg-slate-200 dark:bg-neutral-700">
                        <img src={Web} alt="web" className="size-7" />
                  </div>
                  <div>
                     <h3 className="text-slate-900 text-base font-semibold dark:text-slate-50">Web</h3>
                     <p className="text-sm text-slate-600 mt-1 dark:text-slate-400">https://asif.com.bd</p>
                  </div>
               </div>

               <div className="z-10 relative h-64 rounded-md overflow-hidden mt-12">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58438.36494587244!2d90.29368854863282!3d23.7331895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfbe6c0bab8b%3A0x8784d7f5150e9ae3!2sAsif%20Abir!5e0!3m2!1sen!2sus!4v1781002744011!5m2!1sen!2sus" className="left-0 top-0 h-full w-full"></iframe>
               </div>
            </div>
         </div>
      </section>
   );
}
