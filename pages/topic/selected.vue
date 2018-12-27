<template>
  <div style="color:white">
    <topic-content :list="list" />
  </div>
</template>

<script>
import TopicContent from '~/components/TopicContent/index.vue'

const getPage = id => {
  switch (id) {
    case 1:
      return [
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%811.jpg',
          title: '【文章】从令狐冲回到郭靖，才是即将老去的我们',
          desc: [
            '人们说这是一个复杂的世界。可是郭靖活得很简单。对于自己坚持什么，反对什么，对什么无所谓，他心里都清清楚楚。”'
          ],
          bubble: 1700,
          heart: 901
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%812.jpg',
          title: '【图片】用金庸群侠做的扑克牌及人物形象分析？',
          desc: [
            '独孤求败，武林前辈，往事已久，於小说中未出场过，曾在《神雕侠侣》《笑傲江湖》《鹿鼎记》人物的口中有所提及与回忆到。'
          ],
          bubble: 1030,
          heart: 812
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%813.jpg',
          title: '【音频】射雕英雄传-怅醉山河',
          desc: ['一生射雕，怅醉山河。', '半世荏苒，唯敬金庸。'],
          bubble: 900,
          heart: 820
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%814.jpg',
          title: '【音频】笑傲江湖-广陵止息',
          desc: [
            '广陵神曲虽成绝响，笑傲江湖万世长存!',
            '灵感来自中国十大古典名曲之一《广陵散》。'
          ],
          bubble: 712,
          heart: 524
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%815.jpg',
          title: '【图片】绍敏郡主插画集',
          desc: [
            '「夜试倚天宝剑，洵神物也，杂录《说剑》诗以赞之。汴梁赵敏。」',
            '玲珑心窍最峥嵘，六派成擒用伏戎。'
          ],
          bubble: 701,
          heart: 456
        }
      ]
    case 2:
      return [
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%816.png',
          title: '【资讯】金庸 传奇香港和辽阔江湖',
          desc: [
            '这么多年对金庸的报道早已饱满，到了现在，“可知的都已知，未知的或许就是不愿说的隐私，那就让它一直不可知下去吧”。'
          ],
          bubble: 700,
          heart: 800
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%817.png',
          title: '【文章】我们为什么要缅怀金庸先生？ ',
          desc: [
            '从金庸开始，武侠这种文学种类，同样也能表现出一个民族的文化传统与精神气质。他用文字唤起了人们对于侠义精神的再次思考。'
          ],
          bubble: 500,
          heart: 886
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%818.png',
          title: '【图片】倚天屠龙记人物手绘',
          desc: [
            '武林至尊，宝刀屠龙，号令天下，莫敢不从，倚天不出，谁与争锋？'
          ],
          bubble: 750,
          heart: 467
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%819.png',
          title: '【音频】《风骨傲然 — 金庸群像》',
          desc: [
            '豪情似天纵 身死也相逢 对饮烈酒几盅',
            '悲欢与共 生死与同 为情义效忠'
          ],
          bubble: 723,
          heart: 994
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%8110.png',
          title: '【音频】《金庸红颜赋-解红尘》',
          desc: [
            '浅笑兮 竟无双颜色 皓齿明眸念情真 掠眼过 平生肩负沉 晓风残月堪离分'
          ],
          bubble: 380,
          heart: 632
        }
      ]
  }
}

export default {
  components: {
    TopicContent
  },
  props: {
    page: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      list: getPage(1)
    }
  },
  watch: {
    page(value) {
      this.list = getPage(value)
    }
  }
}
</script>
