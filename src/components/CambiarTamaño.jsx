// CambiarTamaño.js
import React, { useState } from 'react';
import Reloj from '../components/Reloj.astro';

export default function CambiarTamaño() {
  const [tamaño, setTamaño] = useState('pequeño');

  function cambiarTamaño() {
    setTamaño(tamaño === 'pequeño' ? 'grande' : 'pequeño');
    console.log(tamaño);
  }

  return (
    <div>
      <div className='reloj'>
        <Reloj color='#f0f' tamaño={tamaño} />
      </div>
      <button id='dav' data-confetti-button onClick={cambiarTamaño}>
        cambiar el tamaño
      </button>
    </div>
  );
}