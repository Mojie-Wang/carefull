<template>
  <div class="product-detail-page">
    <!-- 面包屑导航 -->
    <div class="breadcrumb">
      <span>Home</span>
      <span>Product Center</span>
      <span>Body armor</span>
      <span>Police Ballistic Vest</span>
    </div>
    <div class="divide-line"></div>
    
    <!-- 主内容区 -->
    <div class="main-content">
      <!-- 左侧图片 -->
      <div class="product-image-box">
        <img :src="classification2" alt="Police Ballistic Vest" />
      </div>

      <!-- 右侧信息 -->
      <div class="product-info">
        <h1 class="product-title">Police Ballistic Vest</h1>
        <div class="product-price">$210.00 - $450</div>
        <div class="product-features">
          <div>Ergonomic & Tactical Design Comfortable for Long Patrols</div>
          <div>Bullet & Stab Resistant Durable & Professional Craftsmanship</div>
        </div>

        <!-- 材质列表 -->
        <div class="material-list">
          <!-- 第 1 项 -->
          <div class="material-item">
            <div class="material-label">material</div>
            <div class="material-value">
                <div>composite material</div>
                <div class="arrowDown"><img :src="arrowDown" /></div>
            </div>
          </div>
          
          <!-- 第 2 项 -->
          <div class="material-item">
            <div class="material-label">material</div>
            <div class="material-value">
                <div>composite material</div>
                <div class="arrowDown"><img :src="arrowDown" /></div>
            </div>
          </div>
          
          <div class="material-item">
            <div class="material-label">material</div>
            <div class="material-value">
                <div>composite material</div>
                <div class="arrowDown"><img :src="arrowDown" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 Tabs -->
    <div class="tabs-container">
      <div class="tab-header">
        <div class="tab-item active">DESCRIPTION</div>
        <div class="tab-item">SPECIFICATIONS</div>
      </div>
      <div class="tab-content"> 
          Bullet proof vest is a personal protective product that shields the human body from bullets or explosive debris. The bulletproof inner liner is made of two of the most advanced high-performance fiber materials in the world, aramid and ultra-high molecular weight polyethylene, which are professionally designed, cut, and heat sealed. The outer jacket is made of polyester fiber, nylon, cotton and other synthetic materials, which have the characteristics of light weight, easy wearing, soft and comfortable, waterproof and flame-retardant, and minimal human injury after impact. It can be used for both military and police purposes, and can be worn internally or externally. Our company focuses on providing professional and cost-effective solutions for our customers. We can produce different types of bulletproof vests according to the bulletproof standards of different countries or regions and customer requirements. The protective area is 0.28 square meters, and the protective material is ultra-high molecular weight polyethylene composite material. The surface density of the protective material does not exceed 5.2kg/m2, and the total weight of the bulletproof vest does not exceed 2.5kg.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import classification2 from '@/assets/product/classification2.png';
import arrowDown from '@/assets/productDetail/arrowDown.png'
</script>

<style scoped lang="less">
// 变量定义
@primary-blue: #0766cb;
@text-dark: #000;
@text-gray: #666;
@border-color: #ddd;
@bg-light: #f9f9f9;

.product-detail-page {
  font-family: 'Arial', sans-serif;
  color: @text-dark;
  margin: 0 auto;
}
.breadcrumb {
  font-family: var(--font-montserrat);
  font-size: 0.24rem;
  font-weight: 600;
  color: @text-dark;
  margin-bottom: 0.17rem;
  margin-left: 2.42rem;
  span {
    &:not(:last-child)::after {
      content: ' / ';
      margin: 0 0.5rem;
    }
  }

  @media (max-width: 768px) {
    margin-left: 1rem;
    font-size: 0.8rem;
  }
}

