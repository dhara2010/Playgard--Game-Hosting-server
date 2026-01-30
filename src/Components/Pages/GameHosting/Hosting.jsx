import React from 'react'
import GameHosting from '../GameDetails-2/GameHosting'


function Hosting() {
    return (
        <div className='relative bg-dark items-center flex flex-col'>
            <div className="absolute inset-0 z-0">
                <img src="/images/pages/game_host_bg_overlay_1.webp" alt="" className="pl-68 -mt-10 object-cover opacity-20" />
                <img src="/images/pages/game_host_bg_overlay_2.webp" alt="" className="w-full size-40 pl-60 mt-85 object-cover" />

            </div>
            <div className="relative z-10 w-full -mt-30">
                    <GameHosting noBg/>
            </div>
        </div>
    )
}

export default Hosting
