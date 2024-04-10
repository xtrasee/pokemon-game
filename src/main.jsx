import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Game from './Game.jsx'
import './index.css'

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "easy", element: <Game size={6} /> },
    { path: "medium", element: <Game size={12} /> },
    { path: "hard", element: <Game size={18} /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
