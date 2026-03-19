<template>
  <div class="application-cases">
    <!-- 章节标题 -->
    <section class="section-title">
      <div class="title-content">
        <h2 class="title">Application Cases</h2>
      </div>
    </section>

    <!-- 产品列表 -->
    <section class="product-list">
      <div class="product-list-container">
        <div
          v-for="(product, index) in products"
          :key="product.id"
          class="product-item"
        >
          <div class="product-image">
            <img
              :src="product.image"
              :alt="product.title"
              @error="handleImageError"
            />
          </div>
          <div class="product-info">
            <h3 class="product-title">{{ product.title }}</h3>
            <p class="product-description">{{ product.description }}</p>
            <button
              :class="['learn-more-btn', index === 0 ? 'primary' : 'outline']"
              type="button"
            >
              <span>Learn More</span>
              <img
                class="arrow"
                :src="index === 0 ? arrowRightWhite : arrowRightBlack"
                alt="arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import productList1 from '@/assets/product/productList1.png'
// import productBanner from '@/assets/product/productBanner.png'
import arrowRightWhite from '@/assets/cases/arrowRightWhite.png'
import arrowRightBlack from '@/assets/cases/arrowRightBlack.png'

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const products = ref<Product[]>([
  {
    id: 1,
    title: "A 155-gun light protective turret",
    description:
      "An integrated lightweight protective ammunition box is designed for a certain type of 155mm howitzer.",
    image: productList1,
  },
  {
    id: 2,
    title: "A certain 155 gun protective ammunition",
    description:
      "Adopting a steel framework and non-metallic protective material panels. It can withstand the 0° angle firing of Type 53 7.62mm ordinary steel-core bullets at a distance of 100 meters.",
    image: productList1,
  },
  {
    id: 3,
    title: "A 155-gun light protective turret",
    description:
      "An integrated lightweight protective ammunition box is designed for a certain type of 155mm howitzer.",
    image: productList1,
  },
  {
    id: 4,
    title: "A 155-gun light protective turret",
    description:
      "An integrated lightweight protective ammunition box is designed for a certain type of 155mm howitzer.",
    image: productList1,
  },
]);

const handleImageError = (event: Event): void => {
  const img = event.target as HTMLImageElement;
  img.src = productList1;
};

const handleResize = (): void => {};
const handleScroll = (): void => {};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
$primary-color: #0959af;
$primary-hover: #0052a3;
$text-color: #000;
$text-light: #555;
$bg-light: #f5f5f5;
$border-color: #000;
$transition: all 0.3s ease;

//  设计稿 1920px，标题内容宽度 = 1920 - 684 - 684 = 552px
$title-content-width: 5.52rem;
// 产品列表更宽
$product-max-width: 14.31rem;

.flex-center() {
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-title {
  padding-top: 0.5rem;
  padding-bottom: 0.4rem;
  width: 100%;

  .title-content {
    max-width: @title-content-width;
    margin: 0 auto;
    font-family: var(--font-montserrat);
    text-align: center;
  }
}

.product-list {
  padding: 0 0.2rem 0.6rem;
  
  .product-list-container {
    max-width: @product-max-width;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .product-item {
    display: flex;
    align-items: stretch;
    background-color: $bg-light;
    // border-radius: 0.04rem;
    transition: $transition;
    overflow: hidden;
    
    .product-image {
      flex: 1;
      max-width: 6rem; // 限制最大宽度
      height: 100%;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }

    .product-info {
      flex: 1;
      padding-left: 0.5rem;
      .product-title {
        font-size: 0.36rem;
        color: $text-color;
        margin-bottom: 0.18rem;
        line-height:0.44rem;
      }

      .product-description {
        font-size: 0.22rem;
        color: $text-light;
        line-height: 1.8;
        margin-bottom: 0.3rem;
      }

      .learn-more-btn {
        @include flex-center;
        gap: 0.13rem;
        padding: 0.12rem 0.28rem;
        border: none;
        border-radius: 0.04rem;
        font-size: 0.27rem;
        font-weight: 500;
        cursor: pointer;
        transition: @transition;
        white-space: nowrap;

        span {
          line-height: 1;
        }

        .arrow {
          width: 0.56rem;
          height: 0.13rem;
          object-fit: contain;
          display: block;
          flex-shrink: 0;
          transition: @transition;
        }

        &.primary {
          background-color: @primary-color;
          color: #fff;

          &:hover {
            background-color: @primary-hover;

            .arrow {
              transform: translateX(5px);
            }
          }
        }

        &.outline {
          background-color: #fff;
          color: #232323;
          border: 1px solid $border-color;
          
          &:hover {
            background-color: @primary-color;
            color: #fff;
            border-color: @primary-color;

            .arrow {
              transform: translateX(5px);
            }
          }
        }
      }
    }
  }
}

// ============================================
// 响应式设计
// ============================================
@media screen and (max-width: 1440px) {
  .section-title {
    .title-content {
      // 1440 屏幕下，内容宽度适当放大
      max-width: 7.0rem;
      font-size: 0.6rem;
       font-family: var(--font-montserrat);
    }
  }
}

@media screen and (max-width: 992px) {
  .section-title {
    .title-content {
      max-width: 80%;
    }

    .title {
      font-size: 0.28rem;
    }
  }

  .product-item {
    .product-image {
      max-width: 5.93rem;
      
      img {
        height: 2.2rem;
      }
    }

    .product-info {
      .product-title {
        font-size: 0.2rem;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .banner {
    height: 2.5rem;
  }

  .section-title {
    padding-top: 0.4rem;
    padding-bottom: 0.3rem;
    
    .title-content {
      max-width: 90%;
    }

    .title {
      font-size: 0.24rem;
    }
  }

  .product-list {
    .product-list-container {
      gap: 0.4rem;
    }

    .product-item {
      flex-direction: column !important;
      padding: 0.2rem;
      
      .product-image {
        max-width: 100%;
        width: 100%;

        img {
          height: 2rem;
        }
      }

      .product-info {
        padding: 0.15rem 0 0;
        
        .product-title {
          font-size: 0.36rem;
        }

        .product-description {
          font-family: var(--font-montserrat);
          font-weight: 400;
          color:#555;
          line-height:0.32rem;
          font-size: 0.22rem;
        }

        .learn-more-btn {
          padding: 0.1rem 0.24rem;
          font-size: 0.27rem;
          line-height: 0.5rem;
          .arrow {
            width: 0.56rem;
            height: 0.13rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .banner {
    height: 1.8rem;
  }

  .section-title {
    padding-top: 0.3rem;
    padding-bottom: 0.2rem;
    
    .title-content {
      max-width: 95%;
    }

    .title {
      font-size: 0.2rem;
    }

    .title-line {
      width: 0.6rem;
    }
  }

  .product-item {
    padding: 0.15rem;
    
    .product-image {
      img {
        height: 1.8rem;
      }
    }

    .product-info {
      .product-title {
        font-size: 0.16rem;
      }

      .product-description {
        font-size: 0.13rem;
        line-height: 1.6;
      }

      .learn-more-btn {
        padding: 0.08rem 0.2rem;
        font-size: 0.12rem;
        
        .arrow {
          width: 0.18rem;
          height: 0.04rem;
        }
      }
    }
  }
}
</style>
