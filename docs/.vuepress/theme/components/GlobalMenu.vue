<template>
  <div class="global-menu">
    <transition name="move">
      <div class="inner" v-show="open">
        <div class="intro">
          <p class="name">newway</p>
          <p class="professionn">前端开发</p>
        </div>
        <div class="stack">
          <span>技术栈</span>
          <p>熟悉的语言 JavaScript ES6 </p>
          <p>熟悉的JS框架 jQuery</p>
          <p>熟悉的打包框架 webpack</p>
          <p>熟悉的MVVM框架 Vue React</p>
          <p>熟悉的css预处理器 less scss stylus </p>
          <p>熟悉的版本控制工具 git</p>

        </div>
      </div>
    </transition>
  </div>
</template>

<script>

  export default {
    props: ['open'],

    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">
$barColor: rgb(62,175,124);
.global-menu {
  height: 100%;
  .inner {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .intro {
    margin-right: 100px;
    .name {
      font-size: 64px;
      color: $barColor;
      font-weight: 800;
    }
    .professionn {
      font-size: 30px;
      color: #fff;
    }
  }
  .stack {
    margin-right: 500px;
    color: #ffffff;
    span {
      display: inline;
      font-size: 30px;
    }
    p {
      font-size: 24px;
      line-height: 50px;
    }
  }
}

.move-enter-active {
  animation: move-in 1s;
}

.move-leave-active {
  animation: move-in 1s reverse;
}

@keyframes move-in {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  75% {
    transform: translateX(200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
