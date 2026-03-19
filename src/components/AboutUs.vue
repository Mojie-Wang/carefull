<template>
  <div class="about-page">
    <div class="container">
      
      <!-- 关于我们 -->
      <div class="about-block">
        <div class="title">About Us</div>
        <p class="text highlight">
         Shanghai Careful Technology Co., Ltd.
        </p>
        <p class="text">
         Founded in 2019, is a high-tech enterprise specializing in R&D and the production of safety protection products.
        </p>
      </div>

      <div class="business-scope">
        <div class="scope-col">
          <p>Business scope covers Manufacturing of high-performance fibers and composite materials; Synthetic fiber manufacturing; Sales of metal composites and ceramic composites; New material technology research and development (research and development, design, production,</p>
        </div>
        <div class="scope-col">
          <p>and sales of protective armor plates (helicopter composite armor plates, vehicle composite armor plates, ship composite armor plates, shelter composite armor plates), anti-destruction plates and stealth bulletproof integrated structural plates; R&D, design, production, and sales of bulletproof vests, stab-resistant clothing, bulletproof helmets, bulletproof boards, and bulletproof shields).</p>
        </div>
      </div>
      
      <!-- 联系我们按钮：使用与ProductList一致的样式 -->
      <div class="contact-btn-container">
        <button 
          class="btn-learn primary"
          type="button"
        >
          <span>Contact Us</span>
          <img 
            class="btn-arrow" 
            :src="arrowRightBlack" 
            alt="arrow"
          />
        </button>
      </div>
      
      <!-- 图文混排 - 生产能力 -->
      <div class="feature-row">
        <div class="media-box">
          <img :src="produce1" alt="Production" />
        </div>
        <div class="text-box">
          <h3 class="subtitle">Company production capacity：</h3>
          <p class="text">
            With more than 20 sets of key production lines, the annual output is 800 tons of PE bulletproof materials and 20,000 square meters of armor plate materials. The company also is one of the largest PE board production base in China, which can produce armor boards up to 3m * 1.6m in size, which can meet the requirements of the military shelter and the protective armor board for light and tall body protection for vehicles. The company can produce bulletproof materials such as UD cloth, armor plate, bulletproof stealth materials, and all-core production lines such as integrated plate, bulletproof vest, armor plate composite, and armor plate packaging.
          </p>
        </div>
      </div>

      <!-- 公司信息 -->
      <div class="company-info">
        <p>
           Company's research and development capability：
        </p>
        <p> 
          The company has over 80 employees, including 8 R&D personnel, one has Ph.D. in Material Science and three have master’s degrees. The technical team's educational backgrounds include polymer materials, inorganic materials, composite materials, metal materials, chemistry and chemical engineering, mechanical design and manufacturing, which enhances knowledge backgrounds in various fields.
        </p>
        <p>
          The company has established long-term collaboration with Donghua University, Sichuan University, Nanjing Institute of Technology, Weapon Materials Research Institute, and other professional research institutions and universities, which can fully utilize these research institutions and the universities’ scientific research and testing capabilities to enhance the company's research and product development capabilities.
        </p>
        <p>
           -Careful Technology has developed PEUD fabric with different resin systems and areal density, which can be divided into four categories: pure PE plates, helmets, ceramic back, and soft liner.
        </p>
        <p>
          -According to NIJ0101.07 standard, we developed the HG1 HG2 RF1 RF2 RF3 ballistic materials. 
        </p>
        <p>
           -Developed the PE armor plate whose ballistic performance and rigidity do not decrease at 100 °C high temperature, with an area density of 14 kg and against AK 47.
        </p>
        <p>
          -The facility in Careful Technology can handle the large armor plate of 1600mm*3000mm. -The lightest ballistic stealth integrated PE plate has been developed, with area density of 18kg. The radar wave can be absorbed and covering :KA,KU,X,C,S,L, against M80,AK47 and M193 ammunition.
        </p>
      </div>
    </div>
    <!-- 资质证书 -->
    <div class="cert-block">
      <h2 class="title">Qualification Certificate</h2>
      
      <!-- 新增一个内部容器来统一控制文字和图片的左右边距 -->
      <div class="cert-content-wrapper">
        <div class="cert-info">
          <p class="text intro">
            Quality Management System Certification
          </p>
          <p class="text quality">
            By standardizing the process and controlling the quality throughout the entire chain, we have obtained authoritative qualification recognition and provide customers with stable and reliable products and services.
          </p>
        </div>
        
        <div class="cert-grid">
          <div v-for="(cert, idx) in certs" :key="idx" class="cert-item">
            <img :src="cert.img" :alt="cert.name" />
            <span>{{ cert.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import patent1 from '@/assets/aboutus/patent1.png'
import patent2 from '@/assets/aboutus/patent2.png'
import patent3 from '@/assets/aboutus/patent3.png'
import patent4 from '@/assets/aboutus/patent4.png'
import produce1 from '@/assets/aboutus/produce1.png'
import produce2 from '@/assets/aboutus/produce2.png'
import arrowRightBlack from '@/assets/cases/arrowRightBlack.png'

const certs = ref([
  { img: patent1, name: 'ISO9001' },
  { img: patent2, name: 'ISO14001' },
  { img: patent3, name: 'ISO45001' },
  { img: patent4, name: 'CE Marking' },
])
</script>

<style scoped lang="scss">
// 变量定义
$primary: #000;
$primary-hover: #0052a3;
$text-main: #000;
$text-sub: #666;
$bg-light: #f9f9f9;
$gap: 0.4rem;
$radius: 0.08rem;
$border: #e4e7ed;
$transition: all 0.3s ease;
$max-width: 14.31rem;

.about-page {
  width: 100%;
  color: $text-main;
  background: #fff;
}

.container {
  width: 100%;
  max-width: $max-width;
  margin: 0 auto;
  padding-top: 0.59rem;
  display: flex;
  flex-direction: column;
  gap: $gap;
}
.about-block{
  text-align: center;
  .title {
    font-size: 0.4rem;
    color: $primary;
    margin-bottom: 0.65rem;
    font-weight: 700;
    text-align: center;
    font-family: var(--font-montserrat);
    font-style: italic;
  }
  .cert-info{
    margin-left: 2.43rem;
    margin-right: 2.43rem;
    .text {
      font-size: 0.34rem;
      line-height: 0.5rem;
      color: $text-main;
      margin-bottom: 0.2rem;
      text-align: justify;
      
      &.highlight {
        line-height:0.58rem;
        font-size: 0.48rem;
        font-weight: 600;
        color: $text-main;
      }
      
      &.intro {
        font-weight: 500;
        font-size: 0.34rem;
        color: #000000;
        line-height: 0.5rem;
        text-align: justify;
      }
      &.quality {
        font-weight: 500;
        font-size: 0.24rem;
        color: #000000;
        line-height: 0.5rem;
        text-align: justify;
      }
    }
  }
}

.cert-block {
  text-align: left;
  
  .title {
    font-size: 0.4rem;
    color: $primary;
    margin-bottom: 0.65rem;
    font-weight: 700;
    text-align: center;
    font-family: var(--font-montserrat);
    font-style: italic;
  }

  .cert-content-wrapper {
    margin-left: 2.43rem;
    margin-right: 2.43rem;  
    padding-bottom: 1.21rem;

    .cert-info {
      margin: 0; 
      text-align: justify;
      
      .text {
        font-size: 0.24rem;
        line-height: 0.5rem;
        color: #000000;
        margin-bottom: 0.2rem;
        
        &.intro {
          font-weight: 600;
          font-size: 0.34rem;
          margin-bottom: 0.1rem;
        }
      }
    }
  }
}

.business-scope {
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 0.4rem;
  width: 100%;
  
  .scope-col {
    overflow: hidden;
    
    p {
      margin: 0;
      font-size: 0.24rem;
      line-height: 0.52rem;
      color: $text-main;
      text-align: justify;
      word-break: break-word;
      hyphens: auto;
    }
  }
}

.contact-btn-container {
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
}

.btn-learn {
  display: inline-flex;
  align-items: center;
  gap: 0.13rem;
  padding: 0.12rem 0.28rem;
  border: none;
  border-radius: 0.04rem;
  font-size: 0.16rem;
  font-weight: 500;
  cursor: pointer;
  transition: $transition;
  width: fit-content;
  background: #fff;
  
  .btn-arrow {
    width: 0.56rem;
    height: 0.13rem;
    object-fit: contain;
    transition: $transition;
  }

  &.primary {
    background: #fff;
    color: #000;
    border: 1px solid #000;
    &:hover {
      background: $primary-hover;
      .btn-arrow { transform: translateX(0.05rem); }
    }
  }

  &.outline {
    background: #fff;
    color: $text-main;
    border: 0.01rem solid $border;
    &:hover {
      background: $primary;
      color: #fff;
      border-color: $primary;
      .btn-arrow { transform: translateX(0.05rem); }
    }
  }
}

.feature-row {
  display: flex;
  gap: $gap;
  align-items: flex-start;
  
  &.reverse {
    flex-direction: row-reverse;
  }
  
  .media-box, .text-box {
    flex: 1;
    min-width: 0; 
  }
  
  .media-box {
    img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: $radius;
      box-shadow: 0 0.04rem 0.1rem rgba(0,0,0,0.08);
      background: $bg-light;
      aspect-ratio: 867 / 370;
    }
  }
  
  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    .subtitle {
      font-weight: 600;
      font-size: 0.24rem;
      color: #000000;
      line-height: 0.5rem;
      text-align: justify;
    }
    
    .text {
      font-size: 0.16rem;
      color: $text-sub;
      line-height: 1.6;
    }
  }
}
.company-info{
  font-weight: 400;
  font-size: 0.24rem;
  color: $text-main;
  line-height: 0.52rem;
  text-align: justify;
}

