<template>
  <div style="display: flex">
    <FadeBackground
      :src="button"
      class="image"
    />
    <div
      v-show="active"
      class="expand"
      @click="$emit('select',flowerId)"
    >
      <fade-background
        v-show="selected"
        class="selected"
        src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpageflower/%E7%BA%A2%E5%9C%88.png"
      />
      <img
        :src="desc"
        alt=""
        class="image"
      >
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
    active: {
      type: Boolean,
      default: false
    },
    button: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    selected: {
      type: Boolean,
      default: false
    },
    flowerId: {
      type: Number | String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  height: 300px;
  margin: 5px;
}

.selected {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 60px;
}

.expand {
  position: relative;
}
</style>
