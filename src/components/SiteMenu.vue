<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import logo from "@/assets/logo.png";
import compactLogo from "@/assets/logo_s.png";
import searchIcon from "@/assets/searchIcon.png";
import { navigationItems } from "@/router/routes";

const route = useRoute();
const router = useRouter();

const topbarRef = ref(null);
const navRef = ref(null);
const navListRef = ref(null);
const actionsRef = ref(null);
const isMenuOpen = ref(false);
const useCompactLogo = ref(false);

const MENU_BREAKPOINT = 980;
const LARGE_LOGO_WIDTH = 338;
const COMPACT_LOGO_WIDTH = 92;
const LOGO_TO_NAV_GAP = 55;
const NAV_TO_ACTIONS_GAP = 22;
const RESTORE_BUFFER = 24;

let resizeObserver;

const closeMenu = () => {
  isMenuOpen.value = false;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const goToPath = (path) => {
  if (route.path === path) {
    closeMenu();
    return;
  }

  router.push(path);
  closeMenu();
};

const isActive = (path) => route.path === path;

const getNavItems = () => {
  return navListRef.value
    ? [...navListRef.value.querySelectorAll(".topbar__link")]
    : [];
};

const hasWrappedMenuItems = () => {
  const items = getNavItems();

  if (items.length < 2) {
    return false;
  }

  const firstTop = items[0].offsetTop;
  return items.some((item) => item.offsetTop > firstTop + 1);
};

const getRequiredNavWidth = () => {
  const navListElement = navListRef.value;
  const items = getNavItems();

  if (!navListElement || !items.length) {
    return 0;
  }

  const navStyles = window.getComputedStyle(navListElement);
  const gap = parseFloat(navStyles.columnGap || navStyles.gap || "0");

  return (
    items.reduce((total, item) => total + item.offsetWidth, 0) +
    gap * Math.max(items.length - 1, 0)
  );
};

const getActionsWidth = () => {
  return actionsRef.value?.offsetWidth ?? 0;
};

const syncLogoMode = () => {
  const topbarElement = topbarRef.value;
  const navElement = navRef.value;

  if (!topbarElement || !navElement) {
    return;
  }

  if (window.innerWidth <= MENU_BREAKPOINT) {
    useCompactLogo.value = false;
    return;
  }

  const topbarWidth = topbarElement.clientWidth;
  const navRequiredWidth = getRequiredNavWidth();
  const actionsWidth = getActionsWidth();
  const largeLayoutWidth =
    LARGE_LOGO_WIDTH +
    LOGO_TO_NAV_GAP +
    navRequiredWidth +
    NAV_TO_ACTIONS_GAP +
    actionsWidth;
  const compactLayoutWidth =
    COMPACT_LOGO_WIDTH +
    LOGO_TO_NAV_GAP +
    navRequiredWidth +
    NAV_TO_ACTIONS_GAP +
    actionsWidth;

  if (!useCompactLogo.value) {
    useCompactLogo.value =
      hasWrappedMenuItems() || largeLayoutWidth > topbarWidth;
    return;
  }

  useCompactLogo.value =
    compactLayoutWidth > topbarWidth
      ? true
      : largeLayoutWidth > topbarWidth - RESTORE_BUFFER;
};

onMounted(async () => {
  await nextTick();
  syncLogoMode();

  resizeObserver = new ResizeObserver(() => {
    syncLogoMode();
  });

  if (topbarRef.value) {
    resizeObserver.observe(topbarRef.value);
  }

  if (navRef.value) {
    resizeObserver.observe(navRef.value);
  }

  if (actionsRef.value) {
    resizeObserver.observe(actionsRef.value);
  }

  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      syncLogoMode();
    });
  }
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
});

watch(
  () => route.fullPath,
  async () => {
    closeMenu();
    await nextTick();
    syncLogoMode();
  }
);
</script>

