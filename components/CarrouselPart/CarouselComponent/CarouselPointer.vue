<template>
  <div>
    <fade-background
      v-show="active"
      class="point"
      src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/carrousel/point-active.png"
    />
    <fade-background
      v-show="!active"
      class="point"
      src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/carrousel/target-normal.png"
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
    active: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.point {
  height: 15px;
  margin: 10px 20px;
  transition: transform 0.2s;
}

.point:hover {
  transform: scale(1.3);
}
</style>