// 5. 证书网格 (Grid 布局 - 反向交错版：第1、3张下沉)
.cert-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 0.2rem;
  margin-top: 0.4rem;
  width: 100%;
  
  .cert-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: contain;
      border-radius: $radius;
      box-shadow: 0 0.04rem 0.1rem rgba(0,0,0,0.05);
      background: #fff;
    }
    
    span {
      display: none; 
    }

    &:nth-child(1),
    &:nth-child(3) {
      align-self: start;
      transform: translateY(0.98rem);
    }
    
    // 第 2、4 张保持原位
    &:nth-child(2),
    &:nth-child(4) {
      align-self: start;
    }
  }
}

// ============================================
// 响应式适配
// ============================================

// 大屏 (1440px 及以上)
@media screen and (min-width: 1440px) {
  .container {
    padding-top: 0.8rem;
    gap: 0.6rem;
  }
  
  .about-block, .cert-block {
    .title {
      font-size: 0.5rem;
      margin-bottom: 0.8rem;
    }
    
    .text {
      font-size: 0.4rem;
      line-height: 0.6rem;
      margin-bottom: 0.3rem;
      
      &.highlight {
        font-size: 0.55rem;
        line-height: 0.65rem;
      }
    }
  }
  
  .business-scope {
    gap: 0.6rem;
    
    .scope-col {
      p {
        font-size: 0.28rem;
        line-height: 0.6rem;
      }
    }
  }
  
  .contact-btn-container {
    margin: 0.8rem 0;
  }
  
  .btn-learn {
    font-size: 0.32rem;
    padding: 0.22rem 0.41rem 0.17rem 0.75rem;
    
    .btn-arrow {
        width: 0.71rem;
        height: 0.16rem;
    }
  }
  
  .feature-row {
    gap: 0.6rem;
    
    .subtitle {
      font-size: 0.35rem;
      margin-bottom: 0.2rem;
    }
    
    .text {
      font-size: 0.18rem;
    }
  }
  
  .cert-grid {
    gap: 0.3rem;
    margin-top: 0.3rem;
    
    .cert-item {
      span {
        font-size: 0.14rem;
      }
    }
  }
}

