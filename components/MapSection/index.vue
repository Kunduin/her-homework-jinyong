<template>
  <div class="map-container">
    <div
      v-for="point in currentPoints"
      :key="point.left"
      :style="{'left':point.left,'top':point.top}"
      class="map-points">
      <FadeBackground
        :src="point.x?
          'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagemap1/%E4%BA%8B%E4%BB%B6.png'
        :'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagemap1/%E9%97%A8%E6%B4%BE.png'"
        style="width: 30px"/>
    </div>
    <FadeBackground 
      style="width: 1300px"
      src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagemap1/%E5%9C%B0%E5%9B%BE%E8%83%8C%E6%99%AF.jpg"/>
    <map-nav 
      :config="mapConfig" 
      @select-id="selectMapId"/>
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
      mapConfig: mapConfig(),
      currentPoints: mapConfig()[0].point
    }
  },
  methods: {
    selectMapId(id) {
      this.currentPoints = mapConfig().find(map => map.id === id).point
    }
  }
}
</script>

<style lang="scss" scoped>
.map-container {
  position: relative;
  .map-points {
    position: absolute;
    z-index: 5;
  }
}
</style>
