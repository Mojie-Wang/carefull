<template>
  <!-- Banner 区域 -->
  <!-- 使用内联样式设置背景图，确保路径正确 -->
  <div class="banner-content" :style="{ backgroundImage: `url(${banner})` }">
    
    <!-- 遮罩层 (可选)：如果图片太亮导致字看不清，可以开启这个遮罩 -->
    <!-- <div class="banner-overlay"></div> -->

    <!-- 内容容器：负责居中 -->
    <div class="banner-inner">
      <!-- <h1 class="banner-title">Ballistic helmet</h1>
      <p class="banner-subtitle">Lightweight and with stable ballistic safety performance</p> -->
      
      <!-- 按钮容器 -->
      <div class="contact-btn-container">
        <button class="btn-learn primary" type="button">
          <span>Learn More</span>
        </button>
      </div>
    </div>
  </div>

  <ApplicationCases />
</template>

<script setup>
import { ref } from 'vue';
import ApplicationCases from '@/components/ApplicationCases.vue';
import banner from '@/assets/product/banner.png'; // 确保路径正确
</script>

<style scoped lang="less">
// 变量定义
@primary-color: #0959af; // 假设的品牌蓝
@text-white: #ffffff;
@border-radius: 0.21rem;    // 按钮圆角

.banner-content {
  position: relative;
  width: 100%;
  height: 6.15rem; 
  
  display: flex;
  justify-content: center; // 水平居中
  align-items: center;     // 垂直居中
  
  // 背景图核心配置
  background-image: url(''); // 由 :style 动态注入
  background-size: cover;    // 覆盖整个区域
  background-position: center center; // 居中显示
  background-repeat: no-repeat;
}

.banner-inner {
  position: relative;
  z-index: 2;
  text-align: center;
  color: @text-white;
  top: 2.45rem;
}

.contact-btn-container {
  display: flex;
  justify-content: center;
}

.btn-learn {
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  font-size: 0.36rem;
  font-weight: 500;
  color: @text-white;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: @border-radius;
  padding: 0.08rem 0.56rem;
  
  // 悬停效果
  &:hover {
    background-color: @text-white;
    color: @primary-color;
    border-color: @text-white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
}

// 响应式适配
@media (max-width: 768px) {
  .banner-content {
    height: auto;
    min-height: 500px;
    padding: 4rem 1rem;
  }
  
  .banner-title {
    font-size: 2rem;
  }
  
  .banner-subtitle {
    font-size: 1rem;
  }
  
  .btn-learn {
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>