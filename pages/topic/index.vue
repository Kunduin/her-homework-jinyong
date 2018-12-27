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
    case 2:
      return [
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/topics/%E8%AF%9D%E9%A2%986.png',
          title: '你是怎么发现身边人也是金庸迷的？',
          desc: [
            '“心大，还没发现身边有金庸迷。”',
            '“我刚认识女朋友时，验证码是田伯光，结果她同意了，然后给我备注淫贼。”'
          ],
          extra: '参与：1090'
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/topics/%E8%AF%9D%E9%A2%987.png',
          title: '你最想拜谁为师？',
          desc: ['“段正淳”', '“黄药师，学学五行术数四门八卦琴棋书画啥的”'],
          extra: ' 参与：5221'
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/topics/%E8%AF%9D%E9%A2%988.png',
          title: '你喜欢的人物四岁时在做什么？',
          desc: ['郭靖四岁那年在内蒙古', '黄蓉四岁那年在桃花岛想妈妈'],
          extra: '参与：9921'
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/topics/%E8%AF%9D%E9%A2%989.png',
          title: '谁的登场最能惊艳到你？',
          desc: [
            '乔峰登场时无论是和段誉斗酒、还是在杏子林折服风波恶、擒拿全冠清、平定叛乱都充分显示了他的英雄气概，可谓是惊艳亮相。'
          ],
          extra: ' 参与：7346'
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/topics/%E8%AF%9D%E9%A2%9810.png',
          title: '金庸原著中的哪个片段戳中过你的泪点？',
          desc: [
            '欧阳克道：「黄姑娘，多谢你相救。 我是活不成了，见到你出力救我，我是死也欢喜。」'
          ],
          extra: '参与：8453'
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
