import React from "react";
import { Link } from 'react-router-dom';

const CrearCuenta = () => {
    return  (
        <div>
      
      <h1>Crear cuenta</h1>
      <h2>Ingrese los datos del usuario</h2>
      <input placeholder= 'Nombre' />
      <input placeholder= 'Email' />
      <input placeholder= 'Password' />
      <input placeholder= 'Confirmar password' />
      <button> Crear cuenta </button>
      <Link to={"/"}>Regresar</Link>
    </div>
    )
}

export default CrearCuenta;