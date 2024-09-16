import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appslice'
import { useDispatch } from 'react-redux'
import { VIDEO_SUGGESTION_API } from '../constant';

 
const Title = () => {
  const dispatch = useDispatch();
  const [searchQuery, setsearchQuery] = useState([])
  const [suggestion, setsuggestion] = useState([])
  const [showSuggestion, setshowSuggestion] = useState("flase")


  const toggleMenuHandel = () => {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    getsearchSuggestion()

  }, [searchQuery])

  const getsearchSuggestion = async () => {
    const data = await fetch(VIDEO_SUGGESTION_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setsuggestion(json[1])

  }

  const handleScroll = () => {
    // Hide suggestion div on scroll
    // setShowSuggestion(false);
  };


  return (
    <>
      <div className='flex shadow-sm'>
        <div className='flex'>
          <img onClick={() => { toggleMenuHandel() }}
            className='p-2 m-3 h-9 cursor-pointer'
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAAclBMVEUAAAD////29vbn5+fr6+vx8fH7+/v39/fz8/PR0dEjIyPOzs6JiYnu7u4gICC6urpKSkpPT0+8vLw9PT1zc3ODg4PZ2dm0tLRFRUVwcHAMDAxTU1PExMRqamo4ODhCQkIYGBgvLy+MjIxiYmIwMDB6enoxODRvAAAEHklEQVR4nO2d2XaqQBBFBQQaQRwZVFRM4v//4jXXMLWt5iF0rVWn9hecvbQHeqieOJBMqAPQINotgfLnU48F07mvgt9oq7jIynTChrTMili90Q6LIyPlhvRYhK+01xvqhGNxWjzV9rbU4cZk55m14yV1snEpY5N2xLBRD0mjR+14Rp1qfNJY1/aY/8PvlJ6mzbo369gNtRfUeWyx6GuHbMdrnU3Y0y6o09ij6LTVkTqMPY6q1Y4ABq+G+yA2gerQvika7SChjmKTLPjRVhBTlYZS/Wj7QE371rj9Rps6iV3mP9pz6iB2mWL/2lhte9a0bfdAHcUmK7cZtz+oo9gkCSBnaYtuTn6hzmKPS9RqhyBrK99sw9739p46jS32ve9tx8FZXRmspcXUcWwRD1dOM+o8dsi0BeMpxJTloK+TO3lJnWl8zrmjazs5+27t1Fr3dzxz5v/zQ2c92N/2Wfdrme+YtW/j2GdNnW4c6s9qIKqdXXGrjOE2d5pVrvNK+/YV6lUJq85tk1ReqFvKcTwkRBsJ0UZCtJEQbSREGwnRRkK0kRBtJEQbCdFGQrSREG0kRBsJ0UZCtJEQbSREGwnRRkK0+wQuE0xVw0zabr7OzoyujuzP2Tp/VzjMXVw5Hr7cFi8PX1YHRr9zn/3q+VHbKevrYLupWTtaUScbl6WxcFjO/sbjxXBpIvqiTjU+X5Gu7TH/h99Z6heirtSJ7HAdalfUeWxR9bUDVtckXrEJetqYF5mRrq3v3FYbqnBYV6QAsyQFVuGwtgCJCzFVaVhK4TAkpHAYEpiFw9q2DdqTg47boLM0qDn5DLNwWO8LDPR7G3V1BXQtDXXlFGSdfPVYOOxEnWl8HndFbt7sd4NMe2D8dzxX3ZNBw/1t1v3a9sn+9o34UFOnG4f6xWkG5//ZFYbz89l18a5wmJuvk7KmDvp31GWyzl3d8tm5tJD6QNnfEPz2XBoGoo2EaCMh2kiINhKijYRoIyHaSIg2EqKNhGgjIdpIiDYSoo2EaCMh2kiINhKijYRoIyHaSDxoh16VsTpjfcrev+Opqqymzvn31NdKvdKuEN/o5f0i83Vu1mb//rbxGD3/yyKm19bzM3Wq8TnnurbH/B9+5+FCFOverEO7/hZT57FFPNDGvNqKeZEZ6dr6tlc4jH2tz44ZfOGwD+ooNukKh0FMVRpWrgNdXAi0lJQUDkPAx27bakkdxSYlZuGwTAqHUWexRxq32mpHHcYeR4X4vT0BLRwW9heV1tRxbLEYrpyyLrDTsdXXySGmLA8PbEAMYrP2+ZzeHhh777Tb++sXDmP+Pzc/lXRr36zXjbeeY9a+jWNsx+/NeiCqnV0Jih3DJp7uCu3QzmPhsKhIlozUZ8ukiH9VOCxQ/nzKhLmvTLXD5DgeEqDa/wCSx4Af/8X74QAAAABJRU5ErkJggg==" alt="YOUTUBE" />
          <img className='h-9 m-3 '
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTESmo107eoawyZ3w9VOSO_X3B4kHbgI4aUJw&usqp=CAU" alt="logo" />

        </div>
        <div>
          <div className=' flex mx-[10rem]'>
            <input className='px-4 py-1 w-96   my-3 border rounded-l-full'
              type="text"
              value={searchQuery}
              onChange={(e) => { setsearchQuery(e.target.value) }}
              onBlur={() => setshowSuggestion(false)}
              onFocus={() => setshowSuggestion(true)}   
              onClick={() => setshowSuggestion(true)}
             
              placeholder='Search' />
            <button className='py-1 px-4 bg-slate-100  my-3 border rounded-r-full'>🔍</button>
          </div>
          {showSuggestion && <div className=' ml-[150px] rounded-lg shadow-xl bg-white  w-96'>
            <ul>
              {suggestion.map((i) => <li className='px-4 py-1 rounded-2xl shadow-sm hover:bg-slate-100'>{i}</li>)}
            </ul>
          </div>}
        </div>

        <div>
          <img className='p-1 my-3 ml-40 h-9 items-end'
            src="data:image/png;base64,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"
            alt="user" />
        </div>



      </div>

    </>
  )
}

export default Title
