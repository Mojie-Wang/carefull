<template>
  <section class="apply-card">
    <div class="apply-card__grid">
      <article
        v-for="(item, index) in list"
        :key="item.content + item.img"
        class="apply-card__item"
        :class="{ 'is-active': isTouchDevice && activeIndex === index }"
        tabindex="0"
        @click="handleItemClick(index)"
        @keydown.enter.prevent="handleItemClick(index)"
        @keydown.space.prevent="handleItemClick(index)"
      >
        <div class="apply-card__image-wrap">
          <img class="apply-card__image" :src="item.img" :alt="item.content" />
        </div>

        <div class="apply-card__content">
          <h6 class="apply-card__title">{{ item.content }}</h6>

          <button class="apply-card__btn" type="button" @click.stop>
            <span>Learn More</span>
            <img :src="arrowRightBlue" alt="" aria-hidden="true" />
          </button>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import arrowRightBlue from "@/assets/index/arrowRightBlue.png";
import card1 from "@/assets/index/card1.png";
import card2 from "@/assets/index/card2.png";
import card3 from "@/assets/index/card3.png";

const list = ref([
  {
    content:
      "International Police Equipment and Counter-Terrorism Technology Exhibition",
    img: card1,
  },
  {
    content:
      "International Police Equipment and Counter-Terrorism Technology Exhibition",
    img: card2,
  },
  {
    content:
      "International Police Equipment and Counter-Terrorism Technology Exhibition",
    img: card3,
  },
]);

const isTouchDevice = ref(false);
const activeIndex = ref(null);

let touchMediaQuery;

const syncTouchDevice = () => {
  isTouchDevice.value = touchMediaQuery?.matches ?? false;

  if (!isTouchDevice.value) {
    activeIndex.value = null;
  }
};

const resetActiveIndex = () => {
  activeIndex.value = null;

  const activeElement = document.activeElement;

  if (
    activeElement instanceof HTMLElement &&
    activeElement.closest(".apply-card__item")
  ) {
    activeElement.blur();
  }
};

const handleItemClick = (index) => {
  if (!isTouchDevice.value) {
    return;
  }

  activeIndex.value = activeIndex.value === index ? null : index;
};

onMounted(() => {
  touchMediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
  syncTouchDevice();
  window.addEventListener("scroll", resetActiveIndex, { passive: true });
  window.addEventListener("touchmove", resetActiveIndex, { passive: true });

  if (typeof touchMediaQuery.addEventListener === "function") {
    touchMediaQuery.addEventListener("change", syncTouchDevice);
    return;
  }

  touchMediaQuery.addListener(syncTouchDevice);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", resetActiveIndex);
  window.removeEventListener("touchmove", resetActiveIndex);

  if (!touchMediaQuery) {
    return;
  }

  if (typeof touchMediaQuery.removeEventListener === "function") {
    touchMediaQuery.removeEventListener("change", syncTouchDevice);
    return;
  }

  touchMediaQuery.removeListener(syncTouchDevice);
});
</script>

<style scoped lang="less">
.apply-card {
  width: var(--container);
  margin: 0 auto;
}

.apply-card__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.apply-card__item {
  position: relative;
  aspect-ratio: 233 / 278;
  overflow: hidden;
  background: #d8e1ea;
  border-radius: 8px;
}

.apply-card__image-wrap,
.apply-card__content {
  position: absolute;
  inset: 0;
}

.apply-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.apply-card__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
  padding: 40px;
  background: #0766cb;
  opacity: 0;
  transition: opacity 0.24s ease, transform 0.24s ease;
  transform: translateY(16px);
}

.apply-card__item.is-active .apply-card__content {
  opacity: 0.8;
  transform: translateY(0);
}

.apply-card__item.is-active .apply-card__image {
  transform: scale(1.03);
}

.apply-card__image {
  transition: transform 0.3s ease;
}

.apply-card__title {
  margin: 0;
  color: #fff;
  font-family: var(--font-montserrat);
  font-size: clamp(24px, 2.2vw, 32px);
  font-weight: 600;
  line-height: 50px;
  text-align: center;
}

.apply-card__btn {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  min-height: 48px;
  padding: 0 20px;
  border: 0;
  border-radius: 8px;
  background: #fff;
  color: #0766cb;
  font-family: var(--font-montserrat);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.16);
  }

  img {
    width: 50px;
    height: 10px;
    object-fit: contain;
  }
}

@media (max-width: 1080px) {
  .apply-card__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (hover: hover) and (pointer: fine) {
  .apply-card__item:hover .apply-card__content,
  .apply-card__item:focus-visible .apply-card__content,
  .apply-card__item:focus-within .apply-card__content {
    opacity: 0.8;
    transform: translateY(0);
  }

  .apply-card__item:hover .apply-card__image,
  .apply-card__item:focus-visible .apply-card__image,
  .apply-card__item:focus-within .apply-card__image {
    transform: scale(1.03);
  }

  .apply-card__item:focus-visible {
    outline: 2px solid rgba(7, 102, 203, 0.42);
    outline-offset: 2px;
  }
}

@media (max-width: 768px) {
  .apply-card {
    width: calc(100% - 40px);
  }

  .apply-card__grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .apply-card__item {
    aspect-ratio: 233 / 278;
  }

  .apply-card__content {
    padding: 20px;
    gap: 16px;
  }

  .apply-card__title {
    font-size: 24px;
  }

  .apply-card__btn {
    min-height: 44px;
    padding: 0 18px;
    font-size: 15px;
  }
}
</style>
