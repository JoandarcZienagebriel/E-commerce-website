import pink from '../assets/img/pink.avif';
import white from '../assets/img/white.avif';
import brown from '../assets/img/brown.avif';
import blue from '../assets/img/blue.avif';
import camicia from '../assets/img/camicia.avif';
import vneck from '../assets/img/V.avif';
import storm from '../assets/img/Storm.avif';
export default function Home(){
    return(
        <main className="bg-[#FAF7F2] text-[#1C1C1C] min-h-screen">
         {/* HERO SECTION */}
<section className="relative min-h-screen overflow-hidden bg-[#FAF7F2]">

  {/* BACKGROUND IMAGES */}
  <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

    {/* IMAGE 1 - always visible */}
    <div className="relative">
      <img
        src={vneck}
        alt="Sweater with a shirt collar"
        className="h-full w-full object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>

    {/* IMAGE 2 - visible >= md */}
    <div className="relative hidden md:block">
      <img
        src={brown}
        alt="Brown sweater"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30"></div>
    </div>

    {/* IMAGE 3 - visible >= lg */}
    <div className="relative hidden lg:block">
      <img
        src={pink}
        alt="Sweater make of pink and yellow squares"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
    
    <div className="text-center max-w-4xl">
      
      <p className="uppercase tracking-[0.45em] text-sm text-[#E7E1D8] mb-6">
        Winter Collection 2026
      </p>

      <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-light leading-tight">
        Modern sweaters for a softer winter.
      </h1>

      <p className="mt-8 text-[#F5F1EB] text-lg md:text-xl leading-8 max-w-2xl mx-auto">
        Crafted with premium textures, timeless silhouettes,
        and a minimalist luxury aesthetic inspired by modern
        fashion editorials.
      </p>

      {/* BUTTONS */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
        
        <button className="bg-[#8C6A5D] hover:bg-[#75584D] transition-all duration-300 text-white px-10 py-4 rounded-full tracking-[0.2em] text-sm shadow-xl">
SHOP NOW
        </button>

        <button className="border border-white/40 hover:bg-white hover:text-[#1C1C1C] transition-all duration-300 text-white px-10 py-4 rounded-full tracking-[0.2em] text-sm backdrop-blur-sm">
EXPLORE COLLECTION
        </button>
      </div>
    </div>
  </div>

  {/* BOTTOM FADE */}
  <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#FAF7F2] to-transparent"></div>
</section>

      {/* BEST SELLERS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        
        <div className="flex items-end justify-between mb-14">
<div>
  <p className="uppercase tracking-[0.4em] text-sm text-[#8C6A5D] mb-3">
    Best Sellers
  </p>

  <h2 className="text-4xl md:text-5xl font-light">
    Customer favorites
  </h2>
</div>

<button className="hidden md:block border border-[#E7E1D8] px-6 py-3 rounded-full hover:bg-[#8C6A5D] hover:text-white hover:border-[#8C6A5D] transition">
  View All
</button>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

{/* PRODUCT CARD */}
{[
  {
    name: "Ashy Sweater",
    img: white,
    price: "$120",
  },
  {
    name: 'X-Mas Sweater',
    img: blue,
    price: "$140",
  },
  {
    name: "Nordic Sweater",
    img: camicia,
    price: "$160",
  },
  {
    name: "Butterfly Sweater",
    img: storm,
    price: "$135",
  },
].map((item, index) => (
  <div
    key={index}
    className="group">
    
    <div className="relative overflow-hidden rounded-[2rem] bg-white">
      
      {/* SALE BADGE */}
      <span className="absolute top-5 left-5 bg-[#C46A5A] text-white text-xs px-4 py-2 rounded-full tracking-widest z-10">
        SALE
      </span>

      <img
        src={item.img}
        alt={item.name}
        className="h-[420px] w-full object-cover group-hover:scale-105 transition duration-700"
      />
    </div>

    <div className="mt-5 flex items-center justify-between">
      <div>
        <h3 className="text-xl font-medium">
{item.name}
        </h3>

        <p className="text-[#6E6A63] mt-1">
Premium wool blend
        </p>
      </div>

      <p className="text-lg text-[#8C6A5D] font-medium">
        {item.price}
      </p>
    </div>
  </div>
))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#FFFFFF] border-y border-[#E7E1D8]">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">

<p className="uppercase tracking-[0.4em] text-sm text-[#8C6A5D] mb-4">
  Stay Warm
</p>

<h2 className="text-4xl md:text-5xl font-light leading-tight">
  Receive updates on new arrivals and exclusive collections.
</h2>

<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
  
  <input
    type="email"
    placeholder="Enter your email"
    className="bg-[#FAF7F2] border border-[#E7E1D8] px-6 py-4 rounded-full outline-none w-full sm:w-[400px]"
  />

  <button className="bg-[#8C6A5D] hover:bg-[#75584D] transition text-white px-8 py-4 rounded-full tracking-widest text-sm">
    SUBSCRIBE
  </button>
</div>
        </div>
      </section>
         </main>
    )
}