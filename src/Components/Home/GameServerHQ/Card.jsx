import React from 'react'

function Card({ img }) {
    return (
        <div className="flex flex-col items-center text-center w-full max-w-md mx-auto">
            <img src={img} alt="Slide" className="w-full h-100 mx-auto mt-22" />
            <div className="mt-7">
                <div className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 p-4 rounded-xl h-50">
                    <h1 className='text-xl font-bold'>Assassins Creed Valhalla</h1>
                    <p className='mt-4'>Our Assassins Creed Server Hosting plans begin at $11.99 are the perfect servers for you.</p>
                    <div className="flex items-center justify-center mt-8">
                        <button className="flex items-center justify-center bg-white rounded-full w-12 h-12 shadow-lg hover:scale-110 transition-transform duration-300">
                           <a href="/gamedetails"><i className="fa-solid fa-arrow-right text-black text-lg"></i></a>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card
