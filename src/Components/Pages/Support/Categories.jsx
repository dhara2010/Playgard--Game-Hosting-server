import React from 'react'
import CategoriesBox from './CategoriesBox'

function Categories() {
    return (
        <div className='bg-dark'>
            <div className="px-55 pt-30">
                <h1 className='text-5xl text-center font-bold mb-3'>Browse All Categories</h1>
                <div className="grid grid-cols-2 mt-15 gap-6">
                    <CategoriesBox />
                    <CategoriesBox />
                    <CategoriesBox />
                    <CategoriesBox />
                    <CategoriesBox />
                    <CategoriesBox />
                </div>
                <div className="flex-flex-col justify-center items-center text-center mt-30 gap-4">
                    <h1 className='text-5xl font-bold'>Join today for Premium Web Hosting That’s Fair to you & the Planet.</h1>
                    <p className='mt-7 mx-9'>Whether you’re taming ferocious building epic bases, or battling rival tribes, our servers provide lag-free, high-speed action. Say goodbye to frustrating lag.</p>
                    <div className="flex justify-center items-center gap-5 mt-8 pb-15">
                        <div className="group inline-block">
                            <button className="relative overflow-hidden bg-gradient-to-r from-red-500 to-purple-500 rounded-full px-6 py-4 text-white font-semibol">
                                <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10">Start Live Chat</span>
                                <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-10">Start Live Chat</span></a>
                            </button>
                        </div>
                        <div className="group inline-block">
                            <button className="relative overflow-hidden bg-neutral-800 rounded-full px-6 py-4 text-white font-semibol">
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

export default Categories
