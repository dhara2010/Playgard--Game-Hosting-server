import React from 'react'

function Build() {
    return (
        <div className='bg-dark text-white'>
            <div className="px-30 pt-30">
                <div className="flex flex-col gap-5 text-center justify-center items-center">
                    <h1 className='text-5xl font-bold'>Build Locally, Launch Woldwide</h1>
                    <p className='max-w-md'>Swap your game server for any the <span className='text-red-500 font-bold'>30+ Games Server</span>Locations at Hostingard</p>
                </div>
                <div className="flex justify-center items-center mt-10 relative">
                    <img src="/images/pages/map_2.webp" alt="" />
                    <div className="absolute top-[20%] left-[15%] flex flex-col items-center">
                        <img src="/images/pages/map_country_1.webp" alt="USA" />
                        <div class="relative ml-45 mt-3 flex items-center justify-center">
                            <div class="size-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                            <div class="absolute size-6 rounded-full border-2 border-gray-400"></div>
                        </div>
                    </div>
                    <div className="absolute top-[28%] left-[40%] flex flex-col items-center">
                        <img src="/images/pages/map_country_2.webp" alt="Germany" />
                        <div class="relative mr-48 mt-3 flex items-center justify-center">
                            <div class="size-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                            <div class="absolute size-6 rounded-full border-2 border-gray-400"></div>
                        </div>
                    </div>
                    <div className="absolute top-[67%] left-[28%] flex flex-col items-center">
                        <img src="/images/pages/map_country_3.webp" alt="France" />
                        <div class="relative ml-30 -mt-19 flex items-center justify-center">
                            <div class="size-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                            <div class="absolute size-6 rounded-full border-2 border-gray-400"></div>
                        </div>
                    </div>
                    <div className="absolute top-[44%] right-[20%] flex flex-col items-center">
                        <img src="/images/pages/map_country_4.webp" alt="Singapore" />
                        <div class="relative mr-35 mt-3 flex items-center justify-center">
                            <div class="size-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                            <div class="absolute size-6 rounded-full border-2 border-gray-400"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Build
