import React from 'react'
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
  Target,
} from 'lucide-react'

const links = {
  github: 'https://github.com/nicolasBoth',
  linkedin: 'https://www.linkedin.com/in/nicolas-both/',
  email: 'mailto:nicolasboth07@gmail.com',
}

const stack = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python']

const highlights = [
  {
    icon: Target,
    title: 'Objetivo claro',
    text: 'Busco minha primeira oportunidade como estagiário em desenvolvimento web, com vontade de aprender em time e contribuir desde cedo.',
  },
  {
    icon: BookOpen,
    title: 'Aprendizado constante',
    text: 'Tenho rotina de estudos em lógica, estruturas básicas, Python e desafios de programação para fortalecer minha base técnica.',
  },
  {
    icon: Sparkles,
    title: 'Perfil prático',
    text: 'Gosto de transformar estudo em projeto, organizar ideias no GitHub e evoluir com feedback, boas práticas e código real.',
  },
]

const projects = [
  {
    name: 'Tecboard',
    description:
      'Projeto desenvolvido durante o curso de Front End da Alura, com foco em estrutura HTML, estilo CSS e composição visual.',
    techs: ['HTML', 'CSS'],
    href: 'https://github.com/nicolasBoth/tecboard',
    status: 'Repositório público',
  },
  {
    name: 'Jogo da Velha',
    description:
      'Projeto de prática para exercitar lógica de programação, regras de jogo e manipulação de estado usando Python.',
    techs: ['Python', 'Lógica'],
    href: links.github,
    status: 'Em evolução',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
          <a className="brand" href="#inicio" aria-label="Ir para o início">
          NB
        </a>

        <nav className="main-nav" aria-label="Navegacao principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-background" aria-hidden="true" />
          <div className="hero-content">
            <div className="profile-media">
              <img
                src="https://avatars.githubusercontent.com/u/257862905?v=4"
                alt="Foto de perfil de Nicolas Both"
              />
            </div>

            <div className="hero-copy">
              <p className="eyebrow">Estudante de ADS no SENAC-RS</p>
              <h1>Nicolas Both</h1>
              <p className="hero-lead">
                Futuro desenvolvedor full-stack em busca de estágio para aprender
                com um time experiente, contribuir com interfaces bem construídas
                e crescer escrevendo código de verdade.
              </p>

              <div className="hero-meta" aria-label="Informacoes rapidas">
                <span>
                  <MapPin size={18} aria-hidden="true" />
                  Gravataí, RS
                </span>
                <span>
                  <Rocket size={18} aria-hidden="true" />
                  Remoto ou híbrido
                </span>
              </div>

              <div className="hero-actions">
                <a className="button primary" href={links.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={20} aria-hidden="true" />
                  LinkedIn
                </a>
                <a className="button secondary" href={links.github} target="_blank" rel="noreferrer">
                  <Github size={20} aria-hidden="true" />
                  GitHub
                </a>
                <a className="icon-button" href={links.email} aria-label="Enviar email">
                  <Mail size={21} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section intro-section" id="sobre">
          <div className="section-heading">
            <p className="eyebrow">Sobre mim</p>
            <h2>Base técnica em formação, mentalidade de crescimento e foco em desenvolvimento web.</h2>
          </div>

          <div className="intro-grid">
            <div className="intro-text">
              <p>
                Estou cursando Análise e Desenvolvimento de Sistemas e construindo
                meu caminho como desenvolvedor full-stack. Minha prioridade agora e
                entrar em um ambiente onde eu possa evoluir com boas práticas,
                participar de entregas reais e aprender com pessoas mais experientes.
              </p>
              <p>
                No momento, estudo front-end com React, reforço lógica de programação
                com desafios e desenvolvo pequenos projetos para consolidar os
                fundamentos que aparecem no dia a dia de desenvolvimento.
              </p>
            </div>

            <div className="stack-panel" aria-label="Tecnologias">
              <div className="panel-title">
                <Code2 size={20} aria-hidden="true" />
                Stack atual
              </div>
              <div className="stack-list">
                {stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="highlight-grid">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article className="highlight-card" key={title}>
                <Icon size={24} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projetos">
          <div className="section-heading">
            <p className="eyebrow">Projetos</p>
            <h2>Trabalhos e estudos que mostram evolução prática.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div>
                  <p className="project-status">{project.status}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-footer">
                  <div className="tech-list" aria-label={`Tecnologias de ${project.name}`}>
                    {project.techs.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.name}`}>
                    Ver projeto
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="contact-content">
            <p className="eyebrow">Disponível para estágio</p>
            <h2>Vamos conversar sobre uma primeira oportunidade em desenvolvimento?</h2>
            <p>
              Posso contribuir com disposição para aprender, organização nos estudos
              e vontade de participar de projetos que impactem usuários reais.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button primary" href={links.email}>
              <Mail size={20} aria-hidden="true" />
              Enviar email
            </a>
            <a className="button secondary" href={links.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={20} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
