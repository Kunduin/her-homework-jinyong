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
        {{ extra }}
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
    }
  }
}
</style>
