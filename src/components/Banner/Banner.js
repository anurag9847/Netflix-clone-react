import React, { useState } from 'react'
import { useEffect } from 'react'
import './Banner.css'
import axios from '../../constants/axios'
import {API_KEY,imageUrl} from '../../constants/constants'

function Banner() {
  
   const [movie,setMovie] = useState()
   
    useEffect(()=>{
     
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
          
            setMovie(response.data.results[0])
        })
    },[])
  return (
    
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}}
     className='banner'>
        <div className='content'>
             <h1 className='title'>{movie ?movie.title : ""}</h1>
             <div className='banner_buttons'>
                 <button className='button'>Play</button>
                 <button className='button'>My List</button>
             </div>
             <h5 className='description'>{ movie ? movie.overview : ''}</h5>
            <div className='fade_bottom'></div>
        </div>
      
    </div>
  )
}

export default Banner
