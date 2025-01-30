import logo from "../../assets/logo.jpg";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>

        <header>
          <nav>
            <div id="logo">
              <img src={logo} alt="Logo do site" />
            </div>
            <ul>
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/conteudo">Conteúdo</Link>
              </li>
              <li>
                <Link to="/videos">Vídeos</Link>
              </li>
              <li>
                <Link to="/autores">Autores</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
            <form action="/search" method="get">
            
            
              <input
                type="text"
                id="pesquisa"
                name="query"
                placeholder="Digite sua pesquisa"
                required
              />
              <button type="submit" id="button-search">
                Pesquisar
              </button>
            </form>
          </nav>
        </header>

    </>
  );
};

export default Header;
