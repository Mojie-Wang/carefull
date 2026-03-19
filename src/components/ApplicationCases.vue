<template>
  <div class="product-range">
    <!-- 导航栏 -->
    <nav class="nav-bar">
        <div class="logo">Product Range</div>
        <ul class="nav-menu">
            <li v-for="(item, index) in navItems" :key="item.id">
            <a 
              href="#" 
              class="nav-link" 
              :class="{ active: activeIndex === index }" 
              @click.prevent="handleNavClick(index)"
            >
                <!-- 动态渲染 span，支持单行或双行文字 -->
                <span v-for="(text, i) in item.label" :key="i">{{ text }}</span>
            </a>
        </li>
        </ul>
    </nav>

    <div class="main-content">
      <div class="product-header">
        <div class="product-info">
          <div class="ballistic-vest">Ballistic Vest</div>
          <ul class="features">
            <li>Lightweight Design</li>
            <li>Convenient & Comfortable</li>
            <li>Wear Waterproof & Flame-Retardant</li>
            <li>Professional Craftsmanship</li>
          </ul>
          <div class="arrow">
            <div class="arrowLeft"><img :src="arrowLeft" /></div>
            <div class="arrowRight"><img :src="arrowRight" /></div>
          </div>
        </div>
        <div class="product-image">
          <img :src="product1" alt="Ballistic Vest" />
        </div>
      </div>
      <div class="middle-content">
        <!-- 分类区域 -->
        <div class="classification-section">
          <div class="classification-top">
            <div class="classification-title">CLASSIFICATION:</div>
            <div class="devide-line"></div>
          </div>
          <div class="classification-list">
          <div 
            v-for="(item, index) in classifications" 
            :key="index"
            class="classification-item"
            :class="{ active: selectedIndex === index }"
            @click="selectClassification(index)"
          >
            <span>{{ item }}</span>
          </div>
        </div>
        </div>
        <!-- 产品列表 -->
        <div class="product-grid">
          <div 
            v-for="(product, index) in products" 
            :key="product.id"
            class="product-card"
          >
            <div class="product-img">
              <img :src="product.img" :alt="product.name" />
            </div>
            <div class="product-details">
              <div class="police">{{ product.name }}</div>
              <div class="price">{{ product.price }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import product1 from '@/assets/product/product1.png';
import classification1 from '@/assets/product/classification1.png';
import classification2 from '@/assets/product/classification2.png';
import classification3 from '@/assets/product/classification3.png';
import classification4 from '@/assets/product/classification4.png';
import arrowLeft from '@/assets/product/arrowLeft.png';
import arrowRight from '@/assets/product/arrowRight.png';
import { ref } from 'vue';
const classifications = [
  'NJ HG I',
  'NJ HG II',
  'NJ RF I',
  'NJ RF II',
  'NJ RF III',
  'NJ OTIS I',
  'NJ OTIS II'
];
const products = [
  {
    id: 1,
    name: 'Police Ballistic Vest Police Ballistic Vest',
    price: '$210.00 - $450',
    img: classification2
  },
  {
    id: 2,
    name: 'Police body armor',
    price: '$210.00 - $450',
    img: classification4
  },
  {
    id: 3,
    name: 'Bulletproof vest',
    price: '$210.00 - $450',
    img: classification4
  },
  {
    id: 4,
    name: 'Police Ballistic Vest',
    price: '$210.00 - $450',
    img: classification3
  },
  {
    id: 4,
    name: 'Police Ballistic Vest',
    price: '$210.00 - $450',
    img: classification1
  }
];

// 定义导航菜单数据
const navItems = [
  { label: ['FIBER'], id: 'fiber' },
  { label: ['ARMOR', 'PLATE'], id: 'armor-plate' },
  { label: ['BODY', 'ARMOR'], id: 'body-armor' },
  { label: ['BALLISTIC', 'HELMET'], id: 'ballistic-helmet' },
  { label: ['BALLISTIC', 'SHIELD'], id: 'ballistic-shield' },
  { label: ['ARMOUR'], id: 'armour' },
  { label: ['OTHER'], id: 'other' }
];
const activeIndex = ref(2);

const handleNavClick = (index: number) => {
  activeIndex.value = index;
};
const selectedIndex = ref(0);

const selectClassification = (index: number) => {
  selectedIndex.value = index;
};
</script>

<style scoped lang="scss">
// 基础变量定义
$primary-color: #000;
$secondary-color: #e4e7ed;
$text-color: #000;
$border-color: #ddd;
$hover-color: #0959af;

.product-range {
  font-family: 'Arial', sans-serif;
  background-color: #fff;
  color: $text-color;
}

// 导航栏样式
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 2.37rem;
  border-bottom: 1px solid $border-color;
  background-color: #fff;
  
  .logo {
    font-size: 0.5rem;
    font-family: var(--font-montserrat);
    font-style: italic;
    line-height: 0.61rem;
    font-weight: 900;
    color: $primary-color;
    margin: 0;
  }
  
  .nav-menu {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 0.48rem;
    
    .nav-link {
      text-decoration: none;
      color: $text-color;
      font-size: 0.22rem;
      font-weight: 400;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: all 0.3s ease;

      &:hover {
        color: $primary-color;
      }

      &.active {
        color: $primary-color;
        font-weight: bold;

        &::after {
          content: '';
          position: absolute;
          bottom: -0.08rem; // ✅ 精确调整到第二行文字下方
          left: 50%;
          transform: translateX(-50%);
          width: 0.91rem;
          height: 0.1rem;
          background: $hover-color; // 蓝色
          border-radius: 0.05rem;
          box-shadow: 0 0 0 0.02rem rgba(0, 0, 0, 0.1); // 微弱阴影增强对比
        }
      }
    }
  }
}

