import Colaborador from "../Colaborador";
import "./Equipo.css";
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {

    const{colorPrimario, colorSecundario, titulo, id} = props.datos;
    const{colaboradores, eliminarColaborador, actualizarColor, like} = props;

    return <> { colaboradores.length > 0 && 
    <section className="equipo" style ={{backgroundColor:hexToRgba(colorSecundario,0.6)}}>

        <input
            type="color"
            className="input-color "
            value={colorSecundario}
            onChange={(evento)=>{
                actualizarColor(evento.target.value, id)
            }}

        /> 
      
            
        
        <h3 style={{borderColor : colorSecundario}}>{titulo}</h3>
        <div className="colaboradores">
            {colaboradores.map((colaborador, index)=> <Colaborador datos={colaborador} key={index} colorSecundario={colorSecundario} eliminarColaborador={eliminarColaborador} like={like}/>)}
        </div>

    </section> } </>
}

export default Equipo