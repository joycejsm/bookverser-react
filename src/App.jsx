import Header from "./componentes/Header/Header";
import "./App.css";
import Main from "./componentes/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Conteudo from "./componentes/Conteudo/Conteudo";
import LivroDoDia from "./componentes/LivroDoDia.jsx/LivroDoDia";
import Videos from "./componentes/Videos/Videos";
import Autores from "./componentes/Autores/Autores";
import Footer from "./componentes/Footer/Footer";
import Contato from "./componentes/Contato/Contato";

function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route index element={<Conteudo />} />
            <Route path="conteudo" element={<Conteudo/>}/>
            <Route path="/livrododia" element={<LivroDoDia />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/autores" element={<Autores />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
          {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
