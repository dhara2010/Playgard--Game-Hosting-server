import React from 'react'
import About2 from './About2'
import Host from '../DadicatedServer/Host'
import Hero from './Hero'
import Build from './Build'
import Team from './Team'
import Review from '../../Home/Review'
import Help from './Help'
import Answer from '../../Home/Answer'

function About() {
    return (
        <>
            <Hero />
            <About2 />
            <Build/>
            <Team/>
            <Review/>
            <Help/>
            <Answer/>
        </>
    )
}

export default About
