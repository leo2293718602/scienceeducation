<template>
    <div class="breadcrumbs">
      <span v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <router-link :to="breadcrumb.path">{{ breadcrumb.text }}</router-link>
        <span v-if="index < breadcrumbs.length - 1"> / </span>
      </span>
    </div>
  </template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const breadcrumbs = ref<Array<{ text: string; path: string }>>([]);

const updateBreadcrumbs = () => {
    const matchedRoutes = route.matched;
    // 首先清空breadcrumbs数组，然后添加“首页”对象
    breadcrumbs.value = [{ text: '首页', path: '/' }];
    // 然后添加当前匹配的路由作为面包屑的其余部分
    breadcrumbs.value = breadcrumbs.value.concat(matchedRoutes.map((record) => ({
        text: record.meta.breadcrumb || record.name || 'Unknown',
        path: record.path,
    } as { text: string; path: string })));
};
onMounted(() => {
    updateBreadcrumbs();
});

router.afterEach(() => {
    updateBreadcrumbs();
});
</script>

<style>
.breadcrumbs {
    margin: 3vh auto;
    font-size: 1.25rem;
    color: #616060; /* 修改文字颜色为灰色 */
    text-decoration: none;
}

.breadcrumbs a {
    color: #616060;/* 设置链接颜色为灰色 */
    text-decoration: none; /* 移除下划线 */
}

.breadcrumbs a:hover {
    color:#0456B5 /* 鼠标悬停时改变链接颜色为蓝色 */
}
</style>