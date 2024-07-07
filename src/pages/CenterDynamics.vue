<template>
    <div class="background-layer"></div>
    <div>
        <img src="../../statics/页面3/分组 1.png" style="width: 100%;">
    </div>
    <div style="display: flex">
        <bread />
    </div>
  
    <div class="articles">
        <div v-for="article in currentPageArticles" :key="article.id"  @click="goToArticle(article.id) "style="display: flex;">
            <div class="article">
                <img :src="article.img" alt="Article Image" class="article-img">
                <div class="text-content">
                    <h3 class="title">{{ article.title }}</h3>
                    <p style="color:#a6a6a6; margin-left: 2vh;">{{ article.date }}</p>
                    <p class="clamp-text">{{ article.inner }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="pagination">
        <button @click="goToPage(1)">首页</button>
        <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1"><</button>

        <!-- 页码按钮 -->
        <span v-for="page in pagesToShow" :key="page" @click="goToPage(page)" class="page-number"
            :class="{ active: page === currentPage }">
            {{ page }}
        </span>

        <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">></button>
        <button @click="goToPage(totalPages)">尾页</button>
        <span style="font-size: 2vh;">当前是第 {{ currentPage }} 页，共 {{ totalPages }} 页</span>
        <div style="font-size: 2vh;">
            跳转到 <input v-model.number="jumpToPage" type="number" min="1" :max="totalPages"> 页
            <button @click="goToPage(jumpToPage)">跳转</button>
        </div>
    </div>
</template>

<script lang="ts" setup name="">
import Bread from '../components/Bread.vue';
import { ref, computed } from 'vue';
import router from '../router';
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

const totalPages = Math.ceil(articles.value.length / 8);
const jumpToPage = ref(1);
const currentPage = ref(1);
const articlesPerPage = 8;

const pagesToShow = computed(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    return pages;
});


const currentPageArticles = computed(() => {
    const start = (currentPage.value - 1) * articlesPerPage;
    return articles.value.slice(start, start + articlesPerPage);
});

const maxPage = computed(() => Math.ceil(articles.value.length / articlesPerPage));

function goToPage(page: number) {
    if (page < 1) {
        currentPage.value = 1;
    } else if (page > maxPage.value) {
        currentPage.value = maxPage.value;
    } else {
        currentPage.value = page;
    }
}
function goToArticle(id: number) {
   router.push({
       name: 'CenterDynamicsDetailPage',
       params: {
           id
       }
   })
}
</script>

<style scoped>
.article {
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 0.5vh 0.3vh #eae9e9;
}

.articles>div {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.article {
    width: 100%;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 0.5vh 0.3vh #eae9e9;
    margin-bottom: 6vh;
    margin-left: 5vw;
    margin-right: 5vw;
    padding: 2vh;
    background-color: white;
}

.article-img {
    width: 30%;
    height: auto;
}

.text-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    padding: 0 3vw;
    margin-top: 0;
}

.clamp-text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    color: gray;
    font-size: 2.5vh;
    margin-left: 2vh;
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 5vh;
}

.pagination button, .pagination .page-number {
  background-color: #f0f0f0;
  border: 1px solid #dcdcdc;
  padding: 10px 15px; /* 增加padding */
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-size: 2vh; 
}


.pagination button:disabled {
  background-color: #e9e9e9;
  color: #b1b1b1;
  cursor: not-allowed;
}

.pagination .page-number.active {
  background-color: #0456B5;
  color: white;
  border-color: #0456B5;
}

.pagination input[type="number"] {
  width: 70px; 
  padding: 10px; 
  margin-left: 5px;
  border: 1px solid #dcdcdc;
  text-align: center;
  font-size: 2vh; 
}

.pagination button:hover, .pagination .page-number:hover {
  background-color: #0456B5;
  color: white;
  border-color: #0456B5;
}

.background-layer {
  position: fixed; 
  top: 17vh;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../statics/页面2/标.jpg');
  background-size: 80vh;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.3; 
  z-index: -1; 
}

.content-layer {
  position: relative; /* 确保内容在背景之上 */
}

.title{
    font-size: 3.5vh;
    margin-top: 0vh;
}
.title:hover{
    color: #0456B5;
}
</style>