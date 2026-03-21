<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "index",
  },
  title: {
    type: String,
    default: "SUBSCRIPTION INFORMATION",
  },
});

const titleWords = computed(() =>
  props.title.trim().split(/\s+/).filter(Boolean)
);
</script>

<template>
  <footer class="page__footer">
    <div class="footerTop">
      <div class="topBar">
        <div class="left">
          <span v-for="word in titleWords" :key="word" class="titleWord">
            {{ word }}
          </span>
        </div>
        <div class="right">
          <h2 class="subscriptionTitle">Subscription Information</h2>
          <div class="descText">
            To get the latest news about Careful Technology, leave your email
            for subscription—we’ll send updates straight to your inbox.
          </div>
          <div class="footerForm">
            <input class="inputEl" type="text" />
            <span class="submitBtn" type="submit">SUBMIT</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footerBottom">
      <div class="left" v-if="type === 'index'">
        <div class="contactInfo">Contact Information</div>
        <div class="phone">
          <div class="phoneTitle">Phone:</div>
          <div class="phoneNum">
            (+86)<a href="tel:18916130888">18916130888</a>
          </div>
        </div>
        <div class="email">
          <div class="emailTitle">Email:</div>
          <div class="emailAddr">
            <a href="mailto:yale.tang@carefultech-sh.com"
              >yale.tang@carefultech-sh.com</a
            >
          </div>
        </div>
      </div>
      <div class="left" v-else>
        <p class="contactItem">
          <span>M:</span>+86 <a href="tel:18916130888">18916130888</a>
        </p>
        <p class="contactItem">
          <span>E:</span>
          <a href="mailto:patrick.zhang@carefultech-sh.com"
            >patrick.zhang@carefultech-sh.com</a
          >
        </p>
        <p class="contactItem">
          <span>A:</span
          ><a
            >Building 7, No.7208 Daye Highway, Jinhui Town, Fengxian District,
            Shanghai
          </a>
        </p>
        <p class="contactItem"><span>W:</span><a>www.shanghaikaifu.com</a></p>
        <p class="contactItem">
          <span>C:</span><a>Shanghai Careful Technology Co.,Ltd</a>
        </p>
      </div>
      <div class="right">
        <div class="navBar">
          <span class="navItem">Product Center</span>
          <span class="navItem">Aplication Cases</span>
          <span class="navItem">About Us</span>
          <span class="navItem">Contact Us</span>
        </div>
        <div class="qrcodes">
          <!-- <img class="qrcode" src="" alt="qrcode" />
          <img class="qrcode" src="" alt="qrcode" /> -->
          <span class="qrcode"></span>
          <span class="qrcode"></span>
        </div>
      </div>
    </div>
  </footer>
  <div class="copyright">
    Copyright 上海铠福防护科技有限公司 版权所有. 沪ICP备2023007396号-1
  </div>
</template>

