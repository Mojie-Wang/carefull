
const DESIGN_WIDTH = 1920;

/**
 * 基准字体大小 (通常设为 100，方便计算：36px = 0.36rem)
 * 也可以设为 16，那 36px = 2.25rem
 */
const BASE_FONT_SIZE = 100;

function setRemUnit() {
  const screenWidth = document.documentElement.clientWidth || window.innerWidth;

  const scale = screenWidth / DESIGN_WIDTH;
  
  // 计算新的 html font-size
  const newFontSize = BASE_FONT_SIZE * scale;
  
  document.documentElement.style.fontSize = `${newFontSize}px`;
}

// 初始化
setRemUnit();

// 监听窗口变化 (防抖处理，避免频繁重绘)
let timer: any;
window.addEventListener('resize', () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    setRemUnit();
  }, 100);
});

// 兼容横竖屏切换
window.addEventListener('orientationchange', () => {
  setRemUnit();
});

export default setRemUnit;