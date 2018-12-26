<template>
  <div>
    <nuxt-link to="/map">
      <img-section
        background-src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/page3-4/page3-1.jpg"
        desc-src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/page3-4/desc1.png"
        button-src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/page3-4/button-1.png"
      />
    </nuxt-link>
    <nuxt-link to="/flower">
      <img-section
        background-src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/page3-4/page3-2.jpg"
        desc-src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/page3-4/desc2.png"
        button-src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/page3-4/button-2.png"
      />
    </nuxt-link>
    <nuxt-link to="/topic">
      <img-section
        background-src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/page3-4/page4-1.jpg"
        desc-src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/page3-4/desc3.png"
        button-src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/page3-4/button-3.png"
      />
    </nuxt-link>
  </div>
</template>


<script>
import ImgSection from '~/components/ThirdPagePart/ImgSection/index.vue'

export default {
  components: {
    ImgSection
  }
}
</script>

<style scoped lang="scss">
</style>
