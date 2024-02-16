import {Routes, Route} from 'react-router-dom'
import Register from './pages/Register/register'
import Login from './pages/Login/login'
import Home from './pages/Home/home'
import { useState } from 'react'

function MainRoutes(){
    const [token, setToken] = useState('')
    const [products, setProducts] = useState([])
    return(
        <Routes>
            <Route element={<Register/>} path='/'/>
            <Route element={<Login/>} path='/login'/>
            <Route element={<Home setToken={setToken} products={products} setProducts={setProducts}/>} path='/home'/>
        </Routes>
    )
}

export default MainRoutes