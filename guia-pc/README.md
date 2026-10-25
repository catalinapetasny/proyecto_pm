# Armá tu PC — guía de componentes (React + Vite)

## Cómo correrla
1. Instalá Node.js 18 o superior.
2. En esta carpeta:
   ```
   npm install
   npm run dev
   ```
3. Abrí la dirección que aparece en la terminal (también sirve desde el celular en la misma red Wi-Fi).

Para generar la versión final: `npm run build` (queda en la carpeta `dist`).

## Dónde cambiar cosas
- Textos de niveles, módulos, cables y pasos: `src/data.js`
- Nombre de la app: `APP_NAME` en `src/data.js`
- Logo: `src/components/Logo.jsx` (hay un comentario con cómo poner tu imagen)
- Colores y estilos: `src/styles.css`
- Login: `src/components/Login.jsx`. Hoy no valida nada; ahí va la validación real cuando tengas backend.
