<template>
  <transition
    v-if="show"
    name="modal"
  >
    <div
      class="modal-mask"
      @click="$emit('close')"
    >
      <div class="modal-wrapper">
        <div
          class="modal-container"
          @click.stop
        >
          <video
            controls
            width="800px"
            style="display:block"
          >
            <source
              v-for="(vedio,index) in vedios"
              :key="index"
              :src="vedio.src"
              :type="vedio.type"
            >
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    vedios: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    show: function(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
      return newVal
    }
  },
  destroyed() {
    document.body.style.overflow = 'auto'
  }
}
</script>
<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 19998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.678);
  transition: opacity 0.3s ease;
  overflow-y: auto;
}
.modal-wrapper {
  padding: 40px;
  display: flex;
  justify-content: center;
}
.modal-container {
  position: relative;
  overflow: hidden;
  /*border-radius: 5px;*/
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  border: 2px solid #ceaf6e;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
