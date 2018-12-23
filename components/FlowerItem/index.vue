<template>
  <div style="display: flex">
    <FadeBackground
      :src="button"
      class="image"/>
    <img
      v-show="active"
      :src="desc"
      alt=""
      class="image">
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
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  height: 300px;
  margin: 5px;
}
</style>
