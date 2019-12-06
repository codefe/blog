<template>
  <div v-if="$route.path === '/'" class="list-container">
    <div class="list-card" v-for="item in currentItem">
      <div class="title">
        <h2>
          <router-link :to="{ path: item.path}" >
            {{ item.title }}
          </router-link>
        </h2>
      </div>
      <div class="date">
        {{ formatDate(item.frontmatter.date) }}
      </div>
      <div class="desc">
        {{ item.frontmatter.meta[0].content}}
      </div>
        <ul class="tags">
        <li class='tags__item' v-for='tag in item.frontmatter.meta[1].content'>{{tag}}</li>
      </ul>
      <div class="show-more">
        <router-link :to="{ path: item.path}">-阅读全文-</router-link>
      </div>
    </div>
    <Pagination :pageOptions="pageOptions" v-if="$route.path === '/'"/>
  </div>
</template>

<script>
import Pagination from './Pagination'

export default {
  components: { Pagination },

  data () {
    return {
      PREFIX: '/blog/',//地址
      newPage:[],
      pageOptions: {
        total: null,
        current: 1,//目前第1页；
        limit: 5,//每页最多5篇文章；
        theme: '#16a086',
      },
    }
  },

  created() {
    var reg=new RegExp(/\/blog/);
    this.newPages= this.$site.pages.filter(page=> (reg.test(page.path)));//路径包含/blog

    this.pageOptions.total = this.newPages.length;
  },

  computed: {
    items () {
     
      return this.newPages;
    },

    total () {
      return this.items.length || 0
    },

    currentItem () {//当前页面展示的文章概述；
      const { items, pageOptions } = this
      const { current, limit } = pageOptions
      const start = (current - 1) * limit
      return items.slice(start, start + limit)
    }
  },

  methods: {
    formatDate (data) {
      return data.substring(0, 10) 
    }
  }
}
</script>

<style lang="scss">
@import '../styles/config.scss';

.list-container {
  position: relative;
  padding: 1rem 0;
  max-width: $containerWidth;
  margin: 0 auto;
  .list-card {
    background: #ffffff;
    text-align: center;
    border-radius: 3px;
    box-shadow: 4px 4px 40px rgba(0,0,0,.05);
    margin: 2rem 0;
    .title {
      a {
        color: #3a4044;
        @include transition(color, 0.4s);
        &:hover {
          color: $hoverColor;
        }
      }
      padding: 2rem 0 0 0;
    }
    .date {
      color: #99a3aa;
      padding: 1rem;
      font-size: 14px;
    }
    .desc {
      padding: 1rem 2rem;
      color: #70787d;
      line-height: 1.8rem;
    }
    .tags .tags__item{
      list-style: none;
      margin-right:5px;
      padding:0 5px;
      border:1px solid $hoverBackgroundColor;
      background-color:$hoverBackgroundColor;
      border-radius:3px;
      display:inline-block;

    }
    .show-more {
      padding: 1rem 0 2.5rem 0;
      font-size: 14px;
      a {
        @include transition(color, 0.4s);
        color: #99a3aa;
        &:hover {
          color: $hoverColor;
        }
      }
    }
  }
}
</style>
