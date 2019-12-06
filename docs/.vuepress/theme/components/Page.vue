<template>
  <div class="page-container">
    <Content/>
  </div>
</template>

<script>
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/prism.js'
export default {

}
</script>

<style lang="scss">
  @import '../styles/markdowm.scss';
  @import '../styles/config.scss';
  .page-container {
    max-width: $containerWidth;
    margin: 0 auto;
    padding-bottom: 12rem;
  }
  h1,h2,h3,h4,h5{
    &:hover{
      & .header-anchor{
        opacity: 1;
      }
    }
  }
a.header-anchor {
opacity: 0; 
font-size:0.85em;
float:left;
margin-left:-0.87em;
padding-right:0.23em;
margin-top:0.12em; 
}

  

</style>
