<template>
  <div class="carousel-section">
    <div class="gallery-section">
      <carousel-arrow left />
      <div class="images-section">
        <carousel-img
          position="left"
          src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/carrousel/carousel.jpg" />
        <carousel-img
          position="middle"
          src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/carrousel/carousel.jpg" />
        <carousel-img
          position="right"
          src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/carrousel/carousel.jpg" />
      </div>
      <carousel-arrow />
    </div>
    <div class="point-section">
      <carousel-pointer />
      <carousel-pointer />
      <carousel-pointer />
    </div>
  </div>
</template>

<script>
import CarouselArrow from './CarouselArrow'
import CarouselPointer from './CarouselPointer'
import CarouselImg from './CarouselImg'
export default {
  components: { CarouselImg, CarouselPointer, CarouselArrow }
}
</script>

<style lang="scss" scoped>
.carousel-section {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  .gallery-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;
    .images-section {
      position: relative;
      width: 700px;
      height: 380px;
      perspective: 1000px;
    }
  }
  .point-section {
    display: flex;
  }
}
</style>
