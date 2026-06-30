import React from 'react'
import CarouselSlide from '@/components/About/About-us/CarouselSlide'
import AboutTeam from '@/components/About/About-team/AboutTeam'
import { slide } from "@/constant/constant";

const Team = () => {
  return (
    <div className='overflow-hidden'>
      <CarouselSlide slide={slide} title="About Team" />
        <AboutTeam/>
    </div>
  )
}

export default Team
