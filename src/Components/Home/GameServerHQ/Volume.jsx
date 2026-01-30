import React, { useState } from 'react'
import VolumeBox from './VolumeBox'

function Volume() {
    const allImages = [
        "./images/home/client_1.webp",
        "./images/home/client_2.webp",
        "./images/home/client_3.webp",
        "./images/home/client_2.webp",
        "./images/home/client_3.webp",
        "./images/home/client_1.webp",
        "./images/home/client_1.webp",
        "./images/home/client_2.webp",
        "./images/home/client_3.webp",
    ];

    const [visibleCount, setVisibleCount] = useState(6);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 3);
    };
    const displayedImages = Array.from({ length: visibleCount }, (_, index) => {
        return allImages[index % allImages.length];
    });

    return (
        <div className='bg-dark text-white'>
            <div className="px-30">
                <div className="flex justify-center flex-col items-center">
                    <div className="bg-neutral-800 border border-neutral-700 text-red-400 px-5 py-2 rounded-full flex justify-center items-center w-40">
                        <span class="material-icons mr-2" style={{ fontSize: "18px" }}>grid_view</span>Features
                    </div>
                    <h1 className="text-5xl font-bold mt-4 max-w-3xl leading-tight text-center">Our Clients' Experiences Speak Volumes</h1>
                </div>
                <div className="mt-5">
                    <div className="grid grid-cols-3 gap-6">
                        {displayedImages.map((img, index) => (
                            <VolumeBox key={index} img={img} />
                        ))}
                    </div>
                </div>

                <div className="flex justify-center items-center relative mt-8">
                    <div className="group inline-block -mt-11">
                        <button onClick={handleLoadMore} className="relative z-10 overflow-hidden bg-gradient-to-r from-red-500 via-pink-400 to-purple-400 rounded-full px-6 py-2 text-white font-semibold">
                            <span className="block transition-transform duration-300 group-hover:-translate-y-10">Learn More</span>
                            <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-8">Learn More</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Volume
