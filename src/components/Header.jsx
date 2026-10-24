export default function Header({ theme, setTheme }) {
  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <header className="topbar">
      <div className="brand-wrap" aria-label="Sisonke Miya home">
        <span className="brand-mark">S</span>
        <span className="brand-name">SONKE</span>
      </div>

      <nav className="nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#notes">Notes</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="nav-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark and light mode"
        >
          {theme === 'dark' ? '☼' : '☾'}
        </button>

        <a href="/Sisonke-Miya-Resume.txt" download className="button small">
          Resume
        </a>
      </div>
    </header>
  );
}
