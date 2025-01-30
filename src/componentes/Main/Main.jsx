import Autores from "../Autores/Autores";
import Contato from "../Contato/Contato";
import Conteudo from "../Conteudo/Conteudo";
import Footer from "../Footer/Footer";
import LivroDoDia from "../LivroDoDia.jsx/LivroDoDia";
import Videos from "../Videos/Videos";
import "./Main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <main>
        < Outlet/>
        
      </main>
    </>
  );
};

export default Main;
