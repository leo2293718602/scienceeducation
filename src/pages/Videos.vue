<template>
    <div style="display: flex;justify-content: space-between;">
        <div class="video-player-container">
            <div class="video-player">
                <div class="video-header"> <!-- 添加类名 -->
                    <div class="video-title">{{ currentVideo?.title }}</div>
                    <div class="grey-word" style="width: 15vh;">浏览量: {{ formWatched(currentVideo?.watched) }}</div>
                    <div class="grey-word">发布时间: {{ currentVideo?.date }}</div>
                    <div class="share-button"><img src="/statics/页面10/分享.png"><a>分享</a></div>
                    <div class="up-button"><img src="/statics/页面10/点赞.png"><a>{{ formatLikes(currentVideo?.liked) }}</a></div>
                </div>
                <video :src="currentVideo?.video" controls style="margin-top: 2vh;width: 60vw;"></video>
                <div style="color:gray;font-size: 2vh;align-items: center;"> <a
                        style='font-size: 4vh;margin-right: 1vh;margin-top: 2vh'>简介:</a>面向核心素养的科学教育--2022版义务教育科学课程标准解读
                </div>
            </div>
            <div class="video-recommendations">
                <div style="font-size: 3vh;margin:2vh;">相关推荐</div>
                <div class="video" v-for="video in filteredRecommendations" :key="video.id" @click="navigateToVideo(video.id)">
                    <img :src="video.img" :alt="video.title" class="video-thumbnail">
                    <div class="video-info">
                        <h4>{{ video.title }}</h4>
                        <div style="display: flex;justify-content: space-between;">
                            <p>{{ video.date }}</p>
                            <p>{{ video.watched }}浏览量</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="">
