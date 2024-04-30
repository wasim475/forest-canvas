import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './utility/Root';
import ErrorPage from './Components/ErrorMsg/ErrorPage';
import Home from './Components/Home/Home';
import AuthProvider from './Auth provider/AuthProvider';
import Login from './Components/Navbar/Login/Login';
import Register from './Components/Navbar/Register/Register';
import AllArtcraftItems from './Components/Navbar/NavItems/AllArtcraftItems/AllArtcraftItems';
import AddCraftItem from './Components/Navbar/NavItems/AddCraftItem/AddCraftItem';
import MyArtCraftList from './Components/Navbar/NavItems/MyArtCraftList/MyArtCraftList';
import PrivateRoute from './private Route/PrivateRoute';
import ViewCraftDetails from './Components/Navbar/NavItems/AllArtcraftItems/ViewCraftDetails';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import UpdateCraft from './Components/Navbar/NavItems/MyArtCraftList/UpdateCraft';
// ..
AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allartcraftitems',
        element: <AllArtcraftItems></AllArtcraftItems>,
        loader: ()=> fetch("http://localhost:3000/crafts")
      },
      {
        path: '/allartcraftitems/:id',
        element: <PrivateRoute>
          <ViewCraftDetails></ViewCraftDetails>
        </PrivateRoute>,
        loader: ()=> fetch("http://localhost:3000/crafts")
      },
      {
        path: '/craftitem',
        element: <PrivateRoute>
            <AddCraftItem></AddCraftItem>
        </PrivateRoute>,
        
        
      },
      {
        path: '/myartcraftlist',
        element: <PrivateRoute>
          <MyArtCraftList></MyArtCraftList>
        </PrivateRoute>,
        loader: ()=> fetch("http://localhost:3000/crafts")
      },
      {
        path: '/updatecraft/:id',
        element: <PrivateRoute>
          <UpdateCraft></UpdateCraft>
        </PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:3000/crafts/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </>
  </React.StrictMode>,
)
