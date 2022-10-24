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
  const [backbutton, setBackbutton] = useState(`unselected`)  
  //console.log (user.u.token)
  // useEffect(()=> {
  //   for(let i=0; i<7; i++){
  //     if(i === days[i]){
  //       setBackbutton("selected")
  //     }else{
  //       setBackbutton("unselected")
  //     }
  //   }
    
  // },[days])

  function adicionar(){
    setAddhabito("")
  }
  function cancelar(){
    setAddhabito("hide")
  }


  function dia(e, day) {
    console.log(days);
    console.log(e.target);
    if (days.includes(day)) {
      const newdays = days.filter((d) => d !== day);
      setDays(newdays);
    }else{
    setDays([...days, day])
    }
  }

 





  function Salvar(e) {
    e.preventDefault();
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const body = {
      name:  `${habito}`,
      days: {days}
    };

    const promise = axios.post(URL, body, {
      header: {
        'Authorization': `Bearer ${user.u.token}`
      },
    })

    // const promise = axios.post(URL, body);
    promise.then((habitos) => {
      alert("aqui deu certo")
       console.log(habitos.data)
      //   {
      //     id: 3,
      //     name: "Joe",
      //     image: "https://http.cat/411.jpg",
      //     email: "joe@respondeai.com.br",
      //     password: "123456",
      //     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjIxMjg0NzExfQ.b8e3bYm7TnU5p6pfrCPPbzboax6gvh_gGNFR4T51FxY"
      // }
    });
    promise.catch((err) => {
      alert("tá dando errado")
     console.log(err.response.data);
    });
  }
  // console.log(user.token);
  return (
    <>
      <Add>
        <p>Meus hábitos</p>
        <button onClick={adicionar}>+</button>
      </Add>
      <Habitos className={addhabito} backbutton= {backbutton}>
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
                  <li onClick={(e) => dia(e, 0)}>D</li>
                  <li onClick={(e) => dia(e, 1)}>S</li>
                  <li onClick={(e) => dia(e, 2)}>T</li>
                  <li onClick={(e) => dia(e, 3)}>Q</li>
                  <li onClick={(e) => dia(e, 4)}>Q</li>
                  <li onClick={(e) => dia(e, 5)}>S</li>
                  <li onClick={(e) => dia(e, 6)}>S</li>
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
  > div {
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
      color: ${props => BackButton[props.backbutton].color};;
      background: ${props => BackButton[props.backbutton].back};;
      border: 1px solid ${props => BackButton[props.backbutton].border};;
      /* color: #ffffff;
      background: #cfcfcf;
      border: 1px solid #cfcfcf; */
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
