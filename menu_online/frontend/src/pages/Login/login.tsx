import * as yup from 'yup'
import {useForm} from "react-hook-form"
import { yupResolver} from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import {toast} from 'react-toastify'

function Login(){

    const [submited, setSubmited] = useState(false) 

    const loginShema = yup.object().shape({
        email: yup.string().required("E-mail is required").email("Invalid e-mail"),
        password: yup.string().required("Password is required")
    })

    const {register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginShema)
    })

    const navigate = useNavigate()

    const key = ['login']
    const { isLoading, mutate, isError, isSuccess } = useMutation(key, (data) =>
        axios.post("http://localhost:3000/login", data)
  );

  if(isError){
    setSubmited(false)
    toast.error("Invalid credentials")
  }

  if(isSuccess){
    setSubmited(false)
    toast.success("Welcome back, check your products!")
  }


    return(
        <div>
            <header>
                <h1>Sign-in</h1>
                <span>Enjoy the power</span>
            </header>
            <form>

            </form>
        </div>
    )
}

export default Login