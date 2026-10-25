import { NIVELES } from '../data.js';

function Pines({ nivel }) {
  return (
    <span className="pines" aria-hidden="true">
      {[1, 2, 3, 4].map((n) => (
        <i key={n} className={n <= nivel ? 'on' : ''} />
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <main className="page">
      <h1 className="page-title">¿Por dónde querés empezar?</h1>
      <p className="lead">Elegí tu nivel. Cada uno tiene guías cortas y ordenadas sobre los componentes de una PC. Al final está la guía de armado paso a paso.</p>

      <ul className="stack">
        {NIVELES.map((n, i) => (
          <li key={n.id}>
            <a className="rect" href={`#/nivel/${n.id}`} style={{ '--lv': n.color }}>
              <Pines nivel={i + 1} />
              <span className="rect-body">
                <span className="rect-name">{n.nombre}</span>
                <span className="rect-desc">{n.descripcion}</span>
                <span className="rect-meta">{n.modulos.length} guías</span>
              </span>
              <span className="chev" aria-hidden="true" />
            </a>
          </li>
        ))}
        <li>
          <a className="rect rect-guide" href="#/guia">
            <span className="rect-icon" aria-hidden="true">!</span>
            <span className="rect-body">
              <span className="rect-name">Guía de armado</span>
              <span className="rect-desc">Dónde va cada pieza, qué cable va a dónde y qué errores evitar.</span>
              <span className="rect-meta">Con advertencias</span>
            </span>
            <span className="chev" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </main>
  );
}
