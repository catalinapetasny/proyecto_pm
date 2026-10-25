import { useEffect, useState } from 'react';
import Login from './components/Login.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Level from './components/Level.jsx';
import Guide from './components/Guide.jsx';

const leerRuta = () => window.location.hash.replace(/^#\/?/, '');

function sesionGuardada() {
  try {
    return localStorage.getItem('sesion') === '1';
  } catch {
    return false;
  }
}

export default function App() {
  const [ruta, setRuta] = useState(leerRuta());
  const [logueado, setLogueado] = useState(sesionGuardada());

  useEffect(() => {
    const alCambiar = () => {
      setRuta(leerRuta());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', alCambiar);
    return () => window.removeEventListener('hashchange', alCambiar);
  }, []);

  const entrar = () => {
    try { localStorage.setItem('sesion', '1'); } catch { /* sin almacenamiento */ }
    window.location.hash = '#/';
    setLogueado(true);
  };

  const salir = () => {
    try { localStorage.removeItem('sesion'); } catch { /* sin almacenamiento */ }
    window.location.hash = '';
    setLogueado(false);
  };

  if (!logueado) return <Login onEnter={entrar} />;

  const [pagina, id] = ruta.split('/');
  let contenido = <Home />;
  if (pagina === 'nivel') contenido = <Level id={id} />;
  if (pagina === 'guia') contenido = <Guide />;

  return (
    <>
      <Header onLogout={salir} />
      {contenido}
    </>
  );
}
