import React from 'react'
import Brand from '../../Pages/GameHosting/Brand'
import ServerBox from './ServerBox'

function Server() {
    return (
        <div className='bg-dark text-white'>
            <div className="px-30 pt-10">
                <div className="flex flex-col text-center">
                    <p className='text-xl font-bold'>See how over 7,700+ Customers <span className='text-red-500'>Help the world work</span></p>
                </div>
                <div className="flex justify-between gap-10 mt-10">
                    <Brand img="./images/pages/brand-1.webp" />
                    <Brand img="./images/pages/brand-2.webp" />
                    <Brand img="./images/pages/brand-3.webp" />
                    <Brand img="./images/pages/brand-4.webp" />
                    <Brand img="./images/pages/brand-5.webp" />
                    <Brand img="./images/pages/brand-6.webp" />
                </div>
               <div className="flex flex-col md:flex-row mt-30 gap-10 px-10">
                   <div className="md:w-2/5 flex flex-col">
                        <h1 className='text-5xl leading-tight font-bold'>Why We are the Best Server?</h1>
                        <p className='mt-4 text-lg'>Our Palworld Server Hosting plans begin at <span className='text-red-400 font-semibold'>$11.99</span>, and are the perfect servers for you and your friends to fully experience Palworld.</p>
                        <div className="group inline-block mt-6">
                            <button className="relative overflow-hidden bg-neutral-700 rounded-full px-6 py-2 text-white font-semibol">
                                <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10">Discover Plans</span>
                                <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-8">Discover Plans</span></a>
                            </button>
                        </div>
                    </div>
                      <div className="md:w-3/5 grid grid-cols-2 gap-8">
                        <ServerBox img={"./images/home/bs_icon_1.webp"}/>
                        <ServerBox img={"./images/home/bs_icon_2.webp"} /> 
                        <ServerBox img={"./images/home/bs_icon_3.webp"}/>
                        <ServerBox img={"./images/home/bs_icon_4.webp"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Server
