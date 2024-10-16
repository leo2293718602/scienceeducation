<template>
  <div><img src="../../statics/页面1/9045.png" style="width: 100%;"></div>
  <div style="padding:0 10vh;">
    <div> <!--中心动态-->
      <div style="display: flex;justify-content: space-between;margin-top: 3vh">
        <div class="iconandtitle">
          <img src="../assets/UI_icon_工作动态.png" style="height: 8vh;">
          <a class="title" @click="goToPage('CenterDynamicsPage')">中心动态</a>
        </div>
        <div class="more">
          更多>>
        </div>
      </div>
      <div class="card">
        <div>
          <div v-for="(item, index) in CenterDynamics.slice(0, 6)" :key="index" class="news">
            <img src="../assets/新闻_o.png" class="icons">
            <div class="innertitle" :class="{ 'active-title': selectedItemImg === item.img }"
              @mouseover="selectedItemImg = item.img">{{ item.title }}</div>
          </div>
        </div>
        <div>
          <img v-if="selectedItemImg" :src="selectedItemImg" :alt="selectedItemImg"
            style="width: 70vh;height: 38vh;margin-top: 2vh">
        </div>
      </div>
    </div>


    <div style="display:flex;justify-content: space-between;"> <!--信息发布+业务平台-->
      <div>
        <div style="display: flex;justify-content: space-between;width: 53vw;"> <!--信息发布-->
          <div class="iconandtitle">
            <img src="../assets/打开信息.png" style="height: 8vh;">
            <a class="title">信息发布</a>
          </div>
          <div class="more">
            更多>>
          </div>
        </div>
        <div>
          <div class="card" style="width: 50vw;display: flex;flex-direction:column;">
            <div v-for="(item, index) in Release.slice(0, 7)" :key="index" class="news"
              style="display: flex; justify-content: space-between; align-items: center;">
              <div style="display: flex; align-items: center;">
                <h1 style="margin:0 2vh 0 1vh;color: #0456B5">·</h1>
                <div class="innertitle" style="margin:0;">{{ item.title }}
                </div>
              </div>
              <a style="margin-right: 1vw;color:#A6A6A6;font-size: 2.5vh;">{{ item.date }}</a>
            </div>
          </div>
        </div>
      </div>

      <div style="width: 57vh;margin-left: 3vh;"> <!--业务平台-->
        <div class="iconandtitle" style="margin-left: 13vh">
          <img src="../assets/快速部署.png" style="height: 8vh;">
          <a class="title">业务平台</a>
        </div>
        <div class="card"
          style="display: flex; flex-direction:row; align-items: center; justify-content: center;margin-top: 2vh;">
          <img src="../assets/数据检测.png">
          <a class="innertitle" style="margin-left:5vh;font-size:3vh;font-weight: 500">科学教育成效检测平台</a>
        </div>
        <div class="card"
          style="display: flex; flex-direction:row; align-items: center; justify-content: center;margin-top: 2.5vh;">
          <img src="../assets/资源平台-资源共享.png">
          <a class="innertitle" style="margin-left:5vh;font-size:3vh;font-weight: 500">科学教育资源共享平台</a>
        </div>
        <div class="card"
          style="display: flex; flex-direction:row; align-items: center; justify-content: center;margin-top: 2.5vh;">
          <img src="../assets/项目1.png">
          <a class="innertitle" style="margin-left:5vh;font-size:3vh;font-weight: 500">科学教育项目申报平台</a>
        </div>
      </div>
    </div>


    <div style="margin-top: 3vh;"> <!--优秀案例-->
      <div style="display: flex;justify-content: space-between;">
        <div class="iconandtitle">
          <img src="../assets/案例.png" style="height: 8vh;">
          <a class="title">优秀案例</a>
        </div>
        <div class="more">
          更多>>
        </div>
      </div>
      <div style="display: flex; width: 100%; justify-content: space-between; margin-top: 3vh;margin-bottom: 6vh;">
        <div v-for="(caseItem, index) in GreatCases.slice(0, 3)" :key="index"
          :style="{ flex: '1', marginRight: index < 2 ? '2%' : '0', boxSizing: 'border-box', padding: '20px', margin: '10px', backgroundColor: '#fff', boxShadow: '1px 2px 2px 1.5px rgb(183, 183, 183)' }">
          <div style="position: relative; width: 100%; padding-top: 80%;">
            <img :src="caseItem.img" :alt="caseItem.title"
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div style="display: flex;justify-content: center;margin-top: 3vh;">
            <a style="background-color: #0456B5;height: 2.5vh;margin-top: 0.5vh;width: 0.5vh;margin-right: 1.5vh;margin-left: 1vh;">&#8194;</a>
            <h3 class="innertitle" style="text-align:left;">
            {{ caseItem.title }}
            </h3>
          </div>
          <p style="margin-left: 1vh;color: #A6A6A6;font-size: 2.5vh">{{ caseItem.date }}</p>
        </div>
      </div>
    </div>
  </div>
  <div>

  </div>
