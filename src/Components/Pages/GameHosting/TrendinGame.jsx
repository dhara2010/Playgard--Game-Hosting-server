import React from 'react'
import Brand from './Brand'
import GameBox from './GameBox'

function TrendinGame() {
    return (
        <div className='bg-dark text-white'>
            <div className="px-30 pt-10">
                <div className="flex flex-col text-center">
                    <p className='text-xl font-bold'>See how over 7,700+ Customers <span className='text-red-500'>Help the world work</span></p>
                </div>
                <div className="flex justify-between gap-10 mt-10">
                    <Brand img="/images/pages/brand-1.webp" />
                    <Brand img="/images/pages/brand-2.webp" />
                    <Brand img="/images/pages/brand-3.webp" />
                    <Brand img="/images/pages/brand-4.webp" />
                    <Brand img="/images/pages/brand-5.webp" />
                    <Brand img="/images/pages/brand-6.webp" />
                </div>
                <div className="flex-flex-col items-center text-center mt-30">
                    <h1 className='font-bold text-5xl'>Discover Trending Games</h1>
                    <p className='max-w-md ml-78 mt-4'>Check out all of the key Aloft game server hosting features that come with your rental: 30+ Games supported at Hostingard</p>
                </div>
                <div className='grid grid-cols-2 mt-10 gap-6'>
                    <GameBox img='/images/pages/game_card_1.webp'/>
                    <GameBox img='/images/pages/game_card_2.webp'/>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-5">
                    <GameBox img='/images/pages/game_card_3.webp'/>
                    <GameBox img='/images/pages/game_card_4.webp'/>
                    <GameBox img='/images/pages/game_card_5.webp'/>
                </div>
            </div>
        </div>
    )
}

export default TrendinGame
