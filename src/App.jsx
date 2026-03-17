import { useEffect, useMemo, useState } from "react";
import { experience, hobbies, projects, skills } from "./data";
import "./styles.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const nextProgress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setProgress(nextProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return progress;
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const progress = useScrollProgress();

  const observerOptions = useMemo(
    () => ({ rootMargin: "-20% 0px -55% 0px", threshold: 0.1 }),
    [],
  );

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          const nextSection = entry.target.getAttribute("data-section");
          if (nextSection) {
            setActiveSection(nextSection);
          }
        }
      });
    }, observerOptions);

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [observerOptions]);

  return (
    <div className="page">
      <div className="scroll-progress">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>

      <header className="site-header">
        <div className="logo">Kaden Wingert</div>
        <nav className="site-nav">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={activeSection === section.id ? "active" : ""}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero" data-reveal data-section="home">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Software Engineer</h1>
              <p className="lede">
                I'm Kaden Wingert, a software engineer focused on full-stack
                product development and cloud infrastructure. I build reliable
                experiences end to end, pairing clean interfaces with scalable
                backend services and pragmatic cloud architecture.
              </p>
              <div className="hero-actions">
                <a
                  className="button primary"
                  href="https://docs.google.com/document/d/1VnyDYstrk3nlJ9rJOpMFNBnl9n1RZdNQBWAmZ2gRYFE/export?format=pdf"
                >
                  Download Resume
                </a>
                <a className="button ghost" href="#projects">
                  View Projects
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/kaden/headshot.jpg" alt="Kaden Wingert" />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="section"
          data-reveal
          data-section="about"
        >
          <div className="section-header">
            <h2>About</h2>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <img src="/images/kaden/kaden_fishing.jpg" alt="Kaden fishing" />
              <div className="about-card-body">
                <h3>Hello! I'm Kaden Wingert.</h3>
                <p>
                  I’m a Software Engineer from Le Mars, Iowa, which happens to
                  be the Ice Cream Capital of the World 🍦. I’m passionate about
                  the intersection of technology and purpose, focusing my energy
                  on building robust software that makes a tangible difference
                  in people's lives.
                </p>
              </div>
            </div>
            <div className="about-story">
              <div className="story-block">
                <h3>Origin story</h3>
                <p>
                  My tech journey began as the "unpaid CTO" for my grandparents.
                  It led to a high school IT internship managing network
                  infrastructure and system imaging for an entire school
                  district.
                </p>
              </div>
              <div className="story-block">
                <h3>What drives me</h3>
                <p>
                  Those early days sparked a love for problem-solving that
                  evolved into a career in software engineering. I'm driven by
                  the industry's pace — there's always a new architecture to
                  learn or a complex bug to squash.
                </p>
              </div>
              <div className="story-block">
                <h3>Specializations</h3>
                <div className="specializations">
                  <div>
                    <p className="pill">Cloud Infrastructure</p>
                    <p>
                      Microsoft Azure Fundamentals Certified, with hands-on
                      experience in AWS.
                    </p>
                  </div>
                  <div>
                    <p className="pill">Collaborative Development</p>
                    <p>
                      I work thrive in collaborative settings, translating
                      complex concepts into functional and scalable solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cta-panel">
                <p>
                  I'm always open to new opportunities, collaborations, and
                  conversations. Whether you have a project in mind, want to
                  learn more about my work, or just want to say hello, let's
                  connect.
                </p>
                <div className="cta-actions">
                  <a
                    className="button primary"
                    href="mailto:kaden.wingert@gmail.com"
                  >
                    Reach Out
                  </a>
                  <a
                    className="button ghost"
                    href="https://github.com/KadenWingert1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" data-reveal data-section="about">
          <div className="section-header">
            <h2>Hobbies</h2>
          </div>
          <div className="hobby-grid">
            {hobbies.map((hobby) => (
              <span key={hobby} className="tag">
                {hobby}
              </span>
            ))}
          </div>
        </section>

        <section className="section" data-reveal data-section="about">
          <div className="section-header">
            <h2>Skills</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill} className="skill-tile">
                <i className={`${skill} colored`} />
              </div>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="section"
          data-reveal
          data-section="projects"
        >
          <div className="section-header">
            <h2>Projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <a
                key={project.title}
                className="project-card"
                href={project.href}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>View project</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="section"
          data-reveal
          data-section="experience"
        >
          <div className="section-header">
            <h2>Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.role} className="timeline-item">
                <span
                  className="timeline-dot"
                  style={{ backgroundColor: item.accent }}
                />
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="timeline-date">{item.dates}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer" data-section="contact">
        <div className="footer-content">
          <div>
            <h2>Let's connect.</h2>
            <p className="contact-note">
              Feel free to email me or reach out on LinkedIn!
            </p>
          </div>
          <div className="footer-links">
            <a href="mailto:kaden.wingert@gmail.com">
              <span className="link-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path
                    d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 2.2V17h16V8.2l-8 5.1-8-5.1zm8 3.9 8-5.1H4l8 5.1z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              kaden.wingert@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/kaden-wingert-22468123a/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path
                    d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.6h.1c.5-.9 1.8-1.8 3.6-1.8 3.9 0 4.6 2.6 4.6 5.9V21h-4v-5.4c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              LinkedIn
            </a>
          </div>
        </div>
        <p className="footer-meta">
          © 2026 Kaden Wingert. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
