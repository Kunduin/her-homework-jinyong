<template>
  <div>
    <div class="main-header">
      <nuxt-link to="/">
        <img
          class="main-header__left"
          alt
          src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/basic/%E6%A0%87%E9%A2%98.png?x-oss-process=style/background"
        >
      </nuxt-link>
      <div class="main-header__right">
        <div id="menuToggle">
          <input
            v-model="checked"
            type="checkbox"
          >
          <span />
          <span />
          <div id="menu">
            <div class="menu-nav">
              <nuxt-link to="/">
                <div>主页</div>
              </nuxt-link>
              <nuxt-link to="/map">
                <div>武侠版图</div>
              </nuxt-link>
              <nuxt-link to="/flower">
                <div>献宝留言</div>
              </nuxt-link>
              <nuxt-link to="/topic">
                <div>话题讨论</div>
              </nuxt-link>
            </div>
            <div class="menu-des">
              <div>扫一扫，</div>
              <div>开启属于你的武侠人生</div>
              <img
                style="width:90px"
                alt
                src="https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/basic/%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="checked"
      class="mask"
      @click="close()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    }
  },

  watch: {
    $route(to, from) {
      this.close()
    }
  },
  methods: {
    close() {
      this.checked = false
    }
  }
}
</script>


<style lang="scss" scoped>
.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: background-color 0.4s;
  z-index: 25;
}

.main-header {
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 30;

  .main-header__left {
    margin: 20px 60px;
    height: 35px;
  }
  .main-header__right {
    margin: 20px 60px;
    height: 12px;
  }
}

.menu-des {
  color: #ceaf6e;
  font-size: 13px;
  padding: 0 30px 60px 60px;

  div {
    margin-bottom: 5px;
  }
}

#menuToggle {
  display: block;
  position: relative;

  z-index: 1;

  -webkit-user-select: none;
  user-select: none;

  input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 10000; /* and place it over the hamburger */

    -webkit-touch-callout: none;
  }
  span {
    display: block;
    width: 40px;
    height: 2px;
    margin-bottom: 6.5px;
    position: relative;

    background: #cdcdcd;
    border-radius: 3px;

    z-index: 9999;

    transform-origin: 14.58px 4.25px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  span:first-child {
    transform-origin: 0% 0%;
  }
}

/*
 * Just a quick hamburger
 */
#menuToggle span:nth-last-child(2) {
  transform-origin: 14.58px -0.25px;
}

/*
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg);
  background: #ceaf6e;
}

/*
 * But let's hide the middle one.
 */
/*#menuToggle input:checked ~ span:nth-last-child(2) {*/
/*opacity: 0;*/
/*transform: rotate(0deg) scale(0.2, 0.2);*/
/*}*/

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu {
  position: absolute;
  width: 250px;
  z-index: 1000;
  margin: -50px 0 0 -50px;
  // padding: 50px;

  height: 100.5vh;
  background: #1d1d1d;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */

  border-left: 2px solid #ceaf6e;
  transform-origin: 0% 0%;
  transform: translate(100%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  left: -100px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 70px;
  a {
    text-decoration: none;
    color: #ceaf6e;
    position: relative;
    padding: 5px 60px;
    display: block;
    transition: color 0.3s ease;
    margin: 15px 0;
  }

  a::after,
  a::before {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    left: 0;
    background-color: #ceaf6e;
    transform-origin: bottom center;
    transition: transform 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
  a::before {
    top: 0;
  }

  a::after {
    bottom: 0;
  }

  a:hover::after,
  a:hover::before {
    transform: scaleX(1);
    transform-origin: bottom center;
  }
}

#menu li {
  padding: 10px 0;
  font-size: 22px;
}

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked ~ #menu {
  transform: none;
}
</style>
