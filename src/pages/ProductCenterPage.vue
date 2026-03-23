<template>
  <div class="product-center-page">
    <section class="hero">
      <div class="hero-content">
        <h1>Ballistic helmet</h1>
        <p>Lightweight and with stable ballistic safety performance</p>
        <button class="btn-learn">Learn More</button>
      </div>
    </section>

    <section class="product-range">
      <h2>Product Range</h2>
      <div class="range-tabs">
        <div
          class="tab"
          v-for="category in categories"
          :key="category"
          :class="{ active: category === selectedCategory }"
          @click="selectCategory(category)"
        >
          <div class="text">
            {{ category }}
          </div>
          <img
            v-show="category === selectedCategory"
            src="@/assets/product/highlightLine.png"
            alt="highlightLine"
          />
        </div>
      </div>
    </section>

    <section class="product-showcase">
      <img class="showcase-background" src="@/assets/product/productBg.png" />
      <div class="showcase-cover"></div>
      <div class="showcase-box">
        <div class="showcase-left">
          <h2>{{ showcaseProduct.title }}</h2>
          <ul>
            <li
              v-for="(feature, index) in showcaseProduct.features"
              :key="index"
            >
              {{ feature }}
            </li>
          </ul>
          <div class="showcase-nav">
            <img
              class="prev"
              @click="prevShowcase"
              src="@/assets/product/arrowLeft.png"
              alt="Previous"
            />
            <img
              class="next"
              @click="nextShowcase"
              src="@/assets/product/arrowRight.png"
              alt="Next"
            />
          </div>
        </div>
        <div class="showcase-right">
          <img :src="showcaseProduct.image" :alt="showcaseProduct.title" />
        </div>
      </div>
    </section>

    <section class="product-list-area">
      <div class="classification-panel">
        <h3>CLASSIFICATION:</h3>
        <div class="classification-items">
          <label
            v-for="(classification, index) in classifications"
            :key="classification"
            :class="{ selected: classification === selectedClassification }"
          >
            <input
              type="radio"
              name="classification"
              :value="classification"
              v-model="selectedClassification"
            />
            <span>{{ classification }}</span>
          </label>
        </div>
      </div>

      <div class="products-grid">
        <div
          class="product-card"
          v-for="product in products"
          :key="product.id"
          role="link"
          tabindex="0"
          @click="goProductDetail(product)"
          @keydown.enter.prevent="goProductDetail(product)"
          @keydown.space.prevent="goProductDetail(product)"
        >
          <img :src="product.image" :alt="product.title" />
          <div class="content">
            <h4>{{ product.title }}</h4>
            <p class="price">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import ProductListImage1 from "@/assets/product/productList1.png";
import ProductListImage2 from "@/assets/product/classification1.png";
import ProductListImage3 from "@/assets/product/classification2.png";
import {
  DEFAULT_PRODUCT_CATEGORY,
  PRODUCT_CATEGORIES,
  resolveProductCategory,
} from "@/constants/productCategories";

const route = useRoute();
const router = useRouter();

const categories = PRODUCT_CATEGORIES;
const selectedCategory = ref(DEFAULT_PRODUCT_CATEGORY);

const classifications = ref([
  "NIJ HG I",
  "NIJ HG II",
  "NIJ RF I",
  "NIJ RF II",
  "NIJ RF III",
  "NIJ 0115 I",
  "NIJ 0115 II",
]);
const selectedClassification = ref("NIJ HG I");

