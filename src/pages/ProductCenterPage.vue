<template>
  <div class="product-center-page">
    <section class="hero">
      <div class="hero-content">
        <!-- <h1>Ballistic helmet</h1>
        <p>Lightweight and with stable ballistic safety performance</p> -->
        <button class="btn-learn">Learn More</button>
      </div>
      <img src="@/assets/product/banner.png" alt="Ballistic helmet banner" />
    </section>

    <section class="product-range">
      <h2>Product Range</h2>
      <div class="range-tabs">
        <button
          v-for="category in categories"
          :key="category"
          :class="{ active: category === selectedCategory }"
          @click="selectedCategory = category"
          type="button"
        >
          {{ category }}
        </button>
      </div>
    </section>

    <section class="product-list-area">
      <aside class="classification-panel">
        <h3>CLASSIFICATION</h3>
        <div class="classification-items">
          <label v-for="level in classification" :key="level.value" :class="{ selected: selectedLevel === level.value }">
            <input
              type="radio"
              name="classification"
              :value="level.value"
              v-model="selectedLevel"
            />
            {{ level.label }}
          </label>
        </div>
      </aside>

      <div class="products-grid">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="product-card"
        >
          <img :src="product.image" :alt="product.title" />
          <div class="content">
            <h4>{{ product.title }}</h4>
            <p>{{ product.subtitle }}</p>
            <span class="price">{{ product.price }}</span>
          </div>
        </div>

        <div v-if="filteredProducts.length === 0" class="empty-state">
          暂无符合条件的产品，请更换分类或防护级别。
        </div>
      </div>
    </section>

    <section class="cta-box">
      <div>
        <h3>Lighter · Thinner · Softer</h3>
        <p>To get the latest news about Carefull Technology, leave your email for subscription — we'll send updates straight to your inbox.</p>
      </div>
      <div class="subscribe">
        <input type="email" placeholder="Your email address" v-model="subscribeEmail" />
        <button type="button" @click="handleSubscribe">SUBMIT</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ProductListImage1 from '@/assets/product/productList1.png';
import ProductListImage2 from '@/assets/product/classification1.png';
import ProductListImage3 from '@/assets/product/classification2.png';
import ProductListImage4 from '@/assets/product/classification3.png';
import ProductListImage5 from '@/assets/product/classification4.png';

const categories = ref(['FIBER', 'ARMOR PLATE', 'BODY ARMOR', 'BALLISTIC HELMET', 'BALLISTIC SHIELD', 'ARMOUR', 'OTHER']);
const selectedCategory = ref('BODY ARMOR');
const classification = ref([
  { label: 'NIJ HG I', value: 'HG1' },
  { label: 'NIJ HG II', value: 'HG2' },
  { label: 'NIJ RF I', value: 'RF1' },
  { label: 'NIJ RF II', value: 'RF2' },
  { label: 'NIJ RF III', value: 'RF3' },
  { label: 'NIJ 0115 I', value: '0115I' },
  { label: 'NIJ 0115 II', value: '0115II' },
]);
const selectedLevel = ref('HG1');
const subscribeEmail = ref('');

const products = ref([
  { id: 1, title: 'Police Ballistic Vest', subtitle: 'Police Ballistic Vest Police Ballistic Vest', price: '$210.00 - $450', category: 'BODY ARMOR', level: 'HG1', image: ProductListImage1 },
  { id: 2, title: 'Police body armor', subtitle: 'Professional body armor', price: '$210.00 - $450', category: 'BODY ARMOR', level: 'HG2', image: ProductListImage2 },
  { id: 3, title: 'Bulletproof vest', subtitle: 'Protective bulletproof vest', price: '$210.00 - $450', category: 'BODY ARMOR', level: 'RF1', image: ProductListImage3 },
  { id: 4, title: 'Kevlar vest', subtitle: 'Lightweight kevlar armor', price: '$220.00 - $490', category: 'BODY ARMOR', level: 'RF2', image: ProductListImage4 },
  { id: 5, title: 'Tactical vest', subtitle: 'High-end tactical vest', price: '$230.00 - $520', category: 'BODY ARMOR', level: 'RF3', image: ProductListImage5 },
]);

const filteredProducts = computed(() => {
  return products.value.filter((item) => {
    if (selectedCategory.value && item.category !== selectedCategory.value) {
      return false;
    }
    if (selectedLevel.value && item.level !== selectedLevel.value) {
      return false;
    }
    return true;
  });
});

const handleSubscribe = () => {
  if (!subscribeEmail.value) {
    window.alert('请输入邮箱地址');
    return;
  }
  window.alert(`已订阅: ${subscribeEmail.value}`);
  subscribeEmail.value = '';
};
</script>

<style scoped lang="less">
.product-center-page {
  font-family: Montserrat-Black;
  
  .hero {
    position: relative;
    min-height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    margin-bottom: 24px;

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
        font-size: 48px;
        line-height: 1.1;
        margin-bottom: 16px;
      }
      p {
        font-size: 20px;
        margin-bottom: 20px;
      }
      .btn-learn {
        border: 1px solid #fff;
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.08);
        color: #fff;
        padding: 10px 30px;
        font-size: 16px;
        cursor: pointer;
      }
    }

    &:before {
      content: '';
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
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 16px;
      text-align: center;
    }

    .range-tabs {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;

      button {
        border: none;
        border-bottom: 1px solid #ccc;
        background: #fff;
        padding: 8px 14px;
        font-weight: 500;
        cursor: pointer;

        &.active {
          color: #0072ff;
          border-color: #0072ff;
          background: #f2f8ff;
        }
      }
    }
  }

  .product-list-area {
    width: var(--container);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 24px;

    .classification-panel {
      background: #fff;
      border: 1px solid #e6e6e6;
      border-radius: 8px;
      padding: 20px;

      h3 {
        font-size: 18px;
        margin-bottom: 14px;
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

          &.selected {
            background: #f2f8ff;
            border: 1px solid #1070fc;
          }

          input {
            accent-color: #1070fc;
          }
        }
      }
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;

      .product-card {
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

          h4 {
            margin: 0 0 8px;
            font-size: 16px;
          }

          p {
            margin: 0 0 12px;
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
    .product-list-area {
      grid-template-columns: 1fr;
    }

    .products-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 768px) {
    .hero .hero-content h1 {
      font-size: 32px;
    }

    .products-grid {
      grid-template-columns: 1fr;
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
