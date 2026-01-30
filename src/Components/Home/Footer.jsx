import React from 'react';
import { Link } from "react-router-dom";

function Footer() {

    return (
        <div className="bg-dark text-white py-10">
            <div className="px-30">
                <div className="border border-neutral-700 rounded-lg p-12">
                    <div className="grid grid-cols-4 gap-8">
                        <div className='w-80 p-2'>
                            <img src="./images/footer_logo.webp" alt="Footer Logo" className="mb-4" />
                            <p className="font-semibold mb-4">
                                We’re always in search for talented and motivated people. Don’t be shy, introduce yourself!
                                Subscribe for news, exclusive offers & exciting updates delivered right to your inbox!
                            </p>
                            <p className="mb-2 font-semibold mt-6">Social Media:</p>
                            <div className="flex gap-4">
                                <div className='rounded-full size-10 bg-neutral-700 flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-gradient-to-b hover:to-red-400 hover:from-purple-700'>
                                    <a href="https://www.facebook.com/" target='_blank'><i className='fa-brands fa-facebook'></i></a>
                                </div>
                                <div className='rounded-full size-10 bg-neutral-700 flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-gradient-to-b hover:to-red-400 hover:from-purple-700'>
                                    <a href="https://www.instagram.com/" target='_blank'> <i className='fa-brands fa-instagram'></i></a>
                                </div>
                                <div className='rounded-full size-10 bg-neutral-700 flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-gradient-to-b hover:to-red-400 hover:from-purple-700'>
                                    <a href="https://www.twitter.com/" target='_blank'><i className='fa-brands fa-twitter'></i></a>
                                </div>
                            </div>
                        </div>
                        <div className='ml-16'>
                            <h1 className="font-bold mb-2">Products & Solutions</h1>
                            <hr className='mb-8 w-13 bg-gradient-to-b to-red-400 from-purple-400 h-0.5 border-0 ' />
                            <ul className="space-y-2">
                                <li><Link to='/' > Game Server</Link></li>
                                <li><Link to='/gamehosting' > Game Hosting </Link></li>
                                <li><Link to='./gameserverhq'>Hosting HQ</Link></li>
                                <li><Link to='/gamehosting' >Hosting Slider</Link></li>
                                <li><Link to='/minecraftserver' > Minecraft-server</Link></li>
                                <li><Link to='/dadicatedserver' >Dadicated-server</Link></li>
                            </ul>
                        </div>
                        <div className='ml-16'>
                            <h1 className="font-bold mb-2">Playgard Feature</h1>
                            <hr className='mb-8 w-13 bg-gradient-to-b to-red-400 from-purple-400 h-0.5 border-0 ' />
                            <ul className="space-y-2">
                                <li><Link to='/minecraftserver' >Pricing Plans</Link></li>
                                <li><Link to='/minecraftserver' >Pricing Table</Link></li>
                                <li><Link to='./gamedetails' >Game Info</Link></li>
                                <li><Link to='./gamedetails2' >Game Info 2</Link></li>
                                <li><Link to='./location' >Location</Link></li>
                                <li><Link to='./support' >Support</Link></li>
                            </ul>
                        </div>
                        <div className='ml-16'>
                            <h1 className="font-bold mb-2">Company Links</h1>
                            <hr className='mb-8 w-13 bg-gradient-to-b to-red-400 from-purple-400 h-0.5 border-0 ' />
                            <ul className="space-y-2">
                                <li><Link to='/about' >About Us</Link></li>
                                <li><Link to='/contact' >Careers</Link></li>
                                <li><Link to='/blog' >Blogs</Link></li>
                                <li><Link to='/blogdetails' >Blogs Details</Link></li>
                                <li><Link to='/contact' >Contact Us</Link></li>
                                <li><Link to='/location' >Location</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-6">
                    <div>
                        <p className='text-[18px]'>© 2022 Hostingard. All rights reserved</p>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <p className='text-[18px] mr-2'>We Accept Payment Gateway</p>
                        <img src="../images/payment_1.webp" alt="" />
                        <img src="../images/payment_2.webp" alt="" />
                        <img src="../images/payment_3.webp" alt="" />
                        <img src="../images/payment_4.webp" alt="" />
                        <img src="../images/payment_5.webp" alt="" />
                        <img src="../images/payment_6.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
