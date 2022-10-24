import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Habitos from "./pages/Habitos/Habitos";
import Hoje from "./pages/Hoje/Hoje";
import Historico from "./pages/Hiatorico/Historico";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import AuthProvider from "./contexts/auth";
import { useState } from "react";
import { BackPage } from "./constants/colors"

function App() {
  const [backpages, setBackpages] = useState(`firstcolor`)
  return (
    <BrowserRouter>
    <AuthProvider>
    <Container backpages= {backpages} >
      <Routes>
        <Route path="/" element={<Login/> }></Route>
        <Route path="/cadastro" element={<Cadastro/> }></Route>
        <Route path="/habitos" element={<Habitos setBackpages= {setBackpages}/> }></Route>
        <Route path="/hoje" element={<Hoje setBackpages= {setBackpages}/>}></Route>
        <Route path="/historico" element={<Historico setBackpages= {setBackpages}/> }></Route>
      </Routes>
    </Container>
    </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
const Container = styled.div`
width: 414px;
margin: 0 auto;
background-color:  ${props => BackPage[props.backpages].back};
/* background: #FFFFFF; */
/* background: #E5E5E5; */
`
