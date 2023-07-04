"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Input , InputGroup, InputRightElement} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

const Search = () => {
    const [movies, setMovies] = useState([])
    const [title, setTitle] = useState('')
   

    const fetchMovie = () => {
        fetch(`https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${title}?titleType=movie&limit=10`, {
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
                setMovies(data.results)
            })
         
    }
    useEffect(() => {
        fetchMovie()
    }, [])




    console.log(movies)

   
 
    return (
        <div className='relative flex flex-row items-center  '  >
            <InputGroup className='' variant='unstyled'>
            <Input className='text-white ps-8'   placeholder='Search Movie' onChange={(e)=>setTitle(e.target.value)}/>
            <InputRightElement className='text-green cursor-pointer' onClick={fetchMovie}><SearchIcon/></InputRightElement>
            </InputGroup>
            <div className='rounded-sm bg-green bg-opacity-40 absolute w-full z-50 shadow-white top-6'>

{
  
    movies && movies.map((movie, index) => {
        return (
            <div className=' text-white px-3 py-1 ' key={index}>
                <div className='flex flex-row gap-4'>
                    <img className='h-20 w-14' src={movie.primaryImage.url} />
                    <span className='flex flex-col'>
                        <p className='font-bold'>{movie.titleText.text}</p>
                        <p className='text-sm'>{movie.titleType.text}</p>
                    </span>
                </div>
                <hr className='my-2'></hr>
            </div>
        )
    })
}
</div>
        </div>
    )
}

export default Search