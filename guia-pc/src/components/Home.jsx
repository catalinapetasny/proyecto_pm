
// Importamos el arreglo NIVELES desde el archivo data.js.
// Contiene la información de los distintos niveles de la aplicación.
import { NIVELES } from '../data.js';

// Creamos el componente Pines.
// Recibe nivel como propiedad para determinar cuántos pines se muestran activos.
function Pines({ nivel }) {
  return (
    // Contenedor de los pines.
    // aria-hidden="true" indica que este elemento
    // no necesita ser leído por lectores de pantalla.
    <span className="pines" aria-hidden="true">

      {/* Creamos un arreglo con los números del 1 al 4
          y usamos map() para generar cuatro elementos. */}
      {[1, 2, 3, 4].map((n) => (

        // Si el número del pin es menor o igual al nivel recibido,
        // le asignamos la clase "on" para mostrarlo activo.
        // Si no, queda sin una clase adicional.
        <i key={n} className={n <= nivel ? 'on' : ''} />

      ))}
    </span>
  );
}

// Componente principal de la página de inicio.
export default function Home() {
  return (
    // Contenedor principal de la página.
    <main className="page">

      {/* Título principal que invita al usuario a elegir un nivel. */}
      <h1 className="page-title">¿Por dónde querés empezar?</h1>

      {/* Texto que explica cómo utilizar la aplicación. */}
      <p className="lead">
        Elegí tu nivel. Cada uno tiene guías cortas y ordenadas sobre los componentes de una PC. Al final está la guía de armado paso a paso.
      </p>

      {/* Lista donde se mostrarán los diferentes niveles. */}
      <ul className="stack">

        {/* Recorremos el arreglo NIVELES con map().
            Por cada nivel creamos un elemento de la lista.
            También recibimos i, que representa la posición del elemento. */}
        {NIVELES.map((n, i) => (

          // Cada nivel tiene un identificador único.
          <li key={n.id}>

            {/* Creamos un enlace que lleva a la página del nivel elegido.
                Usamos n.id para indicar a qué nivel debe dirigirse.
                style permite asignar un color personalizado a cada nivel. */}
            <a
              className="rect"
              href={`#/nivel/${n.id}`}
              style={{ '--lv': n.color }}
            >

              {/* Mostramos los pines según la posición del nivel.
                  i + 1 se utiliza porque las posiciones empiezan en 0,
                  pero queremos representar los niveles desde el 1. */}
              <Pines nivel={i + 1} />

              {/* Contenedor con la información de cada nivel. */}
              <span className="rect-body">

                {/* Mostramos el nombre del nivel. */}
                <span className="rect-name">{n.nombre}</span>

                {/* Mostramos la descripción del nivel. */}
                <span className="rect-desc">{n.descripcion}</span>

                {/* Mostramos cuántas guías contiene el nivel.
                    length permite obtener la cantidad de elementos del arreglo. */}
                <span className="rect-meta">
                  {n.modulos.length} guías
                </span>

              </span>

              {/* Flecha decorativa que indica que se puede ingresar al nivel.
                  aria-hidden evita que los lectores de pantalla la interpreten. */}
              <span className="chev" aria-hidden="true" />

            </a>
          </li>
        ))}

        {/* Agregamos un elemento adicional a la lista
            que permite ingresar directamente a la guía de armado. */}
        <li>

          {/* Enlace que lleva a la sección de la guía de armado. */}
          <a className="rect rect-guide" href="#/guia">

            {/* Signo de exclamación utilizado como ícono decorativo. */}
            <span className="rect-icon" aria-hidden="true">!</span>

            {/* Contenedor con la información de la guía. */}
            <span className="rect-body">

              {/* Nombre de la sección. */}
              <span className="rect-name">Guía de armado</span>

              {/* Descripción de lo que contiene la guía. */}
              <span className="rect-desc">
                Dónde va cada pieza, qué cable va a dónde y qué errores evitar.
              </span>

              {/* Información adicional sobre la guía. */}
              <span className="rect-meta">Con advertencias</span>

            </span>

            {/* Flecha decorativa para indicar que se puede ingresar. */}
            <span className="chev" aria-hidden="true" />

          </a>
        </li>
      </ul>
    </main>
  );
}