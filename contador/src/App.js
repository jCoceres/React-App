
import './App.css';
import React, { useState } from 'react';

function Contador () {
  const [count, setCount] = useState(0);
  const suma = ()=> setCount(count +1);
  const resta = ()=> setCount(count -1);
  const reset = ()=> setCount(0);
  
  return (
    <div className='text-center mt-4'>
      <h1>CONTADOR</h1>
      <p className='fs-4'>{count}</p>
      <button onClick={suma} className='btn btn-success btn-lg me-3'>Agregar</button>
      <button onClick={resta} className='btn btn-success btn-lg me-3'>Quitar</button>
      <button onClick={reset} className='btn btn-success btn-lg'>Reset</button>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Contador/>
    </div>
  );
}

export default App;

