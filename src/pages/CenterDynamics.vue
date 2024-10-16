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
                <img :src="article.cover" alt="Article Image" class="article-img">
                <div class="text-content">
                    <h3 class="title">{{ article.title }}</h3>
                    <p style="color:#a6a6a6; font-size: 2.2vh">{{ article.date }}</p>
                    <p class="clamp-text">{{ article.context }}</p>
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
<script lang="ts" setup>
import Bread from '../components/Bread.vue';
import { ref, computed, onMounted } from 'vue';
import router from '../router';
import { getArticleList ,increaseWatch} from '../api/article';

interface Article {
    id: number;
    cover: string;
    title: string;
    date: string;
    context: string;
    watched: number;
}

const articles = ref<Article[]>([]);
const totalPages = ref(0);
const jumpToPage = ref(1);
const currentPage = ref(1);
const articlesPerPage = 7;

const pagesToShow = computed(() => {
    const pages = [];
    for (let i = 1; i <= totalPages.value; i++) {
        pages.push(i);
    }
    return pages;
});

const currentPageArticles = computed(() => {
    const start = (currentPage.value - 1) * articlesPerPage;
    return articles.value.slice(start, start + articlesPerPage);
});

const maxPage = computed(() => Math.ceil(articles.value.length / articlesPerPage));

const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};
const handleIncreaseWatch = (id: any) => {
      increaseWatch(id).then(() => {
        const article = articles.value.find(item => item.id === id);
        if (article) {
          article.watched++;
        }
      }).catch((error: any) => {
        console.error('Error increasing watch count:', error);
      });
    };

const goToArticle = (id: any) => {
      console.log('Navigating to article:', id);
      handleIncreaseWatch(id);
      router.push(`/CenterDynamics/${id}`);
    };

    

onMounted(async () => {
    try {
        const response = await getArticleList({});
        articles.value = response.map((article: { date: string | number | Date; }) => {
            article.date = new Date(article.date).toISOString().split('T')[0];
            return article;
        });
        console.log(typeof(articles));
        totalPages.value = Math.ceil(articles.value.length / articlesPerPage);
    } catch (error) {
        console.error('Failed to fetch articles:', error);
    }

});
</script>
<style scoped>
.article {
    display: flex;
}
</style>
<style scoped>
.article {
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 0.5vh 0.3vh #eae9e9;
    cursor: pointer;
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
    box-shadow:1px 1px 0px 1.5px rgb(183, 183, 183);
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
  background-size: 110vh;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.2; 
  z-index: -1; 
}

.content-layer {
  position: relative;
}

.title{
    font-size: 3.5vh;
    margin-top: 0vh;
}
.title:hover{
    color: #0456B5;
}
</style>