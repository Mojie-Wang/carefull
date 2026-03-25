<template>
  <div class="pages contact-page">
    <section class="hero">
      <img class="hero__bg" :src="contactBanner" alt="Contact Us banner" />
      <div class="hero__overlay"></div>
      <div class="hero__inner page-container">
        <p class="hero__eyebrow">GLOBAL CONTACT</p>
        <h1 class="hero__title">Contact Us</h1>
        <p class="hero__desc">
          From material selection and NIJ level matching to OEM / ODM
          cooperation and export delivery planning, our team is ready to support
          your next protection project.
        </p>
        <div class="hero__badges">
          <span v-for="badge in heroBadges" :key="badge" class="hero__badge">
            {{ badge }}
          </span>
        </div>
        <div class="hero__actions">
          <a
            class="hero__button hero__button--solid"
            href="mailto:patrick.zhang@carefultech-sh.com"
          >
            Email Us
          </a>
          <button
            class="hero__button hero__button--ghost"
            type="button"
            @click="goToProducts"
          >
            Browse Products
          </button>
        </div>
      </div>
    </section>

    <section class="contact-grid page-container">
      <component
        :is="card.linkProps ? 'a' : 'div'"
        v-for="card in contactCards"
        :key="card.index"
        v-bind="card.linkProps"
        class="contact-card"
        :class="{ 'is-link': card.linkProps }"
      >
        <p class="contact-card__index">{{ card.index }}</p>
        <p class="contact-card__label">{{ card.label }}</p>
        <h2 class="contact-card__value">{{ card.value }}</h2>
        <p class="contact-card__note">{{ card.note }}</p>
      </component>
    </section>

    <section class="main-section page-container">
      <div class="section-heading-block">
        <p class="section-heading-block__eyebrow">COMMUNICATION CHANNELS</p>
        <h2 class="section-heading-block__title">
          Choose the fastest way to start a conversation.
        </h2>
      </div>

      <div class="main-section__content">
        <div class="support-grid">
          <article
            v-for="support in supportAreas"
            :key="support.title"
            class="support-card"
          >
            <p class="support-card__title">{{ support.title }}</p>
            <p class="support-card__description">
              {{ support.description }}
            </p>
            <p class="support-card__meta">{{ support.meta }}</p>
          </article>
        </div>

        <aside class="guide-panel">
          <p class="guide-panel__eyebrow">QUICK INQUIRY GUIDE</p>
          <h3 class="guide-panel__title">Share a few basics before you reach out.</h3>
          <p class="guide-panel__description">
            The more clearly we understand your scenario, the faster we can
            recommend the right PEUD fabric, armor plate or finished protection
            solution.
          </p>
          <ul class="guide-panel__list">
            <li v-for="item in preparationItems" :key="item">
              {{ item }}
            </li>
          </ul>

          <div class="guide-panel__commitments">
            <div
              v-for="commitment in responseCommitments"
              :key="commitment.title"
              class="commitment-card"
            >
              <p class="commitment-card__title">{{ commitment.title }}</p>
              <p class="commitment-card__text">{{ commitment.text }}</p>
            </div>
          </div>

          <button
            class="guide-panel__button"
            type="button"
            @click="goToEvent"
          >
            See Recent Events
          </button>
        </aside>
      </div>
    </section>

    <section class="visit-section page-container">
      <div class="visit-card">
        <p class="visit-card__eyebrow">VISIT OUR FACILITY</p>
        <h2 class="visit-card__title">Shanghai Careful Technology Co., Ltd.</h2>
        <p class="visit-card__address">
          Building 7, No.7208 Daye Highway, Jinhui Town, Fengxian District,
          Shanghai
        </p>
        <div class="visit-card__links">
          <a href="tel:18916130888">+86 18916130888</a>
          <a
            href="https://www.shanghaikaifu.com"
            target="_blank"
            rel="noreferrer"
          >
            www.shanghaikaifu.com
          </a>
        </div>
        <div class="metrics-grid">
          <div v-for="metric in factoryMetrics" :key="metric.label" class="metric-card">
            <strong>{{ metric.value }}</strong>
            <span>{{ metric.label }}</span>
          </div>
        </div>
      </div>

      <div class="faq-grid">
        <article v-for="faq in faqItems" :key="faq.question" class="faq-card">
          <h3 class="faq-card__question">{{ faq.question }}</h3>
          <p class="faq-card__answer">{{ faq.answer }}</p>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import contactBanner from "@/assets/aboutus/banner.png";

