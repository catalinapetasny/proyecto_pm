import { NIVELES } from '../data.js';

export default function Level({ id }) {
  const idx = NIVELES.findIndex((n) => n.id === id);
  const nivel = NIVELES[idx];

  if (!nivel) {
    return (
      <main className="page">
        <h1 className="page-title">No encontramos ese nivel</h1>
        <a className="btn" href="#/">Volver al inicio</a>
      </main>
    );
  }

  const siguiente = NIVELES[idx + 1];

  return (
    <main className="page" style={{ '--lv': nivel.color }}>
      <a className="back" href="#/">Volver a los niveles</a>
      <h1 className="page-title level-title">{nivel.nombre}</h1>
      <p className="lead">{nivel.descripcion}</p>

      <div className="mods">
        {nivel.modulos.map((m) => (
          <details key={m.id} className="mod">
            <summary>
              <span>{m.nombre}</span>
              <span className="chev" aria-hidden="true" />
            </summary>
            <div className="mod-body">
              <p>{m.resumen}</p>
              <ul>
                {m.puntos.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {m.consejo && (
                <p className="callout callout-tip"><strong>Consejo:</strong> {m.consejo}</p>
              )}
            </div>
          </details>
        ))}
      </div>

      <div className="next">
        {siguiente ? (
          <a className="btn" href={`#/nivel/${siguiente.id}`}>Siguiente nivel: {siguiente.nombre}</a>
        ) : (
          <a className="btn" href="#/guia">Ir a la guía de armado</a>
        )}
      </div>
    </main>
  );
}
