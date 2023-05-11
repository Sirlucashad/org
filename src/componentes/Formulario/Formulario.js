import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props)=>{

    const[nombre, actualizarNombre] = useState("");
    const[puesto, actualizarPuesto] = useState("");
    const[foto, actualizarFoto] = useState("");
    const[equipo, actualizarEquipo] = useState("");
    const[titulo,actualizarTitulo] = useState("");
    const[color, actualizarColor] = useState("");

    const {registrarColaborador, crearEquipo} = props;

    const manejarEnvio = (e)=>{
        e.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
        console.log(datosAEnviar)
    }

    const manejarNuevoEquipo = (e)=>{
        e.preventDefault();
        crearEquipo({titulo, colorSecundario: color});
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Crea el colaborador:</h2>
            <Campo titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} actualizarValor={actualizarNombre}/>
            <Campo titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={actualizarPuesto}/>
            <Campo titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} actualizarValor={actualizarFoto}/>
            <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo} equipos ={props.equipos}/>
            <Boton>
                Crear 
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Crea el equipo:</h2>
            <Campo titulo="Título" placeholder="Ingresar titulo" required valor={titulo} actualizarValor={actualizarTitulo}/>
            <Campo titulo="Color" placeholder="Ingresar color en hex" required valor={color} actualizarValor={actualizarColor} type="color"/>
            <Boton>Registrar equipo</Boton>
        </form>
    </section>
}

export default Formulario