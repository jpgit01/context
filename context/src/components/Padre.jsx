import { useContext } from "react";
import { MiContexto } from "../context/myContext";
import { Button } from 'react-bootstrap';



export default function padre() {
    const contenidoContexto = useContext(MiContexto)
    return(
        <>
        <Button variant={contenidoContexto.color} className="m-3" onClick={()=>{
            contenidoContexto.setSaludo('click padre, con context')
            contenidoContexto.setColor('success')}
            }><h1 >Hola soy el padre: {contenidoContexto.saludo}</h1></Button>
        </>
    );
}