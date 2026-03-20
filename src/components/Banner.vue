<script setup>
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "@/assets/index/banner1.png";
import arrowLeft from "@/assets/index/bArrowLeftIcon.png";
import arrowRight from "@/assets/index/bArrowRightIcon.png";

const modules = [Autoplay, Navigation, Pagination];

const bannerList = [
  {
    img: banner1,
    eyebrow: "Careful Technology",
    title: "Advanced Composite Protection Systems",
    desc: "High-performance fibers, armor plates, and tactical protection products engineered for demanding environments.",
    cta: "Explore Materials",
  },
  {
    img: banner1,
    eyebrow: "Ballistic Solutions",
    title: "Lightweight Defense With Structural Strength",
    desc: "A modern manufacturing chain covering PE ballistic materials, integrated panels, and large-size armor applications.",
    cta: "View Capabilities",
  },
  {
    img: banner1,
    eyebrow: "Industrial Capacity",
    title: "From Fiber To Finished Protection Equipment",
    desc: "R&D, design, production, and delivery aligned to complex protection requirements across land, marine, and tactical use cases.",
    cta: "See Product Range",
  },
];
</script>

<template>
  <section class="banner">
    <Swiper
      class="banner__swiper"
      :modules="modules"
      :slides-per-view="1"
      :loop="true"
      :speed="900"
      :autoplay="{
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      :pagination="{
        el: '.banner__pagination',
        clickable: true,
      }"
      :navigation="{
        prevEl: '.banner__nav--prev',
        nextEl: '.banner__nav--next',
      }"
    >
      <SwiperSlide
        v-for="item in bannerList"
        :key="item.title"
        class="banner__slide"
      >
        <article class="banner__panel">
          <div
            class="banner__image"
            :style="{ backgroundImage: `url(${item.img})` }"
          />
          <div class="banner__overlay" />

          <div class="banner__content-wrap">
            <div class="banner__content">
              <p class="banner__eyebrow">{{ item.eyebrow }}</p>
              <h2 class="banner__title">{{ item.title }}</h2>
              <p class="banner__desc">{{ item.desc }}</p>
              <button class="banner__cta" type="button">{{ item.cta }}</button>
            </div>
          </div>
        </article>
      </SwiperSlide>
    </Swiper>

    <div class="banner__chrome">
      <button
        class="banner__nav banner__nav--prev"
        type="button"
        aria-label="Previous slide"
      >
        <img :src="arrowLeft" alt="" />
      </button>
      <button
        class="banner__nav banner__nav--next"
        type="button"
        aria-label="Next slide"
      >
        <img :src="arrowRight" alt="" />
      </button>

      <div class="banner__pagination" />
    </div>
  </section>
</template>

<style scoped lang="less">
.banner {
  position: relative;
  height: 900px;
  overflow: hidden;
  background: #151a1f;
}

.banner__swiper {
  width: 100%;
  height: 100%;
}

.banner__slide,
.banner__panel {
  height: 100%;
}

.banner__panel {
  position: relative;
}

.banner__image {
  position: absolute;
  inset: 0;
  background-position: center center;
  background-repeat: repeat-x;
  background-size: auto 100%;
}

.banner__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
      90deg,
      rgba(11, 16, 22, 0.84) 0%,
      rgba(11, 16, 22, 0.6) 34%,
      rgba(11, 16, 22, 0.16) 68%,
      rgba(11, 16, 22, 0.04) 100%
    ),
    linear-gradient(
      180deg,
      rgba(7, 102, 203, 0.14) 0%,
      rgba(7, 102, 203, 0) 48%
    );
}

.banner__content-wrap {
  position: absolute;
  inset: 0;
  z-index: 2;
  width: var(--container);
  max-width: var(--container);
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
}

.banner__content {
  max-width: min(560px, calc(100% - 120px));
  padding-bottom: 112px;
  color: #fff;
}

.banner__eyebrow {
  display: inline-flex;
  align-items: center;
  margin: 0 0 16px;
  padding: 9px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(10px);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.banner__title {
  margin: 0 0 16px;
  font-family: var(--font-montserrat);
  font-size: clamp(2rem, 5vw, 4.2rem);
  line-height: 0.98;
  font-weight: 900;
  font-style: italic;
  text-wrap: balance;
}

.banner__desc {
  margin: 0 0 28px;
  max-width: 52ch;
  font-size: clamp(1rem, 1.3vw, 1.12rem);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.84);
}

.banner__cta {
  min-height: 48px;
  padding: 0 22px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, #0f75e6, #0766cb);
  color: #fff;
  font-size: 0.98rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 18px 32px rgba(7, 102, 203, 0.28);
  transition: transform 0.22s ease, box-shadow 0.22s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 20px 36px rgba(7, 102, 203, 0.34);
  }
}

.banner__chrome {
  position: absolute;
  inset: 0;
  z-index: 3;
  width: var(--container);
  max-width: var(--container);
  margin: 0 auto;
  pointer-events: none;
}

.banner__nav {
  position: absolute;
  top: 50%;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border: 0;
  border-radius: 50%;
  background: rgba(16, 23, 31, 0.62);
  backdrop-filter: blur(12px);
  cursor: pointer;
  transform: translateY(-50%);
  transition: transform 0.22s ease, background 0.22s ease;
  pointer-events: auto;

  &:hover {
    background: rgba(7, 102, 203, 0.86);
  }

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
}

.banner__nav--prev {
  left: 0;
}

.banner__nav--next {
  right: 0;
}

.banner__pagination {
  position: absolute;
  right: 0;
  bottom: 56px;
  z-index: 1;
  display: flex;
  gap: 10px;
  pointer-events: auto;
}

:deep(.banner__pagination .swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  margin: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.42);
  opacity: 1;
  transition: width 0.22s ease, background 0.22s ease;
}

:deep(.banner__pagination .swiper-pagination-bullet-active) {
  width: 28px;
  background: #fff;
}

@media (max-width: 900px) {
  .banner {
    height: 720px;
  }

  .banner__content-wrap,
  .banner__chrome {
    width: calc(100% - 40px);
    max-width: none;
  }

  .banner__content {
    max-width: min(520px, calc(100% - 96px));
    padding-bottom: 88px;
  }

  .banner__nav {
    width: 48px;
    height: 48px;
  }
}

@media (max-width: 640px) {
  .banner {
    height: 560px;
  }

  .banner__content-wrap,
  .banner__chrome {
    width: calc(100% - 32px);
  }

  .banner__content {
    max-width: min(100%, 360px);
    padding-bottom: 72px;
  }

  .banner__eyebrow {
    margin-bottom: 14px;
    font-size: 0.74rem;
  }

  .banner__title {
    margin-bottom: 12px;
    font-size: clamp(1.6rem, 9vw, 2.4rem);
  }

  .banner__desc {
    margin-bottom: 20px;
    font-size: 0.94rem;
    line-height: 1.6;
  }

  .banner__cta {
    min-height: 44px;
    padding: 0 18px;
    font-size: 0.92rem;
  }

  .banner__nav {
    display: none;
  }

  .banner__pagination {
    right: 0;
    bottom: 24px;
  }
}
</style>
