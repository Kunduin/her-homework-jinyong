<template>
  <div class="topic-section">
    <div
      class="topic-title"
      style="padding-top: 120px;"
    >
      <fade-background
        style="height: 50px"
        src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/nav/%E6%A0%87%E9%A2%98.png"
      />
    </div>
    <div
      class="topic-title"
      style="padding-top: 30px"
    >
      <topic-nav />
    </div>
    <div class="topic-content">
      <nuxt-child />
    </div>

    <div class="bottom-nav">
      <fade-background
        style="height: 25.5px;"
        src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/nav/bottomnav.png"
      />
    </div>
  </div>
</template>

<script>
import FadeBackground from '~/components/FadeBackground/index.vue'
import FlowerItem from '~/components/FlowerItem/index.vue'
import TopicNav from '~/components/TopicNav/index.vue'

import { getRowOne, getRowTwo } from '~/components/FlowerItem/flowerConfig'

export default {
  components: {
    FadeBackground,
    FlowerItem,
    TopicNav
  },
  data() {
    return {
      rowOne: getRowOne(),
      rowOneActive: 1,
      rowTwo: getRowTwo(),
      rowTwoActive: 6,
      flowerState: 'NORMAL'
    }
  },
  methods: {
    changeFlowerState(state) {
      this.flowerState = state
    },
    onRowOneClicked(id) {
      this.rowOneActive = id
    },
    onRowTwoClicked(id) {
      this.rowTwoActive = id
    }
  }
}
</script>

<style lang="scss" scoped>
.topic-section {
  overflow: hidden;
  position: relative;
  margin-bottom: 40px;

  .topic-title {
    z-index: 2;
    display: flex;
    justify-content: center;
  }

  .topic-images {
    display: flex;
    justify-content: center;
    padding-top: 40px;
  }

  .topic-content {
    display: flex;
    justify-content: center;
    padding-top: 10px;
  }

  .bottom-nav {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 50px;
  }
}
</style>
