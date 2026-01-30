import React from 'react'
import ConfigBox from './ConfigBox'

function Config() {
    return (
        <div className='bg-dark text-white px-30'>
            <h1 className='text-center text-5xl font-bold pt-30'>Start Range Configurations</h1>
            <div className="mt-10">
                <ConfigBox img="./images/pages/rayzen.webp" text={'AMD Ryzen 7950X'}/>
                <ConfigBox img="./images/pages/rayzen.webp" text={'AMD Ryzen 7950X'}/>
                <ConfigBox img="./images/pages/intel.webp" text={'Intel Xeon E-2388'}/>
                <ConfigBox img="./images/pages/intel.webp" text={'Intel Xeon E-2388'}/>
                <ConfigBox img="./images/pages/rayzen.webp" text={'AMD Ryzen 7950X'}/>
            </div>
        </div>
    )
}

export default Config
