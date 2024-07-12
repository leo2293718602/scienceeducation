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
  /* 或者 'inline-flex'，取决于你的布局需求 */
}

.breadcrumbs a:hover {
  color: #0456B5
}

.breadcrumb-item::after {
  content: " /";
  /* 在每一项后添加斜杠 */
  color: #616060;
  /* 斜杠的颜色，根据需要调整 */
}

.breadcrumb-item:last-child::after {
  content: "";
  /* 确保最后一项后面没有斜杠 */
}
.breadcrumb-item:first-child::before {
  content: "首页 / ";
}
</style>