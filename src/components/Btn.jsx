import React from 'react'

const Btn = ({name}) => {
  return (
    <div>
    <button className='py-1 px-6 my-2 mx-1 bg-gray-200 rounded-lg hover:bg-gray-400'>{name}</button>
    </div> 
  )
}

export default Btn
