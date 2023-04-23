import React from 'react'
import ReactDOM from 'react-dom/client'
import { HolaMundoApp } from './HolaMundoApp'
//import  { HolaMundo }  from './componente/HolaMundo.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
 <HolaMundoApp usuario={{nombre:'damian', apellido:'adamo'}} 
 id={2} titulo={'hola Mundo'} />
  </React.StrictMode>,
 
)
