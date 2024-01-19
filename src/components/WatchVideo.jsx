import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appslice';
import { useSearchParams } from 'react-router-dom';

const WatchVideo = () => {
  const [searchParams] = useSearchParams()

  const key= searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu())
  },[])
  return (
    <div className='m-2 p-2 shadow-md'>
      <iframe width="740" height="415" 
      src={"https://www.youtube.com/embed/"+key}
       title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowFullScreen></iframe>

    </div>
  )
}

export default WatchVideo