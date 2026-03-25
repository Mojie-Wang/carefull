<script setup>
import { reactive, ref } from "vue";

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

const socialLinks = [
  {
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61579197240636",
  },
  {
    key: "x",
    label: "X",
    href: "https://x.com/",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
];

const mapAddress = "上海市奉贤区金汇镇大叶公路7208号7号楼";
const mapEmbedUrl =
  "https://www.amap.com/place/B0JAC7QR0J?id=B0JAC7QR0J&source=main&name=%E4%B8%8A%E6%B5%B7%E9%93%A0%E7%A6%8F%E9%98%B2%E6%8A%A4%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8";

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

          <article class="contact-panel contact-panel--social">
            <div class="contact-icons">
              <a
                v-for="item in socialLinks"
                :key="item.key"
                :href="item.href"
                class="contact-icon-card"
                :class="`contact-icon-card--${item.key}`"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`Open ${item.label}`"
                :title="item.label"
              >
                <span class="contact-icon-card__icon" aria-hidden="true">
                  <svg
                    v-if="item.key === 'facebook'"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13.4 21V12.8h2.76l.42-3.18H13.4V7.6c0-.92.27-1.55 1.62-1.55H16.7V3.2c-.3-.04-1.32-.12-2.5-.12-2.47 0-4.17 1.5-4.17 4.27v2.27H7.2v3.18h2.83V21h3.37Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    v-else-if="item.key === 'x'"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 4h4.34l4.03 5.76L17.24 4H20l-6.4 7.34L20 20h-4.34l-4.25-6.06L6.14 20H4l6.58-7.54L4 4Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg v-else viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.86 8.43a1.93 1.93 0 1 1 0-3.86 1.93 1.93 0 0 1 0 3.86ZM5.2 9.9h3.33V19H5.2V9.9Zm5.43 0h3.2v1.25h.05c.44-.8 1.52-1.65 3.13-1.65 3.35 0 3.97 2.2 3.97 5.06V19h-3.33v-3.94c0-.94-.02-2.15-1.31-2.15-1.32 0-1.52 1.03-1.52 2.08V19h-3.33V9.9Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </article>
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
    <section class="page-container">
      <div class="mapWrap">
        <iframe
          class="mapWrap__frame"
          :src="mapEmbedUrl"
          :title="`Amap page for ${mapAddress}`"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
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

  padding-bottom: clamp(72px, 9vw, 108px);
  margin-top: clamp(56px, 4vw, 80px);
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
  align-items: stretch;
}

.contact-page__info {
  display: grid;
  gap: clamp(24px, 2.6vw, 32px);
  height: 100%;
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

.contact-panel--form {
  height: 100%;
  display: flex;
  flex-direction: column;
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

.contact-panel--social {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
}

.contact-icons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
}

.contact-icon-card {
  width: 78px;
  height: 78px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  text-decoration: none;
  transition: transform 0.22s ease, box-shadow 0.22s ease,
    opacity 0.22s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 28px rgba(15, 30, 52, 0.16);
    opacity: 0.94;
  }
}

.contact-icon-card--facebook {
  background: #1877f2;
}

.contact-icon-card--x {
  background: #111111;
}

.contact-icon-card--linkedin {
  background: #0a66c2;
}

.contact-icon-card__icon {
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: currentColor;

  svg {
    width: 100%;
    height: 100%;
  }
}

.mapWrap {
  margin-top: clamp(28px, 4vw, 40px);
  overflow: hidden;
  height: 400px;
  border: 1px solid var(--contact-border);
  border-radius: 30px;
  background: var(--contact-card);
  box-shadow: var(--contact-shadow);
}

.mapWrap__frame {
  width: 100%;
  height: 100%;
  border: 0;
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

@media (min-width: 1181px) {
  .contact-page__grid {
    gap: 24px;
  }

  .contact-page__info {
    gap: 18px;
  }

  .contact-panel--details,
  .contact-panel--form,
  .contact-panel--social,
  .contact-panel--map {
    padding: 22px 24px;
  }

  .contact-panel__header {
    gap: 8px;
    margin-bottom: 18px;
  }

  .contact-panel__title {
    font-size: clamp(24px, 2.2vw, 32px);
  }

  .contact-panel__desc {
    font-size: 14px;
    line-height: 1.65;
  }

  .contact-methods {
    gap: 12px;
  }

  .contact-method {
    gap: 14px;
    padding: 16px;
    border-radius: 20px;
  }

  .contact-method__icon {
    width: 46px;
    height: 46px;
    border-radius: 14px;

    svg {
      width: 22px;
      height: 22px;
    }
  }

  .contact-method__label {
    margin-bottom: 6px;
  }

  .contact-method__value {
    font-size: clamp(16px, 1.35vw, 20px);
    line-height: 1.35;
  }

  .contact-method__note {
    margin-top: 6px;
    font-size: 13px;
    line-height: 1.6;
  }

  .contact-panel--social {
    min-height: 112px;
  }

  .contact-icons {
    gap: 18px;
  }

  .contact-icon-card {
    width: 66px;
    height: 66px;
  }

  .contact-icon-card__icon {
    width: 32px;
    height: 32px;
  }

  .feedback-form {
    gap: 14px;
    margin-top: 18px;
    flex: 1;
    align-content: start;
  }

  .feedback-form__row {
    gap: 14px;
  }

  .feedback-field {
    gap: 8px;

    input,
    textarea {
      padding: 12px 14px;
      border-radius: 16px;
      font-size: 14px;
    }

    textarea {
      min-height: 118px;
    }
  }

  .feedback-form__submit {
    min-height: 48px;
    border-radius: 16px;
    font-size: 15px;
  }

  .feedback-form__tip,
  .feedback-form__status {
    margin-top: 12px;
    font-size: 13px;
    line-height: 1.6;
  }
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

  .contact-icons {
    gap: 16px;
  }

  .contact-icon-card {
    width: 64px;
    height: 64px;
  }

  .contact-icon-card__icon {
    width: 28px;
    height: 28px;
  }

  .mapWrap {
    border-radius: 24px;
  }
}
</style>
