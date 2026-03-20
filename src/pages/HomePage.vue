<template>
  <div class="pages">
    <List />
    <Banner />
    <h6 class="applyCardTitle">
      — Engineered for Advanced Protection and Customization —
    </h6>
    <ApplyCard />
  </div>
</template>
<script setup>
import ApplyCard from "@/components/ApplyCard.vue";
import Banner from "@/components/Banner.vue";
import List from "@/components/List.vue";
</script>
<style scoped lang="less">
.applyCardTitle {
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
</style>
