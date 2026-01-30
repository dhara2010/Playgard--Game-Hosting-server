import React from 'react'
import FeturesBox from '../../Home/FeturesBox'

function About2() {
    return (
        <div className='bg-dark -mt-50 text-white'>
            <div className="px-30">
                <div className="flex justify-between items-center gap-4 pt-68">
                    <div className="flex-flex-col">
                        <h1 className='text-2xl font-bold'><span className='text-5xl'>45%</span> of User</h1>
                        <p className='mt-4 max-w-[25ch]'>Points of Presence Worldwide Datacenters</p>
                    </div>
                    <div className="flex-flex-col">
                        <h1 className='text-2xl font-bold'><span className='text-5xl'>4k+</span> Game Server</h1>
                        <p className='mt-4 max-w-[25ch]'>Points of Presence Worldwide Datacenters</p>
                    </div>
                    <div className="flex-flex-col">
                        <h1 className='text-2xl font-bold'><span className='text-5xl'>30m</span> Satisfied Customers</h1>
                        <p className='mt-4 max-w-[25ch]'>Points of Presence Worldwide Datacenters</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-30 gap-5 justify-between">
                    <h4 className='text-4xl font-bold'>We've built our business on the Premise of providing Honest, High-Performance Hosting Services for less.</h4>
                    <div className='flex flex-col gap-4 text-[18px]'>
                        <p>At Playgard, we are all gamers and love to play the games we host. We have real experience operating these server platforms for mere entertainment; this translates to levels of understanding and passion that we guarantee you won't be able to find anywhere else.</p>
                        <p>Playgard Ltd. was founded in 2013 and is registered in Canada, with its head office in the National Capital Region of Ottawa, Ontario. Our team comprises highly experienced professionals located across the globe to maintain our tried-and-true 24/7 support operation that has been essential to our success.</p>
                        <p>We strive to maintain a low overhead while adhering to an exceptionally high standard for quality. Our customers enjoy the benefits of having a cost-friendly solution that offers exceptional performance.
                            Playgard Ltd. was founded in 2013 and is registered in Canada, with its head office in the National Capital Region of Ottawa, Ontario. Our team comprises highly experienced professionals located across the globe to maintain our tried-and-true 24/7 support operation that has been essential to our success.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center text-center flex-col mt-30">
                    <h1 className='text-5xl font-bold'>Why Host With Us?</h1>
                    <p className='mt-4 max-w-2xl'>Easily install and manage your ARK server's Steam Workshop mods (in one click!) with our easy-to-use management interface.</p>
                </div>
                <div className="mt-8 grid grid-cols-4 gap-3">
                    <FeturesBox img={'./images/pages/feature_icon_1.webp'} title={'Instant Server Setup'} text={'Our Minecraft hosting plans include automatic modpack installation. It’s easy to install'} />
                    <FeturesBox img={'./images/pages/feature_icon_2.webp'} title={'DDoS Protection'} text={'Our Minecraft hosting plans include automatic modpack installation. It’s easy to install'} />
                    <FeturesBox img={'./images/pages/feature_icon_3.webp'} title={'24/7-365 Support'} text={'Our Minecraft hosting plans include automatic modpack installation. It’s easy to install'} />
                    <FeturesBox img={'./images/pages/feature_icon_4.webp'} title={'Modpack Support'} text={'Our Minecraft hosting plans include automatic modpack installation. It’s easy to install'} />
                </div>
            </div>
        </div>
    )
}

export default About2
