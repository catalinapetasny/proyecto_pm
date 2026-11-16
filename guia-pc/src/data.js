
// Este archivo contiene toda la información de la aplicación.
// Podemos modificar los textos y agregar contenido sin necesidad
// de modificar los componentes que muestran esa información.

// Exportamos una constante con el nombre de la aplicación.
// Otros archivos pueden importarla para mostrarlo en pantalla.
export const APP_NAME = 'Armá tu PC';

// Creamos un arreglo llamado NIVELES.
// Contiene los diferentes niveles de aprendizaje de la aplicación.
// Cada nivel tiene un identificador, un nombre, un color,
// una descripción y sus respectivos módulos.
export const NIVELES = [

  // PRIMER NIVEL: PRINCIPIANTE.
  {
    // Identificador único del nivel.
    // Se utiliza para reconocerlo y acceder a él.
    id: 'principiante',

    // Nombre que se muestra en pantalla.
    nombre: 'Principiante',

    // Color que identifica visualmente al nivel.
    color: '#1F9D8B',

    // Breve descripción de los contenidos del nivel.
    descripcion: 'Qué es cada pieza, para qué sirve y cómo se relacionan entre sí.',

    // Arreglo que contiene los módulos correspondientes al nivel.
    modulos: [

      // MÓDULO: PROCESADOR.
      {
        // Identificador del módulo.
        id: 'cpu',

        // Nombre que aparece en la aplicación.
        nombre: 'Procesador (CPU)',

        // Resumen que explica qué es y para qué sirve.
        resumen: 'Es el cerebro de la PC: ejecuta las instrucciones de todos los programas.',

        // Arreglo con los puntos importantes del tema.
        puntos: [
          'Se mide por cantidad de núcleos y velocidad (GHz).',
          'Los dos fabricantes principales son Intel y AMD.',
          'Cada procesador usa un socket específico: tiene que coincidir con el de la placa madre.'
        ],

        // Consejo adicional para el usuario.
        consejo: 'Antes de comprar, verificá en la web del fabricante de la placa que soporte ese modelo de procesador.'
      },

      // MÓDULO: PLACA MADRE.
      {
        id: 'mother',
        nombre: 'Placa madre',
        resumen: 'Es la placa donde se conecta todo lo demás y por donde se comunican las piezas.',
        puntos: [
          'Define qué procesador y qué tipo de memoria RAM podés usar.',
          'Viene en distintos tamaños: ATX, Micro-ATX y Mini-ITX.',
          'El gabinete tiene que admitir el tamaño de tu placa.'
        ]
        // Este módulo no tiene consejo adicional.
      },

      // MÓDULO: MEMORIA RAM.
      {
        id: 'ram',
        nombre: 'Memoria RAM',
        resumen: 'Guarda temporalmente los datos de los programas abiertos para que el procesador los use rápido.',
        puntos: [
          'Se mide en GB. Para uso básico alcanzan 8 a 16 GB; para juegos y edición, 16 a 32 GB.',
          'Se pierde su contenido al apagar la PC.',
          'Hay generaciones (DDR4, DDR5) que no son intercambiables.'
        ]
      },

      // MÓDULO: ALMACENAMIENTO.
      {
        id: 'storage',
        nombre: 'Almacenamiento',
        resumen: 'Es donde se guardan el sistema operativo, los programas y tus archivos de forma permanente.',
        puntos: [
          'SSD: rápido y silencioso. Es lo recomendado para el sistema.',
          'HDD: más barato por GB, pero más lento. Sirve para archivos grandes.',
          'Los SSD M.2 se enchufan directo en la placa, sin cables.'
        ]
      },

      // MÓDULO: FUENTE DE ALIMENTACIÓN.
      {
        id: 'psu',
        nombre: 'Fuente de alimentación',
        resumen: 'Convierte la corriente de la pared en la que usan las piezas y se la reparte a cada una.',
        puntos: [
          'Se mide en vatios (W): tiene que cubrir el consumo de toda la PC con margen.',
          'Una fuente de mala calidad puede dañar los demás componentes.',
          'Es la última pieza donde conviene ahorrar.'
        ]
      },

      // MÓDULO: GABINETE Y PLACA DE VIDEO.
      {
        id: 'gabinete',
        nombre: 'Gabinete y placa de video',
        resumen: 'El gabinete aloja y ventila las piezas. La placa de video (GPU) dibuja las imágenes y es clave para juegos y diseño.',
        puntos: [
          'Revisá el largo máximo de placa de video que admite el gabinete.',
          'Si el procesador trae video integrado, podés arrancar sin placa de video dedicada.',
          'Más ventiladores bien ubicados significan menos temperatura y menos ruido.'
        ]
      }
    ]
  },

  // SEGUNDO NIVEL: INTERMEDIO.
  {
    id: 'intermedio',
    nombre: 'Intermedio',
    color: '#2F6FBE',
    descripcion: 'Compatibilidad entre piezas, cálculo de potencia y cómo elegir con criterio.',
    modulos: [

      // MÓDULO: SOCKET Y CHIPSET.
      {
        id: 'socket',
        nombre: 'Socket y chipset',
        resumen: 'El socket es la ranura física del procesador; el chipset define las funciones que ofrece la placa.',
        puntos: [
          'Ejemplos de sockets: AM4 y AM5 en AMD, LGA1700 y LGA1851 en Intel.',
          'Dentro de un mismo socket, el chipset cambia la cantidad de puertos USB, ranuras M.2 y opciones de overclock.',
          'Algunas placas necesitan actualizar la BIOS para reconocer procesadores más nuevos.'
        ],
        consejo: 'Buscá la lista de CPU compatibles (QVL) en la página de soporte de tu placa.'
      },

      // MÓDULO: TIPOS DE MEMORIA RAM.
      {
        id: 'ram-ddr',
        nombre: 'RAM: DDR4, DDR5 y dual channel',
        resumen: 'La placa admite un solo tipo de memoria, y usar dos módulos iguales mejora el rendimiento.',
        puntos: [
          'DDR4 y DDR5 tienen muescas distintas: no entran en el mismo slot.',
          'Dos módulos de 8 GB rinden mejor que uno de 16 GB gracias al dual channel.',
          'Comprá un kit de módulos iguales para evitar problemas de compatibilidad.'
        ]
      },

      // MÓDULO: ALMACENAMIENTO SSD.
      {
        id: 'nvme',
        nombre: 'SSD NVMe vs SATA',
        resumen: 'Los dos son SSD, pero se conectan distinto y tienen velocidades muy diferentes.',
        puntos: [
          'SATA usa cable de datos y de energía; llega a unos 550 MB/s.',
          'NVMe usa el slot M.2 y alcanza varios GB/s según la versión de PCIe.',
          'Algunas ranuras M.2 aceptan solo NVMe y otras también SATA: revisá el manual.'
        ]
      },

      // MÓDULO: CÁLCULO DE POTENCIA.
      {
        id: 'potencia',
        nombre: 'Cómo calcular la fuente',
        resumen: 'Sumá el consumo del procesador y la placa de video, y dejá un margen para los picos.',
        puntos: [
          'Regla práctica: elegí una fuente con 20 a 30 % más de potencia que tu consumo estimado.',
          'La certificación 80 Plus indica eficiencia, no potencia real.',
          'Verificá que tenga los conectores que pide tu placa de video.'
        ],
        consejo: 'Usá una calculadora de potencia online como referencia y contrastala con lo que recomienda el fabricante de la GPU.'
      },

      // MÓDULO: REFRIGERACIÓN.
      {
        id: 'refri',
        nombre: 'Refrigeración',
        resumen: 'Todo procesador necesita disipar el calor que genera para no bajar su rendimiento.',
        puntos: [
          'Cooler de aire: simple, confiable y sin mantenimiento.',
          'Refrigeración líquida AIO: mejor para procesadores potentes, pero requiere espacio en el gabinete.',
          'El cooler debe soportar el TDP del procesador y ser compatible con su socket.'
        ]
      },

      // MÓDULO: CUELLO DE BOTELLA.
      {
        id: 'cuello',
        nombre: 'Cuello de botella',
        resumen: 'Ocurre cuando una pieza limita el rendimiento de otra más potente.',
        puntos: [
          'Un procesador muy básico con una placa de video de gama alta desperdicia la GPU.',
          'Buscá equilibrio: invertí más en lo que más usa tu tipo de uso.',
          'Se detecta mirando el porcentaje de uso de CPU y GPU mientras jugás.'
        ]
      }
    ]
  },

  // TERCER NIVEL: AVANZADO.
  {
    id: 'avanzado',
    nombre: 'Avanzado',
    color: '#6D4CC2',
    descripcion: 'Ajustes finos, BIOS, rendimiento y circulación de aire.',
    modulos: [

      // MÓDULO: BIOS Y UEFI.
      {
        id: 'bios',
        nombre: 'BIOS/UEFI y actualización',
        resumen: 'Es el programa interno de la placa que configura el hardware antes de que cargue el sistema.',
        puntos: [
          'Se entra apretando Supr o F2 al encender.',
          'Actualizar la BIOS puede sumar compatibilidad y corregir errores.',
          'Un corte de luz durante la actualización puede dejar la placa inutilizable.'
        ],
        consejo: 'Actualizá la BIOS solo si lo necesitás y con la PC conectada a un estabilizador o UPS.'
      },

      // MÓDULO: PERFILES DE MEMORIA RAM.
      {
        id: 'xmp',
        nombre: 'Perfiles XMP y EXPO',
        resumen: 'Por defecto la RAM funciona a una velocidad conservadora. El perfil activa la velocidad que figura en la caja.',
        puntos: [
          'XMP es el nombre en Intel; EXPO, en AMD (muchas placas aceptan ambos).',
          'Se activa desde la BIOS con una sola opción.',
          'Si la PC se vuelve inestable, probá bajar la frecuencia o subir levemente el voltaje.'
        ]
      },

      // MÓDULO: VRM.
      {
        id: 'vrm',
        nombre: 'VRM y fases de energía',
        resumen: 'Son los componentes de la placa que entregan energía estable al procesador.',
        puntos: [
          'Un VRM débil se calienta con procesadores potentes y limita su rendimiento.',
          'Los disipadores sobre el VRM ayudan a mantener la temperatura.',
          'Para procesadores de gama alta, elegí placas con buen VRM.'
        ]
      },

      // MÓDULO: PCI EXPRESS.
      {
        id: 'pcie',
        nombre: 'Líneas PCIe y ancho de banda',
        resumen: 'El procesador tiene una cantidad limitada de líneas PCIe que se reparten entre GPU y SSD.',
        puntos: [
          'La placa de video usa normalmente x16; los SSD NVMe, x4.',
          'Algunas ranuras M.2 comparten líneas con puertos SATA o con ranuras PCIe: revisá el manual.',
          'Resizable BAR permite al procesador acceder a toda la memoria de la GPU y puede mejorar algunos juegos.'
        ]
      },

      // MÓDULO: FLUJO DE AIRE.
      {
        id: 'airflow',
        nombre: 'Flujo de aire',
        resumen: 'Un buen recorrido del aire baja temperaturas más que sumar ventiladores al azar.',
        puntos: [
          'Regla general: entra aire frío por adelante y abajo, y sale caliente por atrás y arriba.',
          'Presión positiva (más aire entrando) reduce el polvo; presión negativa mejora la salida de calor.',
          'Ordená los cables para no bloquear el paso del aire.'
        ]
      }
    ]
  },

  // CUARTO NIVEL: EXPERTO.
  {
    id: 'experto',
    nombre: 'Experto',
    color: '#B83A3A',
    descripcion: 'Optimización por tipo de uso, estabilidad y diagnóstico de fallas.',
    modulos: [

      // MÓDULO: OVERCLOCK Y UNDERVOLT.
      {
        id: 'oc',
        nombre: 'Overclock y undervolt',
        resumen: 'Overclock sube la frecuencia por encima de la de fábrica. Undervolt baja el voltaje para reducir calor y consumo.',
        puntos: [
          'Cambiá un parámetro a la vez y probá estabilidad después de cada cambio.',
          'El undervolt suele ser más seguro y rendir igual o mejor en placas de video.',
          'El overclock puede anular la garantía y acortar la vida útil si se abusa del voltaje.'
        ]
      },

      // MÓDULO: TEMPERATURAS.
      {
        id: 'termica',
        nombre: 'Análisis térmico',
        resumen: 'Medir temperaturas bajo carga permite detectar cuellos térmicos antes de que afecten el rendimiento.',
        puntos: [
          'Monitoreá CPU, GPU y VRM con herramientas como HWiNFO.',
          'Si la CPU llega a su temperatura límite, baja la frecuencia (thermal throttling).',
          'Revisá el montaje del cooler y renová la pasta térmica cada tanto.'
        ]
      },

      // MÓDULO: ARMADO SEGÚN EL USO.
      {
        id: 'cargas',
        nombre: 'Armado según tipo de uso',
        resumen: 'No existe una PC ideal: cada carga de trabajo prioriza piezas distintas.',
        puntos: [
          'Juegos: priorizar placa de video y un procesador equilibrado.',
          'Edición de video y 3D: más núcleos, más RAM y SSD rápidos.',
          'Servidor o estación de trabajo: RAM con ECC, fuente de calidad y almacenamiento redundante (RAID).',
          'IA y cómputo: memoria de video (VRAM) grande y buena refrigeración sostenida.'
        ]
      },

      // MÓDULO: DIAGNÓSTICO DE FALLAS.
      {
        id: 'diag',
        nombre: 'Diagnóstico de fallas',
        resumen: 'Cuando la PC no arranca, descartá piezas de a una, de lo más simple a lo más complejo.',
        puntos: [
          'Revisá los LED de depuración de la placa: indican si falla CPU, RAM, video o disco.',
          'Probá con un solo módulo de RAM y sin placa de video dedicada si el procesador tiene video integrado.',
          'Si el equipo reinicia solo bajo carga, sospechá de la fuente o de la temperatura.',
          'Probá con otra fuente o con un testeador antes de descartar la placa.'
        ]
      }
    ]
  }
];
