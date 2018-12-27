<template>
  <div class="flower-section">
    <div
      class="flower-title"
      style="padding-top: 120px;"
    >
      <fade-background
        style="height: 50px"
        src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpageflower/%E6%A0%87%E9%A2%98.png"
      />
    </div>
    <div
      class="flower-title"
      style="padding-top: 30px"
    >
      <fade-background
        style="height: 50px"
        src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpageflower/%E7%8C%AE%E5%AE%9D%E7%9A%84%E5%AD%97.png"
      />
    </div>
    <div class="flower-images">
      <div
        v-for="item in rowOne"
        :key="item.id"
        style="cursor: pointer"
        @click="onRowOneClicked(item.id)"
      >
        <flower-item
          :active="item.id===rowOneActive"
          :selected="item.id===selectedIndex"
          :button="item.button"
          :desc="item.desc"
          :flower-id="item.id"
          @select="changeSelectedIndex"
        />
      </div>
    </div>

    <div class="flower-images">
      <div
        v-for="item in rowTwo"
        :key="item.id"
        style="cursor: pointer"
        @click="onRowTwoClicked(item.id)"
      >
        <flower-item
          :active="item.id===rowTwoActive"
          :selected="item.id===selectedIndex"
          :flower-id="item.id"
          :button="item.button"
          :desc="item.desc"
          @select="changeSelectedIndex"
        />
      </div>
    </div>
    <div class="flower-images">
      <div
        :class="button"
        style="transform:scale(0.5)"
        @mouseenter="changeFlowerState('bg-hover')"
        @mouseleave="changeFlowerState('bg-normal')"
        @mousedown="changeFlowerState('bg-active')"
        @mouseup="changeFlowerState('bg-success')"
      />
    </div>
  </div>
</template>

<script>
import FadeBackground from '~/components/FadeBackground/index.vue'
import FlowerItem from '~/components/FlowerItem/index.vue'
import { getRowOne, getRowTwo } from '~/components/FlowerItem/flowerConfig'

export default {
  components: {
    FadeBackground,
    FlowerItem
  },
  data() {
    return {
      rowOne: getRowOne(),
      rowOneActive: 1,
      rowTwo: getRowTwo(),
      rowTwoActive: 6,
      flowerState: 'NORMAL',
      selectedIndex: 0,
      button: 'bg-normal'
    }
  },
  methods: {
    changeSelectedIndex(index) {
      if (this.selectedIndex === index) {
        this.selectedIndex = -1
      } else {
        this.selectedIndex = index
      }
    },
    changeFlowerState(state) {
      if (this.button !== 'bg-success') {
        this.button = state
      }
    },
    onRowOneClicked(id) {
      if (this.rowOneActive !== id) {
        this.selectedIndex = -1
      }
      this.rowOneActive = id
    },
    onRowTwoClicked(id) {
      if (this.rowTwoActive !== id) {
        this.selectedIndex = -1
      }
      this.rowTwoActive = id
    }
  }
}
</script>

<style lang="scss" scoped>
.flower-section {
  overflow: hidden;
  position: relative;
  margin-bottom: 40px;

  .flower-title {
    z-index: 2;
    display: flex;
    justify-content: center;
  }

  .flower-images {
    display: flex;
    justify-content: center;
    padding-top: 40px;
  }
}

.bg-success {
  width: 250px;
  height: 100px;
  background: url('https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpageflower/css/css_sprites.png') -6px -6px;
}

.bg-normal {
  cursor: pointer;
  width: 250px;
  height: 100px;
  background: url('https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpageflower/css/css_sprites.png') -6px -118px;
}

.bg-active {
  cursor: pointer;
  width: 250px;
  height: 100px;
  background: url('https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpageflower/css/css_sprites.png') -268px -6px;
}

.bg-hover {
  cursor: pointer;
  width: 250px;
  height: 100px;
  background: url('https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpageflower/css/css_sprites.png') -268px -118px;
}
</style>
