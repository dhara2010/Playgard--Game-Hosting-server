import React from 'react'

function Touch() {
    return (
        <div className='bg-dark text-white'>
            <div className="px-30 pt-30">
                <div className="flex flex-col justify-between items-center">
                    <div className="bg-neutral-800 border border-neutral-700 px-3 py-2 rounded-full flex justify-center items-center w-40">
                        <span className="material-icons mr-2" style={{ fontSize: "18px" }}>grid_view</span>Get In touch
                    </div>
                    <h1 className="text-5xl font-bold mt-5 max-w-3xl leading-tight text-center">Have Questions? Contact us for Expert Advice</h1>
                    <div className="flex justify-center gap-5">
                        <a href="/contact">
                            <div className="border border-indigo-400  bg-indigo-400/10 p-4 rounded-xl mt-5 w-80">
                                <div className="flex items-center gap-2">
                                    <div className="flex justify-center items-center">
                                        <div className="bg-white w-15 h-15 rounded-xl flex justify-center items-center">
                                            <i className="fa-regular fa-envelope gradient-text text-2xl"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='text-xl font-bold'>Open Ticket</h1>
                                        <p className=''>Billing System</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="/contact">
                            <div className="border border-orange-400 bg-orange-400/10 p-4 rounded-xl mt-5 w-80">
                                <div className="flex items-center gap-2">
                                    <div className="flex justify-center items-center">
                                        <div className="bg-white w-15 h-15 rounded-xl flex justify-center items-center">
                                            <i className="fa-brands fa-discord gradient-text text-2xl"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='text-xl font-bold'>Connect On Discord</h1>
                                        <p className=''>Discord</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Touch
