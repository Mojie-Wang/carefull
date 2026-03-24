<template>
  <div class="demo">
    <img class="logo" src="@/assets/logo.png" alt="" />
    <div class="right">
      <nav class="nav">
        <span
          class="nav-item"
          :class="{ 'is-active': isActive(item.path) }"
          v-for="item in navigationItems"
          :key="item.path"
          >{{ item.label }}</span
        >
      </nav>
      <img class="search-icon" src="@/assets/searchIcon.png" alt="" />
    </div>
  </div>
</template>
<script setup>
import { navigationItems } from "@/router/routes";
import { useRoute } from "vue-router";
const route = useRoute();
import { useRouter } from "vue-router";
const router = useRouter();
const isActive = (path) => route.path === path;
</script>
<style scoped lang="less">
.demo {
  width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000;
  .logo {
    flex: 0 0 360px;
    width: 360px;
    margin-right: 55px;
  }
  .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nav {
      flex: 1;
      display: flex;
      justify-content: space-between;
      margin-right: 100px;
      .nav-item {
        font-size: 24px;
        text-transform: capitalize;
        font-family: var(--montserrat-regular);
        font-weight: 400;
        cursor: pointer;
        &:hover,
        &:focus {
          color: #0766cb;
          font-weight: 600;
          font-family: var(--montserrat);
        }
        &.is-active {
          color: #0766cb;
          font-weight: 600;
          font-family: var(--montserrat);
        }
      }
    }
    .search-icon {
      flex: 0 0 42px;
      width: 42px;
    }
  }
}
</style>