<template>
  <header
    ref="topbarRef"
    class="topbar"
    :class="{ 'is-compact': useCompactLogo }"
  >
    <span
      class="brand"
      role="link"
      tabindex="0"
      @click="goToPath('/')"
      @keydown.enter.prevent="goToPath('/')"
      @keydown.space.prevent="goToPath('/')"
    >
      <img
        class="logo"
        :class="{ 'is-compact': useCompactLogo }"
        :src="useCompactLogo ? compactLogo : logo"
        alt="Careful"
        @load="syncLogoMode"
      />
    </span>

    <nav
      ref="navRef"
      id="site-menu"
      class="topbar__nav"
      :class="{ 'is-open': isMenuOpen }"
      aria-label="Primary"
    >
      <div ref="navListRef" class="topbar__nav-list">
        <span
          v-for="item in navigationItems"
          :key="item.name"
          class="topbar__link"
          :class="{ 'is-active': isActive(item.path) }"
          role="link"
          tabindex="0"
          @click="goToPath(item.path)"
          @keydown.enter.prevent="goToPath(item.path)"
          @keydown.space.prevent="goToPath(item.path)"
        >
          {{ item.label }}
        </span>
      </div>

      <div class="topbar__nav-tools">
        <!-- <span class="topbar__locale">EN/中</span> -->
        <span class="topbar__search">
          <img :src="searchIcon" alt="search" />
        </span>
      </div>
    </nav>

    <div ref="actionsRef" class="topbar__actions">
      <!-- <span class="topbar__locale">EN/中</span> -->
      <span class="topbar__search">
        <img :src="searchIcon" alt="search" />
      </span>
    </div>

    <button
      class="menu-toggle"
      :class="{ 'is-open': isMenuOpen }"
      type="button"
      :aria-expanded="String(isMenuOpen)"
      aria-controls="site-menu"
      aria-label="Toggle navigation"
      @click="toggleMenu"
    >
      <span />
      <span />
      <span />
    </button>
  </header>
</template>

<style scoped lang="less">
.topbar {
  width: var(--container);
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: stretch;
  min-height: 96px;
  padding: 0;

  &.is-compact {
    .brand {
      margin-right: 55px;
    }
  }
}

.brand {
  display: inline-flex;
  align-items: center;
  align-self: center;
  flex: 0 0 auto;
  margin-right: 55px;
  cursor: pointer;
  user-select: none;

  img.logo {
    width: 338px;
    height: auto;
    object-fit: contain;
    transition: width 0.26s ease, transform 0.26s ease, opacity 0.2s ease,
      filter 0.26s ease;
  }

  img.logo.is-compact {
    width: 92px;
  }
}

.topbar__nav {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  align-self: stretch;
  flex: 1 1 auto;
  min-width: 0;
  overflow: visible;
  // border: 1px solid #333;
}

.topbar__nav-list {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex: 0 0 auto;
  max-width: 100%;
  height: 100%;
  margin-left: 0;
  gap: clamp(18px, 1.35vw, 28px);
  white-space: nowrap;
}

.topbar__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  align-self: stretch;
  flex: 0 0 auto;
  min-height: 100%;
  padding: 0;
  color: #151b24;
  cursor: pointer;
  white-space: nowrap;
  font-size: 17px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0;
  transition: color 0.22s ease, transform 0.22s ease;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    // width: calc(100% + 6px);
    width: 100%;
    height: 4px;
    border-radius: 0;
    background: #1e73d8;
    opacity: 0;
    transform: translateX(-50%) scaleX(0.2);
    transform-origin: center;
    transition: opacity 0.22s ease, transform 0.22s ease;
  }

  &:hover {
    color: #1e73d8;

    &::after {
      opacity: 1;
      transform: translateX(-50%) scaleX(1);
    }
  }

  &.is-active {
    color: #1e73d8;
    font-weight: 600;

    &::after {
      opacity: 1;
      transform: translateX(-50%) scaleX(1);
    }
  }
}

.topbar__actions,
.topbar__nav-tools {
  display: flex;
  align-items: center;
  align-self: center;
  flex: 0 0 auto;
  gap: 16px;
}

