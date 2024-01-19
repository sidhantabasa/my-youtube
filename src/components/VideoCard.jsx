import React from 'react'

const VideoCard = ({info}) => {

    const{snippet,statistics}=info;
    const{thumbnails,title,}=snippet;

  return (
    <div className='m-2 w-80'>
        <img src={thumbnails.medium.url} alt="thumbail" />
        <h2 className='font-bold'>{title}</h2>
        <h3>{snippet.channelTitle}</h3>
        <h5>{statistics.viewCount} views</h5>
    </div>
  )
}

export default VideoCard