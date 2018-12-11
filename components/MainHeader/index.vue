<template>
  <div class="main-header">
    <img
      class="main-header__left"
      alt=""
      src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/basic/%E6%A0%87%E9%A2%98.png?x-oss-process=style/background">
    <img
      class="main-header__right"
      alt=""
      src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/basic/%E6%B1%89%E5%A0%A1%E6%8C%89%E9%92%AE.png?x-oss-process=style/background">
  </div>
</template>

<style lang="scss">
.main-header {
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  .main-header__left {
    margin: 20px 60px;
    height: 35px;
  }
  .main-header__right {
    margin: 20px 60px;
    height: 12px;
  }
}
</style>
