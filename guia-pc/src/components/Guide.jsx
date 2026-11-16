
// Importamos los datos que vamos a utilizar en la guía:
// HERRAMIENTAS contiene los elementos necesarios para el armado.
// CABLES contiene la información de los cables de la fuente.
// PASOS contiene las instrucciones para armar la PC.
import { HERRAMIENTAS, CABLES, PASOS } from '../data.js';

// Creamos un objeto que relaciona cada tipo de aviso
// con el nombre que se va a mostrar en pantalla.
const ETIQUETA = {
  peligro: 'Peligro',
  atencion: 'Atención',
  consejo: 'Consejo'
};

// Creamos un componente llamado Aviso.
// Recibe dos propiedades: tipo (categoría del aviso)
// y texto (mensaje que se quiere mostrar).
function Aviso({ tipo, texto }) {
  return (
    // Mostramos el aviso en un párrafo.
    // La clase CSS cambia según el tipo de aviso.
    <p className={`callout callout-${tipo}`}>
      {/* Mostramos el nombre del aviso en negrita
          y después el texto correspondiente. */}
      <strong>{ETIQUETA[tipo]}:</strong> {texto}
    </p>
  );
}

// Componente principal de la página de la guía.
export default function Guide() {
  return (
    // Contenedor principal de todo el contenido.
    <main className="page">

      {/* Enlace para volver a la página de los niveles. */}
      <a className="back" href="#/">Volver a los niveles</a>

      {/* Título principal de la página. */}
      <h1 className="page-title">Guía de armado</h1>

      {/* Texto introductorio que explica cómo seguir la guía. */}
      <p className="lead">
        Seguí los pasos en orden. Si una pieza no entra con suavidad,
        frená y revisá la orientación: no se fuerza nada.
      </p>

      {/* Mostramos un aviso de peligro utilizando
          el componente Aviso que creamos anteriormente. */}
      <Aviso
        tipo="peligro"
        texto="Armá siempre con la PC desenchufada y la fuente apagada. Descargate la electricidad estática tocando una parte metálica del gabinete antes de agarrar las piezas."
      />

      {/* SECCIÓN: Elementos necesarios antes de comenzar. */}
      <section className="block">
        <h2>Antes de empezar</h2>

        <ul className="plain">
          {/* Recorremos el arreglo HERRAMIENTAS con map().
              Por cada herramienta creamos un elemento de lista.
              key={h} permite identificar cada elemento. */}
          {HERRAMIENTAS.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      {/* SECCIÓN: Información sobre los cables de la fuente. */}
      <section className="block">
        <h2>Qué cable de la fuente va a cada lugar</h2>

        {/* Contenedor que permite adaptar la tabla
            al tamaño de la pantalla. */}
        <div className="table-wrap">
          <table>

            {/* Encabezado de la tabla. */}
            <thead>
              <tr>
                <th>Cable</th>
                <th>Va conectado a</th>
                <th>Dónde está</th>
              </tr>
            </thead>

            {/* Cuerpo de la tabla. */}
            <tbody>
              {/* Recorremos el arreglo CABLES con map().
                  Por cada cable generamos una fila de la tabla. */}
              {CABLES.map((c) => (
                // Cada fila tiene como identificador el nombre del cable.
                <tr key={c.cable}>

                  {/* Mostramos el nombre del cable. */}
                  <td data-label="Cable">{c.cable}</td>

                  {/* Mostramos dónde debe conectarse. */}
                  <td data-label="Va conectado a">{c.destino}</td>

                  {/* Mostramos dónde se encuentra el conector. */}
                  <td data-label="Dónde está">{c.donde}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECCIÓN: Instrucciones para realizar el armado. */}
      <section className="block">
        <h2>Paso a paso</h2>

        {/* Utilizamos una lista ordenada para mostrar
            los pasos de armado numerados. */}
        <ol className="steps">

          {/* Recorremos el arreglo PASOS.
              Cada elemento representa un paso de la guía. */}
          {PASOS.map((p) => (
            // Usamos el título como identificador de cada paso.
            <li key={p.titulo}>

              {/* Mostramos el título del paso. */}
              <h3>{p.titulo}</h3>

              {/* Mostramos la explicación del paso. */}
              <p>{p.texto}</p>

              {/* Recorremos los avisos que tiene cada paso.
                  Por cada aviso reutilizamos el componente Aviso,
                  pasando su tipo y su texto. */}
              {p.avisos.map((a) => (
                <Aviso
                  key={a.texto}
                  tipo={a.tipo}
                  texto={a.texto}
                />
              ))}

            </li>
          ))}
        </ol>
      </section>

    </main>
  );
}