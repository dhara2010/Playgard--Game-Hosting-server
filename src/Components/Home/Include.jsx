import React,{useState} from 'react'
import LatestGame from './LatestGame'
import TrendingGame from './TrendingGame'

function Include() {
    const [activeTab, setActiveTab] = useState('latest')
    
  return (
    <div className='bg-dark min-h-[1700px] text-white'>
       <div className="flex flex-col justify-center items-center">
         <div className="w-50 bg-neutral-800 border border-neutral-700 text-red-400 px-6 py-2 rounded-full flex justify-center items-center">
            <span class="material-icons mr-2" style={{ fontSize: "18px" }}>grid_view</span>
            <p>What's Included?</p>
        </div>
        <h1 className="text-white text-5xl max-w-3xl text-center font-serif font-bold mt-8">Available Games Servers for Rental</h1>
       </div>
       <div className="mt-14 mx-30">
       <div className="flex justify-between text-[20px]">
        <div>
              <ul className='flex gap-4'>
              <li className={activeTab === 'latest' ? 'gradient-text pb-1 cursor-pointer' : 'cursor-pointer'}onClick={() => setActiveTab('latest')}>Latest Games</li>
              <li className={activeTab === 'trending' ? 'gradient-text pb-1 cursor-pointer' : 'cursor-pointer'} onClick={() => setActiveTab('trending')} > Trending Games </li>
            </ul>
        </div>
        <div className='flex justify-center items-center text-[18px] gradient-text'>
            <p><a href="/gamehosting">See All Gaming Server</a></p><i className='fa-solid fa-arrow-right mt-1'></i>
        </div>
       </div>
       <div>
        {activeTab === 'latest' && <LatestGame />}
        {activeTab === 'trending' && <TrendingGame />}
       </div>
       </div>
    </div>
  )
}

export default Include
