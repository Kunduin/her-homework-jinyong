<template>
  <div style="color:white">
    <topic-content :list="list" />
  </div>
</template>

<script>
import TopicContent from '~/components/TopicContent/index.vue'
export default {
  components: {
    TopicContent
  },
  data() {
    return {
      list: [
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/topics/%E8%AF%9D%E9%A2%981.jpg',
          title: '金庸的武侠世界里最让你感到意难平的情节？',
          desc: [''],
          extra: '1000'
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/topics/%E8%AF%9D%E9%A2%982.jpg',
          title: '吐槽一下你喜欢的原著角色',
          desc: [
            '阿朱那么聪明为什么不跟乔大爷说清楚',
            '赵敏哪都好，就是眼光不好'
          ],
          extra: '1000'
        }
      ]
    }
  }
}
</script>
