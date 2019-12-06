<template>
  <div class="search-box">
    <input
      aria-label="Search"
      type="text"
      @click="onSearch"
      @focus="visible = true"
      @blur="visible = false"
      @keyup="onSearch"
      :value="content"
    >
    <ul
      v-if="showSuggestions"
      class="suggestions"
      >
      <li
        class="suggestion"
        v-for="item in suggestions"
        @mousedown="onLink(item)"
        >
        <a v-html="item.title"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      content: ''
    }
  },

  computed: {
    showSuggestions () {
      return (
        this.visible &&
        this.suggestions &&
        this.suggestions.length
      )
    },

    suggestions () {
      const content = this.content.trim().toLowerCase()
      const pages = this.$page.frontmatter.items || this.$site.pages[0].frontmatter.items
      if (!content) {
        return
      }

      const list = pages.filter(item => (
        item.title.trim().toLowerCase().indexOf(content) > -1
      ))

      return list.map(item => {
        let temp = Object.assign({}, item)
        temp.title = temp.title.trim().toLowerCase().split(content).join(`<span style="color: red;">${content}</span>`)
        return temp
     })
    }
  },

  methods: {
    onSearch (e) {
      this.content = e.target.value
      this.visible = true
    },

    onLink (item) {
      this.content = ''
      this.$router.push(`/blog/${item.link}.html`)
    }
  }
}
</script>

<style lang="scss">
.search-box {
  position: relative;
  input {
    cursor: text;
    width: 10rem;
    color: #4e6e8e;
    display: table-cell;
    border: 1px solid #cfd4db;
    border-radius: 2rem;
    font-size: .9rem;
    line-height: 2rem;
    padding: 0 .5rem 0 2rem;
    outline: none;
    transition: all .2s ease;
    background: #fff url(./search.svg) .6rem .5rem no-repeat;
    background-size: 1rem;
    &:focus {
      cursor: auto;
      border-color: #3eaf7c;
    }
  }
  .suggestions {
    background: #fff;
    width: 20rem;
    position: absolute;
    top: 2.5rem;
    border: 1px solid #cfd4db;
    border-radius: 6px;
    padding: 0.4rem;
    list-style-type: none;
    left: 0;
    z-index: 99;
  }
  .suggestion {
    z-index: 99;
    display: block;
    line-height: 1.4;
    padding: 0.4rem 0.6rem;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #f3f4f5;
      > a {
        color: #3eaf7c;
      }
    }
  }
}
</style>

