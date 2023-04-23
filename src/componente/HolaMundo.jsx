import PropTypes from 'prop-types'

export const HolaMundo=({usuario,id,titulo='hola mundo'})=>{
  //  const name = 'pepe'

    return( 
        <>
        <h1> {titulo}</h1>
    <div>que tal {usuario.nombre} con el id {id+10}</div>
    
    </>
    );
}
HolaMundo.propTypes ={
    titulo: PropTypes.string.isRequired,
}