<template>
  <div class="img-cover">
    <div class="center-component">
      <div class="center-component__img">
        <img
          class="center-component_img1"
          src="
https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/mainpage/%E2%80%9C%E5%8F%AA%E8%A6%81%E6%9C%89%E4%BA%BA%E7%9A%84%E5%9C%B0%E6%96%B9%E5%B0%B1%E6%9C%89%E6%81%A9%E6%80%A8%2C%E6%9C%89%E6%81%A9%E6%80%A8%E5%B0%B1%E4%BC%9A%E6%9C%89%E6%B1%9F%E6%B9%96%2C%E4%BA%BA%E5%B0%B1%E6%98%AF%E6%B1%9F%E6%B9%96%E3%80%82%E2%80%9D.png?x-oss-process=style/background" 
          alt="">
        <img
          class="center-component_img2"
          src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/mainpage/%E2%80%94%E2%80%94%E4%BB%BB%E6%88%91%E8%A1%8C%E3%80%8A%E7%AC%91%E5%82%B2%E6%B1%9F%E6%B9%96%E3%80%8B.png?x-oss-process=style/background"
          alt="">
      </div>
    </div>
    <img 
      class="background-img" 
      src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/mainpage/main.png?x-oss-process=style/background">
  </div>
</template>

<style lang="scss">
.background-img {
  object-fit: cover;
  height: 100vh;
  width: 100%;
}
.center-component {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.28);
  align-items: center;
  .center-component__img {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      display: block;
    }
    .center-component_img1 {
      height: 65px;
      padding-bottom: 30px;
    }
    .center-component_img2 {
      height: 35px;
    }
  }
}
.img-cover {
  height: 100vh;
  position: relative;
}
</style>
