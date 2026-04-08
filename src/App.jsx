import { useState, useEffect, useRef } from 'react'
import './App.css'
import heroImg from './assets/photo.jpeg'

function useScrollReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function Reveal({ children, className = '' }) {
  const ref = useScrollReveal()
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

function App() {
  const [dark, setDark] = useState(true)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    document.body.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ── BACKGROUND BLOBS ── */}
      <div className="bg-blobs" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <span className="navbar-logo">&lt;Letícia Felgueiras /&gt;</span>
        <ul className="navbar-links">
          <li><a href="#hero">Início</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
        <div className="navbar-right">
          <button
            className="theme-toggle"
            onClick={() => setDark(d => !d)}
            aria-label="Alternar tema"
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero">
        <div className="hero-container">
          <div className="hero-text">
            <p className="hero-greeting">Olá, eu sou a</p>
            <h1><span className="gradient-text">Letícia</span><br />Felgueiras</h1>
            <p className="hero-role">Engenheira de Software</p>
            <p className="hero-sub">
              Transformando ideias em experiências digitais elegantes, escaláveis e centradas no usuário.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">Explorar Projetos</a>
              <a href="#contact" className="btn btn-outline">Fale Comigo</a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img src={heroImg} className="hero-img" alt="Foto de perfil" />
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="about">
        <div className="section-inner">
          <Reveal>
            <h2 className="section-title">Sobre <span className="gradient-text">Mim</span></h2>
            <p className="section-subtitle">Conheça minha trajetória e o que me move como engenheira.</p>
          </Reveal>
          <Reveal>
            <div className="about-content">
              <div className="about-text">
                <p>
                  Sou engenheira de software, apaixonada por tecnologia, por construir soluções úteis e por entender como sistemas podem gerar impacto real na vida das pessoas.
                </p>
                <p>
                  Atualmente, atuo na Globo, no time de Experiência Web, desenvolvendo aplicações web e APIs que suportam jornadas digitais para milhões de usuários. Tenho grande interesse por arquitetura de sistemas, escalabilidade, experiência do usuário e análise de dados.
                </p>
                <p>
                  Neste espaço, compartilho um pouco da minha trajetória, dos projetos que desenvolvi, das tecnologias com que trabalho e dos aprendizados que venho acumulando ao longo do caminho.
                </p>
                <a href="https://www.canva.com/design/DAHAaLG298A/C4Efhrb3srEkGuTXyRyuAA/view?utm_content=DAHAaLG298A&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h32662dc5df" className="btn btn-primary" style={{ marginTop: '16px' }}>Download CV</a>
              </div>
              <div className="about-info">
                <div className="info-item">
                  <span className="info-label">Nome</span>
                  <span>Letícia Felgueiras</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Localização</span>
                  <span>Rio de Janeiro, BR</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <span>leticia.felgueirass@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Disponível</span>
                  <span className="badge-available">Sim ✓</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── HABILIDADES ── */}
      <section id="skills">
        <div className="section-inner">
          <Reveal>
            <h2 className="section-title">O que eu <span className="gradient-text">domino</span></h2>
            <p className="section-subtitle">Tecnologias e ferramentas que fazem parte do meu dia a dia.</p>
          </Reveal>
          <Reveal>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Front-End</h3>
                <div className="skill-tags">
                  <span className="tag">HTML5</span>
                  <span className="tag">CSS3</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">React</span>
                  <span className="tag">Angular</span>
                  <span className="tag">TypeScript</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Back-End</h3>
                <div className="skill-tags">
                  <span className="tag">Golang</span>
                  <span className="tag">Java</span>
                  <span className="tag">Kotlin</span>
                  <span className="tag">REST APIs</span>
                  <span className="tag">Python</span>
                  <span className="tag">C++</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Dados & Versionamento</h3>
                <div className="skill-tags">
                  <span className="tag">SQL</span>
                  <span className="tag">Git</span>
                  <span className="tag">GitHub</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROJETOS ── */}
      <section id="projects">
        <div className="section-inner">
          <Reveal>
            <h2 className="section-title">Projetos em <span className="gradient-text">destaque</span></h2>
            <p className="section-subtitle">Soluções reais, do conceito ao deploy.</p>
          </Reveal>
          <Reveal>
            <div className="project-list">
            <div className="project-card">
              <div className="project-card-header">01</div>
              <h3>Previsão de gastos com apostas online</h3>
              <p>Desenvolvi uma aplicação com React, FastAPI e Scikit-Learn para prever gastos com apostas online no Brasil a partir de dados públicos. O projeto foi construído em arquitetura de microserviços, integrando front-end, APIs REST e machine learning para gerar insights sobre o perfil dos apostadores e contribuir com análises voltadas a conscientização e políticas públicas.</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Python com FastAPI</span>
                <span className="tag">Scikit-Learn</span>
              </div>
              <div className="project-links">
                <a href="https://a3-matematica-react.vercel.app/" target="_blank" rel="noreferrer">Ver Projeto →</a>
                <a href="https://github.com/orgs/Brazilian-Online-Betting-Analysis/repositories" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-card-header">02</div>
              <h3>Projeto de autenticação com Passkeys</h3>
              <p>Participei da implementação de Passkeys no ecossistema Globo, contribuindo para a modernização do fluxo de autenticação de milhões de usuários. A solução substitui senhas tradicionais por um modelo baseado em criptografia de chave pública, biometria e protocolos como WebAuthn e CTAP2, proporcionando uma experiência de login mais segura, fluida e escalável.</p>
              <div className="project-tags">
                <span className="tag">TypeScript</span>
                <span className="tag">React</span>
                <span className="tag">WebAuthn</span>
                <span className="tag">Golang</span>
              </div>
              <div className="project-links">
                <a href="https://authx.globoid.globo.com/passkeys" target="_blank" rel="noreferrer">Ver Projeto</a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-card-header">03</div>
              <h3>Nenem ama muito a maezinha</h3>
              <p>mesmo vc sendo brava, vc é nenezinha </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">Ver Projeto →</a>
                <a href="#" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contact">
        <div className="section-inner">
          <Reveal>
            <h2 className="section-title">Vamos <span className="gradient-text">conversar</span>?</h2>
            <p className="section-subtitle">Tem uma ideia, proposta ou só quer trocar um papo? Estou a um clique.</p>
          </Reveal>
          <Reveal>
            <div className="contact-grid">
              <a href="mailto:leticia.felgueirass@gmail.com" className="contact-card">
                <span className="contact-icon">📧</span>
                <span>leticia.felgueirass@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/let%C3%ADcia-felgueiras-20550926b/?locale=pt_BR" target="_blank" rel="noreferrer" className="contact-card">
              <span className="contact-icon">in</span>
              <span>LinkedIn</span>
            </a>
            <a href="https://wa.me/5521999034321" target="_blank" rel="noreferrer" className="contact-card">
              <span className="contact-icon">📱</span>
              <span>Whatsapp</span>
            </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <p>© 2026 Letícia Felgueiras — Feito com React & Vite</p>
      </footer>

      {/* ── SCROLL TO TOP ── */}
      <button
        className={`scroll-top${showTop ? ' visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Voltar ao topo"
      >
        ↑
      </button>
    </>
  )
}

export default App
