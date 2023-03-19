import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder.toLowerCase()}...`

    return (
        <div className="campo-texto">
            <label> {props.label} </label>
            <input placeholder={'Digite o seu ' + placeholderModificada}/>
        </div>
    )
}

export default CampoTexto