import { ref, computed,watch} from 'vue';
import { useRoute,useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const videos = ref([
    { id: 1, type: '1', date: '2024-1-1', video: '/statics/页面10/1.mp4', title: '【说课】科教版三年级下《茧种钻出了dasds》', watched: 251, liked: 15, content: '本视频是关于视频是关于科视频关于科视频是v是关于科科教版三年级下《茧种钻dasdsadasdasdsadaasddasdsadasdsadsadsaas出了..dsadsada.dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '/statics/页面9/page9-1.png' },
    { id: 2, type: '2', date: '2024-1-12', video: '/statics/页面10/1.mp4', title: '【说课】科教版三年级下《茧种钻出了...dadwdzDsada》', watched: 123, liked: 5, content: '本视频是关于科教版三年级下《茧种钻出了dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '/statics/页面9/page9-2.png' },
    { id: 3, type: '2', date: '2024-1-11', video: '/statics/页面10/1.mp4', title: '【说课】科教版三年级下《茧种钻出了...dadwdzDsadreqwrewrwera》', watched: 121, liked: 1521, content: '本视频是关于科教版三年级下《茧种钻出了...dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '/statics/页面9/page9-3.png' },
    { id: 4, type: '1', date: '2024-1-9', video: '/statics/页面10/1.mp4', title: '【说课】科教版三年级下《茧种钻出了...dadwdzDsada》', watched: 232151, liked: 152, content: '本视频是关于科教版三年级下《茧种钻出了...dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '/statics/页面9/page9-4.png' },
    { id: 5, type: '2', date: '2024-1-8', video: '/statics/页面10/1.mp4', title: '【说课】科教版三年级下《茧种钻出了...dadwdzDsada》', watched: 23251, liked: 1532312, content: '本视频是关于科教版三年级下《茧种钻出了...dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '/statics/页面9/page9-5.png' },
    { id: 6, type: '1', date: '2024-1-7', video: '/statics/页面10/1.mp4', title: '【说课】科教版三年级下《茧种钻出了...dadwdzDsada》', watched: 23231, liked: 15321, content: '本视频是关于科教版三年级下《茧种钻出了...dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '/statics/页面9/page9-6.png' },
    { id: 7, type: '1', date: '2024-1-6', video: '/statics/页面10/1.mp4', title: '【说课】科教版三年级下《茧种钻出了...dadwdzDsada》', watched: 251, liked: 1, content: '本视频是关于科教版三年级下《茧种钻出了...dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '/statics/页面9/page9-7.png' },
    { id: 8, type: '1', date: '2024-1-5', video: '/statics/页面10/1.mp4', title: '【说课】科教版三年级下《茧种钻出了...dadwdzDsada》', watched: 2251, liked: 112, content: '本视频是关于科教版三年级下《茧种钻出了...dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '/statics/页面9/page9-8.png' },
    { id: 9, type: '1', date: '2024-1-4', video: '/statics/页面10/1.mp4', title: '【说课】科教版三年级下《茧种钻出了...dadwdzDsada》', watched: 2351, liked: 1325, content: '本视频是关于科教版三年级下《茧种钻出了...dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '/statics/页面9/page9-9.png' },
    { id: 10, type: '1', date: '2024-1-3', video: '/statics/页面10/1.mp4', title: '【说课】科教版三年级下《茧种钻出了...dadwdzDsada》', watched: 1, liked: 1533, content: '本视频是关于科教版三年级下《茧种钻出了...dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '/statics/页面9/page9-1.png' },
])
const currentVideoId = ref(Number(route.params.id)); // 确保转换为数字类型


// 获取当前视频的信息
const currentVideo = computed(() => {
    return videos.value.find(video => video.id === currentVideoId.value);
});
const currentVideoType = ref(currentVideo.value?.type);
// 筛选相关推荐视频
const filteredRecommendations = computed(() => {
    return videos.value
        .filter(video => video.type === currentVideoType.value && video.id !== currentVideoId.value)
        .sort((a, b) => a.id - b.id)
        .slice(0, 6);
});
function navigateToVideo(id:any) {
    router.push({ name: 'VideosPage', params: { id } }); // 假设路由名称为'VideoDetail'，请根据实际情况调整
}
watch(() => route.params.id, (newId) => {
      currentVideoId.value = Number(newId);
      // 这里可以添加任何需要在ID变化时执行的代码
      // 例如，重新获取当前视频信息或相关推荐视频
    });
function formatLikes(likes:any){
    if(likes>=1000){
        if(likes>=1000000){
            return (likes/1000000).toFixed(1)+'M';
        }
        return (likes/1000).toFixed(1)+'K';
    }
        return likes;
}
function formWatched(watched:any){
    if(watched>=1000){
        if(watched>=1000000){
            return (watched/1000000).toFixed(1)+'M';
        }
        return (watched/1000).toFixed(1)+'K';
    }
        return watched;
}
</script>

<style scoped>
.video-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* 根据需要调整最大宽度 */
    font-size: 3vh;
    width: 40%;
}

.video-header {
    display: flex;
    align-items: center;
    justify-content: left; /* 保持左对齐 */
    flex-wrap: wrap; /* 允许子元素根据需要换行 */
    gap: 10px; /* 在子元素之间添加一些间隙 */
}

.video-header > * {
    max-width: 100%; /* 限制子元素的最大宽度，防止溢出 */
    overflow: hidden; /* 防止内容溢出容器 */
    text-overflow: ellipsis; /* 超出部分显示省略号 */
    white-space: nowrap; /* 防止文本换行 */
}

.video-player-container {
    display: flex;
    width: 70%;
    margin-left: 11vh;
    margin-bottom: 5vh
}

.video-player {
    flex: 3;
    box-shadow: 2px 2px 2px rgb(183, 183, 183);
    border: #e8e7e7 solid 1px;
    padding: 3vh;
    height: 84vh;
}

.share-button {
    display: flex;
    align-items: center;
    /* 确保图标和文字垂直居中 */
    gap: 1vh;
    /* 在图标和文字之间添加一些间隙 */
    margin-left: auto;
    color: gray;
}

.up-button {
    display: flex;
    align-items: center;
    /* 确保图标和文字垂直居中 */
    gap: 1vh;
    /* 在图标和文字之间添加一些间隙 */
    margin-left: 1vhvh;
    color: gray;
    border: 0.1vh solid #a6a6a6;
    padding: 1vh 3vh;
    border-radius: 3vh;
    margin-left: 3vh;
    width: 7vh;
}

.video-recommendations {
    display: flex;
    flex-direction: column;
    width: 40vw;
    margin-left: 2vw;
    box-shadow: 2px 2px 2px rgb(183, 183, 183);
    border: #e8e7e7 solid 1px;
}

.video {
    display: flex;
    align-items: center;
    /* 垂直居中对齐图片和文字 */
    gap: 1vh;
    /* 在图片和文字信息之间添加一些间隙 */
    box-shadow: none;
}

.video-thumbnail {
    width: 20vh
}

.video-info p {
    margin: 5px;
    font-size: 1.5vh;
}

.grey-word {
    color: #a6a6a6;
    align-items: center;
    margin: 4vh 2vh;
}

.video-info {
    display: flex;
    flex-direction: column;
    align-items: left;
    /* 确保文字信息左对齐 */
    gap: 1vh;
    /* 在标题和浏览量之间添加一些间隙 */
    width: 10vw;
}

.video-info h4 {
    font-size: 2vh;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 20vh;
    /* 根据需要调整最大宽度 */
}
</style>