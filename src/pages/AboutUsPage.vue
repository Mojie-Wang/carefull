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
  
  .banner-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}
</style>
