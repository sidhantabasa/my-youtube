import React from 'react'
import Btn from './Btn'
const Btnlist = () => {
  const list = ["All", "Game", "Music", "movie", "Cartoon","Trending","Latest","bollywood","Game", "Music", "movie", "Cartoon","bollywood"]

  return (

    <div className='flex'>
      {list.map((i,index )=>
        <Btn key={index} name={i} />
      )}

    </div>


  )
}

export default Btnlist