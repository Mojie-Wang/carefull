<script setup>
import { reactive, ref } from "vue";
import contactBanner from "@/assets/aboutus/banner.png";
import contactMap from "@/assets/contact/contact-map.svg";

const contactMethods = [
  {
    key: "phone",
    label: "Phone",
    value: "+86 13262528457",
    note: "Call us for product inquiries, partnership discussions, and delivery planning.",
    href: "tel:+8613262528457",
  },
  {
    key: "email",
    label: "Email",
    value: "shanghaicareful@163.com",
    note: "Send us your inquiry, feedback, or project requirements by email.",
    href: "mailto:shanghaicareful@163.com",
  },
  {
    key: "address",
    label: "Address",
    value:
      "Building 7, No. 7208 Daye Highway, Jinhui Town, Fengxian District, Shanghai",
    note: "Please make an appointment in advance if you plan to visit us on site.",
  },
];

const socialChannels = [
  {
    key: "facebook",
    name: "Facebook",
    description:
      "Follow our Facebook channel for company updates and product highlights.",
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    description:
      "Connect with us on LinkedIn for business communication and cooperation.",
  },
];

const feedbackForm = reactive({
  name: "",
  company: "",
  phone: "",
  email: "",
  message: "",
});

const feedbackStatus = ref("");

const formatField = (value, fallback = "Not provided") => {
  return value.trim() || fallback;
};

const handleSubmit = () => {
  const subject = encodeURIComponent(
    `Contact Suggestion - ${formatField(feedbackForm.name)}`
  );
  const body = encodeURIComponent(
    [
      "Client suggestion and inquiry form",
      "",
      `Name: ${formatField(feedbackForm.name)}`,
      `Company: ${formatField(feedbackForm.company)}`,
      `Phone: ${formatField(feedbackForm.phone)}`,
      `Email: ${formatField(feedbackForm.email)}`,
      "",
      "Suggestions / Requirements:",
      formatField(feedbackForm.message),
    ].join("\n")
  );

  feedbackStatus.value =
    "Your message has been prepared in the local mail client. Please review and send it there.";
  window.location.href = `mailto:shanghaicareful@163.com?subject=${subject}&body=${body}`;
};
</script>

