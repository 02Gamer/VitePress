<!-- 图片方大css -->
<template>
  <div class="image-viewer-container">
    <!-- 缩略图（带阴影和圆角） -->
    <img
      :src="src"
      :alt="alt"
      class="thumbnail"
      @click="openViewer"
      tabindex="0"
    />

    <!-- 图片查看器 -->
    <transition name="fade">
      <div
        v-if="isViewerOpen"
        class="viewer-overlay"
        @click.self="closeViewer"
        @wheel.prevent="handleWheel"
        @mousedown="startDrag"
        @mousemove="handleDrag"
        @mouseup="endDrag"
        @mouseleave="endDrag"
      >
        <div
          class="image-container"
          :style="{
            transform: `scale(${scale}) translate(${offset.x}px, ${offset.y}px)`,
            cursor: isDragging ? 'grabbing' : 'grab'
          }"
        >
          <img
            :src="src"
            :alt="alt"
            class="viewer-image"
            @click.stop
          />
        </div>

        <!-- 控制按钮（带阴影和圆角） -->
        <div class="viewer-controls">
          <button @click="zoomIn" aria-label="Zoom in" class="control-btn">+</button>
          <button @click="zoomOut" aria-label="Zoom out" class="control-btn">-</button>
          <button @click="resetZoom" aria-label="Reset zoom" class="control-btn">↻</button>
          <button @click="closeViewer" aria-label="Close" class="control-btn close-btn">&times;</button>
        </div>

        <!-- 缩放指示器 -->
        <div class="scale-indicator">
          {{ Math.round(scale * 100) }}%
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  src: String,
  alt: String
});

// 查看器状态
const isViewerOpen = ref(false);
const scale = ref(1);
const offset = ref({ x: 0, y: 0 });
const isDragging = ref(false);
const startPos = ref({ x: 0, y: 0 });

// 打开/关闭查看器
const openViewer = () => {
  isViewerOpen.value = true;
  document.body.style.overflow = 'hidden';
  resetZoom();
};

const closeViewer = () => {
  isViewerOpen.value = false;
  document.body.style.overflow = '';
};

// 缩放控制
const zoomIn = () => {
  scale.value = Math.min(scale.value + 0.2, 5);
};

const zoomOut = () => {
  scale.value = Math.max(scale.value - 0.2, 0.5);
};

const resetZoom = () => {
  scale.value = 1;
  offset.value = { x: 0, y: 0 };
};

// 滚轮缩放
const handleWheel = (e) => {
  e.preventDefault();
  const delta = e.deltaY > 0 ? -0.1 : 0.1;
  scale.value = Math.min(Math.max(scale.value + delta, 0.5), 5);
};

// 拖拽移动
const startDrag = (e) => {
  if (e.button !== 0) return;
  isDragging.value = true;
  startPos.value = {
    x: e.clientX - offset.value.x,
    y: e.clientY - offset.value.y
  };
};

const handleDrag = (e) => {
  if (!isDragging.value) return;
  offset.value = {
    x: e.clientX - startPos.value.x,
    y: e.clientY - startPos.value.y
  };
};

const endDrag = () => {
  isDragging.value = false;
};

// 键盘控制
const handleKeyDown = (e) => {
  if (!isViewerOpen.value) return;
  
  switch (e.key) {
    case 'Escape':
      closeViewer();
      break;
    case '+':
    case '=':
      zoomIn();
      break;
    case '-':
      zoomOut();
      break;
    case '0':
      resetZoom();
      break;
    case 'ArrowLeft':
      offset.value.x -= 20;
      break;
    case 'ArrowRight':
      offset.value.x += 20;
      break;
    case 'ArrowUp':
      offset.value.y -= 20;
      break;
    case 'ArrowDown':
      offset.value.y += 20;
      break;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  document.body.style.overflow = '';
});
</script>

<style scoped>
/* 缩略图样式 - 添加阴影和圆角 */
.thumbnail {
  max-width: 100%;
  height: auto;
  cursor: zoom-in;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.thumbnail:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

/* 查看器遮罩 */
.viewer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.33);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
  user-select: none;
}

/* 图片容器 - 添加阴影和圆角 */
.image-container {
  transition: transform 0.1s ease-out;
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

.viewer-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  pointer-events: none;
  display: block;
}

/* 控制按钮 - 优化阴影和圆角 */
.viewer-controls {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
}

.control-btn {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.control-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.close-btn {
  background: rgba(255, 75, 75, 0.3);
}

.close-btn:hover {
  background: rgba(255, 75, 75, 0.5);
}

/* 缩放指示器 */
.scale-indicator {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
}

/* 动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, backdrop-filter 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  backdrop-filter: blur(0);
}
</style>