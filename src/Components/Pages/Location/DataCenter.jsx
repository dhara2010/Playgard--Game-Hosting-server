import React, { useState } from 'react'
import All from './All'
import NorthAmerica from './NorthAmerica'
import Europe from './Europe'
import Asia from './Asia'
import Australia from './Australia'
import Africa from './Africa'

function DataCenter() {
    const [activeTab, setActiveTab] = useState('all')
    return (
        <div className='bg-dark'>
            <div className="px-30 pt-40">
                <h1 className='text-5xl font-bold'>Nexcess Data Centers</h1>
                <p className='max-w-220 mt-2'>Easily install and manage your ARK server's Steam Workshop mods (in one click!) with our easy-to-use management interface.</p>
                <div className='mt-10'>
                    <ul className='flex gap-5 text-[18px]'>
                        <li className={activeTab === 'all' ? 'gradient-text pb-1 cursor-pointer' : 'cursor-pointer'} onClick={() => setActiveTab('all')}>All Locations</li>
                        <li className={activeTab === 'northamerica' ? 'gradient-text pb-1 cursor-pointer' : 'cursor-pointer'} onClick={() => setActiveTab('northamerica')}>North America</li>
                        <li className={activeTab === 'europe' ? 'gradient-text pb-1 cursor-pointer' : 'cursor-pointer'} onClick={() => setActiveTab('europe')}>Europe</li>
                        <li className={activeTab === 'asia' ? 'gradient-text pb-1 cursor-pointer' : 'cursor-pointer'} onClick={() => setActiveTab('asia')}>Asia</li>
                        <li className={activeTab === 'australia' ? 'gradient-text pb-1 cursor-pointer' : 'cursor-pointer'} onClick={() => setActiveTab('australia')}>Australia</li>
                        <li className={activeTab === 'africa' ? 'gradient-text pb-1 cursor-pointer' : 'cursor-pointer'} onClick={() => setActiveTab('africa')}>Africa</li>
                    </ul>
                    <div mt-5>
                        {activeTab === 'all' && <All />}
                        {activeTab === 'northamerica' && <NorthAmerica />}
                        {activeTab === 'europe' && <Europe />}
                        {activeTab === 'asia' && <Asia />}
                        {activeTab === 'australia' && <Australia />}
                        {activeTab === 'africa' && <Africa />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataCenter
