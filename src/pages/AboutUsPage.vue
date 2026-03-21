<template>
  <div class="pages">
    <img class="banner" :src="banner" alt="" />
    <div class="topContent">
      <h1 class="aboutUs">About Us</h1>
      <h1 class="companyName">Shanghai Careful Technology Co., Ltd.</h1>
      <h2 class="desc">
        Founded in 2019, is a high-tech enterprise specializing in R&D and the
        production of safety protection products.
      </h2>
      <div class="part spaceBetween baseTop">
        <div class="left">
          <p class="text">
            Business scope covers Manufacturing of high-performance fibers and
            composite materials; Synthetic fiber manufacturing; Sales of metal
            composites and ceramic composites; New material technology research
            and development research and development, design, production,
          </p>
          <button class="btn" type="button">
            <span>Contact Us</span>
            <img
              class="arrowRight arrowRight--default"
              :src="arrowRightBlack"
              alt=""
            />
            <!-- <img
              class="arrowRight arrowRight--active"
              :src="arrowRightWhite"
              alt=""
            /> -->
          </button>
        </div>
        <p class="right">
          and sales of protective armor plates (helicopter composite armor
          plates, vehicle composite armor plates, ship composite armor plates,
          shelter composite armor plates), anti-destruction plates and stealth
          bulletproof integrated structural plates; R&D, design, production, and
          sales of bulletproof vests, stab-resistant clothing, bulletproof
          helmets, bulletproof boards, and bulletproof shields).
        </p>
      </div>
      <img class="produce2" :src="produce2" alt="" />
      <div class="produceDesc">
        <p>Company's research and development capability：</p>
        <p>
          The company has over 80 employees, including 8 R&D personnel, one has
          Ph.D. in Material Science and three have master’s degrees. The
          technical team's educational backgrounds include polymer materials,
          inorganic materials, composite materials, metal materials, chemistry
          and chemical engineering, mechanical design and manufacturing, which
          enhances knowledge backgrounds in various fields.
        </p>
        <p>
          The company has established long-term collaboration with Donghua
          University, Sichuan University, Nanjing Institute of Technology,
          Weapon Materials Research Institute, and other professional research
          institutions and universities, which can fully utilize these research
          institutions and the universities’ scientific research and testing
          capabilities
        </p>
        <p>
          to enhance the company's research and product development
          capabilities. -Careful Technology has developed PEUD fabric with
          different resin systems and areal density, which can be divided into
          four categories: pure PE plates, helmets, ceramic back, and soft
          liner. -According to NIJ0101.07 standard, we developed the HG1 HG2 RF1
          RF2 RF3 ballistic materials. -Developed the PE armor plate whose
          ballistic performance and rigidity do not decrease at 100 °C high
          temperature, with an area density of 14 kg and against AK 47.
        </p>
        <p>
          -The facility in Careful Technology can handle the large armor plate
          of 1600mm*3000mm. -The lightest ballistic stealth integrated PE plate
          has been developed, with area density of 18kg. The radar wave can be
          absorbed and covering :KA,KU,X,C,S,L, against M80,AK47 and M193
          ammunition.
        </p>
      </div>
      <div class="part spaceBetween capacity">
        <div class="left">
          <img class="capacityImg" :src="produce1" alt="" />
        </div>
        <div class="right">
          <h6 class="title">Company production capacity :</h6>
          <p class="text">
            With more than 20 sets of key production lines, the annual output is
            800 tons of PE bulletproof materials and 20,000 square meters of
            armor plate materials. The company also is one of the largest PE
            board production base in China, which can produce armor boards up to
            3m * 1.6m in size, which can meet the requirements of the military
            shelter and the protective armor board for light and tall body
            protection for vehicles. The company can produce bulletproof
            materials such as UD cloth, armor plate, bulletproof stealth
            materials, and all-core production lines such as integrated plate,
            bulletproof vest, armor plate composite, and armor plate packaging.
          </p>
        </div>
      </div>
      <div class="introText">
        <h6 class="title">Main production we are specializing in:</h6>
        <p class="text">
          Ultra-high polyethylene bers,PEUD fabric,Armor plates,Vests (ballistic
          and anti-stab),Plates,Shields and etc.
        </p>
        <h6 class="title">
          The production base has been built with an annual output:
        </h6>
        <div class="wrap">
          <div class="left">
            <p class="item text">-1000 tons of PEUD fabric,</p>
            <p class="item text">-20,000 SQM of armor plates,</p>
            <p class="item text">-500,000 sets of vests and clothing</p>
          </div>
          <div class="right">
            <p class="item text">-One million plates,</p>
            <p class="item text">-Three hundred thousand helmets,</p>
            <p class="item text">-One hundred thousand shields.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapCertificate">
      <div class="content">
        <h1 class="title">Qualification Certificate</h1>
        <h2 class="text">Quality Management System Certification</h2>
        <p class="text">
          By standardizing the process and controlling the quality throughout
          the entire chain, we have obtained authoritative qualification
          recognition and provide customers with stable and reliable products
          and services.
        </p>
        <div class="patentList">
          <img class="patent" :src="patent1" alt="" />
          <img class="patent" :src="patent2" alt="" />
          <img class="patent" :src="patent3" alt="" />
          <img class="patent" :src="patent4" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import banner from "@/assets/aboutus/banner.png";
