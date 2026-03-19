<template>
  <div class="page-container">
     <!-- Banner 区域 -->
    <section class="banner">
      <div class="banner-content">
        <img 
          :src="banner" 
          alt="Military Equipment" 
          class="banner-image"
        />
      </div>
    </section>
    <!-- 主体内容区 -->
    <main class="content">
      <section class="about-section">
        <h2>About Us</h2>
        <p class="company-intro">
          Shanghai Careful Technology Co., Ltd. was founded in 2005, is a high-tech enterprise specializing in R&D and the production of safety protection products.
        </p>
        <p class="company-desc">
          With years of manufacturing experience, our company adheres to the principle of "quality first, customer supreme". We have advanced equipment, excellent technical team, and modern management system. Our products are widely used in chemical, petroleum, electric power, metallurgy, construction, etc.
        </p>
        <button class="contact-btn">Contact Us</button>
      </section>

      <!-- 图片 + 文字并排布局 -->
      <section class="image-text-row">
        <div class="image-block">
          <img :src="produce1" alt="Factory Workshop 1" />
        </div>
        <div class="text-block">
          <h3>Advanced Production Equipment</h3>
          <p>
            The company has introduced international advanced CNC machining centers, automatic welding robots, precision testing instruments, and other automated production lines. This ensures product consistency, reliability, and efficiency.
          </p>
          <p>
            Our factory covers an area of over 10,000 square meters, equipped with clean rooms, dust-free workshops, and strict quality control systems. All products undergo rigorous inspection before leaving the factory.
          </p>
        </div>
      </section>

      <section class="image-text-row reverse">
        <div class="text-block">
          <h3>Professional Technical Team</h3>
          <p>
            We have a team of more than 50 engineers and technicians, including senior experts from domestic research institutes and universities. They are responsible for new product development, process optimization, and technical support.
          </p>
          <p>
            The company also collaborates with multiple universities and scientific research institutions to continuously innovate and improve product performance. Our R&D investment accounts for over 8% of annual revenue.
          </p>
        </div>
        <div class="image-block">
          <img :src="produce2" alt="Factory Workshop 2" />
        </div>
      </section>

      <section class="certificate-section">
        <h2>Qualification Certificate</h2>
        <p class="cert-intro">
          Quality Management System Certification: ISO9001:2015, Environmental Management System: ISO14001:2015, Occupational Health and Safety: ISO45001:2018.
        </p>
        <div class="cert-grid">
          <div class="cert-item">
            <img :src="patent1" alt="Certificate 1" />
            <p>ISO9001</p>
          </div>
          <div class="cert-item">
            <img :src="patent2" alt="Certificate 2" />
            <p>ISO14001</p>
          </div>
          <div class="cert-item">
            <img :src="patent3" alt="Certificate 3" />
            <p>ISO45001</p>
          </div>
          <div class="cert-item">
            <img :src="patent4" alt="Certificate 4" />
            <p>CE Marking</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import banner from '@/assets/aboutus/banner.png';
import patent1 from '@/assets/aboutus/patent1.png';
import patent2 from '@/assets/aboutus/patent2.png';
import patent3 from '@/assets/aboutus/patent3.png';
import patent4 from '@/assets/aboutus/patent4.png';
import produce1 from '@/assets/aboutus/produce1.png'
import produce2 from '@/assets/aboutus/produce2.png';

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div {
  font-family: var(--font-montserrat);
  line-height: 1.6;
  color: #000;
  background-color: #fff;
}

.page-container {
  width: var(--container); 
  margin: 0 auto;
  position: relative;
  overflow-x: visible; 
}

.banner {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 400px;
    overflow: hidden;
    background-color: #f5f5f5;
}

.banner-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 0; 
  width: 100%;
}

.about-section h2 {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #007bff;
}

.company-intro {
  font-weight: bold;
  margin-bottom: 10px;
}

.contact-btn {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.contact-btn:hover {
  background-color: #0056b3;
}

.image-text-row {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.image-text-row.reverse {
  flex-direction: row-reverse;
}

.image-block {
  flex: 1;
  min-width: 300px;
}

.image-block img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: block;
}

.text-block {
  flex: 1;
  min-width: 300px;
}

.text-block h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #007bff;
}

.text-block p {
  margin-bottom: 10px;
  text-align: justify;
}

.certificate-section h2 {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #007bff;
}

.cert-intro {
  margin-bottom: 20px;
  font-style: italic;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.cert-item {
  text-align: center;
}

.cert-item img {
  width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  background: #f9f9f9;
  display: block;
  margin: 0 auto;
}

.cert-item p {
  margin-top: 8px;
  font-weight: bold;
  color: #555;
}

.footer {
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  text-align: center;
  color: #777;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .banner {
    height: 250px;
  }

  .image-text-row,
  .image-text-row.reverse {
    flex-direction: column;
  }

  .image-block,
  .text-block {
    min-width: 100%;
  }
  
  .cert-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .cert-grid {
    grid-template-columns: 1fr;
  }
  
  .about-section h2,
  .certificate-section h2 {
    font-size: 1.5rem;
  }
}
</style>