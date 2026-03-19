<template>
  <!-- Banner 区域 -->
  <div class="banner-content">
    <img 
      :src="productBanner" 
      alt="Military Equipment" 
      class="banner-image"
    />
  </div>
   <ProductList />
</template>
<script setup lang="ts">
import ProductList from '@/components/ProductList.vue';
import productBanner from '@/assets/product/productBanner.png'
 </script>
<style scoped lang="less">
.banner-content {
  width: 100%;
  height: 100%;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
