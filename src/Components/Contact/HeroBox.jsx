import React from 'react'

function HeroBox({title, p}) {
    return (
        <div className="w-90 border bg-neutral-700/20 border-neutral-600 rounded-xl p-6">
            <img src="./images/contact/coni_1.webp" alt="" />
            <h1 className='mt-4 text-2xl font-bold'>{title}</h1>
            <p className='mt-3'>Message us using our online chat system for quick and efficient support.</p>
            <hr className='mt-7 text-neutral-700' />
            <p className='mt-4 text-[16px] font-semibold'>{p}</p>
        </div>
    )
}

export default HeroBox