<template>
  <div class="pages contact-page">
    <section class="contact-hero">
      <img class="contact-hero__bg" :src="contactBanner" alt="Contact banner" />
      <div class="contact-hero__overlay" />
      <div class="contact-hero__inner page-container">
        <p class="contact-hero__eyebrow">CONTACT CAREFUL</p>
        <p class="contact-hero__desc">
          Reach out to us by phone, email, or social channels. Whether you are
          looking for product information, business cooperation, or want to
          share suggestions, our team will review your message carefully and
          reply as soon as possible.
        </p>

        <div class="contact-hero__tags">
          <span>Phone</span>
          <span>Email</span>
          <span>Facebook</span>
          <span>LinkedIn</span>
        </div>
      </div>
    </section>

    <section class="contact-page__main page-container">
      <div class="contact-page__grid">
        <div class="contact-page__info">
          <article class="contact-panel contact-panel--details">
            <p class="contact-panel__eyebrow">DIRECT CONTACT</p>
            <div class="contact-panel__header">
              <h2 class="contact-panel__title">Get in touch directly</h2>
              <p class="contact-panel__desc">
                This section focuses on the most important contact details:
                phone, email, office address, social icons, and a static map so
                visitors can find the right communication channel quickly.
              </p>
            </div>

            <div class="contact-methods">
              <component
                :is="item.href ? 'a' : 'div'"
                v-for="item in contactMethods"
                :key="item.key"
                :href="item.href"
                class="contact-method"
                :class="{ 'is-link': item.href }"
              >
                <span class="contact-method__icon" aria-hidden="true">
                  <svg
                    v-if="item.key === 'phone'"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7.2 4.5H4.8C4.14 4.5 3.6 5.04 3.6 5.7c0 7.01 5.69 12.7 12.7 12.7.66 0 1.2-.54 1.2-1.2v-2.4c0-.57-.4-1.05-.95-1.17l-2.58-.56a1.2 1.2 0 0 0-1.14.35l-.94.94a10.69 10.69 0 0 1-4.55-4.55l.94-.94c.3-.3.43-.74.35-1.14L8.37 5.45A1.2 1.2 0 0 0 7.2 4.5Z"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    v-else-if="item.key === 'email'"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5v-9Z"
                      stroke="currentColor"
                      stroke-width="1.8"
                    />
                    <path
                      d="m5 7 7 5 7-5"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg v-else viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 20s6-5.62 6-10a6 6 0 1 0-12 0c0 4.38 6 10 6 10Z"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="2.2"
                      stroke="currentColor"
                      stroke-width="1.8"
                    />
                  </svg>
                </span>

                <div class="contact-method__body">
                  <p class="contact-method__label">{{ item.label }}</p>
                  <h3 class="contact-method__value">{{ item.value }}</h3>
                  <p class="contact-method__note">{{ item.note }}</p>
                </div>
              </component>
            </div>
          </article>

          <div class="contact-secondary-grid">
            <article class="contact-panel contact-panel--social">
              <p class="contact-panel__eyebrow">SOCIAL CHANNELS</p>
              <h2 class="contact-panel__title">Social channels</h2>
              <div class="social-list">
                <article
                  v-for="channel in socialChannels"
                  :key="channel.key"
                  class="social-item"
                >
                  <span class="social-item__icon" aria-hidden="true">
                    <svg
                      v-if="channel.key === 'facebook'"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M13.34 21v-7.72h2.6l.39-3h-2.99V8.37c0-.88.24-1.47 1.5-1.47H16.4V4.2c-.27-.04-1.18-.12-2.24-.12-2.22 0-3.74 1.36-3.74 3.86v2.34H7.9v3h2.52V21h2.92Z"
                      />
                    </svg>
                    <svg v-else viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M6.94 8.56A1.81 1.81 0 1 1 6.93 4.94a1.81 1.81 0 0 1 .01 3.62ZM5.4 10.12h3.07V20H5.4v-9.88Zm4.82 0h2.94v1.35h.04c.41-.78 1.42-1.61 2.92-1.61 3.12 0 3.7 2.05 3.7 4.72V20h-3.06v-4.81c0-1.15-.02-2.62-1.6-2.62-1.61 0-1.86 1.25-1.86 2.54V20h-3.08v-9.88Z"
                      />
                    </svg>
                  </span>

                  <div class="social-item__body">
                    <h3 class="social-item__title">{{ channel.name }}</h3>
                    <p class="social-item__text">{{ channel.description }}</p>
                  </div>
                </article>
              </div>
            </article>

            <article class="contact-panel contact-panel--map">
              <p class="contact-panel__eyebrow">STATIC MAP</p>
              <h2 class="contact-panel__title">Location overview</h2>
              <div class="map-card">
                <img
                  class="map-card__image"
                  :src="contactMap"
                  alt="Static map for the office location"
                />
              </div>
              <p class="contact-panel__desc">
                Building 7, No. 7208 Daye Highway, Jinhui Town, Fengxian
                District, Shanghai
              </p>
            </article>
          </div>
        </div>

        <aside class="contact-panel contact-panel--form">
          <p class="contact-panel__eyebrow">CLIENT FEEDBACK</p>
          <h2 class="contact-panel__title">Share your suggestions and needs</h2>
          <p class="contact-panel__desc">
            This form prepares your message as an email draft in the local mail
            client and sends it to shanghaicareful@163.com. It works well for
            client feedback, custom requests, and business suggestions.
          </p>

          <form class="feedback-form" @submit.prevent="handleSubmit">
            <label class="feedback-field">
              <span>Name</span>
              <input
                v-model="feedbackForm.name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </label>

            <label class="feedback-field">
              <span>Company</span>
              <input
                v-model="feedbackForm.company"
                type="text"
                name="company"
                placeholder="Enter your company name"
              />
            </label>

            <div class="feedback-form__row">
              <label class="feedback-field">
                <span>Phone Number</span>
                <input
                  v-model="feedbackForm.phone"
                  type="tel"
                  name="phone"
                  placeholder="+86 13262528457"
                />
              </label>

              <label class="feedback-field">
                <span>Email Address</span>
                <input
                  v-model="feedbackForm.email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </label>
            </div>

            <label class="feedback-field">
              <span>Suggestions / Requirements</span>
              <textarea
                v-model="feedbackForm.message"
                name="message"
                rows="6"
                placeholder="Tell us your suggestions, requirements, or anything you would like us to reply to."
                required
              />
            </label>

            <button class="feedback-form__submit" type="submit">
              Submit Message
            </button>
          </form>

          <p class="feedback-form__tip">
            Submitting the form will open your local mail client with the
            message already prepared.
          </p>
          <p v-if="feedbackStatus" class="feedback-form__status">
            {{ feedbackStatus }}
          </p>
        </aside>
      </div>
    </section>
  </div>
