import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const toggleSubmenu = (menu) => {
    setOpenSub(openSub === menu ? null : menu);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-200 bg-fixed bg-center bg-cover bg-black" style={{ backgroundImage: "url('/images/hero_bg_3.webp')" }} >
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white text-black shadow-md h-20" : "bg-transparent text-white"}`} >
        <div className="mt-5 relative">
          <div className="px-6 lg:px-30">
            <div className="flex justify-between items-center">
              <Link to="/" > <img src={isScrolled ? "/images/logo3.webp" : "/images/logo2.webp"} alt="logo" className="lg:h-11 transition-all duration-300" /></Link>
              <ul className="hidden lg:flex gap-8 items-center font-bold">
                <li className="hover:text-red-400 cursor-pointer">
                  <Link to="/" >Home</Link>
                </li>
                <li className="relative group cursor-pointer">
                  <div className="flex items-center gap-1 hover:text-red-400">
                    <span className="mr-2">Game Server</span>
                    <span className="text-xs">
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                  <ul className="absolute -left-10 top-full mt-2 bg-white text-neutral-900 rounded shadow-lg w-56 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <li className="px-4 py-2 text-[14px] font-medium hover:text-red-400"><Link to='/gamehosting' >Game Hosting</Link></li>
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
                    <li className="px-4 py-2 text-[14px] font-medium hover:text-red-400"><Link to="/blogs" >Blogs</Link> </li>
                    <li className="px-4 py-2 text-[14px] font-medium hover:text-red-400"><Link to="/bloglist" >Blog List</Link> </li>
                    <li className="px-4 py-2 text-[14px] font-medium hover:text-red-400"><Link to="/blogdetails" > Blog Details</Link></li>
                  </ul>
                </li>

                <li className="hover:text-red-400 cursor-pointer">
                  <Link to="/contact" >Contact</Link>
                </li>
                <li className="hover:text-red-400 cursor-pointer">
                  <Link to="/about" >About</Link>
                </li>
              </ul>
              <div className="hidden lg:flex gap-5">
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
              <div className="lg:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                  <i
                    className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"
                      } text-2xl`}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-white text-black px-6 py-4 space-y-4 font-bold shadow-md">
            <Link to="/" onClick={() => setMenuOpen(false)} className="block">Home </Link>
            <div>
              <div onClick={() => toggleSubmenu("server")} className="flex justify-between items-center cursor-pointer" >
                <span>Game Server</span>
                <i className={`fa-solid ${openSub === "server" ? "fa-angle-up" : "fa-angle-down"}`}></i>
              </div>
              {openSub === "server" && (
                <div className="pl-4 mt-2 space-y-2 text-sm font-medium">
                  <Link to="/gamehosting" onClick={() => setMenuOpen(false)} className="block">Game Hosting</Link>
                  <Link to="/gameserverhq" onClick={() => setMenuOpen(false)} className="block">Game Server HQ</Link>
                </div>
              )}
            </div>
            <div>
              <div onClick={() => toggleSubmenu("pages")} className="flex justify-between items-center cursor-pointer" >
                <span>Pages</span>
                <i className={`fa-solid ${openSub === "pages" ? "fa-angle-up" : "fa-angle-down"}`}></i>
              </div>
              {openSub === "pages" && (
                <div className="pl-4 mt-2 space-y-2 text-sm font-medium">
                  <Link to="/GameHosting" onClick={() => setMenuOpen(false)} className="block">Game Hosting</Link>
                  <Link to="/gamedetails" onClick={() => setMenuOpen(false)} className="block">Game Details</Link>
                  <Link to="/gamedetails2" onClick={() => setMenuOpen(false)} className="block">Game Details-2</Link>
                  <Link to="/about" onClick={() => setMenuOpen(false)} className="block">About Us</Link>
                  <Link to="/minecraftserver" onClick={() => setMenuOpen(false)} className="block">Minecraft-server</Link>
                  <Link to="/dadicatedserver" onClick={() => setMenuOpen(false)} className="block">Dadicated-server</Link>
                  <Link to="/location" onClick={() => setMenuOpen(false)} className="block">Location</Link>
                  <Link to="/support" onClick={() => setMenuOpen(false)} className="block">Support</Link>
                </div>
              )}
            </div>
            <div>
              <div onClick={() => toggleSubmenu("blogs")} className="flex justify-between items-center cursor-pointer" >
                <span>Blogs</span>
                <i className={`fa-solid ${openSub === "blogs" ? "fa-angle-up" : "fa-angle-down"}`}></i>
              </div>
              {openSub === "blogs" && (
                <div className="pl-4 mt-2 space-y-2 text-sm font-medium">
                  <Link to="/blogs" onClick={() => setMenuOpen(false)} className="block">Blogs</Link>
                  <Link to="/bloglist" onClick={() => setMenuOpen(false)} className="block">Blog List</Link>
                  <Link to="/blogdetails" onClick={() => setMenuOpen(false)} className="block">Blog Details</Link>
                </div>
              )}
            </div>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="block">Contact </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="block">About </Link>
            <hr />
            <a href="https://preview.themeforest.net/item/playgard-game-hosting-server-website-react-template/full_screen_preview/56606388" target="_blank" rel="noopener noreferrer" className="block" > Sign up </a>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="block bg-black text-white text-center py-2 rounded-full" > Get Started </Link>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;
