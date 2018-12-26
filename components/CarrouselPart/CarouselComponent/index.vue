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
          :vedios="[{src:'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/videos/mp4/%E9%87%91%E5%BA%B8%E7%94%9F%E5%B9%B3.webm',type:'video/webm'},{src:'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/videos/mp4/%E9%87%91%E5%BA%B8%E7%94%9F%E5%B9%B3.mp4',type:'video/mp4'}]"
          src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/videos/%E9%87%91%E5%BA%B8%E7%94%9F%E5%B9%B3.jpg"
          @open-vedio="openVedio"
        />
        <carousel-img
          :position="position1"
          :vedios="[{src:'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/videos/mp4/%E9%87%91%E5%BA%B8%E8%AF%AD%E5%BD%95.webm',type:'video/webm'},{src:'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/videos/mp4/%E9%87%91%E5%BA%B8%E8%AF%AD%E5%BD%95.mp4',type:'video/mp4'}]"
          src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/videos/%E9%87%91%E5%BA%B8%E8%AF%AD%E5%BD%95.jpg"
          @open-vedio="openVedio"
        />
        <carousel-img
          :position="position2"
          :vedios="[{src:'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/videos/mp4/%E6%B1%9F%E6%B9%96%E4%BE%A0%E9%AA%A8.webm',type:'video/webm'},{src:'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/videos/mp4/%E6%B1%9F%E6%B9%96%E4%BE%A0%E9%AA%A8.mp4',type:'video/mp4'}]"
          src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/videos/%E6%B1%9F%E6%B9%96%E4%BE%A0%E9%AA%A8%E6%9F%94%E6%83%85.jpg"
          @open-vedio="openVedio"
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
        @click="changePosition(1)"
      >
        <carousel-pointer :active="position===1" />
      </div>
      <div
        class="point"
        @click="changePosition(0)"
      >
        <carousel-pointer :active="position===0" />
      </div>
      <div
        class="point"
        @click="changePosition(2)"
      >
        <carousel-pointer :active="position===2" />
      </div>

    </div>
    <vedio-modal
      :vedios="mediaList"
      :show="showModal"
      @close="closeVedio"
    />
  </div>
</template>

<script>
import CarouselArrow from './CarouselArrow'
import CarouselPointer from './CarouselPointer'
import CarouselImg from './CarouselImg'
import VedioModal from './VedioModal'

export default {
  components: { CarouselImg, CarouselPointer, CarouselArrow, VedioModal },
  data() {
    return {
      position: 0,
      showModal: false,
      mediaList: []
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
    openVedio(list) {
      this.mediaList = list
      this.showModal = true
    },
    closeVedio() {
      this.showModal = false
    },
    changePosition(position) {
      this.position = position
    },
    onClickLeft() {
      if (this.position === 2) {
        this.position = 0
      } else {
        this.position = this.position + 1
      }
    },
    onClickRight() {
      if (this.position === 0) {
        this.position = 2
      } else {
        this.position = this.position - 1
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
