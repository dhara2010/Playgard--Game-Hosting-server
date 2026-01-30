import React from 'react'
import DataCenter from './DataCenter'
import Answer from '../../Home/Answer'
import Power from './Power'

function Location() {
  return (
    <div className='-mt-150 text-white'>
     <div className="px-30 gradient">
         <p className='text-[12px] font-semibold'>Home <i class="fa-solid fa-angle-right"></i> Server Location</p>
         <h1 className='mt-10 text-5xl font-bold'>Location Data Centers</h1>
         <p className="mt-8">100,000+ servers powering customers around the world</p>
     </div>
       <DataCenter/>
        <Power/>
       <Answer/>
    </div>
  )
}

export default Location
