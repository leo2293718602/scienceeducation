<template>
    <div>
        <div style="text-align: center;">
        <h1 style="margin: 0;">发布文章</h1>
      </div>
      <form @submit.prevent="submitArticle">
        <div>
          <label for="title">标题:</label>
          <input type="text" id="title" v-model="title" required />
        </div>
        <div>
          <label for="context">简介:</label>
          <textarea id="context" v-model="context" required style="max-width: 600px; min-width: 600px;"></textarea>
        </div>
        <div>
          <label for="author">作者:</label>
          <input type="text" id="author" v-model="author" required />
        </div>
        <div>
            <label for="fromwhere">来源:</label>
            <input type="text" id="fromwhere" v-model="fromwhere" required />
        </div>
        <div>
            <label for="text">正文:</label>
            <textarea id="text" v-model="text" required style="max-width: 600px; min-width: 600px;"></textarea>
        </div>
        <div>
        <label for="cover">封面图片:</label>
        <input type="file" id="cover" @change="handleFileUpload('cover', $event)" required />
      </div>
      <div>
        <label for="img1">图片1:</label>
        <input type="file" id="img1" @change="handleFileUpload('img1', $event)" required />
      </div>
      <div>
        <label for="img2">图片2:</label>
        <input type="file" id="img2" @change="handleFileUpload('img2', $event)" required />
      </div>
        <button type="submit">提交</button>
      </form>
      <div style="text-align: center;">
           <div class="goback" @click="goBack">返回浏览页面</div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { saveArticle } from '../api/article';
    import { useRouter } from 'vue-router';
    const router = useRouter();
  
  const title = ref('');
  const context = ref('');
  const author = ref('');
  const fromwhere = ref('');
  const text = ref('');
  const cover = ref('');
  const img1 = ref('');
  const img2 = ref('');
  
  
const handleFileUpload = (field: string, event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (field === 'cover') {
        cover.value = result;
      } else if (field === 'img1') {
        img1.value = result;
      } else if (field === 'img2') {
        img2.value = result;
      }
    };
    reader.readAsDataURL(target.files[0]);
  }
};
  
  const submitArticle = async () => {
    try {
      const response = await saveArticle({
      title: title.value,
      context: context.value,
      author: author.value,
      fromwhere: fromwhere.value,
      text: text.value,
      cover: cover.value,
      img1: img1.value,
      img2: img2.value,

      });
      console.log('文章保存成功:', response);
      // 清空表单
      title.value = '';
      context.value = '';
      author.value = '';
        fromwhere.value = '';
        text.value = '';
        cover.value = '';
        img1.value = '';
        img2.value = '';
    } catch (error) {
      console.error('保存文章时出错:', error);
    }
  };
  const goBack = () => {
        router.push('/Main');
      }
  </script>
  
  <style scoped>
  form {
    max-width: 600px;
    margin: 0 auto;
    padding: 1em;
    background: #f9f9f9;
    border-radius: 5px;
  }
  
  
  label {
    color: #333333;
    display: block;
  }
  
  input, textarea {
    border: 1px solid #CCCCCC;
    padding: .5em;
    font-size: 1em;
    width: 100%;
    box-sizing: border-box;
  }
  
  button {
    margin-top: 1em;
    padding: 0.7em;
    color: #fff;
    background-color: #007BFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  .goback{
    color:grey;
    font-size: 1.5vh;
    margin-left: 0.5vh;
    cursor: pointer;
    margin-top: 10px;
  }
  </style>