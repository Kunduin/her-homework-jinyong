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
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/news/%E8%B5%84%E8%AE%AF1.jpg',
          title: '《新神雕侠侣》官宣遭群嘲 金庸剧到底该如何拍？',
          desc: [
            '12月3日官宣的角色海报，遭遇全网群嘲，扮演杨过和小龙女的两位新人演员的颜值不符合预期外，造型也是一言难尽。网友惊呼:被PS毁掉的小龙女。'
          ],
          extra: '参与：1090'
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/news/%E8%B5%84%E8%AE%AF2.jpg',
          title: '金庸的武侠文学从小说变成电子游戏经历了多少波折？',
          desc: [
            '《金庸群侠传》成为华人武侠游戏中的经典作品，也是华人开放世界的游戏先河。',
            '智冠以《金庸群侠传Online》在大陆打响名号，至今仍是许多大陆玩家的青春回忆。'
          ],
          extra: '参与：1090'
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/news/%E8%B5%84%E8%AE%AF3.jpg',
          title: '金庸武侠小说中人物的“姓名学”',
          desc: [
            '金庸先生的武侠著作中很多名字来源即出自《诗经》、《楚辞》、《庄子》等国学经典。',
            '有的直接隐喻历史事件，有的相合于人物的性格，有的暗示人物命运，都各具意义。'
          ],
          extra: '参与：9921'
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/news/%E8%B5%84%E8%AE%AF4.jpg',
          title: '金庸爱茶，他笔下的这些人物也都拥有茶之属性',
          desc: [
            '金庸爱茶，最爱龙井，曾在杭州的中国茶叶博物馆内的中国国际茶文化研究会品尝新茗时题词“水温雅，人温雅，古今幽情一杯茶。”'
          ],
          extra: '参与：8453'
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/news/%E8%B5%84%E8%AE%AF5.jpg',
          title: '金庸小说里的绝顶美食',
          desc: [
            '《天龙八部》中的尖端高富帅段誉初到江南，却对姑苏美食一尝倾慕：茭白虾仁，龙井茶无不鲜美爽口，鱼虾肉食之中混以花瓣鲜果，色彩既美，自别有天然清香。'
          ],
          extra: '参与：8453'
        }
      ]
    }
  }
}
</script>
