import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Portfolio from './pages/Portfolio/index.jsx'
import About from './pages/About/index.jsx'
import Contact from './pages/Contact/index.jsx'
import Resume from './pages/Resume/index.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <About/>
      },
      {
        path: "portfolio",
        element: <Portfolio/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "resume",
        element: <Resume/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
