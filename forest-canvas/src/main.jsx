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
        element: <AllArtcraftItems></AllArtcraftItems>
      },
      {
        path: '/craftitem',
        element: <PrivateRoute>
            <AddCraftItem></AddCraftItem>
        </PrivateRoute>
      },
      {
        path: '/myartcraftlist',
        element: <PrivateRoute>
          <MyArtCraftList></MyArtCraftList>
        </PrivateRoute>
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
