<template>
  <section>
    <main-page-part />
    <carrousel-part />
    <third-page-part />
    <author-footer />
  </section>
</template>

<script>
import MainPagePart from '~/components/MainPagePart/index.vue'
import CarrouselPart from '~/components/CarrouselPart/index.vue'
import ThirdPagePart from '~/components/ThirdPagePart/index.vue'
import AuthorFooter from '~/components/AuthorFooter/index.vue'

export default {
  components: {
    MainPagePart,
    CarrouselPart,
    ThirdPagePart,
    AuthorFooter
  }
}
</script>

<style>
</style>
