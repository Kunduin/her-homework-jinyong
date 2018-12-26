<template>
  <div class="map-section">
    <div class="map-title">
      <fade-background
        style="height: 50px"
        src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagemap1/%E6%A0%87%E9%A2%98.png"
      />
    </div>
    <MapSection />
  </div>
</template>

<script>
import MapSection from '~/components/MapSection/index.vue'
import FadeBackground from '~/components/FadeBackground/index.vue'

export default {
  components: {
    MapSection,
    FadeBackground
  }
}
</script>


<style lang="scss" scoped>
.map-section {
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;

  .map-title {
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: center;
    top: 120px;
  }
}
</style>
