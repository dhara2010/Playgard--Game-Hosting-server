import React from 'react'

function Help() {
    return (
        <div className='bg-dark text-white'>
            <div className="px-30 pt-20">
                <div className="relative border border-neutral-600 rounded-2xl h-83">
                    <img src="/images/pages/gdf_bg.webp" alt="" className='h-82.5 w-full' />
                    <div className="absolute inset-0 p-8 flex flex-col justify-center gap-4">
                        <h1 className='text-5xl font-bold'>Need Some help?</h1>
                        <p>Easily install and manage your ARK server's Steam Workshop mods (in one click!) with our easy-to-use management interface.</p>
                        <div className="group inline-block mt-6 text-[14px]">
                            <button className="relative overflow-hidden bg-neutral-800 border border-neutral-600 rounded-full px-5 py-2.5 text-white font-semibold hover:bg-neutral-800">
                                <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10"> View Knowledgebase </span>
                                    <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-8"> View Knowledgebase </span></a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help
