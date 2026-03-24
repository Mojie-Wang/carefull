<template>
  <div class="pages event-page">
    <section class="hero">
      <img class="hero__bg" :src="eventBanner" alt="Event center banner" />
      <div class="hero__overlay"></div>
      <div class="hero__inner page-container">
        <p class="hero__eyebrow">NEWS CENTER</p>
        <h1 class="hero__title">Events & News</h1>
        <p class="hero__desc">
          Stay aligned with Careful Technology's exhibition schedule, production
          milestones and ballistic material updates through a more traditional
          PC-style news center layout.
        </p>
        <div class="hero__stats">
          <div v-for="stat in heroStats" :key="stat.label" class="hero__stat">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="top-layout page-container">
      <article class="feature-panel">
        <p class="feature-panel__eyebrow">TOP STORY</p>
        <p class="feature-panel__date">{{ featuredStory.date }}</p>
        <h2 class="feature-panel__title">{{ featuredStory.title }}</h2>
        <p class="feature-panel__summary">{{ featuredStory.summary }}</p>
        <div class="feature-panel__topics">
          <span v-for="topic in featuredStory.topics" :key="topic">
            {{ topic }}
          </span>
        </div>
        <button
          class="feature-panel__button"
          type="button"
          @click="goToContact"
        >
          Contact for Details
        </button>
      </article>

      <aside class="headline-panel">
        <div class="headline-panel__header">
          <h2>Latest Headlines</h2>
          <p>Updated around company progress, outreach and product direction.</p>
        </div>
        <div class="headline-list">
          <article
            v-for="headline in headlineItems"
            :key="headline.title"
            class="headline-item"
          >
            <p class="headline-item__date">{{ headline.date }}</p>
            <h3 class="headline-item__title">{{ headline.title }}</h3>
            <p class="headline-item__summary">{{ headline.summary }}</p>
          </article>
        </div>
      </aside>
    </section>

    <section class="news-center page-container">
      <div class="news-center__header">
        <div>
          <p class="news-center__eyebrow">OFFICIAL UPDATES</p>
          <h2 class="news-center__title">News Center</h2>
        </div>
        <div class="news-tabs">
          <button
            v-for="category in categories"
            :key="category"
            class="news-tabs__button"
            :class="{ 'is-active': category === activeCategory }"
            type="button"
            @click="activeCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <div class="news-center__layout">
        <div class="news-list">
          <article v-for="item in filteredNews" :key="item.title" class="news-item">
            <div class="news-item__datebox">
              <strong>{{ item.day }}</strong>
              <span>{{ item.month }}</span>
              <small>{{ item.year }}</small>
            </div>
            <div class="news-item__body">
              <p class="news-item__category">{{ item.category }}</p>
              <h3 class="news-item__title">{{ item.title }}</h3>
              <p class="news-item__summary">{{ item.summary }}</p>
              <div class="news-item__meta">
                <span>{{ item.location }}</span>
                <span>{{ item.tag }}</span>
              </div>
            </div>
          </article>
        </div>

        <aside class="news-side">
          <div class="side-card">
            <h3 class="side-card__title">Upcoming Schedule</h3>
            <div class="schedule-list">
              <article
                v-for="upcoming in upcomingEvents"
                :key="upcoming.title"
                class="schedule-item"
              >
                <p class="schedule-item__date">{{ upcoming.date }}</p>
                <h4 class="schedule-item__title">{{ upcoming.title }}</h4>
                <p class="schedule-item__location">{{ upcoming.location }}</p>
                <p class="schedule-item__note">{{ upcoming.note }}</p>
              </article>
            </div>
          </div>

          <div class="side-card">
            <h3 class="side-card__title">Archive</h3>
            <div class="archive-list">
              <div
                v-for="archive in archiveItems"
                :key="archive.year"
                class="archive-item"
              >
                <span>{{ archive.year }}</span>
                <span>{{ archive.count }} updates</span>
              </div>
            </div>
          </div>

          <div class="side-card side-card--cta">
            <h3 class="side-card__title">Need media or product material?</h3>
            <p class="side-card__text">
              Our team can share company introduction, product range and meeting
              arrangements for your project communication.
            </p>
            <button type="button" @click="goToContact">Contact Us</button>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import eventBanner from "@/assets/product/productBanner.png";

const router = useRouter();

const heroStats = [
  {
    value: "20+",
    label: "key production lines",
  },
  {
    value: "800 tons",
    label: "annual PE ballistic materials",
  },
  {
    value: "20,000 sqm",
    label: "armor plate materials per year",
  },
];

const featuredStory = {
  date: "March 18, 2026",
  title:
    "Careful Technology expanded its integrated workflow for large-size composite armor plate projects",
  summary:
    "By combining material selection, structural discussion and delivery planning, the company is improving response speed for shelter, vehicle and platform protection needs.",
  topics: [
    "Large-size armor plates",
    "Project delivery",
    "Composite protection",
  ],
};

