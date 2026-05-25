/* ─── PROJECTS SECTION ──────────────────────────────────────── */
export function Projects() {
  const projects = [
    {
      id: 1,
      icon: "🌲",
      name: "MaxiClean Services",
      description:
        "A web app that promotes environmental cleanliness and lets users book sanitation services like fumigation, waste removal, and deep cleaning — all in one place.",
      tags: ["HTML", "CSS", "JavaScript", "Booking UI"],
      github: "https://github.com/4krang-ui/MaxiClean-Services/tree/main",
      live: "https://maxi-clean-services.vercel.app/",
    },
  ];

  return (
    <section className="section" id="projects">
      <p className="section-label">03 / projects</p>
      <h2 className="section-title">What I've built</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            {(project.github || project.live) && (
              <div className="project-links">
                {project.github && (
                  <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                )}
                {project.live && (
                  <a href={project.live} className="project-link" target="_blank" rel="noreferrer">
                    Live demo ↗
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
    

 {/* ── Placeholder card — replace with your next project ── */}
        <div className="project-card project-card--empty">
          <div className="project-empty-icon">+</div>
          <h3 className="project-name" style={{ color: "var(--fg2)" }}>Next project</h3>
          <p className="project-desc">
            {" "}
            <code>Anticipate!</code>
          </p>
          <div className="project-tags">
            <span className="tag">coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}