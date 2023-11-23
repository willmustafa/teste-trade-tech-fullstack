import React from "react";

export default function Login() {
  return (
    <>
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
