import './Cita.css'

const Cita = ({mascota, duenio, fecha, hora, sintomas, eliminarCita, index}) => {
  return (
    <div className="cita">
        <p>
        Mascota: <span>{mascota}</span>
      </p>
      <p>
        Dueño: <span>{duenio}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Sintomas: <span>{sintomas}</span>
      </p>
      <button className="button eliminar u-full-width" onClick={() => eliminarCita(index)}>Eliminar ×</button>
    </div>
  );
};

export default Cita;
