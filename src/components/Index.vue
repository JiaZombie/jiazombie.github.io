<script setup>

</script>
<template>
  <div class="app-container">
    <!-- Background Taiji-Bagua SVG -->
  <svg class="background-symbol" viewBox="-10 -10 420 420">
    <defs>
        <filter id="ink-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
        </filter>
        
        <filter id="golden-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
            <feOffset dx="0" dy="0" result="offsetblur"/>
            <feFlood flood-color="#FFD700" flood-opacity="1" result="color"/>
            <feComposite in="color" in2="offsetblur" operator="in" result="shadow"/>
            <feComposite in="SourceGraphic" in2="shadow" operator="over"/>
            <feGaussianBlur in="shadow" stdDeviation="3" result="glow1"/>
            <feGaussianBlur in="shadow" stdDeviation="5" result="glow2"/>
            <feComposite in="glow1" in2="glow2" operator="over" result="glow"/>
            <feComposite in="SourceGraphic" in2="glow" operator="over"/>
        </filter>
        
        <!-- 水墨渐变 -->
        <radialGradient id="ink-black">
            <stop offset="0%" style="stop-color:#000000"/>
            <stop offset="80%" style="stop-color:#111111"/>
            <stop offset="100%" style="stop-color:#333333"/>
        </radialGradient>
        
        <radialGradient id="ink-white">
            <stop offset="0%" style="stop-color:#ffffff"/>
            <stop offset="80%" style="stop-color:#f5f5f5"/>
            <stop offset="100%" style="stop-color:#eeeeee"/>
        </radialGradient>
    </defs>
    
    <!-- Bagua Circle -->
    <circle class="bagua-circle" cx="200" cy="200" r="170" fill="none" stroke="#333" stroke-width="2"/>
    
    <!-- Taiji (Yin-Yang) -->
    <path class="taiji-border" d="M200,30 A170,170 0 0,1 200,370" stroke="#FFD700" stroke-width="1" fill="url(#ink-white)" filter="url(#ink-blur)"/>
    <path class="taiji" d="M200,30 A170,170 0 0,1 200,370 A85,85 0 0,1 200,200 A85,85 0 0,0 200,30" fill="url(#ink-white)" filter="url(#ink-blur)"/>
    <path class="taiji" d="M200,30 A170,170 0 0,0 200,370 A85,85 0 0,0 200,200 A85,85 0 0,1 200,30" fill="url(#ink-black)" filter="url(#ink-blur)"/>
    <circle cx="200" cy="115" r="17" fill="url(#ink-black)" filter="url(#ink-blur)"/>
    <circle cx="200" cy="285" r="17" fill="url(#ink-white)" filter="url(#ink-blur)"/>
    
    <!-- Bagua Trigrams -->
    <g>
        <!-- 乾 (Heaven) - South -->
        <g transform="translate(200,5)">
            <line x1="-15" y1="-8" x2="15" y2="-8" stroke="#333" stroke-width="2"/>
            <line x1="-15" y1="0" x2="15" y2="0" stroke="#333" stroke-width="2"/>
            <line x1="-15" y1="8" x2="15" y2="8" stroke="#333" stroke-width="2"/>
        </g>
        
        <!-- 兌 (Lake) - Southeast -->
        <g transform="translate(345,70) rotate(45)">
            <line x1="-15" y1="-8" x2="15" y2="-8" stroke="#333" stroke-width="2"/>
            <line x1="-15" y1="0" x2="15" y2="0" stroke="#333" stroke-width="2"/>
            <line x1="-15" y1="8" x2="-5" y2="8" stroke="#333" stroke-width="2"/>
            <line x1="5" y1="8" x2="15" y2="8" stroke="#333" stroke-width="2"/>
        </g>
        
        <!-- 離 (Fire) - East -->
        <g transform="translate(390,200) rotate(90)">
            <line x1="-15" y1="-8" x2="15" y2="-8" stroke="#333" stroke-width="2"/>
            <line x1="-15" y1="0" x2="-5" y2="0" stroke="#333" stroke-width="2"/>
            <line x1="5" y1="0" x2="15" y2="0" stroke="#333" stroke-width="2"/>
            <line x1="-15" y1="8" x2="15" y2="8" stroke="#333" stroke-width="2"/>
        </g>
        
        <!-- 震 (Thunder) - Northeast -->
        <g transform="translate(340,340) rotate(135)">
            <line x1="-15" y1="-8" x2="-5" y2="-8" stroke="#333" stroke-width="2"/>
            <line x1="5" y1="-8" x2="15" y2="-8" stroke="#333" stroke-width="2"/>
            <line x1="-15" y1="0" x2="-5" y2="0" stroke="#333" stroke-width="2"/>
            <line x1="5" y1="0" x2="15" y2="0" stroke="#333" stroke-width="2"/>
            <line x1="-15" y1="8" x2="15" y2="8" stroke="#333" stroke-width="2"/>
        </g>
        
        <!-- 巽 (Wind) - Southwest -->
        <g transform="translate(60,340) rotate(225)">
            <line x1="-15" y1="-8" x2="15" y2="-8" stroke="#333" stroke-width="2"/>
            <line x1="-15" y1="0" x2="15" y2="0" stroke="#333" stroke-width="2"/>
            <line x1="-15" y1="8" x2="-5" y2="8" stroke="#333" stroke-width="2"/>
            <line x1="5" y1="8" x2="15" y2="8" stroke="#333" stroke-width="2"/>
        </g>
        
        <!-- 坎 (Water) - West -->
        <g transform="translate(0,200) rotate(270)">
            <line x1="-15" y1="-8" x2="15" y2="-8" stroke="#333" stroke-width="2"/>
            <line x1="-15" y1="0" x2="-5" y2="0" stroke="#333" stroke-width="2"/>
            <line x1="5" y1="0" x2="15" y2="0" stroke="#333" stroke-width="2"/>
            <line x1="-15" y1="8" x2="15" y2="8" stroke="#333" stroke-width="2"/>
        </g>
        
        <!-- 艮 (Mountain) - Northwest -->
        <g transform="translate(60,60) rotate(315)">
            <line x1="-15" y1="-8" x2="-5" y2="-8" stroke="#333" stroke-width="2"/>
            <line x1="5" y1="-8" x2="15" y2="-8" stroke="#333" stroke-width="2"/>
            <line x1="-15" y1="0" x2="15" y2="0" stroke="#333" stroke-width="2"/>
            <line x1="-15" y1="8" x2="15" y2="8" stroke="#333" stroke-width="2"/>
        </g>
        
        <!-- 坤 (Earth) - North -->
        <g transform="translate(200,390)">
            <line x1="-15" y1="-8" x2="-5" y2="-8" stroke="#333" stroke-width="2"/>
            <line x1="5" y1="-8" x2="15" y2="-8" stroke="#333" stroke-width="2"/>
            <line x1="-15" y1="0" x2="-5" y2="0" stroke="#333" stroke-width="2"/>
            <line x1="5" y1="0" x2="15" y2="0" stroke="#333" stroke-width="2"/>
            <line x1="-15" y1="8" x2="-5" y2="8" stroke="#333" stroke-width="2"/>
            <line x1="5" y1="8" x2="15" y2="8" stroke="#333" stroke-width="2"/>
        </g>
    </g>
  </svg>
    <!-- Main Content -->
    <div class="content">
      <h1 class="site-title">
        <span class="title-yin">Now</span><span class="title-yang">Jar</span>
      </h1>
      <div class="navigation">
        <router-link to="/time-river" class="nav-link">光阴长河</router-link>
        <a href="https://blog.jiazombie.cn" target="_blank" class="nav-link">藏书楼</a>
      </div>
    </div>
    
    <!-- 添加页脚 -->
    <footer class="footer">
      <div class="copyright">© jiazombie.cn All rights reserved</div>
      <div class="beian">
        <a href="https://beian.miit.gov.cn" target="_blank">蜀ICP备2022007722号</a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  overflow: hidden;
  position: relative;
  margin: 0;
  padding: 0;
}

