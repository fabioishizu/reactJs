import './Form.css'
import TextField from '../TextField';

const Form = () => {
    return(
        <section className="forms">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome"/>
                <TextField label="Cargo"/>
                <TextField label="Imagem"/>
            </form>
        </section>
    )
}

export default Form