//import { useState } from 'react'
import './App.css'
import Citas from './componentes/Citas'
import Forms from './componentes/form'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <h2>Crear mi Cita</h2>
            <Forms></Forms>
          </div>
          <div class="one-half column">
            <h2>Administra tus citas</h2>
            <Citas></Citas>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
