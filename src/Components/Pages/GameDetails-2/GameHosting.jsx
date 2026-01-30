import React, { useState } from 'react'
import { Link } from 'react-router'

function GameHosting({ noBg = false }) {
    const features = [
        { name: "Console", img: "./images/pages/game_host_img.webp" },
        { name: "Modpack Installer", img: "./images/pages/game_host_img_2.webp" },
        { name: "Reverse Proxy", img: "./images/pages/game_host_img_3.webp" },
        { name: "Server Importer", img: "./images/pages/game_host_img_4.webp" },
        { name: "Server Splitter", img: "./images/pages/game_host_img_3.webp" },
        { name: "File Manager", img: "./images/pages/game_host_img_2.webp" },
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <div className={`${noBg ? '' : 'bg-dark'} text-white`}>
            <div className="px-30 pt-48">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className='font-bold text-5xl'>Game Hosting, Simplified</h1>
                    <p className='mt-4 max-w-2xl'>With our revolutionary new Apollo Panel, Industry-leading Support, and Affordable Pricing, owning and managing a successful game server has never been easier.</p>
                </div>
                <div className="flex justify-between mt-10">
                    <div className="flex flex-col">
                        <ul className='space-y-3 text-[19px] font-semiblod mt-5'>
                            {features.map((feature, index) => (
                                <li
                                    key={index}
                                    onClick={() => setSelectedIndex(index)}
                                    className={`relative cursor-pointer pl-6 transition-colors duration-300 hover:gradient-text ${selectedIndex === index ? "gradient-text font-bold" : ""
                                        }`}>
                                    <span className={`absolute left-0 top-1/2 -translate-y-1/2 size-1 rounded-full ${selectedIndex === index ? "w-8 h-[2px] rounded-none bg-purple-500" : " bg-neutral-400"}`}></span>
                                    <span className={`${selectedIndex === index ? "ml-4" : ""} `}>{feature.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='w-200'>
                        <img src={features[selectedIndex].img} alt={features[selectedIndex].name} className="rounded-lg shadow-lg transition-all duration-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameHosting
