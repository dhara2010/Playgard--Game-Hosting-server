import React from 'react'

function TeamBox({img}) {
    return (
        <div className="group relative border border-neutral-600 bg-transparent rounded-xl p-7 text-center">
            <div className="absolute mt-46 right-1/4 translate-x-1/2 group/plus">
                <div className="relative flex flex-col items-center space-y-2"></div>
                <div className="absolute bottom-12 flex flex-col items-center space-y-2 opacity-0 translate-y-4 transition-all duration-500 group-hover/plus:opacity-100 group-hover/plus:translate-y-0">
                    <a href="https://www.facebook.com" target='_blank' className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white hover:scale-110 transition" ><i className="fab fa-facebook-f"></i></a>
                    <a href="https://x.com" target='_blank'  className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white hover:scale-110 transition"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com" target='_blank'  className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white hover:scale-110 transition"><i className="fab fa-instagram"></i></a>
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md transform transition-all duration-500 ease-in-out ">
                    <span className='text-2xl'>+</span>
                </button>
            </div>
            <img src={img} alt="" className='w-50 transition-all duration-500 ease-in-out group-hover:rounded-full' />
            <h1 className='mt-4 font-bold'>Harry Brook</h1>
            <p className='text-neutral-300 font-semibold text-[14px]'>Web Developer</p>
        </div>
    )
}

export default TeamBox
