<template>
  <div>
    <!-- 当路由为videospage时，只显示router-view -->
    <router-view v-if="$route.name === 'VideosPage'"></router-view>

    <!-- 当路由不是videospage时，显示其他内容 -->
    <template v-else>
      <div class="button-row">
        <button class="mybutton" v-for="filter in firstRowFilters" :key="filter.id" :class="{ selected: filter.selected }"
          @click="toggleSelection(filter.id, 'firstRow')">
          {{ filter.name }}
        </button>
      </div>
      <div class="button-row">
        <button class="mybutton" v-for="filter in secondRowFilters" :key="filter.id"
          :class="{ selected: filter.selected }" @click="toggleSelection(filter.id, 'secondRow')">
          {{ filter.name }}
        </button>
      </div>
      <div class="videos-container">
        <div class="video-row" v-for="(chunk, index) in chunkedVideos" :key="index">
          <div class="video" v-for="video in chunk" :key="video.id" @click="navigateToVideoPage(video.id)">
            <img :src="video.img" :alt="video.title" class="video-img">
            <h3>{{ video.title }}</h3>
            <p>{{ video.content }}</p>
            <div style="display: flex;justify-content:left ;">
              <div style="display: flex; align-items: center;">
                <img src="../../statics/页面9/眼睛.png" style="width: 3vh;height: 2vh;margin-left: 3vh;vertical-align: middle;">
                <p> {{ video.watched }}</p>
              </div>
              <div style="display: flex; align-items: center;">
                <img src="../../statics/页面9/点赞.png" style="width: 3vh;height:3vh;margin-left: 2vh;vertical-align: middle;">
                <p>{{ video.liked }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getVideosList } from '../api/article';

const firstRowFilters = ref([
  { id: 1, name: '人气排序', selected: false },
  { id: 2, name: '播放排序', selected: false },
  { id: 3, name: '最新上线', selected: false },
]);

const secondRowFilters = ref([
  { id: 4, name: '全部主题', selected: false },
  { id: 5, name: '云梯讲堂', selected: false },
  { id: 6, name: '优质课例', selected: false },
  { id: 7, name: '2023年科学发展交流会', selected: false },
]);

const toggleSelection = (id: number, row: string) => {
  const filters = row === 'firstRow' ? firstRowFilters.value : secondRowFilters.value;
  const filter = filters.find(f => f.id === id);
  const wasSelected = filter ? filter.selected : false;

  filters.forEach(filter => {
    filter.selected = filter.id === id ? !filter.selected : false;
  });

  if (!wasSelected) { // 如果是从未选中到选中
    if (id === 2) { // 播放排序
      videos.value.sort((a, b) => b.watched - a.watched);
    } else if (id === 3) { // 最新上线
      videos.value.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (id === 1) { // 人气排序
      videos.value.sort((a, b) => b.liked - a.liked);
    }
  } else { // 如果是从选中到未选中，返回默认排序
    videos.value.sort((a, b) => a.id - b.id);
  }
}
const router = useRouter();
const navigateToVideoPage = (id: number) => {
  router.push({ name: 'VideosPage', params: { id: id.toString() } });
}
const videos = ref([{id: 1, img: '', title: '', content: '', watched: 0, liked: 0, date: ''}]);
const chunkedVideos = computed(() => {
  const result = [];
  const videosArray = videos.value;
  for (let i = 0; i < videosArray.length; i += 3) {
    result.push(videosArray.slice(i, i + 3));
  }
  return result;
});

const fetchVideos = async () => {
  try {
    const response = await getVideosList({});
    videos.value = response;
  } catch (error) {
    console.error('Error fetching videos:', error);
  }
}

onMounted(() => {
  fetchVideos();
})

</script>

<style>
.button-row button {
  margin-left: 7vw;
  margin-bottom: 3vh;
  height: 8vh;

}

.mybutton {
  background-color: white;
  color: #0456B5;
  padding: 1vh 3vh;
  font-size: 3vh;
  cursor: pointer;
  border: none;
  color: black;
  font-weight: 400;
}

.selected {
  background-color: #0456B5;
  color: white;
  border-radius: 10vh;
}

.videos-container {
  display: flex;
  flex-direction: column;
  margin: 0 10vh;
  margin-bottom: 5vh;
}

.video-row {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.video {
  text-align: center;
  margin: 2vh;
  width: 30%;
  box-shadow: 2px 2px 2px rgb(183, 183, 183);
  margin-left: 3vh;
  cursor: pointer;
}

.single-video {
  flex-basis: 100%;
}

.video-img {
  width: 100%;
  height: auto;
}

.video p {
  font-size: 2vh;
  color: #666;
  text-align: left;
  margin: 1vh 3vh;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.video h3 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 2vh;
  margin: 1vh 2vh;
  padding: 0;
}
</style>