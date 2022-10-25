import Header from "../../components/Header";
import Rodape from "../../components/Footer"
import Addhabito from "./Addhabitos";
import Listadehabitos from "./Listadehabitos";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/auth";
export default function Habitos(props) {
  const { user } = useContext(AuthContext);
  const { setBackpages } = props;
  const [listahabitos, setListahabitos] = useState([])

  useEffect(() => {
    setBackpages("secondcolor")
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;
    const promisse = axios.get(URL, {
      headers: {
        'Authorization': `Bearer ${user.u.token}`
      }
    });

    promisse.then((res) => {
      const habitos= [...res.data];
      setListahabitos(habitos)
    });

    promisse.catch((err) => {
      console.log(err.response.data);
    });
  }, [user, setBackpages]);
  return (
    <>
      <Header />
      <Addhabito />
      {listahabitos? listahabitos.map((h, index) => (<Listadehabitos key={h.id} listahabitos = {listahabitos[index]}/>)): <Listadehabitos listahabitos = {listahabitos}/>}
      <Rodape />
    </>
  );
}
