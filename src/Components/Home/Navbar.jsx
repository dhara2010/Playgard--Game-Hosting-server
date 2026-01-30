import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-200 bg-fixed bg-center bg-cover bg-black" style={{ backgroundImage: "url('./images/hero_bg_3.webp')" }} >
      <header className={`fixed w-full top-13 z-50 transition-all duration-300 ${ isScrolled  ? "bg-white text-black shadow-md h-20": "bg-transparent text-white" }`} >
        <div className="mt-5 relative">
          <div className="mx-30">
            <div className="flex justify-between items-center">
              <div className="flex gap-16 items-center">
                <Link to="/" > <img src={isScrolled ? "./images/logo3.webp" : "./images/logo2.webp"} alt="logo" className="h-11 transition-all duration-300" /></Link>
                <ul className="flex gap-8 items-center font-bold">
                  <li className="relative group cursor-pointer">
                    <div className="flex items-center gap-1 hover:text-red-400">
                      <span className="mr-2">Home</span>
                      <span className="text-xs">
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                    </div>
                    <ul className="absolute -left-10 top-full mt-2 bg-white text-neutral-900 rounded shadow-lg w-56 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <li className="px-4 py-2 text-[14px] font-medium hover:text-red-400"><Link to='/' > Game Server</Link> </li>
                      <li className="px-4 py-2 text-[14px] font-medium hover:text-red-400"><Link to='/gamehosting' > Game Hosting </Link></li>
                      <li className="px-4 py-2 text-[14px] font-medium hover:text-red-400"><Link to='/gameserverhq'>Game Server HQ</Link></li>
                    </ul>
                  </li>
                  <li className="relative group cursor-pointer">
                    <div className="flex items-center gap-1 hover:text-red-400">
                      <span className="mr-2"><Link to='/pages'>Pages</Link></span>
                      <span className="text-xs"> <i className="fa-solid fa-angle-down"></i> </span>
                    </div>
                    <ul className="absolute -left-10 top-full mt-2 bg-white text-neutral-900 rounded shadow-lg w-56 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <li className="px-4 py-1.5 text-[14px] font-medium hover:text-red-400"><Link to='/GameHosting' >Game Hosting </Link> </li>
                      <li className="px-4 py-1.5 text-[14px] font-medium hover:text-red-400"><Link to='/gamedetails' > Game Details</Link> </li>
                      <li className="px-4 py-1.5 text-[14px] font-medium hover:text-red-400"><Link to='/gamedetails2' > Game Details-2</Link> </li>
                      <li className="px-4 py-1.5 text-[14px] font-medium hover:text-red-400"><Link to='/about' > About Us </Link></li>
                      <li className="px-4 py-1.5 text-[14px] font-medium hover:text-red-400"><Link to='/minecraftserver' > Minecraft-server</Link> </li>
                      <li className="px-4 py-1.5 text-[14px] font-medium hover:text-red-400"><Link to='/dadicatedserver' >Dadicated-server</Link></li>
                      <li className="px-4 py-1.5 text-[14px] font-medium hover:text-red-400"><Link to='/location' >Location</Link></li>
                      <li className="px-4 py-1.5 text-[14px] font-medium hover:text-red-400"><Link to='/support' > Support </Link></li>
                    </ul>
                  </li>
                  <li className="relative group cursor-pointer">
                    <div className="flex items-center gap-1 hover:text-red-400">
                      <span className="mr-2">Blogs</span>
                      <span className="text-xs"> <i className="fa-solid fa-angle-down"></i> </span>
                    </div>
                    <ul className="absolute -left-10 top-full mt-2 bg-white text-neutral-900 rounded shadow-lg w-56 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <li className="px-4 py-2 text-[14px] font-medium hover:text-red-400"><Link to="/bloglist" >Blog List</Link> </li>
                      <li className="px-4 py-2 text-[14px] font-medium hover:text-red-400"><Link to="/blogdetails" > Blog Details</Link></li>
                    </ul>
                  </li>
                  <li className="hover:text-red-400 cursor-pointer">
                    <Link to="/contact" >Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="flex gap-5">
                <button>
                  <a href="https://preview.themeforest.net/item/playgard-game-hosting-server-website-react-template/full_screen_preview/56606388" target="_blank" rel="noopener noreferrer" className="font-bold" >Sign up </a>
                </button>
                <div className="group inline-block">
                  <button className="relative overflow-hidden bg-black rounded-full px-5 py-2.5 text-white font-semibold hover:bg-neutral-800">
                    <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10"> Get Started </span>
                    <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-8"> Get Started </span></a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
