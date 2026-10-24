export default function Header({ theme, setTheme }) {
  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <header className="topbar">
      <div className="brand">Sisonke</div>

      <nav className="nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="nav-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark and light mode"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <a className="button small" href="#contact">
          Hire Me
        </a>
      </div>
    </header>
  );
}
