<template>
  <div 
    :class="positionAlix" 
    class="carousel-container">
    <fade-background
      :src="src"

      class="carousel-main"/>
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
    desc: {
      default: '',
      type: String
    }
  },
  computed: {
    positionAlix() {
      return 'carousel-' + this.position
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-container {
  position: absolute;
  left: 50%;
  transition-duration: 500ms;
  transition: all ease;
  transform-style: preserve-3d;

  width: 500px;
  height: 343px;
  margin-left: -250px;
}
.carousel-main {
  width: 500px;
}
.carousel {
  &-middle {
    transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg);
    z-index: 3;
  }
  &-right {
    z-index: 2;
    transform: translate3d(370px, 0px, -540px) rotateX(0deg) rotateY(-50deg);
  }
  &-left {
    z-index: 2;
    transform: translate3d(-370px, 0px, -540px) rotateX(0deg) rotateY(50deg);
  }
}
</style>
