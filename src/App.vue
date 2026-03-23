<script setup>
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import { RouterView, useRoute } from "vue-router";
import SiteMenu from "@/components/SiteMenu.vue";
// import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const route = useRoute();
const showBackToTop = ref(false);

const MOBILE_BREAKPOINT = 767;
const HEIGHT_BUFFER = 24;
const SCROLL_TOP_THRESHOLD = 80;

let pageResizeObserver;
let scrollResetTimer = 0;

const defaultFooterConfig = {
  type: "index",
  title: "SUBSCRIPTION INFORMATION",
};

const isHomeRoute = computed(() => route.name === "home");

const footerConfig = computed(() => {
  const footerMeta = route.meta?.footer;

  return {
    type: footerMeta?.type ?? defaultFooterConfig.type,
    title: footerMeta?.title ?? defaultFooterConfig.title,
  };
});

const updateBackToTopVisibility = () => {
  if (typeof window === "undefined") {
    return;
  }

  const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
  const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
  const scrollElement = document.scrollingElement ?? document.documentElement;
  const scrollTop = Math.max(
    window.pageYOffset,
    scrollElement.scrollTop,
    document.documentElement.scrollTop,
    document.body?.scrollTop ?? 0
  );
  const scrollHeight = Math.max(
    scrollElement.scrollHeight,
    document.body?.scrollHeight ?? 0
  );

  showBackToTop.value =
    isMobile &&
    scrollHeight > viewportHeight + HEIGHT_BUFFER &&
    scrollTop > SCROLL_TOP_THRESHOLD;
};

const scrollToTop = () => {
  const scrollElement = document.scrollingElement ?? document.documentElement;

  window.clearTimeout(scrollResetTimer);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  scrollResetTimer = window.setTimeout(() => {
    window.scrollTo(0, 0);
    scrollElement.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, 420);
};

const syncBackToTopVisibility = async () => {
  await nextTick();
  window.requestAnimationFrame(() => {
    updateBackToTopVisibility();
  });
};

onMounted(() => {
  updateBackToTopVisibility();

  window.addEventListener("scroll", updateBackToTopVisibility, {
    passive: true,
  });
  window.addEventListener("resize", updateBackToTopVisibility, {
    passive: true,
  });
  window.visualViewport?.addEventListener("resize", updateBackToTopVisibility);

  pageResizeObserver = new ResizeObserver(() => {
    updateBackToTopVisibility();
  });

  pageResizeObserver.observe(document.documentElement);
  pageResizeObserver.observe(document.body);

  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      updateBackToTopVisibility();
    });
  }
});

onBeforeUnmount(() => {
  window.clearTimeout(scrollResetTimer);
  window.removeEventListener("scroll", updateBackToTopVisibility);
  window.removeEventListener("resize", updateBackToTopVisibility);
  window.visualViewport?.removeEventListener(
    "resize",
    updateBackToTopVisibility
  );
  pageResizeObserver?.disconnect();
});

watch(
  () => route.fullPath,
  () => {
    syncBackToTopVisibility();
  }
);
</script>

<template>
  <div class="app-shell" :class="{ 'app-shell--home': isHomeRoute }">
    <div
      class="app-shell__header"
      :class="{ 'app-shell__header--immersive': isHomeRoute }"
    >
      <SiteMenu />
    </div>
    <!-- <Header /> -->

    <main class="content-frame">
      <RouterView />
    </main>

    <Footer :type="footerConfig.type" :title="footerConfig.title" />
  </div>

  <Teleport to="body">
    <button
      v-if="showBackToTop"
      class="app-shell__back-to-top"
      type="button"
      aria-label="Back to top"
      @click="scrollToTop"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 6.5 5.75 12.75l1.5 1.5 3.69-3.69V18h2.12v-7.44l3.69 3.69 1.5-1.5z"
        />
      </svg>
    </button>
  </Teleport>
</template>

<style scoped lang="less">
.app-shell {
  min-height: 100vh;
  padding-top: 24px;
  position: relative;
}

.app-shell__header {
  width: 100%;
  position: relative;
  z-index: 30;
}

.content-frame {
  width: 100%;
  position: relative;
  z-index: 1;
}

.app-shell__back-to-top {
  position: fixed;
  right: calc(env(safe-area-inset-right, 0px) + 16px);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 20px);
  z-index: 40;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(16, 16, 16, 0.72);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &:active {
    transform: scale(0.96);
  }

  svg {
    width: 22px;
    height: 22px;
    fill: currentColor;
  }
}

@media (max-width: 767px) {
  .app-shell {
    padding-top: 16px;
  }

  .app-shell__back-to-top {
    width: 44px;
    height: 44px;
    right: calc(env(safe-area-inset-right, 0px) + 14px);
    bottom: calc(env(safe-area-inset-bottom, 0px) + 18px);

    svg {
      width: 20px;
      height: 20px;
    }
  }
}

@media (min-width: 981px) {
  .app-shell--home {
    padding-top: 0;
    --home-immersive-menu-top: clamp(0px, 0vw, 0px);
    --home-immersive-menu-height: clamp(92px, 6.4vw, 108px);
    --home-banner-controls-gap: clamp(16px, 1.1vw, 20px);
  }

  .app-shell__header--immersive {
    position: absolute;
    top: var(--home-immersive-menu-top);
    left: 0;
    right: 0;
    z-index: 35;
  }
}
</style>
