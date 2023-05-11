import {useState} from "react";
import './App.css';
import Header from "./componentes/Header/Header.js"
import Formulario from "./componentes/Formulario/Formulario.js"
import MiOrg from "./componentes/MiOrg/index.js"
import Equipo from "./componentes/Equipo"
import Footer from "./Footer/index.jsx"
import { v4 as uuid} from "uuid";





function App() {

  const[mostrarFormulario, actualizarMostrar] = useState(false);
  const[colaboradores, actualizarColaboradores] = useState([
    { 
      id: uuid(),
      equipo: "Front End",
      foto:"https://github.com/eduardo.png",
      nombre:"Eduardo Contreras",
      puesto: "Instructor",
      fav:false
  },
  { 
    id: uuid(),
    equipo: "Programación",
    foto:"https://github.com/erick.png",
    nombre:"Erick Escribas",
    puesto: "Instructor",
    fav:false
},
{ 
  id: uuid(),
  equipo: "UX y Diseño",
  foto:"https://github.com/ricardo.png",
  nombre:"Ricardo Gomez",
  puesto: "Instructor",
  fav:false
},
{ 
  id: uuid(),
  equipo: "Programación",
  foto:"https://github.com/carlos.png",
  nombre:"Carlos Espósito",
  puesto: "Instructor",
  fav:false
},
{ 
  id: uuid(),
  equipo: "Innovación y Gestión",
  foto:"https://github.com/alejandro.png",
  nombre:"Alejandro Urquiza",
  puesto: "Instructor",
  fav:false
},
    
  ]);
  const [equipos, actualizarEquipos] = useState([
    
    { 
      id: uuid(),
      titulo : "Programación",
      colorPrimario:"#D9F7E9",
      colorSecundario:"#57C278",
    },
    { 
      id: uuid(),
      titulo : "Front End",
      colorPrimario:"#E8F8FF",
      colorSecundario:"#82CFFA"
    },
    { 
      id: uuid(),
      titulo : "Data Science",
      colorPrimario:"#F0F8E2",
      colorSecundario:"#A6D157"
    },
    { 
      id: uuid(),
      titulo : "Devops",
      colorPrimario:"#FDE7E8",
      colorSecundario:"#E06B69"
    },
    { 
      id: uuid(),
      titulo : "UX y Diseño",
      colorPrimario:"#FAE9F5",
      colorSecundario:"#DB6EBF"
    },
    {
      titulo : "Móvil",
      colorPrimario:"#FFF5D9",
      colorSecundario:"#FFBA05"
    },
    { 
      id: uuid(),
      titulo : "Innovación y Desarrollo",
      colorPrimario:"#FFEEDF",
      colorSecundario:"#FF8A29"
    }     
  ])
  

  const cambiarMostrar = ()=>{
    actualizarMostrar(!mostrarFormulario);
  }

  const registrarColaborador= (colaborador) => {
    
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  //Actualizar  color de equipo

  const actualizarColor = (color,id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo)=>{
      if (equipo.id === id) {
        equipo.colorSecundario= color;
      }
      return equipo;
    })
    actualizarEquipos(equiposActualizados);

  }



  //eliminar colaborador

  const eliminarColaborador = (id) => {
    console.log ("Eliminar colaborador ", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => {
      return colaborador.id !== id
    })
    actualizarColaboradores(nuevosColaboradores)
  }

  //Crear equipo

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  //Funcion de like

  const like = (id)=>{
    console.log("Like: ",id);
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

 



  return (
    <div>
      <Header />
      {mostrarFormulario && 
      <Formulario  equipos ={equipos.map((equipo)=> equipo.titulo)} 
      registrarColaborador={registrarColaborador} crearEquipo = {crearEquipo}/>}  

      <MiOrg cambiarMostrar={cambiarMostrar}/>  
      {equipos.map((equipo) => <Equipo 
      datos = {equipo} 
      key={equipo.titulo} 
      eliminarColaborador={eliminarColaborador}
      actualizarColor={actualizarColor}
      like={like}
      colaboradores={colaboradores.filter((colaborador)=>colaborador.equipo ===equipo.titulo)}/>)}
      <Footer/>
   
    </div>
  );
  
}

export default App;
