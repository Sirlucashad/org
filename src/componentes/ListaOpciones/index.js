import "./ListaOpciones.css"

const ListaOpciones = (props)=>{


    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" defaultValue=  "" hidden disabled>Seleccionar equipo</option>
           {props.equipos.map((equipo,index)=> <option key={index}>{equipo}</option>)}
        </select>
    </div>
    
}







export default ListaOpciones