import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { BackButton } from "../../constants/colors"
import axios from "axios";
import styled from "styled-components";

export default function Addhabito() {
  const [addhabito, setAddhabito]= useState('hide')
  const [habito, setHabito] = useState("");
  const [days, setDays] = useState([]);
  const { user } = useContext(AuthContext);
  const [back, setBack]= useState({});  

  useEffect(()=> {
    const newBack =[]
    for (let i=0; i<7; i++){
      newBack.push({
        color: `${BackButton.unselected.color}`,
        background: `${BackButton.unselected.back}`,
        border: `1px solid ${BackButton.unselected.border}`
      })
    }
    setBack(newBack)
  },[])

  function adicionar(){
    setAddhabito("")
  }
  function cancelar(){
    setAddhabito("hide")
  }


  function dia(day) {
    const newBack = [...back]
   if (newBack[day].background === "#FFFFFF"){
    newBack[day] = {
      color: `${BackButton.selected.color}`,
      background: `${BackButton.selected.back}`,
      border: `1px solid ${BackButton.selected.border}`
    }
    setBack(newBack)
    setDays([...days, day])
   }else{
    newBack[day] = {
      color: `${BackButton.unselected.color}`,
      background: `${BackButton.unselected.back}`,
      border: `1px solid ${BackButton.unselected.border}`
    }
    const newdays = days.filter((d) => d !== day);
    setBack(newBack)
    setDays(newdays)
   }
  }

  function Salvar(e) {
    e.preventDefault();
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const body = {
      name:  `${habito}`,
      days: days
    };

    const promise = axios.post(URL, body, {
      headers: {
        'Authorization': `Bearer ${user.u.token}`
      },
    })
    promise.then((habitos) => {
      alert("aqui deu certo")
       console.log(habitos.data)
    });
    promise.catch((err) => {
      alert("tá dando errado")
     console.log(err.response.data);
    });
  }
  return (
    <>
      <Add>
        <p>Meus hábitos</p>
        <button onClick={adicionar}>+</button>
      </Add>
      <Habitos className={addhabito} >
        <form onSubmit={Salvar}> 
          <div>
            <div>
              <input
                id="habito"
                nome="habito"
                type="text"
                value={habito}
                onChange={(e) => setHabito(e.target.value)}
                placeholder="nome do hábito"
                required
              />
              <div>
                <ul>
                {/* {days.map(seat => (<li onClick={(d, index) => dia(index)}>D</li> ))} */}
                  <li style={back[0]} onClick={() => dia(0)}>D</li>
                  <li style={back[1]} onClick={() => dia(1)}>S</li>
                  <li style={back[2]} onClick={() => dia(2)}>T</li>
                  <li style={back[3]} onClick={() => dia(3)}>Q</li>
                  <li style={back[4]} onClick={() => dia(4)}>Q</li>
                  <li style={back[5]} onClick={() => dia(5)}>S</li>
                  <li style={back[6]} onClick={() => dia(6)}>S</li>
                </ul>
              </div>
              <div className="salvar">
                <p onClick={cancelar}>Cancelar</p> <button type="submit">Salvar</button>
              </div>
            </div>
          </div>
        </form>
      </Habitos>
    </>
  );
}

const Add = styled.div`
  padding: 10px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }
  button {
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border: none;
    border-radius: 5px;
    font-size: 27px;
    line-height: 34px;
    text-align: center;
    color: #ffffff;
  }
`;
const Habitos = styled.div`
  width: 340px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 20px 0 5px;
  form{
    width: 310px;
    margin: 0 auto;
  }
  > div {
    width: 310px;
    margin: 0px auto;
    padding: 20px 0 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    width: 303px;
    height: 45px;
    background: #ffffff;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #dbdbdb;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
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
      border-radius: 5px;
    }
  }
  .salvar {
    width: 303px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    p {
      margin-right: 25px;
      font-weight: 400;
      font-size: 15.976px;
      line-height: 20px;
      text-align: center;
      color: #52b6ff;
    }
    button {
      width: 84px;
      height: 35px;
      background: #52b6ff;
      border-radius: 5px;
      border: none;
      font-weight: 400;
      font-size: 15.976px;
      line-height: 20px;
      text-align: center;
      color: #ffffff;
    }
  }
`;
