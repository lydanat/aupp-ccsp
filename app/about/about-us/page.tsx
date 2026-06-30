import AboutCCSP from '@/components/About/About-us/AboutCCSP'
import AboutMission from '@/components/About/About-us/AboutMission'
import AboutVision from '@/components/About/About-us/AboutVision'
import CarouselSlide from '@/components/About/About-us/CarouselSlide'
import React from 'react'
import { slide } from "@/constant/constant";


const AboutUs = () => {
    return (
    <div className='overflow-hidden'>
      <CarouselSlide slide={slide} title="About CCSP" />
      <AboutCCSP/>
      <AboutMission/>
      <AboutVision/>
    </div>
  )
}

export default AboutUs
