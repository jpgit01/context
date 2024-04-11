import { useContext } from "react";
import { MiContexto } from "../context/myContext";

import { Button } from 'react-bootstrap';

export default function hijo() {
    const contenidoContexto = useContext(MiContexto)
    return(
        <>
        <Button variant="secondary" className="m-3" onClick={()=> contenidoContexto.setSaludo('click hijo, con context')}><h1>Hola soy el hijo: {contenidoContexto.saludo}</h1></Button>
        </>
    );
}