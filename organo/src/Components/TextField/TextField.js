import "./TextField.css"

export const TextField = (props) => {
    
    const placeholderModificada = `Digite seu ${props.label == "Imagem" ? `endereço de imagem` : props.label}`

    return(
        <div className="text-field">
            <label>{props.label}</label>
            <input placeholder={placeholderModificada}/>
        </div>
    )
}