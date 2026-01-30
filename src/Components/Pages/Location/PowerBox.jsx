import React from 'react'

function PowerBox({img,title,text}) {
    return (
        <div className="p-5 transition-shadow duration-300 ease-in-out hover:border hover:border-neutral-600 hover:[box-shadow:inset_0_0_20px_rgba(255,255,255,0.1)] rounded-xl  group relative">
            <img src={img} alt="" />
            <h1 className="mt-4 font-bold text-2xl">{title}</h1>
            <p className="mt-4">{text}</p>
            <div className="inline-block mt-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button className="relative overflow-hidden border border-neutral-800 bg-neutral-700 rounded-full px-5 py-2 text-white font-semibold text-[14px] hover:bg-neutral-800 group/button">
                    <a href="/contact"><span className="block transition-transform duration-300 group-hover/button:-translate-y-10"> More Details </span>
                    <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover/button:-translate-y-8"> More Details </span></a>
                </button>
            </div>
        </div>
    )
}

export default PowerBox
