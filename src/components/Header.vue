<template>
  <div style="display: flex;justify-content: space-between;align-items: center;margin-top: 3vh;margin-bottom: 3vh;">
    <div style="display: flex;float: inline-start;">                 
      <div class="icon"><img src="../assets/标.png" alt="logo"style="height: 15vh;"></div>
      <div>
        <h1 style="font-size: 5vh;color:black;margin-top: 5vh;margin-bottom: 0;font-weight: 400;">
        浙江省中小学科学教育指导中心
        </h1>
        <h1 style="font-size: 1.5vh;color: black;margin-bottom: 5vh;font-weight: 600">
          Science Education Guidance Center for Primary and Secondary Schools in Zhejiang Province
        </h1>
      </div>
    </div>
    <div style="float: right;margin-right:10vh ">
      <input type="text" class="search">
    </div>
  </div> 
  <div>
    <!-- 导航栏 -->
    <nav style="display: flex; justify-content: center; padding: 2vh 0;background-color: #0456B5;height: 7vh;">
      <ul style="list-style: none; display: flex; gap: 2vw; padding: 0; margin: 0;margin-left: 3vw;margin-right: 3vw;">
        <li><a class="routes">首页</a></li>
        <li><a class="routes">中心简介</a></li>
        <li><a class="routes">中心动态</a></li>
        <li><a class="routes">理论研究</a></li>
        <li><a class="routes">课题申报</a></li>
        <li><a class="routes">经验推广</a></li>
        <li><a class="routes">师资培训</a></li>
        <li><a class="routes">成效监测</a></li>
        <li><a class="routes">共享资源</a></li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup name=""> 

</script>

<style>
  .icon{
   margin: auto ;
   margin-left: 10vh;
   margin-right: 2vh;
  }
  .search{
  width: 17vw;
  height: 6vh;
  border-radius: 6vh;
  border: 1.5px solid #383838;
  background-image: url('../assets/搜索.png');
  background-position: right 2vh center; 
  background-size: 4vh; 
  background-repeat: no-repeat;
  padding-right: 5vh; 
  padding-left: 2vh;
  margin:auto;
  font-size: 2vh;
}
.routes{
  font-size: 2vh;
  color: black;
  text-decoration: none;
  color:white;
  font-size: 3vh;
  cursor: pointer;
}
nav {
  display: flex;
  justify-content: center;
  padding: 2vh 0;
  background-color: #0456B5;
  height: 7vh;
  width: 100%; 
  margin: 0; 
}

ul {
  list-style: none;
  display: flex;
  gap: 2vw;
  padding: 0;
  margin: 0;
  width: 100%; 
}
li {
  flex: 1;
  text-align: center; 
  margin: auto;
}
li:hover {
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color:white ;
  text-decoration-thickness: 0.5vh;
  text-underline-offset: 2vh;
}
</style>