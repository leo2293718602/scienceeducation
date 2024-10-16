<template>
    <img src="../../statics/页面4/分组 1 (1).png" style="width: 100%;">
    <div style="display: flex;">
        <Bread />
    </div>
    <RouterView></RouterView>
        <div class="layout" v-show="showLayout">
            <div class="sidebar">
                <!-- 侧边栏内容 -->
                <nav>
                    <ul>
                        <li><a class="has-triangle" @click.prevent="scrollToCenter('pxkc')">▶ &nbsp;培训课程</a></li>
                        <li><a class="has-triangle" @click.prevent="scrollToCenter('pxtz')">▶ &nbsp;培训通知</a></li>
                        <li><a class="has-triangle" @click.prevent="scrollToCenter('xzzq')">▶ &nbsp;下载专区 </a></li>
                    </ul>
                </nav>
            </div>
            <div class="main-content">
                <!-- 主内容区域 -->
                <div style="display: flex;margin-left: 0">
                    <div style="width: 90%;margin-left: 8vw">
                        <div>
                            <div style="display: flex;justify-content: space-between;margin-bottom: 8vh">
                                <a id="pxkc" style="font-size: 4vh;font-weight: 600;"> <span
                                        class="blue-block"></span>培训课程</a>
                                <router-link :to="{ name: 'TrainCoursesPage' }" class="more"
                                    style="vertical-align: center;"> 更多>></router-link>
                            </div>
                            <div>
                                <div class="courses-grid">
                                    <div v-for="(video, index) in videos.slice(0, 4)" :key="index"
                                        class="course-item">
                                        <img :src="video.img" alt="课程图片" @click="onhandlecourses(video)">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style="display: flex;justify-content: space-between;margin-bottom: 8vh">
                                <a id="pxtz" style="font-size: 4vh;font-weight: 600;"><span
                                        class="blue-block"></span>培训通知</a>
                                <a class="more" style="vertical-align: center;"> 更多>></a>
                            </div>
                            <div>
                                <div class='notices-grid' v-for="(notice, index) in trannotices.slice(0, 3)"
                                    :key="index">
                                    <div>
                                        <h3>{{ notice.title }}</h3>
                                        <p>培训时间：{{ notice.date }}</p>
                                        <p>培训地点：{{ notice.place }}</p>
                                        <p>培训内容：{{ notice.inner }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                style="display: flex;justify-content: space-between;margin-bottom: 8vh;margin-top: 10vh">
                                <a id="xzzq" style="font-size: 4vh;font-weight: 600;"><span
                                        class="blue-block"></span>下载专区</a>
                                <a class="more" style="vertical-align: center;"> 更多>></a>
                            </div>
                            <div style=" box-shadow: 1px 2px 2px 2px rgb(183, 183, 183);padding-left: 3vh;margin-bottom: 10vh;">
                                <div class="downloads-grid" v-for="(download, index) in downloads.slice(0, 6)"
                                    :key="index">
                                    <div style="display: flex;justify-content: left">
                                        <p style="width: 10%;color:#0456B5;">[{{ download.date }}]</p>
                                        <a :href="download.downloadsrc">{{ download.title }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script lang="ts" setup>
import Bread from '../components/Bread.vue';
import { getVideosList,getdownloadsList,gettrannoticesList } from '../api/article';
import { ref ,computed, onMounted} from 'vue';
import { useRoute } from 'vue-router';
import router from '../router';

const videos = ref([{img:'',id:''}])
const trannotices = ref([
    {
        title: '',
        date: '',
        place: '',
        inner: ''
    }
])
const downloads = ref([
    {
        title: '',
        date: '',
        downloadsrc: ''
    }
])
function onhandlecourses(   video: any) {
   router.push({name:'VideosPage',params:{id:video.id}})
}

function scrollToCenter(id: string) {
    const element = document.getElementById(id);
    if (element) {
        // 计算元素距离文档顶部的距离
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        // 计算元素的中心位置应该在视窗的哪里
        const elementCenter = elementTop - (window.innerHeight / 2) + (element.offsetHeight / 2) + 100;
        // 平滑滚动到计算出的位置
        window.scrollTo({ top: elementCenter, behavior: 'smooth' });
    }
}
const route = useRoute();
const showLayout = computed(() => route.name !== 'TrainCoursesPage' && route.name !== 'VideosPage');

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const day = date.getDate().toString().padStart(2, '0');
    return `${month}-${day}`;
};

const fetchVideos = async () => {
     try{
        const res = await getVideosList({});
        videos.value = res;
        console.log(videos.value);
     }
        catch(err){
            console.log(err);
        }
}

const fetchtrannotices = async () => {
    try{
        const res = await gettrannoticesList({});
        trannotices.value = res;
        console.log(trannotices.value);
    }
    catch(err){
        console.log(err);
    }
}

const fetchdownloads = async () => {
    try {
        const res = await getdownloadsList({});
        downloads.value = res.map((item: any) => ({
            ...item,
            date: formatDate(item.date)
        }));
    } catch (error) {
        console.error('Error fetching downloads:', error);
    }
}


onMounted(() => {
    fetchVideos();
    fetchtrannotices();
    fetchdownloads();
})
</script>

<style>
.blue-block {
    display: inline-block;
    width: 0.7vh;
    height: 5vh;
    background-color: #0456B5;
    margin-right: 5px;
    vertical-align: middle;
}

.layout {
    display: flex;

}

.sidebar {
    margin-left: 5vw;
    width: 10vw;
    display: flex;
}

.main-content {
    flex-grow: 1;
}

.sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;

}

.sidebar ul li {
    display: block;
}

.sidebar ul li a {
    display: block;
    text-decoration: none;
    width: 21vh;
    font-size: 3.5vh;
    margin-bottom: 8vh;
    cursor: pointer;
}

.sidebar ul li a:hover {
    color: #0456B5;
}

.courses-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-bottom: 8vh;
}

.course-item img {
    width: 100%;
    height: auto;
    cursor: pointer;
}

.notices-grid {
    box-shadow:1px 2px 2px 1px rgb(183, 183, 183);
    padding: 3vh;
    margin-bottom: 3vh;
}

.notices-grid h3 {
    font-size: 3vh;
    font-weight: 600;
    margin-bottom: 1vh;
}

.notices-grid p {
    font-size: 2vh;
    margin-bottom: 1vh;
    line-height: 3vh;
    color: #666666;
}

.downloads-grid p {
    font-size: 2.5vh;
    font-weight: 500;
}

.more:hover {
    color: #0456B5;
    cursor: pointer;
}

.downloads-grid a {
    font-size: 2.5vh;
    font-weight: 500;
    color: black;
    padding: 2.5vh 0px;
    text-decoration: none;
}

.downloads-grid a:hover {
    color: #0456B5;
}
.more{
    text-decoration: none;
    color: black;
}

</style>