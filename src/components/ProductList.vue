<template>
  <div class="application-cases">
    <!-- 标题区域 -->
    <h2 class="page-title">Application Cases</h2>

    <!-- 列表区域 -->
    <div class="product-grid">
      <article
        v-for="(product, index) in products"
        :key="product.id"
        class="product-card"
      >
        <div class="card-image">
          <img
            :src="product.image"
            :alt="product.title"
            @error="handleImageError"
          />
        </div>

        <div class="card-content">
          <h3 class="card-title">{{ product.title }}</h3>
          <p class="card-desc">{{ product.description }}</p>

          <button
            :class="['btn-learn', index === 0 ? 'primary' : 'outline']"
            type="button"
          >
            <span>Learn More</span>
            <img
              class="btn-arrow"
              :src="index === 0 ? arrowRightWhite : arrowRightBlack"
              alt="arrow"
            />
          </button>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import productList1 from "@/assets/product/productList1.png";
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
</script>

<style scoped lang="less">
// 变量定义
@primary: #0959af;
@primary-hover: #0052a3;
@text-main: #000;
@text-sub: #555;
@bg-card: #f5f5f5;
@border: #e4e7ed;
@transition: all 0.3s ease;
@max-width: 14.31rem;

.application-cases {
  width: 100%;
  padding: 0.5rem 0.2rem 1rem;
  background: #fff;
}

// 标题
.page-title {
  font-family: var(--font-montserrat);
  font-size: 0.55rem;
  font-weight: 700;
  text-align: center;
  margin: 0 auto 0.8rem;
  max-width: @max-width;
  text-transform: uppercase;
  letter-spacing: 0.02rem;
}

// 网格布局 (自动适应)
.product-grid {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  max-width: @max-width;
  margin: 0 auto;
}

// 卡片
.product-card {
  display: flex;
  background: @bg-card;
  border-radius: 0.04rem;
  overflow: hidden;
  transition: @transition;

  // 图片区
  .card-image {
    flex: 0 0 6rem;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  // 内容区
  .card-content {
    flex: 1;
    padding: 0.2rem 0.2rem 0.2rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .card-title {
      font-size: 0.36rem;
      color: @text-main;
      margin: 0 0 0.18rem;
      line-height: 1.4;
      font-weight: 600;
    }

    .card-desc {
      font-size: 0.22rem;
      color: @text-sub;
      line-height: 1.6;
      margin: 0 0 0.3rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    // 按钮
    .btn-learn {
      display: inline-flex;
      align-items: center;
      gap: 0.13rem;
      padding: 0.12rem 0.28rem;
      border: none;
      border-radius: 0.04rem;
      font-size: 0.16rem;
      font-weight: 500;
      cursor: pointer;
      transition: @transition;
      width: fit-content;

      .btn-arrow {
        width: 0.56rem;
        height: 0.13rem;
        object-fit: contain;
        transition: @transition;
      }

      &.primary {
        background: @primary;
        color: #fff;
        &:hover {
          background: @primary-hover;
          .btn-arrow {
            transform: translateX(0.05rem);
          }
        }
      }

      &.outline {
        background: #fff;
        color: @text-main;
        border: 0.01rem solid @border;
        &:hover {
          background: @primary;
          color: #fff;
          border-color: @primary;
          .btn-arrow {
            transform: translateX(0.05rem);
          }
        }
      }
    }
  }
}

// ============================================
// 响应式适配
// ============================================

// 平板及小屏 (小于 992px ~ 768px 区间)
@media screen and (max-width: 900px) {
  .page-title {
    font-size: 0.4rem;
  }

  .product-card {
    .card-image {
      flex: 0 0 4rem;
    }
    .card-content {
      .card-title {
        font-size: 0.28rem;
      }
      .card-desc {
        font-size: 0.18rem;
      }
    }
  }
}

// 手机端 (小于 768px)
@media screen and (max-width: 768px) {
  .page-title {
    font-size: 0.3rem;
    margin-bottom: 0.4rem;
  }

  .product-card {
    flex-direction: column;

    .card-image {
      flex: none;
      width: 100%;
      height: 3rem; // 手机上图高度固定
    }

    .card-content {
      padding: 0.2rem;

      .card-title {
        font-size: 0.24rem;
        margin-bottom: 0.1rem;
      }

      .card-desc {
        font-size: 0.16rem;
        margin-bottom: 0.2rem;
        -webkit-line-clamp: 4; // 手机多显示一行
      }

      .btn-learn {
        font-size: 0.14rem;
        padding: 0.1rem 0.2rem;

        .btn-arrow {
          width: 0.4rem;
          height: 0.1rem;
        }
      }
    }
  }
}

// 超小屏幕 (小于 480px)
@media screen and (max-width: 480px) {
  .application-cases {
    padding: 0.3rem 0.1rem 0.6rem;
  }

  .page-title {
    font-size: 0.24rem;
  }

  .product-card {
    .card-image {
      height: 2.5rem;
    }
    .card-content {
      .card-title {
        font-size: 0.2rem;
      }
      .card-desc {
        font-size: 0.14rem;
      }
    }
  }
}
</style>
