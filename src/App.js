//*----------------Labraries-----------------------------------
import React,{useState} from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
//*----------------Components----------------------------------
import Nav from './Components/Nav'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Products from './Components/Products'
//*------------------------------------------------------------

export default function App() {
  let [ProductData,setProductData] = useState([]);
  return (
        <div className='App'>
        
        <BrowserRouter>
            <Nav/>
         
         <Routes>

          <Route path='/' element = {<Home/>}/>
          <Route path='/Products' element = {<Products ProductData ={ProductData} setProductData = {setProductData}/>}/>
          <Route path='/Cart' element = {<Cart ProductData ={ProductData}/>}/>

         </Routes>

        </BrowserRouter>
        </div>
  )
}
