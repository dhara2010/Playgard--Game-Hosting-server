import React from 'react'
import BlogBox from './BlogBox'

function Blog() {
    return (
        <div className='bg-dark text-white pb-20'>
            <div className="px-30 pt-60">
                <div className="flex flex-col items-center">
                    <h1 className='text-5xl font-bold '>Latest Blog Posts</h1>
                    <p className='mt-4 max-w-[60ch] text-neutral-300 font-semibold text-center'>Become a part of our community and embark on your journey as we guide you through the process of getting started.</p>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-6">
                    <BlogBox img={"/images/pages/blog_1.webp"}/>
                    <BlogBox img={"/images/pages/blog_2.webp"}/>
                    <BlogBox img={"/images/pages/blog_3.webp"}/>
                </div>
            </div>
        </div>
    )
}

export default Blog
