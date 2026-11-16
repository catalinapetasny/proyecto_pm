
// Importamos useEffect y useState desde React.
// useState permite guardar información que puede cambiar.
// useEffect permite ejecutar acciones cuando el componente
// se carga o cuando se producen determinados cambios.
import { useEffect, useState } from 'react';

// Importamos los componentes que vamos a utilizar en la aplicación.
import Login from './components/Login.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Level from './components/Level.jsx';
import Guide from './components/Guide.jsx';

// Creamos una función que obtiene la ruta actual de la aplicación.
// window.location.hash permite acceder a la parte de la dirección
// que comienza con #.
// replace() elimina el símbolo # y la barra inicial si existe.
const leerRuta = () => window.location.hash.replace(/^#\/?/, '');

// Creamos una función para comprobar si existe una sesión guardada.
function sesionGuardada() {
  try {
    // Consultamos localStorage para verificar si existe
    // un elemento llamado "sesion" con el valor "1".
    // Si coincide, significa que el usuario ya había ingresado.
    return localStorage.getItem('sesion') === '1';

  } catch {
    // Si ocurre algún error al acceder a localStorage,
    // devolvemos false para indicar que no hay una sesión guardada.
    return false;
  }
}

// Componente principal de toda la aplicación.
export default function App() {

  // Creamos un estado llamado ruta.
  // Guarda la dirección actual de la aplicación.
  // leerRuta() obtiene la ruta inicial cuando se carga el componente.
  const [ruta, setRuta] = useState(leerRuta());

  // Creamos un estado llamado logueado.
  // Guarda si el usuario inició sesión o no.
  // sesionGuardada() comprueba si existe una sesión anterior.
  const [logueado, setLogueado] = useState(sesionGuardada());

  // useEffect permite ejecutar este código cuando el componente
  // se carga por primera vez.
  useEffect(() => {

    // Creamos una función que se ejecuta cuando cambia la ruta.
    const alCambiar = () => {

      // Actualizamos el estado ruta con la nueva dirección.
      setRuta(leerRuta());

      // Llevamos la página nuevamente hacia arriba.
      window.scrollTo(0, 0);
    };

    // Escuchamos el evento hashchange.
    // Este evento se activa cuando cambia la parte de la dirección
    // que contiene el símbolo #.
    window.addEventListener('hashchange', alCambiar);

    // Esta función se ejecuta cuando el componente se desmonta.
    // Elimina el evento para evitar que quede escuchando innecesariamente.
    return () => window.removeEventListener('hashchange', alCambiar);

  // El arreglo vacío indica que este efecto se ejecuta
  // solamente al montar el componente y su limpieza al desmontarlo.
  }, []);

  // Creamos la función entrar, que se ejecuta cuando
  // el usuario presiona el botón de ingresar.
  const entrar = () => {

    try {
      // Guardamos en localStorage que el usuario inició sesión.
      // La clave es "sesion" y el valor guardado es "1".
      localStorage.setItem('sesion', '1');

    } catch {
      // Si no se puede guardar la información,
      // continuamos sin utilizar el almacenamiento.
    }

    // Cambiamos la dirección para volver a la página de inicio.
    window.location.hash = '#/';

    // Actualizamos el estado para indicar que el usuario ingresó.
    setLogueado(true);
  };

  // Creamos la función salir, que se ejecuta al cerrar sesión.
  const salir = () => {

    try {
      // Eliminamos el dato "sesion" de localStorage.
      // De esta manera, no queda guardado el inicio de sesión.
      localStorage.removeItem('sesion');

    } catch {
      // Si ocurre algún error, continuamos sin almacenamiento.
    }

    // Limpiamos la dirección de la aplicación.
    window.location.hash = '';

    // Actualizamos el estado para indicar que el usuario salió.
    setLogueado(false);
  };

  // Comprobamos si el usuario inició sesión.
  // Si no está logueado, mostramos el componente Login
  // y le pasamos la función entrar mediante la propiedad onEnter.
  if (!logueado) return <Login onEnter={entrar} />;

  // Dividimos la ruta utilizando la barra como separador.
  // Por ejemplo, "nivel/2" se convierte en:
  // pagina = "nivel" e id = "2".
  const [pagina, id] = ruta.split('/');

  // Establecemos Home como contenido inicial.
  // Si no se cumple ninguna de las condiciones siguientes,
  // se mostrará la página de inicio.
  let contenido = <Home />;

  // Si la ruta corresponde a un nivel, mostramos el componente Level.
  // También le pasamos el identificador del nivel mediante la propiedad id.
  if (pagina === 'nivel') contenido = <Level id={id} />;

  // Si la ruta corresponde a la guía, mostramos el componente Guide.
  if (pagina === 'guia') contenido = <Guide />;

  return (
    // Fragment permite agrupar varios componentes
    // sin agregar un elemento HTML adicional.
    <>

      {/* Mostramos el encabezado y le pasamos la función salir.
          Así, el botón de cerrar sesión puede ejecutar esa función. */}
      <Header onLogout={salir} />

      {/* Mostramos el contenido correspondiente a la ruta actual.
          Puede ser Home, Level o Guide. */}
      {contenido}

    </>
  );
}
