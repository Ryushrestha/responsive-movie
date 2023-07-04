"use client"
import React from 'react'

const HeroLeft = () => {
  return (
   
        <div className='flex flex-col h-full'>
            <div className='bg-gradient-to-r from-black to-green  rounded-e-2xl px-5 py-1 w-fit'>
                <h1 className='text-slate-50 font-semibold text-lg'>Movie Records</h1>
            </div>
            <div className='ps-6 my-auto '>
                <h1 className='uppercase text-7xl font-bold text-green '>Movie is </h1>
                <h1 className='uppercase text-7xl font-bold text-lime-600'>Life Itself</h1>
            </div>
            <div>
                <p className='text-white'>Buy and sell NIFT from the worlds top artists</p>
            </div>
            <a href='/upcoming'><button className='bg-gradient-to-r from-green to-lime-800 text-white font-semibold rounded-md w-fit px-2 mt-3'>Upcoming Movies</button></a>
        </div>
  
  )
}

export default HeroLeft