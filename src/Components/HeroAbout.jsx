import { MoveDown } from "lucide-react";
export function Hero() {
  return (
    <section className="hero">
      <div className="hero-tag">
        <span className="hero-tag-dot" />
        available for work
      </div>

      <h1 className="hero-heading">
        Hi, I'm{" "}
        <span className="hero-accent glitch" data-text="MAXWELL">
          MAX
        </span>
        .<br />I build innovative software.
      </h1>

      <p className="hero-sub">
        Second-year Cybersecurity undergrad — writing code across the stack and
        figuring out the rest as I go.
      </p>

      <div className="hero-ctas">
        <a href="#projects" className="btn-primary">
          See my work {<MoveDown size={13} />}
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
    { num: "Python + TypeScript", label: "languages in rotation" },
    { num: "Cybersecurity", label: "field of study" },
  ];

  return (
    <section className="section" id="about">
      <p className="section-label">01 / about</p>
      <h2 className="section-title">BIO</h2>

      <p className="about-text">
        I'm Maxwell, a second-year undergraduate studying Cybersecurity,
        currently spending most of my time writing code and building things that
        actually work. I'm drawn to software engineering and development — the
        kind of work where you can see what you made — with a long-term interest
        in cybersecurity practice and AI engineering down the line.
        <br />
        <br />
        So far I've built across the stack: Python scripts, REST APIs with
        TypeScript and Hono, and full websites from scratch. I'm still early,
        but I ship things, I break things, and I learn fast.
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
