import React from 'react'

function Company() {
    return (
        <div className='bg-dark text-white'>
            <div className="px-30 pt-30">
                <div className="grid grid-cols-2 gap-8 justify-center">
                    <div className='flex'>
                        <img src="./images/home/abc_company.webp" alt="" className='opacity-70 relative' />
                        <img src="./images/home/abc_company_1.webp" alt="" className='absolute ml-55 mt-3' />
                        <img src="./images/home/abc_company_2.webp" alt="" className='absolute mt-80 -ml-40' />
                    </div>
                    <div className='flex flex-col gap-5 ml-22'>
                        <div className="bg-neutral-800 border border-neutral-700 text-red-400 px-5 py-2 rounded-full flex justify-center items-center w-50">
                            <span class="material-icons mr-2" style={{ fontSize: "18px" }}>grid_view</span>About Company
                        </div>
                        <h1 className='text-5xl font-bold leading-tight'>Why We are the Best Server?</h1>
                        <p className="mt-5">Our main focus is on quality and making sure you have everything you need to succeed. It's like buying a car and seeing all the tick boxes for additional features, except all of these boxes are ticked and included for free! That's just how we roll.</p>
                        <div className="flex justify-between gap-5 items-center">
                            <div className="border border-neutral-600/20 rounded-xl bg-neutral-700/20 p-6 w-55">
                                <img src="./images/home/counter_1.webp" alt="" className='bg-neutral-700/20 rounded-xl'/>
                                <h1 className="text-4xl font-bold mt-7">5600+</h1>
                                <p className="mt-6 text-neutral-400 max-w-sm">Servers <br /> Currently Hosted</p>
                            </div>
                            <div className="border border-neutral-600/20 rounded-xl bg-neutral-700/20 p-6 w-55">
                                <img src="./images/home/counter_2.webp" alt="" className='bg-neutral-700/20 rounded-xl'/>
                                <h1 className="text-4xl font-bold mt-7">2600+</h1>
                                <p className="mt-6 text-neutral-400 max-w-sm">Clients Around the Globe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company
