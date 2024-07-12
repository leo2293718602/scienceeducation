<template>
  <div class="header-sticky">
    <div
      style="display: flex;justify-content: space-between;align-items: center;height: 25vh;background-color: white">
      <div style="display: flex;float: inline-start;">
        <div class="icon"><img src="../assets/标.png" alt="logo" style="height: 15vh;"></div>
        <div>
          <h1 style="font-size: 5vh;color:black;margin-top: 5vh;margin-bottom: 0;font-weight: 400;">
            浙江省中小学科学教育指导中心
          </h1>
          <h1 style="font-size: 1.5vh;color: black;margin-bottom: 5vh;font-weight: 600">
            Science Education Guidance Center for Primary and Secondary Schools in Zhejiang Province
          </h1>
        </div>
      </div>
      <div style="float: right;margin-right:10vh ">
        <input type="text" class="search">
      </div>
    </div>
    <div>
      <!-- 导航栏 -->
      <nav style="display: flex; justify-content: center; padding: 2vh 0;background-color: #0456B5;height: 7vh;">
        <ul
          style="list-style: none; display: flex; gap: 2vw; padding: 0; margin: 0;margin-left: 3vw;margin-right: 3vw;">
          <li><a class="routes" :class="{ 'selected': activePage === 'MainPage' }" @click="goToPage('MainPage')">首页</a>
          </li>
          <li><a class="routes" :class="{ 'selected': activePage === 'AboutCentrePage' }"
              @click="goToPage('AboutCentrePage')">中心简介</a></li>
          <li><a class="routes" :class="{ 'selected': activePage === 'CenterDynamicsPage' }"
            @click="goToPage('CenterDynamicsPage')">中心动态</a></li>
          <li><a class="routes" :class="{'selected':activePage==='ResearchPage'} "
            @click="goToPage('ResearchPage')">理论研究</a></li>
            <li><a class="routes" :class="{'selected':activePage==='ProjectDecPage'} "
              @click="goToPage('ProjectDecPage')">课题申报</a></li>
              <li><a class="routes" :class="{'selected':activePage==='ExpPromoPage'} "
                @click="goToPage('ExpPromoPage')">经验推广</a></li>
                <li><a class="routes" :class="{'selected':activePage==='TeacherTrianPage'} "
                  @click="goToPage('TeacherTrianPage')">师资培训</a></li>
          <li><a class="routes">成效监测</a></li>
          <li><a class="routes">共享资源</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup name="">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import router from '../router/index';
import { useStore } from 'vuex';

const activePage = ref('MainPage');
const store = useStore();
const route = useRoute();

onMounted(() => {
  const savedPage = localStorage.getItem('activePage');
  if (savedPage) {
    activePage.value = savedPage;
  }
});
watch(() => route.path, (newPath) => {
  const baseRoute = '/parent'; 
  const homeRoute = '/Main'; // 假设首页的路由是 '/'
  if (newPath.startsWith(baseRoute)) {
      activePage.value = baseRoute; // 保持 /parent 被选中
      localStorage.setItem('activePage', baseRoute);
  } else if (newPath === homeRoute) {
      activePage.value = 'MainPage'; // 假设 'HomePage' 是首页的标识
      localStorage.setItem('activePage', 'MainPage');
  }
});

function goToPage(pageName: string) {
  activePage.value = pageName;
  localStorage.setItem('activePage', pageName);
  router.push(
    {
      name: pageName
    }
  )
}
</script>

<style scoped>
.icon {
  margin: auto;
  margin-left: 10vh;
  margin-right: 2vh;
}

.search {
  width: 17vw;
  height: 6vh;
  border-radius: 6vh;
  border: 1.5px solid #383838;
  background-image: url('../assets/搜索.png');
  background-position: right 2vh center;
  background-size: 4vh;
  background-repeat: no-repeat;
  padding-right: 5vh;
  padding-left: 2vh;
  margin: auto;
  font-size: 2vh;
}

.routes {
  font-size: 2vh;
  color: black;
  text-decoration: none;
  color: white;
  font-size: 3vh;
  cursor: pointer;
}

nav {
  display: flex;
  justify-content: center;
  padding: 2vh 0;
  background-color: #0456B5;
  height: 7vh;
  width: 100%;
  margin: 0;
}

ul {
  list-style: none;
  display: flex;
  gap: 2vw;
  padding: 0;
  margin: 0;
  width: 100%;
}

li {
  flex: 1;
  text-align: center;
  margin: auto;
}

li:hover {
  font-weight: bold;
  text-decoration-color: white;
  text-decoration-thickness: 0.5vh;
  text-underline-offset: 2vh;
}

.selected {
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: white;
  text-decoration-thickness: 0.5vh;
  text-underline-offset: 2vh;
}

.header-sticky {
  position: -webkit-sticky;
  /* 为了兼容Safari */
  position: sticky;
  top: 0;
  z-index: 1000;
  /* 确保header在其他内容之上 */
}
</style>