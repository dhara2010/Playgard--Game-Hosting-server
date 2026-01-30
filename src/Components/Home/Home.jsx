import React from 'react'
import Users from './Users'
import Server from './Server'
import Fetures from './Fetures'
import Include from './Include'
import Pricing from './Pricing'
import Review from './Review'
import Help from './Help'
import Answer from './Answer'
import Blog from './Blog'
import Hero from './Hero'

function Home() {
  return (
    <div>
      <Hero/>
      <Users/>
      <Server/>
      <Fetures/>
      <Include/>
      <Pricing/>
      <Review/>
      <Help/>
      <Answer/>
      <Blog/>
    </div>
  )
}

export default Home
