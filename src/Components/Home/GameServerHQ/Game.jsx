import React from 'react'

function Game() {
    const row1 = [
    "./images/home/trgame_2.webp",
    "./images/home/trgame_3.webp",
    "./images/home/trgame_4.webp",
    "./images/home/trgame_5.webp",
  ];

  const row2 = [
    "./images/home/trgame_7.webp",
    "./images/home/trgame_8.webp",
    "./images/home/trgame_9.webp",
    "./images/home/trgame_10.webp",
  ];
    return (
        <div className='bg-dark text-white'>
            <div className="px-30 pt-30">
                <div className="bg-neutral-800 border border-neutral-700 px-3 py-2 rounded-full flex justify-center items-center w-70">
                    <span className="material-icons mr-2" style={{ fontSize: "18px" }}>grid_view</span>Reliable & Affordable Servers
                </div>
                <h1 className="text-5xl font-bold max-w-2xl leading-tight mt-4">Discover Popular And Trending Games</h1>
            </div>
            <div className="overflow-hidden whitespace-nowrap w-full mt-10">
                <div className="flex animate-scroll-right">
                    {[...row1, ...row1, ...row1, ...row1,].map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`slide-${index}`}
                            className="mx-4 inline-block border-8 border-neutral-900 rounded-2xl"
                        />
                    ))}
                </div>
            </div>

            <div className="overflow-hidden whitespace-nowrap w-full mt-10">
                <div className="flex animate-scroll-left2">
                    {[...row2, ...row2, ...row2, ...row2, ...row2].map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`slide-${index}`}
                            className="mx-4 inline-block border-8 border-neutral-900 rounded-2xl"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Game
