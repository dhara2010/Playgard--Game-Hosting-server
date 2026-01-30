import React, { useState, useEffect } from 'react'
import Card from './Card'

const slides = [
    { img: "./images/pages/hero_1_slider_1.webp" },
    { img: "./images/pages/hero_1_slider_2.webp" },
    { img: "./images/pages/hero_1_slider_3.webp" },
    { img: "./images/pages/hero_1_slider_1.webp" },
];
function Hero() {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='-mt-190 text-white gradient'>
            <div className="px-30 pt-60">
                <div className="flex flex-between">
                    <div>
                        <div className="bg-neutral-800 border border-neutral-700 px-3 py-2 rounded-full flex justify-center items-center w-70">
                            <span className="material-icons mr-2" style={{ fontSize: "18px" }}>grid_view</span>Reliable & Affordable Servers
                        </div>
                        <h1 className="font-bold text-6xl max-w-xl mt-3 leading-tight">An Open-World Gaming Server Hosting</h1>
                        <p className='mt-4 font-semibold text-[20px]'>Servers Starting from <span className='text-red-400'>$25.00/month</span></p>
                        <div className="group inline-block mt-8">
                            <button className="relative overflow-hidden bg-gradient-to-r from-red-500  via-pink-400 to-purple-400 rounded-full px-6 py-4 text-white font-semibol">
                                <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10">View All Plans <i className="fa-solid fa-arrow-right"></i> </span>
                                <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-10">View All Plans <i className="fa-solid fa-arrow-right"></i></span></a>
                            </button>
                        </div>
                        <div className="flex items-center justify-between w-full mt-8 max-w-md">
                            <div>
                                <div className="flex -space-x-4">
                                    <img src="./images/pages/avater-group-1.webp" alt="" />
                                    <img src="./images/pages/avater-group-2.webp" alt="" />
                                    <img src="./images/pages/avater-group-3.webp" alt="" />
                                </div>
                                <p className='mt-2 font-semibold'>Trusted by Over 2500+ User</p>
                            </div>
                            <div>
                                <img src="./images/pages/hero_1_shape.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-134 -mt-20">
                        <div className="relative w-full h-[750px] overflow-hidden">
                            <div className="absolute inset-0">
                                <img src="./images/pages/hero_slider_bg_1.webp" alt="Background" className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div className="relative z-10 flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${current * 100}%)` }}>
                                {slides.map((slide, index) => (
                                    <div key={index} className="w-full flex-shrink-0">
                                        <Card img={slide.img} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero 