const products = ref([
  {
    id: 1,
    title: "Police Ballistic Vest Po-lice Ballistic Vest",
    description: "Up to NIJ HG I resistance with breathable comfort.",
    price: "$210.00 - $450",
    classification: "NIJ HG I",
    image: ProductListImage1,
  },
  {
    id: 2,
    title: "Police body armor",
    description: "Modular design for NIJ HG II and RF I missions.",
    price: "$210.00 - $450",
    classification: "NIJ HG II",
    image: ProductListImage2,
  },
  {
    id: 3,
    title: "Bulletproof vest",
    description: "Heavy-duty protection for NIJ RF II environments.",
    price: "$210.00 - $450",
    classification: "NIJ RF II",
    image: ProductListImage3,
  },
  {
    id: 4,
    title: "Police Ballistic Vest",
    description: "Flexible shell for NIJ RF III standards.",
    price: "$210.00 - $450",
    classification: "NIJ RF III",
    image: ProductListImage1,
  },
  {
    id: 5,
    title: "Police Ballistic Vest",
    description: "Civilian use, NIJ 0115 I rifle protection.",
    price: "$210.00 - $450",
    classification: "NIJ 0115 I",
    image: ProductListImage2,
  },
  {
    id: 6,
    title: "Police Ballistic Vest",
    description: "Enhanced plate options for NIJ 0115 II.",
    price: "$210.00 - $450",
    classification: "NIJ 0115 II",
    image: ProductListImage3,
  },
]);

const filteredProducts = computed(() => {
  return products.value.filter(
    (item) => item.classification === selectedClassification.value
  );
});

const showcaseProducts = ref([
  {
    title: "Ballistic Vest",
    description:
      "Top-tier protection with lightweight comfort and modular design.",
    features: [
      "Lightweight design",
      "Waterproof fabric",
      "Adjustable fit",
      "Modular pouches",
    ],
    image: ProductListImage1,
  },
  {
    title: "Tactical Helmet",
    description:
      "Rigorous impact test, multiple mounting options, 360° defense.",
    features: [
      "Impact-resistant",
      "Ventilation system",
      "Integrated NVG mount",
      "Comfort padding",
    ],
    image: ProductListImage2,
  },
  {
    title: "Ballistic Shield",
    description:
      "Superior stopping power with ergonomic handle and shooting window.",
    features: [
      "Bulletproof glass window",
      "Lightweight frame",
      "Camo pattern",
      "Quick deploy",
    ],
    image: ProductListImage3,
  },
]);

const showcaseIndex = ref(0);
const showcaseProduct = computed(
  () => showcaseProducts.value[showcaseIndex.value]
);

const prevShowcase = () => {
  showcaseIndex.value =
    (showcaseIndex.value - 1 + showcaseProducts.value.length) %
    showcaseProducts.value.length;
};

const nextShowcase = () => {
  showcaseIndex.value =
    (showcaseIndex.value + 1) % showcaseProducts.value.length;
};

const goProductDetail = (product) => {
  router.push({
    name: "product-detail",
    query: {
      // title: product.title,
      // price: product.price,
      category: selectedCategory.value,
      // image: product.image,
      // subtitle: product.description,
    },
  });
};

const syncSelectedCategory = () => {
  selectedCategory.value = resolveProductCategory(route.query.category);
};

const selectCategory = (category) => {
  const nextCategory = resolveProductCategory(category);
  selectedCategory.value = nextCategory;

  if (
    route.name === "product-center" &&
    resolveProductCategory(route.query.category) === nextCategory
  ) {
    return;
  }

  router.replace({
    name: "product-center",
    query: {
      ...route.query,
      category: nextCategory,
    },
  });
};

watch(
  () => route.query.category,
  () => {
    syncSelectedCategory();
  },
  { immediate: true }
);
</script>

