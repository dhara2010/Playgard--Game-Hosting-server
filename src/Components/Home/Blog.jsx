import React from 'react'
import BlogBox from './BlogBox'

function Blog() {
    return (
        <div className='bg-dark h-200 text-white'>
            <div className="flex flex-col justify-center items-center">
                <div className="text-red-400 px-6 rounded-full flex justify-center items-center">
                    <span class="material-icons mr-2" style={{ fontSize: "18px" }}>grid_view</span>
                    <p>Blog</p>
                </div>
                <h1 className="text-white text-5xl max-w-3xl text-center font-serif font-bold mt-8">Check Back Here Regularly for News Updates</h1>
            </div>
            <div className="px-30">
                <div className="flex justify-between">
                    <BlogBox img='./images/blog_style_4.webp' />
                    <BlogBox img='./images/blog_style_5.webp' />
                    <BlogBox img='./images/blog_style_6.webp' />
                </div>
            </div>
            <div className="flex justify-center items-center mt-8">
                <p className='font-semibold'>We have more Recent Blog for extra knowledge. <span className='gradient-text'>More Blog.</span></p>
            </div>
        </div>
    )
}

export default Blog
