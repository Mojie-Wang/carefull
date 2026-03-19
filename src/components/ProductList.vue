<template>
  <div class="application-cases">
    <!-- Banner 区域 -->
    <section class="banner">
      <div class="banner-content">
        <img
          :src="productBanner"
          alt="Military Equipment"
          class="banner-image"
          @error="handleImageError"
        />
      </div>
    </section>

    <!-- 章节标题 -->
    <section class="section-title">
      <div class="title-content">Application Cases</div>
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
import { ref, onMounted, onUnmounted } from "vue";
import productList1 from "@/assets/product/productList1.png";
import productBanner from "@/assets/product/productBanner.png";
import arrowRightWhite from "@/assets/cases/arrowRightWhite.png";
import arrowRightBlack from "@/assets/cases/arrowRightBlack.png";

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

<style scoped lang="less">
@primary-color: #0959af;
@primary-hover: #0052a3;
@text-color: #333;
@text-light: #666;
@bg-light: #f5f5f5;
@border-color: #e4e7ed;
@transition: all 0.3s ease;

//  设计稿 1920px，标题内容宽度 = 1920 - 684 - 684 = 552px
@title-content-width: 552px;
// 产品列表更宽
@product-max-width: 1200px;

.flex-center() {
  display: flex;
  align-items: center;
  justify-content: center;
}

.application-cases {
  min-height: 100vh;
  background-color: #fff;
  width: 100%;
}
.banner {
  width: 100%;
  height: 400px;
  overflow: hidden;

  .banner-content {
    width: 100%;
    height: 100%;
  }

  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.section-title {
  padding-top: 50px;
  padding-bottom: 40px;
  width: 100%;

  .title-content {
    max-width: @title-content-width;
    margin: 0 auto;
    text-align: center;

    .title {
      font-size: 36px;
      font-weight: 700;
      color: @text-color;
      margin-bottom: 20px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
}

.product-list {
  padding: 0 20px 60px;

  .product-list-container {
    max-width: @product-max-width;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .product-item {
    display: flex;
    gap: 40px;
    align-items: center;
    padding: 30px;
    background-color: @bg-light;
    border-radius: 4px;
    transition: @transition;

    .product-image {
      flex: 1;
      max-width: 400px;
      border-radius: 8px;
      overflow: hidden;

      img {
        width: 100%;
        height: 280px;
        object-fit: cover;
        transition: @transition;
      }
    }

    .product-info {
      flex: 1;
      padding: 20px;

      .product-title {
        font-size: 24px;
        font-weight: 600;
        color: @text-color;
        margin-bottom: 16px;
        line-height: 1.4;
      }

      .product-description {
        font-size: 15px;
        color: @text-light;
        line-height: 1.8;
        margin-bottom: 24px;
      }

      .learn-more-btn {
        .flex-center();
        gap: 10px;
        padding: 12px 28px;
        border: none;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: @transition;
        white-space: nowrap;

        span {
          line-height: 1;
        }

        .arrow {
          width: 24px;
          height: 6px;
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
          color: @text-color;
          border: 1px solid @border-color;

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
      max-width: 700px;
      font-size: 30px;
    }
  }
}

@media screen and (max-width: 992px) {
  .section-title {
    .title-content {
      max-width: 80%;
    }

    .title {
      font-size: 28px;
    }
  }

  .product-item {
    .product-image {
      max-width: 300px;

      img {
        height: 220px;
      }
    }

    .product-info {
      .product-title {
        font-size: 20px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .banner {
    height: 250px;
  }

  .section-title {
    padding-top: 40px;
    padding-bottom: 30px;

    .title-content {
      max-width: 90%;
    }

    .title {
      font-size: 24px;
    }
  }

  .product-list {
    .product-list-container {
      gap: 30px;
    }

    .product-item {
      flex-direction: column !important;
      padding: 20px;

      .product-image {
        max-width: 100%;
        width: 100%;

        img {
          height: 200px;
        }
      }

      .product-info {
        padding: 15px 0 0;

        .product-title {
          font-size: 18px;
        }

        .product-description {
          font-size: 14px;
        }

        .learn-more-btn {
          padding: 10px 24px;
          font-size: 13px;

          .arrow {
            width: 20px;
            height: 5px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .banner {
    height: 180px;
  }

  .section-title {
    padding-top: 30px;
    padding-bottom: 20px;

    .title-content {
      max-width: 95%;
    }

    .title {
      font-size: 20px;
    }

    .title-line {
      width: 60px;
    }
  }

  .product-item {
    padding: 15px;

    .product-image {
      img {
        height: 180px;
      }
    }

    .product-info {
      .product-title {
        font-size: 16px;
      }

      .product-description {
        font-size: 13px;
        line-height: 1.6;
      }

      .learn-more-btn {
        padding: 8px 20px;
        font-size: 12px;

        .arrow {
          width: 18px;
          height: 4px;
        }
      }
    }
  }
}
</style>
