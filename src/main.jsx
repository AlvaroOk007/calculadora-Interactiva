//import React from 'react' //importamos react desde react
import ReactDOM from 'react-dom/client' 
//Importo mi componente App
import {App} from './App.jsx'

//Importo mi CSS
import './main.css'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <>
    <App />
  </>
)
//Main.jsx es el punto de entrada de nuestra aplicacion. 
//React.Fragment sirve para envolver un conjunto de componentes
//Componente es una funcion que crea un elemento para no repetir código
//Expresiones tengo que poner entre {} para que renderice porque todo trata como un objeto
//React se Manej con PascalCase
//Para añadir una clase en react debo usar  
//Las props son inmutables 

//LOS ESTADOS NO SE PROPAGAN PARA ABAJO
//Cuando recorro un array o una lista, la key es importante, porque identifica a cada elemento, ésta key debe ser única.