// 主要内容区域
.main-content {
//   max-width: 1200px;
  margin: 0 auto;
  // padding: 3.46rem 1.42rem 1.48rem 2.39rem;
}

// 产品头部区域
.product-header {
  display: flex;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  background-image: url('@/assets/product/productBg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 300px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
}

.product-info {
  padding: 3.46rem 0.48rem 1.48rem 2.39rem;
  .ballistic-vest {
    font-size: 0.5rem;
    color: $text-color;
    font-family: var(--font-montserrat);
    font-weight: 600;
  }
  
  .features {
    margin: 0.6rem auto 0.36rem;
    
    li {
      color: $text-color;
      font-size: 0.22rem;
      position: relative;
      list-style: none;
      margin: 0.2rem auto;
      &::before {
        content: "•";
        color: $hover-color;
        position: absolute;
        left: -0.22rem;
        font-size: 0.3rem;
      }
    }
  }
  .arrow{
   display: flex;
   .arrowLeft{
    width: 0.77rem;
    height: 0.77rem;
    margin-right: 0.31rem;
    img{
      width: 100%;
      height: 100%;
    }
   }
   .arrowRight{
    width: 0.77rem;
    height: 0.77rem;
    img{
      width: 100%;
      height: 100%;
    }
   }
  }
  .image-navigation {
    display: flex;
    gap: 0.5rem;
    
    .nav-btn {
      width: 0.3rem;
      height: 0.3rem;
      border: 1px solid $border-color;
      background-color: transparent;
      color: $text-color;
      cursor: pointer;
      border-radius: 50%;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: $primary-color;
        color: white;
      }
    }
  }
}

.product-image {
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 9.86rem;
    height: auto;
    border-radius: 4px;
  }
}
.middle-content{
  display: flex;
  // 分类区域
  .classification-section {
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }
  }
  .product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 0.46rem;
    row-gap: 0.58rem;
    margin-left: 0.48rem;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 0.46rem;
      row-gap: 0.58rem;
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      column-gap: 0;
      row-gap: 0.58rem;
    }
  }
}

.classification-top{
   margin-left: 2.36rem;
  .classification-title {
    font-family: var(--font-montserrat);
    color: $text-color;
    font-weight: 600;
    font-size: 0.34rem;
    color: #000000;
    line-height: 0.26rem;
  }
  .devide-line{
    border-bottom: 1px solid #000;
    width: 3.37rem;
    margin-top: 0.3rem;
  }
}

.classification-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2.36rem;

.classification-item {
  padding: 0.5rem 0;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  span {
    font-weight: 400;
    font-size: 0.24rem;
    color: #000000;
    line-height: 0.26rem;
    color: $text-color;
    margin-left: 0.3rem;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    // margin-right: 0.3rem;
    border: 1px solid #000;
    background-color: transparent;
  }

  &.active {
    font-weight: bold;
    color: $primary-color;

    &::before {
      background-color: #000; // 实心黑点
      border: none;
    }
  }

  &:last-child {
    border-bottom: none;
  }
}
}

.product-card {
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
}

.product-img {
  width: 3.2rem;
  height: 3.59rem;
  border: 1px dashed #ddd;
  overflow: hidden;
  margin: 0 auto;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
  }
}

.product-details {
  padding: 0.15rem 0.22rem;
  width: 3.22rem;
  height: 1.19rem;
  background: #F9F9F9;
  .police{
    font-weight: 600;
    font-size: 0.24rem;
    color: #000000;
    line-height: 0.26rem;
    text-align: left;
  }
  
  .price {
    font-size: 0.24rem;
    color: #0959AF;
    line-height: 0.26rem;
    text-align: left;
    max-width: 3.22rem;
    margin-top: 0.1rem;
  }
}

// 响应式设计
@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
  }
  
  .nav-bar {
    padding: 0.3rem 2.37rem;
  }
  
  .product-header {
    padding: 0.5rem;
  }
  
  .product-grid {
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .nav-bar {
    flex-direction: column;
    gap: 1rem;
    
    .logo {
      text-align: center;
    }
    
    .nav-menu {
      flex-wrap: wrap;
      justify-content: center;
      
      .nav-link {
        padding: 0.3rem 0.5rem;
        font-size: 0.22rem;
      }
    }
  }
  
  .main-content {
    padding: 0rem;
  }
  
  .product-header {
    padding: 0.5rem;
  }
  
  .product-grid {
    gap: 0.5rem;
  }
}
</style>