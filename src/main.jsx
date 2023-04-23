import React from 'react'
import ReactDOM from 'react-dom/client'
import  { HolaMundo }  from './componente/HolaMundo.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
 <HolaMundo usuario={{nombre:'damian', apellido:'adamo'}} id={1} />
  </React.StrictMode>,
 
)
