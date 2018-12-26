<template xmlns:v-swiper="https://www.w3.org/1999/xhtml">
  <div class="map-nav">
    <div style="position: relative">
      <div
        :class="{'is-active':!active}"
        class="map-nav__pre"
      >
        <div @click="onShow">
          <FadeBackground
            style="width: 300px;cursor: pointer"
            src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagemap/choose-smail.png"
          />
        </div>
      </div>
      <div
        :class="{'is-active':active}"
        class="map-nav__board"
      >
        <div
          class="map-nav__top-pointer"
          @click="onHide"
        >
          <FadeBackground
            style="width: 40px;cursor: pointer"
            src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagemap/%E7%AE%AD%E5%A4%B4-top.png"
          />
        </div>

        <div class="board-section">
          <nav-arror
            class="swiper__prev"
            left
          />
          <div
            v-swiper:mySwiper="swiperOption"
            class="images-section"
          >
            <div class="swiper-wrapper swiper-item">
              <div
                v-for="banner in config"
                :key="banner.id"
                class="swiper-slide"
                style="cursor: pointer;z-index: 10"
                @click="$emit('select-id',banner.id)"
              >
                <FadeBackground :src="banner.book_url" />
              </div>
            </div>
          </div>
          <nav-arror class="swiper__next" />
        </div>

        <FadeBackground
          style="width: 700px"
          src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/subpagemap/%E6%A1%86.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FadeBackground from '~/components/FadeBackground/index.vue'
import NavArror from './NavArror'
import mapConfig from '../mapConfig'

export default {
  components: {
    NavArror,
    FadeBackground
  },
  props: {
    config: {
      type: Array,
      default: mapConfig()
    }
  },
  data() {
    return {
      active: false,
      swiperOption: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        navigation: {
          nextEl: '.swiper__next',
          prevEl: '.swiper__prev'
        }
      }
    }
  },
  methods: {
    onShow() {
      this.active = true
    },
    onHide() {
      this.active = false
    }
  }
}
</script>


<style lang="scss" scoped>
.map-nav {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  margin-bottom: -3px;
  bottom: 0;
  .is-active {
    transform: translateY(0);
  }
  &__pre {
    transition: all 0.5s cubic-bezier(0.77, 0, 0.18, 1);
    transform: translateY(100%);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
  }
  &__board {
    position: relative;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.18, 1);
    transform: translateY(100%);
  }
  &__top-pointer {
    position: absolute;
    z-index: 5;
    top: 13px;
    left: 50%;
    transform: translateX(-50%);
  }

  .board-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    left: 12px;
    position: absolute;
    right: 12px;
    top: 0;
    bottom: 0;

    .images-section {
      width: 600px;
      position: relative;
      padding-top: 30px;
      img {
        width: 95px;
      }
    }
    .swiper-item {
      padding: 0 10px;
    }
  }
}
</style>
