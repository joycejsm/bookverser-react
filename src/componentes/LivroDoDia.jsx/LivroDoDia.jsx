import bigGrid from "../../assets/svgs_collection/big-grid.svg";
import "./LivroDoDia.css";

const LivroDoDia = () => {
  return (
    <>
      <section id="conteudo-2">
        <article>
          <h2>Livro do dia</h2>
          <p>
            Entendendo Algoritmos: Um Guia Ilustrado Para Programadores e Outros
            Curiosos" de Aditya Y. Bhargava é um livro que apresenta uma
            abordagem acessível e visual para entender algoritmos. Ele é repleto
            de ilustrações e exemplos práticos que tornam conceitos complexos
            mais fáceis de compreender. O livro aborda tarefas básicas como
            ordenação e busca, e depois avança para problemas mais complexos
            como compressão de dados e inteligência artificial. Cada exemplo é
            detalhado e inclui diagramas e códigos completos em Python3. É uma
            excelente leitura para programadores autodidatas, engenheiros e
            qualquer pessoa interessada em aprender mais sobre algoritmos de uma
            maneira envolvente e visual
          </p>
          <button id="button-comment">Comente</button>

          <img src={bigGrid} alt="" id="big-grid" />
          <div id="img-livro">
            <img
              src="https://m.media-amazon.com/images/I/71Vkg7GfPFL._AC_UF1000,1000_QL80_.jpg"
              alt="Livro Entendendo algoritmos"
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default LivroDoDia;