</template>

<style scoped lang="less">
.contact-page {
  --contact-accent: #0f75e6;
  --contact-accent-deep: #083f87;
  --contact-ink: #122235;
  --contact-soft: #64748b;
  --contact-card: rgba(255, 255, 255, 0.92);
  --contact-border: rgba(18, 34, 53, 0.1);
  --contact-shadow: 0 24px 56px rgba(15, 30, 52, 0.12);
  background: radial-gradient(
      circle at top left,
      rgba(15, 117, 230, 0.12),
      transparent 42%
    ),
    linear-gradient(180deg, #f6f9fc 0%, #edf3f8 100%);
  padding-bottom: clamp(72px, 9vw, 108px);
}

.contact-hero {
  position: relative;
  min-height: clamp(360px, 42vw, 520px);
  overflow: hidden;
  color: #fff;
  background: #0d1b2c;
}

.contact-hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.contact-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
      135deg,
      rgba(6, 20, 39, 0.8) 0%,
      rgba(6, 20, 39, 0.48) 48%,
      rgba(11, 68, 140, 0.42) 100%
    ),
    linear-gradient(180deg, rgba(5, 11, 21, 0.15), rgba(5, 11, 21, 0.68));
}

.contact-hero__inner {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.contact-hero__eyebrow {
  margin: 0 0 14px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  font-family: var(--font-montserrat);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.contact-hero__desc {
  width: min(680px, 100%);
  margin: 20px 0 0;
  font-family: var(--font-alibaba-puhuiti);
  font-size: clamp(18px, 2vw, 24px);
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.88);
}

.contact-hero__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;

  span {
    padding: 10px 14px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.08);
    font-family: var(--font-montserrat);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.04em;
  }
}

.contact-page__main {
  margin-top: clamp(-56px, -4vw, -32px);
  position: relative;
  z-index: 2;
}

.contact-page__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(360px, 0.9fr);
  gap: clamp(24px, 2.6vw, 36px);
  align-items: start;
}

.contact-page__info {
  display: grid;
  gap: clamp(24px, 2.6vw, 32px);
}

.contact-secondary-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(24px, 2.4vw, 32px);
}

.contact-panel {
  border: 1px solid var(--contact-border);
  border-radius: 30px;
  background: var(--contact-card);
  box-shadow: var(--contact-shadow);
  backdrop-filter: blur(12px);
}

.contact-panel--details,
.contact-panel--form,
.contact-panel--social,
.contact-panel--map {
  padding: clamp(26px, 3vw, 36px);
}

.contact-panel__eyebrow {
  margin: 0 0 18px;
  color: var(--contact-accent);
  font-family: var(--font-montserrat);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.contact-panel__header {
  display: grid;
  gap: 12px;
  margin-bottom: 28px;
}

.contact-panel__title {
  margin: 0;
  color: var(--contact-ink);
  font-family: var(--font-montserrat);
  font-size: clamp(28px, 3.2vw, 38px);
  line-height: 1.08;
  font-weight: 700;
}

.contact-panel__desc {
  margin: 0;
  color: var(--contact-soft);
  font-family: var(--font-alibaba-puhuiti);
  font-size: 16px;
  line-height: 1.8;
}

.contact-methods {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.contact-method {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  padding: 20px;
  border: 1px solid rgba(15, 117, 230, 0.12);
  border-radius: 24px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.98),
    rgba(245, 249, 255, 0.96)
  );
  transition: transform 0.22s ease, border-color 0.22s ease,
    box-shadow 0.22s ease;
}

.contact-method.is-link:hover {
  transform: translateY(-2px);
  border-color: rgba(15, 117, 230, 0.3);
  box-shadow: 0 18px 30px rgba(15, 117, 230, 0.12);
}

