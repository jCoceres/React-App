
import './App.css';
import React, { useState } from 'react';

function Contador () {
  const [count, setCount] = useState(0);
  const suma = ()=> setCount(count +1);
  
  return (
    <div className='text-center mt-4'>
      <h1>CONTADOR</h1>
      <p className='fs-4'>{count}</p>
      <button onClick={suma} className='btn btn-success btn-lg me-3'>Agregar</button>
      <button onClick={()=> setCount(count -1)} className='btn btn-success btn-lg me-3'>Quitar</button>
      <button onClick={()=> setCount(0)} className='btn btn-success btn-lg'>Reset</button>
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

