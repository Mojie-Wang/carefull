<script setup>
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";
import SiteMenu from "@/components/SiteMenu.vue";
// import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const route = useRoute();

const defaultFooterConfig = {
  type: "index",
  title: "SUBSCRIPTION INFORMATION",
};

const footerConfig = computed(() => {
  const footerMeta = route.meta?.footer;

  return {
    type: footerMeta?.type ?? defaultFooterConfig.type,
    title: footerMeta?.title ?? defaultFooterConfig.title,
  };
});
</script>

<template>
  <div class="app-shell">
    <div class="app-shell__header">
      <SiteMenu />
    </div>
    <!-- <Header /> -->

    <main class="content-frame">
      <RouterView />
    </main>

    <Footer :type="footerConfig.type" :title="footerConfig.title" />
  </div>
</template>

<style scoped lang="less">
.app-shell {
  min-height: 100vh;
  padding-top: 24px;
}

.app-shell__header {
  width: 100%;
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
