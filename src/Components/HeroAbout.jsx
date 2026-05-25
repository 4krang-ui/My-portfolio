
export function Hero() {
  return (
    <section className="hero">
      <div className="hero-tag">
        <span className="hero-tag-dot" />
        available for work
      </div>

      <h1 className="hero-heading">
        Hi, I'm <span className="hero-accent">MAXIII</span>.<br />
        I build with React.
      </h1>

      <p className="hero-sub">
        I am a React developer specializing in building the best digital experiences.
      </p>

      <div className="hero-ctas">
        <a href="#projects" className="btn-primary">
          See my work ↓
        </a>
        <a href="#contact" className="btn-ghost">
          Get in touch
        </a>
      </div>
    </section>
  );
}

/* ==== ABOUT SECTION ==== */
export function About() {
  const stats = [
    { num: "React", label: "primary framework" },
    { num: "∞", label: "things still learning" },
  ];

  return (
    <section className="section" id="about">
      <p className="section-label">01 / about</p> 
      <h2 className="section-title">BIO</h2>

      <p className="about-text">
        I'm a React developer who loves turning complex problems into simple,
        elegant UIs. I care deeply about component architecture, clean code,
        and building things that actually work well for users. 
         I'm 6'2 btw.
      </p>

      <div className="about-grid">
        {stats.map((s) => (
          <div key={s.label} className="about-stat">
            <div className="about-stat-num">{s.num}</div>
            <div className="about-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
