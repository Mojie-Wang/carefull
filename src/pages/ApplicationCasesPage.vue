<template>
  <!-- Banner 区域 -->
  <section class="banner">
    <div class="banner-content">
      <img 
        :src="banner" 
        alt="Military Equipment" 
        class="banner-image"
      />
    </div>
  </section>
  <ApplicationCases />
</template>
<script setup>
import ApplicationCases from '@/components/ApplicationCases.vue';
import banner from '@/assets/product/banner.png'
</script>
<style scoped lang="less">
.banner {
  width: 100%;
  
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
