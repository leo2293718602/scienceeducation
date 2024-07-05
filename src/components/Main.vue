<template>
  <div><img src="../../statics/页面1/9045.png" style="width: 100%;"></div>


  <div style="padding:0vh 10vh;margin-top:5vh ;">    <!--中心动态-->
    <div style="display: flex;justify-content: space-between;">
      <div class="iconandtitle">
        <img src="../assets/UI_icon_工作动态.png">
        <a class="title">中心动态</a>
      </div>
      <div class="more">
        更多>>
      </div>
    </div>
    <div class="card">
      <div>
        <div v-for="(item,index) in CenterDynamics.slice(0,6)" :key="index" class="news">
          <img src="../assets/新闻_o.png" class="icons">
          <div class="innertitle" :class="{'active-title': selectedItemImg === item.img}" @mouseover="selectedItemImg = item.img">{{ item.title }}</div>
        </div>
      </div>
      <div>
        <img v-if="selectedItemImg" :src="selectedItemImg" :alt="selectedItemImg" style="width: 70vh;height: 38vh;margin-top: 2vh">
      </div>
    </div>
  </div>


  <div>
    123
    1
  </div>
</template>


<script lang="ts" setup name=""> 
import {  ref ,onMounted} from 'vue'
   const CenterDynamics=ref([
    {title:'国家知识产权局专利局来校开展普法宣传活动',img:'../../statics/页面1/1.png'},
    {title:'经管学院:拓展交流渠道 提升国际合作',img:'../../statics/页面1/22.png'},
    {title:'德方合作院校教授与学生交流',img:'../../statics/页面1/3.png'},
    {title:'校统一战线开展“科大同心·初心引领”研学实训活动',img:'../../statics/页面1/4.png'},
    {title:'离退休党委组织退休老干部开赴兄弟高校调研交流',img:'../../statics/页面1/5.png'},
    {title:'我校学生在2024TNF100莫干山越野跑挑战赛获亚军',img:'../../statics/页面1/6.png'},
    {title:'测试溢出',img:'../../statics/页面1/7.png'},
   ])
   const selectedItemImg = ref('');
   onMounted(() => {
  if (CenterDynamics.value.length > 0) {
    selectedItemImg.value = CenterDynamics.value[0].img; // 默认选中第一个  
  }
});
</script>

<style>
  .title{
    font-size: 4vh;
    margin-left: 2vh;
    font-weight: 400;
  }
  .iconandtitle,.more{
    display: flex; 
    align-items: center;
  }
  .more:hover{
    color: #0456B5;
    cursor: pointer;
  }
  .card{
    display: flex;justify-content: space-between;
    box-shadow: 0 0 0.5vh 0.3vh #eae9e9;
    margin-top: 2vh;
    padding: 3vh;
  }
  .news{
    display: flex;
    align-items: center;
    margin-top: 2vh;
  }
  .icons{
    margin-right: 2vh;
    height: 5vh;
    margin-left: 3vh;
  }
  .innertitle{
    font-size: 2.5vh;
  }
  .innertitle:hover{
    cursor: pointer;
  }
  .active-title {
  color: #0456B5;
}
</style>