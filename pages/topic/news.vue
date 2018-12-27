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
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/news/%E8%B5%84%E8%AE%AF1.jpg',
          title: '《新神雕侠侣》官宣遭群嘲 金庸剧到底该如何拍？',
          desc: [
            '12月3日官宣的角色海报，遭遇全网群嘲，扮演杨过和小龙女的两位新人演员的颜值不符合预期外，造型也是一言难尽。网友惊呼:被PS毁掉的小龙女。'
          ],
          bubble: 1912
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/news/%E8%B5%84%E8%AE%AF2.jpg',
          title: '金庸的武侠文学从小说变成电子游戏经历了多少波折？',
          desc: [
            '《金庸群侠传》成为华人武侠游戏中的经典作品，也是华人开放世界的游戏先河。',
            '智冠以《金庸群侠传Online》在大陆打响名号，至今仍是许多大陆玩家的青春回忆。'
          ],
          bubble: 1543
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/news/%E8%B5%84%E8%AE%AF3.jpg',
          title: '金庸武侠小说中人物的“姓名学”',
          desc: [
            '金庸先生的武侠著作中很多名字来源即出自《诗经》、《楚辞》、《庄子》等国学经典。',
            '有的直接隐喻历史事件，有的相合于人物的性格，有的暗示人物命运，都各具意义。'
          ],
          bubble: 1214
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/news/%E8%B5%84%E8%AE%AF4.jpg',
          title: '金庸爱茶，他笔下的这些人物也都拥有茶之属性',
          desc: [
            '金庸爱茶，最爱龙井，曾在杭州的中国茶叶博物馆内的中国国际茶文化研究会品尝新茗时题词“水温雅，人温雅，古今幽情一杯茶。”'
          ],
          bubble: 1212
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/news/%E8%B5%84%E8%AE%AF5.jpg',
          title: '金庸小说里的绝顶美食',
          desc: [
            '《天龙八部》中的尖端高富帅段誉初到江南，却对姑苏美食一尝倾慕：茭白虾仁，龙井茶无不鲜美爽口，鱼虾肉食之中混以花瓣鲜果，色彩既美，自别有天然清香。'
          ],
          bubble: 1121
        }
      ]
    case 2:
      return [
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%811.jpg',
          title: '数说金庸｜金庸笔下诞生的1427个人物',
          desc: [
            '怀念经典是人生一大乐事，特别是酣畅淋漓的武侠经典。金庸武侠小说之所以成为经典，不仅归功于其曲折动人的故事情节，而且有赖于书中刻画的众多个性鲜明突出的人物'
          ],
          bubble: 1900
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%812.jpg',
          title: '金庸年表',
          desc: [
            '“凡是有中国人的地方，就有金庸的武侠小说。”这样的评价毫不夸张。金庸先生用一支笔，在很多人心里，种下了一个武侠梦。'
          ],
          bubble: 1666
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%813.jpg',
          title: '金庸武侠年表 终于把每部人物关系串起来了',
          desc: [
            '金庸的作品假设发生在我们的现实时空之中，那么发生在何时代相对合理？'
          ],
          bubble: 1989
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%814.jpg',
          title: '金庸小说人物关系谱',
          desc: ['金庸小说里这些剪不断理还乱的人物关系你理清了吗？'],
          bubble: 723
        },
        {
          img:
            'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagetopic/selected/%E7%B2%BE%E5%93%815.jpg',
          title: '快意恩仇：重温金庸小说经典语录',
          desc: [
            '金庸以15部小说构建的武侠世界，影响了几代中国青年。而在金庸的武侠小说里不乏经典语句，用以抒发主人公的快意恩仇。句句精辟、字字千金，长久萦绕在读者心中。'
          ],
          bubble: 7666
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
