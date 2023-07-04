
import React,{useState,useEffect} from 'react'
import 'react-slideshow-image/dist/styles.css'
import { getNewRelease } from '@/service/service.axios'


const HeroRight = () => {
  const [latestmusic, setLatestMusic] = useState([])
  const getLatest  = async () =>{

    const data = await getNewRelease()
    const collection= data.albums.items.slice(0,2)
    setLatestMusic(collection)
  }
  useEffect(()=>{
    getLatest()
  },[])
  console.log(latestmusic)


  return (
    <div className=' items-center mx-auto justify-center hidden md:flex flex-row  gap-3'>
      <div className='  text-white text-base font-semibold'>
        <a href='/topmovies'><button className=' bg-neon bg-opacity-60 h-32 w-32 opacity-80 border-white border-4 rounded-full' >
          Top<br/> Movie
        </button></a>
      </div>
      <div className=' items-center justify-center flex flex-row  gap-2'>
     
          {
      latestmusic && latestmusic.map((music,index)=>{
                return (
                    
                  <div className='hidden h-fit lg:flex flex-col bg-white bg-opacity-90 rounded-md p-2'  key={index}>
                    <a href={music.external_urls.spotify}>
                        <img className=' h-60 w-fit' src={music.images[0].url}  />
                        <span>
                        <h1 className='text-black text-xl font-semibold  uppercase'>{music.name}</h1>
                        <span className='flex flex-row gap-2'><p className=''>Artists : </p>
                        <a href={music.artists[0].external_urls.spotify}><p className='text-neon font-semibold  hover:underline'>{music.artists[0].name}</p></a>
                        </span>
                        <p className='text-black'>Release on : {music.release_date}</p>
                        </span>
                        </a>
                  </div>
                )
              }) 
          } 
       
      </div>
    </div>
  )
}

export default HeroRight