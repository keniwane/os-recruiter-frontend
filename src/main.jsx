import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Employers from './pages/Employers';
import Contact from './pages/Contact';
import Candidates from './pages/Candidates';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';
import './components/style.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: '/employers',
    element: (
      <Layout>
        <Employers />
      </Layout>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: '/contact',
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: '/blog',
    element: (
      <Layout>
        <Blog />
      </Layout>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: '/candidates',
    element: (
      <Layout>
        <Candidates />
      </Layout>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: '/aboutus',
    element: (
      <Layout>
        <AboutUs />
      </Layout>
    ),
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
