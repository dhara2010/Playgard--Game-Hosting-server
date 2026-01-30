import React from 'react'

function GameHostingBox({img, text}) {
    return (
        <div className="flex flex-col py-6 px-4">
            <div className="flex gap-4 items-center">
                <img src={img} alt="" />
                <h5 className='text-xl font-bold'>{text}</h5>
            </div>
            <p className='mt-4 text-gray-300'>AI-powered translation tools Save per day on ad management Create generate caption. Create generate caption.</p>
        </div>
    )
}

export default GameHostingBox
