import { useState } from 'react';
import Logo from './Logo.jsx';
import { APP_NAME } from '../data.js';

export default function Login({ onEnter }) {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  // Por ahora no se validan credenciales: cualquier intento entra.
  // Cuando haya backend, validá usuario y clave acá antes de llamar a onEnter().
  const enviar = (e) => {
    e.preventDefault();
    onEnter();
  };

  return (
    <main className="login">
      <Logo size={132} />
      <h1 className="login-title">{APP_NAME}</h1>
      <p className="login-sub">Aprendé qué hace cada componente y cómo armarlo sin romper nada.</p>
      <form className="login-form" onSubmit={enviar}>
        <label>
          Usuario
          <input value={usuario} onChange={(e) => setUsuario(e.target.value)} autoComplete="username" placeholder="Tu usuario" />
        </label>
        <label>
          Contraseña
          <input type="password" value={clave} onChange={(e) => setClave(e.target.value)} autoComplete="current-password" placeholder="Tu contraseña" />
        </label>
        <button type="submit" className="btn">Ingresar</button>
        <p className="login-note">Por ahora podés entrar sin completar los datos.</p>
      </form>
    </main>
  );
}
