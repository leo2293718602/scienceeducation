<template>
    <div>
        <img src="../../statics/页面4/分组 1 (1).png" style='width: 100%;'>
    </div>
    <div style="display: flex">
        <Bread />
    </div>
    <div v-if="article">
        <div style="display: flex;justify-content: center;"> <!-- 文章标题 -->
            <h1 style="font-size: 4vh;width: 80%;font-weight: bolder;margin-top: 0;text-align: center;">{{ article.title }}</h1>
        </div>
        <div style="display: flex;justify-content: center;"><!--分割线-->
            <div style="background-color: black;width: 90%;height: 0.5vh;margin: 0 auto 3vh auto;"></div>
        </div>
        <div style="display: flex;justify-content: center;">
            <p class="details">信息来源：{{ article.fromwhere }}</p>
            <p class="details">撰稿人：{{ article.author }}</p>
            <p class="details">浏览次数：{{ article.watched }}</p>
            <p class="details">发布日期：{{ article.date }}</p>
        </div>
        <div style="display: flex;justify-content:center ;">
            <img :src="article.img1" alt="Article Image1" style="width: 45%;height: 40%;margin:2vh">
            <img :src="article.img2" alt="Article Image2" style="width:45%;height: 40%;margin:2vh">
        </div>
        <div style="display: flex;justify-content: center;">
            <div v-html="article.text" class="myinner"></div>
        </div>
        <!-- <div class="jumping">
            <div v-if="prevArticle" @click="navigateToArticle(prevArticle.id) "class="jumpings">
                上一篇: {{ prevArticle.title }}
            </div>
            <div v-if="nextArticle" @click="navigateToArticle(nextArticle.id)" class="jumpings">
                下一篇: {{ nextArticle.title }}
            </div>
        </div> -->
    </div>
    <div v-else>
        <p>文章未找到</p>
    </div>

</template>
<script lang="ts" setup>
import Bread from '../components/Bread.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted , toRaw} from 'vue';
import { getArticleById ,  } from '../api/article';

const article = ref(
    {
        id: 0,
        title: '',
        fromwhere: '',
        author: '',
        watched: 0,
        img1: '',
        img2: '',
        text: '',
        date: ''
    }
);
const route = useRoute();
const router = useRouter();

const fetchArticle = async (id:any) => {
      try {
        const res = await getArticleById(id);
        if (res.date) {
            const date = new Date(res.date);
            res.date = date.toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });
        }
        article.value = res;
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

onMounted(() => {
    fetchArticle(route.params.id);
});
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
