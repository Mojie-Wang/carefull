<template>
  <!-- Banner 区域 -->
  <section class="banner">
    <div class="banner-content">
      <img 
        :src="productBanner" 
        alt="Military Equipment" 
        class="banner-image"
      />
    </div>
  </section>
   <ProductList />
</template>
<script setup lang="ts">
import ProductList from '@/components/ProductList.vue';
import productBanner from '@/assets/product/productBanner.png'
 </script>
<style scoped lang="less">
.banner {
  width: 100%;
  // height: 6.3rem;
  // max-height: 630px;
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

</style>