<style scoped lang="less">
.page__footer {
  --footer-top-padding-top: clamp(30px, 4vw, 54px);
  --footer-top-padding-bottom: clamp(28px, 3.4vw, 47px);
  --footer-bottom-padding-top: clamp(28px, 3vw, 42px);
  --footer-bottom-padding-bottom: clamp(28px, 3vw, 46px);
  --footer-title-size: clamp(40px, 4.2vw, 64px);
  --footer-title-line: clamp(42px, 4.4vw, 66px);
  --footer-subscription-size: clamp(26px, 2.7vw, 40px);
  --footer-subscription-line: clamp(30px, 3vw, 46px);
  --footer-desc-size: clamp(16px, 1.15vw, 18px);
  --footer-desc-line: clamp(22px, 1.7vw, 26px);
  --footer-form-height: clamp(56px, 5vw, 82px);
  --footer-input-size: clamp(16px, 1.2vw, 18px);
  --footer-input-line: clamp(20px, 1.5vw, 24px);
  --footer-submit-width: clamp(140px, 12vw, 186px);
  --footer-submit-size: clamp(18px, 1.8vw, 32px);
  --footer-submit-line: clamp(22px, 2vw, 38px);
  --footer-contact-size: clamp(16px, 1.15vw, 18px);
  --footer-contact-line: clamp(22px, 1.7vw, 26px);
  --footer-phone-size: clamp(20px, 2.1vw, 32px);
  --footer-phone-line: clamp(24px, 2.2vw, 34px);
  --footer-nav-size: clamp(18px, 1.25vw, 20px);
  --footer-nav-line: clamp(24px, 1.7vw, 28px);
  --footer-qrcode-size: clamp(96px, 10vw, 144px);
  background-color: #1c2125;
  .footerTop {
    border-bottom: 1px solid #494d51;
    padding: var(--footer-top-padding-top) 0 var(--footer-top-padding-bottom);
    .topBar {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      width: var(--container);
      margin: 0 auto;
      gap: clamp(36px, 5vw, 84px);
      box-sizing: border-box;
      .left {
        flex: 0 0 clamp(260px, 24vw, 380px);
        width: auto;
        min-height: clamp(100px, 9vw, 156px);
        font-family: var(--font-montserrat);
        font-weight: 900;
        font-size: var(--footer-title-size);
        color: #ffffff;
        line-height: var(--footer-title-line);
        letter-spacing: -0.04em;
        text-align: left;
        font-style: italic;
        text-transform: uppercase;
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        .titleWord {
          display: block;
          white-space: nowrap;
        }
      }
      .right {
        flex: 1 1 auto;
        min-width: 0;
        max-width: 760px;
        font-family: var(--font-montserrat);
        font-weight: 400;
        color: #ffffff;
        text-align: right;

        .subscriptionTitle {
          margin: 0 0 clamp(18px, 2vw, 26px);
          font-size: var(--footer-subscription-size);
          line-height: var(--footer-subscription-line);
          font-weight: 400;
          font-style: normal;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .descText {
          width: min(100%, 740px);
          margin-left: auto;
          font-size: var(--footer-desc-size);
          line-height: var(--footer-desc-line);
          font-style: italic;
        }

        .footerForm {
          display: flex;
          align-items: center;
          justify-content: center;
          width: min(100%, 704px);
          min-height: var(--footer-form-height);
          background-color: #1c2125;
          margin-top: clamp(24px, 2.5vw, 36px);
          margin-left: auto;
          .inputEl {
            all: unset;
            display: block;
            cursor: text;
            flex: 1 1 auto;
            width: auto;
            min-width: 0;
            min-height: var(--footer-form-height);
            padding: 0 clamp(16px, 2vw, 28px);
            background: #616467;
            font-family: var(--font-montserrat);
            font-size: var(--footer-input-size);
            color: #ffffff;
            line-height: var(--footer-input-line);
            text-align: left;
            text-transform: none;
            box-sizing: border-box;
          }
          .submitBtn {
            flex: 0 0 var(--footer-submit-width);
            width: var(--footer-submit-width);
            min-width: var(--footer-submit-width);
            min-height: var(--footer-form-height);
            padding: 0 14px;
            background-color: #ffffff;
            color: #2f2f2f;
            text-align: center;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: var(--footer-submit-size);
            color: #2f2f2f;
            line-height: var(--footer-submit-line);
            text-align: center;
            font-style: normal;
            text-transform: none;
            box-sizing: border-box;
          }
        }
      }
    }
  }
  .footerBottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: var(--footer-bottom-padding-top) 0
      var(--footer-bottom-padding-bottom);
    width: var(--container);
    margin: 0 auto;
    .left {
      flex: 1 1 52%;
      min-width: 0;
      font-family: var(--font-montserrat);
      .contactInfo {
        font-size: var(--footer-contact-size);
        color: #ffffff;
        line-height: var(--footer-contact-line);
        text-align: left;
        font-style: normal;
      }
      .phone {
        font-size: var(--footer-contact-size);
        color: #ffffff;
        line-height: var(--footer-contact-line);
        text-align: left;
        font-style: normal;
        margin: clamp(14px, 1.5vw, 19px) 0;
        flex-wrap: wrap;
        .phoneTitle {
          font-family: var(--font-montserrat);
        }
        .phoneNum {
          font-size: var(--footer-phone-size);
          line-height: var(--footer-phone-line);
          margin-top: 10px;
          font-weight: 400;
          font-family: D-DIN-PRO, D-DIN-PRO;
          overflow-wrap: anywhere;
          word-break: break-word;
        }
      }
      .email {
        color: #ffffff;
        text-align: left;
        font-style: normal;
        flex-wrap: wrap;
        .emailTitle {
          font-size: var(--footer-contact-size);
          line-height: var(--footer-contact-line);
          font-family: var(--font-montserrat);
        }
        .emailAddr {
          font-size: var(--footer-contact-size);
          line-height: var(--footer-contact-line);
          overflow-wrap: anywhere;
          word-break: break-word;
        }
      }
      .contactItem {
        margin: 0;
        margin-top: 4px;
        color: #fff;
        font-size: var(--footer-contact-size);
        line-height: var(--footer-contact-line);
        text-align: left;
        font-family: var(--font-montserrat);
        font-weight: 400;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        span {
          flex: 0 0 28px;
          margin-right: 11px;
        }
        a {
          flex: 1 1 auto;
          color: #fff;
          font-size: inherit;
          line-height: inherit;
        }
      }
    }
    .right {
      flex: 1 1 48%;
      min-width: 0;
      font-family: var(--font-montserrat);
      font-weight: 400;
      font-size: var(--footer-nav-size);
      color: #ffffff;
      line-height: var(--footer-nav-line);
      text-align: right;
      .navBar {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: clamp(12px, 1.3vw, 26px);
        flex-wrap: nowrap;
        white-space: nowrap;
        .navItem {
          margin-left: 0;
          white-space: nowrap;
        }
      }
      .qrcodes {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: clamp(24px, 2vw, 34px);
        gap: clamp(18px, 1.8vw, 32px);
        padding-right: 0;
        .qrcode {
          width: var(--footer-qrcode-size);
          height: var(--footer-qrcode-size);
          margin-left: 0;
          background: #eee;
        }
      }
    }
  }
}
.copyright {
  min-height: clamp(56px, 6vw, 89px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  font-size: clamp(12px, 1vw, 14px);
  line-height: clamp(18px, 1.5vw, 22px);
  text-align: center;
  color: #e6e6e6;
  background-color: #1a1a1a;
  box-sizing: border-box;
}
@media (max-width: 1100px) {
  .page__footer {
    .footerTop {
      .topBar {
        // display: block;

        .left {
          flex: 1 24%;
          margin: auto;
        }

        .right {
          flex: 1 70%;
          margin: 20px auto 0;
        }
      }
    }

    .footerBottom {
      flex-direction: column;
      align-items: flex-start;

      .left {
        margin-bottom: 30px;

        .phone {
          display: flex;
          align-items: center;

          .phoneNum {
            margin-left: 10px;
            margin-top: 0;
          }
        }

        .email {
          display: flex;
          align-items: center;

          .emailAddr {
            margin-left: 10px;
          }
        }
      }

      .right {
        margin: auto;
        .qrcodes {
          justify-content: center;
        }
      }
    }
  }
}

@media (max-width: 850px) {
  .page__footer {
    .footerTop {
      .topBar {
        display: block;

        .left {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto;
          width: 100%;
          max-width: 382px;
          text-align: center;
          align-items: center;
        }

        .right {
          width: 90%;
          margin: 20px auto 0;

          .subscriptionTitle {
            white-space: normal;
            text-align: center;
            letter-spacing: 0.03em;
          }

          .descText {
            width: 100%;
            text-align: left;
          }

          .footerForm {
            width: 100%;
            margin: 20px auto 0;
          }
        }
      }
    }

    .footerBottom {
      .left {
        margin-bottom: 20px;
        width: 90%;

        .phone {
          display: block;
          .phoneNum {
            margin-left: 0;
          }
        }

        .email {
          display: block;
          .emailAddr {
            margin-left: 0;
          }
        }
      }

      .right {
        .navBar {
          display: block;

          .navItem {
            display: block;
            margin-left: 0;
            margin-bottom: 20px;
            text-align: center;
          }
        }

        .qrcodes {
          padding-right: 0;
        }
      }
    }
  }

  .copyright {
    text-align: center;
  }
}

@media (max-width: 760px) {
  .page__footer {
    .footerTop {
      padding: 26px 0;
      box-sizing: border-box;

      .topBar {
        display: block;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;

        .left {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto;
          width: 100%;
          max-width: 100%;
          text-align: center;
        }

        .right {
          width: 100%;
          margin: 20px auto 0;

          .subscriptionTitle {
            white-space: normal;
            text-align: center;
            letter-spacing: 0.02em;
          }

          .descText {
            width: 100%;
            text-align: left;
          }

          .footerForm {
            width: 100%;
            margin: 20px auto 0;
            box-sizing: border-box;
            overflow: hidden;

            .inputEl {
              flex: 1;
              width: auto;
              min-width: 0;
              padding: 0 12px;
            }

            .submitBtn {
              padding: 0 10px;
            }
          }
        }
      }
    }

    .footerBottom {
      padding: 0 20px 20px;
      box-sizing: border-box;
      margin: 20px 0 0;

      .left {
        margin-bottom: 20px;
        width: 100%;
        box-sizing: border-box;

        .phone {
          display: block;
          .phoneNum {
            margin-left: 0;
            line-height: 1.15;
          }
        }

        .email {
          display: block;
          .emailAddr {
            margin-left: 0;
          }
        }
      }

      .right {
        width: 100%;
        box-sizing: border-box;

        .navBar {
          width: 100%;
          box-sizing: border-box;
        }

        .qrcodes {
          width: 100%;
          padding-right: 0;
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .page__footer {
    .footerTop {
      .topBar {
        .left {
          height: auto;
        }

        .right {
          .footerForm {
            width: 100%;
          }
        }
      }
    }

    .footerBottom {
      .left {
        .phone {
          .phoneNum {
            margin-top: 6px;
          }
        }
      }

      .right {
        .navBar {
          .navItem {
            margin-bottom: 14px;
          }
        }

        .qrcodes {
          justify-content: center;
          gap: 12px;
        }
      }
    }
  }

  .copyright {
    min-height: auto;
  }
}
</style>
