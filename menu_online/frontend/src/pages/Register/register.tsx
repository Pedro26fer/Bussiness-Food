import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";

function Register() {
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

  const { isLoading, mutate, isError, isSuccess } = useMutation(key, (data) =>
    axios.post("http://localhost:3000/user", data)
  );
  if (isError) {
    alert("This email is already in use");
  }

  if (isSuccess) {
    navigate("/login");
  }

  const sendData = async (data: any) => {
    mutate(data);
  };

  return (
    <div>
      <header>
        <h1>Sign up and manage your products</h1>
        <span>free and complete</span>
      </header>
      <form onSubmit={handleSubmit(sendData)}>
        <label htmlFor="name">
          Name {errors.name && <span> - {errors.name.message}</span>}
        </label>
        <input type="text" id="name" placeholder="Name" {...register("name")} />

        <label htmlFor="email">
          E-mail {errors.email && <span> - {errors.email.message}</span>}
        </label>
        <input
          type="text"
          id="email"
          placeholder="xxx@email.com"
          {...register("email")}
        />

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

        <button type="submit">{isLoading ? "Creating" : "Register"}</button>
      </form>
    </div>
  );
}

export default Register;
