import React from 'react'

function CategoriesBox() {
    return (
        <a href="/contact">
            <div className="border rounded-xl p-3 border-neutral-600 gradient">
                <div className="flex justify-center items-center gap-4">
                    <img src="./images/pages/cat_thumb_1.webp" alt="" />
                    <div>
                        <h1 className='text-2xl font-bold'>MineCraft</h1>
                        <p>General Information & Troubleshooting for Minecraft Issues</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default CategoriesBox
