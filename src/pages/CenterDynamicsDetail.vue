<template>
    <div>
        <img src="../../statics/页面4/分组 1 (1).png" style='width: 100%;'>
    </div>
    <div style="display: flex">
        <Bread />
    </div>
    <div v-if="article">
        <h1>{{ article.title }}</h1>
        <p>{{ article.date }}</p>
        <div v-html="article.inner"></div>
        <img :src="article.img" alt="Article Image">
    </div>
    <div v-else>
        <p>文章未找到</p>
    </div>
</template>
<script lang="ts" setup name="">
import Bread from '../components/Bread.vue';
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
const articles = ref([
    {
        id: 1,
        title: '省教育技术中心副主任於晓东带队赴绍兴调研教育数字化及“午休躺睡工作',
        date: '2024-05-06',
        inner: '调研组一行座谈了解了绍兴市教育技术发展总体情况、教育数字化改革及数字教育试点建设情况，并就相关平台建设及推进“午体躺睡”工程进行深入探讨。',
        img: '../../statics/页面3/image.png.png'
    },
    {
        id: 2,
        title: '省教育技术中心召开2024年第二季度政治生态和全面从严治党形势分析会暨落实党纪学习教育和审计整改会',
        date: '2024-04-30',
        inner: '4月30日上午，省教育技术中心召开2024年第二季度玫治生态和全西从严治党形势分析会暨落实党纪学习教商和谢计整改会，会设由中心党总支委员、副主任於晓东主持。',
        img: '../../statics/页面3/image.png (1).png'
    },
    {
        id: 3,
        title: '省教育技术中心团总支开展“青春心向党 青年学理论”主题团课',
        date: '2024-04-29',
        inner: '4月29日上午，省教育技术中心团总支开展“青春心向党 青年学理论”主题团课活动，省教育技术中心党总支委员、办公室主任赵川出席会议，团总支副书记谢珍主持',
        img: '../../statics/页面3/image.png (2).png'
    },
    {
        id: 4,
        title: '2024年全省学生信息素养提升实践活动数字创作和计算思维项目现场测试活动顺利举行',
        date: '2024-04-29',
        inner: '4月27日，第二十五届浙江省学生信息素养提升实践活动数字创作和计算思维项目现场测试活动在杭州市钱江外国语实验学校顺利举行，来自全省各学校160余名拟获一二等奖的选手齐聚一堂，参与项目的现场竞…',
        img: '../../statics/页面3/image.png (3).png'
    },
    {
        id: 5,
        title: '浙江省中小学综合实践基地研学旅行教研大组活动顺利举行',
        date: '2024-04-28',
        inner: '4月24日至26日，由浙江省教育技术中心组织、杭州市萧山区青少年素质教育实践中心承办的“跨界融合，创新发展”浙江省中小学综合实践基地研学旅行教研大组活动在萧山顺利举行。',
        img: '../../statics/页面3/image.png (4).png'
    },
    {
        id: 6,
        title: '省教育技术中心组织召开中心承担的教育厅重点调研课题专家论证会',
        date: '2024-04-28',
        inner: '2024年4月26日，浙江省教育技术中心组织召开中心承担的教育厅重点调研课题专家论证会。会上，三位课题负责人分别汇报《生成式人工智能在教育领域的场景应用与实践策略研究》等课题',
        img: '../../statics/页面3/image.png (5).png'
    },
    {
        id: 7,
        title: '人工智能教育应用试点工作部署会和座谈会顺利召开',
        date: '2024-04-26',
        inner: '4月26日下午，人工智能教育应用试点工作部署会和座谈会顺利召开。省教育技术中心党总支书记、主任王会军出席会议并讲话，省教育技术中心党总支委员、副主任胡小杰主持会议。',
        img: '../../statics/页面3/image.png (6).png'
    },
    {
        id: 8,
        title: '教育部教育技术与资源发展中心调研我省开展劳动教育数字化应用专题工作',
        date: '2024-04-26',
        inner: '4月24-25日，教育部教育技术与资源发展中心副主任赵宪志一行深入天台、富阳两地开展浙江省中小学校内校外劳动教育开展工作与“志教融合”志愿服务教师数字化胜任力提升项目实施情况的专题调研。',
        img: '../../statics/页面3/image.png (7).png'
    },
    {
        id: 9,
        title: '教育部教育技术与资源发展中心调研我省开展劳动教育数字化应用专题工作',
        date: '2024-04-26',
        inner: '4月24-25日，教育部教育技术与资源发展中心副主任赵宪志一行深入天台、富阳两地开展浙江省中小学校内校外劳动教育开展工作与“志教融合”志愿服务教师数字化胜任力提升项目实施情况的专题调研。',
        img: '../../statics/页面3/image.png (7).png'
    },
])
const route = useRoute();
const articleId = computed(() => route.params.id);
const article = computed(() => articles.value.find(a => a.id.toString() === articleId.value));

</script>

<style></style>
