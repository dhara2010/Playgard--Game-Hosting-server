import React from 'react'

function Brand({img}) {
    return (
        <div className="group inline-block mt-8">
            <button className="relative overflow-hidden py-4">
                <span className="block transition-transform duration-300 group-hover:-translate-y-12"> <img src={img} alt="Brand" className='opacity-50' /></span>
                <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-12"> <img src={img} alt="Brand" /></span>
            </button>
        </div>
    )
}

export default Brand
