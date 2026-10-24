export default function Footer() {
  const socials = [
    { label: 'GitHub', href: 'https://github.com/Sisonke0420', icon: 'GH' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'in' },
    { label: 'Email', href: 'mailto:sisonke@example.com', icon: '✉' },
  ];

  return (
    <footer id="contact" className="footer">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something thoughtful.</h2>
      </div>

      <div className="footer-actions">
        <a href="/Sisonke-Miya-Resume.txt" download className="button">
          Download Resume
        </a>

        <a className="button secondary" href="mailto:sisonke@example.com">
          sisonke@example.com
        </a>

        <div className="socials" aria-label="Social links">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
              className="social-link"
              aria-label={social.label}
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
