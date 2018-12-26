<template>
  <div class="carousel-section">
    <div class="gallery-section">
      <div
        style="z-index: 10;cursor: pointer"
        @click="onClickLeft"
      >

        <carousel-arrow left />
      </div>
      <div class="images-section">
        <carousel-img
          :position="position0"
          src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/carrousel/carousel.jpg"
        />
        <carousel-img
          :position="position1"
          src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/carrousel/carousel.jpg"
        />
        <carousel-img
          :position="position2"
          src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/carrousel/carousel.jpg"
        />
      </div>
      <div
        style="z-index: 10;cursor: pointer"
        @click="onClickRight"
      >
        <carousel-arrow />

      </div>
    </div>
    <div class="point-section">
      <div
        class="point"
        @click="changePosition(2)"
      >
        <carousel-pointer :active="position===2" />

      </div>
      <div
        class="point"
        @click="changePosition(0)"
      >
        <carousel-pointer :active="position===0" />
      </div>
      <div
        class="point"
        @click="changePosition(1)"
      >
        <carousel-pointer :active="position===1" />
      </div>

    </div>
  </div>
</template>

<script>
import CarouselArrow from './CarouselArrow'
import CarouselPointer from './CarouselPointer'
import CarouselImg from './CarouselImg'

export default {
  components: { CarouselImg, CarouselPointer, CarouselArrow },
  data() {
    return {
      position: 0
    }
  },
  computed: {
    position0() {
      const positionList = ['left', 'middle', 'right']
      return positionList[this.position]
    },
    position1() {
      const positionList = ['middle', 'right', 'left']
      return positionList[this.position]
    },
    position2() {
      const positionList = ['right', 'left', 'middle']
      return positionList[this.position]
    }
  },
  methods: {
    changePosition(position) {
      this.position = position
    },
    onClickLeft() {
      if (this.position === 0) {
        this.position = 2
      } else {
        this.position = this.position - 1
      }
    },
    onClickRight() {
      if (this.position === 2) {
        this.position = 0
      } else {
        this.position = this.position + 1
      }
    }
  }
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
    position: relative;
    padding: 0 15px;

    .images-section {
      position: relative;
      width: 700px;
      height: 380px;
      perspective: 1000px;
    }
  }

  .point-section {
    display: flex;
    .point {
      transition: transform 0.2s;
      z-index: 10;
      cursor: pointer;
    }

    .point:hover {
      transform: scale(1.3);
    }

    .point:active {
      transform: scale(1.1);
    }
  }
}
</style>
