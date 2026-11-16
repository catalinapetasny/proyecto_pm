
// Importamos useState desde React.
// Nos permite guardar y actualizar información dentro del componente.
import { useState } from 'react';

// Importamos el componente Logo.
import Logo from './Logo.jsx';

// Importamos el nombre de la aplicación desde data.js.
import { APP_NAME } from '../data.js';

// Componente que muestra la pantalla de inicio de sesión.
// Recibe onEnter como propiedad, que es la función que se ejecuta
// cuando el usuario intenta ingresar.
export default function Login({ onEnter }) {

  // Creamos una variable de estado llamada usuario.
  // setUsuario es la función que permite modificar su valor.
  // Al principio, el campo está vacío ('').
  const [usuario, setUsuario] = useState('');

  // Creamos otra variable de estado para guardar la contraseña.
  // setClave permite actualizar el valor de la contraseña.
  const [clave, setClave] = useState('');

  // Creamos la función enviar, que se ejecuta cuando
  // el usuario envía el formulario.
  const enviar = (e) => {

    // Evitamos que el formulario se envíe de la manera tradicional,
    // ya que eso provocaría que se recargue la página.
    e.preventDefault();

    // Ejecutamos la función onEnter que recibimos como propiedad.
    // Esta función permite continuar con el ingreso a la aplicación.
    onEnter();
  };

  return (
    // Contenedor principal de la pantalla de inicio de sesión.
    <main className="login">

      {/* Mostramos el logo de la aplicación.
          La propiedad size establece su tamaño en 132 píxeles. */}
      <Logo size={132} />

      {/* Mostramos el nombre de la aplicación. */}
      <h1 className="login-title">{APP_NAME}</h1>

      {/* Texto descriptivo que explica el objetivo de la aplicación. */}
      <p className="login-sub">
        Aprendé qué hace cada componente y cómo armarlo sin romper nada.
      </p>

      {/* Formulario de inicio de sesión.
          onSubmit ejecuta la función enviar cuando se envía el formulario. */}
      <form className="login-form" onSubmit={enviar}>

        {/* Campo para ingresar el nombre de usuario. */}
        <label>
          Usuario

          {/* Campo de texto vinculado a la variable usuario.
              value muestra el valor actual del estado.
              onChange detecta cuando el usuario escribe
              y setUsuario actualiza el valor guardado. */}
          <input
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            autoComplete="username"
            placeholder="Tu usuario"
          />
        </label>

        {/* Campo para ingresar la contraseña. */}
        <label>
          Contraseña

          {/* type="password" oculta los caracteres ingresados.
              value guarda el valor actual de la contraseña.
              onChange actualiza el estado cada vez que se escribe.
              autoComplete permite al navegador reconocer
              que este campo corresponde a una contraseña. */}
          <input
            type="password"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            autoComplete="current-password"
            placeholder="Tu contraseña"
          />
        </label>

        {/* Botón que envía el formulario.
            type="submit" indica que al presionarlo
            se ejecuta el evento onSubmit del formulario. */}
        <button type="submit" className="btn">
          Ingresar
        </button>

        {/* Mensaje que informa que actualmente
            no es necesario completar los campos para ingresar. */}
        <p className="login-note">
          Por ahora podés entrar sin completar los datos.
        </p>

      </form>
    </main>
  );
}