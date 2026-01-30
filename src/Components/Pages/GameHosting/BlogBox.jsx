import React from 'react'

function BlogBox({ img }) {
    return (
        <div className="group border border-neutral-600 bg-black/10 p-5 rounded-lg">
            <div className="overflow-hidden rounded-lg">
                <img src={img} alt="" className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110" />
            </div>
            <p className='flex items-center text-neutral-500 text-[14px] mt-4'><span className='inline-block bg-neutral-400 h-1.5 w-1.5 rounded-full border border-neutral-600 mr-3'></span>Saiful Talukdar<span className='inline-block bg-neutral-400 h-1.5 w-1.5 rounded-full border border-neutral-600 mx-3'></span>4 min read</p>
            <h4 className='text-xl font-bold mt-5'>What is cPanel? Complete Guide To Master The Control Panel</h4>
            <div className="group/button inline-block mt-5 text-sm">
                <button className="relative overflow-hidden bg-neutral-600 rounded-full px-5 py-2.5 text-white font-semibold hover:bg-neutral-700">
                    <a href="/contact"><span className="block transition-transform duration-300 group-hover/button:-translate-y-10"> Get Started </span>
                    <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover/button:-translate-y-8"> Get Started </span></a>
                </button>
            </div>
        </div>
    )
}

export default BlogBox
