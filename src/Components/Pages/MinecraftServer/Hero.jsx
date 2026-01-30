import React from 'react'

function Hero() {
  return (
    <div className='-mt-187 text-white mb-70 '>
      <img src="/images/pages/banner_2_bg.webp" alt="" className='absolute gradient' />
      <div className="px-30 relative pt-40 ">
        <div className="flex flex-col text-center justify-center items-center">
            <h1 className='font-bold text-6xl w-160'>Best Minecraft Servers Guaranteed.</h1>
            <p className='w-160 mt-5 text-[18px]'>Lag free, always up-to-date versions & modpacks. Enjoy a 24/7 support team that responds in MINUTES - not hours or days.</p>
            <div className="bg-white p-3 rounded-full mt-8">
                <div className="flex items-center gap-2">
                    <img src="/images/pages/us_md.webp" alt="" />
                <select name="country" id="country" className='text-black border-0 w-40'>
                    <option value="">Chicago.IL</option>
                    <option value="">USA</option>
                    <option value="">UAE</option>
                </select>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
