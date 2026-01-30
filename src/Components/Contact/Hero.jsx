import React from 'react'
import HeroBox from './HeroBox'

function Hero() {
    return (
        <div className='-mt-200 text-white gradient'>
            <main className="pt-50 px-30">
                <div className="h-[100vh] flex">
                    <h1 className='text-7xl font-bold max-w-lg leading-snug'>Get in touch with us today!</h1>
                    <p className='mt-30 max-w-md ml-42'>Get in touch with our sales and support teams for demos, onboarding support, or product questions.</p>
                </div>
                <div className="flex justify-between items-center -mt-100 mb-10">
                    <HeroBox title={'Message Us'} p={'support@taskify.com'}/>
                    <HeroBox title={'Call Us'} p={'+1 (456) 000-0000'}/>
                    <HeroBox title={'Office Address'} p={'Montreal, Canada, 110 Notre-Dame St W'}/>
                </div>
                <div className="flex justify-between items-center">
                    <div className="border border-neutral-600 bg-neutral-900/20 rounded-xl p-6 ml-23 w-113">
                        <div className="flex gap-4">
                            <div className="bg-neutral-800/20 border-neutral-500 border rounded-xl p-3">
                                <img src="./images/contact/c_mail.webp" alt="" />
                            </div>
                            <div className='font-bold'>
                               <h1 className='text-2xl'>Open a Ticket</h1>
                               <p className='mt-2'>Billing System</p>
                            </div>
                        </div>
                    </div>
                    <div className="border border-neutral-600 bg-neutral-900/20 rounded-xl p-6 mr-23 w-113">
                        <div className="flex gap-4">
                            <div className="bg-neutral-800/20 border-neutral-500 border rounded-xl p-3">
                                <img src="./images/contact/c_dis.webp" alt="" />
                            </div>
                            <div className='font-bold'>
                               <h1 className='text-2xl'>Connect On Discord</h1>
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