</template>


<script lang="ts" setup name="MainPage">
import { ref, onMounted } from 'vue';
import router from '../router/index';
import { getCenterdynamicsList, getGreatcasesList, getReleaseList } from '../api/article';

const CenterDynamics = ref([{ img:'', title: '', date: '' }]);
const Release = ref([{ img: '', title: '', date: '' }]);
const GreatCases = ref([{ img: '', title: '', date: '' }]);
const selectedItemImg = ref('');


const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
        month: '2-digit',
        day: '2-digit'
    });
};
const fetchCenterDynamics = async () => {
    try {
        const res = await getCenterdynamicsList({});
        CenterDynamics.value = res.map((item: any) => ({
            ...item,
            date: formatDate(item.date)
        }));
        console.log('CenterDynamics:', CenterDynamics.value);
    } catch (error) {
        console.error('Error fetching Center Dynamics:', error);
    }
};

const fetchRelease = async () => {
    try {
        const res = await getReleaseList({});
        Release.value = res.map((item: any) => ({
            ...item,
            date: formatDate(item.date)
        }));
    } catch (error) {
        console.error('Error fetching Release:', error);
    }
};

const fetchGreatCases = async () => {
    try {
        const res = await getGreatcasesList({});
        GreatCases.value = res.map((item: any) => ({
            ...item,
            date: formatDate(item.date)
        }));
    } catch (error) {
        console.error('Error fetching Great Cases:', error);
    }
};

onMounted(() => {
    fetchCenterDynamics();
    fetchRelease();
    fetchGreatCases();
    if (CenterDynamics.value.length > 0) {
        selectedItemImg.value = CenterDynamics.value[0].img; // 默认选中第一个  
    }
});

function goToPage(pageName: string) {
    router.push({
        name: pageName
    });
}
</script>

<style scoped>
.title {
  font-size: 5vh;
  margin-left: 2vh;
  font-weight: 400;
  cursor: pointer;
}

.title:hover {
  color: #0456B5;
}

.iconandtitle,
.more {
  display: flex;
  align-items: center;
  margin-top: 5vh;
  font-size: 1.5vh
}

.more:hover {
  color: #0456B5;
  cursor: pointer;
}

.card {
  display: flex;
  justify-content: space-between;
  margin-top: 2vh;
  padding: 3vh;
  border: 0.1vh solid #F5F5F5;
  box-shadow:1px 2px 2px 1.5px rgb(183, 183, 183);
}

.news {
  display: flex;
  align-items: center;
  margin-top: 2vh;
}

.icons {
  margin-right: 2vh;
  height: 5vh;
  margin-left: 0.8vw;
}

.innertitle {
  font-size: 2.5vh;
}

.innertitle:hover {
  cursor: pointer;
  color: #0456B5;
}

.active-title {
  color: #0456B5;
}
</style>