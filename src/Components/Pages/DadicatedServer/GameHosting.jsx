import React from 'react'
import GameHostingBox from './GameHostingBox'

function GameHosting() {
    return (
        <div className='bg-dark text-white'>
            <div className="px-30 py-30">    
                <h1 className="text-5xl max-w-[20ch] font-bold leading-tight">The Number <span className='gradient-text'>#1 Game Hosting</span>in the Worldwide</h1>
                <p className='mt-4 max-w-xl'>Experience unparalleled performance and reliability with our UK-based game servers. Tailored for just friends and massive communities.</p>
                <div className="flex">
                    <div className="flex flex-col mt-15 border-r border-red-300 ">
                        <GameHostingBox img='/images/pages/gh_1.webp' text={'Enterprise Hardware'} />
                        <hr className='border-neutral-600' />
                        <GameHostingBox img='/images/pages/gh_2.webp' text={'Budget Friendly'} />
                    </div>
                    <div className="flex flex-col mt-15 border-r border-red-300 ">
                        <GameHostingBox img='/images/pages/gh_3.webp' text={'Amazing Support'} />
                        <hr className='border-neutral-600 mt-[1.5px]' />
                        <GameHostingBox img='/images/pages/gh_4.webp' text={'Premium Locations'} />
                    </div>
                    <div className="flex-flex-col mt-15">
                        <GameHostingBox img='/images/pages/gh_5.webp' text={'Premium Locations'} />
                        <hr className='border-neutral-600' />
                        <GameHostingBox img='/images/pages/gh_6.webp' text={'Instant Setup'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameHosting
