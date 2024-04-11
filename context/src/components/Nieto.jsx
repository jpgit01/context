import { useContext } from "react";
import { MiContexto } from "../context/myContext";

export default function nieto() {
    const contenidoContexto = useContext(MiContexto)
    return(
        <>
        <a onClick={() =>contenidoContexto.setSaludo('click nieto, con context')}><h1 >Hola soy el nieto: {contenidoContexto.saludo}</h1></a>
        </>
    );
}