const headlineItems = [
  {
    date: "2026.03.12",
    title: "PEUD fabric options were regrouped for faster model matching.",
    summary:
      "The product team refreshed common solution paths to help customers compare weight, rigidity and target ballistic level more efficiently.",
  },
  {
    date: "2026.02.28",
    title: "Overseas communication materials were updated for Q2 meetings.",
    summary:
      "The latest brand pack emphasizes lightweight, thinner and softer protection routes across multiple applications.",
  },
  {
    date: "2026.02.10",
    title: "R&D cooperation topics continue around composite process optimization.",
    summary:
      "Industrial production experience and academic resources are being connected for higher development efficiency.",
  },
  {
    date: "2026.01.24",
    title: "Quality review checkpoints were strengthened before shipment.",
    summary:
      "Consistency checks and documentation steps were refined to support repeat procurement and long-cycle programs.",
  },
];

const categories = [
  "All",
  "Company News",
  "Exhibitions",
  "Product Updates",
  "Partnerships",
];

const activeCategory = ref("All");

const newsItems = [
  {
    category: "Company News",
    day: "18",
    month: "MAR",
    year: "2026",
    title:
      "Integrated platform protection projects now follow a tighter internal coordination process",
    summary:
      "Fabric, plate, packaging and delivery planning are linked more closely for large custom orders, improving communication speed across departments.",
    location: "Shanghai",
    tag: "Project delivery",
  },
  {
    category: "Product Updates",
    day: "12",
    month: "MAR",
    year: "2026",
    title:
      "Ballistic solution matrix was refreshed around common NIJ-oriented application levels",
    summary:
      "Sales and engineering teams reorganized route suggestions covering soft armor, ceramic-backed plates and helmet structures.",
    location: "Product Center",
    tag: "NIJ guidance",
  },
  {
    category: "Exhibitions",
    day: "28",
    month: "FEB",
    year: "2026",
    title:
      "Meeting materials for overseas customer communication were prepared for the new exhibition cycle",
    summary:
      "The update focuses on lightweight system advantages, application matching and clearer conversation support for face-to-face outreach.",
    location: "Global outreach",
    tag: "Exhibition support",
  },
  {
    category: "Partnerships",
    day: "10",
    month: "FEB",
    year: "2026",
    title:
      "Composite material development discussions continue with long-term research partners",
    summary:
      "The company is keeping research cooperation aligned with production experience to improve development efficiency and validation rhythm.",
    location: "Shanghai",
    tag: "R&D cooperation",
  },
  {
    category: "Company News",
    day: "24",
    month: "JAN",
    year: "2026",
    title:
      "Multi-batch consistency checks were strengthened across quality review and shipment preparation",
    summary:
      "Inspection records and process checkpoints were refined to support long-cycle orders, repeat procurement and export communication.",
    location: "Factory",
    tag: "Quality control",
  },
  {
    category: "Product Updates",
    day: "08",
    month: "JAN",
    year: "2026",
    title:
      "Large-format armor plate capability was highlighted for vehicle and shelter protection scenarios",
    summary:
      "The production line can support broader panel dimensions for projects that require wide coverage and structural stability.",
    location: "Manufacturing",
    tag: "Large-size plates",
  },
];

const upcomingEvents = [
  {
    date: "APR 2026",
    title: "Factory Visiting Week",
    location: "Shanghai",
    note: "Project partners can schedule material reviews and process discussions.",
  },
  {
    date: "MAY 2026",
    title: "Online Technical Session",
    location: "Remote Meeting",
    note: "Focused on NIJ-oriented selection and sample planning for export projects.",
  },
  {
    date: "JUN 2026",
    title: "Customer Delivery Review Day",
    location: "Shanghai",
    note: "Production scheduling and packaging coordination for ongoing programs.",
  },
];

const archiveItems = [
  {
    year: "2026",
    count: 12,
  },
  {
    year: "2025",
    count: 9,
  },
  {
    year: "2024",
    count: 7,
  },
];

const filteredNews = computed(() => {
  if (activeCategory.value === "All") {
    return newsItems;
  }

  return newsItems.filter((item) => item.category === activeCategory.value);
});

const goToContact = () => {
  router.push({ name: "contact-us" });
};
</script>

