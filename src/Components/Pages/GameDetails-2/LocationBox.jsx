import React from 'react'

function LocationBox({text}) {
    return (
        <div className="border bg-neutral-800/40 border-neutral-600 p-3 rounded-xl">
            <div className="w-32 rounded flex items-center space-x-2">
                <img src="/images/pages/loc_flg_1.webp" alt="" />
                <h6 class="truncate font-medium mb-0">{text}</h6>
            </div>
        </div>
    )
}

export default LocationBox
