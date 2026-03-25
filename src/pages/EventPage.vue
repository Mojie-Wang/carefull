<template>
  <div class="pages event-page">
    <div class="page-container event-page__inner">
      <header class="event-header">
        <p class="event-header__eyebrow">News Center</p>
        <h1 class="event-header__title">Latest News</h1>
      </header>

      <section class="news-list" aria-label="Latest news">
        <article
          v-for="item in newsItems"
          :key="item.title"
          class="news-item"
          :class="{ 'news-item--with-media': item.image }"
        >
          <div class="news-item__date">
            <span class="news-item__month">{{ item.month }}</span>
            <strong class="news-item__day">{{ item.day }}</strong>
            <span class="news-item__year">{{ item.year }}</span>
          </div>

          <div class="news-item__content">
            <p class="news-item__time">{{ item.time }}</p>
            <h2 class="news-item__title">{{ item.title }}</h2>
            <p class="news-item__location">
              <strong>{{ item.venue }}</strong>
              <span>{{ item.address }}</span>
            </p>
            <p class="news-item__summary">{{ item.summary }}</p>
          </div>

          <div v-if="item.image" class="news-item__media">
            <img :src="item.image" :alt="item.imageAlt" />
          </div>
        </article>
      </section>

      <section class="join-poster">
        <img
          class="join-poster__image"
          :src="joinPosterImage"
          alt="Join Careful Technology poster"
        />
        <div class="join-poster__overlay"></div>
        <div class="join-poster__content">
          <p class="join-poster__eyebrow">Join Us</p>
          <h2 class="join-poster__title">Join Careful Technology</h2>
          <p class="join-poster__text">
            We are looking for people who care about product execution,
            materials, manufacturing collaboration, and global communication.
          </p>
          <div class="join-poster__meta">
            <span>Shanghai</span>
            <span>Open Conversation</span>
            <a href="mailto:shanghaicareful@163.com">shanghaicareful@163.com</a>
          </div>
          <button type="button" @click="goToContact">Contact Us</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import joinPosterImage from "@/assets/aboutus/banner.png";
import featuredNewsImage from "@/assets/product/productBanner.png";

const router = useRouter();

const newsItems = [
  {
    month: "JAN",
    day: "19",
    year: "2026",
    time: "January 19 @ 8:00 AM - January 23 @ 5:00 PM",
    title: "SHOT Show 26'",
    venue: "Venetian Expo + Caesars Forum, Las Vegas",
    address: "3355 S Las Vegas Blvd., Las Vegas",
    summary:
      "Careful Technology will attend SHOT Show 2026 to present ballistic materials, armor solutions, and current manufacturing capabilities for international project discussions.",
    image: featuredNewsImage,
    imageAlt: "SHOT Show style event visual",
  },
  {
    month: "OCT",
    day: "18",
    year: "2025",
    time: "October 18, 2025 @ 8:00 AM - October 21, 2025 @ 5:00 PM",
    title: "International Association of Chiefs of Police Conference",
    venue: "Colorado Convention Center",
    address: "700 14th St, Denver",
    summary:
      "The event will focus on communication with public safety and law enforcement partners around lightweight protection materials and integrated product routes.",
  },
  {
    month: "SEP",
    day: "09",
    year: "2025",
    time: "September 09, 2025 @ 9:00 AM - September 12, 2025 @ 4:00 PM",
    title: "Material and Protection Solution Update",
    venue: "Careful Technology",
    address: "Shanghai, China",
    summary:
      "A new round of product and material updates will summarize recent progress in PEUD fabric, armor plate coordination, and customer-facing technical materials.",
  },
  {
    month: "JUN",
    day: "24",
    year: "2025",
    time: "June 24, 2025 @ 10:00 AM - June 26, 2025 @ 5:00 PM",
    title: "Factory Communication Week",
    venue: "Careful Manufacturing Base",
    address: "Shanghai, China",
    summary:
      "Customers and partners can review current production planning, sample preparation workflow, and project delivery coordination through focused factory meetings.",
  },
];

const goToContact = () => {
  router.push({ name: "contact-us" });
};
</script>

<style scoped lang="less">
.event-page {
  background: #ffffff;
}

.event-page__inner {
  padding-top: clamp(64px, 7vw, 112px);
  padding-bottom: clamp(80px, 8vw, 120px);
}

.event-header {
  margin-bottom: clamp(28px, 4vw, 52px);
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(16, 24, 32, 0.08);
}

.event-header__eyebrow,
.join-poster__eyebrow,
.news-item__time,
.news-item__month,
.news-item__year,
.join-poster__meta,
.join-poster__meta a,
.join-poster button {
  font-family: var(--font-montserrat);
}

.event-header__eyebrow,
.join-poster__eyebrow {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #6f7782;
}

.event-header__title,
.news-item__title,
.join-poster__title {
  margin: 0;
  font-family: var(--font-montserrat);
  color: #101820;
}

.event-header__title {
  font-size: clamp(32px, 3.4vw, 44px);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.02em;
}

.news-list {
  display: grid;
}

