<template>
  <div class="banner-content" :style="{ backgroundImage: `url(${banner})` }">

    <div class="banner-inner">
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
import banner from '@/assets/product/banner.png';
</script>

<style scoped lang="less">
// 变量定义
@primary-color: #0959af;
@text-white: #ffffff;
@border-radius: 0.21rem;

.banner-content {
  position: relative;
  width: 100%;
  height: 6.15rem; 
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  // 背景图核心配置
  background-image: url('');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.banner-inner {
  position: relative;
  z-index: 2;
  text-align: center;
  color: @text-white;
  top: calc(2vh + 2.1rem);
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
@media (max-width: 1440px) {
  .banner-inner {
    top: 2.1rem; // 适配较小屏幕
  }
}

@media (max-width: 1200px) {
  .banner-inner {
    top: 1.9rem; // 适配中等屏幕
  }
}
@media (max-width: 768px) {
  .banner-content {
    height: auto;
    min-height: 500px;
    padding: 4rem 1rem;
    .banner-inner {
      top: 1.5rem; // 适配平板
      height: auto;
      min-height: 500px;
      padding: 4rem 1rem;
    }

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
@media (max-width: 480px) {
  .banner-inner {
    top: 1.2rem; // 适配手机
  }
}
</style>