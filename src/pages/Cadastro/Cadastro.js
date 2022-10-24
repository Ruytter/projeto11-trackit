import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../components/Logo";
export default function Cadastro() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");


  function cadastrar(e) {
    e.preventDefault();
  const URL =
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const body = {
      email:email,
      name: nome,
      image: foto,
      password: senha
    };
    const promise = axios.post(URL, body);
    promise.then((data) => {
    navigate(`/`);
     });
    promise.catch((err) => {
      console.log({ email, senha, nome, foto})
      console.log(err.response.data);
    });
  }
  return (
    <>
      <Logo />
      <Cadastrar>
        <form onSubmit={cadastrar}>
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
          <div>
            <input
              id="nome"
              nome="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="nome"
              required
            />
          </div>
          <div>
            <input
              id="foto"
              nome="foto"
              type="text"
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
              placeholder="foto"
              required
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
        <Link to={`/`}>
        <p>Já tem uma conta? Faça login!</p>
        </Link>
      </Cadastrar>
    </>
  );
}

const Cadastrar = styled.div`
  width: 303px;
  margin: 0 auto;
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
