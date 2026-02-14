import React from 'react'
import BlogListBox from './BlogListBox'
import Blog from '../Home/Blog'
import BlogBox from '../Home/BlogBox'
import Page2 from './Page2'

function BlogList() {
    return (
        <>
            <div className='-mt-200 text-white gradient lg:h-262'>
                <main className="pt-50 px-4 lg:px-30">
                    <div className="bg-neutral-800 border border-neutral-700 text-red-400 py-2 rounded-full flex justify-center items-center w-40">
                        <span class="material-icons mr-2" style={{ fontSize: "18px" }}>grid_view</span>Our Blog Page
                    </div>
                    <div className="flex flex-wrap">
                        <h1 className='text-2xl lg:text-7xl font-bold w-170'>Our Latest Articles</h1>
                        <p className='w-75 lg:ml-30 mt-10'>Make informed decisions with confidence. Slate provides you with insights.</p>
                    </div>

                </main>
                <div className="py-12 px-4">
                    <div className="flex flex-wrap md:flex-nowrap gap-4 justify-between lg:justify-center items-center">
                        <BlogListBox img="./images/blog/about_img.webp" />
                        <BlogListBox img="./images/blog/blog_list_2.webp" />
                    </div>
                </div>
            </div>
            <section className='h-20 bg-dark'></section>

            <div className="bg-dark">
                <Page2/>
            </div>
        </>
    )
}

export default BlogList
