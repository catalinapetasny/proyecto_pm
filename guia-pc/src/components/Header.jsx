
// Importamos el componente Logo desde el archivo Logo.jsx.
import Logo from './Logo.jsx';

// Importamos el nombre de la aplicación desde data.js.
import { APP_NAME } from '../data.js';

// Creamos el componente Header.
// Recibe onLogout como propiedad (prop).
// Esta función se utiliza cuando el usuario quiere cerrar sesión.
export default function Header({ onLogout }) {
  return (
    // Encabezado principal de la página.
    <header className="topbar">

      {/* Enlace que lleva a la página de inicio. */}
      <a href="#/" className="brand">

        {/* Mostramos el logo de la aplicación.
            La propiedad size indica su tamaño en píxeles. */}
        <Logo size={40} />

        {/* Mostramos el nombre de la aplicación
            que importamos desde data.js. */}
        <span>{APP_NAME}</span>

      </a>

      {/* Botón para cerrar sesión.
          Cuando el usuario hace clic, se ejecuta
          la función onLogout que recibimos como propiedad. */}
      <button
        className="btn btn-ghost"
        onClick={onLogout}
      >
        Salir
      </button>

    </header>
  );
}