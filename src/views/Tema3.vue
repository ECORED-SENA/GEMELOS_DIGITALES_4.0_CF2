<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Módulo de plano

    p La aplicación NX 12 #[strong Dibujo] le permite crear dibujos, vistas, geometrías, dimensiones y anotaciones de dibujo, necesarias para la fabricación y la comprensión de un diseño. La aplicación de dibujo admite la elaboración de modelos de ingeniería de acuerdo con los estándares ANSI. 

    p.mt-4 Está diseñada para producir y editar dibujos de ingeniería estándar de la industria, directamente desde el modelo 3D o la pieza de ensamblaje. Los dibujos creados en la aplicación son completamente asociativos al modelo y cualquier cambio realizado en el modelo se refleja automáticamente en el dibujo. La aplicación Dibujo también ofrece un conjunto de herramientas de dibujo 2D para definir requisitos de diseño, también se pueden producir dibujos 2D independientes. El módulo de dibujo se basa en la creación de vistas a partir de un modelo sólido, facilitando la creación de dibujos con vistas ortográficas, vistas en sección, vistas importadas, vistas auxiliares, cotas y otras anotaciones.

    p.mt-5 #[strong Desde la interfaz NX 12, elija Archivo → Dibujo en el plano como se muestra o elija la pestaña Aplicación y seleccione Dibujo en plano.]

    .titulo-quinto.color-primario.mt-5
      h4 Nuevo dibujo en plano

    .col-md-10(style="margin:0 auto")
      figure
        img(src='@/assets/curso/tema3/1.svg', alt='ensambles')

    p.mt-5 Cuando abre la aplicación de dibujo por primera vez, aparece una ventana emergente que solicita entradas como la plantilla, el tamaño estándar o el tamaño personalizado, las unidades y el ángulo de proyección.

    .titulo-quinto.color-primario.mt-5
      h4 Selección de formato de plano

    .col-md-12(style="margin:0 auto")
      figure
        img(src='@/assets/curso/tema3/2.png', alt='ensambles')

    p.mt-5 A continuación, se presentan distintas funciones para el diseño de un plano.

    .tarjeta.p-4.mt-5(style="background-color: #F3F9FF;")
      PasosB.color-acento-botones
        .p-5(titulo="Panel de herramientas y comandos")
          h4 Panel de herramientas y comandos
          p.mt-3 El panel contiene los principales comandos para el desarrollo de operaciones de dibujo de planos agrupados como vista, cotas, anotaciones, croquis y tablas. También, contiene todos los comandos de dibujo necesarios para realizar un plano que contiene toda la información técnica del gemelo digital.
      
          figure.mt-3
            img(src='@/assets/curso/tema3/3.svg', alt='herramientas')
            figcaption.bg-1 Barra de comandos

          div(style="height:1100px;")

        .p-5(titulo="Formatos")
          h4 Formatos

          p.mt-3 Crea una nueva hoja de dibujo con las opciones de plantillas, tamaños estándar y personalizados como se muestra en la figura. Se puede seleccionar los tamaños y formatos de hojas de acuerdo con la opción elegida.
      
          figure.mt-3
            img(src='@/assets/curso/tema3/4.svg', alt='herramientas')
            figcaption.bg-1 Nueva hoja

          div(style="height:700px;")

        .p-5(titulo="Asistente de vistas")
          h4 Asistente de vistas

          p.mt-3 El asistente permite generar las vistas de forma automática. Es una guía paso a paso del proceso de creación de vistas. En el cuadro de diálogo se muestran los componentes o ensambles disponibles para la inserción en el plano.
      
          figure.mt-3
            img(src='@/assets/curso/tema3/5.svg', alt='herramientas')
            figcaption.bg-1 Asistente para creación de vistas

          p.mt-5 En la opción #[strong «disposición»] el asistente le permite elegir la configuración de las vistas que requiera, basta con seleccionar desde cuadro de diálogo.
      
          figure.mt-3
            img(src='@/assets/curso/tema3/6.svg', alt='herramientas')
            figcaption.bg-1 Disposición de vistas

          div(style="height:300px;")


        .p-5(titulo="Vista base")
          h4 Vista base

          p.mt-3 El cuadro de diálogo Vista base con las opciones de #[strong «Vista»] y #[strong «Escala»] se mostrará junto con un dibujo flotante del objeto.

          p.mt-3 Elija la vista para que sea frontal.
      
          figure.mt-3
            img(src='@/assets/curso/tema3/7.svg', alt='herramientas')
            figcaption.bg-1 Vista base

          p.mt-4 Puede encontrar la proyección de la vista frontal en la pantalla. Puede mover el cursor del mouse en la pantalla y hacer clic en el lugar donde desea la vista. Una vez que configure la Vista frontal, aparecerá otro cuadro de diálogo que le pedirá que configure las otras vistas en cualquier lugar de la pantalla dentro del límite de la hoja.

          p.mt-3 Puede encontrar diferentes vistas moviendo el cursor alrededor de la primera vista. Si desea agregar vistas ortográficas después de cerrar este archivo o cambiar a otros modos de comando.

          p.mt-3 Elija Insertar → Ver → Vista proyectada o elija el icono Vista proyectada del grupo Vista

          div(style="height:580px")

        .p-5(titulo="Escala de vista")
          h4 Escala de vista

          p.mt-3 Para cambiar la escena de varias vistas simultáneamente selecciónelas desde el navegador, al hacer clic derecho del mouse, seleccione «ajustes» desde el menú emergente.
      
          figure.mt-3
            img(src='@/assets/curso/tema3/8.svg', alt='herramientas')
            figcaption.bg-1 Cambio de escala

          div(style="height:750px;")

        .p-5(titulo="Vista proyectada")
          h4 Vista proyectada

          p.mt-3 Crea una vista auxiliar a partir de una base. NX deduce automáticamente la alineación ortogonal o auxiliar a medida que se mueve el cursor en un movimiento circular sobre el centro de la vista madre.
      
          figure.mt-3
            img(src='@/assets/curso/tema3/9.svg', alt='herramientas')
            figcaption.bg-1 Comando vista proyectada

          figure.mt-5
            img(src='@/assets/curso/tema3/10.svg', alt='herramientas')
            figcaption.bg-1 Vista proyectada

          div(style="height:350px;")

        .p-5(titulo="Línea de sección")
          h4 Línea de sección

          p.mt-3 Crea una línea seccional independiente basada en un croquis que se puede utilizar para crear una vista seccional o una línea derivada de un símbolo del plano de corte.
      
          figure.mt-3
            img(src='@/assets/curso/tema3/11.svg', alt='herramientas')
            figcaption.bg-1 Comando línea seccional

          figure.mt-5
            img(src='@/assets/curso/tema3/12.svg', alt='herramientas')
            figcaption.bg-1 Línea seccional

          div(style="height:450px;")

        .p-5(titulo="Vista de sección")
          h4 Vista de sección

          p.mt-3 Crea una vista de sección a partir de vista de dibujo padre. 
      
          figure.mt-3
            img(src='@/assets/curso/tema3/13.svg', alt='herramientas')
            figcaption.bg-1 Comando Vista de sección

          p.mt-5 En definición se puede seleccionar una línea de seccional independiente ya definida como se observa en la figura.
      
          figure.mt-3
            img(src='@/assets/curso/tema3/14.svg', alt='herramientas')
            figcaption.bg-1 Vista de sección

          div(style="height:450px;")

        .p-5(titulo="Vista en detalle")
          h4 Vista en detalle

          p.mt-3 Crea una vista que contiene una porción ampliada a una escala específica de una vista de dibujo.
      
          figure.mt-3
            img(src='@/assets/curso/tema3/15.svg', alt='herramientas')
            figcaption.bg-1 Vista de detalle

          div(style="height:900px;")

        .p-5(titulo="Acotado")
          h4 Acotado

          p.mt-3 Las dimensiones se pueden insertar de cualquiera de las dos formas que se describen a continuación:

          p.mt-3 Elija Menú → Insertar → Dimensión

          p.mt-3 Haga clic en la barra de herramientas de dimensión como se muestra en la siguiente figura.
      
          figure.mt-3
            img(src='@/assets/curso/tema3/16.svg', alt='herramientas')
            figcaption.bg-1 Comandos de cota

          p.mt-5  Haga clic en puntos y aristas, mueva el #[strong mouse] y haga clic en la ubicación adecuada para dibujar las dimensiones.

          p.mt-3 Los íconos de esta ventana son útiles para cambiar las propiedades de las dimensiones. Por ejemplo, #[strong cota rápida] crea una cota al deducir el tipo de cota basado en los objetos seleccionados y la ubicación del cursor. En #[strong método] se puede seleccionar los tipos de cotas de acuerdo con la geometría del componente.
      
          figure.mt-3
            img(src='@/assets/curso/tema3/17.svg', alt='herramientas')
            figcaption.bg-1 Cota rápida

        .p-5(titulo="Anotaciones")
          h4 Anotaciones

          p.mt-3 El grupo de anotación contiene los comandos necesarios para definir información técnica como: anotaciones, tolerancias geométricas, soldaduras, acabado superficial, los indicadores de referencia y achurado, entre otros.
      
          figure.mt-3
            img(src='@/assets/curso/tema3/18.svg', alt='herramientas')
            figcaption.bg-1 Comando de anotaciones

          p.mt-5 El comando nota permite crear una especificación particular de un componente.
      
          figure.mt-3
            img(src='@/assets/curso/tema3/19.svg', alt='herramientas')
            figcaption.bg-1 Nota

          div(style="height:200px;")

        .p-5(titulo="Lista de piezas")
          h4 Lista de piezas

          p.mt-3 Este comando se encuentra en el grupo tabla y permite crear una lista de piezas en un plano de conjunto o explosionado.
      
          figure.mt-3
            img(src='@/assets/curso/tema3/20.svg', alt='herramientas')
            figcaption.bg-1 Comandos de tabla

          p.mt-5 El sistema identifica automáticamente la vista de ensamble y genera una tabla con identificación de cada componente, mostrando el nombre de la pieza y la cantidad de elementos en el ensamble. Ademan identifica el orden de ensamble con un número.
      
          figure.mt-3
            img(src='@/assets/curso/tema3/21.svg', alt='herramientas')
            figcaption.bg-1 Lista de piezas

        .p-5(titulo="Globos")
          h4 Globos

          p.mt-3 Crea una lista de elementos de referencia en forma de globos con la numeración de cada componente en una vista conjunto o explosionado.
      
          figure.mt-3
            img(src='@/assets/curso/tema3/22.svg', alt='herramientas')
            figcaption.bg-1 Comando globos automático

          figure.mt-5
            img(src='@/assets/curso/tema3/23.svg', alt='herramientas')
            figcaption.bg-1 Globos automáticos

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.pasos-b__header__item__dot
  background-color: #00C3BB
  border: none
  color: white
.bg-1
  background-color:#D2E1F1
</style>
