import React from 'react'
import Features from '../components/Features'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import Listings from '../components/Listings'
import { InfoData, InfoDataTwo } from '../data/infoData'
import {SliderDataOne} from '../data/SliderData'

const Home = () => {
    return (
        <>
    <Hero slides={SliderDataOne} />
    <InfoSection {...InfoData} />
    <Listings />
    <Features />
    <InfoSection {...InfoDataTwo} />
        </>
    )
}

export default Home
