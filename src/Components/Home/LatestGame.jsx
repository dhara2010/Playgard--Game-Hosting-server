import React from 'react'
import IncludeBox from './IncludeBox'

function LatestGame() {
    const content = [
        {
            img: '../images/game/fe_game_1.webp',
            title: 'Palworld',
        },
        {
            img: '../images/game/fe_game_2.webp',
            title: 'Assassins Creed',
        },
        {
            img: '../images/game/fe_game_3.webp',
            title: 'Last Shot',
        },
         {
            img: '../images/game/fe_game_4.webp',
            title: 'Npea3aka3',
        },
        {
            img: '../images/game/fe_game_5.webp',
            title: 'Palworld',
        },
        {
            img: '../images/game/fe_game_6.webp',
            title: 'Palworld',
        }, {
            img: '../images/game/fe_game_7.webp',
            title: 'Call of Duty',
        },
        {
            img: '../images/game/fe_game_8.webp',
            title: 'IGI-2',
        },
        {
            img: '../images/game/fe_game_9.webp',
            title: '7-Days To Die',
        }, {
            img: '../images/game/fe_game_10.webp',
            title: 'Enshrouded',
        }
    ]
  return (
    <div>
      <div className="mt-10 grid grid-cols-3 gap-6">
        {content.map((item,i) =>(
            <IncludeBox key={i} img={item.img} title={item.title}/>
        ))}
       </div>
    </div>
  )
}

export default LatestGame
