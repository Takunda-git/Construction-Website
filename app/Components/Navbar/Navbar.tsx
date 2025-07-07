"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" text-white px-6 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

      
        <div className="bg-gradient-to-b from-white to-yellow-400 bg-clip-text text-transparent">
          <Link href="/" className="font-bold text-2xl bg-gradient-to-b from-white to-yellow-400 bg-clip-text text-transparent">
          CONS<span className="bg-gradient-to-b from-white to-yellow-400 text-black">TRUC</span>TION
          </Link></div>

      
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li className="text-amber-300"><Link href="/">Home</Link></li>
          <li className="hover:text-amber-300"><Link href="/">Services</Link></li>
          <li className="hover:text-amber-300"><Link href="/">About</Link></li>
          <li className="hover:text-amber-300"><Link href="/">Projects</Link></li>
          <li className="hover:text-amber-300"><Link href="/">Contact</Link></li>
          <li className="hover:text-amber-300"><Link href="/">+ (870) 263 7043</Link></li>
        </ul>

    
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={30} className="hover:text-amber-400"/> : <HiMenuAlt3 size={30} className="hover:text-amber-400" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-white font-medium ">
          <li className="hover:text-amber-300" ><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li className= "hover:text-amber-300" ><Link href="/" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li className="hover:text-amber-300" ><Link href="/" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li className="hover:text-amber-300" ><Link href="/" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li className="hover:text-amber-300" ><Link href="/" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li className="hover:text-amber-300" ><Link href="/" onClick={() => setMenuOpen(false)}>+ (870) 263 7043</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;