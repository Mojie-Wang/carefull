<script setup>
import { RouterView } from "vue-router";
import SiteMenu from "@/components/SiteMenu.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="app-shell">
    <div class="app-shell__header">
      <!-- <SiteMenu /> -->
    </div>

    <main class="content-frame">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style scoped lang="less">
.app-shell {
  min-height: 100vh;
  padding-top: 24px;
}

.app-shell__header {
  width: var(--container);
  margin: 0 auto;
}

.content-frame {
  width: 100%;
}

@media (max-width: 767px) {
  .app-shell {
    padding-top: 16px;
  }
}
</style>
