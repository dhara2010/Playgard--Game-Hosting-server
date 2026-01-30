import React from 'react'

function ServerBox({ img, bgClass }) {
    return (
        <div className="border border-neutral-800 bg-neutral-700/10 p-6 rounded-xl hover:bg-neutral-900/10">
            <img src={img} alt="" className='rounded-2xl' />
            <h1 className="font-bold mt-3">Advanced Security</h1>
            <p className='mt-3 max-w-[25ch]'>Whether it’s for a competitive match, or just a casual game server with friends. Servers has the perfect!</p>
        </div>
    )
}

export default ServerBox
