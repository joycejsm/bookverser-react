import "./Contato.css";

const Contato = () => {
  return (
    <>
      <section id="contato">
        <h3 id="title-contact">Entre em contato</h3>
        <form action="/submit-form" method="post" id="contact" name="contatos">
          <div id="container-form-contato">
            <div className="container-inputs">
              <label htmlFor="nome">Nome:</label> <br />
              <input
                type="text"
                id="nome"
                placeholder="Primeiro nome"
                required
              />
            </div>
            <div className="container-inputs">
              <label htmlFor="sobrenome">Sobrenome:</label> <br />
              <input
                type="text"
                name=""
                id="sobrenome"
                placeholder="Sobrenome completo"
                required
              />
            </div>

            <div className="container-inputs">
              <label htmlFor="iemail">Email:</label> <br />
              <input
                type="email"
                name=""
                id="iemail"
                placeholder="lorem@email.com"
                required
              />
            </div>
            <div className="container-inputs">
              <p>
                <label htmlFor="texto">Deixe sua mensagem:</label>{" "} <br />
              </p>
              <textarea name="" id="texto" spellCheck={true}></textarea>
            </div>
            <div>
              <button type="submit" className="botao">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contato;
