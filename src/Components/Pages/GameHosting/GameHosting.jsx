import React from 'react'
import Hero from './Hero'
import TrendinGame from './TrendinGame'
import World from '../GameDetails-2/World'
import GameHosting2 from '../DadicatedServer/GameHosting'
import Hosting from './Hosting'
import ClientExp from './ClientExp'
import Help from './Help'
import Que from './Que'
import Blog from './Blog'

function GameHosting() {
  return (
    <>
      <Hero />
      <TrendinGame />
      <World />
      <GameHosting2 />
      <Hosting />
      <ClientExp />
      <Help />
      <Que/>
      <Blog/>
    </>
  )
}

export default GameHosting
