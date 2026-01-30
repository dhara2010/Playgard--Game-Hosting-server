import React from 'react'

function Hero() {
    return (
        <div className='gradient text-white -mt-150 '>
            <div className="px-30 pb-10">
                <div className='flex flex-col'>
                    <p className='text-[14px] font-semibold'>Home<i class="fa-solid fa-angle-right"></i> Game Server <i class="fa-solid fa-angle-right"></i>ARK Survival Evolved ( PS4)</p>
                    <h4 className='mt-5 text-6xl font-bold'>ARK: Survival Evolved (PS4)</h4>
                    <div className="grid grid-cols-3 mt-10 space-y-6 font-bold text-[18px]">
                        <div className="flex items-center gap-3"><i class="fa-regular fa-circle-check gradient-text"></i>Instant Server Setup</div>
                        <div className="flex items-center gap-3"><i class="fa-regular fa-circle-check gradient-text"></i>Full FTP Access</div>
                        <div className="flex items-center gap-3"><i class="fa-regular fa-circle-check gradient-text"></i>SSD Drives</div>
                        <div className="flex items-center gap-3"><i class="fa-regular fa-circle-check gradient-text"></i>24/7 Uptime</div>
                        <div className="flex items-center gap-3"><i class="fa-regular fa-circle-check gradient-text"></i>DDoS Protection</div>
                        <div className="flex items-center gap-3"><i class="fa-regular fa-circle-check gradient-text"></i>Steam Workshop Mods</div>
                    </div>
                </div>
            </div>
            <div className="gradient">
                <div className="px-30">
                    <img src="./images/pages/game_details_img.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
