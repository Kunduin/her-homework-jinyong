<template>
  <div style="width:800px">
    <div
      v-for="(item) in list"
      :key="item.title"
      class="list-item"
    >
      <topic-item
        :title="item.title"
        :desc="item.desc"
        :extra="item.extra"
        :img="item.img"
      />
    </div>

  </div>
</template>

<script>
import TopicItem from './TopicItem'

export default {
  components: {
    TopicItem
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  padding: 12px 0;
  border-bottom: 1px solid #3e3d3d;

  &:last-child {
    border-bottom: 0;
  }
}
</style>
