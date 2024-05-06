import logo from './logo.svg';
import './App.css';

function MiBoton(){
  return(
    <button type='button'>Hacer click</button>
  );
}

function App() {
  return (
    <>
      <MiBoton/>
      <MiBoton/>
    </>
  );
}

export default App;
