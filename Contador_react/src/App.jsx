import React, { useState } from 'react';
import "./App.css"

function Contador() {
  const [tiempo, setTiempo] = useState(0);

  const reducir = () => setTiempo(tiempo - 1);
  const incrementar = () => setTiempo(tiempo + 1);
  const reiniciar = () => setTiempo(0);

  return (
    <div className="body">
      <div className="reloj">
        <div className="contenedor-numeros">
          {String(tiempo).padStart(2, '0')}
        </div>
        <div className="contenedor-botones">
          <button onClick={reducir}>Reducir</button>
          <button onClick={reiniciar}>Reiniciar</button>
          <button onClick={incrementar}>Incrementar</button>
        </div>
      </div>
    </div>
  );
}

export default Contador;