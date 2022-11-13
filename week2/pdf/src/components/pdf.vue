<template>
  <canvas id="canvas" width="500" height="300" style="border: 1px solid #000"></canvas>
</template>

<script setup>
import {onMounted} from "vue";

onMounted(() => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d"); // 要使用 2D 的方式繪圖
  ctx.fillRect(25, 25, 100, 100); // 位置(25, 25) 寬高100的填滿方形
  ctx.strokeRect(150, 25, 150, 150); // 位置(150, 25) 寬高150的無填滿方形
  ctx.clearRect(25, 25, 50, 50); // 從(25, 25)為起點，消去寬高50
  ctx.clearRect(0, 0, 500, 300);//清空，大小跟canvas一樣大就好
  //畫線
  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.lineTo(300, 150);
  ctx.stroke();
  ctx.closePath();
})
</script>

<style scoped>

</style>