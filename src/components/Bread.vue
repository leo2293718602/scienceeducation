<template>
  <div class="breadcrumbs">
    <span v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
      {{ breadcrumb.text }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const breadcrumbs = ref<Array<{ text: string; path: string }>>([]);
const generateBreadcrumbs = () => {
  const matchedRoutes = route.matched;
  breadcrumbs.value = matchedRoutes.map((record) => {
    let breadcrumbText = record.meta.breadcrumb as string;
    // 检查是否为 CenterDynamicsDetailPage 路由
    if (record.name === 'CenterDynamicsDetailPage') {
      const articleTitle = "文章阅读";
      breadcrumbText += `/ ${articleTitle}`;
    }
    const path = record.path;
    return { text: breadcrumbText, path };
  }).filter(breadcrumb => breadcrumb.text); // 过滤掉没有面包屑文本的路由

};

onMounted(generateBreadcrumbs);
watch(route, generateBreadcrumbs);
</script>

<style scoped>
.breadcrumbs {
  display: flex;
  /* 使用flex布局使项横向排列 */
  align-items: center;
  /* 垂直居中对齐 */
  gap: 10px;
  /* 在项之间添加间隔 */
  margin: 3vh auto;
  font-size: 1.25rem;
  color: #616060;
  text-decoration: none;
}

.breadcrumbs a,
.breadcrumbs span {
  display: inline-block;
}

.breadcrumbs a:hover {
  color: #0456B5
}

.breadcrumb-item::after {
  content: " /";
  color: #616060;
}

.breadcrumb-item:last-child::after {
  content: "";
  /* 确保最后一项后面没有斜杠 */
}
.breadcrumb-item:first-child::before {
  content: "首页 / ";
}
</style>