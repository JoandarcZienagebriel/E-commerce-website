export default function About(){
    return(
        <div className="bg-[#F8F5F1] py-24 px-6 lg:px-10">
  
  <div className="max-w-5xl mx-auto">

    {/* SMALL LABEL */}
    <p className="uppercase tracking-[0.45em] text-xs md:text-sm text-[#8C6A5D] mb-5">
      Our Story
    </p>

    {/* TITLE */}
    <h1
      id="header"
      className="text-4xl sm:text-5xl md:text-6xl font-light text-[#2A2522] leading-tight"
    >
      About us
    </h1>

    {/* LINE */}
    <div className="w-24 h-[1px] bg-[#CDBEAF] mt-8 mb-10"></div>

    {/* CONTENT */}
    <p
      id="about_us"
      className="text-[#6E6A63] text-lg md:text-xl leading-[2rem] md:leading-[2.4rem] max-w-3xl"
    >
      Our sweater shop
     
      
      <em className="text-[#2A2522] font-medium"> gattolina</em>,
      for generations has remained faithful to its clients,
        focusing on timeless quality, comfort, and carefully crafted pieces.
        Customer satisfaction has always been our priority, alongside fast
        and reliable service tailored to every order.
    </p>

    {/* OPTIONAL STATS */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">

      <div className="bg-white/70 backdrop-blur rounded-[1.8rem] p-6 border border-[#E7E1D8]">
        <h3 className="text-3xl font-light text-[#2A2522]">24h</h3>
        <p className="text-[#6E6A63] mt-2 text-sm uppercase tracking-wider">
          Fast Delivery
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur rounded-[1.8rem] p-6 border border-[#E7E1D8]">
        <h3 className="text-3xl font-light text-[#2A2522]">Premium</h3>
        <p className="text-[#6E6A63] mt-2 text-sm uppercase tracking-wider">
          Wool Quality
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur rounded-[1.8rem] p-6 border border-[#E7E1D8] col-span-2 md:col-span-1">
        <h3 className="text-3xl font-light text-[#2A2522]">100%</h3>
        <p className="text-[#6E6A63] mt-2 text-sm uppercase tracking-wider">
          Handmade Feel
        </p>
      </div>

    </div>
  </div>
</div>
    )
}