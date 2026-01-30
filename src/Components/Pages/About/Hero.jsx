import React from 'react'

function Hero() {
    return (
        <div className='gradient -mt-150 text-white'>
            <div className="px-30">
                <div className="bg-neutral-800 w-38 border border-neutral-700 text-red-400 py-2 rounded-full flex justify-center items-center ">
                    <span class="material-icons mr-2" style={{ fontSize: "18px" }}>grid_view</span>Our Story
                </div>
                <div className="flex justify-between items-center mt-5">
                    <h1 className='text-7xl leading-tight max-w-2xl font-bold'>What you Need to know About Us</h1>
                    <p className='max-w-xs pt-25'>World class development and built for performance, Taskify will deliver every time.</p>
                </div>
                <div className="mt-5">
                    <img src="/images/pages/about_lg_img.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
