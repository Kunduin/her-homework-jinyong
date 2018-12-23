<template>
  <div>
    <FadeBackground 
      style="width: 1300px"
      src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagemap1/%E5%9C%B0%E5%9B%BE%E8%83%8C%E6%99%AF.jpg"/>
    <map-nav :config="mapConfig"/>
  </div>
</template>

<script>
import FadeBackground from '~/components/FadeBackground/index.vue'
import MapNav from './MapNav'
import mapConfig from './mapConfig'

export default {
  components: {
    FadeBackground,
    MapNav
  },
  data() {
    return {
      mapConfig: mapConfig()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
