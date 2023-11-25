import React, { FormEvent, MouseEventHandler } from "react";

interface IRegister {
  togglePage: MouseEventHandler<HTMLSpanElement>;
}

export default function Register({ togglePage }: IRegister) {
  function submit(event: FormEvent) {
    event.preventDefault();
  }
  
  return (
    <form onSubmit={submit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nome
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Edson Arantes do Nascimento"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="user" className="form-label">
          Usuário
        </label>
        <input
          type="text"
          className="form-control"
          id="user"
          placeholder="meuTimeÉ10"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="meu@time.com"
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
          required
        />
      </div>
      <button className="btn btn-primary my-3 w-100" type="submit">
        Cadastrar
      </button>
      <div className="text-center">
        <p>
          Já é um membro?{" "}
          <span
            className="text-decoration-underline text-primary cursor-pointer"
            onClick={togglePage}
          >
            Entrar
          </span>
        </p>
      </div>
    </form>
  );
}
