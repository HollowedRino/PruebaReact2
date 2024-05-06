import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//function MiBoton2(props){
function MiBoton2({contador, handlerClick}){
  return(
    //<button type='button' onClick={props.handlerClick}>Se hicieron {props.contador} clicks</button>
    <button type='button' onClick={handlerClick}>Se hicieron {contador} clicks</button>
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
    </>
  );
}

export default App;
