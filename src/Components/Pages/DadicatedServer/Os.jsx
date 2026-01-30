import React from 'react'

function Os() {
    return (
        <div className='bg-dark text-white'>
            <div className="px-30 pb-30">
                <div className="border rounded-xl border-neutral-600 p-8">
                    <div className="flex justify-between items-center">
                        <h1 className='text-5xl max-w-xl font-bold leading-tight mt-10'>Operating System Redefining Connectivity</h1>
                        <div>
                            <p className='max-w-[35ch]'>Whether you’re taming ferocious building epic bases, or battling rival tribes.</p>
                            <div className="group inline-block mt-4 text-[14px]">
                                <button className="relative overflow-hidden bg-neutral-800 rounded-full px-5 py-2.5 text-white border border-neutral-500 font-semibold hover:bg-neutral-800">
                                    <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10"> Explore Our Integration </span>
                                    <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-8"> Explore Our Integration </span></a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex justify-between items-center overflow-hidden">
                            <div className="flex animate-scroll-left gap-8">
                                {[
                                    "/images/pages/os_icon_6.webp",
                                    "/images/pages/os_icon_1.webp",
                                    "/images/pages/os_icon_3.webp",
                                    "/images/pages/os_icon_4.webp",
                                    "/images/pages/os_icon_5.webp",
                                ].map((src, i) => (
                                    <img key={i} src={src} alt="" className="h-18" />
                                ))}
                                {[
                                    "/images/pages/os_icon_6.webp",
                                    "/images/pages/os_icon_1.webp",
                                    "/images/pages/os_icon_3.webp",
                                    "/images/pages/os_icon_4.webp",
                                    "/images/pages/os_icon_5.webp",
                                ].map((src, i) => (
                                    <img key={`dup-${i}`} src={src} alt="" className="h-18" />
                                ))}
                                {[
                                    "/images/pages/os_icon_6.webp",
                                    "/images/pages/os_icon_1.webp",
                                    "/images/pages/os_icon_3.webp",
                                    "/images/pages/os_icon_4.webp",
                                    "/images/pages/os_icon_5.webp",
                                ].map((src, i) => (
                                    <img key={`dup-${i}`} src={src} alt="" className="h-18" />
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between items-center overflow-hidden mt-4">
                            <div className="flex animate-scroll-right gap-8">
                                {[
                                    "/images/pages/os2_icon_6.webp",
                                    "/images/pages/os2_icon_7.webp",
                                    "/images/pages/os2_icon_1.webp",
                                    "/images/pages/os2_icon_2.webp",
                                    "/images/pages/os2_icon_3.webp",
                                    "/images/pages/os2_icon_4.webp",
                                    "/images/pages/os2_icon_5.webp",
                                ].map((src, i) => (
                                    <img key={`dup-${i}`} src={src} alt="" className="h-25" />
                                ))}
                                {[
                                    "/images/pages/os2_icon_6.webp",
                                    "/images/pages/os2_icon_7.webp",
                                    "/images/pages/os2_icon_1.webp",
                                    "/images/pages/os2_icon_2.webp",
                                    "/images/pages/os2_icon_3.webp",
                                    "/images/pages/os2_icon_4.webp",
                                    "/images/pages/os2_icon_5.webp",
                                ].map((src, i) => (
                                    <img key={`dup-${i}`} src={src} alt="" className="h-25" />
                                ))}
                                {[
                                    "/images/pages/os2_icon_6.webp",
                                    "/images/pages/os2_icon_7.webp",
                                    "/images/pages/os2_icon_1.webp",
                                    "/images/pages/os2_icon_2.webp",
                                    "/images/pages/os2_icon_3.webp",
                                    "/images/pages/os2_icon_4.webp",
                                    "/images/pages/os2_icon_5.webp",
                                ].map((src, i) => (
                                    <img key={`dup-${i}`} src={src} alt="" className="h-25" />
                                ))}
                                {[
                                    "/images/pages/os2_icon_6.webp",
                                    "/images/pages/os2_icon_7.webp",
                                    "/images/pages/os2_icon_1.webp",
                                    "/images/pages/os2_icon_2.webp",
                                    "/images/pages/os2_icon_3.webp",
                                    "/images/pages/os2_icon_4.webp",
                                    "/images/pages/os2_icon_5.webp",
                                ].map((src, i) => (
                                    <img key={`dup-${i}`} src={src} alt="" className="h-25" />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Os
