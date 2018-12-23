<template>
  <div>
    <fade-background
      :class="{'arrow-left':left}"
      class="arrow"
      src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagemap/%E7%AE%AD%E5%A4%B4%E5%8F%B3.png"/>
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
  height: 25px;
}
</style>
