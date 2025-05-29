import { useState, useEffect } from 'react';
import './App.css';
import Citas from './componentes/Citas/Citas';
import Forms from './componentes/Forms';

function App() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
      setCitas(JSON.parse(citasGuardadas)); //las paso a el formato que me conviene a mi para guardarlas con setCitas
    }
  }, []);

  useEffect(() => {
    if (citas.length) {
      localStorage.setItem('citas', JSON.stringify(citas)); //las guardo como string en localstorage
    }
  }, [citas]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  }; //agrego la cita nueva

  const eliminarCita = (index) => {
    const nuevasCitas = citas.filter((_, i) => i !== index); //"_" es el elemento actual del array, no lo necesitamos, por eso se llama _
    setCitas(nuevasCitas); // i !== index es la condición que pide dejar todos los elementos cuyo índice NO sea "index"
    localStorage.setItem('citas', JSON.stringify(nuevasCitas)); //las guardo como string en localstorage
  };

  return (
    <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Forms agregarCita={agregarCita} />
          </div>
          <div className="one-half column lista-citas">
            <h2>Administra tus citas</h2>
            <Citas citas={citas} eliminarCita={eliminarCita} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
