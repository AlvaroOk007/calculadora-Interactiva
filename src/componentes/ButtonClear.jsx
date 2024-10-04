import '../hojas-estilos/ButtonClear.css'
export function ButtonClear({manejarClick}){
    return(
        <button 
            className="button-reset"
            onClick={manejarClick}
        >
            AC
        </button>
    )
}