import produce1 from "@/assets/aboutus/produce1.png";
import produce2 from "@/assets/aboutus/produce2.png";
import arrowRightBlack from "@/assets/cases/arrowRightBlack.png";
import arrowRightWhite from "@/assets/cases/arrowRightWhite.png";
import patent1 from "@/assets/aboutus/patent1.png";
import patent2 from "@/assets/aboutus/patent2.png";
import patent3 from "@/assets/aboutus/patent3.png";
import patent4 from "@/assets/aboutus/patent4.png";
</script>
<style scoped lang="less">
.pages {
  .banner {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }
  .topContent {
    width: min(1120px, var(--container));
    margin: 0 auto;
    padding-top: clamp(40px, 4vw, 56px);

    .aboutUs {
      margin: 0 0 34px;
      text-align: center;
      font-family: var(--font-montserrat);
      font-size: 50px;
      line-height: 1.04;
      font-style: italic;
      font-weight: 900;
    }
    .companyName {
      margin: 0 0 18px;
      font-family: var(--font-montserrat);
      font-size: 48px;
      line-height: 1.16;
      font-style: italic;
      font-weight: 400;
    }
    .desc {
      max-width: 980px;
      margin: 0 0 40px;
      text-align: left;
      font-family: var(--font-montserrat);
      font-size: 34px;
      line-height: 1.48;
      font-weight: 500;
    }
    .part {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: start;
      gap: clamp(32px, 3.4vw, 56px);

      > .left,
      > .right {
        min-width: 0;
        text-align: left;
        font-family: var(--font-montserrat);
        font-size: 24px;
        line-height: 1.9;
        font-weight: 400;
      }

      .title,
      .text,
      p {
        margin: 0;
      }

      &.baseTop {
        > .left {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
      }

      .btn {
        width: min(100%, 330px);
        min-height: 60px;
        padding: 0 28px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        align-self: flex-start;
        gap: 15px;
        border: 1px solid #111;
        border-radius: 4px;
        background: #fff;
        box-shadow: none;
        color: #101010;
        cursor: pointer;
        appearance: none;
        transition: transform 0.18s ease, background 0.18s ease,
          border-color 0.18s ease, color 0.18s ease;
        font-family: var(--font-montserrat);
        font-size: 27px;
        line-height: 1;
        font-style: normal;
        font-weight: 500;
        white-space: nowrap;

        &:hover,
        &:focus-visible {
          color: #fff;
          border-color: #111;
          background: #111;
          transform: translateY(-1px);

          .arrowRight--default {
            display: none;
          }

          .arrowRight--active {
            display: block;
          }
        }

        &:active {
          transform: translateY(0);
        }

        &:focus-visible {
          outline: 0;
        }

        .arrowRight {
          width: 56px;
          height: 13px;
          flex-shrink: 0;
        }

        .arrowRight--active {
          display: none;
        }
      }

      &.capacity {
        align-items: center;
        gap: clamp(28px, 2.8vw, 40px);

        > .left {
          .capacityImg {
            width: 100%;
            aspect-ratio: 700 / 759;
            object-fit: cover;
            display: block;
            border-radius: 4px;
          }
        }

        > .right {
          .title {
            margin-bottom: 14px;
            font-size: 24px;
            line-height: 1.25;
            font-weight: 600;
          }

          .text {
            font-size: 20px;
            line-height: 1.72;
          }
        }
      }
    }
    .produce2 {
      display: block;
      width: 100%;
      aspect-ratio: 144 / 37;
      object-fit: cover;
      margin: 44px auto 18px;
      border-radius: 4px;
    }
    .produceDesc,
    .introText {
      text-align: left;
      font-family: var(--font-montserrat);
      font-size: 24px;
      line-height: 1.9;
      font-weight: 400;
    }
    .produceDesc {
      margin-bottom: 58px;
      p {
        margin: 0 0 8px;
      }

      p:last-child {
        margin-bottom: 0;
      }
    }
    .introText {
      margin-top: 52px;

      .title {
        margin: 0 0 8px;
        font-size: 28px;
        line-height: 1.3;
        font-weight: 600;
        text-align: left;
      }

      .text {
        margin: 0 0 12px;
      }

      .wrap {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 28px;
        font-size: 24px;
        line-height: 1.9;
        font-family: var(--font-montserrat);
        font-weight: 400;

        > .left,
        > .right {
          min-width: 0;

          .item {
            margin: 0;
          }
        }
      }
    }
  }
  .wrapCertificate {
    --patent-stagger: clamp(36px, 6vw, 98px);
    margin: 58px auto 0;
    background: #f7f7f7;
    padding: 48px 0 92px;

    .content {
      width: min(1120px, var(--container));
      margin: 0 auto;

      .title {
        margin: 0 auto 30px;
        text-align: center;
        font-size: 50px;
        line-height: 1.04;
        font-family: var(--font-montserrat);
        font-style: italic;
        font-weight: 900;
      }

      > h2.text {
        margin: 0 0 12px;
        text-align: left;
        font-family: var(--font-montserrat);
        font-size: 34px;
        line-height: 1.35;
        font-weight: 600;
      }

      > p.text {
        max-width: 980px;
        margin: 0 0 var(--patent-stagger);
        text-align: left;
        font-family: var(--font-montserrat);
        font-size: 24px;
        line-height: 1.65;
        color: #000;
      }

      .patentList {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        align-items: start;
        gap: 18px;
        padding-top: var(--patent-stagger);

        .patent {
          width: 100%;
          aspect-ratio: 333 / 443;
          object-fit: cover;
          border-radius: 0;
          background: #fff;
          box-shadow: none;
          transition: transform 0.22s ease, box-shadow 0.22s ease;

          &:hover {
            transform: translateY(-6px);
            box-shadow: 0 22px 44px rgba(23, 33, 44, 0.12);
          }

          &:nth-child(even) {
            margin-top: calc(var(--patent-stagger) * -1);
          }
        }
      }
    }
  }
}

@media (max-width: 1000px) {
  .pages {
    .topContent {
      .aboutUs {
        font-size: 42px;
        margin-bottom: 24px;
      }

      .companyName {
        font-size: 40px;
      }

      .desc {
        font-size: 30px;
        margin-bottom: 40px;
      }

      .part {
        grid-template-columns: 1fr;
        gap: 32px;

        > .left,
        > .right {
          font-size: 22px;
          line-height: 1.85;
        }

        .btn {
          min-height: 72px;
          padding: 0 32px;
          font-size: 26px;
        }

        &.capacity > .right {
          .title {
            font-size: 24px;
          }

          .text {
            font-size: 19px;
            line-height: 1.75;
          }
        }
      }

      .produceDesc,
      .introText {
        font-size: 22px;
        line-height: 1.85;
      }

      .introText {
        .title {
          font-size: 28px;
        }

        .wrap {
          grid-template-columns: 1fr;
          gap: 16px;
          font-size: 22px;
        }
      }
    }

    .wrapCertificate {
      padding-bottom: 72px;

      .content {
        .title {
          font-size: 42px;
        }

        > h2.text {
          font-size: 30px;
        }

        > p.text {
          font-size: 22px;
          line-height: 1.75;
        }

        .patentList {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;

          .patent:nth-child(even) {
            margin-top: 0;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .pages {
    .topContent {
      padding-top: 28px;

      .aboutUs {
        font-size: 30px;
        margin-bottom: 18px;
      }

      .companyName {
        font-size: 28px;
        margin-bottom: 18px;
      }

      .desc {
        font-size: 20px;
        line-height: 1.5;
        margin-bottom: 28px;
      }

      .part {
        gap: 24px;

        > .left,
        > .right {
          font-size: 16px;
          line-height: 1.75;
        }

        &.baseTop > .left {
          gap: 20px;
        }

        .btn {
          width: 50%;
          min-height: 50px;
          padding: 0 24px;
          gap: 10px;
          font-size: 18px;
          margin: 0 auto;
          .arrowRight {
            width: 44px;
            height: auto;
          }
        }

        &.capacity > .right {
          .title {
            margin-bottom: 10px;
            font-size: 20px;
          }

          .text {
            font-size: 16px;
            line-height: 1.7;
          }
        }
      }

      .produce2 {
        margin: 32px auto 24px;
        border-radius: 12px;
      }

      .produceDesc,
      .introText {
        font-size: 16px;
        line-height: 1.75;
      }

      .produceDesc p {
        margin-bottom: 14px;
      }

      .introText {
        margin-top: 32px;

        .title {
          margin-bottom: 8px;
          font-size: 20px;
        }

        .text {
          margin-bottom: 14px;
        }

        .wrap {
          gap: 12px;
          font-size: 16px;
        }
      }
    }

    .wrapCertificate {
      margin-top: 40px;
      padding: 32px 0 48px;

      .content {
        .title {
          font-size: 30px;
          margin-bottom: 16px;
        }

        > h2.text {
          font-size: 20px;
          margin-bottom: 12px;
        }

        > p.text {
          font-size: 16px;
          line-height: 1.7;
        }

        .patentList {
          padding-top: 24px;
          gap: 16px;

          .patent:nth-child(even) {
            margin-top: 0;
          }
        }

        .patent {
          border-radius: 12px;
        }
      }
    }
  }
}
</style>
