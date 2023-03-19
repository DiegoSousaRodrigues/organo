import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder.toLowerCase()}...`;

  let valor = 'Diego Sousa'

  const aoDigitado = (evento) => {
    valor = evento.target.value;
    console.log(valor);
  }

  return (
    <div className="campo-texto">
      <label> {props.label} </label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={"Digite o seu " + placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
