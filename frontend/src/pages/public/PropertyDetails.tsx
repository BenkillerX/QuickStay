import React from 'react'
import { useParams } from 'react-router-dom'

const PropertyDetails = () => {
const {id} = useParams()
  return (
    <div className='w-full h-[1600px] bg-amber-950'>Propery {id}</div>
  )
}

export default PropertyDetails