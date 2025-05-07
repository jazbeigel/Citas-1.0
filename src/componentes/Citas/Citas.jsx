import Cita from "../Cita/Cita";
import './Citas.css'

const Citas = ({ citas,  eliminarCita }) => {
  return (
    <>
      {citas.length === 0 ? (
        <p className="mensaje-vacio">No hay citas aún</p>) : 
        
        (citas.map((cita, index) => (
          <Cita
            key={index}
            index = {index} 
            eliminarCita = {eliminarCita} 
            mascota = {cita.nombre}
            duenio = {cita.duenio}
            fecha = {cita.fecha}
            hora = {cita.hora}
            sintomas = {cita.sintomas}
          /> )))
      }
    </>
  );
};

export default Citas;
