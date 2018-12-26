<template>
  <div
    :class="positionAlix"
    class="carousel-container"
  >
    <div class="carousel-inner">
      <div
        class="inner-container"
        @click="openVideo"
      >
        <fade-background
          src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/carrousel/display.png"
          class="carousel-play"
        />
      </div>
      <fade-background
        :src="src"
        class="carousel-main"
      />
    </div>
  </div>
</template>

<script>
import FadeBackground from '~/components/FadeBackground/index.vue'

export default {
  components: {
    FadeBackground
  },
  props: {
    position: {
      default: 'middle',
      validator: function(value) {
        // The value must match one of these strings
        return ['middle', 'right', 'left'].indexOf(value) !== -1
      }
    },
    src: {
      default: '',
      type: String
    },
    vedios: {
      default: () => [],
      type: Array
    }
  },
  computed: {
    positionAlix() {
      return 'carousel-' + this.position
    }
  },
  methods: {
    openVideo() {
      this.position === 'middle' && this.$emit('open-vedio', this.vedios)
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-container {
  position: absolute;
  left: 50%;
  transition-duration: 500ms;
  transition: all ease 0.6s;
  transform-style: preserve-3d;

  width: 500px;
  height: 343px;
  margin-left: -250px;
}
.carousel-inner {
  position: relative;
  cursor: pointer;
  overflow: hidden;

  .inner-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: transform 0.3s, background-color 0.3s;
    &:hover {
      transform: scale(1.1);
      background-color: rgba(0, 0, 0, 0.171);
    }
  }
}
.carousel-play {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  transform: translate(-50%, -50%);
}
.carousel-main {
  width: 500px;
}
.carousel {
  &-middle {
    transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg);
    z-index: 5;
  }
  &-right {
    z-index: 2;
    transform: translate3d(370px, 0px, -540px) rotateX(0deg) rotateY(-50deg);
    opacity: 0.6;
  }
  &-left {
    z-index: 2;
    transform: translate3d(-370px, 0px, -540px) rotateX(0deg) rotateY(50deg);
    opacity: 0.6;
  }
}
</style>
