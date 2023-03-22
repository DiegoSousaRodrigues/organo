import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {

    const corSecundaria = { backgroundColor: props.corSecundaria };
    const corPrimaria = { borderColor: props.corPrimaria };

    return (

        (props.colaboradores.length > 0)
            ?
            <section className='time' style={corSecundaria}>
                <h3 style={corPrimaria}>{props.nome}</h3>
                <div className='colaboradores '>
                    {props.colaboradores.map(
                        colaborador =>
                            <Colaborador key={colaborador} corDeFundo={props.corPrimaria} colaborador={colaborador} />
                    )}
                </div>

            </section>
            : ''
    )
}

export default Time