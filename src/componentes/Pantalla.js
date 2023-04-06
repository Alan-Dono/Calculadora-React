import React from 'react';
import '../hojas-de-estilo/Pantalla.css';

const Pantalla = ( {input} ) => ( //sintaxis de desestructuracion
  <div className='input'>
    {input}
  </div>
);
//definimos como una constante para que el valor pantalla no se pueda reasignar

export default Pantalla;