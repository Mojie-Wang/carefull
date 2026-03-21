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
        <div
          v-for="tab in tabs"
          :key="tab"
          :class="{ active: activeTab === tab }"
          @click="activeTab = tab"
        >
          {{ tab }}
        </div>
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
    subtitle:
      q.subtitle || "Ergonomic & Tactical Design Comfortable for Long Patrols",
    image: q.image ? String(q.image) : productImage,
    options: [
      {
        name: "material",
        values: ["composite material", "aramid fiber", "UHMWPE"],
      },
      { name: "size", values: ["S", "M", "L", "XL"] },
      { name: "color", values: ["black", "navy", "coyote"] },
    ],
    description:
      "Bullet proof vest is a personal protective product that shields the human body from bullets or explosive debris. " +
      "The bulletproof inner liner is made of two of the most advanced high-performance fiber materials in the world, aramid and ultra-high molecular weight polyethylene, which are professionally designed, cut and heat sealed. The outer jacket is made of polyester fiber, nylon, cotton and other synthetic materials, which have the characteristics of light weight, easy wearing, soft and comfortable, waterproof and flame-retardant, and minimal human injury after impact. It can be used for both military and police purposes, and can be worn internally or externally. Our company focuses on providing professional and cost-effective solutions for our customers. We can produce different types of bulletproof vests according to the bulletproof standards of different countries or regions and customer requirements. The protective area is 0.28 square meters, and the protective material is ultra-high molecular weight polyethylene composite material. The surface density of the protective material does not exceed 5.2kg/m2, and the total weight of the bulletproof vest does not exceed 2.5kg.",
    specifications: [
      { title: "Protection Level", value: "NIJ HG I / II / RF I" },
      { title: "Weight", value: "1.9 - 2.5 kg" },
      {
        title: "Material",
        value: "Ultra-high molecular weight polyethylene + aramid",
      },
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
  width: min(1200px, var(--container));
  margin: 0 auto;
  padding: 0 0 clamp(24px, 4vw, 40px);
  box-sizing: border-box;

  .breadcrumb-area {
    margin-bottom: clamp(16px, 2vw, 18px);

    .breadcrumb-inner {
      font-size: 14px;
      line-height: 1.5;
      color: #444;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      overflow-wrap: anywhere;

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
    align-items: flex-start;
    gap: clamp(24px, 3vw, 40px);
    margin-bottom: clamp(24px, 3vw, 32px);

    .image-card {
      flex: 1 1 0;
      min-width: 0;
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
      flex: 1 1 0;
      min-width: 0;

      h1 {
        margin: 0;
        font-size: 36px;
        line-height: 1.15;
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
        line-height: 1.55;
      }

      .option-row {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin: 14px 0;

        .option-name {
          width: auto;
          text-transform: capitalize;
          font-weight: 600;
          margin: 0;
        }

        select {
          width: 100%;
          min-height: 46px;
          border: 1px solid rgba(18, 18, 18, 0.12);
          border-radius: 12px;
          padding: 10px 42px 10px 14px;
          background-color: #fff;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9'%3E%3Cpath d='M1 1.5 7 7.5 13 1.5' fill='none' stroke='%23555' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-position: right 14px center;
          background-repeat: no-repeat;
          background-size: 14px 9px;
          appearance: none;
          -webkit-appearance: none;
          color: #121212;
          font-size: 14px;
          font-family: inherit;
          line-height: 1.4;
          cursor: pointer;
          box-sizing: border-box;
          box-shadow: 0 10px 24px rgba(15, 43, 87, 0.06);
          transition: border-color 0.2s ease, box-shadow 0.2s ease,
            background-color 0.2s ease;

          &:focus {
            outline: none;
            border-color: rgba(29, 120, 255, 0.9);
            box-shadow: 0 0 0 4px rgba(29, 120, 255, 0.14),
              0 12px 28px rgba(15, 43, 87, 0.12);
          }
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
      gap: clamp(18px, 4vw, 60px);
      padding-bottom: 6px;
      border-bottom: 1px solid #eee;

      div {
        flex: 0 0 auto;
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
      padding-top: 16px;

      .description,
      .specifications {
        color: #444;
        font-size: 15px;
        line-height: 1.65;
      }

      .specifications ul {
        margin: 0;
        padding-left: 18px;
      }

      .specifications li {
        display: flex;
        flex-wrap: wrap;
        row-gap: 4px;
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
      gap: 24px;

      .image-card {
        min-height: clamp(260px, 58vw, 420px);
      }
    }
  }

  @media (max-width: 640px) {
    padding-bottom: 24px;

    .breadcrumb-area {
      margin-bottom: 14px;

      .breadcrumb-inner {
        font-size: 12px;
        gap: 6px;
      }
    }

    .top-area {
      gap: 18px;
      margin-bottom: 22px;
      align-items: center;

      .image-card {
        width: 100%;
        max-width: none;
        margin: 0 auto;
        // min-height: 0;
        border-radius: 14px;
        padding: 12px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: auto;
          max-width: 100%;
          height: auto;
          max-height: none;
          object-fit: contain;
          padding: 0;
          background: transparent;
        }
      }

      .info-card {
        width: 100%;
        max-width: 460px;
        margin: 0 auto;
        text-align: center;

        h1 {
          font-size: 26px;
          line-height: 1.2;
        }

        .price {
          margin: 10px 0;
          font-size: 22px;
        }

        .subtitle {
          margin-bottom: 16px;
          font-size: 15px;
          line-height: 1.5;
        }

        .option-row {
          margin: 12px 0;
          max-width: 100%;

          .option-name {
            font-size: 14px;
            text-align: center;
          }

          select {
            min-height: 48px;
            padding: 12px 44px 12px 14px;
            font-size: 15px;
            text-align: left;
          }
        }
      }
    }

    .detail-tabs {
      padding: 16px;
      border-radius: 14px;

      .tab-nav {
        gap: 18px;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;

        &::-webkit-scrollbar {
          display: none;
        }

        div {
          padding: 8px 0;
          font-size: 14px;
        }
      }

      .tab-content {
        .description,
        .specifications {
          font-size: 14px;
          line-height: 1.65;
        }

        .specifications ul {
          padding-left: 16px;
        }

        .spec-value {
          margin-left: 4px;
        }
      }
    }
  }

  @media (max-width: 420px) {
    .breadcrumb-area {
      .breadcrumb-inner {
        font-size: 11px;
        gap: 4px;
      }
    }

    .top-area {
      gap: 16px;

      .image-card {
        border-radius: 12px;
        padding: 10px;

        img {
          max-width: 100%;
        }
      }

      .info-card {
        h1 {
          font-size: 22px;
        }

        .price {
          font-size: 19px;
        }

        .subtitle {
          font-size: 14px;
        }

        .option-row {
          gap: 6px;

          .option-name {
            font-size: 13px;
          }

          select {
            min-height: 42px;
            padding: 10px 40px 10px 12px;
            font-size: 14px;
            background-position: right 12px center;
            background-size: 12px 8px;
          }
        }
      }
    }

    .detail-tabs {
      padding: 14px 12px;

      .tab-nav {
        gap: 14px;

        div {
          font-size: 13px;
        }
      }

      .tab-content {
        padding-top: 14px;

        .description,
        .specifications {
          font-size: 13px;
        }
      }
    }
  }
}
</style>
