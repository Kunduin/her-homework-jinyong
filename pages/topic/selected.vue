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
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%811.jpg',
          title: '【文章】从令狐冲回到郭靖，才是即将老去的我们',
          desc: [
            '人们说这是一个复杂的世界。可是郭靖活得很简单。对于自己坚持什么，反对什么，对什么无所谓，他心里都清清楚楚。”'
          ],
          extra: '参与：1090'
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%812.jpg',
          title: '【图片】用金庸群侠做的扑克牌及人物形象分析？',
          desc: [
            '独孤求败，武林前辈，往事已久，於小说中未出场过，曾在《神雕侠侣》《笑傲江湖》《鹿鼎记》人物的口中有所提及与回忆到。'
          ],
          extra: '参与：1090'
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%813.jpg',
          title: '【音频】射雕英雄传-怅醉山河',
          desc: ['一生射雕，怅醉山河。', '半世荏苒，唯敬金庸。'],
          extra: '参与：9921'
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%814.jpg',
          title: '【音频】笑傲江湖-广陵止息',
          desc: [
            '广陵神曲虽成绝响，笑傲江湖万世长存!',
            '灵感来自中国十大古典名曲之一《广陵散》。'
          ],
          extra: '参与：8453'
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%815.jpg',
          title: '【图片】绍敏郡主插画集',
          desc: [
            '「夜试倚天宝剑，洵神物也，杂录《说剑》诗以赞之。汴梁赵敏。」',
            '玲珑心窍最峥嵘，六派成擒用伏戎。'
          ],
          extra: '参与：8453'
        }
      ]
    }
  }
}
</script>
