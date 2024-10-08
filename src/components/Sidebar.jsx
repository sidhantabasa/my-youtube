import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  if(!isMenuOpen) return null;
  return (
    <div className='shadow-md  mt-2'>
      <div className='flex h-8 w-48 '>
        <img className='py-1 pl-4' 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAY1BMVEX///8AAADLy8uurq6Xl5d8fHwFBQXPz88cHBxISEiLi4vi4uLy8vKmpqZAQED39/fp6elsbGwRERFeXl5mZmYqKiq3t7fExMTe3t6FhYUaGhpnZ2d1dXXV1dUjIyNJSUmhoaH31OxmAAACQ0lEQVR4nO3c3XKbMBBAYRQ7GNvYjXFc56dp+v5P2TZTOk1qJAy7q1V7zr0YfcNwJVZVRURERERERERERERERERERCRcu7vfn077w+JT7p3M6u5Qh191t23u3Uxv14U/as659zO1x/C+epF7R9O6DR8rU/K3o0zJJUeJksuO8iRDjtIkw46yJDFHSZK4oxxJylGKJO0oQzLGUYJknMO/ZKzDu2S8w7fkGodnyXUOv5JrHV4l1zt8SqY4PEqmOfxJpjq8SaY7fEnmODxJ5jn8SOY6vEjmO3xIJBweJDKO/BIpR26JnCOvRNKRUyLryCeRduSSyDvySDQcOSQ6DnvJUsnxQ/LZ0vFSp3c0tW5rCNnrOUI42jnOmo4QHswg97qQRzPIky5kbeW403WEJyvIShlSW0FulCEBCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAfJfQbrn3c3qY+flqGNUT5DnoaHv86koyHJ4dZt+KX4gX2LL26YYSBO/F2FRDCR1UJ56JSaKagRklXhA6ocDE0U1ApK6cWNTCiT1gNRPUhaInwHpAyIckD4gwgHpAyIckD4gwgHpAyIckD4gwgHpAyIckD4vkBdliNn8SKsMaSwQb33VhZjNWFUHXcjGwvBWasgqtT4OqQ1HQ181IYaTodVDfFY3tTwKMZ3Vrb7pQYznwKNnNanFMUjkPFin9zeQS0G6DHclbI+DH0pq6RCkPpp+H7/bbtbNRUxq4SVI3aw3eRhERERERERERERERERE9C/2HarGKfyZA7iBAAAAAElFTkSuQmCC"
          alt="" />
        <Link to="/"><h3 className='py-1 px-2'> Home</h3></Link>
      </div>

      <div className='flex h-8 w-48 '>
        <img className='py-1 pl-4'
          src="data:image/png;base64,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"
          alt="" />
        <h3 className='py-1 px-2'> Shorts</h3>
      </div>

      <div className='flex h-8 w-48 '>
        <img className='py-1 pl-4'
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAClpaVhYWErKyt0dHSEhITc3Nzl5eX19fW0tLSUlJTLy8uioqKAgIDr6+u4uLhNTU0jIyPz8/MyMjKLi4sMDAybm5scHBzExMRSUlJbW1tubm52dnY7OztGRkYWFhZHR0cwMDA/Pz/W1tYwXPK3AAAER0lEQVR4nO2d6XbaMBBGZVYDDgQISxIgbcn7P2N7UuNFTr1Jo/nc893fOqpuIYwlzYyNIYQQQgghhBBCCCGEEFGe1rOQrJ+CG75HYXkPbjgObDimIQ1pSEMaDtDwspuEZHcJbkgIIYQQQgjxzj5GZO/R8BB4M9iOg0fDlbbMt6xoSEMaqkNDGhb5/+PhZo7IxqMhIYQQQgghRIj5aH2dDoXrejTvprdYvWhv/jrzslq0Fxxpr7Yno7YfYOh0J3+8t/sYb9rrdODWRvBNe5VOvDULYh6rtafxAC7WXqEzcYPhVHuBzlzrBRfFsR/jofBRXHb97+kyH+jzRFmews/HsnZg/iUNX6PixlPLr2n2sHYPtDB/3B9Lf6kddnwM83knEIbsbuVYOyz7qNs+4uGQP0zXDqMhMDRMoSEwNEyhITA0TKEhMDRMoWEnFsvVqeN1ggMKhsnXRBef+eZ1hDd8nEv+SJynakV4w0s218x5rjaENyxcf0xC/DUGN1xMogIBTu6UDaM38WRQbcMoenadsQF9Q+m4AWAYnV9dJ60DwVA2bmAYSsYNEMMoOrlO/C9gDMXihqLh4V5WbLjg64ui4XOl5EYkbiga/vnIknNZUSJu6BqaxaWsGK1d56+gbGjMs6W48x031A3Nxu4l6Tlu6BsWkwn+svUaNxAMTWzHSJ9xA8LQmJmlOO6Q9doAiKFg3EAxlIsbMIZicQPI0OztJF0vcQPJUCZuYBmauf+4AWYoEDfgDE2yKyu63m/gGVbjhts5FaBhNW44nVNBGpqNx7iBaWjMyVLs3xAZ1dDMf5UVez/EwRpW4kbfqAFsaMWNvpsNZMNlaUfVNyziGtrljn3/QVjD17Jf/1IdVMO1Jdh/P4xpOLcLqh2uwiEN7WrOrct9BqBh/NMSdEtJwTNclvWim+NxDZyhXRLvfMUPZphYfmf39D4sQ/sI4+Lh6BvJ0N5O+EmXAjK0t4SerqBgDDcfZT9vaYsohnaMuHu7CsYw9Hy8VgLCUCBG5CAY2jFi6u961CAYftr7CM+pUeqGQjEiR9kwlooRObqGcjEiRzNzrxIjRFpSKBpePV+j/QOcDFof+4jvgDEUK7sAMRQsncEwlCx/QjCUiBE5AIbCbYv0DaVLSbUN5V92q2woXZpnlKtk5csrjYZhfm8WprldeMN92vvt1tSM0hMKHQfir+9psNZ2Kn0xPkfLcG+7YeePFBoCQ8MUGgJDwxQaAkPDFBoCQ8OUbNTQWrIX6+Fqh2Udy8N0IPNJdode37E8O1ypb92OSHaJXv8mlvxwZWht5/PuIvWJ1IVaq+mQXkYbF9480nByGRU4TobCsbjshv8MO+dleDT9Rm60F+hM4x/XUN9I9qDFo8qw3xY0bRas5pgPiZYFmsP9tWn9JPZ6bp4MkE7JnMut9nI7s+2a67hJTofZUDickiE9gRFCCCGEEEIIIYQQQiD5DRf/VsChuDfgAAAAAElFTkSuQmCC"
          alt="" />
        <h3 className='py-1 px-2'> Subscription</h3>

      </div>
      <hr />
      <h2 className='mx-4 font-bold'>Subscription</h2>

    </div>
  )
}

export default Sidebar
