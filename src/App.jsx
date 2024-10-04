import { Button } from "./componentes/Button";
import {evaluate} from 'mathjs'; //libreria para calcular
import { useState } from "react";
import { ButtonResultado } from "./componentes/ButtonResultado";
import { Display } from "./componentes/display";
import { ButtonClear } from "./componentes/ButtonClear";
import Logo from "./imagenes/juniorDev.png"
import './main.css'

export function App(){
    const [input,setInput] = useState("0") //Creo un estado inicial y un futuro estado 
    const add = (valor)=>{ 
        console.log(input.length)
        if(input.length === 1 && input === "0" && valor !== "."){//Si estoy en el primer numero, y ese numero es 0 entonces reemplaza ese 0 por el input
            setInput(valor)
        }
        else if(input === "Syntax error"){//En caso de haber error de sintaxis solo reemplaza por los numeros ingresados
            setInput(valor)
        }else if(input.length === 1 && input === "0" && valor === "."){//en caso de estar en la primera posicion, y hay un cer y que quiero agregar un punto solo corre el cero y pone el punto
            setInput(input + valor)
        }else if(valor === "." && input[input.length - 1] === "."){
            setInput(input)
        }
        else if((input + valor).length < 30){//controlo cantidad de entrada
            setInput(input + valor)
        }
    };
    const resetC = ()=>{
        setInput("0")
    }
    const resultado = ()=>{
        if (input){
            try {
                const resultado = evaluate(input);
                setInput(`${resultado}`);
            } catch (error) {
                setInput("Syntax error");
            }
        }
    };
    const deleteUltimo = () =>{
        if(input.length === 1){
            setInput("0")
        }else{
            setInput(input.slice(0,input.length-1))
        }
    }

    //Retorno de componente
    return(
        <div className="con">
            <div className="contenedor-mi-logo">
                <img className = "mi-logo"src={Logo} alt="Logo Junior Dev" />
            </div>
            <section className = "container-calculator ">
                
                <article className="conteiner-display">
                    <Display input={input}/>
                </article>
                <article className="button--n-o">
                    <div className="numbers-button">
                        <ButtonClear manejarClick = {resetC}>AC</ButtonClear>
                        <Button manejarClick={add}>(</Button>
                        <Button manejarClick={add}>)</Button>
                        <Button manejarClick={add}>1</Button>
                        <Button manejarClick={add}>2</Button>
                        <Button manejarClick={add}>3</Button>
                        <Button manejarClick={add}>4</Button>
                        <Button manejarClick={add}>5</Button>
                        <Button manejarClick={add}>6</Button>
                        <Button manejarClick={add}>7</Button>
                        <Button manejarClick={add}>8</Button>
                        <Button manejarClick={add}>9</Button>
                        <Button manejarClick={add}>.</Button>
                        <Button manejarClick={add}>0</Button>
                        <Button manejarClick={deleteUltimo}>C</Button>

                        
                    </div>
                    <div className="operator-button">
                        <Button manejarClick={add}>%</Button>
                        <Button manejarClick={add}>/</Button>
                        <Button manejarClick={add}>+</Button>
                        <Button manejarClick={add}>-</Button>
                        <Button manejarClick={add}>*</Button>
                    </div>
                </article>
                <ButtonResultado manejarClick = {resultado} /> 
            </section>
            <footer>
                <p className="contenido-footer"> { "<Pagina Creada por Álvaro BravoPagina />"}</p>
            </footer>
        </div>
    )
}