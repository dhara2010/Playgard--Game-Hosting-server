import React from 'react'

function Hero() {
    return (
        <div>
            <div className='-mt-200 text-white gradient'>
                <div className="px-30 pt-50">
                    <div className="flex justify-center items-center flex-col">
                        <div className="bg-neutral-800 border border-neutral-700 text-red-400 py-2 rounded-full flex justify-center items-center w-40">
                            <span class="material-icons mr-2" style={{ fontSize: "18px" }}>grid_view</span>Blog Details
                        </div>
                        <h1 className='font-bold text-5xl max-w-4xl text-center'>Palworld, the Unique blend of Creature Captivated Players Worldwide.</h1>
                        <div className="flex justify-between items-center gap-4 mt-6">
                            <p>Saiful Talukdar</p>
                            <span className='bg-white size-1.5 rounded-full'></span>
                            <p>In Slack</p>
                            <span className='bg-white size-1.5 rounded-full'></span>
                            <p>8 min read</p>
                        </div>
                    </div>
                </div>
            <div className="mt-10 px-55">
                <img src="./images/blog/blog_details_img.webp" alt="" />
            </div>

            </div>
        </div>
    )
}

export default Hero
