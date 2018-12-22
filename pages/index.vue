<template>
  <section>
    <main-page-part />
    <carrousel-part />
    <third-page-part />
  </section>
</template>

<script>
import MainPagePart from '~/components/MainPagePart/index.vue'
import CarrouselPart from '~/components/CarrouselPart/index.vue'
import ThirdPagePart from '~/components/ThirdPagePart/index.vue'

export default {
  components: {
    MainPagePart,
    CarrouselPart,
    ThirdPagePart
  }
}
</script>

<style>
</style>
