  
import './App.css';
import Body from './components/Body';
import Title from './components/Title';
import store from './utils/store';
import { Provider } from 'react-redux';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import WatchVideo from './components/WatchVideo';
import Mainbody from './components/Mainbody';

const appRouter= createBrowserRouter([{
  path: '/',
  element: <Body/>,
  children:[
    { 
      path: "/",
      element: <Mainbody/>,
    },
    {
      path: "/watch",
      element: <WatchVideo/>,
    }
  ],

},
])


function App() {
  return (


    <Provider store={store}>
      <Title />
      <RouterProvider router={appRouter}/>
    </Provider>



  ); 
}

export default App;
