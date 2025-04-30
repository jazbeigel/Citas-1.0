
import { useState } from 'react'
import './App.css'
import Citas from './componentes/Citas'
import Forms from './componentes/Forms'

function App() {
  const [citas, setCitas] = useState([]);

  return (
    <>
      <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <h2>Crear mi Cita</h2>
            <Forms arrayDeCitas={citas} funcionQueActualizaElArrayDeCitas={setCitas} />
          </div>
          <div class="one-half column">
            <h2>Administra tus citas</h2>
            <Citas arrayDeCitas={citas} funcionQueActualizaElArrayDeCitas={setCitas} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