<style scoped lang="less">
.event-page {
  padding-bottom: clamp(72px, 7vw, 120px);
  background: linear-gradient(180deg, #ffffff 0%, #f5f7fa 74%, #ffffff 100%);
}

.hero {
  position: relative;
  overflow: hidden;
  min-height: clamp(360px, 38vw, 520px);
}

.hero__bg,
.hero__overlay {
  position: absolute;
  inset: 0;
}

.hero__bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__overlay {
  background:
    linear-gradient(
      90deg,
      rgba(10, 16, 21, 0.84) 0%,
      rgba(10, 16, 21, 0.7) 38%,
      rgba(10, 16, 21, 0.34) 100%
    ),
    linear-gradient(180deg, rgba(10, 16, 21, 0.08) 0%, rgba(10, 16, 21, 0.4) 100%);
}

.hero__inner {
  position: relative;
  z-index: 1;
  padding-top: clamp(78px, 9vw, 124px);
  padding-bottom: clamp(92px, 9vw, 138px);
  color: #ffffff;
}

.hero__eyebrow,
.feature-panel__eyebrow,
.news-center__eyebrow {
  margin: 0 0 18px;
  font-family: var(--font-montserrat);
  font-size: 14px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
}

.hero__title,
.news-center__title,
.feature-panel__title,
.headline-panel__header h2 {
  margin: 0;
  font-family: var(--font-montserrat);
}

.hero__title {
  max-width: 760px;
  font-size: clamp(42px, 5.4vw, 74px);
  line-height: 0.98;
  font-style: italic;
  font-weight: 900;
}

.hero__desc {
  max-width: 760px;
  margin: 24px 0 0;
  font-family: var(--font-montserrat);
  font-size: clamp(18px, 1.65vw, 25px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.92);
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  max-width: 920px;
  margin-top: 32px;
}

.hero__stat {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 118px;
  padding: 18px 20px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
}

.hero__stat strong,
.hero__stat span {
  font-family: var(--font-montserrat);
}

.hero__stat strong {
  font-size: 30px;
  line-height: 1.08;
}

.hero__stat span {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.82);
}

.top-layout {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  gap: 24px;
  margin-top: clamp(-74px, -5vw, -40px);
}

.feature-panel,
.headline-panel,
.side-card,
.news-item {
  border: 1px solid rgba(16, 16, 16, 0.08);
  border-radius: 24px;
}

.feature-panel {
  padding: 34px;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 24px 52px rgba(23, 33, 44, 0.12);
}

.feature-panel__eyebrow,
.news-center__eyebrow {
  color: #0f4c81;
}

.feature-panel__date,
.headline-item__date,
.news-item__category,
.schedule-item__date,
.schedule-item__location,
.side-card__text {
  margin: 0;
  font-family: var(--font-montserrat);
}

.feature-panel__date {
  font-size: 15px;
  line-height: 1.4;
  color: #6b7280;
}

.feature-panel__title {
  margin-top: 18px;
  font-size: clamp(30px, 3vw, 46px);
  line-height: 1.15;
  font-style: italic;
  font-weight: 900;
  color: #111111;
}

.feature-panel__summary {
  margin: 20px 0 0;
  font-family: var(--font-montserrat);
  font-size: 17px;
  line-height: 1.85;
  color: #4b5563;
}

.feature-panel__topics {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.feature-panel__topics span {
  padding: 10px 16px;
  border-radius: 999px;
  background: #eff5fa;
  font-family: var(--font-montserrat);
  font-size: 14px;
  color: #0f4c81;
}

.feature-panel__button,
.side-card--cta button,
.news-tabs__button {
  font-family: var(--font-montserrat);
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}

.feature-panel__button,
.side-card--cta button {
  min-height: 54px;
  padding: 0 26px;
  border: 1px solid #111111;
  border-radius: 4px;
  background: #111111;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

.feature-panel__button {
  margin-top: 28px;
}

.feature-panel__button:hover,
.side-card--cta button:hover,
.news-tabs__button:hover {
  transform: translateY(-2px);
}

.headline-panel {
  padding: 30px;
  background: linear-gradient(155deg, #101820 0%, #1d2e3d 100%);
  color: #ffffff;
}

.headline-panel__header h2 {
  font-size: 34px;
  line-height: 1.1;
  font-style: italic;
  font-weight: 900;
}

.headline-panel__header p,
.headline-item__summary,
.news-item__summary,
.side-card__text,
.schedule-item__note {
  margin: 0;
  font-family: var(--font-montserrat);
}

.headline-panel__header p {
  margin-top: 12px;
  font-size: 15px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.72);
}

.headline-list {
  display: grid;
  gap: 18px;
  margin-top: 26px;
}

.headline-item {
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.headline-item:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.headline-item__date {
  font-size: 13px;
  line-height: 1.2;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.66);
}

.headline-item__title {
  margin: 10px 0 0;
  font-family: var(--font-montserrat);
  font-size: 22px;
  line-height: 1.4;
  font-weight: 700;
}

.headline-item__summary {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.78);
}

.news-center {
  margin-top: clamp(66px, 6vw, 96px);
}

.news-center__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
}

