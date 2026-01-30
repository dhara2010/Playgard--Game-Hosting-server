import React from 'react'

function BlogBox({img}) {
    return (
        <div className='mt-16'>
            <div className="flex flex-col relative w-88 group overflow-hidden">
                <img src={img} alt="image" className='w-88 h-78 object-cover' />
                <div className='-mt-15 bg-dark p-6 ml-8 w-11/12 transition-all duration-500 ease-in-out origin-right group-hover:w-full group-hover:ml-0'>
                    <h1 className='text-red-400'>Game Hosting</h1>
                    <a href="/blogdetails" className='cursor-pointer'><p className='text-[20px] font-bold'>What is cPanel? Complete Guide Master The Control Panel</p>
                    <div className="flex items-center">
                        <p className='font-semibold mt-4'>Read More <i className='fa-solid fa-arrow-right'></i></p>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BlogBox
