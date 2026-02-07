---
slug: /
sidebar_position: 1
title: 首页
hide_table_of_contents: true
---

<div className="home">

<header className="home-hero">
  <div className="hero-decoration"></div>
  <span className="hero-label">个人知识库</span>
  <h1>技术沉淀，持续精进</h1>
  <p className="hero-subtitle">
    系统化整理 Java 后端技术栈，记录学习与成长的点滴。<br/>
    在这里，知识不再零散，思考得以沉淀。
  </p>
</header>

<div className="card-grid">
  <a className="card" href="/java/">
    <div className="card-number">01</div>
    <div className="card-content">
      <h3>Java 基础</h3>
      <p>语言核心、JVM 原理、并发编程、集合框架——构建扎实的技术根基</p>
    </div>
    <div className="card-arrow">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 17L17 7M17 7H7M17 7V17"/>
      </svg>
    </div>
  </a>

  <a className="card" href="/middleware/">
    <div className="card-number">02</div>
    <div className="card-content">
      <h3>框架与中间件</h3>
      <p>Spring 全家桶、MyBatis、Redis、消息队列——掌握企业级开发利器</p>
    </div>
    <div className="card-arrow">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 17L17 7M17 7H7M17 7V17"/>
      </svg>
    </div>
  </a>

  <a className="card" href="/project/">
    <div className="card-number">03</div>
    <div className="card-content">
      <h3>项目实战</h3>
      <p>完整项目案例，从需求分析到部署上线——在实践中融会贯通</p>
    </div>
    <div className="card-arrow">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 17L17 7M17 7H7M17 7V17"/>
      </svg>
    </div>
  </a>

  <a className="card" href="/interview/">
    <div className="card-number">04</div>
    <div className="card-content">
      <h3>面试梳理</h3>
      <p>高频考点整理，核心知识速查——助力职业发展每一步</p>
    </div>
    <div className="card-arrow">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 17L17 7M17 7H7M17 7V17"/>
      </svg>
    </div>
  </a>
</div>

<footer className="home-footer">
  <blockquote>
    "学而不思则罔，思而不学则殆。"
  </blockquote>
</footer>

</div>

<style>
{`
.home {
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem 5rem;
}

/* Hero 区域 */
.home-hero {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  padding: 2rem 0;
}

.hero-decoration {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, transparent, var(--accent));
}

.hero-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--accent-light);
  border-radius: 20px;
}

[data-theme='dark'] .hero-label {
  border-color: var(--accent-dark);
}

.home-hero h1 {
  font-family: 'Noto Serif SC', Georgia, serif;
  font-size: 2.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--ifm-font-color-base);
  margin: 0 0 1.5rem;
  line-height: 1.3;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--warm-500, #7c756a);
  line-height: 1.9;
  margin: 0;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
}

[data-theme='dark'] .hero-subtitle {
  color: var(--warm-400, #a8a196);
}

/* 卡片网格 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: var(--warm-50, #faf9f7);
  border: 1px solid var(--warm-200, #e8e4de);
  border-radius: 12px;
  text-decoration: none;
  transition: all 250ms ease;
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent-light));
  opacity: 0;
  transition: opacity 250ms ease;
}

.card:hover {
  border-color: var(--accent);
  background: #fff;
  box-shadow: 0 8px 30px rgba(26, 24, 21, 0.08);
  transform: translateY(-2px);
}

.card:hover::before {
  opacity: 1;
}

[data-theme='dark'] .card {
  background: #1c1a17;
  border-color: var(--warm-800, #2d2a25);
}

[data-theme='dark'] .card:hover {
  background: var(--warm-800, #2d2a25);
  border-color: var(--accent);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.card-number {
  font-family: 'Noto Serif SC', Georgia, serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.card-content {
  flex: 1;
}

.card-content h3 {
  font-family: 'Noto Serif SC', Georgia, serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--ifm-font-color-base);
  margin: 0 0 0.75rem;
  letter-spacing: -0.01em;
}

.card-content p {
  font-size: 0.9375rem;
  color: var(--warm-500, #7c756a);
  margin: 0;
  line-height: 1.7;
}

[data-theme='dark'] .card-content p {
  color: var(--warm-400, #a8a196);
}

.card-arrow {
  margin-top: 1.5rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--warm-100, #f5f3f0);
  color: var(--warm-500, #7c756a);
  transition: all 250ms ease;
}

.card-arrow svg {
  width: 16px;
  height: 16px;
}

.card:hover .card-arrow {
  background: var(--accent);
  color: #fff;
  transform: translate(4px, -4px);
}

[data-theme='dark'] .card-arrow {
  background: var(--warm-800, #2d2a25);
  color: var(--warm-400, #a8a196);
}

[data-theme='dark'] .card:hover .card-arrow {
  background: var(--accent);
  color: #fff;
}

/* 底部引言 */
.home-footer {
  margin-top: 4rem;
  text-align: center;
}

.home-footer blockquote {
  font-family: 'Noto Serif SC', Georgia, serif;
  font-size: 1.125rem;
  font-style: italic;
  color: var(--warm-400, #a8a196);
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  position: relative;
}

.home-footer blockquote::before,
.home-footer blockquote::after {
  content: '';
  display: inline-block;
  width: 40px;
  height: 1px;
  background: var(--warm-300, #d4cfc6);
  vertical-align: middle;
  margin: 0 1rem;
}

[data-theme='dark'] .home-footer blockquote::before,
[data-theme='dark'] .home-footer blockquote::after {
  background: var(--warm-700, #433f38);
}

/* 响应式 */
@media (max-width: 768px) {
  .home {
    padding: 3rem 1.25rem 4rem;
  }

  .home-hero h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .card-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .card {
    padding: 1.5rem;
  }

  .home-footer blockquote {
    font-size: 1rem;
  }

  .home-footer blockquote::before,
  .home-footer blockquote::after {
    width: 24px;
    margin: 0 0.75rem;
  }
}

@media (max-width: 480px) {
  .home-hero h1 {
    font-size: 1.75rem;
  }

  .hero-label {
    font-size: 0.6875rem;
  }

  .card-content h3 {
    font-size: 1.125rem;
  }

  .card-content p {
    font-size: 0.875rem;
  }
}

/* 入场动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.home-hero {
  animation: fadeInUp 0.6s ease;
}

.card {
  animation: fadeInUp 0.6s ease;
  animation-fill-mode: both;
}

.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }
.card:nth-child(4) { animation-delay: 0.4s; }

.home-footer {
  animation: fadeInUp 0.6s ease;
  animation-delay: 0.5s;
  animation-fill-mode: both;
}
`}
</style>
