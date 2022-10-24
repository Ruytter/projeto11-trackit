// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { AuthContext } from "../../contexts/auth";

export default function Listadehabitos() {
  const { user } = useContext(AuthContext);
  const name = "ruytter"
  const dias = 3
  
  useEffect(() => {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;
    const promisse = axios.get(URL, {
      headers: {
        'Authorization': `Bearer ${user.u.token}`
      }
    });

    promisse.then((res) => {
      console.log(res.data);
    });

    promisse.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  if (name && dias){
    // console.log( nome + days)
    return (
      <Habitos>
        <div>
        <p>Ler 1 capítulo de livro</p>
        <ion-icon name="trash-outline"></ion-icon>
        </div>
      <ul>
        <li>D</li>
        <li>S</li>
        <li>T</li>
        <li>Q</li>
        <li>Q</li>
        <li>S</li>
        <li>S</li>
      </ul>
    </Habitos>
    )
  }


  return (
    <Habitos>
      <p>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </p>
    </Habitos>
  );
}

const Habitos = styled.div`
  width: 300px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  margin: 20px auto;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  > div {
    
    display: flex;
    justify-content: space-between;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
  }
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    li {
      width: 30px;
      height: 30px;
      margin-right: 4px;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;
      text-align: center;
      color: #dbdbdb;
      background: #ffffff;
      border: 1px solid #d5d5d5;
      /* color: #ffffff;
      background: #cfcfcf;
      border: 1px solid #cfcfcf; */
      border-radius: 5px;
    }
  }
  img{
    background: #666666;
  }
`;
