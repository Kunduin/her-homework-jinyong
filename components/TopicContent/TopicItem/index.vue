<template>
  <div class="container">
    <div class="left">
      <fade-background :src="img" />
    </div>
    <div class="right">
      <div class="title">
        {{ title }}
      </div>
      <div class="desc">
        <p
          v-for="(item, index) in desc"
          :key="index"
        >
          {{ item }}
        </p>
      </div>
      <div class="extra">
        <div
          v-if="extra&&extra!==''"
          class="extra-item"
        >{{ extra }}</div>
        <div
          v-if="bubble&&bubble!==0"
          class="extra-item"
        >
          <img
            src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/bubble.png"
            alt=""
            class="smail-image"
          >{{ bubble }}
        </div>
        <div
          v-if="heart&&heart!==0"
          class="extra-item"
        >
          <img
            src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/heart.png"
            alt=""
            class="smail-image"
          >{{ heart }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FadeBackground from '../../FadeBackground'
export default {
  components: {
    FadeBackground
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: Array,
      default: () => []
    },
    extra: {
      type: String,
      default: ''
    },
    bubble: {
      type: Number,
      default: 0
    },
    heart: {
      type: Number,
      default: 0
    },
    img: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: stretch;

  .left {
    img {
      width: 273.5px;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    padding: 3px 0 3px 15px;

    .title {
      font-size: 18px;
      padding-bottom: 10px;
    }

    .desc {
      font-size: 13px;
      line-height: 2em;
      color: #adadad;
      flex-grow: 1;
    }

    .extra {
      font-size: 12px;
      color: #b9b9b9;
      display: flex;

      .smail-image {
        display: inline-block;
        height: 10px;
        margin: 0 3px;
      }

      .extra-item {
        padding-right: 14px;
      }
    }
  }
}
</style>
