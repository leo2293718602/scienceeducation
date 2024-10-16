<template>
  <div>
    <Header v-if="showHeaderFooter"/>
    <RouterView/>
    <Footer v-if="showHeaderFooter"/>
  </div> 
</template>

<script lang="ts" setup name=""> 
import { computed } from 'vue';
import { useRoute } from 'vue-router';
     import Header from './components/Header.vue';
     import Footer from './components/Footer.vue';
     const route = useRoute();

const showHeaderFooter = computed(() => {
  // 在这里添加你不想显示 Header 和 Footer 的路径
  const hiddenPaths = ['/Admin', '/AdminLogin'];
  return !hiddenPaths.includes(route.path);
});
</script>

<style>

</style>