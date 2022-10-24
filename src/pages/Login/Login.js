import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../components/Logo";
export default function Login() {
  const { signin } = useContext(AuthContext)
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
  function Entrar(e) {
    e.preventDefault();
    const URL =
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
      const body = {
        email: email,
        password: senha
      };
      const promise = axios.post(URL, body);
      promise.then((user) => {
        //  console.log(user.data)
        signin(user.data)
     });
    promise.catch((err) => {
      console.log(err.response.data);
    });
  }

  return (
    <>
      <Logo />
      <Logar>
        <form onSubmit={Entrar}>
          <div>
            <input
              id="email"
              nome="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              required
            />
          </div>
          <div>
            <input
              id="senha"
              nome="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="senha"
              required
            />
          </div>
          <div className="submit_login">
            <button type="submit">Entrar</button>
          </div>
        </form>
        <Link to={`/cadastro`}>
          <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
      </Logar>
    </>
  );
}

const Logar = styled.div`
  width: 303px;
  margin: 0 auto;
  background-color:#ffffff;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  input {
    width: 303px;
    height: 45px;
    margin: 5px 0;
    font-size: 20px;
    line-height: 25px;
    color: #dbdbdb;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }
  button {
    width: 303px;
    height: 45px;
    background: #52b6ff;
    border: none;
    border-radius: 5px;
  }
  p {
    margin-top: 25px;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
  }
`;
