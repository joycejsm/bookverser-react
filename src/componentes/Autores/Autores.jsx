import "./Autores.css";

const Autores = () => {
  return (
    <>
      <h2 id="title-autor">Autores</h2>
      <section id="autores">
        <div className="card-autor">
          <div className="autor">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51B9HnCqawL.jpg"
              alt="Autor de Entendendo Algoritmos"
            />
          </div>
          <h3>
            <strong>Nome:</strong> Aditya Y. Bhargava
          </h3>
          <p>
            <strong>Area de especialização:</strong> Engenheiro de Software
          </p>
          <p>
            <strong>Descrição:</strong> Aditya Bhargava é um engenheiro de
            software com experiência tanto em Ciência da Computação quanto em
            Artes Plásticas
          </p>
          <p>
            <strong>Redes sociais:</strong>
          </p>
          <span>
            <img src="assets/linkedin.png" alt="" id="linkedin-icon" />
            <a href="https://www.linkedin.com/in/adityabhargava/">linkedin</a>
          </span>
        </div>
      </section>
    </>
  );
};

export default Autores;
