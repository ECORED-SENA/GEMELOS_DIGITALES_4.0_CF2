export default {
  global: {
    componenteFormativo: 'Módulo de ensamble  y planos',
    descripcionCurso:
      'Un gemelo digital es una representación virtual de un producto o proceso físico que se utiliza para comprender y predecir las características de rendimiento. Este módulo tiene como objetivo guiar al estudiante en el desarrollo de habilidades y destrezas para la creación de gemelos digitales mediante el conocimiento y la aplicación del sistema CAD NX.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Creación de ensambles y planos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Insertar componentes',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Restricciones de ensamble',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Edición de relaciones de ensamble',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Manipulación de ensambles',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Módulo de plano',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: ['Carlos Andrés Ossa Jiménez ', 'José Eduardo Chaves Peña'],
        cargo: 'Experto temático',
        centro: 'Centro de Diseño Tecnológico Industrial',
      },
      {
        nombre: 'Oscar Riveros',
        cargo: 'Experto temático',
        centro: 'Centro Diseño y Metrología',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Carlos Julián Ramírez Benítez',
        cargo: 'Diseño web',
      },
      {
        nombre: ['Carlos Julián Ramírez Benítez'],
        cargo: 'Diseño web',
      },
      {
        nombre: [
          'Gilberto Junior Rodríguez Rodríguez',
          'Lina Pérez',
          'Ricardo Vásquez',
          'Wilson Andrés Arenales Cáceres',
        ],
        cargo: 'Producción audiovisual',
      },
      {
        nombre: ['Luis Jesús Pérez Madariaga'],
        cargo: 'Desarrollo front-end',
      },
      {
        nombre: ['Validación de diseño y contenido'],
        cargo: 'Jhana Johanna Bustillo Ardila',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
      },
      {
        nombre: 'Leyson Fabian Castaño Pérez',
        cargo: 'Soporte organizacional',
      },
      {
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación y vinculación en plataforma LMS'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Alcrudo. J. (s.f). Formación NX CAD básico. Academia.edu.',
      link: 'https://www.academia.edu/29809639/FORMACION_NX_CAD_BASICO',
    },
    {
      referencia:
        'd3plus, (2018, julio 16). Tutorial básico introductorio a modelado CAD NX 10. [Video]. YouTube',
      link: 'https://youtu.be/iGTENoC7ryg',
    },
    {
      referencia:
        'Dep Fab Mecanica Marianao, (2019, noviembre 20). NX Curso drawing y acotado FMC0 M01. [Video]. YouTube.',
      link: 'https://youtu.be/pFcMlBL5Ps0',
    },
    {
      referencia:
        'Domínguez. J. (2018). Siemens NX 12.0 for Designers (11a ed.) Sham tickoo.',
      link: '',
    },
    {
      referencia:
        'Inge Lui, (2020, mayo 11). Unidad 2 ensambles utilizando NX. [Video]. YouTube',
      link: 'https://youtu.be/J5h38RBj_hI',
    },
    {
      referencia:
        'Leu. M., Tao. W., Ghazanfari. A. y Kolan. K., (s.f). NX12 for Engineering Desing. Missouri University of Science and Technology.',
      link:
        'https://me5763.github.io/lab/assets/books/NX-12-for-Engineering-Design.pdf',
    },
    {
      referencia:
        'Mundo tutorial, (2017, octubre 10). Siemens NX. Pieza 3D. Tutorial. [Video]. YouTube.',
      link: 'https://youtu.be/UeJ1Yegal9E',
    },
    {
      referencia: 'Siemens. (2020). Documentación didáctica.',
      link:
        'https://new.siemens.com/es/es/productos/automatizacion/sce/documentacion-didactica.html',
    },
    {
      referencia: 'Tao, W. (s.f). NX 12 for Engineering Design. Academia.edu.',
      link: 'https://www.academia.edu/37546347/NX_12_for_Engineering_Design',
    },
  ],
  glosario: [
    {
      termino: 'Asistente de vistas',
      significado:
        'Ayuda que permite la creación de múltiples vistas en un plano.',
    },
    {
      termino: 'CAD',
      significado:
        'El diseño asistido por ordenador (CAD) consiste en el uso de programas de ordenador para crear, modificar, analizar y documentar representaciones gráficas en 2D o 3D de objetos físicos.',
    },
    {
      termino: 'CAD/CAM',
      significado:
        ' CAD CAM es la integración del diseño asistido por ordenador y el software de fabricación asistido por ordenador, con el objetivo de obtener una gestión de los cambios del diseño sencillo, una concepción del diseño simultánea y una configuración del proceso de fabricación flexible, especialmente para el diseño y la fabricación de prototipos y de piezas acabadas.',
    },
    {
      termino: 'Ensamble',
      significado:
        'Archivo de pieza que contiene un conjunto de partes, componentes y subensambles, que se utilizarán en un ensamble de nivel superior.',
    },
    {
      termino: 'Entorno de plano',
      significado:
        'Módulo de NX que permite realizar dibujos de ingeniería que cumplan con las principales normas internacionales.',
    },
    {
      termino: 'Explosionado',
      significado:
        'Creación de un explosionado (esquematización) de un conjunto de componentes dentro de un ensamble.',
    },
    {
      termino: 'Gemelo digital',
      significado:
        'Representación virtual de un producto o proceso físico que se utiliza para comprender y predecir las características de rendimiento de su equivalente físico. Los gemelos digitales se utilizan a lo largo de todo el ciclo de vida del producto para simular, predecir y optimizar el producto y el sistema de producción antes de invertir en prototipos y activos físicos.',
    },
    {
      termino: 'Lista de piezas',
      significado:
        'Tabla que contiene la descripción detallada de la información de los componentes de un ensamble.',
    },
    {
      termino: 'Mover componente',
      significado:
        'Permite visualizar el movimiento de un componente en un ensamble.',
    },
    {
      termino: 'NX',
      significado:
        'El software NX es una solución integrada de diseño, ingeniería y fabricación de productos que le ayuda a ofrecer productos innovadores de forma más rápida y eficiente.',
    },
    {
      termino: 'Plano de conjunto',
      significado:
        'Creación de un plano en una vista isométrica o explosionada de un ensamble de componentes en una hoja de plano.',
    },
    {
      termino: 'Relaciones de ensamble',
      significado:
        'Posiciona las partes o componentes relacionándolas con otras dentro de un ensamble. ',
    },
    {
      termino: 'Secuencias',
      significado:
        'Conjunto de pasos para simular el ensamble o explosionado de partes y componentes.',
    },
    {
      termino: 'Vista de sección',
      significado:
        'Vista que representa un corte de un componente en un plano.',
    },
  ],
  complementario: [
    {
      texto:
        'Documentación didáctica para cursos de formación "DigitalTwin@Education Module 150-004.',
      tipo: 'Página web',
      link:
        'https://new.siemens.com/es/es/productos/automatizacion/sce/documentacion-didactica.html',
    },
    {
      texto: 'Ensambles en NX',
      tipo: 'Video',
      link: 'https://youtu.be/J5h38RBj_hI',
    },
    {
      texto: 'Guía – tutorial de NX 12',
      tipo: 'Libro',
      link: 'https://www.academia.edu/37546347/NX_12_for_Engineering_Design',
    },
    {
      texto: 'Guía de NX 12',
      tipo: 'Capítulo de libro',
      link:
        'https://me5763.github.io/lab/assets/books/NX-12-for-Engineering-Design.pdf',
    },
    {
      texto: 'Introducción a las bases del 3D',
      tipo: 'Presentación',
      link:
        'https://www.academia.edu/44135303/Siemens_NX_12_0_for_Designers_11th_Edition_Sham_tickoo',
    },
    {
      texto: 'NX CAD básico',
      tipo: 'Capítulo de libro',
      link: 'https://www.academia.edu/29809639/FORMACION_NX_CAD_BASICO',
    },
    {
      texto: 'Opciones en dibujo de NX1880',
      tipo: 'Video',
      link: 'https://youtu.be/pFcMlBL5Ps0 ',
    },
    {
      texto: 'Pieza 3D',
      tipo: 'Video',
      link: 'https://youtu.be/UeJ1Yegal9E ',
    },
    {
      texto: 'Tutorial introductorio a NX',
      tipo: 'Video',
      link: 'https://youtu.be/iGTENoC7ryg ',
    },
  ],
}
