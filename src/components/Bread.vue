<template>
    <div class="breadcrumbs">
      <span v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <div>{{ breadcrumb.text }}</div>
        <span v-if="index < breadcrumbs.length - 1"> / </span>
      </span>
    </div>
  </template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const breadcrumbs = ref<Array<{ text: string; path: string }>>([]);
    const generateBreadcrumbs = () => {
  const matchedRoutes = route.matched;
  breadcrumbs.value = matchedRoutes.map((record) => {
    let breadcrumbText = record.meta.breadcrumb as string;
    // 检查是否为 CenterDynamicsDetailPage 路由
    if (record.name === 'CenterDynamicsDetailPage') {
      // 假设你有方式获取当前文章的标题或ID，这里只是一个示例
      const articleTitle = "文章阅读"; // 这里应该替换为动态获取的标题或ID
      breadcrumbText += `/ ${articleTitle}`;
    }
    const path = record.path;
    return { text: breadcrumbText, path };
  }).filter(breadcrumb => breadcrumb.text); // 过滤掉没有面包屑文本的路由

};

onMounted(generateBreadcrumbs);
watch(route, generateBreadcrumbs);
</script>

<style>
.breadcrumbs {
    margin: 3vh auto;
    font-size: 1.25rem;
    color: #616060; 
    text-decoration: none;
}

.breadcrumbs a {
    color: #616060;
    text-decoration: none;
}

.breadcrumbs a:hover {
    color:#0456B5 
}
</style>