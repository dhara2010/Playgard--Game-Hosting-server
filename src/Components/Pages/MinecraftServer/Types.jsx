import React from 'react'

function Types() {
  return (
    <div className='bg-dark text-white'>
      <div className="px-30 pt-30">
        <div className="flex justify-between items-center gap-6">
          <img src="/images/pages/mcs_img.webp" alt="" className='w-135' />
          <div>
            <h1 className='text-5xl leading-tight font-bold'>Which Minecraft Server Types Are Supported?</h1>
            <p className='mt-5 max-w-[60ch]'>Minecraft server hosting plans are fully equipped to support both Java and Bedrock Edition, ensuring all versions are up-to-date with automatic updates.</p>
            <p className='mt-8 max-w-[55ch]'>Our Minecraft server hosting solutions include a one-click installation feature for every server type imaginable, from Spigot and CraftBukkit to Forge and Vanilla, along with all Bedrock Edition servers such as Bedrock Dedicated Server and PocketMine-MP. Additionally, we support all modpacks including CurseForge, Feed The Beast, Technic, ATLauncher, and more.</p>
            <div className="group inline-block mt-10">
              <button className="relative overflow-hidden bg-gradient-to-r from-red-500  via-pink-400 to-purple-400 rounded-full px-6 py-2 text-white font-semibol">
                <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10">View FAQ</span>
                <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-10">View FAQ</span></a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Types