.news-item {
  display: grid;
  grid-template-columns: 96px minmax(0, 1fr);
  gap: clamp(18px, 2.2vw, 38px);
  align-items: start;
  padding: clamp(28px, 3.6vw, 48px) 0;
  border-bottom: 1px solid rgba(16, 24, 32, 0.08);
}

.news-item:first-child {
  padding-top: 0;
}

.news-item--with-media {
  grid-template-columns: 96px minmax(0, 1fr) minmax(280px, 520px);
}

.news-item__date {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  color: #101820;
}

.news-item__month,
.news-item__year {
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.12em;
  color: #6d7580;
}

.news-item__day {
  font-family: var(--font-montserrat);
  font-size: clamp(36px, 4vw, 52px);
  line-height: 0.92;
  font-weight: 600;
  letter-spacing: -0.03em;
}

.news-item__content {
  max-width: 980px;
}

.news-item__time {
  margin: 4px 0 0;
  font-size: 16px;
  line-height: 1.55;
  font-weight: 400;
  color: #3d4652;
}

.news-item__title {
  margin-top: 16px;
  font-size: clamp(30px, 3vw, 54px);
  line-height: 1.12;
  font-weight: 500;
  letter-spacing: -0.03em;
}

.news-item__location,
.news-item__summary,
.join-poster__text {
  margin: 0;
  font-family: var(--font-montserrat);
}

.news-item__location {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
  font-size: 17px;
  line-height: 1.7;
  color: #1e2630;

  strong {
    font-weight: 600;
  }

  span {
    color: #4b5563;
  }
}

.news-item__summary {
  max-width: 980px;
  margin-top: 22px;
  font-size: 17px;
  line-height: 1.8;
  font-weight: 400;
  color: #4f5967;
}

.news-item__media {
  overflow: hidden;
  border-radius: 0;
}

.news-item__media img {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 240px;
  object-fit: cover;
}

.join-poster {
  position: relative;
  overflow: hidden;
  margin-top: clamp(48px, 6vw, 76px);
  min-height: clamp(300px, 34vw, 420px);
  border-radius: 0;
}

.join-poster__image,
.join-poster__overlay {
  position: absolute;
  inset: 0;
}

.join-poster__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.join-poster__overlay {
  background:
    linear-gradient(
      90deg,
      rgba(8, 14, 20, 0.82) 0%,
      rgba(8, 14, 20, 0.56) 42%,
      rgba(8, 14, 20, 0.18) 100%
    ),
    linear-gradient(180deg, rgba(8, 14, 20, 0.08), rgba(8, 14, 20, 0.18));
}

.join-poster__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  min-height: inherit;
  max-width: 640px;
  padding: clamp(34px, 4.4vw, 56px);
  color: #ffffff;
}

.join-poster__eyebrow {
  color: rgba(255, 255, 255, 0.72);
}

.join-poster__title {
  font-size: clamp(34px, 4.2vw, 58px);
  line-height: 1.02;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: #ffffff;
}

.join-poster__text {
  max-width: 560px;
  font-size: 17px;
  line-height: 1.8;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.82);
}

.join-poster__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 18px;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.86);

  a {
    color: inherit;
  }
}

.join-poster button {
  width: fit-content;
  min-height: 46px;
  padding: 0 22px;
  border: 0;
  border-radius: 999px;
  background: #ffffff;
  font-size: 14px;
  font-weight: 600;
  color: #101820;
  cursor: pointer;
  transition:
    transform 0.22s ease,
    opacity 0.22s ease;
}

.join-poster button:hover {
  transform: translateY(-1px);
  opacity: 0.94;
}

@media (max-width: 1100px) {
  .news-item--with-media {
    grid-template-columns: 96px minmax(0, 1fr);
  }

  .news-item__media {
    grid-column: 2;
    margin-top: 8px;
  }
}

@media (max-width: 768px) {
  .event-page__inner {
    padding-top: 56px;
  }

  .news-item,
  .news-item--with-media {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .news-item__date {
    flex-direction: row;
    align-items: flex-end;
    gap: 10px;
  }

  .news-item__day {
    font-size: 34px;
  }

  .news-item__title {
    font-size: 32px;
  }

  .news-item__media {
    grid-column: auto;
    margin-top: 2px;
  }

  .join-poster {
    min-height: 360px;
  }

  .join-poster__content {
    max-width: none;
    padding: 28px 22px;
  }

  .join-poster__title {
    font-size: 34px;
  }
}

@media (max-width: 520px) {
  .event-header {
    margin-bottom: 22px;
  }

  .event-header__title {
    font-size: 28px;
  }

  .news-item {
    padding: 24px 0;
  }

  .news-item__time,
  .news-item__location,
  .news-item__summary,
  .join-poster__text {
    font-size: 15px;
  }

  .news-item__title {
    font-size: 27px;
  }

  .join-poster__title {
    font-size: 30px;
  }

  .join-poster__meta {
    gap: 8px 14px;
    font-size: 13px;
  }

  .join-poster button {
    width: 100%;
    justify-content: center;
  }
}
</style>
