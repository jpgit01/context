import { useContext } from "react";
import { MiContexto } from "../context/myContext";

import { Button } from 'react-bootstrap';

export default function nieto() {
    const contenidoContexto = useContext(MiContexto)
    return(
        <>
        <Button variant="warning" className="m-3" onClick={() =>contenidoContexto.setSaludo('click nieto, con context')}><h1 >Hola soy el nieto: {contenidoContexto.saludo}</h1></Button>
        </>
    );
}