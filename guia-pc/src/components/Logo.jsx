
// Este comentario explica cómo reemplazar el logo actual por una imagen propia.
// Para hacerlo, hay que colocar el archivo en la carpeta public
// y reemplazar el SVG por una etiqueta img.

// Creamos el componente Logo.
// Recibe la propiedad size, que por defecto tiene un valor de 120.
export default function Logo({ size = 120 }) {
  return (
    // Contenedor principal del logo.
    // width y height utilizan el valor de size para definir sus dimensiones.
    // role="img" indica que este elemento representa una imagen.
    // aria-label proporciona una descripción para lectores de pantalla.
    <div
      className="logo"
      style={{ width: size, height: size }}
      role="img"
      aria-label="Logo"
    >

      {/* Creamos el logo utilizando SVG.
          SVG permite dibujar figuras y formas mediante código.
          viewBox define el área de dibujo.
          width y height establecen el tamaño del dibujo dentro del contenedor.
          fill="none" indica que las figuras no tienen relleno.
          stroke="currentColor" utiliza el color del texto definido en CSS.
          strokeWidth establece el grosor de las líneas.
          strokeLinecap redondea los extremos de las líneas. */}
      <svg
        viewBox="0 0 64 64"
        width="62%"
        height="62%"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      >

        {/* Dibujamos el cuadrado exterior del logo.
            rect permite crear un rectángulo.
            x e y indican su posición.
            width y height indican sus dimensiones.
            rx redondea sus esquinas. */}
        <rect x="16" y="16" width="32" height="32" rx="4" />

        {/* Dibujamos un cuadrado más pequeño en el centro del logo. */}
        <rect x="26" y="26" width="12" height="12" rx="1.5" />

        {/* Dibujamos las líneas que salen de los cuatro lados del cuadrado.
            path permite crear diferentes trazos mediante coordenadas.
            Cada conjunto de coordenadas representa una línea del dibujo. */}
        <path d="M24 8v8M32 8v8M40 8v8M24 48v8M32 48v8M40 48v8M8 24h8M8 32h8M8 40h8M48 24h8M48 32h8M48 40h8" />

      </svg>
    </div>
  );
}