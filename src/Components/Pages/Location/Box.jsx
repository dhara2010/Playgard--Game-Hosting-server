import React from 'react'

function Box({img,title}) {
    return (
        <div className="border bg-black/8 p-6 rounded-xl border-neutral-700">
            <img src={img} alt="" />
            <h1 className='mt-5 text-2xl font-bold'>{title}</h1>
            <p className='mt-8'>Location: <span className='font-semibold'> Lansing, MI</span></p>
            <p className='mt-1'>Capacity: <span className='font-semibold'> 33,000 servers</span></p>
            <div className="group inline-block mt-8">
                <button className="relative overflow-hidden border border-neutral-800 bg-neutral-700 rounded-full px-5 py-2 text-white font-semibold text-[14px] hover:bg-neutral-800">
                    <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10"> More Details </span>
                    <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-8"> More Details </span></a>
                </button>
            </div>
        </div>
    )
}

export default Box
