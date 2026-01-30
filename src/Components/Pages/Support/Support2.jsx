import React from 'react'

function Support2({ img }) {
    return (
        <div className="group border border-neutral-600 bg-dark p-3 w-88 rounded-3xl">
            <div className="flex justify-between items-center gap-4">
                <img src={img} alt="" />
                <div>
                    <h3 className='text-2xl font-bold mb-2'>Open Ticket</h3>
                    <p className='font-medium'>Open a support ticket for services related issues.</p>
                    <div className="-mt-4 -mr-3 -mb-3 flex justify-end">
                        <button className="bg-dark border border-neutral-600 rounded-full px-3 py-2.5 cursor-pointer group-hover:bg-neutral-600 transition group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-purple-500">
                            <a href="/contact"><i className="fa-solid fa-arrow-right text-white"></i></a>   
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support2