.contact-method__icon,
.social-item__icon {
  width: 52px;
  height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  color: var(--contact-accent);
  background: rgba(15, 117, 230, 0.1);
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
}

.contact-method__body,
.social-item__body {
  min-width: 0;
}

.contact-method__label {
  margin: 0 0 8px;
  color: var(--contact-accent-deep);
  font-family: var(--font-montserrat);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.contact-method__value {
  margin: 0;
  color: var(--contact-ink);
  font-family: var(--font-alibaba-puhuiti);
  font-size: clamp(18px, 2vw, 24px);
  line-height: 1.45;
  font-weight: 600;
  word-break: break-word;
}

.contact-method__note {
  margin: 10px 0 0;
  color: var(--contact-soft);
  font-family: var(--font-alibaba-puhuiti);
  font-size: 14px;
  line-height: 1.75;
}

.social-list {
  display: grid;
  gap: 16px;
}

.social-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: start;
  padding: 18px 20px;
  border-radius: 22px;
  background: rgba(15, 117, 230, 0.05);
  border: 1px solid rgba(15, 117, 230, 0.1);
}

.social-item__title {
  margin: 0;
  color: var(--contact-ink);
  font-family: var(--font-montserrat);
  font-size: 20px;
  font-weight: 700;
}

.social-item__text {
  margin: 8px 0 0;
  color: var(--contact-soft);
  font-family: var(--font-alibaba-puhuiti);
  font-size: 14px;
  line-height: 1.75;
}

.map-card {
  margin: 18px 0 16px;
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid rgba(15, 117, 230, 0.1);
  background: #d8e8f5;
}

.map-card__image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.feedback-form {
  display: grid;
  gap: 18px;
  margin-top: 24px;
}

.feedback-form__row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.feedback-field {
  display: grid;
  gap: 10px;

  span {
    color: var(--contact-ink);
    font-family: var(--font-alibaba-puhuiti);
    font-size: 14px;
    font-weight: 600;
  }

  input,
  textarea {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid rgba(18, 34, 53, 0.12);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.95);
    color: var(--contact-ink);
    font-family: var(--font-alibaba-puhuiti);
    font-size: 15px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease,
      transform 0.2s ease;

    &:focus {
      outline: none;
      border-color: rgba(15, 117, 230, 0.5);
      box-shadow: 0 0 0 4px rgba(15, 117, 230, 0.12);
      transform: translateY(-1px);
    }
  }

  textarea {
    resize: vertical;
    min-height: 150px;
  }
}

.feedback-form__submit {
  min-height: 54px;
  padding: 0 20px;
  border: 0;
  border-radius: 18px;
  color: #fff;
  background: linear-gradient(
    135deg,
    var(--contact-accent),
    var(--contact-accent-deep)
  );
  font-family: var(--font-montserrat);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
  box-shadow: 0 18px 30px rgba(15, 117, 230, 0.2);

  &:hover {
    transform: translateY(-1px);
  }
}

.feedback-form__tip,
.feedback-form__status {
  margin: 16px 0 0;
  font-family: var(--font-alibaba-puhuiti);
  font-size: 14px;
  line-height: 1.75;
}

.feedback-form__tip {
  color: var(--contact-soft);
}

.feedback-form__status {
  color: var(--contact-accent-deep);
  font-weight: 600;
}

@media (max-width: 1180px) {
  .contact-page__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 980px) {
  .contact-page {
    padding-bottom: 72px;
  }

  .contact-hero__inner {
    justify-content: flex-end;
    padding-bottom: 44px;
  }

  .contact-secondary-grid,
  .feedback-form__row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .contact-hero {
    min-height: 420px;
  }

  .contact-hero__eyebrow {
    font-size: 12px;
  }

  .contact-hero__desc {
    font-size: 16px;
    line-height: 1.7;
  }

  .contact-hero__tags {
    gap: 10px;

    span {
      font-size: 12px;
      padding: 9px 12px;
    }
  }

  .contact-panel--details,
  .contact-panel--form,
  .contact-panel--social,
  .contact-panel--map {
    padding: 22px 20px;
    border-radius: 24px;
  }

  .contact-panel__title {
    font-size: 26px;
  }

  .contact-method {
    grid-template-columns: 1fr;
  }

  .contact-method__icon,
  .social-item__icon {
    width: 48px;
    height: 48px;
  }
}
</style>
