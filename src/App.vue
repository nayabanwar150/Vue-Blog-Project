<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Layouts/Header'
import Footer from './components/Layouts/Footer'

export default {
  components:{
    Header,
    Footer
  }
  
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
    text-decoration: none;
    color: #000;
}

a:hover{
  color: crimson;
}
</style>
