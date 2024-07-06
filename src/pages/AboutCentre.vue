<template>
  <img src="../../statics/页面2/banner.png" style="width: 100%;">
  <div style="display: flex">
    <bread />
  </div>
  <div style="display: flex;">
    <h1 class="blue-bar">&thinsp;</h1>
    <h1 class="title">浙江省中小学科学教育指导中心</h1>
  </div>
  <div style="display: flex;margin-left:6vw;margin-right: 1vw;justify-content: space-between;margin-bottom: 4vh;">
    <div style="width: 60%;margin-right: 3vw;font-size:3vh;line-height:9vh;"> &emsp;&emsp; 为深入贯彻习近平总书记关于在教育“双减”中
      做好科学教育加法的重要指示精神，全面落实党的二
      十大提出的教育、科技、人才三位一体战略部署，大
      力弘扬科学精神和科学家精神，根据《教育部等十八
      部门关于加强新时代中小学科学教育工作的意见》要
      求，特设浙江省中小学科学教育指导中心。
    </div>
    <div>
      <img src="../../statics/页面2/R-C.jpg" style="width: 90%;padding-right:0vh ;">
    </div>
  </div>
  <div style="display: flex;">
    <h1 class="blue-bar">&thinsp;</h1>
    <h1 class="title">总体要求</h1>
  </div>
  <div style="margin:0 6vw;font-size: 3vh;line-height:9vh;">
    &emsp;&emsp;以习近平新时代中国特色社会主义思想为指导，聚焦立德树人根本任务，以构建大中小学一体化课程、创新人才培养和家校社协同育人三大体系为目标，统筹推进科学课程教学提质、科学教师队伍建设、创新人“十百千万”协同育人、城乡科学教育区域推进五大工程，实施实验教学“强基”、工程启蒙教才选育、育、“英才计划”扩面等系列行动，逐步形成党委政府统一领导、相关部门齐抓共管、校内校外共融共建的中小学科学教育新格局。通过3至5年努力，培育一批科学教育实验区、实验校和实验基地，涌现一批“小科学家”“小工程师”，打造一批有辨识度的科学教育特色品牌，全省中小学生的科学素养整体提升，全社会协同育人机制基本形成，科学教育在实施科教强省战略、培养创新人才中发挥重要的基础性作用。
  </div>
  <div style="display: flex;justify-content: center;margin-top: 2vh;margin-bottom: 4vh;">
    <img src="../../statics/页面2/工作原则.png">
  </div>
  <div style="display: flex;">
    <h1 class="blue-bar">&thinsp;</h1>
    <h1 class="title">主要任务</h1>
  </div>

  <!-- 第一行的三个box -->
  <div style="display: flex; justify-content: center; margin-bottom: 2vh;">
    <div class="box1">
      <h1 class="tasktitle">实施科学课程教学提质工程</h1>
      <h2 class="tasks">
        推进科学课程体系化<br>
        全面强化实验教学<br>
        深化教学评价改革<br>
        探索工程启蒙教育<br>
        提升课后服务质量</h2>
    </div>
    <div class="box1">
      <h1 class="tasktitle">实施教学教师队伍建设</h1>
      <h2 class="tasks">
        加强专业教师培养<br>
        提升科学教师素养<br>
        建设科学教育导师团队
      </h2>
    </div>
    <div class="box1">
      <h1 class="tasktitle">实施创新人才选育工程</h1>
      <h2 class="tasks">
        建设人才选拔平台<br>
        创新人才培养模式<br>
        架构人才培养体系<br>
      </h2>
    </div>
  </div>

  <!-- 第二行的两个box -->
  <div style="display: flex; justify-content: center;">
    <div class="box2">
      <h1 class="tasktitle">实施“十百千万”协同育人工程</h1>
      <h2 class="tasks">
        打造科学教育实验基地<br>
        持续推进科学家进校园<br>
        深入实施家庭科学教育</h2>
    </div>
    <div class="box2">
      <h1 class="tasktitle">实施城乡科学教育区域推进工程</h1>
      <h2 class="tasks">
        大力发展乡村科学教育<br>
        着力优化资源共享平台</h2>
    </div>
  </div>


  <div style="display: flex;margin-top: 4vh;">
    <h1 class="blue-bar">&thinsp;</h1>
    <h1 class="title">组织保障</h1>
  </div>
  <div style="display:flex;justify-content: center;margin-bottom: 3vw;">
    <div class="box3">
      <a style="font-size: 5vw;margin-left: 1.5vw;margin-right: 1vw;">·</a>
      <a style="font-size: 3vh;">加强组织领导</a>
    </div>
    <div class="box3"><a style="font-size: 5vw;margin-left: 1.5vw;margin-right: 1vw;">·</a>
      <a style="font-size: 3vh;">强化各方协同</a>
    </div>
    <div class="box3"><a style="font-size: 5vw;margin-left: 1.5vw;margin-right: 1vw;">·</a>
      <a style="font-size: 3vh;">开展监测督导</a>
    </div>
    <div class="box3"><a style="font-size: 5vw;margin-left: 1.5vw;margin-right: 1vw;">·</a>
      <a style="font-size: 3vh;">营造浓厚氛围</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Bread from '../components/Bread.vue';
</script>


<style>
h1 {
  display: flex;
  align-items: center;
  /* 确保内容垂直居中 */
}

.blue-bar {
  background-color: #0456B5;
  margin-left: 10vh;
  margin-right: 1vh;
  margin-top: 3.5vh;
  width: 1vh;
  /* 或者你想要的任何宽度 */
  height: 5vh;
  /* 与文字等高 */
}

.title {
  font-size: 5vh;
  font-weight: 500;
  line-height: 1;
  font-weight: 600;
  /* 调整行高以确保与蓝色条等高 */
}

.box1 {
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0.5vh 0.3vh #eae9e9;
  margin-top: 3vh;
  margin-left: 2vh;
  /* 减少左右间距 */
  margin-right: 2vh;
  padding: 3vh;
  width: 25vw;
  height: 23vw;
}

.box2 {
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0.5vh 0.3vh #eae9e9;
  margin: 2vh 2vh;
  /* 减少左右间距 */
  padding: 3vh;
  width: 32vw;
  height: 16vw;
}

.tasktitle {
  margin: 0 auto;
  font-size: 4vh
}


.tasks {
  word-break: normal;
  margin: 3vh auto;
  color: #616060;
  font-weight: 400;
  font-size: 3.5vh;
  line-height: 7.5vh;
}

.box3 {
  display: flex;
  align-items: center;
  box-shadow: 0 0 0.5vh 0.3vh #eae9e9;
  margin: 2vh 5vh;
  /* 减少左右间距 */
  padding: 3vh;
  width: 15vw;
  height: 6vh;
  border-radius: 2vh
}
</style>