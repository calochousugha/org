import "./Colaborador.css"
import { IoCloseCircleSharp, IoHeartOutline, IoHeart } from "react-icons/io5";

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props

    return <div className="colaborador">
        <IoCloseCircleSharp onClick={() => eliminarColaborador(id)} className="eliminar"/>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <IoHeart color="red" onClick={() => like(id)}/> : <IoHeartOutline onClick={() => like(id)}/> }
        </div>
    </div>
}

export default Colaborador;