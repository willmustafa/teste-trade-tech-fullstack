import React from "react";

export default function Register() {
  return (
    <>
    <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nome
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Edson Arantes do Nascimento"
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
        />
      </div>
    </>
  );
}
