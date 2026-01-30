import React, { useEffect, useState } from 'react'
import ClientExpBox from './ClientExpBox'


function ClientExp({ background, children }) {
    return (
        <div className='bg-dark text-white'>
            <div className="px-30 pt-27">
                <div className="flex gap-15">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="relative overflow-hidden h-[880px]">
                            <div className="flex flex-col space-y-4 animate-[scroll-up_15s_linear_infinite]">
                                {[...Array(6)].map((_, i) => (
                                    <React.Fragment key={i}>
                                        <ClientExpBox />
                                        <ClientExpBox />
                                        <ClientExpBox />
                                        <ClientExpBox />
                                        <ClientExpBox />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <div className="relative overflow-hidden h-[880px]">
                            <div className="animate-scroll-down space-y-4 animate-[scroll-down_15s_linear_infinite]">
                                {[...Array(2)].map((_, i) => (
                                    <React.Fragment key={i}>
                                        <ClientExpBox />
                                        <ClientExpBox />
                                        <ClientExpBox />
                                        <ClientExpBox />
                                        <ClientExpBox />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='mt-70 max-w-sm'>
                        <h1 className='text-5xl font-bold'>Our Clients' Experiences Speak Volumes</h1>
                        <p className='mt-5'>Step into the stories of those who have entrusted us with their needs. Their words paint a vivid picture of the quality, care, and satisfaction we strive to deliver with every interaction.</p>
                        <div className="group inline-block mt-8">
                            <button className="relative overflow-hidden bg-gradient-to-r from-red-500  via-pink-400 to-purple-400 rounded-full px-6 py-4 text-white font-semibol">
                               <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10">View All Plans <i className="fa-solid fa-arrow-right"></i> </span>
                                <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-10">View All Plans <i className="fa-solid fa-arrow-right"></i></span></a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientExp
