<template>
  <transition name="fade">
    <div class="message" :class="type" v-show="show">
      <i class="icon"></i>
      <span class="text">{{text}}</span>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'message',
    props: {
      type: {
        type: String,
        default: 'info',
        validator: val => ['info', 'success', 'warning', 'error'].includes(val)
      },
      text: {
        type: String,
        default: ''
      },
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style scoped lang="scss">
  // fade动画 <transition name="fade"> </transition>
  // 下面的样式可以自己改

  $strong-text-color: #999;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .message {
    position: fixed;
    top: 40px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    min-width: 400px;
    padding: 10px 20px;
    color: $strong-text-color;
    background: #f5f5f5;
    font-size: 14px;
    line-height: 1.4;
    border-radius: 4px;
    z-index: 1000;
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);

    &.info {
      color: #31708f;
      background-color: #d9edf7;
      border-color: #bce8f1;
    }

    &.success {
      color: #3c763d;
      background-color: #dff0d8;
      border-color: #d6e9c6;
    }

    &.warning {
      color: #8a6d3b;
      background-color: #fcf8e3;
      border-color: #faebcc;
    }

    &.error {
      color: #a94442;
      background-color: #f2dede;
      border-color: #ebccd1;
    }
  }
</style>
