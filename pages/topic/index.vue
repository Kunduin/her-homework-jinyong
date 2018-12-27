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
          desc: [
            '“尹志平”“张三丰十三岁遇到十六岁的郭襄，把她送他的铁罗汉珍藏了一百年”',
            '“乔峰自尽”“周芷若：若我问心有愧呢？”'
          ],
          extra: '参与：1090'
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/topics/%E8%AF%9D%E9%A2%982.jpg',
          title: '吐槽一下你喜欢的原著角色',
          desc: [
            '阿朱那么聪明为什么不跟乔大爷说清楚',
            '赵敏哪都好，就是眼光不好'
          ],
          extra: '参与：1090'
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/topics/%E8%AF%9D%E9%A2%983.jpg',
          title: '安利你去过的金庸武侠文化景点',
          desc: [
            '崆峒山，看到了金庸先生的题字，激动了半天。',
            '重阳真人墓，当年墓地被红卫兵给挖开了，毁坏了，这是重新修缮的'
          ],
          extra: '参与：9921'
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/topics/%E8%AF%9D%E9%A2%984.jpg',
          title: '你觉得金书中最动听的一句情话是？',
          desc: [
            '阿朱就是阿朱，四海列国，千秋万载，就只一个阿朱',
            '我偏要勉强'
          ],
          extra: '参与：8453'
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/topics/%E8%AF%9D%E9%A2%985.jpg',
          title: '你在原著角色的哪个瞬间爱上了TA?',
          desc: [
            '赵敏 玉碎昆冈 人鬼同途 天地同寿的时候。',
            '郭襄骑着毛驴漫游中原。'
          ],
          extra: '参与：8453'
        }
      ]
    }
  }
}
</script>
