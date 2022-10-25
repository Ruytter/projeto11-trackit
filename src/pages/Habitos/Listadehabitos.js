// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Li from "./Li";
import styled from "styled-components";

export default function Listadehabitos(props) {
  const { days, name } = props.listahabitos;
  let listaDays = ["D", "S", "T", "Q", "Q", "S", "S"];

  if (name !== undefined && days !== undefined) {
    return (
      <Habitos>
        <div>
          <p>{name}</p>
          <ion-icon name="trash-outline"></ion-icon>
        </div>
        <ul>
          {listaDays.map((day, index) => (
            <Li
              key={index}
              day={day}
              isSelected={days.some((d) => index === d)}
            />
          ))}
        </ul>
      </Habitos>
    );
  }

  if (name === undefined && days === undefined) {
    return (
      <Habitos>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </Habitos>
    );
    }
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
  }
  img {
    background: #666666;
  }
`;
