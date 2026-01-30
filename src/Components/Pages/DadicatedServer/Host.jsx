import React from 'react'
import FeturesBox from '../../Home/FeturesBox'

function Host() {
    return (
        <div className='bg-dark text-white'>
            <div className="px-30 pt-30">
                <div className="flex justify-center items-center text-center flex-col">
                    <h1 className='text-5xl font-bold'>Why Host With Us?</h1>
                    <p className='mt-4 max-w-2xl'>Easily install and manage your ARK server's Steam Workshop mods (in one click!) with our easy-to-use management interface.</p>
                </div>
                <div className="mt-8 grid grid-cols-4 gap-3">
                    <FeturesBox img={'/images/pages/feature_icon_1.webp'} title={'Instant Server Setup'} text={'Our Minecraft hosting plans include automatic modpack installation. It’s easy to install'} />
                    <FeturesBox img={'/images/pages/feature_icon_2.webp'} title={'DDoS Protection'} text={'Our Minecraft hosting plans include automatic modpack installation. It’s easy to install'} />
                    <FeturesBox img={'/images/pages/feature_icon_3.webp'} title={'24/7-365 Support'} text={'Our Minecraft hosting plans include automatic modpack installation. It’s easy to install'} />
                    <FeturesBox img={'/images/pages/feature_icon_4.webp'} title={'Modpack Support'} text={'Our Minecraft hosting plans include automatic modpack installation. It’s easy to install'} />
                </div>
                <div className="mt-5">
                    <div className="relative border border-neutral-600 rounded-2xl h-83">
                        <img src="/images/pages/gdf_bg.webp" alt="" className='h-82.5 w-full' />
                        <div className="absolute inset-0 p-8 flex flex-col justify-center gap-4">
                            <h1 className='text-5xl font-bold'>High Performance Hardware</h1>
                            <p>Easily install and manage your ARK server's Steam Workshop mods (in one click!) with our easy-to-use management interface.</p>
                            <div className="grid grid-cols-2 font-bold">
                                <li className='flex items-center gap-2 mt-4'> <span className="p-[2px] rounded-full bg-gradient-to-r from-purple-400 to-red-400"><span className="flex items-center justify-center size-5 rounded-full bg-dark"><i className="fa-solid fa-check text-sm gradient-text"></i></span></span> Xeon and Ryzen CPUs </li>
                                <li className='flex items-center gap-2 mt-4'> <span className="p-[2px] rounded-full bg-gradient-to-r from-purple-400 to-red-400"><span className="flex items-center justify-center size-5 rounded-full bg-dark"><i className="fa-solid fa-check text-sm gradient-text"></i></span></span> Up to 10Gbps Uplinks </li>
                                <li className='flex items-center gap-2 mt-4'> <span className="p-[2px] rounded-full bg-gradient-to-r from-purple-400 to-red-400"><span className="flex items-center justify-center size-5 rounded-full bg-dark"><i className="fa-solid fa-check text-sm gradient-text"></i></span></span> DDR4 & DDR5 Memory </li>
                                <li className='flex items-center gap-2 mt-4'> <span className="p-[2px] rounded-full bg-gradient-to-r from-purple-400 to-red-400"><span className="flex items-center justify-center size-5 rounded-full bg-dark"><i className="fa-solid fa-check text-sm gradient-text"></i></span></span> NVMe SSD Drive </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Host
