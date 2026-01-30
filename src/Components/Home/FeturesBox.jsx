import React from 'react'

function FeturesBox({ img, title, text }) {
    return (
        <div className=''>
            <div className="flex justify-between items-center">
                <div className="relative group text-white bg-dark p-4 rounded-lg border border-neutral-700 w-75 h-60 flex flex-col items-center justify-center text-center overflow-hidden">
                    <img src="./images/hero_bg_3.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex flex-col items-center justify-center z-10">
                        <img src={img} alt="" />
                        <h1 className="text-2xl font-bold mt-2">{title}</h1>
                        <p className="mt-4 text-[16px] group-hover:opacity-0 transition-opacity duration-500">{text}</p>
                        <div className="mt-22 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <dbutton className="rounded-full size-13 border border-neutral-700 flex items-center justify-center bg-gradient-to-r from-red-500  via-pink-400 to-purple-400">
                               <a href="/gamehosting"><i className="fa-solid fa-arrow-right"></i></a> 
                            </dbutton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeturesBox
