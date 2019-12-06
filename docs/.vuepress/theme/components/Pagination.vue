<template>
  <section class="pages-wrap">
    <ul class="pagination">
      <li :class="{ 'disabled': pageOptions.current === 1 }"href="javascript:void(0);"
          @click="handleclick(1)">
        <i class="anticon icon-swapleft"></i>
      </li>
      <li :class="{ 'disabled': pageOptions.current === 1 }"
          @click="handleclick(pageOptions.current - 1)"
          class="prev">
        <i class="anticon icon-left"></i>
      </li>
      <li v-for="item in list"
          v-if="pageOptions.current === item"
          :style="{ backgroundColor: pageOptions.theme, borderColor: pageOptions.theme, color: '#fff' }"
          @click="handleclick(item)">
        {{ item }}
      </li>
      <li
        v-else-if="JUMPPREV === item"
        :class="pageOptions.current === 4 ? 'dn' : 'jump-prev'"
        @click="handleclick(pageOptions.current - 2)"
        v-on:mouseenter="handlePrevJumpHoverEnter"
        v-on:mouseleave="handlePrevJumpHoverLeave">
          <i v-if="!prevJumpHover" class="anticon icon-ellipsis1"></i>
          <i v-else class="anticon icon-doubleleft"></i>
      </li>
      <li
        v-else-if="JUMPNEXT === item"
        :class="pageOptions.current === page - 3 ? 'dn' : 'jump-next'"
        @click="handleclick(pageOptions.current + 5)"
        v-on:mouseenter="handleNextJumpHoverEnter"
        v-on:mouseleave="handleNextJumpHoverLeave">
          <i v-if="!nextJumpHover" class="anticon icon-ellipsis1"></i>
          <i v-else class="anticon icon-doubleright"></i>
      </li>
      <li
        v-else
        @click="handleclick(item)">
        {{ item }}
      </li>
      <li :class="{ 'disabled': pageOptions.current === page }"
          @click="handleclick(pageOptions.current + 5)"
          class="next">
        <i class="anticon icon-right"></i>
      </li>
      <li :class="{ 'disabled': pageOptions.current === page }"
          @click="handleclick(page)">
        <i class="anticon icon-swapright"></i>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: { pageOptions: Object },

  data() {
    return {
      JUMPPREV: 'jumpprev',
      JUMPNEXT: 'jumpnext',
      prevJumpHover: false,
      nextJumpHover: false,
    }
  },

  computed: {
    page () {//页数
      return Math.ceil(this.pageOptions.total / this.pageOptions.limit)
    },

    list () {
      let len = this.page
      let arr = []
      let { current } = this.pageOptions
      const group = 5
      for (let i = 1; i <= len; i++) {
        arr.push(i)
      }
      const front = () => {
        if (current <= 3) {
          arr = arr.slice(0, group)
          arr.push(this.JUMPNEXT)
          arr.push(len)
        }
      }
      const back = () => {
        if (current >= len - 2) {
          arr = arr.slice(len - group)
          arr.unshift(this.JUMPPREV)
          arr.unshift(1)
        }
      }
      const middle = () => {
        if (current > 3 && current < len - 2) {
          let offset = Math.floor(group / 2)
          arr = arr.slice(current - offset - 1, current + offset)
          arr.push(this.JUMPNEXT)
          arr.push(len)
          arr.unshift(this.JUMPPREV)
          arr.unshift(1)
        }
      }
      if (len >= 7) {
        front.after(middle).after(back)()
      }
      return arr
    }
  },

  methods: {
    handleclick (idx) {
      if (this.pageOptions.current !== idx && idx > 0 && idx <= this.page) {
        this.pageOptions.current = idx
      }
    },
    handlePrevJumpHoverEnter () {
      this.prevJumpHover = true
    },
    handlePrevJumpHoverLeave () {
      this.prevJumpHover = false
    },
    handleNextJumpHoverEnter () {
      this.nextJumpHover = true
    },
    handleNextJumpHoverLeave () {
      this.nextJumpHover = false
    },
  },
}
</script>

<style lang="scss">
@import '../styles/config';
@import '../styles/iconfont.css';
.pages-wrap {
  .pagination {
    overflow: hidden;
    display: flex;
    justify-content: center;
    > li {
      list-style: none;
      border: 1px solid #ccc;
      cursor: pointer;
      margin: 0 0.2rem;
      user-select: none;
      min-width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
    }
    > .disabled {
      cursor: not-allowed;
      color: #777;
    }
    .jump-prev, .jump-next {
      border: none;
    }
    .icon {
      width: 1em; height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
    .dn {
      display: none;
    }
  }
}
</style>