import { useContext } from "react";
import { MiContexto } from "../context/myContext";



export default function padre() {
    const contenidoContexto = useContext(MiContexto)
    return(
        <>
        <a onClick={()=>contenidoContexto.setSaludo('click padre, con context')}><h1 >Hola soy el padre: {contenidoContexto.saludo}</h1></a>
        </>
    );
}