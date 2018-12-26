<template>
  <div>
    <fade-background
      :class="{'arrow-left':left}"
      class="arrow"
      src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/carrousel/targetRight.png"
    />
  </div>
</template>

<script>
import FadeBackground from '~/components/FadeBackground/index.vue'

export default {
  components: {
    FadeBackground
  },

  props: {
    left: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.arrow-left {
  transform: rotate(180deg);
}
.arrow {
  height: 50px;
  transition: transform 0.2s;
}

.arrow:hover {
  transform: scale(1.1) translateX(3px);
}

.arrow-left:hover {
  transform: rotate(180deg) scale(1.1) translateX(3px);
}
</style>
