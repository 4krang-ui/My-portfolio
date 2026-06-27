import { MoveUpRight } from "lucide-react";
export function Skills() {
  const skills = [
    "React",
    "Typescript",
    "JavaScript",
    "HTML",
    "CSS",
    "GitHub",
    "Responsive Design",
    "Python",
    "Java",
    "C++",
    "Backend Development",
  ];

  return (
    <section className="section" id="skills">
      <p className="section-label">02 / skills</p>
      <h2 className="section-title">Tech stack</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-item">
            <span className="skill-dot" />
            <span className="skill-name">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ==== CONTACT SECTION ==== */
export function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <p className="section-label">04 / contact</p>
      <h2 className="section-title">Let's connect</h2>

      <div className="contact-card">
        <div>
          <p className="contact-heading">Open to opportunities</p>
          <p className="contact-sub">
            Drop me a message or find me on{" "}
            <a
              href="https://github.com/4krang-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="socials"
            >
              GitHub
            </a>
          </p>
        </div>
        <a href="mailto:maxwellakuamoah076@gmail.com" className="btn-primary">
          Send an email {<MoveUpRight size={13} />}
        </a>
      </div>
    </section>
  );
}
