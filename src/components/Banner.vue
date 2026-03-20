<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import bannerImage from "@/assets/index/banner.png";
import arrowLeft from "@/assets/index/bArrowLeftIcon.png";
import arrowRight from "@/assets/index/bArrowRightIcon.png";

const props = defineProps({
  autoplay: {
    type: Boolean,
    default: false,
  },
  autoplayDelay: {
    type: Number,
    default: 4500,
  },
});

const bannerList = [
  {
    img: bannerImage,
    title: "Careful Technology",
  },
  {
    img: bannerImage,
    title: "Careful Technology",
  },
  {
    img: bannerImage,
    title: "Careful Technology",
  },
];

const currentIndex = ref(0);
const touchStartX = ref(0);
const touchStartY = ref(0);

let autoplayTimer;

const goToSlide = (index) => {
  const total = bannerList.length;
  currentIndex.value = (index + total) % total;
};

const nextSlide = () => {
  goToSlide(currentIndex.value + 1);
};

const prevSlide = () => {
  goToSlide(currentIndex.value - 1);
};

const stopAutoplay = () => {
  window.clearInterval(autoplayTimer);
};

const startAutoplay = () => {
  if (!props.autoplay) {
    stopAutoplay();
    return;
  }

  stopAutoplay();
  autoplayTimer = window.setInterval(() => {
    nextSlide();
  }, props.autoplayDelay);
};

const handleTouchStart = (event) => {
  const touch = event.touches[0];
  touchStartX.value = touch.clientX;
  touchStartY.value = touch.clientY;
  stopAutoplay();
};

const handleTouchEnd = (event) => {
  const touch = event.changedTouches[0];

  if (!touch) {
    startAutoplay();
    return;
  }

  const deltaX = touch.clientX - touchStartX.value;
  const deltaY = touch.clientY - touchStartY.value;
  const swipeThreshold = 40;

  if (
    Math.abs(deltaX) > swipeThreshold &&
    Math.abs(deltaX) > Math.abs(deltaY)
  ) {
    if (deltaX < 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }

  startAutoplay();
};

onMounted(() => {
  startAutoplay();
});

watch(
  () => [props.autoplay, props.autoplayDelay],
  () => {
    startAutoplay();
  }
);

onBeforeUnmount(() => {
  stopAutoplay();
});
</script>

<template>
  <section
    class="banner"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
    @touchstart.passive="handleTouchStart"
    @touchend.passive="handleTouchEnd"
  >
    <div
      class="banner__track"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <article
        v-for="item in bannerList"
        :key="item.title"
        class="banner__slide"
      >
        <img class="banner__image" :src="item.img" :alt="item.title" />
        <div class="banner__title">{{ item.title }}</div>
        <div class="banner__btn">
          <button class="banner__btn">Learn More</button>
        </div>
      </article>
    </div>

    <div class="banner__shade" />

    <div class="bannerCtrBtn">
      <button
        class="banner__nav banner__nav--prev"
        type="button"
        aria-label="Previous slide"
        @click="prevSlide"
      >
        <img :src="arrowLeft" alt="" />
      </button>

      <button
        class="banner__nav banner__nav--next"
        type="button"
        aria-label="Next slide"
        @click="nextSlide"
      >
        <img :src="arrowRight" alt="" />
      </button>

      <div class="banner__pagination">
        <button
          v-for="(item, index) in bannerList"
          :key="item.title + index"
          class="banner__dot"
          :class="{ 'is-active': currentIndex === index }"
          type="button"
          :aria-label="`Go to slide ${index + 1}`"
          @click="goToSlide(index)"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="less">
.banner {
  position: relative;
  width: 100%;
  height: clamp(240px, 28vw, 450px);
  overflow: hidden;
  background: #151a1f;
  touch-action: pan-y;
}

.banner__track {
  display: flex;
  height: 100%;
  transition: transform 0.55s ease;
  will-change: transform;
}

.banner__slide {
  flex: 0 0 100%;
  height: 100%;
}

.banner__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 100%;
  display: block;
}

.banner__shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
      90deg,
      rgba(13, 17, 23, 0.28) 0%,
      rgba(13, 17, 23, 0.08) 40%,
      rgba(13, 17, 23, 0.28) 100%
    ),
    linear-gradient(
      180deg,
      rgba(7, 102, 203, 0.12) 0%,
      rgba(7, 102, 203, 0) 48%
    );
  pointer-events: none;
}

.bannerCtrBtn {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  z-index: 2;
  width: min(var(--container), calc(100% - 32px));
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  // align-items: center;
  justify-content: space-between;
  transform: translateX(-50%);
  pointer-events: none;
}

.banner__nav {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  pointer-events: auto;
  transition: transform 0.2s ease, opacity 0.2s ease;
  margin-top: 28px;
  &:hover {
    transform: scale(1.04);
    opacity: 0.86;
  }

  &:active {
    transform: scale(0.96);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.28));
  }
}

.banner__pagination {
  position: absolute;
  left: 0;
  bottom: 41px;
  display: flex;
  gap: 15px;
  pointer-events: auto;
}

.banner__dot {
  width: 10px;
  height: 10px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.42);
  cursor: pointer;
  transition: width 0.22s ease, background 0.22s ease;

  &.is-active {
    background: #fff;
  }
}

@media (max-width: 768px) {
  .banner {
    height: 260px;
  }

  .bannerCtrBtn {
    width: calc(100% - 28px);
  }

  .banner__nav {
    width: 34px;
    height: 34px;
  }

  .banner__pagination {
    bottom: 14px;
  }
}
</style>
