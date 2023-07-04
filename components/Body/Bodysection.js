import React from 'react'
import BodyCarousel from './BodyCarousel'
import FilterSection from '../Filter/FilterSection'

const Bodysection = () => {
  return (
    <div className='mt-10 w-full my-auto flex flex-col'>
      <div className='ps-6 flex flex-col items-center'>
        <h1 className='uppercase text-5xl font-bold text-green '>Movie </h1>
        <h1 className='uppercase text-5xl font-bold text-lime-600'>Collection</h1>
      </div>
      <BodyCarousel/>
      <button className='bg-gradient-to-r from-green to-lime-800 text-white mx-auto font-semibold rounded-md w-fit px-2 mt-3'>Discover More</button>
      <div className='mt-5'>
      <FilterSection/>
      </div>
    </div>
  )
}

export default Bodysection