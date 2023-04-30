import React from 'react'
import { useGetGeographyQuery } from 'state/api'
import Header from 'components/header/Header'
import {geoData} from "state/getData"

const Geography = () => {

    const {data}  = useGetGeographyQuery()
    console.log(data); 


  return (
    <div>
      
    </div>
  )
}

export default Geography
