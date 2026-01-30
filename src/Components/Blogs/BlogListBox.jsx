import React from 'react'

function BlogListBox({img}) {
    return (
        <div className="border gradient border-neutral-700 rounded-lg w-136 p-4">
            <img src={img} alt="" />
            <h1 className="mt-3 text-2xl font-bold">Palworld, the Unique blend of Creature Captivated Players Worldwide.</h1>
            <p className='mt-4 text-[18px]'>Over the past months, Palworld, quickly gathered a following before becoming one of the most successful indie video games of all time.</p>
            <div className="flex gap-4 items-center my-6">
                <img src="./images/blog/blog_abatar.webp" alt="" />
                <div className='text-[14px] text-neutral-500 font-bold'>
                    <h1>Saiful Talukdar</h1>
                    <div className="flex gap-3 font-medium items-center justify-between">
                        <p>In Slack</p>
                        <span className='bg-neutral-500 size-1.5 rounded-full mt-1'></span>
                        <p>8 min read</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogListBox
