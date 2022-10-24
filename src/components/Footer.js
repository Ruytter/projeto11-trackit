import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Footer() {
  return (
    <Rodape>
      <Link to={`/habitos`}>
        <p>Hábitos</p>
      </Link>
      <img src="../img/Ellipse 2.png" alt="" />
      <Link to={`/historico`}>
        <p>Histórico</p>
      </Link>
    </Rodape>
  );
}
const Rodape = styled.div`
  height: 70px;
  background: rebeccapurple;
  /* background: #ffffff; */
  position: relative;
  display: flex;
  justify-content: space-around;
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }
  img {
    width: 91px;
    height: 91px;
    position: absolute;
    bottom: 10px;
  }
`;
