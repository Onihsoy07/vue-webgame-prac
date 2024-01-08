<template>
  <div>
    <div>
      <router-link to="/game/index" style="margin: 10px;">게임매쳐</router-link>
      <router-link to="/number-baseball" style="margin: 10px;">숫자야구</router-link>
      <router-link to="/response-check" style="margin: 10px;">반응속도</router-link>
      <router-link to="/lotto" style="margin: 10px;">로또생성기</router-link>
      <router-link to="/rock-scissors-paper" style="margin: 10px;">가위바위보</router-link>
      <router-link to="/mine-sweeper" style="margin: 10px;">지뢰찾기</router-link>
      <router-link to="/inner-lotto-generator" style="margin: 10px;">내부로또</router-link>
      <router-link to="/inner-respone-check" style="margin: 10px;">내부반응속도</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
