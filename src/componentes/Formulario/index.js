import "./Formulario.css";
import CampoTexto from "./../CampoTexto";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="nome" />
        <CampoTexto label="Cargo" placeholder="cargo" />
        <CampoTexto label="Imagem" placeholder="endereço de imagem" />
      </form>
    </section>
  );
};

export default Formulario;
