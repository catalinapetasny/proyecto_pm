import Logo from './Logo.jsx';
import { APP_NAME } from '../data.js';

export default function Header({ onLogout }) {
  return (
    <header className="topbar">
      <a href="#/" className="brand">
        <Logo size={40} />
        <span>{APP_NAME}</span>
      </a>
      <button className="btn btn-ghost" onClick={onLogout}>Salir</button>
    </header>
  );
}
