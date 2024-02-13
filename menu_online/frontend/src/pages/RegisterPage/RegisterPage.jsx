import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../assets";
import { toast } from "react-toastify";

function Register() {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .password(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/),
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmiting = async (data) => {
    try {
      const response = await Api.post("/user", data);
      return navigate("/");
    } catch (error) {
      toast.error("error to create the register");
      console.log(error);
    }
  };

  return (
    <>
      <header>
        <h1>Menu Management</h1>
      </header>
      <main>
        <div>
          <h2>Crie seu registro de admnistrador</h2>
          <span>tenha seu cardápio na sua mão</span>
        </div>
        <form onSubmit={handleSubmit(onSubmiting)}>
          <label htmlFor="name">
            Name {errors.name && <span> - {errors.name.message}</span>}
          </label>
          <input type="text" id="name" placeholder="Digite seu nome"{...register('name')}/>

          <label htmlFor="email">
            Email {errors.email && (<span> - {errors.email.message}</span>)}
          </label>
          <input type="text" id="email" placeholder="Digite seu email" {...register('email')} />

          <label htmlFor="password">
            Password {errors.password && (<span> - {errors.password.message}</span>)}
          </label>
          <input type="text" id="password" placeholder="Digite sua senha" />

          <button type="submit">Cadastrar</button>
        </form>
      </main>
    </>
  );
}

export default Register
