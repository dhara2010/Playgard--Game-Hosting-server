import React from 'react'
import Support2 from './Support2'
import Fetured from './Fetured'
import Categories from './Categories'

function Support() {
    return (
        <div className='-mt-150 text-white'>
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className='text-7xl max-w-3xl text-center font-bold'>How Can We Help You?</h1>
                <p><span className='text-red-400 font-semibold'>100,000+ Servers</span> powering customers around the world</p>
                <div className="relative w-180 mt-5">
                    <input type="text" placeholder='Search Our Help Center' className='border border-neutral-600 p-5 rounded-full w-full pr-28' />
                    <button className='absolute top-1/2 right-2 -translate-y-1/2 bg-gradient-to-r from-red-400 to-purple-500 rounded-full py-3 px-7'>Search</button>
                </div>
            </div>
            <div className="grid grid-cols-3 px-30 mt-30 gradient">
                <Support2 img="/images/pages/support_icon_1.webp" />
                <Support2 img="/images/pages/support_icon_2.webp" />
                <Support2 img="/images/pages/support_icon_3.webp" />
            </div>
            <Fetured/>
            <Categories/>
        </div>
    )
}

export default Support
