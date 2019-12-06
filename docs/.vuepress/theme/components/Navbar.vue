<template>
  <header>
    <nav>
      <div class="main">
        <ul class="nav">
          <li class="is-hamburger-menu">
            <a href="javascript:void(0);" class="hamburger-menu" @click="toggle">
              <div class="inner">
                <div class="bar" :class="first ? open ? 'active': 'inactive' : open ? 'active': ''"></div>
                 
              </div>
            </a>
          </li>
          <li v-for="item in menuList">
            <router-link :to="item.link">{{ item.text }}</router-link>
          </li>
        </ul>
      </div>
      <Link />
    </nav>
  </header>
</template>

<script>
import Link from './Link'
import lodash from 'lodash'

export default {
  components: { Link },

  data () {
    return {
      open: false,
      lock: false,
      first: false,
    }
  },

  computed: {
    menuList() {
      return this.$site.themeConfig.nav || []
    }
  },
  
  methods: {
    toggle: lodash.throttle(function() {
      this.open = !this.open
      this.$emit('listenToggle', this.open)
      this.first = true
    }, 800)
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/config.scss';

$barColor: rgb(62,175,124);
$barSpace: 10px;
$barSize: 38px;
$barDeg: 45deg;
$duration: 0.6s;
$timing: ease-in-out;

header {
  z-index: 20;
  border-bottom: 1px solid #eaecef;
  background: #ffffff;
  nav {
    display: flex;
    justify-content: space-between;
    height: 100%;
    .main {
      .nav {
        display: table;
        padding: 0 1.5rem;
        height: 100%;
        li {
          display: table-cell;
          padding: 0 1.5rem;
          vertical-align: middle;
          > a:not(.hamburger-menu) {
            color: #242424;
            margin: 0 1rem;
            padding: 0.2rem 0;
            font-size: 1.2rem;
            &:hover {
              border-bottom: 3px solid $themeColor;
            }
          }
        }
      }
    }
  }
}
.is-hamburger-menu {
  padding: 0.5rem 1rem;
  .hamburger-menu {
    display: block;
    margin: 1rem;
    > .inner {
      width: $barSize;
	    height: $barSize;
      position: relative;
      top: 3px;
      display: block;
      transform: translateY(16px);
      z-index: 10;
      .bar {
        position: relative;
        width: $barSize;
        height: 2px;
        background: $barColor;
        &::before,
        &::after {
          position: absolute;
          left: 0;
          width: $barSize;
          height: 2px;
          background: $barColor;
          content: "";
        }
        &::before {
          bottom: $barSpace;
        }
        &::after {
          bottom: -$barSpace;
        }
      }
      .active {
        animation: barIn $duration $timing forwards;
        &::before {
          animation: beforeIn $duration $timing forwards;
        }
        &::after {
          animation: afterIn $duration $timing forwards;
        }
      }
      .inactive {
        animation: barOut $duration $timing forwards;
        &::before {
          animation: beforeOut $duration $timing forwards;
        }
        &::after {
          animation: afterOut $duration $timing forwards;
        }
      }
    }
  }
}

@keyframes barIn {
  0% { transform: rotate(0); }
  50% { transform: rotate(180deg); background: none; }
  100% { transform: rotate(180deg); background: none; }
}

@keyframes beforeIn {
  0% { transform: rotate(0); }
  50% { transform: rotate(0); }
  100% { bottom: 0; transform: rotate($barDeg); }
}

@keyframes afterIn {
  0% { transform: rotate(0); }
  50% { transform: rotate(0); }
  100% { bottom: 0; transform: rotate(-$barDeg); }
}

@keyframes barOut {
   0% { transform: rotate(180deg); background: none; }
  50% { transform: rotate(0); background: none; }
  100% { transform: rotate(0); }
}

@keyframes beforeOut {
   0% { bottom: 0; transform: rotate($barDeg); }
  50% { bottom: 0; transform: rotate($barDeg); }
  100% { bottom: $barSpace; transform: rotate(0); }
}

@keyframes afterOut {
   0% { bottom: 0; transform: rotate(-$barDeg); }
  50% { bottom: 0; transform: rotate(-$barDeg); }
  100% { bottom: -$barSpace; transform: rotate(0); }
}

</style>
