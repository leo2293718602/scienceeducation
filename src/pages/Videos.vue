<template>
    <div style="display: flex;justify-content: space-between;">
        <div class="video-player-container">
            <div class="video-player">
                <div class="video-header"> <!-- 添加类名 -->
                    <div class="video-title" :title="currentVideo?.title">{{ currentVideo?.title }}</div>
                    <div class="grey-word" style="width: 15vh;">浏览量: {{ formWatched(currentVideo?.watched) }}</div>
                    <div class="grey-word">发布时间: {{ currentVideo?.date }}</div>
                    <div class="share-button"><img src="/statics/页面10/分享.png"><a>分享</a></div>
                    <div class="up-button" @click="liked ? unlikeCurrentVideo() : likeCurrentVideo()"><img :src="liked ? '/statics/页面10/取消点赞.png' : '/statics/页面10/点赞.png'" ><a>{{ formatLikes(currentVideo?.liked) }}</a> </div>
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
import { ref, computed,watch, onMounted} from 'vue';
import { useRoute,useRouter } from 'vue-router';
import { getVideosList,likeVideoById,unlikeVideoById,increaseVideoWatch } from '../api/article';
const route = useRoute();
const router = useRouter();
const videos = ref([{id:0,title:'',date:'',watched:0,liked:0,video:'',img:'',type:''}]);
const liked= ref(false);
const currentVideoId = ref(Number(route.params.id)); // 确保转换为数字类型


// 获取当前视频的信息
const currentVideo = computed(() => {
    return videos.value.find(video => video.id === currentVideoId.value);
});
const currentVideoType = ref(currentVideo.value?.type);
watch(currentVideo, (newVideo) => {
    currentVideoType.value = newVideo?.type;
});

// 筛选相关推荐视频
const filteredRecommendations = computed(() => {
    return videos.value
        .filter(video => video.type === currentVideoType.value && video.id !== currentVideoId.value)
        .sort((a, b) => a.id - b.id)
        .slice(0, 6);
});
function navigateToVideo(id:any) {
    router.push({ name: 'VideosPage', params: { id } }); 
    handleIncreaseVideoWatch();
}
watch(() => route.params.id, (newId) => {
      currentVideoId.value = Number(newId);
      checkLikedStatus();
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
const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
}

const fetchVideos = async () => {
    try {
        const res = await getVideosList({});
        videos.value = res.map((item: any) => ({
            ...item,
            date: formatDate(item.date),
        }));
    } catch (error) {
        console.error('Error fetching videos:', error);
    }
};
const checkLikedStatus = () => {
    const likedVideos = JSON.parse(localStorage.getItem('likedVideos') || '[]');
    liked.value = likedVideos.includes(currentVideoId.value);
};

const handleIncreaseVideoWatch = () => {
    increaseVideoWatch(currentVideoId.value).then(() => {
        console.log("currentVideoId",currentVideoId.value);
        const video = currentVideo.value;
        if (video) {
            video.watched++;
        }
    }).catch((error: any) => {
        console.error('Error increasing watch count:', error);
    });
};
// 点赞视频
const likeCurrentVideo = async () => {
    try {
        await likeVideoById(currentVideoId.value);
        liked.value = true;
        updateLocalStorage();
        updateCurrentVideoLikes(1);
    } catch (error) {
        console.error('Error liking video:', error);
    }
};

// 取消点赞视频
const unlikeCurrentVideo = async () => {
    try {
        await unlikeVideoById(currentVideoId.value);
        liked.value = false;
        updateLocalStorage();
        updateCurrentVideoLikes(-1);
    } catch (error) {
        console.error('Error unliking video:', error);
    }
};

const updateCurrentVideoLikes = (change: number) => {
    const video = currentVideo.value;
    if (video) {
        video.liked += change;
    }
};

// 更新本地存储中的点赞状态
const updateLocalStorage = () => {
    let likedVideos = JSON.parse(localStorage.getItem('likedVideos') || '[]');
    if (liked.value) {
        if (!likedVideos.includes(currentVideoId.value)) {
            likedVideos.push(currentVideoId.value);
        }
    } else {
        likedVideos = likedVideos.filter((id: number) => id !== currentVideoId.value);
    }
    localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
};

onMounted(() => {
    fetchVideos();
    checkLikedStatus();
    handleIncreaseVideoWatch();
});

</script>

<style scoped>
.video-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 3vh;
    width: 26vw;
}

.video-header {
    display: flex;
    align-items: center;
    justify-content: left;
    flex-wrap: wrap; 
    gap: 10px; 
}

.video-header > * {
    max-width: 100%;
    overflow: hidden; 
    text-overflow: ellipsis;
    white-space: nowrap; 
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
    gap: 1vh;
    margin-left: auto;
    color: gray;
}

.up-button {
    display: flex;
    align-items: center;
    gap: 1vh;
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
    gap: 1vh;
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
    margin: 4vh 0;
}

.video-info {
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 1vh;
    width: 10vw;
}

.video-info h4 {
    font-size: 2vh;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 20vh;
}
</style>