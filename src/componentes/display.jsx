import '../hojas-estilos/Display.css'
export function Display({input}){
    return(
        <span className="display">{input}
            <div className='parpadea'></div> 
        </span>
    )
}