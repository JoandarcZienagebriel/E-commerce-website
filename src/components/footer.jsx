export default function Footer(){
    return(
        <footer className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

<div>
  <h3 className="text-xl tracking-[0.2em] mb-4">
    SWEATERERIA
  </h3>

  <p className="text-[#6E6A63] leading-7">
    Timeless knitwear designed for comfort,
    elegance, and modern winter living.
  </p>
</div>

<div>
  <h4 className="mb-5 text-lg">Shop</h4>

  <ul className="space-y-3 text-[#6E6A63]">
    <li>New Arrivals</li>
    <li>Best Sellers</li>
    <li>Winter Collection</li>
  </ul>
</div>

<div>
  <h4 className="mb-5 text-lg">Support</h4>

  <ul className="space-y-3 text-[#6E6A63]">
    <li>Shipping</li>
    <li>Returns</li>
    <li>Contact</li>
  </ul>
</div>

<div>
  <h4 className="mb-5 text-lg">Social</h4>

  <ul className="space-y-3 text-[#6E6A63]">
    <li>Instagram</li>
    <li>Pinterest</li>
    <li>Facebook</li>
  </ul>
</div>
        </div>

        <div className="border-t border-[#E7E1D8] mt-16 pt-8 text-center text-[#6E6A63] text-sm">
© 2026 Sweatereria. All rights reserved.
        </div>
      </footer>
    )
}