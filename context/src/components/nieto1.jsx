import { useContext } from "react";
import { MiContexto } from "../context/myContext";

export default function nieto1() {
    const contenido1 = useContext(MiContexto)
  return <>
  <h1>Soy el nieto 1: {contenido1.saludo}</h1></>;
}
