<template>
  <div>
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
  </div>
  <div class="videos-container">
    <div class="video-row" v-for="(chunk, index) in chunkedVideos" :key="index">
      <div class="video" v-for="video in chunk" :key="video.id">
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

<script lang="ts" setup>
import { ref, computed } from 'vue';

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
const videos = ref([
  { id: 1, date: '2024-1-1', title: '【说课】科教版三年级下《茧种钻出了dasdsadasdsadasd...dadwdzDsada》', watched: 251, liked: 15, content: '本视频是关于视频是关于科视频关于科视频是v是关于科科教版三年级下《茧种钻dasdsadasdasdsadaasddasdsadasdsadsadsaas出了..dsadsada.dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '../../statics/页面9/page9-1.png' },
  { id: 2, date: '2024-1-12', title: '【说课】科教版三年级下《茧种钻出了...dadwdzDsada》', watched: 123, liked: 5, content: '本视频是关于科教版三年级下《茧种钻出了dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '../../statics/页面9/page9-2.png' },
  { id: 3, date: '2024-1-11', title: '【说课】科教版三年级下《茧种钻出了...dadwdzDsada》rwredasdasdasdaswrewrwe', watched: 121, liked: 1521, content: '本视频是关于科教版三年级下《茧种钻出了...dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '../../statics/页面9/page9-3.png' },
  { id: 4, date: '2024-1-9', title: '【说课】科教版三年级下《茧种钻出了...dadwdzDsada》', watched: 232151, liked: 152, content: '本视频是关于科教版三年级下《茧种钻出了...dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '../../statics/页面9/page9-4.png' },
  { id: 5, date: '2024-1-8', title: '【说课】科教版三年级下《茧种钻出了...dadwdzDsada》', watched: 23251, liked: 1532312, content: '本视频是关于科教版三年级下《茧种钻出了...dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '../../statics/页面9/page9-5.png' },
  { id: 6, date: '2024-1-7', title: '【说课】科教版三年级下《茧种钻出了...dadwdzDsada》', watched: 23231, liked: 15321, content: '本视频是关于科教版三年级下《茧种钻出了...dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '../../statics/页面9/page9-6.png' },
  { id: 7, date: '2024-1-6', title: '【说课】科教版三年级下《茧种钻出了...dadwdzDsada》', watched: 251, liked: 1, content: '本视频是关于科教版三年级下《茧种钻出了...dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '../../statics/页面9/page9-7.png' },
  { id: 8, date: '2024-1-5', title: '【说课】科教版三年级下《茧种钻出了...dadwdzDsada》', watched: 2251, liked: 112, content: '本视频是关于科教版三年级下《茧种钻出了...dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '../../statics/页面9/page9-8.png' },
  { id: 9, date: '2024-1-4', title: '【说课】科教版三年级下《茧种钻出了...dadwdzDsada》', watched: 2351, liked: 1325, content: '本视频是关于科教版三年级下《茧种钻出了...dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '../../statics/页面9/page9-9.png' },
  { id: 10, date: '2024-1-3', title: '【说课】科教版三年级下《茧种钻出了...dadwdzDsada》', watched: 1, liked: 1533, content: '本视频是关于科教版三年级下《茧种钻出了...dadwdzDsada》的说课视频，由北京市海淀区清华附小的李老师为大家讲解。', img: '../../statics/页面9/page9-1.png' },
])
const chunkedVideos = computed(() => {
  const result = [];
  const videosArray = videos.value;
  for (let i = 0; i < videosArray.length; i += 3) {
    result.push(videosArray.slice(i, i + 3));
  }
  return result;
});

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
  /* 默认左对齐 */
  margin-bottom: 20px;
}

.video {
  text-align: center;
  margin: 2vh;
  width: 30%;
  box-shadow: 0 0 1vh 0.3vh #eae9e9;
  margin-left: 3vh;
  cursor: pointer;
}

.single-video {
  flex-basis: 100%;
  /* 如果只有一个视频，占满整行 */
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
  /* 防止文本换行 */
  overflow: hidden;
  /* 隐藏超出容器的内容 */
  text-overflow: ellipsis;
  /* 超出部分显示... */
  font-size: 2vh;
  /* 或者其他适合的字体大小 */
  margin: 1vh 2vh;
  /* 根据需要调整 */
  padding: 0;
  /* 根据需要调整 */
}
</style>