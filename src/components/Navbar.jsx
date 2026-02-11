import React, { use } from 'react'
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);
    
  return (
        <div className="navbar py-7 flex items-center justify-between">  
           <div
  className={`
    transition-all duration-300
    ${active ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"}
  `}
>
  <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white rounded">
    Portfolio
  </h1>
</div>
            <ul className={`menu flex items-center sm:gap-10 gap-4  md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl sm-2 rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-50 ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}> 
                <li>
                    <a href="#beranda" className="sm:text-lg text-base font-medium hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-700 rounded-3xl p-4 ">Beranda</a>
                </li> 
                <li>
                    <a href="#tentang" className="sm:text-lg text-base font-medium hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-700 rounded-3xl p-4">Tentang</a>
                </li> 
                <li>
                    <a href="#proyek" className="sm:text-lg  text-base font-medium hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-700 rounded-3xl p-4">Project</a>
                </li> 
                <li>
                    <a href="#kontak" className="sm:text-lg text-base font-medium hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-700 rounded-3xl p-4">Kontak</a>
                </li> 
            </ul>
        </div>
  )
}

export default Navbar;