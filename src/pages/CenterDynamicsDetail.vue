<template>
    <div>
        <img src="../../statics/页面4/分组 1 (1).png" style='width: 100%;'>
    </div>
    <div style="display: flex">
        <Bread />
    </div>
    <div v-if="article">
        <div style="display: flex;justify-content: center;"> <!-- 文章标题 -->
            <h1 style="font-size: 5vh;width: 80%;font-weight: bolder;margin-top: 0;">{{ article.title }}</h1>
        </div>
        <div style="display: flex;justify-content: center;"><!--分割线-->
            <div style="background-color: black;width: 90%;height: 0.5vh;margin: 0 auto 3vh auto;"></div>
        </div>
        <div style="display: flex;justify-content: center;">
            <p class="details">信息来源：{{ article.from }}</p>
            <p class="details">撰稿人：{{ article.author }}</p>
            <p class="details">浏览次数：{{ article.watchtimes }}</p>
            <p class="details">发布日期：{{ article.date }}</p>
        </div>
        <div style="display: flex;justify-content:center ;">
            <img :src="article.img1" alt="Article Image1" style="width: 45%;height: 40%;margin:2vh">
            <img :src="article.img2" alt="Article Image2" style="width:45%;height: 40%;margin:2vh">
        </div>
        <div style="display: flex;justify-content: center;">
            <div v-html="article.inner" class="myinner"></div>
        </div>
        <div class="jumping">
            <div v-if="prevArticle" @click="navigateToArticle(prevArticle.id) "class="jumpings">
                上一篇: {{ prevArticle.title }}
            </div>
            <div v-if="nextArticle" @click="navigateToArticle(nextArticle.id)" class="jumpings">
                下一篇: {{ nextArticle.title }}
            </div>
        </div>
    </div>
    <div v-else>
        <p>文章未找到</p>
    </div>

