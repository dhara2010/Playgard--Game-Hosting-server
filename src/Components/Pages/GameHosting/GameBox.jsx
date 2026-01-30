import React from 'react'

function GameBox({ img }) {
    return (
        <div className="group border border-neutral-500 rounded-xl p-6 bg-neutral-600/20">
            <div className="overflow-hidden rounded-xl">
                <img src={img} alt="" className="transition-transform duration-500 ease-in-out group-hover:scale-120"/>            
                </div>
                <h1 className='text-2xl font-bold'>ARK:Survival Evolved (Pc)</h1>
                <p className='mt-3 text-neutral-500 text-sm font-semibold'>Starting at : <span className='text-red-500'>$1.45 / slot</span></p>
                <div className="group/button inline-block mt-5 text-sm">
                    <button className="relative overflow-hidden bg-neutral-700 border border-neutral-500 rounded-full px-5 py-2.5 text-white font-semibold hover:bg-neutral-700">
                       <a href="/contact"><span className="block transition-transform duration-300 group-hover/button:-translate-y-10"> Order Now </span>
                        <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover/button:-translate-y-8"> Order Now </span></a> 
                    </button>
                </div>
            </div>
            )
}

            export default GameBox
