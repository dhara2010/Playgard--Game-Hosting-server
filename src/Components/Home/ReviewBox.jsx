import React from 'react'

function ReviewBox({img}) {
    return (
        <div className="flex justify-between items-center">
            <div className="relative group text-white bg-dark p-6 rounded-lg border border-neutral-700 w-88 h-76 flex flex-col overflow-hidden">
                <img src="../images/hero_bg_3.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex flex-col z-10">
                    <div className="flex">
                        <img src={img} alt="user" />
                        <div className="flex flex-col ml-2 text-[16px]">
                            <h1 className="font-bold mt-2">sadie Berlin</h1>
                            <p className='text-indigo-700'>@sadiieberlin00</p>
                        </div>
                    </div>
                    <h1 className='font-bold mt-5 text-[18px]'>Incredibly useful product</h1>
                    <p className="mt-4 text-[16px] group-hover:opacity-0 transition-opacity duration-500">We proudly employ the Industries most dedicated individuals, who are all professionally trained to Roofin service standards.</p>
                    <div className="flex mt-3 gap-2">
                        <i class="fa-solid fa-star text-red-400"></i>
                        <i class="fa-solid fa-star text-red-400"></i>
                        <i class="fa-solid fa-star text-red-400"></i>
                        <i class="fa-solid fa-star text-red-400"></i>
                        <i class="fa-solid fa-star text-white"></i>
                    </div>
                    <div className="mt-22 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="rounded-full size-13 border border-neutral-700 flex items-center justify-center bg-gradient-to-r from-red-500  via-pink-400 to-purple-400">
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewBox
