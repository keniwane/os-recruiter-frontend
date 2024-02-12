import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Employers from './pages/Employers.jsx'
import Contact from './pages/Contact.jsx'
import Candidates from './pages/Candidates.jsx'
import Blog from './pages/Blog.jsx'
import AboutUs from './pages/AboutUs.jsx'
import './index.css'

import NotFoundPage from './pages/NotFoundPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/employers',
    element: <Employers />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/contact',
    element: <Contact />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/blog',
    element: <Blog />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/candidates',
    element: <Candidates />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/aboutus',
    element: <AboutUs />,
    errorElement: <NotFoundPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
