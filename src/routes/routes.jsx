import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Error from '../pages/Error'

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ],
  },
]);