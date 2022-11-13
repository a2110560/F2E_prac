<template>
  <section class="section4">
    <ul class="loop">
      <li>
          <span> THE F2E THE F2E THE F2E THE F2E </span
          ><span> THE F2E THE F2E THE F2E THE F2E </span>
      </li>
      <li>
        <span> THE F2E THE F2E THE F2E THE F2E </span>
        <span> THE F2E THE F2E THE F2E THE F2E </span>
      </li>
      <li>
        <span> THE F2E THE F2E THE F2E THE F2E </span>
        <span> THE F2E THE F2E THE F2E THE F2E </span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import {onMounted} from "vue";
import { gsap } from "gsap";
// // get other plugins:
// import ScrollTrigger from "gsap/ScrollTrigger";
// import TextPlugin from "gsap/TextPlugin";
//
// gsap.registerPlugin(ScrollTrigger,TextPlugin);
onMounted(()=>{
  gsap.to(".loop", {
    xPercent: "-50",
    ease: "none",
    duration: 10,
    repeat: -1,
  });
})
</script>

<style scoped>
.section4 {
  height: 100vh;
  overflow: hidden; /*隱藏超出外層容器的元素*/
  max-width: 100%;
}

.loop {
  display: inline-block;
  font-family: "Dela Gothic One";
  font-size: 5rem;
  color: transparent;
  white-space: nowrap; /*文字必須設為nowrap，否則文字會自動換行*/
  height: 100%;
  -webkit-text-stroke: 1px black;
}
.loop > span {
  display: inline-block;
}
</style>