<script setup>
</script>

<template>
  <footer class="page__footer">
    <div class="footerTop">
      <div class="topBar">
        <div class="left">SUBSCRIPTION INFORMATION</div>
        <div class="right">
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
      <div class="left">
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
  background-color: #1c2125;
  .footerTop {
    border-bottom: 1px solid #494d51;
    padding: 54px 0 47px;
      .topBar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: var(--container);
        margin: 0 auto;
        box-sizing: border-box;
        .left {
          width: 382px;
          height: 112px;
        font-family: var(--font-montserrat);
        font-weight: 900;
        font-size: 46px;
        color: #ffffff;
        line-height: 1.08;
        letter-spacing: -0.04em;
        text-align: left;
        font-style: italic;
        text-transform: uppercase;
        display: inline-flex;
        align-items: center;
      }
      .right {
        width: 666px;
        // height: 48px;
        font-family: var(--font-montserrat);
        font-weight: 400;
        font-size: 20px;
        color: #ffffff;
        line-height: 24px;
        text-align: right;
        font-style: italic;
        text-transform: none;
        .footerForm {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 619px;
          height: 71px;
          background-color: #1c2125;
          margin-top: 29px;
          margin-left: auto;
          .inputEl {
            all: unset;
            display: block;
            cursor: text;
            flex: 1 458px;
            width: 458px;
            height: 100%;
            padding: 20px 32px;
            background: #616467;
            font-size: 20px;
            color: #ffffff;
            line-height: 24px;
            text-align: left;
            text-transform: none;
            box-sizing: border-box;
          }
          .submitBtn {
            flex: 0 0 174px;
            width: 174px;
            height: 100%;
            background-color: #ffffff;
            color: #2f2f2f;
            text-align: center;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            // font-weight: 600;
            font-size: 30px;
            color: #2f2f2f;
            line-height: 37px;
            text-align: center;
            font-style: normal;
            text-transform: none;
          }
        }
      }
    }
  }
  .footerBottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px 0 30px;
    width: var(--container);
    margin: 0 auto;
      .left {
        font-family: var(--font-montserrat);
        .contactInfo {
        font-size: 24px;
        color: #ffffff;
        line-height: 29px;
        text-align: left;
        font-style: normal;
      }
        .phone {
          font-size: 24px;
          color: #ffffff;
          text-align: left;
          font-style: normal;
          margin: 19px 0;
          flex-wrap: wrap;
          .phoneTitle {
            font-family: var(--font-montserrat);
          }
          .phoneNum {
            font-size: 45px;
            line-height: 45px;
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
          font-size: 24px;
          line-height: 29px;
          font-family: var(--font-montserrat);
        }
        .emailAddr {
          font-size: 24px;
          // margin-top: 10px;
          line-height: 29px;
          overflow-wrap: anywhere;
          word-break: break-word;
        }
      }
    }
    .right {
      font-family: var(--font-montserrat);
      font-weight: 400;
      font-size: 24px;
      color: #ffffff;
      line-height: 24px;
      text-align: right;
      .navBar {
        display: flex;
        align-items: center;
        justify-content: center;
        .navItem {
          margin-left: 23px;
        }
      }
      .qrcodes {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: 35px;
        padding-right: 11px;
        .qrcode {
          width: 144px;
          height: 144px;
          margin-left: 20px;
          background: #eee;
        }
      }
    }
  }
}
.copyright {
  height: 89px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #e6e6e6;
  background-color: #1a1a1a;
}
@media (max-width: 1100px) {
  .page__footer {
    .footerTop {
      .topBar {
        display: block;

        .left {
          display: block;
          margin: auto;
        }

        .right {
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
            font-size: 30px;
            margin-left: 10px;
          }
        }

        .email {
          display: flex;
          align-items: center;

          .emailAddr {
            font-size: 26px;
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
          font-size: 36px;
          text-align: center;
        }

        .right {
          width: 90%;
          margin: 20px auto 0;

          .descText {
            width: 100%;
            text-align: left;
          }

          .footerForm {
            width: 90%;
            height: 60px;
            margin: 20px auto 0;

            .submitBtn {
              flex: 1;
              padding: 0 10px;
              font-size: 22px;
            }
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
            font-size: 26px;
            margin-left: 0;
          }
        }

        .email {
          display: block;
          .emailAddr {
            font-size: 22px;
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
            font-size: 22px;
          }
        }

        .qrcodes {
          padding-right: 0;
          .qrcode {
            width: 120px;
            height: 120px;
            margin-left: 0;
          }
        }
      }
    }
  }

  .copyright {
    font-size: 14px;
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
          font-size: 36px;
          text-align: center;
        }

        .right {
          width: 100%;
          margin: 20px auto 0;

          .descText {
            width: 100%;
            text-align: left;
          }

          .footerForm {
            width: 100%;
            height: 60px;
            margin: 20px auto 0;
            box-sizing: border-box;
            overflow: hidden;

            .inputEl {
              flex: 1;
              width: auto;
              min-width: 0;
              padding: 0 10px;
              font-size: 22px;
            }

            .submitBtn {
              flex: 0 0 132px;
              width: 132px;
              min-width: 132px;
              font-size: 18px;
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
            font-size: 26px;
            margin-left: 0;
            line-height: 1.15;
          }
        }

        .email {
          display: block;
          .emailAddr {
            font-size: 22px;
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

          .qrcode {
            margin-left: 0;
          }
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
          font-size: 28px;
          line-height: 1.08;
        }

        .right {
          .footerForm {
            height: 52px;

            .inputEl {
              font-size: 16px;
            }

            .submitBtn {
              flex-basis: 112px;
              width: 112px;
              min-width: 112px;
              font-size: 16px;
            }
          }
        }
      }
    }

    .footerBottom {
      .left {
        .contactInfo,
        .phone,
        .emailTitle,
        .emailAddr {
          font-size: 18px;
          line-height: 1.35;
        }

        .phone {
          .phoneNum {
            font-size: 20px;
          }
        }

        .email {
          .emailAddr {
            font-size: 18px;
          }
        }
      }

      .right {
        font-size: 18px;

        .navBar {
          .navItem {
            font-size: 18px;
            margin-bottom: 14px;
          }
        }

        .qrcodes {
          justify-content: center;
          gap: 12px;

          .qrcode {
            width: 96px;
            height: 96px;
          }
        }
      }
    }
  }

  .copyright {
    padding: 14px 16px;
    height: auto;
    text-align: center;
    line-height: 1.6;
  }
}
</style>
