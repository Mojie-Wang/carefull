<template>
  <div class="wrapper">
    <div class="listWrap">
      <div class="item" v-for="(item, index) in caseList" :key="index">
        <img class="img" :src="item.img" />
        <div class="content">
          <div class="title">{{ item.title }}</div>
          <div class="desc">{{ item.desc }}</div>
          <button
            class="btn"
            :class="{ 'is-active': activeIndex === index }"
            type="button"
            @click="activeIndex = index"
          >
            <span>Learn More</span>
            <img class="arrow arrow--default" :src="arrowRightBlack" alt="" />
            <img class="arrow arrow--active" :src="arrowRightWhite" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import case1 from "@/assets/cases/case1.png";
import case2 from "@/assets/cases/case2.png";
import case3 from "@/assets/cases/case3.png";
import case4 from "@/assets/cases/case4.png";
import arrowRightBlack from "@/assets/cases/arrowRightBlack.png";
import arrowRightWhite from "@/assets/cases/arrowRightWhite.png";
const activeIndex = ref(-1);
const caseList = ref([
  {
    img: case1,
    title: "A 155-gun light protective turret",
    desc: "An integrated lightweight protective ammunition box is designed for a certain type of 155mm howitzer,An integrated lightweight protective ammunition box is designed for",
  },
  {
    img: case2,
    title: "A certain 155 gun protective ammunition",
    desc: "Adopting a steel framework and non-metallic protective material panels. It can withstand the 0° angle firing of Type 53 7.62mm ordinary steel-core bullets at a distance of 100 meters.",
  },
  {
    img: case3,
    title: "A 155-gun light protective turret",
    desc: "An integrated lightweight protective ammunition box is designed for a certain type of 155mm howitzer,An integrated lightweight protective ammunition box is designed for",
  },
  {
    img: case4,
    title: "A 155-gun light protective turret",
    desc: "Adopting a steel framework and non-metallic protective material panels. It can withstand the 0° angle firing of Type 53 7.62mm ordinary steel-core bullets at a distance of 100 meters.",
  },
]);
</script>

<style scoped lang="less">
.wrapper {
  background-color: #fff;
  padding: 40px 0 56px;

  .listWrap {
    width: var(--container);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;

    .item {
      font-size: 24px;
      font-weight: 600;
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      margin: 0;
      overflow: hidden;
      transition: transform 0.3s ease;
      &:hover {
        transform: scale(1.01);
      }
      .img {
        flex: 0 0 600px;
        width: 600px;
        max-width: 42%;
        aspect-ratio: 5 / 3;
        object-fit: cover;
        display: block;
      }

      .content {
        flex: 1 1 auto;
        min-width: 0;
        padding: 54px 23px 23px 50px;
        box-sizing: border-box;
        background-color: #f5f5f5;
        display: flex;
        flex-direction: column;
        // justify-content: center;
        &:hover {
          background-color: #f0f7ff;
        }
        .title {
          margin-bottom: 18px;
          font-size: 36px;
          line-height: 1.2;
        }

        .desc {
          margin-bottom: 32px;
          font-size: 22px;
          font-weight: 400;
          line-height: 32px;
          color: #5d6774;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          gap: 15px;
          width: 329px;
          height: 59px;
          border-radius: 8px 8px 8px 8px;
          border: 1px solid #000000;
          background: transparent;
          font-size: 27px;
          color: #232323;
          line-height: 50px;
          text-align: center;
          font-style: normal;
          cursor: pointer;
          font-family: var(--font-montserrat);
          font-weight: 400;

          transition: background 0.22s ease, border-color 0.22s ease,
            color 0.22s ease, transform 0.18s ease;

          &:hover,
          &:active,
          &:focus-visible,
          &.is-active {
            color: #ffffff;
            background: #0766cb;
            border-color: #0766cb;
            font-weight: 600;
            .arrow--default {
              display: none;
            }

            .arrow--active {
              display: block;
            }
          }

          &.is-active {
            font-weight: 600;
          }

          &:active {
            font-weight: 600;
            transform: scale(0.98);
          }

          &:focus-visible {
            outline: 0;
          }

          .arrow {
            width: 56px;
            height: 13px;
            flex-shrink: 0;
          }

          .arrow--active {
            display: none;
          }
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .wrapper {
    padding: 32px 0 44px;
  }

  .wrapper .listWrap .item {
    .img {
      flex-basis: 46%;
      width: 46%;
      max-width: 46%;
    }

    .content {
      padding: 28px 28px 30px;

      .title {
        margin-bottom: 16px;
      }

      .desc {
        margin-bottom: 24px;
      }
    }
  }
}

@media (max-width: 768px) {
  .wrapper {
    padding: 24px 0 36px;
  }

  .wrapper .listWrap {
    width: calc(100% - 32px);
    gap: 24px;
  }

  .wrapper .listWrap .item {
    flex-direction: column;

    .img {
      width: 100%;
      max-width: none;
      flex-basis: auto;
    }

    .content {
      width: 100%;
      padding: 24px 20px 26px;

      .title {
        font-size: 28px;
      }

      .desc {
        font-size: 15px;
      }

      .btn {
        font-size: 16px;
      }
    }
  }
}
</style>
