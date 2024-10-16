<template>
    <div class="login-container">
      <h1>管理员登录</h1>
      <form @submit.prevent="submitLogin">
        <div>
          <label for="username">用户名:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div>
          <label for="password">密码:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button style="margin-top: 10px;" type="submit">登录</button>
      </form>
    </div>
    <div style="text-align: center;">
        <div class="goback" @click="goBack">点错了？点此处返回</div>
    </div>
    
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { adminLogin } from '../api/article';
  
  const username = ref('');
  const password = ref('');
  const router = useRouter();
  
  const submitLogin = async () => {
    try {
      const response = await adminLogin({
        username: username.value,
        password: password.value
      });
      alert('登录成功');
      router.push('/Admin');
    } catch (error) {
      console.error('登录失败:', error);
      alert('用户名或密码错误');
    }
  };
  const goBack = () => {
    router.push('/');
  }
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    margin-top: 100px;
    padding: 2em;
    background: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    margin-bottom: 1em;
  }
  
  label {
    margin-bottom: .5em;
    color: #333333;
    display: block;
  }
  
  input {
    border: 1px solid #CCCCCC;
    padding: .5em;
    font-size: 1em;
    width: 100%;
    box-sizing: border-box;
  }
  
  button {
    padding: 0.7em;
    color: #fff;
    background-color: #007BFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
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