// 平板及以下 (< 1200px)
@media screen and (max-width: 1200px) {
  .container {
    max-width: 14.4rem;
    padding-top: 0.5rem;
    gap: 0.35rem;
  }
  
  .about-block, .cert-block {
    .title {
      font-size: 0.38rem;
      margin-bottom: 0.5rem;
    }
    
    .text {
      font-size: 0.32rem;
      line-height: 0.48rem;
      margin-bottom: 0.18rem;
      
      &.highlight {
        font-size: 0.45rem;
        line-height: 0.55rem;
      }
    }
  }
  
  .business-scope {
    gap: 0.35rem;
    
    .scope-col {
      p {
        font-size: 0.24rem;
        line-height: 0.5rem;
      }
    }
  }
  
  .contact-btn-container {
    margin: 0.4rem 0;
  }
  
  .btn-learn {
    font-size: 0.32rem;
    padding: 0.22rem 0.41rem 0.17rem 0.75rem;
    
    .btn-arrow {
        width: 0.71rem;
        height: 0.16rem;
    }
  }
  
  .feature-row {
    gap: 0.35rem;
    
    .subtitle {
      font-size: 0.26rem;
      margin-bottom: 0.14rem;
    }
    
    .text {
      font-size: 0.15rem;
    }
  }
  
  .cert-grid {
    gap: 0.18rem;
    margin-top: 0.18rem;
    
    .cert-item {
      span {
        font-size: 0.11rem;
      }
    }
  }
}