const router = useRouter();

const heroBadges = [
  "Quotation & samples",
  "OEM / ODM collaboration",
  "Factory visit in Shanghai",
];

const contactCards = [
  {
    index: "01",
    label: "Sales Hotline",
    value: "+86 18916130888",
    note: "For quotations, sampling plans and delivery lead-time checks.",
    linkProps: {
      href: "tel:18916130888",
    },
  },
  {
    index: "02",
    label: "Email Inquiry",
    value: "patrick.zhang@carefultech-sh.com",
    note: "Share your project scope, target level and quantity for a faster reply.",
    linkProps: {
      href: "mailto:patrick.zhang@carefultech-sh.com",
    },
  },
  {
    index: "03",
    label: "Factory Address",
    value: "Building 7, No.7208 Daye Highway, Jinhui Town, Fengxian District, Shanghai",
    note: "Customer visits, technical meetings and sample reviews can be arranged in advance.",
  },
  {
    index: "04",
    label: "Official Website",
    value: "www.shanghaikaifu.com",
    note: "Company profile, product overview and ongoing brand information.",
    linkProps: {
      href: "https://www.shanghaikaifu.com",
      target: "_blank",
      rel: "noreferrer",
    },
  },
];

const supportAreas = [
  {
    title: "Sales & Quotation",
    description:
      "Get help matching ballistic vest, plate, shield and helmet solutions to your target protection level, budget and project timing.",
    meta: "Best for new projects, sample requests and price confirmation",
  },
  {
    title: "Technical Consultation",
    description:
      "Discuss material route, structural configuration and performance direction for PEUD fabric, ceramic-backed plates and integrated panels.",
    meta: "Best for level matching, structure review and application selection",
  },
  {
    title: "OEM / ODM Cooperation",
    description:
      "Coordinate size, color, packaging, branding and manufacturing details for long-term cooperation or customized project delivery.",
    meta: "Best for customized structure, branding and volume orders",
  },
  {
    title: "Delivery & Visit Planning",
    description:
      "Confirm delivery region, lead time, production scheduling and factory visit arrangements with one business contact window.",
    meta: "Best for export coordination, logistics and on-site meetings",
  },
];

const preparationItems = [
  "Application scenario and target protection level",
  "Preferred material route such as PEUD fabric, plate or finished product",
  "Expected order volume and delivery destination",
  "Customization needs for structure, size, color or packaging",
];

const responseCommitments = [
  {
    title: "Business Hours",
    text: "Mon-Sat 09:00 - 18:00 (UTC+8)",
  },
  {
    title: "Typical Reply",
    text: "Within 1 business day for standard inquiries",
  },
  {
    title: "Visits & Samples",
    text: "Available by appointment for project discussions",
  },
];

