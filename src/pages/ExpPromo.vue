<template>
  <div class="background-layer"></div>
  <img src="../../statics/页面4/分组 1 (1).png" style="width: 100%;">
  <div style="display: flex;">
    <Bread />
  </div>
  <div class="layout">
    <div class="sidebar">
      <!-- 侧边栏内容 -->
      <nav>
        <ul>
          <li><a class="has-triangle"  @click.prevent="scrollToCenter('excellentCases')">▶ &nbsp;优秀案例</a></li>
          <li><a class="has-triangle" @click.prevent="scrollToCenter('teachingExperience')">▶ &nbsp;教学心得</a></li>
        </ul>
      </nav>
    </div>
    <div class="main-content">
      <!-- 主内容区域 -->
      <div style="display: flex;margin-left: 0">
        <div style="width: 90%;margin-left: 8vw">
          <div>
            <div style="display: flex;justify-content: space-between;margin-bottom: 8vh">
              <a  id="excellentCases" style="font-size: 4vh;font-weight: 600;">优秀案例</a>
              <a  class="more" style="vertical-align: center;"> 更多>></a>
            </div>
            <div>
              <div v-for="(GreatCase) in displayedGreatCases" :key="GreatCase.id" class="task">
                <div class="task-image">
                  <img :src="GreatCase.img" alt="Task Image">
                </div>
                <div class="task-details">
                  <h3 style="margin-bottom: 5vh;">{{ GreatCase.title }}</h3>
                  <a>{{ GreatCase.date }}</a>
                  <p class="content" style="margin-top: 8vh;">{{ GreatCase.text }}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style="display: flex;justify-content: space-between;margin-bottom: 8vh">
              <a id="teachingExperience" style="font-size: 4vh;font-weight: 600;">教学心得</a>
              <a class="more" style="vertical-align: center;"> 更多>></a>
            </div>
            <div class="teachers" style="margin-bottom:10vh;">
              <div v-for="teacher in displayedTeachers" :key="teacher.id" class="teacher">
                <div class="teacher-info">
                  <img :src="teacher.img" alt="头像" class="teacher-avatar" />
                  <div class="teacher-details">
                    <h2>{{ teacher.name }}</h2>
                    <h3>{{ teacher.office1 }}</h3>
                    <h3>{{ teacher.office2 }}</h3>
                    <h3>{{ teacher.office3 }}</h3>
                  </div>
                  <div>
                    <p class="teacher-motto" style="line-height: 5vh;font-size: 2vh">{{ teacher.motto }}</p>
                  </div>
                </div>
                <div style="display: flex;justify-content:center;flex-wrap: wrap;">
                  <h1 style="margin-right: 52vw;">教学经验:</h1>
                  <p class="teacher-exp" style="font-size: 3vh;line-height: 6vh;">{{ teacher.exp }}</p>
                  <h1 style="margin-right: 55vw;">策略:</h1>
                  <p class="teacher-way" style="font-size: 3vh;line-height: 6vh;">{{ teacher.way }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="">
import { ref, computed, onMounted } from 'vue';
import Bread from '../components/Bread.vue';
import {getGreatcasesList, getTeacherList } from '../api/article';
const GreatCases = ref([{id: 0, title: '', date: '', text: '', img: ''}]);
const teachers = ref([{id: 0, name: '', img: '', office1: '', office2: '', office3: '', motto: '', exp: '', way: ''}]);
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', {
    month: '2-digit',
    day: '2-digit',
  });
}

const displayedGreatCases = computed(() => {
  // 先按ID降序排序，然后取前三项
  return GreatCases.value
    .slice() // 创建一个数组的副本，以避免修改原始数组
    .sort((a, b) => b.id - a.id) // 使用数值比较确保ID正确排序
    .slice(0, 3);
});

const displayedTeachers = computed(() => {
  return teachers.value.slice(0, 2);
})

function scrollToCenter(id: string) {
  const element = document.getElementById(id);
  if (element) {
        // 计算元素距离文档顶部的距离
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        // 计算元素的中心位置应该在视窗的哪里
        const elementCenter = elementTop - (window.innerHeight / 2) + (element.offsetHeight / 2)+100;
        // 平滑滚动到计算出的位置
        window.scrollTo({ top: elementCenter, behavior: 'smooth' });
      }
}
const fetchGreatcases = async() =>{
try {
  const res = await getGreatcasesList({});
  GreatCases.value = res.map((item: any) => ({
    ...item,
    date: formatDate(item.date),
  }));
}
catch (error) {
  console.error('Error fetching GreatCases:', error);
}
}

const fetchTeachers = async() =>{
try {
  const res = await getTeacherList({});
  teachers.value = res.map((item: any) => ({
    ...item,
  }));
}
catch (error) {
  console.error('Error fetching Teachers:', error);
}
}

onMounted(() => {
  fetchGreatcases();
  fetchTeachers();
})
</script>

<style scoped>


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
  width:21vh;
  font-size: 3.5vh;
  margin-bottom: 8vh;
  cursor: pointer;
}

.sidebar ul li a:hover {
  color:#0456B5;
}

.task {
  display: flex;
  margin-bottom: 6vh;
}

.task-image img {
  width: 28vw;
  padding: 2vh;
  height: auto;
  box-shadow: 2px 2px 2px rgb(183, 183, 183);
  background-color: white;
}

.task-details {
  margin-left: 20px;
}

.task-details h3,
.task-details p {
  margin: 0;
}

.task-details h3 {
  font-size: 3vh;
  font-weight: 600;
}

.content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  line-height: 5vh;
}

.task-details h3::before {
  content: "";
  display: inline-block;
  width: 0.5vh;
  height: 3vh;
  background-color: #0456B5;
  margin-right: 5px;
  vertical-align: middle;
}

.task-details a {
  font-size: 2vh;
  color: #666;
}

.content {
  font-size: 2vh;
  color: black;
}

.teachers {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  
}

.teacher {
  padding: 10px;
  margin-bottom: 2vh;
  background-color: white;
  box-shadow: 1px 2px 2px 2px rgb(183, 183, 183);
}

.teacher-info {
  display: flex;
  align-items: center;
}

.teacher-avatar {
  width: 25vh;
}

.teacher-details {
  margin-left: 3vh;
  width: 40vw;
}

.teacher-motto,
.teacher-exp,
.teacher-way {
  margin-top: 10px;
  width: 95%;
}

.teacher-details h3 {
  font-size: 2vh;
  font-weight: 400;
}

.teacher-details h2 {
  font-size: 3.5vh;
  font-weight: 600;
}
.more:hover{
  color:#0456B5;
  cursor: pointer;
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
</style>