.divide-line {
  border: 1px solid #e5e5e5;
  margin: 0.5rem 0;
}
.divide-line{
    border:1px solid #e5e5e5;
}
.main-content {
  display: flex;
  margin-bottom: 0.88rem;
  margin-left: clamp(1rem, 5vw, 2.43rem);
  margin-right: clamp(1rem, 5vw, 2.19rem);
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

.product-image-box {
  flex: 1;
//   border: 1px dashed @border-color;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  img {
    width: 100%;
    max-width: 6.03rem;
    height: auto;
    object-fit: contain;
  }
}

.product-info {
  flex: 1;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0;
    margin-top: 1rem;
  }
  .product-title {
    font-family: var(--font-montserrat);
    font-style: italic;
    font-size: 0.6rem;
    font-weight: 900;
    margin-top: 0.8rem;
  }

  .product-price {
    font-weight: 600;
    font-size: 0.46rem;
    color: #0766CB;
    line-height: 0.26rem;
    text-align: left;
  }

  .product-features {
    font-weight: 400;
    font-size: 0.26rem;
    color: #000000;
    line-height: 0.52rem;
    text-align: left;
  }

  .material-list {

    .material-item {
        width: 100%;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid @border-color;
        cursor: pointer;
        transition: background 0.2s;

      &:hover {
        background: @bg-light;
      }

      .material-label {
        font-weight: 600;
        font-size: 0.4rem;
        color: #000000;
        line-height: 0.52rem;
        text-align: left;
        margin-top: 0.12rem;
      }

       .material-value {
        width: 100%;
        font-weight: 400;
        font-size: 0.26rem;
        color: #333333;
        line-height: 0.52rem;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;

            .arrow-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 0.3rem;
                height: 0.15rem;
            }

            .arrowDown {
                width: 0.18rem;
                height: 0.09rem;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }
    }
  }
}

.tabs-container {
  .tab-header {
    display: flex;
    border-bottom: 1px solid @border-color;
    margin-left: 2.39rem;
    margin-right: 2.39rem;
    padding-bottom: 0.1rem;

    @media (max-width: 768px) {
      margin-left: 1rem;
      margin-right: 1rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tab-item {
      font-weight: 600;
      font-size: 0.26rem;
      line-height: 0.52rem;
      text-align: left;

      &.active {
        color: @primary-blue;
        margin-right: 1.04rem;
      }

      &:hover:not(.active) {
        color: @text-dark;
      }

      @media (max-width: 768px) {
        padding: 0.6rem 1rem;
        font-size: 0.8rem;
      }
    }
  }

  .tab-content {
    margin:0.26rem 2.39rem 1.32rem;
    font-weight: 400;
    font-size: 0.26rem;
    color: #000000;
    line-height: 0.52rem;
    text-align: left;

    @media (max-width: 768px) {
      margin-left: 1rem;
      margin-right: 1rem;
      font-size: 0.26rem;
      line-height: 1.5;
    }
  }
}

// 响应式适配
@media (max-width: 1440px) {
  .material-value {
    .arrow-wrapper {
      width: 0.28rem;
      height: 0.14rem;
    }
  }
}

@media (max-width: 1200px) {
  .material-value {
    .arrow-wrapper {
      width: 0.25rem;
      height: 0.125rem;
    }
  }
}
@media (max-width: 768px) {
  .product-detail-page {
    padding: 1rem;
  }

  .main-content {
    flex-direction: column;
  }

   .product-title {
    font-size: 1.5rem;
  }

  .product-price {
    font-size: 1.2rem;
  }

  .product-features p {
    font-size: 0.8rem;
  }

  .material-label {
    font-size: 0.8rem;
  }

  .material-value {
    font-size: 0.8rem;
  }

  .tabs-container {
    .tab-header {
      .tab-item {
        padding: 0.6rem 1rem;
        font-size: 0.8rem;
      }
    }
  }
}
@media (max-width: 480px) {
  .material-value {
    .arrow-wrapper {
      width: 0.2rem;
      height: 0.1rem;
    }
  }
}
</style>
