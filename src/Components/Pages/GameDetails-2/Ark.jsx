import React from 'react'

function Ark() {
  return (
    <div className='bg-dark text-white'>
      <div className="px-30 pt-30">
            <div className="flex justify-between items-center gap-6">
                <img src="/images/pages/video_img_2.webp" alt="" className='w-135'/>
                <div>
                    <h1 className='text-5xl leading-tight font-bold'>Play ARK: Survival Evolved Multiplayer</h1>
                    <p className='mt-5 max-w-[60ch]'>Get your tribe together and dominate ARK: Survival Evolved multiplayer on our ARK dedicated servers.</p>
                    <p className='mt-8 max-w-[55ch]'>Whether you’re taming ferocious dinos, building epic bases, or battling rival tribes, our servers provide lag-free, high-speed action. Say goodbye to frustrating lag and hello to endless fun and epic adventures with your friends.</p>
                     <div className="group inline-block mt-10">
                        <button className="relative overflow-hidden bg-gradient-to-r from-red-500  via-pink-400 to-purple-500 rounded-full px-6 py-4 text-white font-semibol">
                            <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10 items-center"> <i class="fab fa-discord mr-1 text-2xl"></i>Connect On Discord</span>
                            <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-10"> <i class="fab fa-discord mr-1 text-2xl"></i>Connect On Discord</span></a>
                        </button>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Ark
