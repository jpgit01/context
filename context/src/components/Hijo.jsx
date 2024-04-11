import { useContext } from "react";
import { MiContexto } from "../context/myContext";

export default function hijo() {
    const contenidoContexto = useContext(MiContexto)
    return(
        <>
        <a onClick={()=> contenidoContexto.setSaludo('click hijo, con context')}><h1>Hola soy el hijo: {contenidoContexto.saludo}</h1></a>
        </>
    );
}