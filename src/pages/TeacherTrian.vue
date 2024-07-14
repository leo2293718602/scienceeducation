<template>
    <img src="../../statics/页面4/分组 1 (1).png" style="width: 100%;">
    <div style="display: flex;">
        <Bread />
    </div>
    <RouterView></RouterView>
        <div class="layout" v-show="showLayout">
            <div class="sidebar">
                <!-- 侧边栏内容 -->
                <nav>
                    <ul>
                        <li><a class="has-triangle" @click.prevent="scrollToCenter('pxkc')">▶ &nbsp;培训课程</a></li>
                        <li><a class="has-triangle" @click.prevent="scrollToCenter('pxtz')">▶ &nbsp;培训通知</a></li>
                        <li><a class="has-triangle" @click.prevent="scrollToCenter('xzzq')">▶ &nbsp;下载专区 </a></li>
                    </ul>
                </nav>
            </div>
            <div class="main-content">
                <!-- 主内容区域 -->
                <div style="display: flex;margin-left: 0">
                    <div style="width: 80%;margin-left: 8vw">
                        <div>
                            <div style="display: flex;justify-content: space-between;margin-bottom: 8vh">
                                <a id="pxkc" style="font-size: 4vh;font-weight: 600;"> <span
                                        class="blue-block"></span>培训课程</a>
                                <router-link :to="{ name: 'TrainCoursesPage' }" class="more"
                                    style="vertical-align: center;"> 更多>></router-link>
                            </div>
                            <div>
                                <div class="courses-grid">
                                    <div v-for="(course, index) in courses.slice(0, 4)" :key="index"
                                        class="course-item">
                                        <img :src="course.img" alt="课程图片">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style="display: flex;justify-content: space-between;margin-bottom: 8vh">
                                <a id="pxtz" style="font-size: 4vh;font-weight: 600;"><span
                                        class="blue-block"></span>培训通知</a>
                                <a class="more" style="vertical-align: center;"> 更多>></a>
                            </div>
                            <div>
                                <div class='notices-grid' v-for="(notice, index) in trannotices.slice(0, 3)"
                                    :key="index">
                                    <div>
                                        <h3>{{ notice.title }}</h3>
                                        <p>培训时间：{{ notice.date }}</p>
                                        <p>培训地点：{{ notice.place }}</p>
                                        <p>培训内容：{{ notice.inner }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                style="display: flex;justify-content: space-between;margin-bottom: 8vh;margin-top: 10vh">
                                <a id="xzzq" style="font-size: 4vh;font-weight: 600;"><span
                                        class="blue-block"></span>下载专区</a>
                                <a class="more" style="vertical-align: center;"> 更多>></a>
                            </div>
                            <div style="box-shadow: 0 0 1vh 0.3vh #eae9e9;padding-left: 3vh;margin-bottom: 10vh;">
                                <div class="downloads-grid" v-for="(download, index) in downloads.slice(0, 6)"
                                    :key="index">
                                    <div style="display: flex;justify-content: left">
                                        <p style="width: 10%;color:#0456B5;">[{{ download.date }}]</p>
                                        <a :href="download.downloadsrc">{{ download.title }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script lang="ts" setup>
import Bread from '../components/Bread.vue';
import { ref ,computed} from 'vue';
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const courses = ref([
    {
        id: 1,
        title: '课程1',
        date: '2023-10-01',
        content: '课程1内容',
        img: '../../statics/页面8/page8-1.png'
    },
    {
        id: 2,
        title: '课程2',
        date: '2023-10-02',
        content: '课程2内容',
        img: '../../statics/页面8/page8-2.png'
    },
    {
        id: 3,
        title: '课程3',
        date: '2023-10-03',
        content: '课程3内容',
        img: '../../statics/页面8/page8-4.png'
    },
    {
        id: 4,
        title: '课程4',
        date: '2023-10-04',
        content: '课程4内容',
        img: '../../statics/页面8/page8-5.png'
    },
    {
        id: 5,
        title: '课程5',
        date: '2023-10-05',
        content: '课程5内容',
        img: '../../statics/页面8/page8-1.png'
    },
])
const trannotices = ref([
    {
        id: 1,
        title: '2023年“全国科学教育暑期学校”中小学教师培训',
        date: '2023年7月中旬至8月下旬',
        place: '北京和11个中国科学院地方分院系统单位所在城市',
        inner: '邀请院士、科普工作者、教育专家等作主题报告，通过专题讲座、现场教学、研究探索等形式，为全国中小学教师开展为期6天的科学教育培训.'
    },
    {
        id: 2,
        title: '2023年“全国科学教育暑期学校”中小学教师培训',
        date: '2023年7月中旬至8月下旬',
        place: '北京和11个中国科学院地方分院系统单位所在城市',
        inner: '邀请院士、科普工作者、教育专家等作主题报告，通过专题讲座、现场教学、研究探索等形式，为全国中小学教师开展为期6天的科学教育培训.'
    },
    {
        id: 3,
        title: '2023年“全国科学教育暑期学校”中小学教师培训',
        date: '2023年7月中旬至8月下旬',
        place: '北京和11个中国科学院地方分院系统单位所在城市',
        inner: '邀请院士、科普工作者、教育专家等作主题报告，通过专题讲座、现场教学、研究探索等形式，为全国中小学教师开展为期6天的科学教育培训.'
    },
    {
        id: 4,
        title: '2023年“全国科学教育暑期学校”中小学教师培训',
        date: '2023年7月中旬至8月下旬',
        place: '北京和11个中国科学院地方分院系统单位所在城市',
        inner: '邀请院士、科普工作者、教育专家等作主题报告，通过专题讲座、现场教学、研究探索等形式，为全国中小学教师开展为期6天的科学教育培训.'
    }
])
const downloads = ref([
    { id: 1, title: '85期团员手册', date: '10-01', downloadsrc: 'www.mydownload.com' },
    { id: 2, title: '单位缴费信息发票统计表', date: '10-01', downloadsrc: 'www.mydownload.com' },
    { id: 3, title: '《高等学校教师职业道德修养》课程教学大纲', date: '10-01', downloadsrc: 'www.mydownload.com' },
    { id: 4, title: '《高等教育学》课程教学大纲', date: '10-01', downloadsrc: 'www.mydownload.com' },
    { id: 5, title: '《高等教育心理学》课程教学大纲', date: '10-01', downloadsrc: 'www.mydownload.com' },
    { id: 6, title: '《高等教育法规概论》课程教学大纲', date: '10-01', downloadsrc: 'www.mydownload.com' },
    { id: 7, title: '85期团员手册', date: '10-01', downloadsrc: 'www.mydownload.com' },
])
function scrollToCenter(id: string) {
    const element = document.getElementById(id);
    if (element) {
        // 计算元素距离文档顶部的距离
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        // 计算元素的中心位置应该在视窗的哪里
        const elementCenter = elementTop - (window.innerHeight / 2) + (element.offsetHeight / 2) + 100;
        // 平滑滚动到计算出的位置
        window.scrollTo({ top: elementCenter, behavior: 'smooth' });
    }
}
const route = useRoute();
const showLayout = computed(() => route.name !== 'TrainCoursesPage' && route.name !== 'VideosPage');
</script>

<style>
.blue-block {
    display: inline-block;
    width: 0.7vh;
    /* 方块的宽度 */
    height: 5vh;
    /* 方块的高度 */
    background-color: #0456B5;
    /* 方块的背景色 */
    margin-right: 5px;
    /* 与文字之间的间距 */
    vertical-align: middle;
    /* 垂直居中对齐 */
}

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
    width: 21vh;
    font-size: 3.5vh;
    margin-bottom: 8vh;
    cursor: pointer;
}

.sidebar ul li a:hover {
    color: #0456B5;
    /* 鼠标悬停背景颜色 */
}

.courses-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* 创建两列 */
    grid-gap: 20px;
    /* 设置网格间距 */
    margin-bottom: 8vh;
}

.course-item img {
    width: 100%;
    /* 使图片填满容器 */
    height: auto;
    /* 保持图片的原始宽高比 */
}

.notices-grid {
    box-shadow: 0 0 1vh 0.3vh #eae9e9;
    padding: 3vh;
    margin-bottom: 3vh;
}

.notices-grid h3 {
    font-size: 3vh;
    font-weight: 600;
    margin-bottom: 1vh;
}

.notices-grid p {
    font-size: 2vh;
    margin-bottom: 1vh;
    line-height: 3vh;
    color: #666666;
}

.downloads-grid p {
    font-size: 2.5vh;
    font-weight: 500;
}

.more:hover {
    color: #0456B5;
    cursor: pointer;
}

.downloads-grid a {
    font-size: 2.5vh;
    font-weight: 500;
    color: black;
    /* 基础颜色 */
    padding: 2.5vh 0px;
    /* 内边距 */
    text-decoration: none;
    /* 去除下划线 */
}

.downloads-grid a:hover {
    color: #0456B5;
    /* 鼠标悬停颜色 */
}
.more{
    text-decoration: none;
    color: black;
}
</style>