// 平板及以下 (< 900px)
@media screen and (max-width: 900px) {
  .business-scope {
    grid-template-columns: 1fr; 
    gap: 0.2rem;
  }

  .feature-row, .feature-row.reverse {
   
    .media-box {
      img {
        // aspect-ratio: 2/1; 
      }
    }
  }
  
//  .cert-grid {
//     // grid-template-columns: repeat(2, 1fr); 
    
//     .cert-item {
//       // 取消所有偏移
//       &:nth-child(1),
//       &:nth-child(2),
//       &:nth-child(3),
//       &:nth-child(4) {
//         transform: none !important;
//       }
//     }
//   }
  
  .about-block{
    .title {
      font-size: 0.5rem;
    }
  }
  .cert-block {
    background-color: #f7f7f7;
    .title {
      font-size: 0.5rem;
      font-family:var(--font-montserrat) ;
      font-style: italic;
    }
  }
  // 响应式按钮样式
  .btn-learn {
      font-size: 0.32rem;
      padding: 0.22rem 0.41rem 0.17rem 0.75rem;
    
    .btn-arrow {
        width: 0.71rem;
        height: 0.16rem;
    }
  }
}

// 手机及以下 (< 480px)
@media screen and (max-width: 480px) {
  .container {
    padding: 0.4rem 0.15rem;
  }
  
  .about-block, .cert-block {
    .title {
      font-size: 0.3rem;
    }
    .text {
      font-size: 0.14rem;
    }
  }
  
  .feature-row {
    .text-box {
      .subtitle {
        font-size: 0.24rem;
      }
      p{
        font-weight: 400;
        font-size: 0.24rem;
        color: #000000;
        line-height: 0.52rem;
        text-align: justify;
    }
  }
}
.cert-grid {
    grid-template-columns: 1fr; 
    
    .cert-item {
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        transform: none !important;
      }
    }
  }
  
  // 手机端按钮调整
  .btn-learn {
    .btn-arrow {
        width: 0.71rem;
        height: 0.16rem;
    }
  }
}
</style>