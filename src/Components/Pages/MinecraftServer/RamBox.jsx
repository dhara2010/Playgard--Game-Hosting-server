import React from 'react'

function RamBox() {
    return (
        <div className="border rounded-xl border-neutral-600 p-8 w-[233px]">
            <div className="flex flex-col items-center justify-center gap-5">
                <img src="/images/pages/price_icon_1.webp" alt="" />
                <p className="text-blue-500 font-bold">Grass</p>
                <h1 className='text-3xl font-bold'>1 GB RAM</h1>
                <div className="flex gap-2 items-center text-[14px] font-semibold text-neutral-300"> <i className='fa-solid fa-check'></i><p>Vanilla: 1-4 Players</p></div>
                <div className="flex gap-2 items-center text-[14px] font-semibold text-neutral-300"> <i className='fa-solid fa-check'></i><p>Modded: Not Recommended</p></div>
                <div className="flex gap-2 items-center text-[14px] font-semibold text-neutral-300"> <i className='fa-solid fa-check'></i><p>NVMe SSD Storage</p></div>
                <div className="flex gap-2 items-center text-[14px] font-semibold text-neutral-300"> <i className='fa-solid fa-check'></i><p>Players Slots</p></div>
                <h5 className='font-bold text-neutral-400'>$ <span className='text-[30px] text-white'>250</span>/month</h5>
                <a href="/contact" className='gradient-text'>Discover <i className='fa-solid fa-arrow-right'></i></a>
            </div>
        </div>
    )
}

export default RamBox
