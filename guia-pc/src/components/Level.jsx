
// Importamos el arreglo NIVELES desde data.js.
// Contiene la información de todos los niveles y sus módulos.
import { NIVELES } from '../data.js';

// Componente que muestra la información de un nivel.
// Recibe id como propiedad para saber qué nivel debe mostrar.
export default function Level({ id }) {

  // Buscamos dentro del arreglo NIVELES el nivel cuyo id
  // coincida con el id que recibimos.
  // findIndex() devuelve la posición del elemento encontrado.
  // Si no lo encuentra, devuelve -1.
  const idx = NIVELES.findIndex((n) => n.id === id);

  // Guardamos en nivel el objeto que se encuentra
  // en la posición obtenida anteriormente.
  const nivel = NIVELES[idx];

  // Comprobamos si el nivel existe.
  // Si no existe, mostramos un mensaje de error.
  if (!nivel) {
    return (
      <main className="page">

        {/* Título que informa que no se encontró el nivel. */}
        <h1 className="page-title">No encontramos ese nivel</h1>

        {/* Enlace para volver a la página de inicio. */}
        <a className="btn" href="#/">Volver al inicio</a>

      </main>
    );
  }

  // Buscamos el siguiente nivel utilizando la posición actual
  // y sumándole 1 para avanzar una posición en el arreglo.
  const siguiente = NIVELES[idx + 1];

  return (
    // Contenedor principal de la página.
    // Aplicamos el color correspondiente al nivel mediante una variable CSS.
    <main className="page" style={{ '--lv': nivel.color }}>

      {/* Enlace para volver a la lista de niveles. */}
      <a className="back" href="#/">Volver a los niveles</a>

      {/* Mostramos el nombre del nivel seleccionado. */}
      <h1 className="page-title level-title">{nivel.nombre}</h1>

      {/* Mostramos la descripción del nivel. */}
      <p className="lead">{nivel.descripcion}</p>

      {/* Contenedor donde se mostrarán los módulos del nivel. */}
      <div className="mods">

        {/* Recorremos el arreglo de módulos del nivel con map().
            Por cada módulo generamos un elemento desplegable. */}
        {nivel.modulos.map((m) => (

          // details permite crear un contenido que se puede abrir y cerrar.
          // key={m.id} identifica cada módulo de manera única.
          <details key={m.id} className="mod">

            {/* summary funciona como encabezado del desplegable.
                Al hacer clic sobre él, se muestra u oculta el contenido. */}
            <summary>

              {/* Mostramos el nombre del módulo. */}
              <span>{m.nombre}</span>

              {/* Flecha decorativa que indica que se puede desplegar. */}
              <span className="chev" aria-hidden="true" />

            </summary>

            {/* Contenedor con toda la información del módulo. */}
            <div className="mod-body">

              {/* Mostramos un breve resumen del módulo. */}
              <p>{m.resumen}</p>

              {/* Lista con los puntos importantes del módulo. */}
              <ul>

                {/* Recorremos el arreglo puntos con map()
                    y generamos un elemento de lista por cada punto. */}
                {m.puntos.map((p) => (
                  <li key={p}>{p}</li>
                ))}

              </ul>

              {/* Comprobamos si el módulo tiene un consejo.
                  Si existe, lo mostramos; si no, no se muestra nada. */}
              {m.consejo && (
                <p className="callout callout-tip">

                  {/* Mostramos el título del aviso y el consejo. */}
                  <strong>Consejo:</strong> {m.consejo}

                </p>
              )}

            </div>
          </details>
        ))}
      </div>

      {/* Contenedor del botón para avanzar a la siguiente sección. */}
      <div className="next">

        {/* Comprobamos si existe un siguiente nivel.
            Si existe, mostramos un botón para ingresar a él. */}
        {siguiente ? (

          <a className="btn" href={`#/nivel/${siguiente.id}`}>
            Siguiente nivel: {siguiente.nombre}
          </a>

        ) : (

          // Si no hay otro nivel, significa que llegamos al último.
          // En ese caso, mostramos un enlace hacia la guía de armado.
          <a className="btn" href="#/guia">
            Ir a la guía de armado
          </a>

        )}

      </div>
    </main>
  );
}