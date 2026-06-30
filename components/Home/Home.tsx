import React from 'react'
import Hero from './Hero/Hero'
import AboutClub from './About/AboutClub'
import ClubProject from './Projects/ClubProject'
import QuestionAnswer from './FAQ/QuestionAnswer'

const Home = () => {
  return ( 
    <div className='overflow-hidden'>
      <Hero/>
      <AboutClub/>
      <ClubProject/>
      <QuestionAnswer/>
    </div>
  )
}

export default Home
