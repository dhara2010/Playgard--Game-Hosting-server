import React from 'react'
import HeroBox from './HeroBox'

function Hero() {
    return (
        <div className='-mt-200 text-white gradient'>
            <main className="px-4 lg:px-30">
                <div className="h-[100vh] flex flex-col lg:flex-row justify-center items-center">
                    <h1 className='text-3xl lg:text-7xl font-bold max-w-lg leading-snug'>Get in touch with us today!</h1>
                    <p className='max-w-md text-center'>Get in touch with our sales and support teams for demos, onboarding support, or product questions.</p>
                </div>
                <div className="flex flex-wrap justify-between items-center -mt-30 my-10 gap-4 ">
                    <HeroBox title={'Message Us'} p={'support@taskify.com'}/>
                    <HeroBox title={'Call Us'} p={'+1 (456) 000-0000'}/>
                    <HeroBox title={'Office Address'} p={'Montreal, Canada, 110 Notre-Dame St W'}/>
                </div>
                <div className="flex flex-wrap justify-between items-center gap-4">
                    <div className="border border-neutral-600 bg-neutral-900/20 rounded-xl p-3 lg:p-6 lg:ml-23 w-80 lg:w-113">
                        <div className="flex gap-4">
                            <div className="bg-neutral-800/20 border-neutral-500 border rounded-xl p-3">
                                <img src="./images/contact/c_mail.webp" alt="" />
                            </div>
                            <div className='font-bold'>
                               <h1 className='text-xl lg:text-2xl'>Open a Ticket</h1>
                               <p className='mt-2'>Billing System</p>
                            </div>
                        </div>
                    </div>
                    <div className="border border-neutral-600 bg-neutral-900/20 rounded-xl p-3 lg:p-6 lg:mr-23 w-80 lg:w-113">
                        <div className="flex gap-4">
                            <div className="bg-neutral-800/20 border-neutral-500 border rounded-xl p-3">
                                <img src="./images/contact/c_dis.webp" alt="" />
                            </div>
                            <div className='font-bold'>
                               <h1 className='text-xl lg:text-2xl'>Connect On Discord</h1>
                               <p className='mt-2'>Discord</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
            </main>
        </div>
    )
}

export default Hero
