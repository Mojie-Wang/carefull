<template>
  <div class="pages home-page">
    <List class="home-page__catalog" />
    <Banner />
    <h6 class="title">
      — Engineered for Advanced Protection and Customization —
    </h6>
    <ApplyCard />
    <h6 class="title productsTitle">Our Products</h6>
    <ProductList />
    <IntroList />
  </div>
</template>
<script setup>
import ApplyCard from "@/components/ApplyCard.vue";
import Banner from "@/components/Banner.vue";
import List from "@/components/List.vue";
import ProductList from "@/components/ProductList.vue";
import IntroList from "@/components/IntroList.vue";
</script>
<style scoped lang="less">
.title {
  // font-size: 24px;
  font-weight: 600;
  font-family: var(--font-montserrat);
  // font-size: 39px;
  font-size: clamp(15px, 4vw, 39px);
  color: #000000;
  line-height: 48px;
  margin: clamp(25px, 8vw, 108px) auto clamp(25px, 8vw, 115px);
  text-align: center;
}
.productsTitle {
  font-size: clamp(40px, 4vw, 60px);
}

@media (min-width: 981px) {
  .home-page__catalog {
    display: none;
  }
}
</style>
