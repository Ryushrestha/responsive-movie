import React from 'react'
import logo from '../images/logo.png'
import Image from 'next/image'

const Footersection = () => {
  return (
    <div className='p-4  bg-cream  text-white'>
            <Image className='h-10 sm:h-16 md:h-20 w-auto ' src={logo} alt='Logo'/>
    </div>
  )
}

export default Footersection