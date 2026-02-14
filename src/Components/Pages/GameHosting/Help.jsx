import React from 'react'

function Help() {
    return (
        <div className="bg-dark">
            <div className="px-4 lg:px-30 pt-20 lg:pt-0 md:-mb-80">
                <div className="md:h-190 bg-center bg-cover">
                    <img src="/images/pages/cta_bg.webp" alt="" className='hidden md:block absolute w-full lg:w-270 border border-neutral-700 rounded-3xl'/>
                    <main className="relative">
                        <section className="lg:h-[68vh] lg:p-5 flex flex-col justify-center items-center text-center gap-4">
                            <h1 className="text-white text- lg:text-5xl font-serif font-bold lg:max-w-3xl leading-tight">
                                Have any Questions? We're Here to Help!
                            </h1>
                            <div className="flex flex-wrap justify-between text-white gap-4 font-semibold">
                                <p><i class="fa-regular fa-circle-check mr-2"></i>3-Day Money Back Guarantee</p>
                                <p><i class="fa-regular fa-circle-check mr-2"></i>Instant Service Provisioning</p>
                            </div>
                            <p className='text-white flex justify-center items-center'><i class="fa-regular fa-circle-check mr-2"></i>Real 24/7 Technical Support</p>
                            <div className="flex flex-wrap justify-center items-center gap-5 mt-5">
                                <div className="group inline-block ">
                                    <button className="relative overflow-hidden bg-gradient-to-r from-red-500  via-pink-400 to-purple-400 rounded-full px-6 py-4 text-white font-semibol">
                                        <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10">Contact Support</span>
                                        <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-10">Contact Support</span></a>
                                    </button>
                                </div>
                                <div className="group inline-block ">
                                    <button className="relative overflow-hidden bg-neutral-800 rounded-full px-6 py-4 text-white font-semibol">
                                        <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10">Support Game</span>
                                        <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-10">Support Game</span></a>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </main>

                </div>
            </div>
        </div>
    )
}

export default Help
