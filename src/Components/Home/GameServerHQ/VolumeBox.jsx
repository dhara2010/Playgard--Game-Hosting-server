import React from 'react'

function VolumeBox({img}) {
    return (
        <div className="border border-neutral-600/20 bg-dark p-6 rounded-xl">
            <h5 className="font-bold">Incredibly useful product</h5>
            <p className='text-neutral-400 mt-4 max-w-[30ch]'>Stellar's user-friendly dashboards have simplified our digital strategy management.</p>
            <div className="flex justify-between items-center mt-8">
                <div className='flex items-center gap-3'>
                    <img src={img} alt="" />
                    <div>
                        <h5 className="text-bold">Fig Nelson</h5>
                        <p className='text-neutral-400'>@fignel_sooon</p>
                    </div>
                </div>
                <div class="w-12 h-12 border border-neutral-500 rounded-full flex items-center justify-center text-blue-400"><i class="fa-brands fa-twitter"></i></div>
            </div>
        </div>
    )
}

export default VolumeBox
