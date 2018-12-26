<template>
  <div class="img-cover">
    <div class="center-component">
      <div class="center-component__img">
        <fade-background
          :src="descSrc"
          class="center-component_img1"
          alt=""
        />
        <fade-background
          :src="buttonSrc"
          class="center-component_img2"
          alt=""
        />
      </div>
    </div>
    <fade-background
      :src="backgroundSrc"
      class="background-img"
    />
  </div>
</template>


<script>
import FadeBackground from '~/components/FadeBackground/index.vue'

export default {
  components: {
    FadeBackground
  },
  props: {
    backgroundSrc: {
      default: '',
      type: String
    },
    buttonSrc: {
      default: '',
      type: String
    },
    descSrc: {
      default: '',
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
$page-section-height: 60vh;
.background-img {
  object-fit: cover;
  height: $page-section-height;
  width: 100%;
}
.center-component {
  position: absolute;
  width: 100%;
  height: $page-section-height;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  transition: transform 0.4s, background-color 0.4s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
  }

  .center-component__img {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    img {
      display: block;
    }
    .center-component_img1 {
      height: 30px;
      margin-bottom: 50px;
    }
    .center-component_img2 {
      height: 50px;
    }
  }
}

.img-cover {
  overflow: hidden;
  position: relative;
  height: $page-section-height;
  margin-bottom: 20vh;
}
</style>
