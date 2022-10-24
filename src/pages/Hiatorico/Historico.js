import Header from "../../components/Header";
import Rodape from "../../components/Footer";
import styled from "styled-components";
export default function Historico(props) {
  const { setBackpages } = props;
  setBackpages("secondcolor");
  return (
    <>
      <Header />
      <DivHistorico>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </DivHistorico>
      <Rodape />
    </>
  );
}
const DivHistorico = styled.div`
  width: 338px;
  margin: 0 auto;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  h1 {
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }
  p {
    font-size: 18px;
    line-height: 22px;
    color: #666666;
  }
`;
