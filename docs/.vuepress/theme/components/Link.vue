<template>
  <div class="links">
    <ul class="links-nav">
      <li class="links-item is-search-box"><SearchBox /></li>
      <li class="links-item"><a target="_blank" href="https://blog.csdn.net/newway007">csdn</a></li>
      <li class="links-item"><a target="_blank" href="https://github.com/newway7">github</a></li>
    </ul>
  </div>
</template>

<script>
import SearchBox from './SearchBox'
export default {
  components: { SearchBox }
}
</script>

<style lang="scss">
.links {
  position: relative;
  right: 0;
  .links-nav {
    display: table;
    height: 100%;
    .links-item {
      display: table-cell;
      vertical-align: middle;
      padding: 0 1.5rem;
      > a:not(is-search-box) {
        color: #242424;
        text-decoration: none;
        font-size: 1rem;
      }
    }
  }
}
</style>
