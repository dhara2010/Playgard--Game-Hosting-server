import React from 'react'

function ServerBox({ img, head }) {
    return (
        <div className='bg-dark min-h-[500px] py-20 text-white'>
            <div className="flex justify-between">
                <div className="h-96 relative group overflow-hidden w-1/2 mx-5">
                    <div className="group-hover:opacity-0">
                        <img src="../images/service_slider_icon_1.webp" alt="icon" />
                        <h1 className='mt-4 text-3xl font-bold'>{head}</h1>
                        <p className='mt-4'>Our Minecraft hosting plans include automatic modpack installation.</p>
                        <ul className='mt-4'>
                            <li className='flex pt-2 gap-2'><img src="../images/check-dark.webp" alt="" />30+ Games support</li>
                            <li className='flex pt-2 gap-2'><img src="../images/check-dark.webp" alt="" />Automatic Backups</li>
                            <li className='flex pt-2 gap-2'><img src="../images/check-dark.webp" alt="" />Workshop & Mod Installers</li>
                        </ul>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
                        <h1 className="text-3xl font-bold mb-4">{head}</h1>
                        <p className='mt-4'>Our Minecraft hosting plans include automatic modpack installation.</p>
                        <ul className='mt-4'>
                            <li className='flex pt-2 gap-2'><img src="../images/check-dark.webp" alt="" />30+ Games support</li>
                            <li className='flex pt-2 gap-2'><img src="../images/check-dark.webp" alt="" />Automatic Backups</li>
                            <li className='flex pt-2 gap-2'><img src="../images/check-dark.webp" alt="" />Workshop & Mod Installers</li>
                        </ul>
                        <div className="flex justify-between items-center mt-6">
                            <button className="relative overflow-hidden bg-gradient-to-r from-red-500 via-pink-400 to-purple-400 rounded-full px-6 py-2 text-white font-semibold h-10 w-32">
                                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 hover:-translate-y-full">Discover <i className="fa-solid fa-arrow-right ml-1"></i></span>
                                <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 hover:translate-y-0">Discover <i className="fa-solid fa-arrow-right ml-1"></i></span>
                            </button>   
                            <h1 className="text-6xl font-bold gradient-text">01</h1>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src={img} alt="image" className='h-96 w-150' />
                </div>
            </div>
        </div>
    )
}

export default ServerBox
