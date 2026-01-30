import React from 'react'

function ConfigBox({ img, text }) {
     const gradientClass = img.includes('intel')
    ? 'bg-gradient-to-t from-blue-700 to-blue-400'
    : 'bg-gradient-to-t from-orange-700 to-amber-500';
    return (
        <div className="border rounded-xl border-neutral-600 mt-5">
            <div className="flex justify-between items-center">
                <div className={`relative mx-0 w-[8px] h-41 rounded-l-full ${gradientClass}`}></div>
                <div className="flex flex-col gap-3 -ml-9">
                    <div className="flex justify-between items-center">
                        <img src={img} alt="logo" />
                        <h1 className='font-bold text-[18px] max-w-30'>{text}</h1>
                    </div>
                    <p className='text-[14px] font-semibold text-neutral-300'>2888 Single-Core Score</p>
                    <p className='text-[14px] font-semibold -mt-3 text-neutral-300'>18963 Multi-Core Score</p>
                </div>
                <div className="h-41 w-px bg-neutral-600"></div>
                <div className='text-center text-[14px]'>
                    <p className='text-neutral-600 font-semibold'>CPU</p>
                    <p className='font-semibold'>Ryzen 7900X</p>
                    <p className='text-neutral-600 text-[12px]'>Up to 5.6GHz boost</p>
                </div>
                <div className='text-center text-[14px]'>
                    <p className='text-neutral-600 font-semibold'>CPU</p>
                    <p className='font-semibold'>Ryzen 7900X</p>
                    <p className='text-neutral-600 text-[12px]'>Up to 5.6GHz boost</p>
                </div>
                <div className='text-center text-[14px]'>
                    <p className='text-neutral-600 font-semibold'>CPU</p>
                    <p className='font-semibold'>Ryzen 7900X</p>
                    <p className='text-neutral-600 text-[12px]'>Up to 5.6GHz boost</p>
                </div>
                <div className='text-center text-[20px]'>
                    <h4>$250.00 /mo</h4>
                </div>
                <div className="group inline-block p-6">
                    <button className="relative overflow-hidden bg-neutral-600 rounded-full px-5 py-2 text-white font-semibol hover:bg-gradient-to-r from-red-500  via-pink-400 to-purple-400">
                        <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10">Order Now</span>
                        <span className="absolute left-0 top-9 w-full text-center transition-transform duration-300 group-hover:-translate-y-7">Order Now</span></a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfigBox
