import React from 'react'

function PerformanceBox({img, title}) {
    return (
        <div className="group border border-neutral-500 bg-neutral-700/20 p-4 rounded-xl">
            <img src={img} alt="" className='mt-5 bg-white rounded-full' />
            <h1 className='mt-4 text-2xl font-bold'>{title}</h1>
            <p className='mt-4'>The quality of your website is vital in business. You need pages loading faster than the speed of light. That's where we come in!</p>
            <p className='mt-9 group-hover:hidden py-1'>Starting at : <span className='text-red-400 font-semibold absolute transition-all'>$1.45 / slot</span></p>
            <a class="mt-9 hidden group-hover:inline-block bg-gradient-to-b from-red-400 to-purple-400 py-1 px-4 rounded-full text-white" href="/contact" data-discover="true">From: $1/GB</a>
        </div>
    )
}

export default PerformanceBox
