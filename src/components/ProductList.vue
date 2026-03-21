<template>
  <section class="product-list">
    <div class="product-list__grid">
      <article
        v-for="item in productList"
        :key="item.title"
        class="product-list__item"
        :style="{ '--product-bg': `url(${item.img})` }"
      >
        <div class="product-list__image" aria-hidden="true" />
        <h6 class="product-list__title">{{ item.title }}</h6>
      </article>
    </div>
  </section>
</template>

<script setup>
import ArmorPlate2 from "@/assets/index/ArmorPlate2.png";
import ARMOUR from "@/assets/index/ARMOUR.png";
import BallisticHelmet2 from "@/assets/index/BallisticHelmet2.png";
import BallisticShield2 from "@/assets/index/BallisticShield2.png";
import Bodyarmor2 from "@/assets/index/Bodyarmor2.png";
import Fiber2 from "@/assets/index/Fiber2.png";

const productList = [
  {
    title: "Fiber",
    img: Fiber2,
  },
  {
    title: "Armor Plate",
    img: ArmorPlate2,
  },
  {
    title: "Body Armor",
    img: Bodyarmor2,
  },
  {
    title: "Ballistic Helmet",
    img: BallisticHelmet2,
  },
  {
    title: "Ballistic Shield",
    img: BallisticShield2,
  },
  {
    title: "ARMOUR",
    img: ARMOUR,
  },
];
</script>

<style scoped lang="less">
.product-list {
  width: var(--container);
  margin: 0 auto;
}

.product-list__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.product-list__item {
  position: relative;
  aspect-ratio: 463 / 555;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 28px 24px;
  // background: #d7e0ea;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
  box-shadow: 0 4px 10px rgba(23, 33, 44, 0.1);
  &:hover {
    transform: translateY(-4px);
  }
}

.product-list__title {
  position: relative;
  z-index: 1;
  margin: 0;
  width: 100%;
  color: #000;
  font-family: var(--font-montserrat);
  font-size: clamp(24px, 2vw, 32px);
  font-weight: 600;
  line-height: 1.15;
  text-align: center;
}

.product-list__image {
  position: absolute;
  inset: 0;
  background-image: var(--product-bg);
  background-position: center calc(50% + 32px);
  background-repeat: no-repeat;
  background-size: 84% auto;
  transition: transform 0.26s ease;
}

.product-list__item:hover .product-list__image {
  // transform: scale(1.04);
}

@media (max-width: 1080px) {
  .product-list__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .product-list {
    width: calc(100% - 40px);
  }

  .product-list__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  .product-list__item {
    padding: 18px;
    border-radius: 16px;
  }

  .product-list__title {
    font-size: 20px;
  }

  .product-list__image {
    background-size: 82% auto;
    background-position: center calc(50% + 24px);
  }
}
</style>
