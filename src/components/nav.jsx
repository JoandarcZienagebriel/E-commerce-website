import {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Nav(){
    const [menuOpen, setMenuOpen] = useState(false); 
    return(
         <header className="border-b border-[#E7E1D8] bg-[#FAF7F2]/90 backdrop-blur-md sticky top-0 z-50">

  <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">

    {/* LOGO */}
    <div className="shrink-0">
      <h1 className="text-lg sm:text-2xl font-semibold tracking-[0.15em] sm:tracking-[0.2em]">
        SWEATERERIA
      </h1>

      <p className="text-[10px] sm:text-sm text-[#6E6A63] tracking-[0.2em] sm:tracking-[0.25em] mt-1">
        MAKE LIFE COSIER
      </p>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex items-center gap-2 sm:gap-3 lg:gap-8">

      {/* NAV ITEMS */}
      <ul
        className={`absolute top-full left-0 w-full bg-[#FAF7F2] flex flex-col items-center gap-6 text-sm tracking-[0.2em]border-t
        border-[#E7E1D8] overflow-hidden transition-all duration-300 lg:static lg:w-auto lg:flex-row lg:bg-transparent lg:border-0
          lg:overflow-visible lg:max-h-full lg:py-0
${
  menuOpen
    ? "max-h-96 py-6"
    : "max-h-0 py-0"
}
        `}
      >

        <li>
<Link to='/' className="hover:text-[#8C6A5D] visited:text-[#6E6A63] transition duration-300">HOME</Link>
        </li>

        <li>
<Link to='/sweaters' className="hover:text-[#8C6A5D] visited:text-[#6E6A63] transition duration-300"> SWEATERS </Link>
        </li>

        <li>
<Link to="/about" className="hover:text-[#8C6A5D] visited:text-[#6E6A63] transition duration-300"> ABOUT </Link>
        </li>

        <li>
<Link to="/contact" className="hover:text-[#8C6A5D] visited:text-[#6E6A63] transition duration-300"> CONTACT </Link>
        </li>
      </ul>

      {/* SEARCH */}
      <button
        className="hidden sm:flex items-center justify-center p-2 rounded-full border border-[#E7E1D8]
        hover:bg-[#8C6A5D] hover:text-white transition-all duration-300">
       🔎︎
      </button>

      {/* CART */}
      <button
        className="relative flex items-center justify-center p-2 rounded-full border border-[#E7E1D8]
                   hover:bg-[#8C6A5D] hover:text-white transition-all duration-300">

        🛒
        {/* BADGE */}
        <span
className="absolute-top-1-right-1 bg-[#C46A5A] text-white text-[8px] w-4 h-4 rounded-full
           flex items-center justify-center">
2
        </span>
      </button>

      {/* HAMBURGER */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden flex items-center justify-center p-2 rounded-full border border-[#E7E1D8] hover:bg-[#8C6A5D]
                    hover:text-white transition-all duration-300"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </div>
  </nav>
</header>
    )
}