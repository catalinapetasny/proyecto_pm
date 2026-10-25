import { HERRAMIENTAS, CABLES, PASOS } from '../data.js';

const ETIQUETA = { peligro: 'Peligro', atencion: 'Atención', consejo: 'Consejo' };

function Aviso({ tipo, texto }) {
  return (
    <p className={`callout callout-${tipo}`}>
      <strong>{ETIQUETA[tipo]}:</strong> {texto}
    </p>
  );
}

export default function Guide() {
  return (
    <main className="page">
      <a className="back" href="#/">Volver a los niveles</a>
      <h1 className="page-title">Guía de armado</h1>
      <p className="lead">Seguí los pasos en orden. Si una pieza no entra con suavidad, frená y revisá la orientación: no se fuerza nada.</p>

      <Aviso tipo="peligro" texto="Armá siempre con la PC desenchufada y la fuente apagada. Descargate la electricidad estática tocando una parte metálica del gabinete antes de agarrar las piezas." />

      <section className="block">
        <h2>Antes de empezar</h2>
        <ul className="plain">
          {HERRAMIENTAS.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      <section className="block">
        <h2>Qué cable de la fuente va a cada lugar</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Cable</th><th>Va conectado a</th><th>Dónde está</th></tr>
            </thead>
            <tbody>
              {CABLES.map((c) => (
                <tr key={c.cable}>
                  <td data-label="Cable">{c.cable}</td>
                  <td data-label="Va conectado a">{c.destino}</td>
                  <td data-label="Dónde está">{c.donde}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="block">
        <h2>Paso a paso</h2>
        <ol className="steps">
          {PASOS.map((p) => (
            <li key={p.titulo}>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
              {p.avisos.map((a) => (
                <Aviso key={a.texto} tipo={a.tipo} texto={a.texto} />
              ))}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
