import React from 'react'
import TeamBox from './TeamBox'

function Team() {
    return (
        <div className='bg-dark text-white'>
            <div className="px-30 pt-30 pb-30">
                <div className="flex flex-col text-center gap-4 justify-center items-center">
                    <h4 className='text-5xl font-bold'>Our Awesome Team</h4>
                    <p className='max-w-2xl'>Easily install and manage your ARK server's Steam Workshop mods (in one click!) with our easy-to-use management interface.</p>
                </div>
                <div className="flex justify-between items-center mt-9">
                    <TeamBox img={'./images/pages/team_1.webp'}/>
                    <TeamBox img={'./images/pages/team_2.webp'}/>
                    <TeamBox img={'./images/pages/team_3.webp'}/>
                    <TeamBox img={'./images/pages/team_1.webp'}/>
                </div>
            </div>
        </div>
    )
}

export default Team
