import React from 'react'
import Hero from './Hero'
import Host from '../DadicatedServer/Host'
import Ark from '../GameDetails-2/Ark'
import GameHosting2 from '../DadicatedServer/GameHosting'
import GameHosting from '../GameDetails-2/GameHosting'
import World from '../GameDetails-2/World'
import Answer from '../../Home/Answer'
import Review from '../../Home/Review'

function GameDetails() {
  return (
    <div>
      <Hero/>
      <Host/>
      <Ark/>
      <GameHosting/>
      <GameHosting2/>
     <div className="-mt-20">
         <World/>
     </div>
      <Review/>
      <Answer/>
    </div>
  )
}

export default GameDetails
