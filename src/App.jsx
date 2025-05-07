import { useState } from 'react'
import './App.css'
import Citas from './componentes/Citas/Citas'
import Forms from './componentes/Forms'

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]); //...citas crea una copia del array actual de citas. [...citas, cita] agrega al final de esa copia el nuevo objeto cita.
  };

  const eliminarCita = (index) => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1); 
    setCitas(nuevasCitas);
  };

  return (
    <>
      <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Forms agregarCita={agregarCita}/>
          </div>
          <div className="one-half column lista-citas">
            <h2>Administra tus citas</h2>
            <Citas citas={citas} eliminarCita={eliminarCita} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