</template>
<script lang="ts" setup name="">
import Bread from '../components/Bread.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref, computed, watch } from 'vue';
const articles = ref([
    {
        id: 1,
        title: '1省教育技术中心副主任於晓东带队赴绍兴调研教育数字化及“午休躺睡工作',
        date: '2024-05-06 09:18',
        from: '教育装备部',
        author: '杨洪敏',
        watchtimes: 228,
        inner: '4月24日至26日，由浙江省教育技术中心组织、杭州市萧山区青少年素质教育实践中心承办的“跨界融创新发展”浙江省中小学综合实践基地研学旅行教研大组活动在萧山顺利举行。台，本次活动邀请专家作《研学旅行的实践评价和创新发展》、《研学实践基地师资队伍建设》专题报告，研学旅行项目教研大组成员单位相关负责人作经验交流，各专家还对三门研学课进行了教学观摩与评议。活动期间，对获得2023年度省优秀项目教研大组及考核优秀的成员单位和个人颁发了荣誉，与会人员还实地调研了美丽乡村研学基地，实践了研学实践精品线路设置和课程实交流中，省教育技术中心实践教育管理相关负责人以《新起点 新实践 共筑实践教育新篇章》为主题。围绕培养学生综合素养，深入开展教研活动，进一步研讨了相关工作。浙江省教育技术中心、萧山区教育局、研学旅行项目教研大组成员单位等全省30多家，60余位专家同仁参加了本次教研活动。',
        img1: '../../statics/页面4/39d419a3f68440afa1d88d96a6f95989.jpg.png',
        img2: '../../statics/页面4/image.png (8).png'
    },
    {
        id: 2,
        title: '2省教育技术中心副主任於晓东带队赴绍兴调研教育数字化及“午休躺睡工作',
        date: '2024-05-06 09:18',
        from: '教育装备部',
        author: '杨洪敏',
        watchtimes: 228,
        inner: '调研组一行座谈了解了绍兴市教育技术发展总体情况、教育数字化改革及数字教育试点建设情况，并就相关平台建设及推进“午体躺睡”工程进行深入探讨。',
        img1: '../../statics/页面4/39d419a3f68440afa1d88d96a6f95989.jpg.png',
        img2: '../../statics/页面4/image.png (8).png'
    },
    {
        id: 3,
        title: '3省教育技术中心副主任於晓东带队赴绍兴调研教育数字化及“午休躺睡工作',
        date: '2024-05-06 09:18',
        from: '教育装备部',
        author: '杨洪敏',
        watchtimes: 228,
        inner: '调研组一行座谈了解了绍兴市教育技术发展总体情况、教育数字化改革及数字教育试点建设情况，并就相关平台建设及推进“午体躺睡”工程进行深入探讨。',
        img1: '../../statics/页面4/39d419a3f68440afa1d88d96a6f95989.jpg.png',
        img2: '../../statics/页面4/image.png (8).png'
    },
    {
        id: 4,
        title: '4省教育技术中心副主任於晓东带队赴绍兴调研教育数字化及“午休躺睡工作',
        date: '2024-05-06 09:18',
        from: '教育装备部',
        author: '杨洪敏',
        watchtimes: 228,
        inner: '调研组一行座谈了解了绍兴市教育技术发展总体情况、教育数字化改革及数字教育试点建设情况，并就相关平台建设及推进“午体躺睡”工程进行深入探讨。',
        img1: '../../statics/页面4/39d419a3f68440afa1d88d96a6f95989.jpg.png',
        img2: '../../statics/页面4/image.png (8).png'
    },
    {
        id: 5,
        title: '5省教育技术中心副主任於晓东带队赴绍兴调研教育数字化及“午休躺睡工作',
        date: '2024-05-06 09:18',
        from: '教育装备部',
        author: '杨洪敏',
        watchtimes: 228,
        inner: '调研组一行座谈了解了绍兴市教育技术发展总体情况、教育数字化改革及数字教育试点建设情况，并就相关平台建设及推进“午体躺睡”工程进行深入探讨。',
        img1: '../../statics/页面4/39d419a3f68440afa1d88d96a6f95989.jpg.png',
        img2: '../../statics/页面4/image.png (8).png'
    },
    {
        id: 6,
        title: '6省教育技术中心副主任於晓东带队赴绍兴调研教育数字化及“午休躺睡工作',
        date: '2024-05-06 09:18',
        from: '教育装备部',
        author: '杨洪敏',
        watchtimes: 228,
        inner: '调研组一行座谈了解了绍兴市教育技术发展总体情况、教育数字化改革及数字教育试点建设情况，并就相关平台建设及推进“午体躺睡”工程进行深入探讨。',
        img1: '../../statics/页面4/39d419a3f68440afa1d88d96a6f95989.jpg.png',
        img2: '../../statics/页面4/image.png (8).png'
    },
    {
        id: 7,
        title: '7省教育技术中心副主任於晓东带队赴绍兴调研教育数字化及“午休躺睡工作',
        date: '2024-05-06 09:18',
        from: '教育装备部',
        author: '杨洪敏',
        watchtimes: 228,
        inner: '调研组一行座谈了解了绍兴市教育技术发展总体情况、教育数字化改革及数字教育试点建设情况，并就相关平台建设及推进“午体躺睡”工程进行深入探讨。',
        img1: '../../statics/页面4/39d419a3f68440afa1d88d96a6f95989.jpg.png',
        img2: '../../statics/页面4/image.png (8).png'
    },
    {
        id: 8,
        title: '8省教育技术中心副主任於晓东带队赴绍兴调研教育数字化及“午休躺睡工作',
        date: '2024-05-06 09:18',
        from: '教育装备部',
        author: '杨洪敏',
        watchtimes: 228,
        inner: '调研组一行座谈了解了绍兴市教育技术发展总体情况、教育数字化改革及数字教育试点建设情况，并就相关平台建设及推进“午体躺睡”工程进行深入探讨。',
        img1: '../../statics/页面4/39d419a3f68440afa1d88d96a6f95989.jpg.png',
        img2: '../../statics/页面4/image.png (8).png'
    },
    {
        id: 9,
        title: '9省教育技术中心副主任於晓东带队赴绍兴调研教育数字化及“午休躺睡工作',
        date: '2024-05-06 09:18',
        from: '教育装备部',
        author: '杨洪敏',
        watchtimes: 228,
        inner: '调研组一行座谈了解了绍兴市教育技术发展总体情况、教育数字化改革及数字教育试点建设情况，并就相关平台建设及推进“午体躺睡”工程进行深入探讨。',
        img1: '../../statics/页面4/39d419a3f68440afa1d88d96a6f95989.jpg.png',
        img2: '../../statics/页面4/image.png (8).png'
    },
])
const route = useRoute();
const router = useRouter();
const currentArticleId = Array.isArray(route.params.id) ? parseInt(route.params.id[0]) : parseInt(route.params.id);

const currentIndex = ref(articles.value.findIndex(article => article.id === currentArticleId));

const prevArticle = computed(() => {
    const prevIndex = currentIndex.value - 1;
    return prevIndex >= 0 ? articles.value[prevIndex] : null;
});

const nextArticle = computed(() => {
    const nextIndex = currentIndex.value + 1;
    return nextIndex < articles.value.length ? articles.value[nextIndex] : null;
});

const navigateToArticle = (id: number) => {
    router.push({ name: 'CenterDynamicsDetailPage', params: { id: id.toString() } });
};
const articleId = computed(() => route.params.id);
const article = computed(() => articles.value.find(a => a.id.toString() === articleId.value));

watch(() => route.params.id, (newId) => {
    currentIndex.value = articles.value.findIndex(article => article.id === parseInt(newId.toString()));
}, { immediate: true });
</script>

<style>
.details {
    margin: 0 3vh;
    margin-bottom: 5vh;
    font-size: 2vh;
}

.myinner {
    width: 90%;
    margin: 4vh auto;
    font-size: 3vh;
    line-height: 5vh;
}

.jumping {
    margin-left: 5%;
    margin-bottom: 5vh;
    margin-top: 5vh;
    line-height: 5vh;
    font-size: 2.5vh;
}
.jumpings:hover {
    cursor: pointer;
    color:#0456B5;
}
</style>
