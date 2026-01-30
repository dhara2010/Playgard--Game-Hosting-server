import React from 'react'
import Hero from './Hero'
import Config from './Config'
import Host from './Host'
import GameHosting from './GameHosting'
import Review from '../../Home/Review'
import Answer from '../../Home/Answer'
import Os from './Os'
import WebHosting from './WebHosting'

function DadicatedServer() {
  return (
    <div>
        <Hero/>
        <Config/>
        <Host/>
        <GameHosting/>
        <WebHosting/>
        <Os/>
        <Review/>
        <Answer/>
    </div>
  )
}

export default DadicatedServer
