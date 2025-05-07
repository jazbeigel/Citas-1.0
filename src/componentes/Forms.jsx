// Forms.jsx
import { useState } from 'react';

function Forms({ agregarCita }) { 
    
  const [datosCita, setDatosCita] = useState({
    nombre: '',
    duenio: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const handleChange = (e) => {
    setDatosCita({
      ...datosCita,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); //hace que no se recargue la pagina y se puedan ver las
    agregarCita(datosCita);
    setDatosCita({
      nombre: '',
      duenio: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input type="text" name="nombre" value={datosCita.nombre} onChange={handleChange} class="u-full-width" placeholder="Nombre Mascota"/>
        <label>Nombre Dueño</label>
        <input type="text" name="duenio"  value={datosCita.duenio} onChange={handleChange} class="u-full-width" placeholder="Nombre dueño de la mascota" />
        <label>Fecha</label>
        <input type="date" name="fecha"  value={datosCita.fecha} onChange={handleChange} class="u-full-width"/>
        <label>hora</label>
        <input type="time" name="hora" value={datosCita.hora} onChange={handleChange}  class="u-full-width" />
        <label>Sintomas</label>
        <textarea name="sintomas" value={datosCita.sintomas} onChange={handleChange} class="u-full-width"></textarea>
        <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
    </form>
  );
}

export default Forms;
