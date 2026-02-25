import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// PAGES 
import HomePage from './Pages/HomePage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import SingleProductPage from './Pages/SingleProductPage.jsx'
import ProductsPage from './Pages/ProductsPage.jsx'
// importujemo svaki page (komponentu)



const router = createBrowserRouter([ // uvek se kreira ovaj router 
  {
    path: '/',
    element: <App/>,
    children: [ // moze da ih bude vise (po jedan objekat)
      {
        path: '/', // uvek putanja do tog page
        element: <HomePage/> // uvek koji page targetiramo 
      },
      {
        path:'/about',
        element: <AboutPage/>
      },
      {
        path: '/singleProduct/:id', // ovo id ovde je key 
        // koristimo uvek za dinamicke putanje (na klik za prikaz nekog proizvoda)
        element: <SingleProductPage/>
      },
      {
        path: '/products',
        element: <ProductsPage/>
      }

    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
