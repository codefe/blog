<template>
  <div class="container">
    <transition name="slide-fade">
      <GlobalMenu class="menu-inner" v-show="open" :open="open"/>
    </transition>
    <Navbar @listenToggle="listenToggle"/>
    <ItemList/>

    
    <Page/>
  </div>


</template>

<script>

import Navbar from "./components/Navbar";
import ItemList from "./components/ItemList";
import Page from "./components/Page";
import GlobalMenu from "./components/GlobalMenu";
export default {
  components: { Navbar, ItemList, Page, GlobalMenu },

  data() {
    return {
      open: null,
      tags:false
    };
  },
created(){
  console.log(this.$site.pages);
  
  
},
computed: {
  // tagsArr(){
  //   return this.pages.
  // }
      sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
},
  methods: {
    listenToggle(open) {  
      this.open = open;
    }
  }
};
</script>

<style lang="scss">
@import "./styles/theme";
@import "./styles/config";
.container {
  min-width: $containerWidth;
}
.menu-inner {
  position: fixed;
  height: 100vh;
  z-index: 6;
  width: 100%;
  background: #fff url('./images/background.jpg');
  background-repeat: no-repeat;
   background-size:cover;
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: width .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  width: 0;
}

</style>
