import React, { useEffect, useState } from 'react'
  import VIDEO_API from '../constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const Videolist = () => {

  const[video, setvideo]= useState([]);

  useEffect(()=>{
    getVideos();

  },[]);

  const getVideos = async()=>{
    const data = await fetch(VIDEO_API )
    const json= await data.json()
    
    setvideo(json.items)
  }
  return (
    <div className='flex flex-wrap '>
      {video.map(item=> <Link to ={"watch?v="+item.id}><VideoCard key={item.id} info={item}/></Link>)}
     
    </div>
  )
}

export default Videolist