<template>
  <canvas
      id="canvas"
      width="500"
      height="300"
      style="border: 1px solid #000"
  ></canvas>

  <img class="show-img" width="250" height="150" style="border: 1px solid"/>

  <div class="btn-group">
    <button class="clear">Clear</button>
    <button class="save">Save</button>
    <button class="redo">Redo</button>
    <button class="undo">Undo</button>
  </div>
  <router-link to="/preview">下一頁</router-link>
</template>

<script setup>
import {onMounted} from "vue";

let canvas, ctx, clearBtn, saveBtn, redoBtn, undoBtn;
// 設置狀態來確認滑鼠 / 手指是否按下或在畫布範圍中
let isPainting = false;
let step = -1;
let history = [];
onMounted(() => {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d", {willReadFrequently: true});
  clearBtn = document.querySelector(".clear");
  saveBtn = document.querySelector(".save");
  redoBtn = document.querySelector(".redo");
  undoBtn = document.querySelector(".undo");

  // 設定線條的相關數值
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  // event listener 電腦板
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mouseout", () => {
    isPainting = false
  });
  canvas.addEventListener("mousemove", draw);

// event listener 手機板
  canvas.addEventListener("touchstart", startPosition);
  canvas.addEventListener("touchend", finishedPosition);
  canvas.addEventListener("touchcancel", ()=>{
    isPainting = false
  });
  canvas.addEventListener("touchmove", draw);

  clearBtn.addEventListener("click", reset);
  saveBtn.addEventListener("click", save);
  redoBtn.addEventListener("click", redo);
  undoBtn.addEventListener("click", undo);
})

const redo = () => {
  if (step < history.length-1){
    step++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let canvaspic = new Image(); //建立新的 Image
    canvaspic.src = history[step]; //載入剛剛存放的影像
    canvaspic.onload = function () {
      ctx.drawImage(canvaspic, 0, 0) //匯出影像並從座標 x:0 y:0 開始
    }
  }else{
    alert('no more steps')
  }
}
const undo = () => {
  if (step >= 0) {
    step--;
    if (step===-1){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let canvaspic = new Image(); //建立新的 Image
    canvaspic.src = history[step]; //載入剛剛存放的影像
    canvaspic.onload = function () {
      ctx.drawImage(canvaspic, 0, 0) //匯出影像並從座標 x:0 y:0 開始
    }
  }else{
    alert('no more steps')
  }
}


// 取得滑鼠 / 手指在畫布上的位置
const getPaintPosition = (e) => {
  const canvasSize = canvas.getBoundingClientRect();
  if (e.type === "mousemove") {
    return {
      x: e.clientX - canvasSize.left,
      y: e.clientY - canvasSize.top,
    };
  } else {
    return {
      x: e.touches[0].clientX - canvasSize.left,
      y: e.touches[0].clientY - canvasSize.top,
    };
  }
}

// 開始繪圖時，將狀態開啟
const startPosition = (e) => {
  e.preventDefault();
  isPainting = true;
}

// 結束繪圖時，將狀態關閉，並產生新路徑
const finishedPosition = () => {
  isPainting = false;
  ctx.beginPath();
  step++;
  if (step < history.length ) {
    history.length = step
  }
  history.push(canvas.toDataURL()); //當前影像存成 Base64 編碼的字串並放入陣列
}

// 繪圖過程
const draw = (e) => {
  // 滑鼠移動過程中，若非繪圖狀態，則跳出
  if (!isPainting) return;
  // 取得滑鼠 / 手指在畫布上的 x, y 軸位置位置
  const paintPosition = getPaintPosition(e);
  // 移動滑鼠位置並產生圖案
  ctx.lineTo(paintPosition.x, paintPosition.y);
  ctx.stroke();
}

// 重新設定畫布
const reset = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  history.length=0;
  step= -1;
}
const save = () => {
  const showImage = document.querySelector(".show-img");
  // 圖片儲存的類型選擇 png ，並將值放入 img 的 src
  const newImg = canvas.toDataURL("image/png");
  showImage.src = canvas.toDataURL("image/png");
  localStorage.setItem('img', newImg);
}


</script>

<style scoped>

</style>