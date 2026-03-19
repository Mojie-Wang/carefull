<template>
      <!-- Banner: 全宽背景 -->
    <div class="banner">
      <img :src="banner" alt="Banner" class="banner-img" />
    </div>
  <AboutUs />
</template>
<script setup>
 import AboutUs from '@/components/AboutUs.vue';
 import banner from '@/assets/aboutus/banner.png'
</script>
<style scoped lang="scss">
.banner {
  width: 100%;
  height: 30vh; // 视口高度的30%，响应式更好
  min-height: 2.5rem;
  max-height: 4rem;
  overflow: hidden;
  
  .banner-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}
</style>
