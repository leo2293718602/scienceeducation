<template>
  <div class="background-layer"></div>
  <img src="/statics/页面11/图片 (2).png" style="width: 100%;">
  <div style="display: flex;">
    <Bread />
  </div>
  <div class="layout">
    <div class="sidebar">
      <nav>
        <ul>
          <li v-for="(menu, index) in menus" :key="index" @click="toggleMenu(index)">
            <a :class="{'triangle-right': !menu.isOpen, 'triangle-down': menu.isOpen}"> &nbsp;{{ menu.title }}</a>
            <ul v-if="menu.isOpen">
              <li v-for="(child, childIndex) in menu.children" :key="`child-${childIndex}`">
                {{ child.title }}
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <div class="main-content">
      <div>
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <div style="display: flex; align-items: center;">
              <img src="/statics/页面11/page11-29.png" style="height: 10vh;">
              <a style="font-size: 4vh; margin-left: 10px;">党史学习</a>
            </div>
            <div>
              <a style="font-size: 2vh;">更多 >></a>
            </div>
          </div>
          <div>
            <div style="display: flex; align-items: stretch;margin-top: 3vh">
              <div><img src="/statics/页面11/page11-30.png" style="height:38vh; object-fit: cover;"></div>
              <div style="display: flex; flex-direction: column; justify-content: space-between;margin-left: 2vh;">
                <div style="display: flex; justify-content: flex-start;">
                  <div><img src="/statics/页面11/page11-28.png"></div>
                  <div style="max-width: 70%; word-wrap: break-word; margin-left: 10px;"> <!-- 调整这里的margin-left来控制距离 -->
                    <h3>“八一建军节”的由来</h3>
                    <h4 class="grey">为什么将8月1日定为建军节呢?原来是因为1927年的8月1日发生了这件事</h4>
                  </div>
                </div>
                <div style="display: flex; justify-content: flex-start;">
                  <div><img src="/statics/页面11/page11-27.png"></div>
                  <div style="max-width: 70%; word-wrap: break-word; margin-left: 10px;">
                    <h3>1949年:新中国成立</h3>
                    <h4 class="grey">1949年10月1日，开国大典在北京的天安门广场隆重举行。毛泽东向全世界庄严宣告:中华人民共和国成立了!这标志着中国人民从此..</h4>
                  </div>
                </div>
                <div style="display: flex; justify-content: flex-start;">
                  <div><img src="/statics/页面11/page11-26.png"></div>
                  <div style="max-width: 70%; word-wrap: break-word; margin-left: 10px;">
                    <h3>“两弹一星”先进群体:勇攀高峰 功勋卓著</h3>
                    <h4 class="grey">百年先锋之“两弹一星”先进群体永攀高峰功勋卓著</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: 3vh;">
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <div style="display: flex; align-items: center;">
              <img src="/statics/页面11/page11-25.png" style="height: 10vh;">
              <a style="font-size: 4vh; margin-left: 10px;">爱国主义</a>
            </div>
            <div>
              <a style="font-size: 2vh;">更多 >></a>
            </div>
          </div>
          <div>
            <div style="display: flex; align-items: stretch;margin-top: 3vh">
              <div><img src="/statics/页面11/page11-24.png" style="height:38vh; object-fit: cover;"></div>
              <div style="display: flex; flex-direction: column; justify-content: space-between;margin-left: 2vh;">
                <div style="display: flex; justify-content: flex-start;">
                  <div><img src="/statics/页面11/page11-23.png"></div>
                  <div style="max-width: 70%; word-wrap: break-word; margin-left: 10px;"> <!-- 调整这里的margin-left来控制距离 -->
                    <h3>第一集 初心与使命系列:建党伟业</h3>
                    <h4 class="grey">1919年巴黎和会给中国带来的外交屈辱激发了青年学生大规模的爱国运动--五四运动。五四运动以彻底反帝反封建的革命性，追求救…</h4>
                  </div>
                </div>
                <div style="display: flex; justify-content: flex-start;">
                  <div><img src="/statics/页面11/page11-22.png"></div>
                  <div style="max-width: 70%; word-wrap: break-word; margin-left: 10px;">
                    <h3>如何理解中国特色社会主义进入了新时代?</h3>
                    <h4 class="grey">进入新时代对于我们有什么意义呢?</h4>
                  </div>
                </div>
                <div style="display: flex; justify-content: flex-start;">
                  <div><img src="/statics/页面11/page11-21.png" style="margin-top: 1.6vh;"></div>
                  <div style="max-width: 70%; word-wrap: break-word; margin-left: 10px;">
                    <h3>2021时代楷模 第一期 漳州110</h3>
                    <h4 class="grey">福建省“漳州110”，全称为“福建省漳州市公安局巡特警支队直属大队”。多年来，“漳州110”始终牢记习近平总书记“人民的保护.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: 3vh;">
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <div style="display: flex; align-items: center;">
              <img src="/statics/页面11/page11-20.png" style="height: 10vh;">
              <a style="font-size: 4vh; margin-left: 10px;">品德教育</a>
            </div>
            <div>
              <a style="font-size: 2vh;">更多 >></a>
            </div>
          </div>
          <div>
            <div style="display: flex; align-items: stretch;margin-top: 3vh">
              <div><img src="/statics/页面11/page11-19.png" style="height:38vh; object-fit: cover;"></div>
              <div style="display: flex; flex-direction: column; justify-content: space-between;margin-left: 2vh;">
                <div style="display: flex; justify-content: flex-start;">
                  <div><img src="/statics/页面11/page11-18.png"></div>
                  <div style="max-width: 70%; word-wrap: break-word; margin-left: 10px;"> <!-- 调整这里的margin-left来控制距离 -->
                    <h3>2023开学第一课</h3>
                    <h4 class="grey">从汇聚文明瑰宝的国家版本馆到记录人民空军奋斗史的航博馆，从“双世遗”武夷山国家公园到江苏镇江现代化农场，从位于世界屋脊..</h4>
                  </div>
                </div>
                <div style="display: flex; justify-content: flex-start;">
                  <div><img src="/statics/页面11/page11-17.png"></div>
                  <div style="max-width: 70%; word-wrap: break-word; margin-left: 10px;">
                    <h3>礼赞最美奋斗者</h3>
                    <h4 class="grey">我们永远不会忘记那一天--1949年10月1日，中华民族从此开启了实现伟大复兴的历史新纪元。70年风雨兼程，70年沧桑巨变，回首.</h4>
                  </div>
                </div>
                <div style="display: flex; justify-content: flex-start;">
                  <div><img src="/statics/页面11/page11-16.png"></div>
                  <div style="max-width: 70%; word-wrap: break-word; margin-left: 10px;">
                    <h3>走出诚信的危机--诚信的理念与实践</h3>
                    <h4 class="grey">“无论在什么样的岗位上，都应该有责任和担当</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: 3vh;">
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <div style="display: flex; align-items: center;">
              <img src="/statics/页面11/page11-15.png" style="height: 10vh;">
              <a style="font-size: 4vh; margin-left: 10px;">传统优秀文化</a>
            </div>
            <div>
              <a style="font-size: 2vh;">更多 >></a>
            </div>
          </div>
          <div>
            <div style="display: flex; align-items: stretch;margin-top: 3vh">
              <div><img src="/statics/页面11/page11-14.png" style="height:38vh; object-fit: cover;"></div>
              <div style="display: flex; flex-direction: column; justify-content: space-between;margin-left: 2vh;">
                <div style="display: flex; justify-content: flex-start;">
                  <div><img src="/statics/页面11/page11-13.png"></div>
                  <div style="max-width: 70%; word-wrap: break-word; margin-left: 10px;"> <!-- 调整这里的margin-left来控制距离 -->
                    <h3>其作始也简，其将毕也必巨</h3>
                    <h4 class="grey">原典:其作始也简，其将毕也必巨。出处及释义:这句话出自《庄子·内篇·人间世》，“作始”是开头的时候，“将毕”就是快结束.</h4>
                  </div>
                </div>
                <div style="display: flex; justify-content: flex-start;">
                  <div><img src="/statics/页面11/page11-12.png"></div>
                  <div style="max-width: 70%; word-wrap: break-word; margin-left: 10px;">
                    <h3>《论语》的永恒启示</h3>
                    <h4 class="grey">《论语》系列视频之一</h4>
                  </div>
                </div>
                <div style="display: flex; justify-content: flex-start;">
                  <div><img src="/statics/页面11/page11-11.png"></div>
                  <div style="max-width: 70%; word-wrap: break-word; margin-left: 10px;">
                    <h3>《诗经》及其六义</h3>
                    <h4 class="grey">《诗经》系列视频之一</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: 3vh;">
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <div style="display: flex; align-items: center;">
              <img src="/statics/页面11/page11-9.png" style="height: 10vh;">
              <a style="font-size: 4vh; margin-left: 10px;">心理健康</a>
            </div>
            <div>
              <a style="font-size: 2vh;">更多 >></a>
            </div>
          </div>
          <div>
            <div style="display: flex; align-items: stretch;margin-top: 3vh">
              <div><img src="/statics/页面11/page11-10.png" style="height:38vh; object-fit: cover;"></div>
              <div style="display: flex; flex-direction: column; justify-content: space-between;margin-left: 2vh;">
                <div style="display: flex; justify-content: flex-start;">
                  <div><img src="/statics/页面11/page11-8.png"></div>
                  <div style="max-width: 70%; word-wrap: break-word; margin-left: 10px;"> <!-- 调整这里的margin-left来控制距离 -->
                    <h3>积极应对考试焦虑</h3>
                    <h4 class="grey">一起来了解应对考试焦虑的方法</h4>
                  </div>
                </div>
                <div style="display: flex; justify-content: flex-start;">
                  <div><img src="/statics/页面11/page11-7.png"></div>
                  <div style="max-width: 70%; word-wrap: break-word; margin-left: 10px;">
                    <h3>实验视频</h3>
                    <h4 class="grey">如何做到心安神定?</h4>
                  </div>
                </div>
                <div style="display: flex; justify-content: flex-start;">
                  <div><img src="/statics/页面11/page11-6.png"></div>
                  <div style="max-width: 70%; word-wrap: break-word; margin-left: 10px;">
                    <h3>激活学习动力，遇见全新的自己</h3>
                    <h4 class="grey">制定有效计划，让学习生活规律而有趣</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: 3vh;margin-bottom: 9vh;">
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <div style="display: flex; align-items: center;">
              <img src="/statics/页面11/page11-5.png" style="height: 10vh;">
              <a style="font-size: 4vh; margin-left: 10px;">生态文明</a>
            </div>
            <div>
              <a style="font-size: 2vh;">更多 >></a>
            </div>
          </div>
          <div>
            <div style="display: flex; align-items: stretch;margin-top: 3vh">
              <div><img src="/statics/页面11/page11-4.png" style="height:38vh; object-fit: cover;"></div>
              <div style="display: flex; flex-direction: column; justify-content: space-between;margin-left: 2vh;">
                <div style="display: flex; justify-content: flex-start;">
                  <div><img src="/statics/页面11/page11-3.png"></div>
                  <div style="max-width: 70%; word-wrap: break-word; margin-left: 10px;"> <!-- 调整这里的margin-left来控制距离 -->
                    <h3>毛主席:“还是修补修补吧”</h3>
                    <h4 class="grey">“不论我们国家发展到什么水平，不论人民生活改善到什么地步，艰苦奋斗、勤俭节约的思想永远不能丢。艰苦奋斗、勤俭节约,不仅是..</h4>
                  </div>
                </div>
                <div style="display: flex; justify-content: flex-start;">
                  <div><img src="/statics/页面11/page11-1.png"></div>
                  <div style="max-width: 70%; word-wrap: break-word; margin-left: 10px;">
                    <h3>绿色节俭看冬奥(一)</h3>
                    <h4 class="grey">位于国家奥林匹克体育中心南侧的北京冬奥村，包括运行区、居住区、广场区三大功能区域。从北京冬奥村北门入内，右手边即是运…</h4>
                  </div>
                </div>
                <div style="display: flex; justify-content: flex-start;">
                  <div><img src="/statics/页面11/page11-2.png"></div>
                  <div style="max-width: 70%; word-wrap: break-word; margin-left: 10px;">
                    <h3>我有一个海洋梦</h3>
                    <h4 class="grey">海洋教育专题系列课程</h4>
                  </div>
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
import { ref } from 'vue';
import Bread from '../components/Bread.vue';
const menus = ref([
  {
    title: '教学资源',
    isOpen: true,
    children: [
      { title: '德育' },
      { title: '课程教学' },
      { title: '体育' },
      { title: '美育' },
      { title: '劳动教育' },
      { title: '课后服务' },
      { title: '教师研修' },
      { title: '家庭教育' },
      { title: '教改经验' },
      { title: '教材' },
    ],
  },
  {
    title: '科研资源',
    isOpen: false,
    children: [
      { title: '论文发表' },
      { title: '科研项目' },
    ],
  },
  {
    title: '专业发展',
    isOpen: false,
    children: [
      { title: '论文发表' },
      { title: '科研项目' },
    ],
  },
  {
    title: '社会资源',
    isOpen: false,
    children: [
      { title: '论文发表' },
      { title: '科研项目' },
    ],
  },
 
]);

