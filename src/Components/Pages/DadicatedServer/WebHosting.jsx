import React from 'react'

function WebHosting() {
    return (
        <div className="bg-dark text-white">
            <div className="px-30 pb-30">
                <div className="flex justify-center items-center text-center flex-col">
            <h1 className='text-5xl font-bold max-w-4xl leading-tight'>Join today for Premium Web Hosting That’s Fair to you & the Planet.</h1>
            <p className='mt-4 max-w-4xl'>Whether you’re taming ferocious building epic bases, or battling rival tribes, our servers provide lag-free, high-speed action. Say goodbye to frustrating lag.</p>
            <div className="flex justify-center items-center gap-5 mt-12">
                <div className="group inline-block ">
                    <button className="relative overflow-hidden bg-gradient-to-r from-red-500  via-pink-400 to-purple-400 rounded-full px-6 py-2 text-white font-semibol">
                        <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10">Start Live Chat</span>
                        <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-10">Start Live Chat</span></a>
                    </button>
                </div>
                <div className="group inline-block ">
                    <button className="relative overflow-hidden bg-neutral-800 rounded-full px-6 py-2 text-white font-semibol">
                        <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10">Get Started</span>
                        <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-10">Get Started</span></a>
                    </button>
                </div>
            </div>
        </div>
            </div>
        </div>
    )
}

export default WebHosting
