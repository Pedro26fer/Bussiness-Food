import {Routes, Route} from 'react-router-dom'
import Register from './pages/Register/register'
import Login from './pages/Login/login'
import Home from './pages/Home/home'

function MainRoutes(){
    return(
        <Routes>
            <Route element={<Register/>} path='/'/>
            <Route element={<Login/>} path='/login'/>
            <Route element={<Home/>} path='/home'/>
        </Routes>
    )
}

export default MainRoutes