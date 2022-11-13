<template>
  <div class="box2 ">2</div>
  <p>
    <span class="typing1"></span>
    <span class="cursor">_</span>
  </p>
</template>

<script setup>
import {gsap} from "gsap";
import {onMounted} from "vue";
import ScrollTrigger from "gsap/src/ScrollTrigger"
import TextPlugin from "gsap/src/TextPlugin"

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
  const box2 = document.querySelector(".box2")
  ScrollTrigger.create({
    //以box2作為觸發時機
    trigger: box2,
    markers: true,

    //向下滾動進入start點時觸發callback
    onEnter: () => {
      animated(box2);
    },

    //向下滾動超過end點時觸發callback
    onLeave: () => {
      hide(box2);
    },

    //向上滾動超過end點時觸發（回滾時觸發）callback
    onEnterBack: () => {
      animated(box2);
    },

  });
  gsap.to(".typing1", {
    text: "這裡是第一段", //text屬性將自動為DOM元素嵌入我們所輸入的文字
    duration: 1.5,
    scrollTrigger: {
      trigger: ".typing1",
      toggleActions: "play pause resume reset",
      // onEnter時需play
      // onLeave時需pause
      // onEnterBack時需resume
      // onLeaveBack時需reset
    },
  });
  //不停出現 & 消失
  gsap.fromTo(
      ".cursor",
      0,
      {
        visibility: "hidden",
      },
      {
        visibility: "visible",
        repeat: -1,
        yoyo: true, // 若為true，則動畫repeat運行順序將會以倒放的形式回去，如溜溜球一樣
        repeatDelay: 0.3, // 下一次repeat的delay時間
      }
  );
})

const animated = (element) => {
  let x = -200;

  //設定元素初始值
  element.style.transform = `translate(${x}px, 0px)`;

  gsap.fromTo(
      element,
      {x: x, y: 0, opacity: 0, visibility: "hidden"},
      {
        duration: 1,
        delay: 0.2,
        x: 0,
        y: 0,
        visibility: "visible",
        opacity: "1",
        ease: "expo", // 元素的運動速度變化
        overwrite: "auto",
      }
  );
}
const hide = (element) => {
  gsap.set(element, {opacity: 0, visibility: "hidden"});
}
</script>

<style scoped>
.box2 {
  background-color: #005f62;
  width: 200px;
  height: 200px;
}
</style>