<template>
  <div class="img-cover">
    <div class="center-component">
      <div class="center-component__img">
        <carousel-component />
      </div>
    </div>
  </div>
</template>


<script>
import FadeBackground from '~/components/FadeBackground/index.vue'
import CarouselComponent from './CarouselComponent/index'

export default {
  components: {
    FadeBackground,
    CarouselComponent
  }
}
</script>

<style scoped lang="scss">
.background-img {
  object-fit: cover;
  height: 100vh;
  overflow: hidden;
  width: 100%;
}
.center-component {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  .center-component__img {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      display: block;
    }
    .center-component_img1 {
      height: 50px;
      padding-bottom: 20px;
    }
    .center-component_img2 {
      height: 20px;
    }
  }
}
.img-cover {
  height: 100vh;
  position: relative;
}
</style>
