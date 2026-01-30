import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Hero() {
    const [people, setPeople] = useState(10);
    const marks = [5, 10, 15, 20, 25, 30];
    const prices = {
        5: 125,
        10: 250,
        15: 375,
        20: 500,
        25: 625,
        30: 750,
    };
    const [location, setLocation] = useState("Chicago, IL"); 

    const handleChange = (e) => {
        setLocation(e.target.value);
    };
    return (
        <div className='relative -mt-186 text-white bg-black mb-50'>
            <div className="relative">
                <img src="/images/pages/banner_2_bg_gd.webp" alt="" className='w-full h-96 object-cover' />
            </div>
            <div className="px-30">
                <div className="absolute -mt-60">
                    <p className='text-[12px] font-bold'>Home<i class="fa-solid fa-angle-right"></i> Game Server <i class="fa-solid fa-angle-right"></i>ARK Survival Evolved ( PS4)</p>
                    <h4 className='mt-4 text-5xl font-bold'>ARK: Survival Evolved (PS4)</h4>
                    <p className='mt-6 text-neutral-300 max-w-xl'>Lag free, always up-to-date versions & modpacks. Enjoy a 24/7 support team that responds in MINUTES - not hours or days.</p>
                    <div className="mt-6 items-center font-semibold"><Link to="/">Official Website <i className='fa-solid fa-arrow-right'></i></Link></div>
                </div>
            </div>
            <div className="absolute bg-dark">
                <div className="px-30 flex justify-between gap-30">
                    <div>
                        <div className=" flex items-center justify-between border-x border-b pt-1 px-3 pb-3 bg-cyan-400/20 rounded-b-md  border-cyan-500 max-w-[83ch] h-15">
                            <i className="fa-solid fa-circle-exclamation text-cyan-400 mr-2 text-xl"></i>
                            <p className="text-sm font-semibold">Only compatible with the Steam & Epic versions of ARK. Genesis 2 and Lost Island maps require 16 GB RAM.</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-xl font-bold">Player Slots</p>
                        </div>
                        <div className="mt-5">
                            <div className="relative mb-3">
                                <input type="range" id="storage-slider" min="5" max="30" step="5" value={people} onChange={(e) => setPeople(Number(e.target.value))} className='"w-full accent-purple-500'></input>
                                <div className="flex justify-between mt-2 text-neutral-300">
                                    {marks.map((mark) => (
                                        <span key={mark} className={`cursor-pointer ${people === mark ? "text-white font-bold" : ""}`} onClick={() => setPeople(mark)} >{mark} </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <p>You've selected {people} players slots!</p>
                        </div>
                    </div>
                    <div className="text-center backdrop-blur-md border border-neutral-700 bg-gradient-to-b to-neutral-900/80 via-neutral-900/70 from-neutral-700/40 shadow-lg p-8 -mt-44 rounded-2xl w-70">
                        <p className='-mt-1 text-indigo-500 font-bold'>Pricing</p>
                        <h1 className='mt-5 text-neutral-300 text-lg'>$<span className='text-white font-bold text-4xl'>{prices[people]}</span>/month</h1>
                        <div className="mt-6 space-y-3 text-sm text-white/80">
                            <p><span className="font-semibold">{people}</span> Player Slots</p>
                            <p>Unlimited <span className="font-semibold">Storage & Mods</span></p>
                            <p><span className="font-semibold">Anti-DDoS</span> Protection</p>
                        </div>
                        <div className="mt-6">
                            <div className="flex items-center justify-center gap-1 border border-neutral-500 rounded-full -mx-4 py-2 bg-black/20 w-60">
                                <img src="/images/pages/loc_flg_1.webp" alt="US Flag" className="rounded-full" />
                                <select  value={location} onChange={handleChange} className="bg-dark text-white outline-none cursor-pointer w-43">
                                    <option className="bg-neutral-900" value="Chicago, IL">Chicago, IL</option>
                                    <option className="bg-neutral-900" value="USA">USA</option>
                                    <option className="bg-neutral-900" value="UAE">UAE</option>
                                </select>
                            </div>
                        </div>
                        <div className="group inline-block mt-8">
                            <button className="relative overflow-hidden bg-gradient-to-l from-purple-500  via-pink-400 to-orange-400 rounded-full px-8 py-2 text-white font-semibol w-54">
                                <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10">  {location}</span>
                                <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-8">  {location}</span></a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
