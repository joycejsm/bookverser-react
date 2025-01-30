import Header from "./componentes/Header/Header"
import './App.css'
import Main from "./componentes/Main/Main"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Conteudo from "./componentes/Conteudo/Conteudo";
import LivroDoDia from "./componentes/LivroDoDia.jsx/LivroDoDia";
import Videos from "./componentes/Videos/Videos";
import Autores from "./componentes/Autores/Autores";
import Footer from "./componentes/Footer/Footer";
import Contato from "./componentes/Contato/Contato";

function App() {
  

  return (
    <><Router>
      
          <Header />
          <Main>
      
            <Routes>
                <Route path="/conteudo" component={<Conteudo />} />
                <Route path="/livrododia" component={<LivroDoDia />} />
                <Route path="/videos" component={<Videos/>} />
                <Route path="autores" component={<Autores/>} />
                <Route path="/contato" component={<Contato />} />           
            </Routes>
            <Footer />
      
          </Main>
    </Router>

    </>
  )
}

export default App
