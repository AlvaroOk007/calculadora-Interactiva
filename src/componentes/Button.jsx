import '../hojas-estilos/Button.css'
export function Button({manejarClick,children} ){  
    const esOperador = valor =>{
        return isNaN(valor) && (valor != ".") && (valor != "C")
    }
    return(
        <button 
        className={`button ${ esOperador(children) ? "operator" : ""}`}
        onClick={ () =>{manejarClick(children)}}
        > 
            {children} 
        </button>
    )
}