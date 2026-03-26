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
  font-family: var(--font-montserrat-regular);
  .hero {
    position: relative;
    min-height: 630px;
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
      bottom: 75px;

      h1 {
        font-family: var(--font-din-alternate-bold);
        font-size: 100px;
        line-height: 1;
        font-weight: 700;
        margin: 0;
      }
      p {
        font-size: 50px;
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
        width: 302px;
        height: 60px;
        margin-top: 20px;
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
    align-items: center;
    width: var(--container);
    margin: 0 auto 20px;

    h2 {
      font-size: 50px;
      font-weight: bold;
      font-style: oblique;
      margin-top: 17px;
      margin-bottom: 5px;
      margin-right: 50px;
    }

    .range-tabs {
      display: flex;
      align-items: center;
      overflow-x: auto;
      gap: 30px;

      .tab {
        position: relative;
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100px;
        height: 66px;
        cursor: pointer;
        font-weight: 400;
        &.active {
          color: #0072ff;
          border-color: #0072ff;
        }

        .text {
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          font-size: 22px;
          line-height: 22px;
        }

        img {
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 60px;
          height: 12px;
          margin-top: 2px;
          transform: translateX(-50%);
        }
      }
    }
  }

  .product-showcase {
    --showcase-height: 46vw;
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
      height: var(--showcase-height);
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
        width: 446px;
        margin-right: 10px;

        h2 {
          font-size: 50px;
          margin-bottom: 12px;
        }

        ul {
          margin: 0;
          padding-left: 18px;

          li {
            margin-bottom: 8px;
            color: #000;
            font-size: 22px;
            // list-style: none;
            &::marker {
              color: #0959af;
              font-size: 20px;
            }
          }
        }

        .showcase-nav {
          display: flex;
          margin-top: 22px;

          img {
            width: 77px;
            height: 77px;
            cursor: pointer;
            margin-right: 33px;
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
        height: 100%;
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: calc(var(--showcase-height) - 32px);
          object-fit: contain;
          display: block;
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
      padding: 20px 0;

      h3 {
        padding-bottom: 14px;
        font-size: 34px;
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
          font-size: 24px;
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
        display: flex;
        flex-direction: column;
        width: 320px;
        height: 470px;
        background: #fff;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        overflow: hidden;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        background-color: #f9f9f9;

        &:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.11);
        }

        img {
          width: 320px;
          height: 359px;
          object-fit: cover;
        }

        .content {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 12px 16px;

          h4 {
            margin: 0 0 6px;
            line-height: 20px;
            font-size: 24px;
          }

          p {
            margin: 0 0 6px;
            font-size: 24px;
            color: #666;
          }

          .price {
            color: #1070fc;
            font-size: 24px;
            font-weight: 600;
            margin: 0;
            margin-top: auto;
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

  @media (max-width: 1440px) {
    .hero {
      min-height: 560px;

      .hero-content {
        bottom: 56px;

        h1 {
          font-size: clamp(72px, 6.4vw, 88px);
        }

        p {
          font-size: clamp(34px, 3.2vw, 44px);
        }

        .btn-learn {
          width: 260px;
          height: 54px;
          font-size: 22px;
        }
      }
    }

    .product-range {
      margin: 0 auto 18px;

      h2 {
        margin-right: 36px;
        font-size: 42px;
      }

      .range-tabs {
        gap: 24px;

        .tab {
          width: 90px;
          height: 60px;

          .text {
            font-size: 18px;
            line-height: 1.1;
          }

          img {
            width: 52px;
            height: 10px;
          }
        }
      }
    }

    .product-showcase {
      --showcase-height: clamp(560px, 44vw, 640px);
      padding: 20px 0;

      .showcase-box {
        .showcase-left {
          width: 400px;

          h2 {
            font-size: 42px;
          }

          ul li {
            font-size: 18px;
          }

          .showcase-nav {
            margin-top: 18px;

            img {
              width: 64px;
              height: 64px;
              margin-right: 24px;
            }
          }
        }

        .showcase-right {
          width: 48vw;
        }
      }
    }

    .product-list-area {
      margin: 32px auto;
      gap: 20px;

      .classification-panel {
        margin-right: 20px;
        padding: 16px 0;

        h3 {
          padding-right: 20px;
          font-size: 30px;
        }

        .classification-items {
          gap: 6px;

          label {
            font-size: 20px;
          }
        }
      }

      .products-grid {
        gap: 16px;

        .product-card {
          width: 300px;
          height: 440px;

          img {
            width: 300px;
            height: 328px;
          }

          .content {
            h4 {
              font-size: 20px;
            }

            p {
              font-size: 20px;
            }

            .price {
              font-size: 20px;
            }
          }
        }
      }
    }

    .cta-box {
      margin: 42px auto 26px;
      padding: 20px;

      h3 {
        font-size: 34px;
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
      --showcase-height: clamp(620px, 120vw, 760px);
      padding: 0;

      .showcase-cover {
        height: var(--showcase-height);
      }

      .showcase-box {
        left: 50%;
        transform: translateX(-50%);
        width: var(--container);
        padding: clamp(20px, 4vw, 28px) 0 14px;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: clamp(16px, 3vw, 28px);
        .showcase-nav {
          justify-content: center;
        }
        .showcase-left {
          width: 100%;
          margin-right: 0;
          text-align: center;

          h2 {
            margin: 0 0 12px;
            font-size: clamp(34px, 5vw, 42px);
          }

          ul {
            display: inline-block;
            margin: 0 auto;
            padding-left: 18px;
            max-width: 100%;
            text-align: left;
            list-style-position: outside;

            li {
              font-size: clamp(15px, 2vw, 18px);
            }
          }
        }

        .showcase-right {
          width: 100%;
          max-height: clamp(240px, 52vw, 380px);
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: auto;
            height: auto;
            max-width: min(100%, 640px);
            max-height: 100%;
            object-fit: contain;
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
          padding-bottom: 10px;
          font-size: clamp(24px, 3.2vw, 30px);
          text-align: center;
        }

        .classification-items {
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 10px;
          overflow-x: auto;
          overflow-y: hidden;
          padding-bottom: 6px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;

          &::-webkit-scrollbar {
            display: none;
          }

          label {
            flex: 0 0 auto;
            white-space: nowrap;
            font-size: 16px;
            line-height: 1.2;
            border: 1px solid #d8dde6;
            border-radius: 999px;
            padding: 6px 12px;
            min-height: 36px;

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
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;

        .product-card {
          width: 100%;
          height: auto;
          min-width: 0;

          img {
            height: clamp(180px, 26vw, 240px);
          }

          .content {
            .price {
              font-size: 16px;
            }
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
      --showcase-height: clamp(500px, 140vw, 640px);
      .showcase-cover {
        height: var(--showcase-height);
      }

      .showcase-box {
        padding: 16px 0 12px;
        gap: 12px;

        .showcase-left {
          text-align: center;
          h2 {
            font-size: clamp(24px, 7vw, 30px);
          }

          ul {
            display: inline-block;
            margin: 0 auto;
            padding-left: 16px;
            max-width: 100%;
            text-align: left;
            list-style-position: outside;
          }

          ul li {
            font-size: 16px;
            line-height: 1.45;
          }

          .showcase-nav {
            margin-top: 14px;
            justify-content: center;
            img {
              width: 42px;
              height: 42px;
            }
          }
        }

        .showcase-right {
          width: 100%;
          max-height: clamp(200px, 62vw, 300px);
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: auto;
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }
        }
      }
    }

    .product-list-area {
      margin: 28px auto;

      .classification-panel {
        h3 {
          margin: 0 0 10px;
          padding-bottom: 8px;
          font-size: 20px;
          text-align: center;
        }

        .classification-items {
          gap: 8px;
          padding-bottom: 4px;

          label {
            font-size: 13px;
            line-height: 1.2;
            border-radius: 999px;
            padding: 6px 10px;
            min-height: 32px;
          }
        }
      }

      .products-grid {
        gap: 14px;
        grid-template-columns: repeat(2, minmax(0, 1fr));

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

            .price {
              font-size: 14px;
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
