import React from 'react'
import { RouterProvider } from "react-router"
import { router } from "./Router"
import { Toaster } from "sonner"
import { CartProvider } from './Providers/CardProvider'


const App = () => {
  return (
    <div>
      <CartProvider>
      <Toaster richColors position="top-center" />
      <RouterProvider router={router} />
      </CartProvider>
    
    </div>
  )
}

export default App