.news-center__title {
  font-size: clamp(34px, 3.8vw, 54px);
  line-height: 1.08;
  font-style: italic;
  font-weight: 900;
  color: #111111;
}

.news-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 12px;
}

.news-tabs__button {
  min-height: 44px;
  padding: 0 18px;
  border-radius: 999px;
  border: 1px solid rgba(16, 16, 16, 0.12);
  background: #ffffff;
  font-size: 14px;
  font-weight: 600;
  color: #4b5563;
  cursor: pointer;
}

.news-tabs__button.is-active {
  border-color: #0f4c81;
  background: #0f4c81;
  color: #ffffff;
}

.news-center__layout {
  display: grid;
  grid-template-columns: minmax(0, 1.16fr) minmax(320px, 0.84fr);
  gap: 24px;
  margin-top: 32px;
}

.news-list {
  display: grid;
  gap: 20px;
}

.news-item {
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  gap: 24px;
  padding: 28px;
  background: #ffffff;
}

.news-item__datebox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 132px;
  padding: 18px;
  border-radius: 18px;
  background: #101820;
  color: #ffffff;
  text-align: center;
}

.news-item__datebox strong,
.news-item__datebox span,
.news-item__datebox small {
  font-family: var(--font-montserrat);
}

.news-item__datebox strong {
  font-size: 40px;
  line-height: 1;
  font-weight: 800;
}

.news-item__datebox span {
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.16em;
}

.news-item__datebox small {
  margin-top: 6px;
  font-size: 13px;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.72);
}

.news-item__category {
  font-size: 13px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: #0f4c81;
  text-transform: uppercase;
}

.news-item__title,
.side-card__title,
.schedule-item__title {
  margin: 0;
  font-family: var(--font-montserrat);
}

.news-item__title {
  margin-top: 12px;
  font-size: 28px;
  line-height: 1.35;
  font-weight: 700;
  color: #111111;
}

.news-item__summary {
  margin-top: 12px;
  font-size: 15px;
  line-height: 1.85;
  color: #5b6370;
}

.news-item__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 18px;
}

.news-item__meta span {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 14px;
  border-radius: 999px;
  background: #f3f5f7;
  font-family: var(--font-montserrat);
  font-size: 13px;
  color: #4b5563;
}

.news-side {
  display: grid;
  gap: 20px;
  align-self: start;
}

.side-card {
  padding: 28px;
  background: #ffffff;
}

.side-card__title {
  font-size: 26px;
  line-height: 1.2;
  font-weight: 800;
  color: #111111;
}

.schedule-list,
.archive-list {
  display: grid;
  gap: 16px;
  margin-top: 22px;
}

.schedule-item {
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(16, 16, 16, 0.08);
}

.schedule-item:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.schedule-item__date {
  font-size: 13px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: #0f4c81;
}

.schedule-item__title {
  margin-top: 10px;
  font-size: 20px;
  line-height: 1.35;
  font-weight: 700;
}

.schedule-item__location {
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.5;
  color: #4b5563;
}

.schedule-item__note {
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.7;
  color: #6b7280;
}

.archive-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 58px;
  padding: 0 18px;
  border-radius: 16px;
  background: #f5f7fa;
  font-family: var(--font-montserrat);
  font-size: 15px;
  font-weight: 600;
  color: #111111;
}

.side-card--cta {
  background: linear-gradient(160deg, #101820 0%, #1b2d3c 100%);
  color: #ffffff;
}

.side-card--cta .side-card__title,
.side-card--cta .side-card__text {
  color: #ffffff;
}

.side-card__text {
  margin-top: 16px;
  font-size: 15px;
  line-height: 1.85;
  color: #4b5563;
}

.side-card--cta button {
  width: 100%;
  margin-top: 24px;
  border-color: #ffffff;
  background: #ffffff;
  color: #101820;
}

@media (max-width: 1180px) {
  .top-layout,
  .news-center__layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  .hero__inner {
    padding-top: 62px;
    padding-bottom: 72px;
  }

  .hero__desc {
    font-size: 16px;
    line-height: 1.7;
  }

  .hero__stats {
    grid-template-columns: 1fr;
  }

  .top-layout {
    margin-top: 24px;
  }

  .feature-panel,
  .headline-panel,
  .news-item,
  .side-card {
    padding: 24px 22px;
  }

  .news-center__header {
    display: block;
  }

  .news-tabs {
    justify-content: flex-start;
    margin-top: 22px;
  }

  .news-item {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .news-item__datebox {
    min-height: 108px;
  }

  .feature-panel__title,
  .news-item__title {
    font-size: 24px;
  }

  .headline-panel__header h2,
  .news-center__title {
    font-size: 34px;
  }
}
</style>
