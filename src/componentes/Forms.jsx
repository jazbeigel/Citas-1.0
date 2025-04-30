
const Forms = ({ arrayDeCitas, funcionQueActualizaElArrayDeCitas }) => {
    
    
    const agregarCita = (e) => {
        e.preventDefault();

        const cita = {nombreMasc: e.target.mascota.value , dueño: e.target.propietario.value, fecha: e.target.fecha.value, hora: e.target.hora.value, sintomas: e.target.sintomas.value
        };
  
        funcionQueActualizaElArrayDeCitas(cita);
        alert("nombre= " + e.target.mascota.value);
    }
    return (
    <form onSubmit={agregarCita}> 
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota"  />
        <label>Nombre Dueño</label>
        <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota"/>
        <label>Fecha</label>
        <input type="date" name="fecha" class="u-full-width" />
        <label>hora</label>
        <input type="time" name="hora" class="u-full-width" />
        <label>Sintomas</label>
        <textarea name="sintomas" class="u-full-width"></textarea>
        <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
    </form>
    );
}

export default Forms;