const factoryMetrics = [
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

const faqItems = [
  {
    question: "Can you support OEM / ODM protection projects?",
    answer:
      "Yes. We can discuss material route, structure, size, packaging and delivery coordination based on your target application and procurement plan.",
  },
  {
    question: "What information helps you quote faster?",
    answer:
      "Protection level, application scenario, estimated quantity, delivery location and whether customization is required are the most helpful starting points.",
  },
  {
    question: "Can we arrange a factory visit in Shanghai?",
    answer:
      "Yes. Visits, technical meetings and sample reviews can be scheduled in advance with the business team according to your timeline.",
  },
  {
    question: "Do you support bulk delivery planning?",
    answer:
      "We can coordinate production scheduling, shipment preparation and project communication for repeat orders and large-volume protection programs.",
  },
];

const goToProducts = () => {
  router.push({ name: "product-center" });
};

const goToEvent = () => {
  router.push({ name: "event" });
};
</script>

<style scoped lang="less">
.contact-page {
  padding-bottom: clamp(72px, 7vw, 120px);
  background: linear-gradient(180deg, #ffffff 0%, #f7f8fa 72%, #ffffff 100%);
}

.hero {
  position: relative;
  overflow: hidden;
  min-height: clamp(360px, 38vw, 540px);
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
      rgba(14, 19, 24, 0.82) 0%,
      rgba(14, 19, 24, 0.68) 38%,
      rgba(14, 19, 24, 0.28) 100%
    ),
    linear-gradient(180deg, rgba(9, 14, 19, 0.08) 0%, rgba(9, 14, 19, 0.4) 100%);
}

.hero__inner {
  position: relative;
  z-index: 1;
  padding-top: clamp(78px, 9vw, 128px);
  padding-bottom: clamp(88px, 9vw, 138px);
  color: #ffffff;
}

.hero__eyebrow,
.section-heading-block__eyebrow,
.guide-panel__eyebrow,
.visit-card__eyebrow {
  margin: 0 0 18px;
  font-family: var(--font-montserrat);
  font-size: 14px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
}

.hero__title,
.section-heading-block__title {
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
  font-size: clamp(18px, 1.7vw, 26px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.92);
}

.hero__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.hero__badge {
  padding: 10px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  font-family: var(--font-montserrat);
  font-size: 15px;
  line-height: 1.2;
  border-radius: 999px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 34px;
}

.hero__button,
.guide-panel__button {
  min-height: 56px;
  padding: 0 28px;
  border-radius: 4px;
  border: 1px solid transparent;
  font-family: var(--font-montserrat);
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}

.hero__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.hero__button:hover,
.guide-panel__button:hover {
  transform: translateY(-2px);
}

.hero__button--solid {
  background: #ffffff;
  color: #111111;
}

.hero__button--ghost {
  border-color: rgba(255, 255, 255, 0.4);
  background: transparent;
  color: #ffffff;
}

.contact-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  margin-top: clamp(-76px, -5vw, -44px);
}

.contact-card {
  min-height: 256px;
  padding: 28px 26px;
  border: 1px solid rgba(16, 16, 16, 0.08);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 20px 48px rgba(23, 33, 44, 0.1);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;
}

.contact-card.is-link:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 50px rgba(23, 33, 44, 0.14);
  border-color: rgba(16, 16, 16, 0.16);
}

.contact-card__index,
.contact-card__label,
.contact-card__note,
.support-card__title,
.support-card__description,
.support-card__meta,
.guide-panel__description,
.guide-panel__list,
.commitment-card__title,
.commitment-card__text,
.visit-card__address,
.faq-card__answer {
  margin: 0;
  font-family: var(--font-montserrat);
}

.contact-card__index {
  margin-bottom: 18px;
  font-size: 14px;
  line-height: 1;
  font-weight: 800;
  letter-spacing: 0.16em;
  color: #0f4c81;
}

.contact-card__label {
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #5b6370;
}

.contact-card__value {
  margin: 18px 0 14px;
  font-family: var(--font-montserrat);
  font-size: clamp(22px, 1.7vw, 28px);
  line-height: 1.45;
  font-weight: 700;
  color: #111111;
  word-break: break-word;
}

.contact-card__note {
  font-size: 15px;
  line-height: 1.75;
  color: #6b7280;
}

.main-section,
.visit-section {
  margin-top: clamp(64px, 6vw, 96px);
}

.section-heading-block {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
}

.section-heading-block__eyebrow {
  color: #0f4c81;
}

.section-heading-block__title {
  max-width: 760px;
  font-size: clamp(34px, 3.8vw, 54px);
  line-height: 1.08;
  font-style: italic;
  font-weight: 900;
  color: #101010;
}

