<script setup>
import { ref } from "vue";
import Fiber1 from "@/assets/index/Fiber1.png";
import ArmorPlate1 from "@/assets/index/ArmorPlate1.png";
import Bodyarmor1 from "@/assets/index/Bodyarmor1.png";
import BallisticHelmet1 from "@/assets/index/BallisticHelmet1.png";
import BallisticShield1 from "@/assets/index/BallisticShield1.png";
import ARMOUR1 from "@/assets/index/ARMOUR1.png";
const list = ref([
  {
    title: "Fiber",
    img: Fiber1,
  },
  {
    title: "ArmorPlate",
    img: ArmorPlate1,
  },
  {
    title: "Bodyarmor",
    img: Bodyarmor1,
  },
  {
    title: "BallisticHelmet",
    img: BallisticHelmet1,
  },
  {
    title: "BallisticShield",
    img: BallisticShield1,
  },
  {
    title: "ARMOUR",
    img: ARMOUR1,
  },
]);
const currentTitle = ref(list.value[0]?.title ?? "");
const handleClick = (title) => {
  currentTitle.value = title;
};
</script>

<template>
  <div class="wrapper">
    <div class="listWrap">
      <div
        v-for="item in list"
        :key="item.title + item.img"
        class="item"
        :class="{ 'is-active': item.title === currentTitle }"
        role="button"
        tabindex="0"
        @click="handleClick(item.title)"
        @keydown.enter.prevent="handleClick(item.title)"
        @keydown.space.prevent="handleClick(item.title)"
      >
        <h6 class="title">
          <span>{{ item.title }}</span>
        </h6>
        <img class="img" :src="item.img" :alt="item.title" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.wrapper {
  background-color: #e5e9ee;
  padding: 24px 0;
}

.listWrap {
  width: var(--container);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;

  .item {
    min-width: 0;
    display: flex;
    flex-direction: column;

    cursor: pointer;
    transition: transform 0.22s ease, box-shadow 0.22s ease,
      border-color 0.22s ease, background 0.22s ease;

    &:hover {
      transform: translateY(-2px);

      .title {
        span {
          color: #0766cb;
          border-bottom: 2px solid #0766cb;
        }
      }

      .img {
        transform: scale(1.02);
      }
    }

    &:active {
      transform: translateY(0) scale(0.98);
      box-shadow: 0 8px 18px rgba(7, 102, 203, 0.08);
    }

    &.is-active {
      border-color: rgba(7, 102, 203, 0.22);
      // background: #fff;
      // box-shadow: 0 16px 34px rgba(7, 102, 203, 0.12);

      .title {
        span {
          color: #0766cb;
          border-bottom: 2px solid #0766cb;
          font-weight: 600;
        }
      }
    }

    .title {
      display: inline-block;
      font-size: 24px;
      color: #17212c;
      text-align: center;
      margin: 0;
      padding: 0;
      margin-bottom: 14px;
      line-height: 1;
      transition: color 0.22s ease, font-weight 0.22s ease;
    }

    .img {
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      display: block;
      transition: transform 0.22s ease;
    }
  }
}

@media (max-width: 768px) {
  .wrapper {
    padding: 20px 0;
  }

  .listWrap {
    width: calc(100% - 40px);
    margin: 0 20px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .listWrap .item {
    .title {
      font-size: 20px;
    }
  }
}

@media (max-width: 420px) {
  .listWrap .item {
    .title {
      font-size: 18px;
    }

    .img {
      width: min(100%, 160px);
      margin: 0 auto;
    }
  }
}
</style>
