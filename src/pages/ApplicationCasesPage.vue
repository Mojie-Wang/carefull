<template>
  <div class="pages">
    <div class="banner">
      <img class="img" :src="banner" alt="Application Cases banner" />
    </div>
    <h1 class="title">Application Cases</h1>
    <CaseList />
  </div>
</template>
<script setup>
import CaseList from "@/components/CaseList.vue";
import banner from "@/assets/cases/banner.png";
</script>
<style scoped lang="less">
.pages {
  .banner {
    overflow: hidden;
    margin-bottom: 50px;
    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
  .title {
    font-size: 60px;
    font-weight: 900;
    font-family: var(--font-montserrat);
    font-style: italic;
    text-align: center;
    padding: 0;
    margin: 0;
  }
}

@media (max-width: 768px) {
  .pages {
    .banner {
      height: 280px;
      margin-bottom: 30px;
    }

    .title {
      font-size: 26px;
      white-space: nowrap;
      padding: 0 16px;
    }
  }
}
</style>
