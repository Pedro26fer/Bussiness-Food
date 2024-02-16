import { FcManager } from "react-icons/fc"; 
import { Header } from "./styles";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import {jwtDecode} from "jwt-decode"

type Decoded = {
    name: string
}


function HeaderHome(){

    const navigate = useNavigate() 

    const handleLogout = () => {
        navigate('/login')
        localStorage.removeItem('token')
    }
    const token = localStorage.getItem('token')
    if(!token){
        navigate('/login')
        toast.error("You are not authenticated")
    }

    const decoded : Decoded = jwtDecode(token!)
    console.log(decoded.name)

    return(
        <Header>
            <div>
                <h1>Bussines Food</h1>
                <div>
                    <FcManager size={52}/>
                    {decoded && <span>User: {decoded.name!}</span>}
                </div>
            </div>

            <button onClick={() => handleLogout()} >logout</button>
        </Header>
    )
}

export default HeaderHome