import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router, RouterProvider } from 'react-router'
import { router } from './Routes/Routes'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './Provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider> <RouterProvider router={router}/></AuthProvider>
    <ToastContainer />
  </StrictMode>,
)
