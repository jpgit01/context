import React, { useState } from 'react'
const MiContexto = React.createContext({})

export default function EjemploContextoProvider({children}){
    const [saludo, setSaludo] = useState('hola estoy saludando')
    
    return(
        <MiContexto.Provider>
            {children}
        </MiContexto.Provider>
    )
}
