import React, { useState } from 'react'

function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='-mt-200'>
            <main className="pt-40">
                <section className="h-[68vh] flex flex-col justify-center items-center text-center gap-8">
                    <div className="bg-neutral-800 border border-neutral-700 text-red-400 px-6 py-2 rounded-full flex justify-center items-center ">
                        <span class="material-icons mr-2" style={{ fontSize: "18px" }}>grid_view</span>Reliable & Affordable Servers
                    </div>
                    <h1 className="text-white text-6xl font-serif font-bold max-w-3xl leading-tight">
                        Best Premium Gaming Server Hosting
                    </h1>
                    <p className="text-white font-medium">Our Assassins Creed Server Hosting plans begin at <span className="text-red-400 text-[16px]">$11.99</span> are the perfect servers.</p>
                    <div className="group inline-block">
                        <button className="relative overflow-hidden bg-gradient-to-r from-red-500  via-pink-400 to-purple-400 rounded-full px-6 py-4 text-white font-semibol">
                            <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10">Order Server <i class="fa-solid fa-arrow-right"></i> </span>
                                <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-10">Order Server <i class="fa-solid fa-arrow-right"></i></span></a>
                        </button>
                    </div>
                </section>
                <section className="grid grid-cols-3 h-[100vh] mt-15 mx-30">
                    <div className="col-span-2 bg-dark h-80 p-6 pt-8 text-white flex">
                        <div>
                            <img src="../images/v_card_icon_1.webp" alt="" className="h-20 bg-pink-400/10 rounded-full" />
                            <h2 className="text-5xl font-bold mt-6">45% of user</h2>
                            <p className="mt-6 text-[20px]">Points of Presence Worldwide Datacenters</p>
                        </div>
                        <div>
                            <img src="../images/v_card_icon_2.webp" alt="" className="h-20 bg-pink-400/10 rounded-full" />
                            <h2 className="text-5xl font-bold mt-6">$10k Reviews</h2>
                            <p className="mt-6 text-[20px]">Points of Presence Worldwide Datacenters</p>
                        </div>
                    </div>
                    <div className="col-span-1 relative ml-6">
                        <img src="../images/video_img.webp" alt="image" className="h-75 w-full" />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="flex justify-center items-center -mt-80 size-20 bg-orange-500/20 rounded-full cursor-pointer animate-pulse-border">
                                <button onClick={() => setIsOpen(true)} className="flex items-center justify-center size-10 bg-gradient-to-r from-red-500 via-pink-400 to-purple-400 rounded-full cursor-pointer">
                                    <i className="fa-solid fa-play text-white text-[10px]"></i>
                                </button>
                                {isOpen && (
                                    <div className="fixed inset-0 flex justify-center items-center z-50">
                                        <div className="relative w-[90%] md:w-[60%] lg:w-[50%] aspect-video">
                                            <button onClick={() => setIsOpen(false)} className="absolute -right-9 text-white text-6xl hover:text-gray-400">&times; </button>
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src="https://www.youtube.com/embed/pPl3ZZdTP3g?autoplay=1"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen className="rounded-lg"
                                            ></iframe>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Hero
