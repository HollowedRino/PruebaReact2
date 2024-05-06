import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function MiBoton2(props){
//function MiBoton2({contador, handlerClick}){
  return(
    <button type='button' className='miBoton2' onClick={props.handlerClick}>Se hicieron {props.contador} clicks</button>
    //<button type='button' className='miBoton2' onClick={handlerClick}>Se hicieron {contador} clicks</button>
  );
}

function MiBoton(){
  const [contador,setContador] = useState(0);

  function handlerClick(){
    setContador(contador + 1);
  }

  return(
    <button type='button' onClick={handlerClick}>Se hicieron {contador} clicks</button>
  );
}

function MiForm(){
  return(
    <form>
      <label>Producto</label>
      <input type='text' id='producto' placeholder='Nombre del producto'></input><br/>
      <label>EsFruta</label>
      <input type='checkbox' id='tipoProducto'></input><br/>
      <GuardarProducto/>
    </form>
  );
}

function GuardarProducto(){
  return(
    <button type='button'>Guardar</button>
  );
}

function Lista(){
  return(
    <ul>
      
    </ul>
  );
}

function App() {
  const [contador,setContador] = useState(0);

  function handlerClick(){
    setContador(contador + 1);
  }

  return (
    <>
      <h1>Manejo de estados</h1>
      <MiBoton/>
      <MiBoton/>
      <h1>Estado compartido</h1>
      <MiBoton2 contador={contador} handlerClick={handlerClick}/>
      <MiBoton2 contador={contador} handlerClick={handlerClick}/>
      <h1>Form</h1>
      <MiForm/>
    </>
  );
}

export default App;
