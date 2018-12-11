<template>
  <img
    :style="{'opacity':opacity}"
    :src="src"
    class="fade-background"
    alt="" 
    @load="onLoad">
</template>
<script>
export default {
  props: {
    src: {
      default: '',
      type: String
    }
  },
  data() {
    return {
      opacity: 0
    }
  },
  methods: {
    onLoad() {
      console.log('meme')
      this.opacity = 1
    }
  }
}
</script>
<style>
.fade-background {
  transition: opacity 1s;
}
</style>
