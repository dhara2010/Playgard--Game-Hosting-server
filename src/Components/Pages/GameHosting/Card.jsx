import React from 'react'

function Card({ img }) {
    return (
        <div className="flex flex-col items-center text-center w-full max-w-md mx-auto">
            <img src={img} alt="Slide" className="w-72 h-85 mx-auto rounded-xl mt-22" />
            <div className="mt-7">
                <h1 className='text-2xl font-bold'>7 days to Die</h1>
                <p className='mt-3 max-w-[30ch]'>Our Palworld Server Hosting plans begin at <span className="text-red-400">$11.99</span>, and are the perfect servers for you and your friends to fully</p>
                <div className="group inline-block mt-4">
                    <button className="relative overflow-hidden bg-neutral-700 rounded-full px-5 py-2.5 text-white font-semibold hover:bg-neutral-800">
                        <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10">Discover plans</span>
                        <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-8">Discover plans</span></a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
