const products = [
   {
      id: 1,
      name: "Crimson Grace Gown",
      subtitle: "Flowy and elegant red dress",
      price: "$10",
      originalPrice: "$15",
      rating: 4,
      image: "https://readymadeui.com/images/fashion-img-1.webp",
      alt: "fashion product 1",
   },
   {
      id: 2,
      name: "Emerald Empress Gown",
      subtitle: "Regal, cape-style green outfit",
      price: "$12",
      originalPrice: "$15",
      rating: 4,
      image: "https://readymadeui.com/images/fashion-img-2.webp",
      alt: "Product 2",
   },
   {
      id: 3,
      name: "Urban Edge Tee",
      subtitle: "Sleek black leather and white tee combo",
      price: "$14",
      originalPrice: "$15",
      rating: 4,
      image: "https://readymadeui.com/images/fashion-img-3.webp",
      alt: "Product 3",
   },
   {
      id: 4,
      name: "Street Luxe Knit Set",
      subtitle: "Casual streetwear with a stylish knit top",
      price: "$12",
      originalPrice: "$15",
      rating: 4,
      image: "https://readymadeui.com/images/fashion-img-4.webp",
      alt: "Product 3",
   },
   {
      id: 5,
      name: "Bold Stroll Coat Set",
      subtitle: "Statement black coat with red print trousers",
      price: "$15",
      originalPrice: "$15",
      rating: 4,
      image: "https://readymadeui.com/images/fashion-img-5.webp",
      alt: "Product 3",
   },
   {
      id: 6,
      name: "Floral Blush Midi Dress",
      subtitle: "Soft, romantic floral dress",
      price: "$14",
      originalPrice: "$15",
      rating: 4,
      image: "https://readymadeui.com/images/fashion-img-6.webp",
      alt: "Product 3",
   },
   {
      id: 7,
      name: "Chic Contrast Blazer Fit",
      subtitle: "Trendy blazer and denim street style",
      price: "$14",
      originalPrice: "$15",
      rating: 4,
      image: "https://readymadeui.com/images/fashion-img-7.webp",
      alt: "Product 3",
   },
   {
      id: 8,
      name: "Effortless Café Casuals",
      subtitle: "Relaxed tank top and jeans outfit",
      price: "$14",
      originalPrice: "$15",
      rating: 4,
      image: "https://readymadeui.com/images/fashion-img-9.webp",
      alt: "Product 3",
   },
];


function StarRating({ rating, max = 5 }) {
   return (
      <div
         className="flex justify-center gap-2"
         role="img"
         aria-label={`Rated ${rating} out of ${max} stars`}
      >
         {Array.from({ length: max }, (_, i) => (
            <svg
               key={i}
               xmlns="http://www.w3.org/2000/svg"
               className={`size-3.5 ${(i < rating) ? "fill-[#ffc107]" : "fill-[#CED5D8] dark:fill-neutral-600"}`}
               viewBox="0 0 24 24"
               aria-hidden="true"
            >
               <path d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z" data-original="#ffc107" />
            </svg>
         ))}
      </div>
   );
}

function WishlistButton() {
   return (
      <button
         type="button"
         aria-label="Add to wishlist"
         className="border border-slate-300 hover:bg-gray-50 w-12 h-9 flex items-center justify-center rounded-md cursor-pointer dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
         title="Wishlist"
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 fill-pink-700 dark:fill-slate-50"
            viewBox="0 0 64 64"
            aria-hidden="true"
         >
            <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
         </svg>
      </button>
   );
}

function ProductCard({ product }) {
   return (
      <li className="flex flex-col hover:shadow-md transition-all">
         <div className="w-full bg-gray-50">
            <a href="#" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
               <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full object-cover object-top aspect-[230/307]"
               />
            </a>
         </div>

         <div className="p-2 flex-1 flex flex-col">
            <div className="flex-1">
               <div className="w-full">
                  <h3 className="text-base font-semibold text-slate-900 truncate dark:text-slate-50">
                     {product.name}
                  </h3>
                  <p className="text-sm mt-1 text-slate-600 truncate dark:text-slate-400">
                     {product.subtitle}
                  </p>
               </div>

               <div className="flex items-center flex-wrap justify-between gap-2 mt-3">
                  <div className="flex gap-2">
                     <p className="text-base font-bold text-slate-900 dark:text-slate-50">
                        {product.price}
                     </p>
                     <p className="text-base text-slate-600 dark:text-slate-400">
                        <strike>{product.originalPrice}</strike>
                     </p>
                  </div>
                  <StarRating rating={product.rating} />
               </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
               <button
                  type="button"
                  className="w-full cursor-pointer text-sm px-3.5 py-2 font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white border border-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
               >
                  Add to cart
               </button>
               <WishlistButton />
            </div>
         </div>
      </li>
   );
}

export default function FeatureProducts() {
   return (
      <section className="mt-6 px-4 md:px-8" aria-label="products">
         <div className="max-w-7xl mx-auto">
            {/* Featured Products title */}
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Featured Products</h2>

            {/* Product grid */}
            <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
               {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
               ))}
            </ul>
         </div>
      </section>
   );
}