import BodyCarousel from '@/components/Body/BodyCarousel'
import BodyToprate from '@/components/Body/BodyToprate'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col'>
    <div className='ps-6 flex flex-col items-center'>
        <h1 className='uppercase text-5xl font-bold text-green '>Movie </h1>
        <h1 className='uppercase text-5xl font-bold text-lime-600'>Collection</h1>
      </div>
        <BodyCarousel/>
        <BodyToprate/>
    </div>
  )
}

export default page