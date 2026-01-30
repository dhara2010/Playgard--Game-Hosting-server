import React from 'react'

function Help() {
  return (
    <div className="h-150  bg-center bg-cover bg-black" style={{ backgroundImage: "url('/images/hero_bg_3.webp')" }}>
            <main className="pt-10">
                <section className="h-[68vh] flex flex-col justify-center items-center text-center gap-4">
                    <h1 className="text-white text-5xl font-serif font-bold max-w-3xl leading-tight">
                        Have any Questions? We're Here to Help!
                    </h1>
                    <div className="flex justify-between text-white gap-4 font-semibold">
                        <p><i class="fa-regular fa-circle-check mr-2"></i>3-Day Money Back Guarantee</p>
                        <p><i class="fa-regular fa-circle-check mr-2"></i>Instant Service Provisioning</p>
                    </div>
                    <p className='text-white justify-center flex items-center'><i class="fa-regular fa-circle-check mr-2"></i>Real 24/7 Technical Support</p>
                    <div className="flex justify-center items-center gap-5 mt-5">
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
  )
}

export default Help
