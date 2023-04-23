import PropTypes from 'prop-types'
import { Titulo } from './componente/titulo';
import { UsuarioDetalle } from './componente/usuarioDetalle';

export const HolaMundoApp=({usuario,id,titulo})=>{
  //  const name = 'pepe'

    return( 
        <>
      <Titulo titulo={'titulo'}></Titulo>
   <UsuarioDetalle usuario ={usuario} id={id}/>
    
    </>
    );
}
HolaMundoApp.propTypes ={
    titulo: PropTypes.string.isRequired,
    id: PropTypes.number,
    usuario:PropTypes.object.isRequired
    
}
HolaMundoApp.defaultProps = {
    titulo : 'hola mundo por defecto'
}