// Todo el contenido de la app vive acá. Editá los textos sin tocar los componentes.
export const APP_NAME = 'Armá tu PC';

export const NIVELES = [
  {
    id: 'principiante',
    nombre: 'Principiante',
    color: '#1F9D8B',
    descripcion: 'Qué es cada pieza, para qué sirve y cómo se relacionan entre sí.',
    modulos: [
      {
        id: 'cpu',
        nombre: 'Procesador (CPU)',
        resumen: 'Es el cerebro de la PC: ejecuta las instrucciones de todos los programas.',
        puntos: [
          'Se mide por cantidad de núcleos y velocidad (GHz).',
          'Los dos fabricantes principales son Intel y AMD.',
          'Cada procesador usa un socket específico: tiene que coincidir con el de la placa madre.'
        ],
        consejo: 'Antes de comprar, verificá en la web del fabricante de la placa que soporte ese modelo de procesador.'
      },
      {
        id: 'mother',
        nombre: 'Placa madre',
        resumen: 'Es la placa donde se conecta todo lo demás y por donde se comunican las piezas.',
        puntos: [
          'Define qué procesador y qué tipo de memoria RAM podés usar.',
          'Viene en distintos tamaños: ATX, Micro-ATX y Mini-ITX.',
          'El gabinete tiene que admitir el tamaño de tu placa.'
        ]
      },
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
  {
    id: 'intermedio',
    nombre: 'Intermedio',
    color: '#2F6FBE',
    descripcion: 'Compatibilidad entre piezas, cálculo de potencia y cómo elegir con criterio.',
    modulos: [
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
  {
    id: 'avanzado',
    nombre: 'Avanzado',
    color: '#6D4CC2',
    descripcion: 'Ajustes finos, BIOS, rendimiento y circulación de aire.',
    modulos: [
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
  {
    id: 'experto',
    nombre: 'Experto',
    color: '#B83A3A',
    descripcion: 'Optimización por tipo de uso, estabilidad y diagnóstico de fallas.',
    modulos: [
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

export const HERRAMIENTAS = [
  'Destornillador Phillips (de cruz) magnético, de punta mediana.',
  'Una mesa amplia, limpia y bien iluminada.',
  'Manual de la placa madre (en papel o en PDF): ahí está el diagrama de conectores.',
  'Precintos o cintas velcro para ordenar cables.',
  'Pasta térmica, si tu cooler no la trae aplicada.'
];

export const CABLES = [
  { cable: 'ATX de 24 pines', destino: 'Placa madre', donde: 'Borde derecho de la placa, es el conector más grande.' },
  { cable: 'CPU / EPS de 8 pines (4+4)', destino: 'Placa madre, para el procesador', donde: 'Esquina superior izquierda, cerca del socket. Dice "CPU" o "EPS".' },
  { cable: 'PCIe de 6+2 pines', destino: 'Placa de video', donde: 'Al costado o arriba de la placa de video.' },
  { cable: '12V-2x6 / 12VHPWR', destino: 'Placas de video de gama alta (si lo usan)', donde: 'Al costado de la placa de video. Debe entrar hasta el fondo.' },
  { cable: 'SATA de energía', destino: 'Discos SATA y unidades ópticas', donde: 'Parte trasera de cada unidad.' },
  { cable: 'SATA de datos', destino: 'Placa madre', donde: 'Puertos SATA, abajo a la derecha de la placa.' },
  { cable: 'CPU_FAN', destino: 'Ventilador del cooler del procesador', donde: 'Junto al socket. Es de 4 pines y está rotulado.' }
];

export const PASOS = [
  {
    titulo: 'Preparar el espacio',
    texto: 'Abrí las cajas y sacá la placa madre. Apoyala sobre la caja de la placa, no sobre una superficie metálica ni sobre alfombra.',
    avisos: [
      { tipo: 'atencion', texto: 'Evitá armar sobre alfombras o con ropa de lana: generan estática que puede dañar las piezas.' }
    ]
  },
  {
    titulo: 'Colocar el procesador',
    texto: 'Levantá la palanca del socket y alineá el triángulo marcado en una esquina del procesador con el triángulo del socket. Apoyalo con suavidad y bajá la palanca.',
    avisos: [
      { tipo: 'peligro', texto: 'No toques los contactos del procesador ni los pines del socket. Un pin doblado puede dejar la placa inservible.' },
      { tipo: 'atencion', texto: 'Nunca fuerces el procesador. Si no apoya solo, está mal orientado.' }
    ]
  },
  {
    titulo: 'Instalar la memoria RAM',
    texto: 'Abrí las trabas de los slots, alineá la muesca del módulo con la del slot y presioná parejo hasta que las trabas hagan clic.',
    avisos: [
      { tipo: 'consejo', texto: 'Con dos módulos, usá los slots que indica el manual (generalmente el 2.º y el 4.º desde el procesador) para activar el dual channel.' }
    ]
  },
  {
    titulo: 'Instalar el SSD M.2',
    texto: 'Sacá el disipador de la ranura M.2 si lo tiene, insertá el SSD en ángulo, bajalo y fijalo con el tornillo en la posición de su largo.',
    avisos: [
      { tipo: 'atencion', texto: 'Algunas placas traen una lámina plástica sobre el espaciador o la pieza térmica: retirala antes de colocar el SSD.' }
    ]
  },
  {
    titulo: 'Montar el cooler',
    texto: 'Aplicá pasta térmica del tamaño de una arveja en el centro del procesador (si el cooler no la trae) y fijá el cooler siguiendo su manual. Conectá su cable al conector CPU_FAN.',
    avisos: [
      { tipo: 'peligro', texto: 'Sacá el film plástico de la base del cooler antes de instalarlo. Si queda puesto, el procesador se recalienta enseguida.' }
    ]
  },
  {
    titulo: 'Preparar el gabinete y la fuente',
    texto: 'Abrí los paneles laterales. Verificá que los separadores (standoffs) del gabinete coincidan con los agujeros de tu placa. Instalá la fuente con su ventilador apuntando hacia donde haya entrada de aire.',
    avisos: [
      { tipo: 'atencion', texto: 'No dejes separadores de más debajo de la placa: pueden hacer cortocircuito.' }
    ]
  },
  {
    titulo: 'Fijar la placa madre',
    texto: 'Colocá primero la chapa trasera de puertos (I/O shield) si no viene integrada. Después apoyá la placa sobre los separadores y atornillala sin apretar de más.',
    avisos: []
  },
  {
    titulo: 'Conectar los cables de la fuente',
    texto: 'Conectá el cable de 24 pines a la placa y el de CPU (EPS) en la esquina superior izquierda. Después conectá la energía de los discos SATA, si los hay.',
    avisos: [
      { tipo: 'peligro', texto: 'Los conectores tienen una forma que solo permite una posición. Si no entra, está al revés: nunca lo fuerces.' },
      { tipo: 'atencion', texto: 'No uses cables de fuente de otra marca o modelo: aunque encajen, la distribución de los cables puede ser distinta y quemar piezas.' }
    ]
  },
  {
    titulo: 'Instalar la placa de video',
    texto: 'Sacá las tapas del gabinete que correspondan, insertá la placa de video en el slot PCIe x16 de arriba hasta oír el clic y atornillala al gabinete. Conectale los cables PCIe de la fuente.',
    avisos: [
      { tipo: 'atencion', texto: 'En placas de video potentes, usá un cable independiente para cada conector. Evitá los cables que se bifurcan para alimentar dos conectores.' },
      { tipo: 'consejo', texto: 'Si tu conector de energía es de tipo 12V-2x6, empujalo hasta el fondo y evitá doblar el cable pegado al conector.' }
    ]
  },
  {
    titulo: 'Conectar los cables del frente del gabinete',
    texto: 'Conectá el botón de encendido, los LED, los USB y el audio frontal a los pines de la placa. El manual tiene el diagrama exacto de cada uno.',
    avisos: [
      { tipo: 'consejo', texto: 'Primero conectá el botón de encendido (POWER SW): es el imprescindible para probar.' }
    ]
  },
  {
    titulo: 'Primer encendido',
    texto: 'Conectá el monitor a la placa de video (no a la placa madre, si tenés GPU dedicada), enchufá la fuente y encendé. Entrá a la BIOS y verificá que reconozca el procesador, la RAM y el SSD. Después instalá el sistema operativo.',
    avisos: [
      { tipo: 'atencion', texto: 'Si no da imagen, apagá y revisá: RAM bien insertada, cable EPS de CPU conectado y monitor enchufado a la placa de video.' }
    ]
  }
];
