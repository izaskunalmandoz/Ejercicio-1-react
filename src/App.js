import logo from './logo.svg';
import './App.css';
import Input from './componentes/input';
import Boton from './componentes/boton';
import Result from './componentes/result';
import { useState } from 'react';

function App() {

  const [numero, setNumero] = useState('');
  const [multi, setMulti] = useState('');

  const addNumero = (numero) => {
    setNumero(numero);
  };

  const addMulti = (multi) => {
    setMulti(multi);
  };

  return (
    <div className="App">
      <Input addNumero={addNumero} />
      <Boton addMulti={addMulti} multi={multi} />
      <Result numero={numero} multi={multi} />
    </div>
  );
}

export default App;