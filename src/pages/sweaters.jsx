
export default function Sweater({products, addToCart}) {

  return (
    <section className="bg-[#F8F5F1] min-h-screen">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">

          <div className="max-w-xl">
            <p className="uppercase tracking-[0.45em] text-xs md:text-sm text-[#8C6A5D] mb-4">
              Best Sellers
            </p>

            <h2 className="text-4xl md:text-6xl font-light text-[#2A2522] leading-tight">
              Customer favorites
            </h2>

            <p className="text-[#6E6A63] mt-5 text-lg leading-relaxed">
              Elevated essentials crafted with timeless silhouettes,
              soft textures, and modern comfort.
            </p>
          </div>

          <button className="hidden md:flex items-center gap-3 border border-[#D9D0C5] bg-white/70 backdrop-blur px-7 py-3 rounded-full text-[#2A2522] hover:bg-[#8C6A5D] hover:text-white hover:border-[#8C6A5D] transition-all duration-300 shadow-sm hover:shadow-lg">
            View All
          </button>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((item, index) => (
            <div
              key={index}
              className="group"
            >

              {/* CARD */}
              <div className="relative overflow-hidden rounded-[2.2rem] bg-[#EFE8DF] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500">

                {/* TOP BAR */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20">

                 

                  <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-[#8C6A5D] opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-[#8C6A5D] hover:text-white">
                    ♥
                  </button>
                </div>

                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-[420px] w-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                  />
                </div>

                {/* QUICK ADD */}
                <div className="absolute bottom-5 left-5 right-5 translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button onClick={()=>addToCart(item)} className="w-full bg-[#2A2522] text-white py-4 rounded-full hover:bg-[#8C6A5D] transition tracking-wide text-sm">
                  Add
                  </button>
                </div>
              </div>

              {/* INFO */}
              <div className="pt-6 px-1">

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <h3 className="text-lg md:text-xl font-medium text-[#2A2522] capitalize leading-snug group-hover:text-[#8C6A5D] transition">
                      {item.name}
                    </h3>

                    <p className="text-[#6E6A63] mt-2 text-sm">
                      Premium wool blend
                    </p>

                    {/* COLOR DOTS */}
                    <div className="flex items-center gap-2 mt-4">
                      <span className="w-4 h-4 rounded-full bg-[#D8C2B0] border border-white shadow-sm"></span>
                      <span className="w-4 h-4 rounded-full bg-[#B87D6B] border border-white shadow-sm"></span>
                      <span className="w-4 h-4 rounded-full bg-[#EFE7DA] border border-white shadow-sm"></span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xl font-semibold text-[#8C6A5D]">
                      ${item.price}
                    </p>

                    <p className="text-sm text-[#A29B93] line-through mt-1">
                      $450
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}