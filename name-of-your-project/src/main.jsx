import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom' 
import Home from './Home/Home.jsx'
import Products from './Products/Products.jsx'
import Blogs from './Blogs/Blogs.jsx'
import About from './About/About.jsx'
import ErrorPage from './ErrorPage/ErrorPage.jsx'
const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App></App>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/products',
          element:<Products></Products>
        }
        ,{
          path:'blogs',
          element:<Blogs></Blogs>
        },
     

      ]
    }
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
