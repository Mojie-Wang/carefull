<template>
  <div class="product-detail-page">
    <section class="breadcrumb-area">
      <div class="breadcrumb-inner">
        <span @click="goHome">Home</span>
        <span class="divider">/</span>
        <span @click="goProductCenter">Product Center</span>
        <span class="divider">/</span>
        <span>{{ product.category }}</span>
        <span class="divider">/</span>
        <span class="current">{{ product.title }}</span>
      </div>
    </section>

    <section class="top-area">
      <div class="image-card">
        <img :src="product.image" :alt="product.title" />
      </div>
      <div class="info-card">
        <h1>{{ product.title }}</h1>
        <p class="price">{{ product.price }}</p>
        <p class="subtitle">{{ product.subtitle }}</p>

        <div
          class="option-row"
          v-for="(option, index) in product.options"
          :key="option.name"
        >
          <p class="option-name">{{ option.name }}</p>
          <select v-model="selectedOptions[index]">
            <option v-for="item in option.values" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
        </div>
      </div>
    </section>

    <section class="detail-tabs">
      <div class="tab-nav">
        <button
          v-for="tab in tabs"
          :key="tab"
          :class="{ active: activeTab === tab }"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <div class="tab-content">
        <div v-if="activeTab === 'DESCRIPTION'" class="description">
          <p>{{ product.description }}</p>
        </div>

        <div v-if="activeTab === 'SPECIFICATIONS'" class="specifications">
          <ul>
            <li v-for="item in product.specifications" :key="item.title">
              <span class="spec-title">{{ item.title }}:</span>
              <span class="spec-value">{{ item.value }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import productImage from "@/assets/product/product1.png";

const router = useRouter();
const route = useRoute();

const product = computed(() => {
  const q = route.query;
  return {
    title: q.title || "Police Ballistic Vest",
    category: q.category || "Body armor",
    price: q.price || "$210.00 - $450",
    subtitle: q.subtitle || "Ergonomic & Tactical Design Comfortable for Long Patrols",
    image: q.image ? String(q.image) : productImage,
    options: [
      { name: "material", values: ["composite material", "aramid fiber", "UHMWPE"] },
      { name: "size", values: ["S", "M", "L", "XL"] },
      { name: "color", values: ["black", "navy", "coyote"] },
    ],
    description:
      "Bullet proof vest is a personal protective product that shields the human body from bullets or explosive debris. " +
      "The bulletproof inner liner is made of two of the most advanced high-performance fiber materials in the world, aramid and ultra-high molecular weight polyethylene, which are professionally designed, cut and heat sealed. The outer jacket is made of polyester fiber, nylon, cotton and other synthetic materials, which have the characteristics of light weight, easy wearing, soft and comfortable, waterproof and flame-retardant, and minimal human injury after impact. It can be used for both military and police purposes, and can be worn internally or externally. Our company focuses on providing professional and cost-effective solutions for our customers. We can produce different types of bulletproof vests according to the bulletproof standards of different countries or regions and customer requirements. The protective area is 0.28 square meters, and the protective material is ultra-high molecular weight polyethylene composite material. The surface density of the protective material does not exceed 5.2kg/m2, and the total weight of the bulletproof vest does not exceed 2.5kg.",
    specifications: [
      { title: "Protection Level", value: "NIJ HG I / II / RF I" },
      { title: "Weight", value: "1.9 - 2.5 kg" },
      { title: "Material", value: "Ultra-high molecular weight polyethylene + aramid" },
      { title: "Available Sizes", value: "S, M, L, XL" },
      { title: "Color", value: "Black, Navy, Coyote" },
    ],
  };
});

const selectedOptions = ref(["composite material", "M", "black"]);
const tabs = ["DESCRIPTION", "SPECIFICATIONS"];
const activeTab = ref("DESCRIPTION");

const goHome = () => router.push({ name: "home" });
const goProductCenter = () => router.push({ name: "product-center" });

const addToCart = () => {
  console.log("Add to cart", {
    product: product.value.title,
    options: selectedOptions.value,
  });
};

const contactUs = () => {
  router.push({ name: "contact-us" });
};
</script>

<style scoped lang="less">
.product-detail-page {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px 24px;

  .breadcrumb-area {
    margin-bottom: 18px;

    .breadcrumb-inner {
      font-size: 14px;
      color: #444;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      span {
        cursor: pointer;
      }

      .divider {
        color: #999;
        cursor: default;
      }

      .current {
        font-weight: 700;
      }
    }
  }

  .top-area {
    display: flex;
    gap: 40px;
    margin-bottom: 30px;

    .image-card {
      flex: 1;
      background: #fff;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      border-radius: 18px;
      overflow: hidden;
      min-height: 420px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }

    .info-card {
      flex: 1;
      min-width: 320px;

      h1 {
        margin: 0;
        font-size: 36px;
        font-weight: 800;
        color: #121212;
      }

      .price {
        margin: 12px 0;
        color: #1d78ff;
        font-size: 26px;
        font-weight: 700;
      }

      .subtitle {
        margin-bottom: 20px;
        color: #333;
        font-size: 16px;
      }

      .option-row {
        margin: 10px 0;

        .option-name {
          width: 80px;
          text-transform: capitalize;
          font-weight: 600;
          margin: 10px 0;
        }

        select {
          width: 100%;
          border: none;
          border-bottom: 1px solid #EAEAEA;
          border-radius: 6px;
          padding: 8px 10px;
          font-size: 14px;
        }

        .option-selected {
          font-size: 14px;
          color: #666;
          min-width: 100px;
          text-align: right;
        }
      }

      .action-row {
        margin-top: 24px;
        display: flex;
        gap: 12px;

        .btn-primary,
        .btn-secondary {
          border: none;
          cursor: pointer;
          border-radius: 6px;
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 700;
        }

        .btn-primary {
          background: #1d78ff;
          color: white;
        }

        .btn-secondary {
          background: #f4f4f4;
          color: #333;
        }
      }
    }
  }

  .detail-tabs {
    background: #fff;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);

    .tab-nav {
      display: flex;
      gap: 12px;
      margin-bottom: 18px;

      button {
        background: #f8f8f8;
        border: 1px solid #ddd;
        border-radius: 6px;
        padding: 8px 16px;
        font-weight: 700;
        color: #555;
        cursor: pointer;

        &.active {
          background: #fff;
          color: #1d78ff;
          border-color: #1d78ff;
        }
      }
    }

    .tab-content {
      .description,
      .specifications {
        color: #444;
        font-size: 15px;
        line-height: 1.65;
      }

      .specifications ul {
        padding-left: 18px;
      }

      .specifications li {
        margin-bottom: 8px;
      }

      .spec-title {
        font-weight: 700;
      }

      .spec-value {
        margin-left: 8px;
      }
    }
  }

  @media (max-width: 990px) {
    .top-area {
      flex-direction: column;
    }
  }

  @media (max-width: 640px) {
    padding: 16px 8px;

    .breadcrumb-area .breadcrumb-inner {
      font-size: 12px;
    }

    .info-card h1 {
      font-size: 26px;
    }

    .price {
      font-size: 22px;
    }
  }
}
</style>
