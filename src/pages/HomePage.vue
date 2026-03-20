<template>
  <div class="pages">
    <List />
    <Banner />
  </div>
</template>
<script setup>
import Banner from "@/components/Banner.vue";
import List from "@/components/List.vue";
</script>
<style scoped lang="less">
.title {
  font-size: 24px;
  font-weight: 600;
}
</style>
