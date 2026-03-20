<template>
  <div ref="containerRef" class="intro-list">
    <div
      class="item"
      v-for="(item, index) in list"
      :key="item.desc + item.unit"
    >
      <div class="top">
        <span class="num">{{ displayedNums[index] }}</span>
        <span class="unit">{{ item.unit }}</span>
      </div>
      <div class="bottom">{{ item.desc }}</div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const list = [
  {
    num: 2019,
    unit: "年",
    desc: "公司成立于",
  },
  {
    num: 2000,
    unit: "万",
    desc: "注册资本",
  },
  {
    num: 20,
    unit: "+",
    desc: "关键生产线",
  },
  {
    num: 800,
    unit: "吨",
    desc: "年产 PE 防弹材料",
  },
  {
    num: 200000,
    unit: "m²",
    desc: "装甲生产基地",
  },
];

const containerRef = ref(null);
const displayedNums = ref(list.map(() => 0));

let observer;
let animationFrameId = 0;
let hasAnimated = false;

const easeOutCubic = (progress) => 1 - Math.pow(1 - progress, 3);

const animateNumbers = () => {
  if (hasAnimated) {
    return;
  }

  hasAnimated = true;
  const startTime = performance.now();
  const duration = 1600;

  const step = (currentTime) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easedProgress = easeOutCubic(progress);

    displayedNums.value = list.map((item) =>
      Math.round(item.num * easedProgress)
    );

    if (progress < 1) {
      animationFrameId = window.requestAnimationFrame(step);
    }
  };

  animationFrameId = window.requestAnimationFrame(step);
};

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;

      if (!entry?.isIntersecting) {
        return;
      }

      animateNumbers();
      observer?.disconnect();
    },
    {
      threshold: 0.35,
    }
  );

  if (containerRef.value) {
    observer.observe(containerRef.value);
  }
});

onBeforeUnmount(() => {
  observer?.disconnect();

  if (animationFrameId) {
    window.cancelAnimationFrame(animationFrameId);
  }
});
</script>

<style scoped lang="less">
.intro-list {
  width: var(--container);
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 24px;
  margin: clamp(30px, 12vw, 67px) auto clamp(50px, 12vw, 134px);
}

.item {
  min-height: 249px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 18px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  letter-spacing: 4px;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 36px rgba(23, 33, 44, 0.1);
  }
}

.top {
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
}

.num {
  display: inline-block;
  font-family: var(--font-din-alternate);
  font-weight: 700;
  font-size: clamp(40px, 3vw, 60px);
  color: #ff0101;
  line-height: 0.92;
  letter-spacing: 1px;
  font-variant-numeric: tabular-nums;
}

.unit {
  display: inline-block;
  font-family: var(--font-alibaba-puhuiti);
  font-size: clamp(18px, 1.6vw, 26px);
  line-height: 1;
  letter-spacing: -1px;
  color: #000;
}

.bottom {
  margin-top: 24px;
  font-family: var(--font-alibaba-puhuiti);
  font-size: clamp(18px, 1.6vw, 26px);
  font-weight: 400;
  letter-spacing: -1px;
  line-height: 1.4;
  color: #000;
}

@media (max-width: 1200px) {
  .intro-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .intro-list {
    width: calc(100% - 40px);
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  .item {
    min-height: 132px;
    padding: 14px 5px;
    border-radius: 10px;
  }

  .top {
    gap: 4px;
  }

  .num {
    font-size: 28px;
    letter-spacing: 1px;
  }

  .unit {
    font-size: 15px;
  }

  .bottom {
    margin-top: 12px;
    font-size: 14px;
    line-height: 1.35;
  }
}
</style>
