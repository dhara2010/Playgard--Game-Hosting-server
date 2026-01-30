import React from 'react'

function BillingBox({text}) {
    return (
        <div className="border border-neutral-500 rounded-xl p-6 text-center bg-neutral-800/10">
            <h3 className="text-lg font-bold mb-2">{text}</h3>
            <div className="flex justify-center items-center space-x-2 mb-1">
                <span className="line-through text-gray-400 text-sm">$30.00</span>
                <span className="bg-red-900 text-red-400 text-xs px-2 py-0.5 rounded-md">Save 25%</span>
            </div>
            <p className="text-lg font-semibold">$19.50<span className="text-sm">/mo</span></p>
            <button className="mt-4 px-6 py-2 rounded-full border border-neutral-700 bg-gradient-to-l from-purple-500/20 to-red-400/30"><a href="/gamedetails2">Select</a></button>
        </div>
    )
}

export default BillingBox
