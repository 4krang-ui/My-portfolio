import { useState, useEffect } from "react";
import profilePic from "../assets/profilepic.jpeg";
import { Sun, Moon, Menu, X } from "lucide-react";

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 👈 added

  const links = [
    { label: "about", href: "#about" },
    { label: "projects", href: "#projects" },
    { label: "skills", href: "#skills" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          {/* Avatar — click to open lightbox */}
          <div
            className="nav-avatar"
            onClick={() => setLightboxOpen(true)}
            title="View photo"
          >
            <img src={profilePic} alt="Maxwell" className="nav-avatar-img" />
          </div>
        </div>

        {/* added menuOpen class toggle */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.label}>
              {/* close menu when a link is clicked */}
              <a
                href={link.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/*  wrapped toggle + hamburger together */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/*  hamburger button — hidden on desktop via CSS */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      {/* Lightbox — unchanged */}
      {lightboxOpen && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={profilePic} alt="Maxwell" className="lightbox-img" />

            <button
              className="lightbox-close"
              onClick={() => setLightboxOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