.topbar__actions {
  margin-left: 22px;
  justify-content: flex-end;
}

.topbar__nav-tools {
  display: none;
}

// .topbar__locale {
//   color: #0f172a;
//   font-size: 1rem;
//   font-weight: 700;
//   line-height: 1;
//   white-space: nowrap;
// }

.topbar__search {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
  }
}

.menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.72);
  color: var(--text);
  cursor: pointer;
  backdrop-filter: blur(14px);
  box-shadow: 0 14px 28px rgba(27, 39, 55, 0.08);
  transition: transform 0.24s ease, background 0.24s ease,
    border-color 0.24s ease, box-shadow 0.24s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(20, 74, 103, 0.2);
    box-shadow: 0 18px 30px rgba(27, 39, 55, 0.12);
  }

  span {
    display: block;
    width: 18px;
    height: 2px;
    border-radius: 999px;
    background: currentColor;
    transition: transform 0.24s ease, opacity 0.2s ease, width 0.24s ease;
  }

  &.is-open {
    background: rgba(15, 118, 110, 0.12);
    border-color: rgba(15, 118, 110, 0.24);
    box-shadow: 0 18px 30px rgba(20, 74, 103, 0.14);
  }

  &.is-open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  &.is-open span:nth-child(2) {
    opacity: 0;
    width: 0;
  }

  &.is-open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
}

@media (max-width: 980px) {
  .topbar {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    column-gap: 16px;
    padding: 10px 0 18px;
    min-height: auto;
    border-bottom: 0;
  }

  .brand {
    min-width: 0;
    margin-right: 0;

    img.logo,
    img.logo.is-compact {
      width: min(100%, 280px);
      height: auto;
    }
  }

  .topbar__actions {
    display: none;
  }

  .menu-toggle {
    display: inline-flex;
    justify-self: end;
  }

  .topbar__nav {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: stretch;
    position: absolute;
    top: calc(100% - 2px);
    left: 0;
    right: 0;
    z-index: 10;
    row-gap: 10px;
    padding: 14px;
    border: 1px solid rgba(23, 33, 44, 0.08);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 24px 52px rgba(27, 39, 55, 0.16);
    backdrop-filter: blur(18px);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-12px) scale(0.98);
    transform-origin: top right;
    transition: opacity 0.24s ease, transform 0.24s ease,
      visibility 0s linear 0.24s;
    overflow: visible;
    min-width: 0;
  }

  .topbar__nav-list {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: stretch;
    flex: none;
    max-width: none;
    height: auto;
    margin-left: 0;
    gap: 10px;
    white-space: normal;
  }

  .topbar__nav.is-open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0) scale(1);
    transition: opacity 0.24s ease, transform 0.24s ease,
      visibility 0s linear 0s;
  }

  .topbar__link {
    width: 100%;
    justify-content: flex-start;
    min-height: 52px;
    padding: 0 16px;
    border: 1px solid rgba(23, 33, 44, 0.08);
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 12px 24px rgba(27, 39, 55, 0.06);
    font-size: 1rem;

    &::after {
      display: none;
    }

    &:hover {
      transform: translateX(2px);
      background: rgba(30, 115, 216, 0.04);
    }

    &.is-active {
      color: #fff;
      background: linear-gradient(135deg, #0f75e6, #0656ba);
      box-shadow: 0 18px 30px rgba(15, 117, 230, 0.2);
    }
  }

  .topbar__nav-tools {
    display: flex;
    justify-content: space-between;
    padding-top: 12px;
    border-top: 1px solid rgba(23, 33, 44, 0.08);
  }

  .topbar__actions {
    margin-left: 0;
  }
}

@media (max-width: 560px) {
  .brand {
    img.logo,
    img.logo.is-compact {
      width: min(100%, 230px);
    }
  }

  // .topbar__locale {
  //   font-size: 0.94rem;
  // }
}
</style>
