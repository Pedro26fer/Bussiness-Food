import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import {DivPage, Form} from './styles'
import { Link } from "react-router-dom";


function Register() {
  const [_, setSubmited] = useState(false);

  const registerSchema = yup.object().shape({
    name: yup.string().required("Necessary field").max(120),
    email: yup
      .string()
      .required("Necessary field")
      .email("Unavalible email format"),
    password: yup
      .string()
      .required("Necessary field")
      .matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "This password is too weak"
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const navigate = useNavigate();
  const key = ["userPost"];
  const { isLoading, mutate} = useMutation(key, (data) =>
    axios.post("http://localhost:3000/user", data)
    .then(() => {
      toast.success("Welcome!!");
      setSubmited(false);
      navigate("/login")
    })
    .catch(() => {
      setSubmited(false);
      toast.error("This email is already in use")
    })
  );

  const sendData = async (data: any) => {
    setSubmited(true);
    mutate(data);
  };

  return (
    <DivPage>
      <header>
        <h1>Sign up and manage your products</h1>
        <span>Free and complete</span>
      </header>
      <Form onSubmit={handleSubmit(sendData)}>
        <div>
          <label htmlFor="name">
            Name {errors.name && <span> - {errors.name.message}</span>}
          </label>
          <input type="text" id="name" placeholder="Name" {...register("name")} />
        </div>

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

        <button type="submit">{isLoading ? "Creating" : "Register"}</button>
        <span>Is already registered ? <Link to='/login'>Go to sign-in</Link></span>
      </Form>
    </DivPage>
  );
}

export default Register;
