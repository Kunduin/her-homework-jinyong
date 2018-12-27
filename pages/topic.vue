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
      <nuxt-child :page="page" />
    </div>

    <div class="bottom-nav">
      <div class="bottom-container">
        <div
          :class="page===1?'bottom-active':''"
          @click="setPage(1)"
        >1</div>
        <div
          :class="page===2?'bottom-active':''"
          @click="setPage(2)"
        >2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
      <fade-background
        style="height:25.5px;visibility:hidden"
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
      flowerState: 'NORMAL',
      page: 1
    }
  },
  watch: {
    $route(to, from) {
      this.page = 1
    }
  },
  methods: {
    setPage(page) {
      this.page = page
    },
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
    margin-top: 30px;
    margin-bottom: 50px;
    position: relative;

    .bottom-container {
      position: absolute;
      left: 50%;
      width: 232px;
      top: 0;
      bottom: 0;
      transform: translateX(-50%);
      font-size: 14px;
      justify-content: space-between;

      display: flex;

      div {
        width: 30px;
        color: rgb(206, 175, 110);
        border: 1px solid rgb(206, 175, 110);
        height: 99%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }

      .bottom-active {
        background: rgb(206, 175, 110);
        color: black;
      }
    }
  }
}
</style>
