import './App.css'

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="header-inner">
          <div className="logo-area">
            <div className="logo-mark">CB</div>
            <div className="logo-text">
              <span className="logo-title">
                Microbial Biotechnology
              </span>
              <span className="logo-subtitle">UNAL - Science Faculty</span>
            </div>
          </div>

          <nav className="main-nav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#people">The Team</a>
            <a href="#contact">Contact us</a>
          </nav>

          <div className="header-actions">
            <div className="language-switcher" aria-label="Language selector">
              <button className="lang active" type="button">
                EN
              </button>
              <span className="divider">/</span>
              <button className="lang" type="button">
                ES
              </button>
            </div>
            <button className="search-button" type="button">
              Search
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="hero" aria-labelledby="hero-title">
          <div className="hero-overlay" />
          <div className="hero-inner">
            <p className="hero-kicker">Despartment of Bioscience</p>
            <h1 id="hero-title" className="hero-title">
              Cumputacional Virology LAB
            </h1>
            <h2 className="hero-subtitle">Prof. Pablo Andrés Gutierrez</h2>
            <p className="hero-text">
              We develop computational methods to understand the molecular mechanisms
              underlying viral infection and epidemiology, predict interactions between
              viral proteins and host receptors, and perform large-scale sequence
              analyses.
            </p>
          </div>
        </section>

        <section className="breadcrumb-bar" aria-label="Breadcrumb">
          <div className="breadcrumb-inner">
            <a href="#home">Home</a>
            <span>/</span>
            <a href="#research">About us</a>
          </div>
        </section>

        <section id="research" className="content-section">
          <div className="content-inner">
            <h3>Our Research and Approach</h3>
            <p>
              Our group combines virology, bioinformatics, structural biology,
              and machine learning to analyze large-scale molecular and
              epidemiological data. We develop models to understand how viruses
              interact with their microbial and human hosts, identify key
              determinants of pathogenicity, and prioritize targets for
              antiviral and biotechnological applications.
            </p>
            <p>
              This page introduces the research activities of the
              Computational Virology group at the
              UNAL Science Faculty. Future sections will highlight our ongoing
              projects, team members, publications, and opportunities for
              collaboration.
            </p>

            <div className="research-grid">
              <a
                className="research-card"
                href="https://biotecnologiamicrobianaunalmed.github.io/PhysalisViralEpidemiology/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="research-image research-image-physalis" />
                <div className="research-card-body">
                  <h4 className="research-title">
                    Modeling the virus transmission network in Cape Gooseberry
                    (Physalis peruviana L.) fields in Antioquia, Colombia
                  </h4>
                  <p className="research-summary">
                    Web-based tools to explore transmission networks and
                    epidemiological patterns of viruses affecting Cape
                    Gooseberry production.
                  </p>
                </div>
              </a>

              <a
                className="research-card"
                href="https://biotecnologiamicrobianaunalmed.github.io/OrchidViromeExplorer/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="research-image research-image-orchid" />
                <div className="research-card-body">
                  <h4 className="research-title">
                    Expanding the Orchid Virome Through Analysis of
                    Public-Domain Sequencing Data
                  </h4>
                  <p className="research-summary">
                    An interactive platform to mine public sequencing data for
                    new orchid-infecting viruses and visualize their diversity.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section id="people" className="content-section people-section">
          <div className="content-inner">
            <h3>The Team</h3>

            <div className="people-grid">
              <article className="person-card leader">
                <div className="person-text">
                  <p className="person-section-title">Group Leader</p>
                  <h4 className="person-name">Prof. Dr. Pablo Andrés Gutierrez Sánchez</h4>
                  <p className="person-role">Group leader</p>
                  <p className="person-contact-label">Contact</p>
                  <div className="person-links">
                    <a href="mailto:paguties@unal.edu.co">Email</a>
                  </div>
                </div>
                <div className="person-photo-placeholder" aria-hidden="true" />
              </article>

              <article className="person-card">
                <div className="person-text">
                  <p className="person-section-title">PhD Candidate</p>
                  <h4 className="person-name">Mónica Marcela Higuita Valencia</h4>
                  <p className="person-role">PhD candidate</p>
                  <div className="person-links">
                    <a href="mailto:mmhiguit@unal.edu.co">Email</a>
                  </div>
                </div>
                <div className="person-photo-placeholder" aria-hidden="true" />
              </article>

              <article className="person-card">
                <div className="person-text">
                  <p className="person-section-title">MSc Student</p>
                  <h4 className="person-name">Juliana Sánchez Yali</h4>
                  <p className="person-role">MSc student in Biotechnology</p>
                  <div className="person-links">
                    <a href="mailto:jsanchezy@unal.edu.co">Email</a>
                  </div>
                </div>
                <div className="person-photo-placeholder" aria-hidden="true" />
              </article>

              <article className="person-card">
                <div className="person-text">
                  <p className="person-section-title">Bachelor Student</p>
                  <h4 className="person-name">Alejandra Pérez Perea</h4>
                  <p className="person-role">Biological Engineering student</p>
                  <div className="person-links">
                    <a href="mailto:alperezp@unal.edu.co">Email</a>
                  </div>
                </div>
                <div className="person-photo-placeholder" aria-hidden="true" />
              </article>

              <article className="person-card">
                <div className="person-text">
                  <p className="person-section-title">Bachelor Student</p>
                  <h4 className="person-name">Christian Jiménez Arias</h4>
                  <p className="person-role">Biological Engineering student</p>
                  <div className="person-links">
                    <a href="mailto:chjimeneza@unal.edu.co">Email</a>
                  </div>
                </div>
                <div className="person-photo-placeholder" aria-hidden="true" />
              </article>

              <article className="person-card">
                <div className="person-text">
                  <p className="person-section-title">Bachelor Student</p>
                  <h4 className="person-name">Sarita Quintero Osorio</h4>
                  <p className="person-role">Biological Engineering student</p>
                  <div className="person-links">
                    <a href="mailto:squinteroos@unal.edu.co">Email</a>
                  </div>
                </div>
                <div className="person-photo-placeholder" aria-hidden="true" />
              </article>

              <article className="person-card">
                <div className="person-text">
                  <p className="person-section-title">Bachelor Student</p>
                  <h4 className="person-name">Jazmín Rocío Gómez Cruz</h4>
                  <p className="person-role">Biological Engineering student</p>
                  <div className="person-links">
                    <a href="mailto:jgomezcr@unal.edu.co">Email</a>
                  </div>
                </div>
                <div className="person-photo-placeholder" aria-hidden="true" />
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <div className="content-inner">
            <h3>Contact Us</h3>
            <p>
              For any information about our research projects, collaboration
              opportunities, or student positions in the Computational
              Virology &amp; Microbial Biotechnology group, please contact our
              group leader.
            </p>
            <p className="contact-highlight">Prof. Dr. Pablo Andrés Gutierrez Sánchez</p>
            <p>
              Department of Bioscience, UNAL - Science Faculty
              <br />
              Email:{' '}
              <a href="mailto:paguties@unal.edu.co">paguties@unal.edu.co</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
