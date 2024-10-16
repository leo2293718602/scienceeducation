<template>
    <div class="background-layer"></div>
    <div>
        <img src="../../statics/页面6/分组 1 (2).png" style="width: 100%;">
        <div style="display: flex;">
            <Bread />
        </div>
        <div style="display: flex;justify-content: center;">
            <div style="display: flex;width:91%;justify-content:space-between;">
                <div>
                    <h1 style="font-size: 5vh;">常用工具</h1>
                    <div class="box" style="width: 89vw;height: 30vh;">
                        <div style="display: flex;justify-content: space-around;">
                            <div class="innerbox" @click="noticesss">
                                <img src="../../statics/页面6/画板 1.png" style="margin-left: 1.5vh;margin-top: 1vh">
                                <h2 style="margin-bottom: 1vh;font-size: 3vh;">申报指南</h2>
                            </div>
                            <div class="innerbox" @click="noticesss">
                                <img src="../../statics/页面6/编辑文档.png" style="margin-left: 2vh;margin-top: 1vh">
                                <h2 style="margin-bottom: 1vh;margin-top: 2.7vh;font-size: 3vh;">申报说明</h2>
                            </div>
                            <div class="innerbox" @click="noticesss">
                                <img src="../../statics/页面6/问号.png" style="margin-left: 3vh;margin-top: 1vh">
                                <h2 style="margin-bottom: 1vh;font-size: 3vh;">常见问答</h2>
                            </div>
                            <div class="innerbox" @click="noticesss">
                                <img src="../../statics/页面6/image.png.png" style="margin-top: 1vh;width: 10vh;margin-left: 1vh">
                                <h2 style="margin-bottom: 1vh;font-size: 3vh;">申报平台</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1 class="custom-underline">
                <span class="underline-text">申报通知</span>
            </h1>
        </div>
        <div style="box-shadow: 2px 2px 2px rgb(183, 183, 183);background-color: white;width: 90vw;margin: 0 auto; border: 0.1vh solid #a6a6a6;">
            <div v-for="(notice, index) in paginatedNotices" :key="index">
                <!-- 显示notice的内容 -->
                <div style="display: flex;margin-left: 5vh;font-size: 3vh;line-height: 3vh;cursor: pointer;"
                    @click="noticesss">
                    <p style="width: 3%"> {{ index + 1 }}.</p>
                    <p class="noticeblue" style="width: 72%">{{ notice.title }}</p>
                    <p style="width: 10%;">{{ notice.from }}</p>
                    <p style="color:#a6a6a6">{{ notice.time }}</p>
                </div>
            </div>
        </div>
        <div style="display: flex;justify-content: center;margin: 5vh auto;">
            <div class="pagination">
                <span style="font-size: 2.5vh;margin: 2vh">共{{ notices.length }}条记录 第{{ currentPage }}/{{ totalPages}}页</span>
                <button @click="goToFirstPage" class="txt" :disabled="currentPage === 1">首页</button>
                <button @click="prevPage" class="txt" :disabled="currentPage === 1">上一页</button>
                <button @click="nextPage" class="txt" :disabled="currentPage === totalPages">下一页</button>
                <button @click="goToLastPage" class="txt" :disabled="currentPage === totalPages">尾页</button>
                <span style="font-size: 2.5vh;margin: 2vh">跳转至<input type="number" v-model.number="jumpPage"
                        @keyup.enter="goToPage(jumpPage)" style="width: 50px;">页</span>
                <button @click="goToPage(jumpPage)">跳转</button>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup name="">
import { ref, computed,onMounted } from 'vue'
import { getNoticesList } from '../api/article';
import Bread from '../components/Bread.vue';
const notices = ref([{id:1,title:'申报通知',from:'教育局',time:'2021-10-10'}])
const currentPage = ref(1)
const itemsPerPage = 10

const formatDate = (date: string) => {
    const d = new Date(date)
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}

// 计算总页数
const totalPages = computed(() => {
    return Math.ceil(notices.value.length / itemsPerPage)
})

// 获取当前页的数据
const paginatedNotices = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return notices.value.slice(start, end)
})
const jumpPage = ref(currentPage.value); // 用于绑定输入框的页码
// 翻页函数
function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++
    }
}

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--
    }
}
// 跳转至首页
function goToFirstPage() {
    currentPage.value = 1;
}

// 跳转至尾页
function goToLastPage() {
    currentPage.value = totalPages.value;
}

// 跳转至指定页
function goToPage(pageNumber: number) {
    const page = Math.max(1, Math.min(pageNumber, totalPages.value)); // 限制在有效页码范围内
    currentPage.value = page;
}

const fetchNotices = async () => {
    try {
        const res = await getNoticesList({});
        notices.value = res.map((item: any) => ({
            ...item,
            time: formatDate(item.time)
        }));
    } catch (error) {
        console.error('Error fetching Notices:', error);
    }
};

function noticesss() {
    alert('点击成功')
}

onMounted(() => {
    fetchNotices();
})
</script>

<style scoped>
.box {

    border: 0.2vh solid #d4d4d4;
    padding: 3vh 1vh;
    box-shadow: 2px 2px 2px rgb(183, 183, 183);
    background-color: white;
}

.box2 {
    border: 0.2vh solid #d4d4d4;
    padding: 3vh 1vh;
    box-shadow: 2px 2px 2px rgb(183, 183, 183);
    background-color: white;
    cursor: pointer;
}

.innerbox {
    border: 0.2vh solid#d4d4d4;
    padding: 2vh 7vh;
    background-color: white;
    cursor: pointer;
    margin-top: 4vh
}

.custom-underline {
    margin-left: 10vh;
    margin-top: 10vh;
    font-size: 4vh;
    color: black;
    padding-bottom: 0.5vh;
    margin-bottom: 5vh;
}

.underline-text {
    font-size: 5vh;
}

.pagination button,
.pagination .page-number {
    border: 1px solid #ddd;
    color: #333;
    padding: 5px 10px;
    margin-right: 2.5vh;
    cursor: pointer;
    font-size: 2vh;
    width: 10vh;
    height: 5vh;
    transition: background-color 0.3s, color 0.3s;

}

.pagination .active {
    background-color: #007bff;
    color: white;
}

.pagination button:disabled {
    background-color: #e9ecef;
    color: #6c757d;
    cursor: not-allowed;
}

.pagination input[type="number"] {
    padding: 5px;
    margin: 0 1vh;
    text-align: center;
    border: 1px solid #ddd;
    width: 8vh;
    height: 4vh;
}

.pagination input[type="number"]:focus {
    border-color: #007bff;
    outline: none;
}

.content-layer {
    position: relative;
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

.pagination button:hover,
.pagination .page-number:hover {
    background-color: #0456B5;
    color: white;
    border-color: #0456B5;
}

.pagination button:disabled {
    background-color: #e9e9e9;
    color: #b1b1b1;
    cursor: not-allowed;
}

.innerbox:hover {
    transform: scale(1.1);
    transition: 0.3s;
    background-color: #a6a6a6
}

.box2:hover {
    transform: scale(1.1);
    transition: 0.3s;
    background-color: #a6a6a6;
    
}
.noticeblue:hover{
    color: #0456B5;
    transition: 0.3s;
}
</style>