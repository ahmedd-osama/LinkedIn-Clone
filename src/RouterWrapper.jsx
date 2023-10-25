import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Pages/Login';
import HomePage from './components/Pages/Home/HomePage';
import HomeRoot from './components/Pages/Home/HomeRoot';
import RequireAuth from './components/Routing/RequireAuth';
const RouterWrapper = ({children}) => {
  const ROUTER = createBrowserRouter([

    {path: '/', element: <Login/> },
    {path: '/home', element:<RequireAuth><HomeRoot/></RequireAuth>, children: [
      {index: true,
      element: <HomePage/>},
    ]},
  ])
  return (
    <RouterProvider router={ROUTER}>
      {children}
    </RouterProvider>
  )
};

export default RouterWrapper