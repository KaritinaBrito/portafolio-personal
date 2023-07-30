import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home.tsx';
import AllResponsive from './pages/AllResponsive.tsx';
import NotFound from './pages/NotFound.tsx';
import Working from './pages/Working.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/projectsResponsive",
    element: <AllResponsive />
  },
  {
    path: "/working",
    element: <Working />
  },
  {
    path: "*",
    element: <NotFound />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
