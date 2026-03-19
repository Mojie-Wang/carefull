<template>
  <div class="about-page">
    <!-- 内容容器：限制最大宽度 -->
    <div class="container">
      
      <!-- 关于我们 -->
      <div class="about-block">
        <h2 class="title">About Us</h2>
        <p class="text highlight">
          Shanghai Careful Technology Co., Ltd. was founded in 2005, specializing in R&D and production of safety protection products.
        </p>
        <p class="text">
          Adhering to "quality first", we serve chemical, petroleum, electric power, and construction industries with advanced equipment and a modern management system.
        </p>
        <div class="button-container">
          <button class="btn-primary">Contact Us</button>
        </div>
      </div>

      <!-- 图文交错布局 (复用同一个结构) -->
      <div class="feature-row">
        <div class="media-box">
          <img :src="produce1" alt="Production" />
        </div>
        <div class="text-box">
          <h3 class="subtitle">Advanced Production Equipment</h3>
          <p class="text">
            Equipped with CNC machining centers, welding robots, and automated lines ensuring consistency and reliability. Our 10,000+ sqm factory features clean rooms and strict QC systems.
          </p>
        </div>
      </div>

      <div class="feature-row reverse">
        <div class="text-box">
          <h3 class="subtitle">Professional Technical Team</h3>
          <p class="text">
            A team of 50+ engineers and senior experts drives our innovation. With 8% of revenue invested in R&D, we collaborate with universities to optimize product performance continuously.
          </p>
        </div>
        <div class="media-box">
          <img :src="produce2" alt="Team" />
        </div>
      </div>

      <!-- 资质证书 -->
      <div class="cert-block">
        <h2 class="title">Qualification Certificate</h2>
        <p class="text intro">
          Certified: ISO9001:2015, ISO14001:2015, ISO45001:2018.
        </p>
        <div class="cert-grid">
          <div v-for="(cert, idx) in certs" :key="idx" class="cert-item">
            <img :src="cert.img" :alt="cert.name" />
            <span>{{ cert.name }}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import patent1 from '@/assets/aboutus/patent1.png'
import patent2 from '@/assets/aboutus/patent2.png'
import patent3 from '@/assets/aboutus/patent3.png'
import patent4 from '@/assets/aboutus/patent4.png'
import produce1 from '@/assets/aboutus/produce1.png'
import produce2 from '@/assets/aboutus/produce2.png'

const certs = ref([
  { img: patent1, name: 'ISO9001' },
  { img: patent2, name: 'ISO14001' },
  { img: patent3, name: 'ISO45001' },
  { img: patent4, name: 'CE Marking' },
])
</script>

<style scoped lang="scss">
// 变量定义
$primary: #000;
$primary-dark: #0056b3;
$text-main: #333;
$text-sub: #666;
$bg-light: #f9f9f9;
$gap: 0.4rem;
$radius: 0.08rem;

// 通用混入
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-page {
  width: 100%;
  font-family: var(--font-montserrat), sans-serif;
  color: $text-main;
  line-height: 1.6;
  background: #fff;
}

// 2. 主容器 (限制宽度)
.container {
  width: 100%;
  max-width: 14.31rem; // 对应设计稿内容区
  margin: 0 auto;
  padding: 0.6rem 0.2rem;
  display: flex;
  flex-direction: column;
  gap: $gap;
}

// 3. 通用文本块
.about-block, .cert-block {
  text-align: center; // 修改：将文本内容居中对齐
  
  .title {
    font-size: 0.4rem;
    color: $primary;
    margin-bottom: 0.2rem;
    font-weight: 700;
    text-align: center; // 修改：确保标题居中
  }
  
  .text {
    font-size: 0.16rem;
    color: $text-sub;
    margin-bottom: 0.15rem;
    text-align: justify;
    
    &.highlight {
      font-weight: 600;
      color: $text-main;
    }
    
    &.intro {
      font-style: italic;
      font-size: 0.14rem;
    }
  }
  
  .button-container {
    display: flex;
    justify-content: center; // 居中按钮
    margin-top: 0.1rem;
  }
  
  .btn-primary {
    padding: 0.1rem 0.25rem;
    background: $primary;
    color: #fff;
    border: none;
    border-radius: $radius;
    font-size: 0.16rem;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover {
      background: $primary-dark;
    }
  }
}

// 4. 图文混排 (Flex 布局)
.feature-row {
  display: flex;
  gap: $gap;
  align-items: flex-start;
  
  &.reverse {
    flex-direction: row-reverse;
  }
  
  .media-box, .text-box {
    flex: 1;
    min-width: 0; // 防止内容溢出
  }
  
  .media-box {
    img {
      width: 100%;
      aspect-ratio: 16/10; // 保持比例
      object-fit: cover;
      border-radius: $radius;
      box-shadow: 0 0.04rem 0.1rem rgba(0,0,0,0.08);
      display: block;
      background: $bg-light;
    }
  }
  
  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    .subtitle {
      font-size: 0.28rem;
      color: $primary;
      margin-bottom: 0.15rem;
      font-weight: 600;
    }
    
    .text {
      font-size: 0.16rem;
      color: $text-sub;
      line-height: 1.6;
    }
  }
}

// 5. 证书网格 (Grid 布局)
.cert-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); // 默认4列
  gap: 0.2rem;
  margin-top: 0.2rem;
  
  .cert-item {
    text-align: center;
    
    img {
      width: 100%;
      aspect-ratio: 1/1; // 正方形
      object-fit: contain;
      border: 0.01rem solid #eee;
      border-radius: $radius;
      padding: 0.05rem;
      background: #fff;
      display: block;
    }
    
    span {
      display: block;
      margin-top: 0.08rem;
      font-size: 0.12rem;
      font-weight: 600;
      color: $text-sub;
    }
  }
}

// ============================================
// 响应式适配
// ============================================

// 平板及以下 (< 900px)
@media screen and (max-width: 900px) {
  .feature-row, .feature-row.reverse {
    flex-direction: column; // 强制垂直排列
    
    .media-box {
      img {
        aspect-ratio: 2/1; // 扁长图更适合移动端顶部
      }
    }
  }
  
  .cert-grid {
    grid-template-columns: repeat(2, 1fr); // 2列
  }
  
  .about-block, .cert-block {
    .title {
      font-size: 0.5rem;
    }
  }
}

// 手机及以下 (< 480px)
@media screen and (max-width: 480px) {
  .container {
    padding: 0.4rem 0.15rem;
  }
  
  .about-block, .cert-block {
    .title {
      font-size: 0.3rem;
    }
    .text {
      font-size: 0.14rem;
    }
  }
  
  .feature-row {
    .text-box {
      .subtitle {
        font-size: 0.24rem;
      }
    }
  }
  
  .cert-grid {
    grid-template-columns: 1fr; // 单列
    gap: 0.15rem;
  }
}
</style>