<template>
  <div class="heart-3d-container">
    <h2>3D 旋转爱心</h2>
    <div class="scene">
      <div class="heart-3d" :style="heartStyle">
        <div class="heart-side front"></div>
        <div class="heart-side back"></div>
        <div class="heart-side left"></div>
        <div class="heart-side right"></div>
        <div class="heart-side top"></div>
        <div class="heart-side bottom"></div>
      </div>
    </div>
    <div class="controls">
      <label>
        <input type="range" v-model="rotationX" min="0" max="360"> 
        X轴旋转
      </label>
      <label>
        <input type="range" v-model="rotationY" min="0" max="360">
        Y轴旋转
      </label>
      <label>
        <input type="range" v-model="rotationZ" min="0" max="360">
        Z轴旋转
      </label>
      <button @click="autoRotate = !autoRotate">
        {{ autoRotate ? '停止旋转' : '自动旋转' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const rotationX = ref(0)
const rotationY = ref(0)
const rotationZ = ref(0)
const autoRotate = ref(true)

const heartStyle = computed(() => ({
  transform: `rotateX(${rotationX.value}deg) rotateY(${rotationY.value}deg) rotateZ(${rotationZ.value}deg)`
}))

let animationFrame

function animate() {
  if (!autoRotate.value) return
  
  rotationY.value = (rotationY.value + 1) % 360
  rotationX.value = (rotationX.value + 0.5) % 360
  
  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  animate()
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>

<style scoped>
.heart-3d-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-family: 'Arial', sans-serif;
  perspective: 1000px;
}

.scene {
  width: 200px;
  height: 200px;
  margin: 40px 0;
  perspective: 1000px;
}

.heart-3d {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.1s ease;
}

.heart-side {
  position: absolute;
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #ff6b6b, #ff9ff3);
  border-radius: 50%;
  opacity: 0.8;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.heart-side::before,
.heart-side::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  background: inherit;
  border-radius: 50%;
}

.heart-side::before {
  top: -50px;
  left: 0;
}

.heart-side::after {
  top: 0;
  left: 50px;
}

.front  { transform: translateZ(50px); }
.back   { transform: translateZ(-50px) rotateY(180deg); }
.left   { transform: translateX(-50px) rotateY(-90deg); }
.right  { transform: translateX(50px) rotateY(90deg); }
.top    { transform: translateY(-50px) rotateX(90deg); }
.bottom { transform: translateY(50px) rotateX(-90deg); }

.controls {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
}

input[type="range"] {
  width: 150px;
}

button {
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  backdrop-filter: blur(10px);
}

button:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>