.background-symbol {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(80vw, 80vh);
  height: min(80vw, 80vh);
  opacity: 0.1;
  animation: rotate 60s linear infinite;
  z-index: 0;
}

@keyframes rotate {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes glowBorder {
  0% { 
    filter: none;
    opacity: 0.1;
    stroke: #333;
  }
  50% {
    filter: url(#golden-glow);
    opacity: 1;
    stroke: #FFD700;
  }
  100% { 
    filter: none;
    opacity: 0.1;
    stroke: #333;
  }
}

.content {
  z-index: 1;
  text-align: center;
}

.site-title {
  font-size: 4rem;
  margin-bottom: 2rem;
  font-weight: bold;
  letter-spacing: 0.2em;
}

.title-yin {
  color: #000;
}

.title-yang {
  color: #fff;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}

.navigation {
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.nav-link {
  font-size: 1.5rem;
  color: #333;
  text-decoration: none;
  padding: 1rem 2rem;
  border: 2px solid #333;
  border-radius: 30px;
  transition: all 0.5s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 120%;
  background: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.6) 40%,
    rgba(0, 0, 0, 0.4) 70%,
    transparent 100%
  );
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
  opacity: 0;
  mix-blend-mode: multiply;
  filter: blur(2px);
  border-radius: inherit;
}

.nav-link:hover {
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.nav-link:hover::before {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}

@keyframes inkSpread {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
}

.nav-link::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 120%;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.6) 0%,
    transparent 100%
  );
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  z-index: -1;
  animation: inkSpread 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-play-state: paused;
  border-radius: inherit;
}

.nav-link:hover::after {
  animation-play-state: running;
}

/* Responsive Design */
@media (max-width: 768px) {
  .site-title {
    font-size: 3rem;
  }
  
  .nav-link {
    font-size: 1.2rem;
    padding: 0.8rem 1.6rem;
  }
}

.trigram line {
  transition: stroke 0.3s ease;
}

/* 确保动画能影响到所有卦象的线条 */
.trigram.animate line {
  stroke: #FFD700;
}

.footer {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
  z-index: 1;
}

.copyright {
  margin-bottom: 8px;
}

.beian a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.beian a:hover {
  color: #333;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .footer {
    font-size: 0.8rem;
    bottom: 10px;
  }
}
</style>