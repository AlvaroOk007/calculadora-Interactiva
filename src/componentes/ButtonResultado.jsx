import '../hojas-estilos/ButtonResultado.css'
export function ButtonResultado({manejarClick}){
    return(
        <button 
            className="button-resultado"
            onClick={manejarClick}
        >
            =
        </button>
    )
}