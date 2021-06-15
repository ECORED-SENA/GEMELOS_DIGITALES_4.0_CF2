<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .col-md-8(style="margin:0 auto")
      figure
        img(src="@/assets/curso/introduccion/1.svg", alt="Introducción")

    p.mt-5 NX 12 ensamble es un archivo de pieza que contiene las piezas individuales. Se agregan al archivo de pieza de tal manera que las piezas están virtualmente en el ensamblaje y vinculadas a la pieza original. Esto elimina la necesidad de crear un espacio de memoria separado para las partes individuales de la computadora. Todas las piezas se pueden seleccionar y se pueden utilizar en el proceso de diseño para obtener información y acoplamiento y asegurar un ajuste perfecto según lo previsto por los diseñadores.  (Ming, Wenjin, Amir, & Krishna, 2019).

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
