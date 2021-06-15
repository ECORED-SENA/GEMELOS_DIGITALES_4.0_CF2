<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Creación de ensambles y planos

    p La creación de un ensamble, de acuerdo a lo definido en la introducción, se realiza a través de una serie de pasos, los cuales se describen a continuación.

    .col-md-9(style="margin:0 auto")
      ImagenInfografica.color-secundario.mt-4

        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema1/1.svg', alt='ensambles')

        .tarjeta.color-terciario.p-3(x="36%" y="15%" style="background-color:#02FFCE")
          .h5.mb-2 1. Cree un nuevo archivo

        .tarjeta.color-terciario.p-3(x="20%" y="37%" style="background-color:#02FFCE")
          .h5.mb-2 2. Elija «Ensamblaje» en la pestaña «Modelo».

        .tarjeta.color-terciario.p-3(x="55%" y="25%" style="background-color:#02FFCE")
          .h5.mb-2 3. Establezca las unidades

        .tarjeta.color-terciario.p-3(x="66%" y="74%" style="background-color:#02FFCE")
          .h5.mb-2 4. Defina un nombre al archivo con extensión prt. 

        .tarjeta.color-terciario.p-3(x="66%" y="83%" style="background-color:#02FFCE")
          .h5.mb-2 5. Seleccione la ubicación

    p.mt-5 El navegador de ensamblajes y el navegador de restricciones se encuentran en la parte superior del navegador de piezas en la barra de recursos a la izquierda de la pantalla. Estos navegadores le muestran varias cosas que forman el ensamblaje, incluida la jerarquía de la pieza, el nombre de la pieza y la información sobre la pieza, como si la pieza es de solo lectura, el recuento de objetos y el estado de la restricción.

    .titulo-quinto.color-primario.mt-5
      h4 Navegador de ensamble

    .col-md-7(style="margin:0 auto")
      figure
        img(src='@/assets/curso/tema1/2.svg', alt='ensambles')

    p.mt-5 En la opción #[strong Componentes] se pueden realizar las siguientes acciones:

    .col-md-11
      .cajon.p-4(style="background-color:rgba(2,255,205,.25)")
        ul.lista-ul--color
          li 
            i.fas.fa-check
            p La opción #[strong «Agregar»] adiciona nuevos objetos componentes cuyos archivos de pieza ya están creados.
          li
            i.fas.fa-check
            p #[strong «Crear nuevo»] le permite formar nuevas geometrías de componentes dentro del archivo de ensamblaje cuando utiliza el enfoque de arriba hacia abajo del ensamblaje.

    p.mt-4 La opción «Posición del componente» le permite #[strong crear relaciones de ensamble] y «Mover componentes», por su parte, le permite reposicionarlos donde los desee en el ensamblaje.

    .titulo-quinto.color-primario.mt-5
      h4 Barra de comandos de componente y posición

    .col-md-10(style="margin:0 auto")
      figure
        img(src='@/assets/curso/tema1/3.svg', alt='ensambles')

    #t_1_1.titulo-segundo.mt-5
      h2 1.1 Insertar componentes

    p En la opción «Componente», usando la herramienta «Agregar», se pueden adicionar uno o más componentes cuyos archivos de pieza ya están creados. En el cuadro de diálogo, en abrir el sistema, permite encontrar la ubicación de la pieza.

    .titulo-quinto.color-primario.mt-5
      h4 Agregar componente

    .col-md-8(style="margin:0 auto")
      figure
        img(src='@/assets/curso/tema1/4.svg', alt='ensambles')

    #t_1_2.titulo-segundo.mt-5
      h2 1.2 Restricciones de ensamble

    p Una vez que los componentes se agregan al ensamblaje, cada pieza se relaciona con los demás, asignando diferentes relaciones, tales como: tocar o alinear, concéntrico, paralelo, perpendicular, igual, tangente, ángulo, paralelo, entre otras. Estas relaciones se denominan restricciones de asociación. Una condición de asociación se compone de una o más restricciones.

    .titulo-quinto.color-primario.mt-5
      h4 Restricciones de ensamble

    .col-md-9(style="margin:0 auto")
      figure
        img(src='@/assets/curso/tema1/5.svg', alt='ensambles')

    p.mt-5 #[strong Existen diferentes restricciones de apareamiento como se explica a continuación:]

    TabsA.mt-5
      .tarjeta.p-5(titulo="Tocar o alinear")
        h4 Tocar o alinear

        p.mt-3 Crea una relación de alineación coplanar, haciendo que las dos caras queden coincidentes entre componentes.

        figure.mt-4
          img(src='@/assets/curso/tema1/6.svg', alt='ensambles')
          figcaption Restricción Tocar o alinear
      
      .tarjeta.p-5(titulo="Concéntrico")
        h4 Concéntrico

        p.mt-3 Restringe los bordes circulares o elípticos de dos componentes para que los centros coincidan y los planos de los bordes sean coplanares.

        figure.mt-4
          img(src='@/assets/curso/tema1/7.svg', alt='ensambles')
          figcaption Restricción concéntrica

      .tarjeta.p-5(titulo="Distancia")
        h4 Distancia

        p.mt-3 Esto establece un valor de distancia con (desplazamiento) +/- entre dos componentes.

        figure.mt-4
          img(src='@/assets/curso/tema1/8.svg', alt='ensambles')
          figcaption Restricción de Distancia 

      .tarjeta.p-5(titulo="Alinear")
        h4 Alinear

        p.mt-3 Alinea los ejes de dos componentes y al mismo tiempo evita la rotación alrededor de un eje común.

        figure.mt-4
          img(src='@/assets/curso/tema1/9.svg', alt='ensambles')
          figcaption Alinear o bloquear

      .tarjeta.p-5(titulo="Paralelo")
        h4 Paralelo

        p.mt-3 Hace que las caras planas de dos componentes queden alineadas a la misma distancia.

        figure.mt-4
          img(src='@/assets/curso/tema1/10.svg', alt='ensambles')
          figcaption Restricción de paralelo

      .tarjeta.p-5(titulo="Perpendicular")
        h4 Perpendicular

        p.mt-3 Esta relación permite de las caras de dos componentes queden perpendiculares, es decir que forman 90º entre ellas.

        figure.mt-4
          img(src='@/assets/curso/tema1/11.svg', alt='ensambles')
          figcaption Restricción de perpendicular

      .tarjeta.p-5(titulo="Ángulo")
        h4 Ángulo

        p.mt-3 Permite que las caras de dos componentes se posicionen a un ángulo específico.

        figure.mt-4
          img(src='@/assets/curso/tema1/12.svg', alt='ensambles')
          figcaption Restricción de ángulo

      .tarjeta.p-5(titulo="Centro")
        h4 Centro

        p.mt-3 Esta herramienta permite centrar las caras de un componente entre las caras de otro.

        figure.mt-4
          img(src='@/assets/curso/tema1/13.svg', alt='ensambles')
          figcaption Restricción de centro

    #t_1_3.titulo-segundo.mt-5
      h2 1.3 Edición de relaciones de ensamble

    p Las operaciones de eliminar o modificar se pueden realizar desde el navegador de restricciones, haciendo clic con el botón derecho del mouse.

    .titulo-quinto.color-primario.mt-5
      h4 Navegador de restricciones

    .col-md-10(style="margin:0 auto")
      figure
        img(src='@/assets/curso/tema1/14.svg', alt='ensambles')

  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),
}
</script>
<style lang="sass">
.cajon:before
  background-color: #00C3BB
.tabs-a__tab:before
  background-color: #e8e8e8
.tabs-a__tab:hover,.tabs-a__tab:focus,.tabs-a__tab:hover:before,,.tabs-a__tab:focus:before
  background-color: #00C3BB
.tabs-a__tab
  background-color: #e8e8e8
.tabs-a__content-item.tabs-a__content-item--active
    background-color: rgba(124,197,255,.15)
</style>
