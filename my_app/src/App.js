import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
}
from 'react-router-dom'

// layouts
import RootLayout from './rootLayout';
import CocktailLayout from './1.cocktails/layouts/cocktailLayout';

// components
import Drinks from './1.cocktails/components/drinks';
import Contact from './1.cocktails/components/contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path='/' element={<CocktailLayout />}>
        <Route index element={<Drinks />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='about' element={<h1>About</h1>}/>
      </Route>
    </Route>
    
  )
)

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}


