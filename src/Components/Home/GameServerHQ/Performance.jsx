import React from 'react'
import PerformanceBox from './PerformanceBox'

function Performance() {
    return (
        <div className='bg-dark text-white'>
            <div className="px-30 pt-30">
                <div className="flex justify-center items-center">
                    <h1 className='text-5xl font-bold text-center max-w-md leading-tight'>High Performance Hosting Server Solutions</h1>
                </div>
                <div className="grid grid-cols-4 gap-6 mt-10">
                    <PerformanceBox img={"./images/home/hs_icon_1.webp"} title="Website Hosting"/>
                    <PerformanceBox img={"./images/home/hs_icon_2.webp"} title="Minecraft Hosting"/>
                    <PerformanceBox img={"./images/home/hs_icon_3.webp"} title="VPS Hosting"/>
                    <PerformanceBox img={"./images/home/hs_icon_4.webp"} title="Dedicated Servers"/>
                </div>
            </div>
        </div>
    )
}

export default Performance
