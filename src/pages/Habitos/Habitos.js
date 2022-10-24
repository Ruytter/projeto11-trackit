import Header from "../../components/Header";
import Rodape from "../../components/Footer"
import Addhabito from "./Addhabitos";
import Listadehabitos from "./Listadehabitos";
import { useEffect, useState } from "react";
import axios from "axios";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
export default function Habitos(props) {
  const { setBackpages } = props;
  setBackpages("secondcolor")
  const [listahabitos, setListahabitos] = useState("");
  useEffect(() => {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const promisse = axios.get(URL);

    promisse.then((res) => {
      alert("deu certo")
      setListahabitos(res.data);
    });

    promisse.catch((err) => {
      // console.log(err.response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Addhabito />
      {listahabitos? listahabitos.map((h) => (<Listadehabitos key={h.id}/>)): <Listadehabitos/>}
      <Rodape />
    </>
  );
}
