"use client"
import { Button, Card, CardBody, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getLatestMovies } from '@/service/service.axios'
import { CloseIcon, ViewIcon } from '@chakra-ui/icons'

const Filter = () => {
    const [movie, setMovie] = useState([])
    const [title, setTitle] = useState('')
    const [startyear, setStartYear] = useState()
    const [endyear, setEndYear] = useState()
    const [limit, setLimit] = useState()
    const [type, setType] = useState("movie")

    const [latestMovies, setLatestMovies] = useState([])
    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }
    const handleClose = () => {
        setNav(!nav)
    }
    const fetchMovie = () => {


        fetch(`https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${title}?year=${startyear}&titleType=${type}&limit=${limit}&endYear=${endyear}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '936bd9fe5fmshd6b04f3a8e8560ap1fbed9jsne6c834ad6ecb',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                setMovie(data.results)
            })

    }


    useEffect(() => {
        fetchMovie()
    }, [])
    console.log('movie', movie)

    const getNewMovie = async () => {
        const data = await getLatestMovies()
        const collection = data.results.slice(0, 10)
        setLatestMovies(collection)
    }
    useEffect(() => {
        getNewMovie()
    }, [])
    return (
        <div className='flex flex-row gap-4 justify-between '>
            <div className='flex flex-col w-full md:w-3/4'>
                <span className='justify-between flex flex-row'>
                    <span className='flex flex-row bg-gradient-to-r from-green rounded-s-lg ps-4 w-fit to-transparent gap-3'>
                    <h1 className='uppercase text-4xl font-bold text-white '>Filtered </h1>
                    <h1 className='uppercase text-4xl font-bold text-green '>Movie </h1>
                    </span>

                    <button className='relative md:hidden mr-4 w-6' onClick={handleClick}>{!nav ?
                <ViewIcon className='text-green' boxSize={6} /> : <CloseIcon className='text-green'  />}</button>

                <div className={!nav ? 'hidden' : 'absolute flex flex-col mt-3 gap-4 h-fit rounded-md shadow-white font-semibold right-5 px-3 py-8 '}>
                <div className=' flex flex-col p-6 bg-gradient-to-b from-green to-current bg-opacity-60 rounded-md'>

                    <div className='flex flex-row  gap-4'>
                        <label className='text-black pt-2 w-10 font-semibold'>Title</label>
                        <input required onChange={(e) => setTitle(e.target.value)} type='string' className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1.5 font-sans text-white text-sm font-normal lowercase  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' placeholder='Movie Title' />
                    </div>

                    <div className='flex flex-row  gap-4'>
                        <label className='text-black pt-2 w-10 font-semibold'>From</label>
                        <input required onChange={(e) => setStartYear(e.target.value)} type='number' className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1.5 font-sans text-sm text-white font-normal  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' placeholder='From Year (eg. 2022)' />
                    </div>

                    <div className='flex flex-row  gap-4'>
                        <label className='text-black pt-2 w-10 font-semibold'>To</label>
                        <input required onChange={(e) => setEndYear(e.target.value)} type='number' className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1.5 font-sans text-sm text-white font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' placeholder='End Year (eg. 2022)' />
                    </div>

                    <div className='flex flex-row  gap-4'>
                        <label className='text-black pt-2 w-10 font-semibold'>Type</label>
                        <input required onChange={(e) => setType(e.target.value)} type='string' className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1.5 font-sans text-sm text-white font-normal  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' placeholder='Example: movie, tvSeries, ' />
                    </div>

                    <div className='flex flex-row  gap-4'>
                        <label className='text-black pt-2 w-10 font-semibold'>Limit</label>
                        <input required onChange={(e) => setLimit(e.target.value)} type='number' className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1.5 font-sans text-sm font-normal text-white  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' placeholder='Max upto 10' />
                    </div>
                    <Button variant='solid' className='m-auto mt-6 w-20 text-white hover:text-black' onClick={fetchMovie}>Search</Button>
                </div>
            </div>
                </span>
                {
                    movie ? (<div className='flex flex-row flex-wrap gap-4 items-center md:items-start'>
                        {
                            movie && movie.map((movies, index) => {
                                return (
                                    <div className='flex flex-col bg-royalgreen bg-opacity-40 rounded-md shadow-md mt-5 w-52 h-64 p-2' key={index}>
                                        <div className='w-full h-full object-cover overflow-hidden'>
                                            <img className='object-cover ' src={movies.primaryImage.url} />
                                        </div>
                                        <span className='h-2/4 text-white'>
                                            <p className='font-semibold text-base line-clamp-2'>{movies.primaryImage.caption.plainText}</p>
                                            <p>{movies.titleType.id}</p>
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>) :
                        (<div className='flex flex-row flex-wrap gap-4 items-center md:items-start'>
                            {
                                latestMovies.map((movies, index) => {
                                    return (
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
                                })
                            }

                        </div>)
                }

            </div>

            

            <div className='w-0 md:w-1/4 '>
                <div className=' hidden md:flex flex-col p-6 bg-gradient-to-b from-green to-current bg-opacity-60 rounded-md'>

                    <div className='flex flex-row  gap-4'>
                        <label className='text-black pt-2 w-10 font-semibold'>Title</label>
                        <input required onChange={(e) => setTitle(e.target.value)} type='string' className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1.5 font-sans text-white text-sm font-normal lowercase  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' placeholder='Movie Title' />
                    </div>

                    <div className='flex flex-row  gap-4'>
                        <label className='text-black pt-2 w-10 font-semibold'>From</label>
                        <input required onChange={(e) => setStartYear(e.target.value)} type='number' className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1.5 font-sans text-sm text-white font-normal  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' placeholder='From Year (eg. 2022)' />
                    </div>

                    <div className='flex flex-row  gap-4'>
                        <label className='text-black pt-2 w-10 font-semibold'>To</label>
                        <input required onChange={(e) => setEndYear(e.target.value)} type='number' className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1.5 font-sans text-sm text-white font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' placeholder='End Year (eg. 2022)' />
                    </div>

                    <div className='flex flex-row  gap-4'>
                        <label className='text-black pt-2 w-10 font-semibold'>Type</label>
                        <input required onChange={(e) => setType(e.target.value)} type='string' className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1.5 font-sans text-sm text-white font-normal  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' placeholder='Example: movie, tvSeries, ' />
                    </div>

                    <div className='flex flex-row  gap-4'>
                        <label className='text-black pt-2 w-10 font-semibold'>Limit</label>
                        <input required onChange={(e) => setLimit(e.target.value)} type='number' className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1.5 font-sans text-sm font-normal text-white  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' placeholder='Max upto 10' />
                    </div>
                    <Button variant='solid' className='m-auto mt-6 w-20 text-white hover:text-black' onClick={fetchMovie}>Search</Button>
                </div>
            </div>

            
        </div>
    )
}

export default Filter