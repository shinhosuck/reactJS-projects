import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
}
from 'react-router-dom'

// pages 
import PageNotFound from './pageNotFound';
import BaseLayout from './baseLayout';
import ECommerceLayout from './1.e-commerce/components/e-commerceLayout';
import ProductList from './1.e-commerce/components/productList';
import ProductDetail from './1.e-commerce/components/productDetail';
import Cart from './1.e-commerce/components/cart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<BaseLayout />}>
      <Route path='/' element={<ECommerceLayout />}>
        <Route index element={<ProductList />} />
        <Route path='product/detail' element={<ProductDetail />}/>
        <Route path='cart' element={<Cart />} />
      </Route>
      <Route path='*' element={<PageNotFound />}/>
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}


