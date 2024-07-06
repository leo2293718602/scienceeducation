<template>
  <div>
    <Header/>
    <RouterView/>
    <Footer/>
  </div> 
</template>

<script lang="ts" setup name=""> 
     import Header from './components/Header.vue';
     import Main from './pages/Main.vue';
     import Footer from './components/Footer.vue';
</script>

<style>

</style>