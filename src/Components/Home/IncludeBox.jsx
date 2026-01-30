import React from 'react'

function IncludeBox({ img, title }) {
    return (
        <div>
            <div className="w-90 h-70 bg-dark border rounded-lg border-neutral-700 p-8 flex flex-col items-center">
                <div className="w-36 h-36 rounded-full overflow-hidden">
                    <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-140" />
                </div>
                <h1 className='text-xl font-bold mt-6'>{title}</h1>
                <p className='text-[16px] font-medium'>Starting at <span className='text-red-400 text-[17px]'>$32.00</span>/month</p>
            </div>
        </div>
    )
}

export default IncludeBox
