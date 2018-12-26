<template>
  <div class="nav">
    <div class="nav-part">

      <nuxt-link to="/">
        <fade-background
          :src="activeIndex===0?'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/nav/%E8%AF%9D%E9%A2%98%20active.png':'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/nav/%E8%AF%9D%E9%A2%98.png'"
          style="height:100%;width:123.633px"
        />
      </nuxt-link>
      <nuxt-link to="/">

        <fade-background
          style="height:100%;width:123.633px"
          src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/nav/%E8%B5%84%E8%AE%AF.png"
        />
      </nuxt-link>
      <nuxt-link to="/">

        <fade-background
          style="height:100%;width:123.633px"
          src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/nav/%E7%B2%BE%E5%93%81.png"
        />
      </nuxt-link>
    </div>
    <img
      class="background"
      alt=""
      src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/nav/%E5%AF%BC%E8%88%AA%E6%A0%8F.png"
    >
  </div>
</template>

<script>
import FadeBackground from '../FadeBackground'

export default {
  components: {
    FadeBackground
  },
  props: {
    activeIndex: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: relative;
  width: 800px;
  height: 33.4167px;

  .nav-part {
    width: 500px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
  }

  .background {
    width: 800px;
  }
}
</style>
