import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Rowpost.css'
import Youtube from 'react-youtube'
import axios from '../../constants/axios'

import {imageUrl,API_KEY} from '../../constants/constants'
function Rowpost(props) {

   const[movie ,setMovies] = useState([])
   const[UrlId ,setUrlId] = useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            console.log(response.data.results)
            setMovies(response.data.results)
        })
        
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          
          autoplay: 1,
        },
    };

    const handleMovie = (id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
           
            if(response.data.results.length !==0){
                setUrlId(response.data.results[0])
                console.log(response.data.results[0])
            }else{
                console.log('array empty')
            }
        })
    }
  return (
   
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movie.map((obj)=>
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'}  src={`${imageUrl+obj.backdrop_path}`} alt=""></img>
            )}
            
            
        </div>
        { UrlId && <Youtube opts={opts} videoId={UrlId.key} />}
     
    </div>
  )
}

export default Rowpost
