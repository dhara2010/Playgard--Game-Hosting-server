import React from 'react'
import PowerBox from './PowerBox'

function Power() {
    return (
        <div className='bg-dark'>
            <div className="px-30 pt-30">
                <div className="flex flex-col justify-center items-center">
                    <h1 className='text-center text-5xl font-bold'>Power you Can Depend on</h1>
                    <p className='text-center max-w-3xl mt-4 text-[18px]'>We’ve taken great care in designing our buildings, ensuring their security, and planning our network, power cooling infrastructure with full redundancy in mind.</p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-12">
                    <PowerBox img="./images/pages/feature_icon_1.webp" title={'Stability'} text={'Our Tier-4 data centers ensure uninterrupted operation and reliability for your hosting infrastructure.'}/>
                    <PowerBox img="./images/pages/feature_icon_2.webp" title={'Dedicated Experts'} text={'Level 3 technicians on site 24/7 ensure prompt and expert assistance when issues arise.'}/>
                    <PowerBox img="./images/pages/feature_icon_3.webp" title={'Reliability'} text={'Twenty-seven years and 500,000+ customers are proof of our reliable, resilient cloud and hardware services.'}/>
                </div>
            </div>
        </div>
    )
}

export default Power
