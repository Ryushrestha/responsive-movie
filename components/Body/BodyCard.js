"use client"
import { Card, CardBody } from '@chakra-ui/react'
import React from 'react'


const BodyCard = ({actualData}) => {

  return (
    <Card className='bg-royalgreen bg-opacity-70 p-2'>
    
            <img className='h-720 w-fit' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${actualData.poster_path}`} alt={actualData.orginal_title}/>
        
    </Card>
  )
}

export default BodyCard