import React from 'react'

function PricingBox({p,title}) {
    return (
        <div>
            <div className="flex justify-between items-center mt-15">
                <div className="relative group text-white bg-dark p-4 rounded-lg border border-neutral-700 w-90 h-140 overflow-hidden">
                    <img src="./images/hero_bg_3.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-5 z-10">
                        <div className="flex text-red-400 items-center">
                            <span class="material-icons mr-2" style={{ fontSize: "18px" }}>grid_view</span>
                            <p>{p}</p>
                        </div>
                        <h1 className="mt-4 text-[20px] font-bold">{title}</h1>
                        <p className="mt-6 text-[12px]">Features</p>
                        <ul className='mt-4'>
                            <li className='text-white text-[16px] mt-2.5'><i class="fa-solid fa-check mr-1"></i>Supermicro Blade</li>
                            <li className='text-white text-[16px] mt-2.5'><i class="fa-solid fa-check mr-1"></i>Xeon E3-1265Lv3</li>
                            <li className='text-white text-[16px] mt-2.5'><i class="fa-solid fa-check mr-1"></i>c4/t8 2.5-3.2 GHz</li>
                            <li className='text-white text-[16px] mt-2.5'><i class="fa-solid fa-check mr-1"></i>32GB DDR3 1666MHz</li>
                            <li className='text-white text-[16px] mt-2.5'><i class="fa-solid fa-check mr-1"></i>960GB SSD</li>
                            <li className='text-white text-[16px] mt-2.5'><i class="fa-solid fa-check mr-1"></i>300Mbit/s Unmetered</li>
                        </ul>
                        <p className='mt-6 text-[18px] font-medium'>$ <span className='text-4xl font-bold'>250</span>/month</p>
                        <div className="group inline-block mt-10">
                            <button className="relative overflow-hidden bg-gradient-to-r from-red-500  via-pink-400 to-purple-400 rounded-full px-6 py-2 text-white font-semibol">
                                <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10">Discover Plans</span>
                                <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-8">Discover Plans</span></a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingBox
