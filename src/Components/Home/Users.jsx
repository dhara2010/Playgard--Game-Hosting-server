import React from 'react'

function Users() {
    return (
        <div className="bg-dark min-h-[800px] px-10 py-20 -mt-125">
            <div className="grid grid-cols-2 gap-10 items-center mt-30 mx-20">
                <div>
                    <img src="./images/about_img.webp" alt="About Us" className="rounded-xl" />
                </div>
                <div className="text-white">
                    <div className="text-red-400 flex items-center">
                        <span className="material-icons mr-2 text-sm" style={{ fontSize: "18px" }} >grid_view </span>
                        <p className="text-sm font-bold">We are playgard</p>
                    </div>
                    <h1 className="text-5xl max-w-2xl leading-tight font-bold mt-4"> We Have teams that Can Provide Work.</h1>
                    <p className="text-gray-300 max-w-xl mt-5">Our Assassins Creed Server Hosting plans begin at <span className='text-red-400'>$11.99</span> and are the perfect servers.The quality of your website is vital in business. </p>
                    <div className="flex justify-between items-center gap-4 mt-7">
                        <img src="./images/ablist_1.webp" alt="" />
                        <div>
                            <h1 className='font-bold text-2xl mb-1'>Low Latency Server</h1>
                            <p>We offer game server hosting at 20 locations worldwide so that you can have a low latency .</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-4 mt-7">
                        <img src="./images/ablist_2.webp" alt="" />
                        <div>
                            <h1 className='font-bold text-2xl mb-1'>MoDpack Installation</h1>
                            <p>Our Minecraft hosting plans include automatic modpack installation. It’s easy to install hundreds.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users
