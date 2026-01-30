import React, { useState } from 'react'
import NorthAmerica from './NorthAmerica'
import Europe from './Europe'
import AsiaPacific from './AsiaPacific'
import BillingBox from './BillingBox'

function Location() {
    const [activeTab, setActiveTab] = useState('northamerica')
    return (
        <div className='bg-dark text-white mt-55'>
            <div className="px-30 pt-20">
                <h1 className='font-bold text-xl'>Select a Location</h1>
                <div className='mt-10'>
                    <ul className='flex gap-5 text-[18px]'>
                        <li className={activeTab === 'northamerica' ? 'gradient-text pb-1 cursor-pointer' : 'cursor-pointer'} onClick={() => setActiveTab('northamerica')}>North America</li>
                        <li className={activeTab === 'asiapacific' ? 'gradient-text pb-1 cursor-pointer' : 'cursor-pointer'} onClick={() => setActiveTab('asiapacific')}>Asia Pacific</li>
                        <li className={activeTab === 'europe' ? 'gradient-text pb-1 cursor-pointer' : 'cursor-pointer'} onClick={() => setActiveTab('europe')}>Europe</li>
                    </ul>
                    <div mt-5>
                        {activeTab === 'northamerica' && <NorthAmerica />}
                        {activeTab === 'asiapacific' && <AsiaPacific />}
                        {activeTab === 'europe' && <Europe />}
                    </div>
                </div>
                <div className="mt-18">
                    <h1 className="font-bold text-xl">Billing Cycle</h1>
                    <div className="grid grid-cols-3 gap-6 mt-6">
                        <BillingBox text={'Monthly'}/>
                        <BillingBox text={'Quarterly'}/>
                    </div>
                    <div className="grid grid-cols-3 gap-6 mt-6">
                        <BillingBox text={'Mid Year'}/>
                        <BillingBox text={'Yearly'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location
