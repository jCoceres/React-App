
import './App.css';

function Personas({nombre,edad,color}) {
  return (
    <div 
    className="Personas"
    style={{backgroundColor: color}}
    >
      <h3>Nombre: {nombre}</h3>
      <p>Edad: {edad}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <Personas nombre="Jennifer" edad="31"/>
      <Personas nombre="Jorge" edad="40" color="#e3f0e6"/>
      <Personas nombre="Pedro" edad="25" color="#d9e3cb"/>
      <Personas nombre="Maria" edad="15" color="#efd2cc"/>
    </div>
  );
}

export default App;
