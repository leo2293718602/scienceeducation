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
    // 检查是否当前路由是首页
    const isHomeRoute = matchedRoutes.some(record => record.path === '/Main');

    if (isHomeRoute) {
        // 如果是首页，则清空之前的所有路由并只添加首页
        breadcrumbs.value = [{ text: '首页', path: '/Main' }];
    } else {
        // 重置面包屑数组，并始终添加“首页”作为第一个项
        breadcrumbs.value = [{ text: '首页', path: '/Main' }];

        // 添加当前匹配的路由作为面包屑的其余部分
        matchedRoutes.forEach((record) => {
        if (record.path !== '/Main') { // 避免重复添加“首页”
            const existingIndex = breadcrumbs.value.findIndex(breadcrumb => breadcrumb.path === record.path);
            if (existingIndex === -1) {
                breadcrumbs.value.push({
                    text: (record.meta.breadcrumb?.toString() || record.name || 'Unknown').toString(),
                    path: record.path,
                });
            } else {
                
                breadcrumbs.value.splice(existingIndex + 1, breadcrumbs.value.length - existingIndex - 1);
            }
        }
    });
    }
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