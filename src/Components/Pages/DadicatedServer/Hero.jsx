import React from 'react'

function Hero() {
    return (
        <div className='gradient -mt-130 text-white'>
            <div className="px-30">
                <div className="flex justify-between">
                    <div>
                        <p className='text-[12px] font-bold'>Home <i class="fa-solid fa-angle-right"></i> Hosting Server <i class="fa-solid fa-angle-right"></i> Dedicated Server</p>
                        <h1 className='font-bold text-6xl max-w-md mt-18 leading-tight'>Dedicated Server Hosting</h1>
                        <p className='mt-6'>Unique, high-performing hardware that you won't find with the big clouds. performance for less than one tenth the price.</p>
                        <div className="group inline-block mt-8">
                        <button className="relative overflow-hidden bg-gradient-to-r from-red-500  via-pink-400 to-purple-400 rounded-full px-6 py-4 text-white font-semibol">
                            <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10">Discover Pricing</span>
                            <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-10">Discover Pricing</span></a>
                        </button>
                    </div>
                    </div>
                    <img src="/images/pages/ds_img.webp" alt="" className='-mt-20'/>
                    
                </div>
            </div>

        </div>
    )
}

export default Hero
