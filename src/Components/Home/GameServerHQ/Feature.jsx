import React from 'react'
import GameHostingBox from '../../Pages/DadicatedServer/GameHostingBox'

function Feature() {
    return (
        <div className='bg-dark text-white'>
            <div className="px-30 py-30">
                <div className="bg-neutral-800 border border-neutral-700 text-red-400 px-5 py-2 rounded-full flex justify-center items-center w-40">
                    <span class="material-icons mr-2" style={{ fontSize: "18px" }}>grid_view</span>Features
                </div>
                <h1 className="text-5xl max-w-[20ch] font-bold leading-tight mt-5">Hosting tailored to your needs</h1>
                <div className="flex">
                    <div className="flex flex-col mt-15 border-r border-red-300 ">
                        <GameHostingBox img='./images/pages/gh_1.webp' text={'Enterprise Hardware'} />
                        <hr className='border-neutral-600' />
                        <GameHostingBox img='./images/pages/gh_4.webp' text={'Premium Locations'} />
                    </div>
                    <div className="flex flex-col mt-15 border-r border-red-300 ">
                        <GameHostingBox img='./images/pages/gh_2.webp' text={'Budget Friendly'} />

                        <hr className='border-neutral-600 mt-[1.5px]' />
                        <GameHostingBox img='./images/pages/gh_5.webp' text={'DDos Protection'} />
                    </div>
                    <div className="flex-flex-col mt-15">
                        <GameHostingBox img='./images/pages/gh_3.webp' text={'Amazing Support'} />

                        <hr className='border-neutral-600' />
                        <GameHostingBox img='./images/pages/gh_6.webp' text={'Instant Setup'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
