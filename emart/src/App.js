import { Fragment } from 'react'
import './App.css'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Products from './component/Products'
import { Route, Routes } from 'react-router-dom'
import Product from './component/Product'
import Cart from './component/Cart'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={[<Home key={1} />, <Products key={2} />]}
        />

        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
