export default function Contact() {
  return (
      <section className="min-h-screen bg-[#FAF7F2] text-[#2A2A2A] px-6 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

        {/* LEFT SIDE */}
        <div className="space-y-10">
          <div>
            <p className="text-sm tracking-[0.3em] text-[#6E6A63] uppercase">
              Contact
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
              Let’s make life cosier.
            </h1>

            <p className="mt-6 text-[#6E6A63] leading-relaxed max-w-md">
              Questions about orders, sizing, shipping,
              or future sweater drops? Reach out and
              our team will get back to you shortly.
            </p>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-8">

            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase text-[#6E6A63] mb-2">
                Email
              </h3>

              <p className="text-lg">
                support@sweatereria.com
              </p>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase text-[#6E6A63] mb-2">
                Instagram
              </h3>

              <p className="text-lg">
                @sweatereria
              </p>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase text-[#6E6A63] mb-2">
                Location
              </h3>

              <p className="text-lg">
                Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white border border-[#E7E1D8] rounded-3xl p-8 md:p-10 shadow-sm">

          <form className="space-y-6">

            <div>
              <label className="block mb-2 text-sm text-[#6E6A63] tracking-wide">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E7E1D8]
                rounded-xl outline-none focus:border-[#8C6A5D]
                transition-all duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-[#6E6A63] tracking-wide">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E7E1D8]
                rounded-xl outline-none focus:border-[#8C6A5D]
                transition-all duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-[#6E6A63] tracking-wide">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E7E1D8]
                rounded-xl outline-none resize-none
                focus:border-[#8C6A5D]
                transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#8C6A5D] text-white py-4 rounded-xl
              tracking-[0.15em] uppercase text-sm
              hover:bg-[#735548] transition-all duration-300"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
   