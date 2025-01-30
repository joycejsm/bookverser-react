import "./Conteudo.css";

const Conteudo = () => {
  return (
    <>
      <section id="conteudo">
        <div className="losango">
          <img src="assets/pngegg.svg" alt="" />
        </div>

        <div className="foto-1">
          <img
            src="https://i.pinimg.com/736x/81/25/43/8125437e462adc5bc5eccfefcdac1aa6.jpg"
            alt=""
          />
        </div>
        <div className="grid-container">
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>

        <div />

        <h1>Bookverse - Sua Biblioteca Virtual</h1>
        <div id="intro">
          <p id="txt1">
            Bem-vindo ao Bookverse, onde a leitura e o aprendizado se encontram.
            Nossos serviços exclusivos promovem o compartilhamento de livros,
            resenhas e recursos educacionais, redefinindo a experiência de
            leitura.
          </p>
        </div>
      </section>
    </>
  );
};

export default Conteudo;
