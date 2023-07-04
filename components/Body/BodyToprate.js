"use client"
import { getTopRatedMovies } from '@/service/service.axios'
import React, { useEffect, useState } from 'react'

const BodyToprate = () => {
    const [popular,setPopular] = useState([])

    const getToprated =async () =>{
      const data = await getTopRatedMovies()
      const response = data.results
      setPopular(response)
    }
    useEffect(()=>{
      getToprated()
    },[])


  return (
    <div className='flex flex-col'>
    <span className='ps-6 flex flex-row bg-gradient-to-r from-green to-transparent w-40 gap-4'>
    <h1 className='uppercase text-3xl font-bold text-white '>Upcoming </h1>
    <h1 className='uppercase text-3xl font-bold text-green'>Movies</h1>
  </span>
  <div className='flex flex-row flex-wrap gap-4 justify-around'>
    {popular && popular.map((movies,index)=>{
        return(
            <div className='flex flex-col bg-royalgreen bg-opacity-40 rounded-md shadow-md mt-5 w-52 h-64 p-2' key={index}>
            <div className='w-full h-full object-cover overflow-hidden'>
                <img className='object-cover ' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movies.poster_path}`} />
            </div>
            <span className='h-2/4 text-white'>
                <p className='font-semibold text-base line-clamp-2'>{movies.original_title}</p>
                <p>{movies.release_date}</p>
            </span>
        </div>
        )
    })}
</div>
</div>
  )
}

export default BodyToprate