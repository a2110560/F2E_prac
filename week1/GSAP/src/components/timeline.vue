<template>
  <div class="container">
    <p>文字文字<span class="cursor">_</span></p>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
  </div>
  <section class="bg-blue">
    <div class="box5">box5</div>
    <div class="box6">box6</div>
  </section>
</template>

<script setup>
import {gsap} from "gsap";
import {onMounted} from "vue";

onMounted(() => {
// 文字範例
  gsap.to('.cursor', {opacity: 0, duration: 1, repeat: -1})

// 方塊移動範例
  gsap.to('.box1', {x: 100, duration: 1,})
  gsap.to('.box1', {y: 100, duration: 1, delay: 1})

  gsap.from('.box2', {x: 200, opacity: 0, duration: 1})

// 方塊漸明範例
  gsap.fromTo('.box3', {autoAlpha: 0.3}, {autoAlpha: 1, duration: 1, repeat: -1})

// timeline
  const timeline = gsap.timeline()
  timeline.to('.box4', {x: 100, duration: 1}).to('.box4', {y: 100, duration: 1}, "<")

// timeline位置參數
  const timeline2 = gsap.timeline()
  timeline.to('.box5', {x: 100, duration: 1}).to('.box6', {x: 100, duration: 1}, "<")
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 0;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

p {
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
}

.box1 {
  width: 100px;
  height: 100px;
  background-color: pink;
  margin-bottom: 10rem;
}

.box2 {
  width: 100px;
  height: 100px;
  background-color: pink;
  margin-bottom: 2rem;
}

.box3 {
  width: 100px;
  height: 100px;
  background-color: pink;
}

.box4 {
  width: 100px;
  height: 100px;
  background-color: pink;
}

.bg-blue {
  background-color: #013355;
}

.box5 {
  width: 100px;
  height: 100px;
  background-color: white;
  margin-bottom: 5rem;
}

.box6 {
  width: 100px;
  height: 100px;
  background-color: white;
}
</style>