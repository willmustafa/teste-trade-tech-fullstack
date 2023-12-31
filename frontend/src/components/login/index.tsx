import { FetchController } from "controllers/Fetch";
import { FormEvent, MouseEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface ILogin {
  togglePage: MouseEventHandler<HTMLSpanElement>;
  setWrongPassword?: Function;
}

export default function Login({ togglePage, setWrongPassword }: ILogin) {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  async function submit(event: FormEvent) {
    event.preventDefault();

    await new FetchController()
      .getInstance()
      .post("auth/login", { username, password })
      .then((res) => {
        window.sessionStorage.setItem("token", res.data.token);
        navigate("/app");
      })
      .catch((e) => {
        if (setWrongPassword) setWrongPassword(true);
        toast.error("Usuário ou senha inválidos.");
      });
  }

  return (
    <form onSubmit={submit}>
      <div className="mb-3">
        <label htmlFor="user" className="form-label">
          Usuário
        </label>
        <input
          type="text"
          className="form-control"
          id="user"
          placeholder="meuTimeÉ10"
          onChange={(e) => setUsername((e.target as any).value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Senha
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="........"
          onChange={(e) => setPassword((e.target as any).value)}
          required
        />
      </div>
      <button className="btn btn-primary my-3 w-100" type="submit">
        Entrar
      </button>
      <div className="text-center">
        <p>
          Não é um membro?{" "}
          <span
            className="text-decoration-underline text-primary cursor-pointer"
            onClick={togglePage}
          >
            Cadastrar-se
          </span>
        </p>
      </div>
    </form>
  );
}
