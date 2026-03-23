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
    title: "Ballistic helmet",
    desc: "Lightweight and with stable ballistic safety performance",
    buttonText: "Learn More",
  },
  {
    img: bannerImage,
    title: "Ballistic helmet",
    desc: "Lightweight and with stable ballistic safety performance",
    buttonText: "Learn More",
  },
  {
    img: bannerImage,
    title: "Ballistic helmet",
    desc: "Lightweight and with stable ballistic safety performance",
    buttonText: "Learn More",
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
        v-for="(item, index) in bannerList"
        :key="item.title + index"
        class="banner__slide"
      >
        <img class="banner__image" :src="item.img" :alt="item.title" />
        <div class="banner__content-wrap">
          <div class="banner__content">
            <h2 class="banner__title">{{ item.title }}</h2>
            <p class="banner__desc">{{ item.desc }}</p>
            <button class="banner__cta" type="button">
              {{ item.buttonText }}
            </button>
          </div>
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
  // height: clamp(400px, 40vw, 900px);
  height: 900px;
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
  position: relative;
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

.banner__content-wrap {
  position: absolute;
  left: 50%;
  right: auto;
  bottom: 72px;
  z-index: 2;
  width: min(var(--container), calc(100% - 32px));
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.banner__content {
  width: min(1080px, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  color: #fff;
  pointer-events: auto;
}

.banner__title {
  margin: 0;
  font-family: var(--font-din-alternate);
  font-size: clamp(56px, 6.4vw, 104px);
  line-height: 1.08;
  font-weight: 700;
}

.banner__desc {
  margin: 0;
  font-family: var(--font-alibaba-puhuiti);
  font-size: clamp(28px, 2.6vw, 40px);
  line-height: 1.5;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.92);
}

.banner__cta {
  width: clamp(160px, 21vw, 302px);
  min-height: clamp(42px, 4.2vw, 60px);
  padding: clamp(8px, 0.9vw, 12px) clamp(18px, 1.8vw, 28px);
  border-radius: 21px 21px 21px 21px;
  border: 2px solid #ffffff;
  // border: 1px solid rgba(255, 255, 255, 0.68);
  border-radius: 21px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: clamp(16px, 2.4vw, 36px);
  font-weight: 400;
  line-height: 1;
  cursor: pointer;
  font-family: var(--font-montserrat);
  transition: background 0.22s ease, border-color 0.22s ease,
    transform 0.22s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.18);
    border-color: #fff;
  }

  &:active {
    transform: scale(0.98);
  }
}

.banner__shade {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
      180deg,
      rgba(10, 16, 25, 0.5) 0%,
      rgba(10, 16, 25, 0.18) 18%,
      rgba(10, 16, 25, 0) 34%
    ),
    linear-gradient(
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
  top: 50%;
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

  .banner__content-wrap {
    bottom: 44px;
    width: calc(100% - 28px);
  }

  .banner__content {
    gap: 10px;
  }

  .banner__title {
    font-size: 24px;
  }

  .banner__desc {
    font-size: 13px;
    line-height: 1.4;
  }

  .banner__cta {
    width: clamp(132px, 42vw, 180px);
    min-height: 42px;
    padding: 10px 18px;
    font-size: clamp(14px, 4vw, 18px);
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

@media (max-width: 1200px) and (min-width: 769px) {
  .banner__content-wrap {
    bottom: 56px;
  }

  .banner__content {
    width: min(820px, 100%);
    gap: 14px;
  }

  .banner__title {
    font-size: clamp(44px, 5.4vw, 80px);
  }

  .banner__desc {
    font-size: clamp(20px, 2.2vw, 30px);
    line-height: 1.45;
  }
}
</style>
