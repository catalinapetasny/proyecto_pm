
// Importamos React para poder utilizar sus componentes y funcionalidades.
import React from 'react';

// Importamos createRoot, que permite iniciar la aplicación de React
// dentro de un elemento HTML.
import { createRoot } from 'react-dom/client';

// Importamos el componente principal de nuestra aplicación.
import App from './App.jsx';

// Importamos los estilos generales de la página.
import './styles.css';

// Buscamos en el HTML el elemento que tiene el id "root".
// Dentro de ese elemento se va a mostrar toda nuestra aplicación.
createRoot(document.getElementById('root')).render(

  // StrictMode ayuda a detectar posibles problemas durante el desarrollo.
  <React.StrictMode>
    <App /> 

  </React.StrictMode>
    // Mostramos el componente principal de la aplicación.
    // App contiene el resto de los componentes y las funcionalidades.
);