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
        <div style="width: 80%;margin-left: 8vw">
          <div>
            <div style="display: flex;justify-content: space-between;margin-bottom: 8vh">
              <a  id="excellentCases" style="font-size: 4vh;font-weight: 600;">优秀案例</a>
              <a  class="more" style="vertical-align: center;"> 更多>></a>
            </div>
            <div>
              <div v-for="(task) in displayedTasks" :key="task.id" class="task">
                <div class="task-image">
                  <img :src="task.img" alt="Task Image">
                </div>
                <div class="task-details">
                  <h3 style="margin-bottom: 5vh;">{{ task.title }}</h3>
                  <a>{{ task.date }}</a>
                  <p class="content" style="margin-top: 8vh;">{{ task.content }}</p>
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
import { ref, computed } from 'vue';
import Bread from '../components/Bread.vue';
const tasks = ref([
  { id: '1', title: '教育部启动首批全国中小学科学教育实验区实验校建设', date: '2023-12-25', img: '../../statics/页面7/2daae0b6f67848b7b25d634ae20a6a3b.png.png', content: '教育部指出，该项目在全国范围内建设中小学科学教育实验区、实验校，在课程资源开发、教师队伍建设、教学方式变革、教育评价改革、场所场景构建、社会力量整合等重点领域和关键环节先行先试…教育部启动首批全国中小学科学教育实验区实验校建设' },
  { id: '2', title: '浙江宁波创建“4321”-工作体系 推动区域科学教育高品质发展', date: '2024-01-13', img: '../../statics/页面7/s_6.png', content: '《浙江宁波创建“4321”工作体系 推动区域科学教育高品质发展》入选全国科学教育工作优秀案例，且是浙江省唯-一个。在全国上下一体化推进教育、科技、人才高质量发展的新形势下，宁波于2023年9…1231wdadwadsadsdawdasdas' },
  { id: '3', title: '打造高质量科学教育，“科学素养提升行动”发布会在杭州市春晖小学举行', date: '2024-02-22', img: '../../statics/页面7/s_1.png', content: '设立百个实践坊，配好学校科学实验室，建设以创新拔尖人才早期发现与培养为目的的“少年工程院”，开展“小院士”“小工程师”小科学家”评选等系列活动，推进“科学实验进万家”工程，实施…dwadawdsadsadawddasd' },
  { id: '4', title: '测试翻页教育部启动首批全国中小学科学教育实验区实验校建设', date: '2023-12-25', img: '../../statics/页面7/2daae0b6f67848b7b25d634ae20a6a3b.png.png', content: '教育部指出，该项目在全国范围内建设中小学科学教育实验区、实验校，在课程资源开发、教师队伍建设、教学方式变革、教育评价改革、场所场景构建、社会力量整合等重点领域和关键环节先行先试…教育部启动首批全国中小学科学教育实验区实验校建设' },
])
const teachers = ref([
  { id: '1', name: '丁邦平', office1: '华东师范大学教授', office2: '博士生导师', office3: '科学教育研究中心主任', motto: '“教育不仅仅是传授知识，更是引导学生们发现自我、探索世界的过程。作为教师，我们的责任不仅仅是教学生们如何学习，更要教他们如何思考、如何创新。我深感自己在教育学生的过程中也在不断学习，与学生们的互动让我时刻保持着对教育事业的热情"', exp: "在我多年的教学生涯中，我深切体会到与学生的沟通是教学的关键。每个学生都是独一无二的，他们的学习方式和兴趣点各不相同。因此，我始终努力去了解每一个学生，根据他们的特点来制定教学计划和策略。通过个性化教学，我发现学生们的学习兴趣和动力得到了极大的提升。", way: "我注重培养学生的自主学习能力。在课堂上，我鼓励学生们提问、讨论，激发他们的好奇心和求知欲。同时，我也会布置一些具有挑战性的学习任务，让学生们通过自主探究来解决问题。这种教学方式不仅提高了学生们的学习效果，还培养了他们的创新思维和团队协作能力。", img: '../../statics/页面7/team-1-270x270.jpg (1).png' },
  { id: '2', name: '罗星凯', office1: '广西师范大学教授', office2: '科学教育研究所所长', office3: '博士生导师', motto: '教师是学生成长道路上的引路人。我们的一言一行都会对学生产生深远的影响。因此，我始终注重自己的师德修养和教育教学能力的提升。我相信，只有不断学习、不断进步，我们才能成为学生们心中的好老师。', exp: '在我的教学过程中，我始终坚持“寓教于乐”的原则。我认为，学习应该是一种愉快的体验，而不是一种负担。因此，我会尽量将课程内容与学生们的生活实际相结合，用生动有趣的案例来引导学生们理解知识。同时，我也会利用多种教学手段来激发学生的学习兴趣，如多媒体教学、小组讨论等。', way: '我注重培养学生的实践能力和创新思维。在教学中，我会组织一些实践活动，如实验、调查等，让学生们通过亲身体验来感受知识的力量。同时，我也会鼓励学生们提出自己的见解和想法，激发他们的创新思维。这种教学方式不仅让学生们更加深入地理解了知识，还培养了他们的实践能力和创新精神。', img: '../../statics/页面7/team-1-270x270.jpg.png' },
  { id: '3', name: '罗星凯', office1: '广西师范大学教授', office2: '科学教育研究所所长', office3: '博士生导师', motto: '教师是学生成长道路上的引路人。我们的一言一行都会对学生产生深远的影响。因此，我始终注重自己的师德修养和教育教学能力的提升。我相信，只有不断学习、不断进步，我们才能成为学生们心中的好老师。', exp: '在我的教学过程中，我始终坚持“寓教于乐”的原则。我认为，学习应该是一种愉快的体验，而不是一种负担。因此，我会尽量将课程内容与学生们的生活实际相结合，用生动有趣的案例来引导学生们理解知识。同时，我也会利用多种教学手段来激发学生的学习兴趣，如多媒体教学、小组讨论等。', way: '我注重培养学生的实践能力和创新思维。在教学中，我会组织一些实践活动，如实验、调查等，让学生们通过亲身体验来感受知识的力量。同时，我也会鼓励学生们提出自己的见解和想法，激发他们的创新思维。这种教学方式不仅让学生们更加深入地理解了知识，还培养了他们的实践能力和创新精神。', img: '../../statics/页面7/team-1-270x270.jpg.png' },
])
const displayedTasks = computed(() => {
  // 先按ID降序排序，然后取前三项
  return tasks.value
    .slice() // 创建一个数组的副本，以避免修改原始数组
    .sort((a, b) => b.id.localeCompare(a.id)) // 使用localeCompare确保字符串ID也能正确排序
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
</script>

<style scoped>


.layout {
  display: flex;

}

.sidebar {
  margin-left: 5vw;
  width: 20vw;
  /* 侧边栏宽度 */
  /* 侧边栏背景颜色 */
  display: flex;
}

.main-content {
  flex-grow: 1;
  /* 主内容区域占据剩余空间 */
}

.sidebar ul {
  list-style: none;
  /* 移除列表标记 */
  padding: 0;
  margin: 0;
  /* 确保没有默认的外边距 */
 
}

.sidebar ul li {
  display: block;
  /* 确保每个列表项是块级元素，占据一整行 */
}

.sidebar ul li a {
  display: block;
  /* 确保链接是块级元素，占据一整行 */
  text-decoration: none;
  /* 移除链接下划线 */
  width:21vh;
  font-size: 3.5vh;
  margin-bottom: 8vh;
  cursor: pointer;
}

.sidebar ul li a:hover {
  color:#0456B5;
  /* 鼠标悬停背景颜色 */
}

.task {
  display: flex;
  margin-bottom: 6vh;
}

.task-image img {
  width: 28vw;
  padding: 2vh;
  /* 调整为合适的尺寸 */
  height: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  /* 方块的宽度 */
  height: 3vh;
  /* 方块的高度 */
  background-color: #0456B5;
  /* 方块的颜色 */
  margin-right: 5px;
  /* 与标题文字之间的间距 */
  vertical-align: middle;
  /* 垂直居中 */
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
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 2vh;
  background-color: white;
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
  background-size: 80vh;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.3;
  z-index: -1;
}
</style>