function toggleMenu(index:any) {
  menus.value[index].isOpen = !menus.value[index].isOpen;
}

</script>

<style>
h3, h4 {
  margin-top: 0;
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

.main-content {
  width: 100%;
  padding: 0 5vh;
}

.layout {
  display: flex;
  justify-content: left;
  width: 95%;
}

.grey {
  color: #616060;
  font-weight: 400;
  font-size: 1.5vh;
}
.sidebar {
  width: 250px; /* 侧边栏宽度 */
  padding: 20px; /* 侧边栏内边距 */
}

/* 顶级菜单项样式 */
.sidebar ul {
  list-style: none; /* 移除列表项目的标记 */
  padding: 0; /* 移除列表的内边距 */
  margin: 0; /* 移除列表的外边距 */
}

.sidebar li {
  padding: 10px; /* 列表项内边距 */
  cursor: pointer; /* 鼠标悬停时的指针样式 */
}

/* 子菜单样式 */
/* 子菜单项样式 */
.sidebar li ul li {
  position: relative; /* 设置相对定位，为伪元素定位提供基准 */
  padding: 5px 10px; /* 子菜单项的内边距 */
  margin-bottom: 2px; /* 子菜单项之间的间距 */
  font-size: 3vh;
  margin: 2vh 0vh;
  transition: background-color 0.3s; /* 背景颜色的过渡效果 */
  padding-left: 2vh;
}

.sidebar li ul li:hover {
  background-color: #f0f0f0; /* 鼠标悬停时的背景颜色 */
}

/* 子菜单项hover时前方的蓝色方块 */
.sidebar li ul li:hover::before {
  content: ""; /* 伪元素需要content属性，即使没有内容 */
  position: absolute; /* 绝对定位，相对于其父元素（li） */
  left: 0; /* 位于父元素的最左侧 */
  top: 50%; /* 垂直居中 */
  transform: translateY(-50%); /* 确保完全居中 */
  width: 0.6vh; /* 方块的宽度 */
  height: 5vh; /* 方块的高度 */
  background-color: #0456B5; /* 方块的背景颜色 */
}
.triangle-right::before {
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 17.4px; /* 将原来的宽度放大2倍 */
  border-color: transparent transparent transparent black;
  margin-right: 5px;
  vertical-align: middle; /* 使三角形与文字垂直居中对齐 */
}

.triangle-down::before {
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 17.4px 10px 0 10px; /* 将原来的宽度放大2倍 */
  border-color: black transparent transparent transparent;
  margin-right: 5px;
  vertical-align: middle; /* 使三角形与文字垂直居中对齐 */
}
</style>
