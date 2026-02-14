import React from 'react'
import PricingBox from './PricingBox'

function Pricing() {
    return (
        <div className='bg-dark min-h-[900px] text-white pt-30'>
            <div className="flex flex-col justify-center items-center">
                <div className="text-red-400 px-6 py-2 rounded-full flex justify-center items-center">
                    <span class="material-icons mr-2" style={{ fontSize: "18px" }}>grid_view</span>
                    <p>Pricing</p>
                </div>
                <h1 className="text-white tet-3xl lg:text-5xl max-w-3xl text-center font-serif font-bold mt-8">Affordable Hosting plans for every Budget</h1>
            </div>
          <div className="px-4 lg:px-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
             <PricingBox p={"Basic Plan"} title={"Silver Plan"}/>
             <PricingBox p={"Standard Plan"} title={"Business Plan"}/>
             <PricingBox p={"Premium Plan"} title={"Devlopment Plan"}/>
          </div>
        </div>
    )
}

export default Pricing
