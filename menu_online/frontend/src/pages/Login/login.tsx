import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { DivPage, Form } from "../Register/styles";
import { Link } from 'react-router-dom'


function Login() {
  const [submited, setSubmited] = useState(false);

  const loginShema = yup.object().shape({
    email: yup.string().required("E-mail is required").email("Invalid e-mail"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginShema),
  });

  const navigate = useNavigate();

  const key = ["userLogin"];
  const { isLoading, mutate } = useMutation(key, (data) =>
    axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        toast.success("Welcome back, check your products!");
        setSubmited(false);
        navigate("/home");
        localStorage.setItem('token', res.data.accessToken);
      })
      .catch((e) => {
        console.log(e);
        setSubmited(false);
        toast.error("Invalid credentials");
      })
  );

  const sendData = async (data: any) => {
    setSubmited(true);
    mutate(data);
  };

  return (
    <DivPage>
      <header>
        <h1>Sign-in</h1>
        <span>Enjoy the power</span>
      </header>
      <Form onSubmit={handleSubmit(sendData)}>
        <div>
          <label htmlFor="email">
            E-mail {errors.email && <span> - {errors.email.message}</span>}
          </label>
          <input
            type="text"
            id="email"
            placeholder="xxx@email.com"
            {...register("email")}
          />
        </div>

        <div>
          <label htmlFor="password">
            Password{" "}
            {errors.password && <span> - {errors.password.message}</span>}
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password")}
          />
        </div>
        <button type="submit">{isLoading ? "Logging" : "Sign-In"}</button>   
      </Form>
      <p>Don't you have a register ? <Link to='/'>Sign-up here</Link> </p>
    </DivPage>
  );
}

export default Login;
