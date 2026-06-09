import React from 'react';

const faqs = [
   {
      question: "Are there any special discounts or early bird offers?",
      answer: "Yes! We offer limited-time early bird discounts and bundle packages for group registrations. Be sure to sign up early to grab the best deals."
   },
   {
      question: "What are the dates and locations for the product launch events?",
      answer: "The launch events will take place in New York on July 18th, San Francisco on July 25th, and virtually on August 1st. Detailed schedules will be emailed after registration."
   },
   {
      question: "Can I bring a guest to the product launch?",
      answer: "Yes, you may bring one guest with you. Please ensure that both names are included during registration as seats are limited."
   },
   {
      question: "How do I register for the event?",
      answer: "Simply visit our official website and click the \"Register\" button at the top of the page. You’ll receive a confirmation email within minutes."
   },
   {
      question: "Is parking available at the event venue?",
      answer: "Yes, most venues have dedicated parking areas for attendees. You’ll receive parking details in your confirmation email."
   }
];

export default function Faq() {

   return (
      <section className="mt-6 px-4 md:px-8">
         <div className="max-w-4xl mx-auto">
            <div className="max-w-3xl mb-12 md:mb-16">
               <h2 className="text-slate-900 text-3xl font-bold md:text-4xl dark:text-slate-50">
                  Frequently Asked Questions
               </h2>
            </div>

            <div className="space-y-10">
               {faqs.map((faq, index) => (
                  <div key={index} className="flex items-start">
                     <div className="flex-shrink-0">
                        <svg
                           className="size-6 text-green-600"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"
                           aria-hidden="true"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                     </div>
                     <div className="ml-4">
                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                           {faq.question}
                        </h3>
                        <p className="text-base text-slate-600 mt-4 leading-relaxed dark:text-slate-400">
                           {faq.answer}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}