<template>
  <div><img src="../../statics/页面1/9045.png" style="width: 100%;"></div>
  <div style="padding:0 10vh;">
    <div> <!--中心动态-->
      <div style="display: flex;justify-content: space-between;">
        <div class="iconandtitle">
          <img src="../assets/UI_icon_工作动态.png">
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
            <img src="../assets/打开信息.png">
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
              <a style="margin-right: 1vh;color:#A6A6A6">{{ item.date }}</a>
            </div>
          </div>
        </div>
      </div>

      <div style="width: 57vh;margin-left: 3vh;"> <!--业务平台-->
        <div class="iconandtitle" style="margin-left: 13vh">
          <img src="../assets/快速部署.png">
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
      <img src="../assets/案例.png">
      <a class="title">优秀案例</a>
    </div>
    <div class="more">
      更多>>
    </div>
  </div>
  <div style="display: flex; width: 100%; justify-content: space-between; margin-top: 3vh;margin-bottom: 6vh;">
  <div v-for="(caseItem, index) in GreatCases.slice(0, 3)" :key="index"
    :style="{ flex: '1', marginRight: index < 2 ? '2%' : '0', boxSizing: 'border-box', padding: '20px', margin: '10px', backgroundColor: '#fff', boxShadow: '0 4px 4px rgba(0,0,0,0.1)' }">
    <div style="position: relative; width: 100%; padding-top: 80%;"><!-- 保持方形 -->
      <img :src="caseItem.img" :alt="caseItem.title"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
    </div>
    <h3 class="innertitle" style="text-align:center;">
      <a style="background-color: #0456B5">&#8194;</a><a>&#8194</a>{{ caseItem.title }}</h3>
    <p style="margin-left: 2vh;color: #A6A6A6;">{{ caseItem.date }}</p>
  </div>
</div>
</div>
  </div>
  <div>
    
  </div>
</template>


<script lang="ts" setup name="MainPage">
import { it } from 'node:test';
import { ref, onMounted } from 'vue'
import router from '../router/index'
const CenterDynamics = ref([
  { title: '国家知识产权局专利局来校开展普法宣传活动', img: '../../statics/页面1/1.png' },
  { title: '经管学院:拓展交流渠道 提升国际合作', img: '../../statics/页面1/22.png' },
  { title: '德方合作院校教授与学生交流', img: '../../statics/页面1/3.png' },
  { title: '校统一战线开展“科大同心·初心引领”研学实训活动', img: '../../statics/页面1/4.png' },
  { title: '离退休党委组织退休老干部开赴兄弟高校调研交流', img: '../../statics/页面1/5.png' },
  { title: '我校学生在2024TNF100莫干山越野跑挑战赛获亚军', img: '../../statics/页面1/6.png' },
  { title: '测试溢出', img: '../../statics/页面1/7.png' },
])
const Release = ref([
  { title: '浙江省委省政府印发《浙江省深化新时代教育...', date: '09-02' },
  { title: '浙江省发展和改革委员会 浙江省教育厅关于印...', date: '06-28' },
  { title: '浙江省教育厅等十四部门关于加强新时代中小...', date: '01-23' },
  { title: '扎实推动《基础教育课程教学改革深化行动方...', date: '04-26' },
  { title: '浙江省教育厅等九部门关于进一步做好义务教...', date: '08-26' },
  { title: '浙江省委省政府印发《浙江省深化新时代教育...', date: '09-02' },
  { title: '浙江省教育厅等十四部门关于加强新时代中小...', date: '01-23' },
])
const GreatCases = ref([
  { title: '教育部启动首批全国中小学科学教育实验区实验校建设', date: '2023-12-25', img: '../../statics/页面1/2.png' },
  { title: '浙江宁波创建“4321”工作体系 推动区域科学教育高品质发展', date: '2024-01-23', img: '../../statics/页面1/4.webp' },
  { title: '打造高质量科学教育，“科学素养提升行动发布会在杭州市春晖小学举行', date: '2024-02-22', img: '../../statics/页面1/5.jpg' },

])
const selectedItemImg = ref('');
onMounted(() => {
  if (CenterDynamics.value.length > 0) {
    selectedItemImg.value = CenterDynamics.value[0].img; // 默认选中第一个  
  }
});

function goToPage(pageName: string) {
  router.push(
    {
      name: pageName
    }
  )
}
</script>

<style>
.title {
  font-size: 4vh;
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
}

.more:hover {
  color: #0456B5;
  cursor: pointer;
}

.card {
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 0.5vh 0.3vh #eae9e9;
  margin-top: 2vh;
  padding: 3vh;
}

.news {
  display: flex;
  align-items: center;
  margin-top: 2vh;
}

.icons {
  margin-right: 2vh;
  height: 5vh;
  margin-left: 3vh;
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