"use client"
import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const HeroSection = () => {
  return (
    <div className='mt-4 h-96 justify-between flex flex-col md:flex-row'>
       
        <HeroLeft/>
       
      
        <HeroRight/>
       
    </div>
  )
}

export default HeroSection