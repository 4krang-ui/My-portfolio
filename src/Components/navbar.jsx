import { useState, useEffect } from "react";
 

function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
 
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
 
  const toggle = () => setIsDark((prev) => !prev);
 
  return { isDark, toggle };
}
 



export function Navbar() {
  const { isDark, toggle } = useDarkMode();
 
  const links = [
    { label: "about", href: "#about" },
    { label: "projects", href: "#projects" },
    { label: "skills", href: "#skills" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-logo">MyPortfolio</div>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="nav-link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

     <button className="theme-toggle" onClick={toggle} aria-label="Toggle dark mode">
        {isDark ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}