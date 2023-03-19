import "./Formulario.css";
import CampoTexto from "./../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
  const times = [
    "Programação",
    "Front-end",
    "Data-Science",
    "Devops",
    "UX e Desing",
    "Mobile",
    "Inovação e Gestão",
  ];

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Form foi submetido");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="nome" obrigatorio={true} />
        <CampoTexto label="Cargo" placeholder="cargo" obrigatorio={true} />
        <CampoTexto label="Imagem" placeholder="endereço de imagem" />
        <ListaSuspensa label="Programação" itens={times} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
