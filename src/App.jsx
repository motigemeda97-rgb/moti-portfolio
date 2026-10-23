
import './App.css'

const projects = [
  {
    number: '01',
    type: 'FULL-STACK WEB PROJECT',
    name: 'Afaan Oromoo Music Recommender',
    description:
      'A music discovery platform that recommends Afaan Oromoo songs using musical style, scale, mood, and energy.',
    tags: ['Python', 'Streamlit', 'Supabase'],
    link: 'https://afaan-oromoo-music-recommender.streamlit.app/',
    linkText: 'View live project ↗',
  },
  {
    number: '02',
    type: 'MACHINE LEARNING PROJECT',
    name: 'Student Score AI',
    description:
      'A learning project exploring how machine learning can estimate student scores from study-related data.',
    tags: ['Python', 'Scikit-learn', 'Machine Learning'],
    link: '',
    linkText: '',
  },
]

const skills = [
  'Python',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Git & GitHub',
  'Machine Learning',
]

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-mark">M</span>
          <span>moti<span className="accent">.dev</span></span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a className="nav-contact" href="#contact">Let's talk ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              SOFTWARE ENGINEERING STUDENT
            </div>

            <p className="eyebrow">HELLO, WORLD! I'M</p>

            <h1>
              Moti
              <br />
              <span className="name-accent">Gemeda.</span>
            </h1>

            <h2 className="hero-subtitle">
              Building today. <span>Engineering tomorrow.</span>
            </h2>

            <p className="hero-description">
              I'm a software engineering student passionate about building
              useful web applications and exploring the world of Artificial
              Intelligence and Machine Learning.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span>↗</span>
              </a>
              <a className="button button-secondary" href="#about">
                More about me
              </a>
            </div>

            <div className="hero-note">
              <span className="note-line" />
              <span>Learning consistently. Building with purpose.</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Developer introduction">
            <div className="visual-glow" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="code-card">
              <div className="code-topbar">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="file-name">moti.js</span>
                <span className="code-language">JS</span>
              </div>

              <div className="code-content">
                <p><span className="line-number">01</span> <span className="code-purple">const</span> developer = {'{'}</p>
                <p><span className="line-number">02</span> &nbsp; name: <span className="code-green">'Moti Gemeda'</span>,</p>
                <p><span className="line-number">03</span> &nbsp; role: <span className="code-green">'Software Engineer'</span>,</p>
                <p><span className="line-number">04</span> &nbsp; interests: [</p>
                <p><span className="line-number">05</span> &nbsp; &nbsp; <span className="code-green">'Web Development'</span>,</p>
                <p><span className="line-number">06</span> &nbsp; &nbsp; <span className="code-green">'Artificial Intelligence'</span>,</p>
                <p><span className="line-number">07</span> &nbsp; ],</p>
                <p><span className="line-number">08</span> &nbsp; mindset: <span className="code-green">'Keep learning'</span>,</p>
                <p><span className="line-number">09</span> {'}'}</p>
                <p className="code-last"><span className="line-number">10</span> <span className="code-purple">export default</span> developer<span className="cursor">▋</span></p>
              </div>

              <div className="code-footer">
                <span><span className="status-dot" /> Available for learning opportunities</span>
                <span>UTF-8</span>
              </div>
            </div>

            <div className="floating-badge badge-top">
              <span className="badge-icon">⌘</span>
              <span><strong>Clean code</strong><small>One step at a time</small></span>
            </div>

            <div className="floating-badge badge-bottom">
              <span className="ai-icon">✳</span>
              <span><strong>AI / ML</strong><small>Future direction</small></span>
            </div>
          </div>

          <a className="scroll-indicator" href="#about">
            <span className="scroll-mouse" />
            Scroll to explore
          </a>
        </section>

        <section className="about section" id="about">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Curiosity into <span className="accent">creation.</span></h2>
          </div>

          <div className="about-grid">
            <p className="about-lead">
              I believe every great engineer starts with a willingness to
              learn, experiment, and keep going.
            </p>
            <div className="about-detail">
              <p>
                I'm studying Software Engineering at Jimma University and
                building projects to turn what I learn into practical
                experience. My current interests include full-stack
                development, Python, and machine learning.
              </p>
              <p>
                My long-term goal is to grow into an AI engineer who builds
                meaningful technology and solves real problems.
              </p>
              <span className="quote">“Do not despise these small beginnings.”</span>
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Things I'm <span className="accent">building.</span></h2>
            <p className="section-description">
              Every project is a chance to learn something new and build
              something useful.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-type">{project.type}</span>
                  <span className="project-arrow">↗</span>
                </div>

                <div className="project-art" aria-hidden="true">
                  <span className="art-circle circle-one" />
                  <span className="art-circle circle-two" />
                  <span className="art-symbol">
                    {project.number === '01' ? '♫' : '∑'}
                  </span>
                  <span className="art-label">
                    {project.number === '01' ? 'MUSIC / DISCOVERY' : 'DATA / PREDICTION'}
                  </span>
                </div>

                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.linkText}
                  </a>
                ) : (
                  <span className="project-status">In development · Learning by building</span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">MY TOOLKIT</p>
            <h2>Skills I'm <span className="accent">growing.</span></h2>
            <p className="section-description">
              Technologies I'm learning and using as I build my projects.
            </p>
          </div>

          <div className="skills-list">
            {skills.map((skill, index) => (
              <span className="skill-pill" key={skill}>
                <span className="skill-index">{String(index + 1).padStart(2, '0')}</span>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>Let's build something <span className="accent">meaningful.</span></h2>
          <p>
            I'm growing my skills, exploring ideas, and always open to
            connecting with fellow learners and developers.
          </p>
          <a
            className="button button-primary"
            href="https://github.com/motigemeda97-rgb"
            target="_blank"
            rel="noreferrer"
          >
            Find me on GitHub <span>↗</span>
          </a>
          <a
  className="button button-secondary"
  href="mailto:motigemeda97@gmail.com?subject=Hello%20Moti"
>
  Email Me <span>↗</span>
</a>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">M</span>
          <span>moti<span className="accent">.dev</span></span>
        </a>
        <p>Designed & built by Moti Gemeda.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
