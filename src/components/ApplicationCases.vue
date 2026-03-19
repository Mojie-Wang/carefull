<template>
  <div class="product-range">
    <!-- 导航栏 -->
    <nav class="nav-bar">
        <div class="logo">Product Range</div>
        <ul class="nav-menu">
            <li><a href="#" class="nav-link"><span>FIBER</span></a></li>
            <li><a href="#" class="nav-link"><span>ARMOR</span><span>PLATE</span></a></li>
            <li><a href="#" class="nav-link active"><span>BODY</span><span>ARMOR</span></a></li>
            <li><a href="#" class="nav-link"><span>BALLISTIC</span><span>HELMET</span></a></li>
            <li><a href="#" class="nav-link"><span>BALLISTIC</span><span>SHIELD</span></a></li>
            <li><a href="#" class="nav-link"><span>ARMOUR</span></a></li>
            <li><a href="#" class="nav-link"><span>OTHER</span></a></li>
        </ul>
    </nav>

    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 防弹衣主图和描述 -->
      <div class="product-header">
        <div class="product-info">
          <h1>Ballistic Vest</h1>
          <ul class="features">
            <li>Lightweight Design</li>
            <li>Convenient & Comfortable</li>
            <li>Wear Waterproof & Flame-Retardant</li>
            <li>Professional Craftsmanship</li>
          </ul>
          <div class="image-navigation">
            <button class="nav-btn prev"><</button>
            <button class="nav-btn next">></button>
          </div>
        </div>
        <div class="product-image">
          <img :src="product1" alt="Ballistic Vest" />
        </div>
      </div>

      <!-- 分类区域 -->
      <div class="classification-section">
        <div class="classification-title">CLASSIFICATION:</div>
        <div class="classification-list">
          <div class="classification-item active">
            <span>NJ HG I</span>
          </div>
          <div class="classification-item">
            <span>NJ HG II</span>
          </div>
          <div class="classification-item">
            <span>NJ RF I</span>
          </div>
          <div class="classification-item">
            <span>NJ RF II</span>
          </div>
          <div class="classification-item">
            <span>NJ RF III</span>
          </div>
          <div class="classification-item">
            <span>NJ OTIS I</span>
          </div>
          <div class="classification-item">
            <span>NJ OTIS II</span>
          </div>
        </div>
      </div>

      <!-- 产品列表 -->
      <div class="product-grid">
        <div class="product-card">
          <div class="product-img">
            <img :src="classification2" alt="Police Ballistic Vest" />
          </div>
          <div class="product-details">
            <h3>Police Ballistic Vest Police Ballistic Vest</h3>
            <div class="price">$210.00 - $450</div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img">
            <img :src="classification4" alt="Police body armor" />
          </div>
          <div class="product-details">
            <h3>Police body armor</h3>
            <div class="price">$210.00 - $450</div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img">
            <img :src="classification4" alt="Bulletproof vest" />
          </div>
          <div class="product-details">
            <h3>Bulletproof vest</h3>
            <div class="price">$210.00 - $450</div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img">
            <img :src="classification3" alt="Police Ballistic Vest" />
          </div>
          <div class="product-details">
            <h3>Police Ballistic Vest</h3>
            <div class="price">$210.00 - $450</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import product1 from '@/assets/product/product1.png';
import classification2 from '@/assets/product/classification2.png';
import classification3 from '@/assets/product/classification3.png';
import classification4 from '@/assets/product/classification4.png';
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
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 0.48rem;
    
    .nav-link {   
      text-decoration: none;
      color: $text-color;
      font-size: 0.22rem; // 调整字体大小适配设计图
      font-weight: 400;
      display: flex;
      flex-direction: column; // 关键：垂直排列 span
      align-items: center;    // 水平居中
      justify-content: center;
      position: relative;
    //   padding: 0.3rem 0.5rem;
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
          bottom: -4px; // 调整到第二行文字下方
          left: 50%;
          transform: translateX(-50%);
          width: 0.91rem;
          height: 0.1rem;
          background: $hover-color;
        }
      }
    }
  }
}

// 主要内容区域
.main-content {
//   max-width: 1200px;
  margin: 0 auto;
  padding: 3.46rem 1.42rem 1.48rem 2.39rem;
}

// 产品头部区域
.product-header {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
//   border: 1px dashed $border-color;
  border-radius: 4px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
}

.product-info {
  flex: 1;
  padding-right: 1rem;
  
  h1 {
    font-size: 0.5rem;
    margin: 0 0 1rem 0;
    color: $text-color;
  }
  
  .features {
    margin: 1rem 0;
    padding-left: 1rem;
    
    li {
      margin: 0.5rem 0;
      color: $text-color;
      font-size: 0.22rem;
      position: relative;
      
      &::before {
        content: "•";
        color: $primary-color;
        position: absolute;
        left: -1rem;
      }
    }
  }
  
  .image-navigation {
    display: flex;
    gap: 0.5rem;
    
    .nav-btn {
      width: 30px;
      height: 30px;
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
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
}

// 分类区域
.classification-section {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
}

.classification-title {
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  color: $text-color;
}

.classification-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  .classification-item {
    padding: 0.5rem 0;
    border-bottom: 1px solid $border-color;
    cursor: pointer;
    transition: all 0.3s ease;
    
    span {
      font-size: 0.875rem;
      color: $text-color;
    }
    
    &.active {
      font-weight: bold;
      color: $primary-color;
    }
    
    &:last-child {
      border-bottom: none;
    }
  }
}

// 产品网格
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}

.product-card {
  border: 1px dashed $border-color;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
}

.product-img {
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
  }
}

.product-details {
  padding: 1rem;
  
  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 0.875rem;
    color: $text-color;
  }
  
  .price {
    font-size: 0.75rem;
    color: $primary-color;
    font-weight: bold;
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
        font-size: 0.75rem;
      }
    }
  }
  
  .main-content {
    padding: 0.5rem;
  }
  
  .product-header {
    padding: 0.5rem;
  }
  
  .product-grid {
    gap: 0.5rem;
  }
}
</style>