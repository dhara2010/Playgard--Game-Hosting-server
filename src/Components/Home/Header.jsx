import React from 'react'

function Header() {
    return (
        <div className="fixed top-0 flex z-50 bg-neutral-700 w-full justify-between px-4 py-3 h-[54px]">
            <div className="flex items-center text-white">
                <img src="../images/logo.png" alt="logo" className="h-6 w-6" />
                <span className="font-bold text-lg">
                    evanto<span className="font-normal">market</span>
                </span>
            </div>
            <div className="flex">
                <button className="bg-lime-500 px-4 h-[30px] rounded-lg hover:bg-lime-600 text-white">Buy now</button>
            </div>
        </div>
    )
}

export default Header
