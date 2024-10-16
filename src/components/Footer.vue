<template>
  <div class="foot">
    <a class="foottxt">浙江省中小学科学教育指导中心 Science Education Guidance Center for Primary and secondary schools in zhejiang Province</a>
    <br>
    <a class="foottxt">copyright@浙江科技大学,2024</a>
    <br>
    <a class="toAdminPage" @click="toAdminLoginPage">管理员页面</a>
  </div> 

</template>

<script lang="ts" setup name=""> 
import { useRouter } from 'vue-router';
const router = useRouter();
  function toAdminLoginPage(){
    router.push('/AdminLogin');
  }
</script>

<style scoped>
.foot{
   background-color: #0456B5;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   padding: 2vh 0; /* 添加一些内边距以便更好的视觉效果 */
}

.foottxt{
  color: white;
  font-size: 2vh;
  margin: 0vh 0; /* 调整边距以确保文本之间有适当的间距 */
}
.toAdminPage{
  color:grey;
  font-size: 1.5vh;
  margin-left: 0.5vh;
  cursor: pointer;
}
</style>