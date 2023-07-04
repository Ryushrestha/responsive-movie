"use client"
import React from 'react'
import logo from '../images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Search from './Search'
import { HamburgerIcon,CloseIcon } from '@chakra-ui/icons'
import {useState} from 'react'
import { useSession,signIn, signOut } from 'next-auth/react'


const Navbar = () => {
  const {data:session} = useSession
  const [nav,setNav] = useState(false)
  const handleClick = () =>{
      setNav(!nav)
  }
  const handleClose = () =>{
    setNav(!nav)
  }

  return (
    <div className='text-white flex flex-row py-3 justify-between items-center '>
      <Image className='h-10 sm:h-16 md:h-20 w-auto ' src={logo} alt='Logo'/>
      <div>
        <Search/>
      </div>
     
        <div className='hidden md:flex flex-row gap-4 h-full my-auto'>
          <Link href={'/'}>Home</Link>
          <Link href={'/trending'}>Trending</Link>
          {session ? (
            <h1>Hi, {session.user.email}</h1>
          ):(
            <button className='bg-gradient-to-r from-green to-lime-800 text-white font-semibold rounded-md w-fit px-2 hover:from-lime-800 hover:to-green' onClick={()=>signIn()}>Login</button>
          )}
          
        </div>
        <button className='md:hidden mr-4 w-6' onClick={handleClick}>{!nav ?
          <HamburgerIcon className='text-green' boxSize={6}/> : <CloseIcon />}</button>

        <div className={!nav ? 'hidden' : 'absolute flex flex-col  gap-4 h-fit rounded-md shadow-white font-semibold w-1/4 bg-white text-black top-16 right-5 px-3 py-8  '}>
          <Link href={'/'} onClick={handleClose}>Home</Link>
          <Link href={'/trending'} onClick={handleClose}>Trending</Link>
          <button className='bg-gradient-to-r from-green to-lime-800 text-white font-semibold rounded-md w-fit px-2 py-1 hover:from-lime-800 hover:to-green' onClick={handleClose}>Login</button>
        </div>
        
    </div>
  )
}

export default Navbar