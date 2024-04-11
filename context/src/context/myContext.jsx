import React, {useState} from "react"

export const MiContexto = React.createContext({})

export default function EjemploContextoProvider({children}){
    const [saludo, setSaludo] = useState('Estoy saludando con context...')
    const [color, setColor] = useState('primary')

    return(
        <MiContexto.Provider value={{saludo, setSaludo, color, setColor}}>
            {children}
        </MiContexto.Provider>
    )
}