.main-section__content {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
  gap: 24px;
  margin-top: 32px;
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.support-card {
  min-height: 240px;
  padding: 28px;
  border-radius: 22px;
  background: #ffffff;
  border: 1px solid rgba(16, 16, 16, 0.08);
}

.support-card__title,
.faq-card__question {
  font-size: 28px;
  line-height: 1.25;
  font-weight: 700;
  color: #111111;
}

.support-card__description {
  margin-top: 18px;
  font-size: 16px;
  line-height: 1.8;
  color: #4b5563;
}

.support-card__meta {
  margin-top: 22px;
  font-size: 14px;
  line-height: 1.6;
  color: #0f4c81;
}

.guide-panel {
  padding: 30px;
  border-radius: 22px;
  background:
    linear-gradient(160deg, #101820 0%, #1b2d3c 100%);
  color: #ffffff;
}

.guide-panel__eyebrow {
  color: rgba(255, 255, 255, 0.72);
}

.guide-panel__title,
.visit-card__title {
  margin: 0;
  font-family: var(--font-montserrat);
}

.guide-panel__title {
  font-size: clamp(28px, 2.4vw, 40px);
  line-height: 1.15;
  font-weight: 800;
}

.guide-panel__description {
  margin-top: 16px;
  font-size: 15px;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.82);
}

.guide-panel__list {
  padding-left: 18px;
  margin-top: 22px;
  font-size: 15px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.92);
}

.guide-panel__commitments {
  display: grid;
  gap: 14px;
  margin-top: 28px;
}

.commitment-card {
  padding: 16px 18px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.commitment-card__title {
  font-size: 13px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
}

.commitment-card__text {
  margin-top: 8px;
  font-size: 15px;
  line-height: 1.6;
  color: #ffffff;
}

.guide-panel__button {
  width: 100%;
  margin-top: 28px;
  background: #ffffff;
  color: #101820;
}

.visit-section {
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
  gap: 24px;
}

.visit-card {
  position: relative;
  overflow: hidden;
  padding: 34px;
  border-radius: 24px;
  color: #ffffff;
  background:
    linear-gradient(135deg, rgba(13, 25, 34, 0.96) 0%, rgba(17, 60, 96, 0.94) 100%);
}

.visit-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 36px 36px;
  opacity: 0.22;
  pointer-events: none;
}

.visit-card > * {
  position: relative;
  z-index: 1;
}

.visit-card__eyebrow {
  color: rgba(255, 255, 255, 0.72);
}

.visit-card__title {
  font-size: clamp(30px, 3vw, 48px);
  line-height: 1.08;
  font-style: italic;
  font-weight: 900;
}

.visit-card__address {
  max-width: 600px;
  margin-top: 18px;
  font-size: 18px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.92);
}

.visit-card__links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
}

.visit-card__links a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 18px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.08);
  font-family: var(--font-montserrat);
  font-size: 15px;
  color: #ffffff;
}

.metrics-grid,
.faq-grid {
  display: grid;
  gap: 18px;
}

.metrics-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 34px;
}

.metric-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 120px;
  padding: 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.metric-card strong,
.metric-card span {
  font-family: var(--font-montserrat);
}

.metric-card strong {
  font-size: 28px;
  line-height: 1.1;
}

.metric-card span {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.78);
}

.faq-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.faq-card {
  padding: 28px;
  border-radius: 22px;
  background: #ffffff;
  border: 1px solid rgba(16, 16, 16, 0.08);
}

.faq-card__answer {
  margin-top: 16px;
  font-size: 15px;
  line-height: 1.85;
  color: #5b6370;
}

@media (max-width: 1180px) {
  .contact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .main-section__content,
  .visit-section {
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

  .hero__button,
  .guide-panel__button {
    width: 100%;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    margin-top: 24px;
  }

  .section-heading-block {
    display: block;
  }

  .section-heading-block__title {
    margin-top: 10px;
    font-size: 34px;
  }

  .support-grid,
  .faq-grid,
  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .support-card,
  .faq-card,
  .guide-panel,
  .visit-card,
  .contact-card {
    padding: 24px 22px;
  }

  .support-card__title,
  .faq-card__question {
    font-size: 24px;
  }

  .visit-card__title {
    font-size: 32px;
  }

  .visit-card__address {
    font-size: 16px;
  }
}
</style>