<style scoped lang="less">
.product-center-page {
  .hero {
    position: relative;
    min-height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    background-image: url("@/assets/product/banner.png");
    background-size: cover;
    background-position: bottom;

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero-content {
      position: absolute;
      z-index: 2;
      bottom: 50px;

      h1 {
        font-size: 60px;
        line-height: 1;
        margin: 0;
      }
      p {
        font-size: 30px;
        margin: 0;
      }
      .btn-learn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: 1px solid #fff;
        border-radius: 10px;
        color: #fff;
        font-size: 24px;
        cursor: pointer;
        width: 200px;
        height: 40px;
        margin-top: 10px;
      }
    }

    &:before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
    }
  }

  .product-range {
    display: flex;
    width: var(--container);
    margin: 0 auto 20px;

    h2 {
      font-size: 31px;
      font-weight: bold;
      font-style: oblique;
      margin-top: 17px;
      margin-bottom: 5px;
      margin-right: 50px;
    }

    .range-tabs {
      display: flex;
      overflow-x: auto;
      gap: 30px;

      .tab {
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 70px;
        cursor: pointer;

        &.active {
          color: #0072ff;
          border-color: #0072ff;
        }

        .text {
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          font-size: 15px;
          line-height: 16px;
        }

        img {
          width: 60px;
          height: 12px;
          margin-top: 2px;
        }
      }
    }
  }

  .product-showcase {
    position: relative;
    // width: var(--container);
    // margin: 0 auto;
    padding: 24px 0;
    gap: 24px;
    .showcase-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
      border-radius: 8px;
    }
    .showcase-cover {
      height: 46vw;
    }
    .showcase-box {
      position: absolute;
      top: 0;
      left: 50%;
      display: flex;
      align-items: center;
      width: var(--container);
      height: 100%;
      transform: translateX(-50%);
      z-index: 1;
      .showcase-left {
        width: 270px;
        margin-right: 10px;

        h2 {
          font-size: 36px;
          margin-bottom: 12px;
        }

        p {
          font-size: 16px;
          color: #555;
          margin-bottom: 16px;
        }

        ul {
          margin: 0;
          padding-left: 18px;

          li {
            margin-bottom: 8px;
            color: #000;
            font-size: 14px;
            // list-style: none;
            &::marker {
              color: #0959af;
              font-size: 12px;
            }
          }
        }

        .showcase-nav {
          display: flex;
          margin-top: 22px;

          img {
            width: 48px;
            height: 48px;
            cursor: pointer;
            margin-right: 10px;
            transition: transform 0.2s ease;
          }
          .prev {
            &:hover {
              transform: scale(1.1);
            }
          }
          .next {
            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }

      .showcase-right {
        width: 50vw;
        img {
          max-width: 50vw;
          max-height: 50vw;
          object-fit: cover;
        }
      }
    }
  }

  .product-list-area {
    width: var(--container);
    margin: 37px auto;
    display: flex;
    justify-content: center;
    gap: 24px;

    .classification-panel {
      margin-right: 30px;
      padding: 20px;

      h3 {
        font-size: 18px;
        padding-bottom: 14px;
        padding-right: 30px;
        border-bottom: 1px solid #000;
      }

      .classification-items {
        display: flex;
        flex-direction: column;
        gap: 8px;

        label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          border-radius: 6px;
          padding: 6px 8px;
        }
      }
    }

    .products-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      .product-card {
        width: 200px;
        height: 300px;
        background: #fff;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        overflow: hidden;
        transition: transform 0.2s ease, box-shadow 0.2s ease;

        &:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.11);
        }

        img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .content {
          padding: 14px;
          background-color: #f9f9f9;

          h4 {
            margin: 0 0 6px;
            line-height: 16px;
            font-size: 16px;
          }

          p {
            margin: 0 0 6px;
            font-size: 14px;
            color: #666;
          }

          .price {
            color: #1070fc;
            font-weight: 600;
          }
        }
      }

      .empty-state {
        grid-column: 1 / -1;
        text-align: center;
        padding: 60px 20px;
        color: #999;
      }
    }
  }

  .cta-box {
    margin: 50px auto 30px;
    width: var(--container);
    padding: 24px;
    background: #111;
    color: #fff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    h3 {
      margin: 0;
      font-size: 40px;
      line-height: 1.1;
    }

    p {
      max-width: 580px;
      margin: 8px 0 0;
      font-size: 14px;
      color: #ccc;
    }

    .subscribe {
      display: flex;
      gap: 8px;
      margin-top: 12px;

      input {
        font-size: 14px;
        padding: 10px 12px;
        border-radius: 4px;
        border: 1px solid #444;
        background: #222;
        color: #fff;
      }

      button {
        border: none;
        background: #fff;
        color: #111;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 4px;
        font-weight: 700;
      }
    }
  }

  @media (max-width: 1024px) {
    .product-range {
      flex-direction: column;
      align-items: stretch;
      gap: 16px;
      margin: 20px auto 28px;

      h2 {
        margin: 0;
        text-align: center;
      }

      .range-tabs {
        gap: 20px;
        padding-bottom: 4px;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
          display: none;
        }

        .tab {
          width: auto;
          min-width: 74px;
        }
      }
    }

    .product-showcase {
      padding: 0;

      .showcase-cover {
        height: clamp(620px, 120vw, 760px);
      }

      .showcase-box {
        left: 50%;
        transform: translateX(-50%);
        width: var(--container);
        padding: 28px 0 14px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 28px;
        .showcase-nav {
          justify-content: center;
        }
        .showcase-left {
          width: 100%;
          margin-right: 0;
          text-align: center;

          h2 {
            margin: 0 0 12px;
          }

          ul {
            display: inline-block;
            margin: 0 auto;
            padding-left: 18px;
            max-width: 100%;
            text-align: left;
            list-style-position: outside;
          }
        }

        .showcase-right {
          width: 100%;
          display: flex;
          justify-content: center;

          img {
            width: 100%;
            // aspect-ratio: 986 / 675;
            // max-height: 260px;
            // object-fit: cover;
          }
        }
      }
    }

    .product-list-area {
      flex-direction: column;
      align-items: stretch;
      gap: 24px;

      .classification-panel {
        width: 100%;
        margin-right: 0;
        padding: 0;

        h3 {
          margin: 0 0 14px;
          padding-right: 0;
          text-align: center;
        }

        .classification-items {
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 12px;
          overflow-x: auto;
          overflow-y: hidden;
          padding-bottom: 8px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;

          &::-webkit-scrollbar {
            display: none;
          }

          label {
            flex: 0 0 auto;
            white-space: nowrap;
            border: 1px solid #d8dde6;
            padding: 8px 14px;

            input {
              display: none;
            }

            &.selected {
              color: #1070fc;
              border-color: #1070fc;
              background: #eef5ff;
            }
          }
        }
      }

      .products-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;

        .product-card {
          width: 100%;
          height: auto;
          min-width: 0;

          img {
            height: clamp(180px, 26vw, 240px);
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .hero {
      min-height: 320px;

      .hero-content {
        bottom: 28px;

        h1 {
          font-size: 32px;
        }

        p {
          font-size: 18px;
        }

        .btn-learn {
          width: 160px;
          height: 38px;
          font-size: 18px;
        }
      }
    }

    .product-range {
      margin: 24px auto;

      h2 {
        font-size: 24px;
      }

      .range-tabs {
        gap: 16px;

        .tab .text {
          font-size: 14px;
          line-height: 1.15;
        }
      }
    }

    .product-showcase {
      .showcase-cover {
        height: clamp(420px, 112vw, 560px);
      }

      .showcase-box {
        padding: 16px 0 8px;
        gap: 16px;

        .showcase-left {
          text-align: center;
          h2 {
            font-size: 28px;
          }

          ul {
            display: inline-block;
            margin: 0 auto;
            padding-left: 18px;
            max-width: 100%;
            text-align: left;
            list-style-position: outside;
          }

          ul li {
            font-size: 13px;
            // list-style: none;
          }

          .showcase-nav {
            margin-top: 18px;
            justify-content: center;
            img {
              width: 42px;
              height: 42px;
            }
          }
        }
      }
    }

    .product-list-area {
      margin: 28px auto;

      .classification-panel {
        h3 {
          text-align: center;
        }
        .classification-items label {
          padding: 8px 12px;
        }
      }

      .products-grid {
        gap: 14px;

        .product-card {
          border-radius: 8px;

          img {
            height: clamp(150px, 34vw, 210px);
          }

          .content {
            padding: 12px;

            h4 {
              font-size: 14px;
              line-height: 1.25;
            }

            p {
              font-size: 12px;
            }
          }
        }
      }
    }

    .cta-box {
      justify-content: center;
      text-align: center;

      .subscribe {
        width: 100%;
        justify-content: center;
      }
    }
  }
}
</style>
