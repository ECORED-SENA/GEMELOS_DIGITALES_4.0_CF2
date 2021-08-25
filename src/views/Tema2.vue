<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Manipulación de ensambles

    p A continuación, se exponen las opciones de manipulación que se pueden realizar con este software.

    .p-5.mt-5(style="background-color:#F5FFFF")
      .row
        .col-md-6.mb-3.p-4
          h4 Mover componente

          p.mt-3 La herramienta #[strong «Mover componente»] permite trasladar o rotar un componente del ensamblaje. Si el componente contiene restricciones, estos movimientos quedan condicionados respetando las relaciones. Una vez seleccionada la pieza, en #[strong «especificar la orientación»] arrástrela desde los ejes ZC, YC, o XC. 

        .col-md-6
          figure
            img(src='@/assets/curso/tema2/1.svg', alt='ensambles')
            figcaption Mover componente

    .p-5(style="background-color:#E5FFFD")
      .row
        .col-md-6.mb-3.p-4
          h4 Crear nuevo componente

          p.mt-3 Este comando le permite crear nuevas geometrías de componentes o subensambles dentro del archivo de ensamblaje. En la pestaña modelo se pueden seleccionar modelos y asignar un nombre en la casilla.

        .col-md-6
          figure
            img(src='@/assets/curso/tema2/2.svg', alt='ensambles')
            figcaption Crear nuevo componente 

      .row.mt-4
        .col-md-6.mb-3.p-4

          p En el cuadro de diálogo emergente en seleccionar objeto indique con el mouse el ensamble principal desde el navegador y en nombre redefina el nombre si se desea.

        .col-md-6
          figure
            img(src='@/assets/curso/tema2/3.svg', alt='ensambles')
            figcaption Crear un componente nuevo en ensamble

    .p-5(style="background-color:#F5FFFF")
      .row
        .col-md-6.mb-3.p-4
          h4 Explosionado (secuencias) de componentes

          p.mt-3 Una #[strong vista explosionada] del ensamblaje permite mostrar una imagen separada, de cada uno de los componentes del ensamblaje. En la práctica industrial, este tipo de vistas son muy útiles en el taller de ensamblaje para tener una referencia de la ubicación espacial de los componentes de un producto. El usuario debe comprender que explotar un ensamblaje no significa reubicar los componentes, sino solo ver los modelos en forma de desmontaje. Puede anular la explosión de la vista en cualquier momento que desee recuperar la vista del ensamblaje original.

          p.mt-4 Elija Menú → Ensamblajes → Vistas esquemáticas → Nueva esquematización

        .col-md-6
          figure
            img(src='@/assets/curso/tema2/4.svg', alt='ensambles')
            figcaption Vistas esquematizadas (explosionado)

      .row.mt-5
        .col-md-6.mb-3.p-4

          p.mt-3 Haga clic derecho sobre cualquier componente y elija #[strong «editar esquematización»], aparecerá la ventana «editar esquematización» junto con los controladores de coordenadas del componente.

        .col-md-6
          figure
            img(src='@/assets/curso/tema2/5.png', alt='ensambles')
            figcaption Editar Esquematización (explosionado)



    


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
