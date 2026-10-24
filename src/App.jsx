import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

const skills = [
  'React',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'UI/UX Design',
  'Responsive Design',
  'API Integration',
  'Git & GitHub',
  'Figma',
  'CSS & Tailwind',
  'REST APIs',
  'UX Research',
];

const projects = [
  {
    title: 'StudioFlow',
    category: 'Productivity App',
    description:
      'A collaborative workspace app that helps teams organize tasks, track projects, and streamline communication in real time.',
    stack: ['React', 'Node', 'Firebase'],
  },
  {
    title: 'Luma Commerce',
    category: 'E-commerce Platform',
    description:
      'A sleek online store experience built for modern brands, focused on conversion, user flow, and mobile shopping.',
    stack: ['React', 'Stripe', 'API'],
  },
  {
    title: 'Pixel Portfolio',
    category: 'Creative Portfolio',
    description:
      'A personal portfolio that blends storytelling and visuals to showcase design, code, and product thinking.',
    stack: ['React', 'CSS', 'Vite'],
  },
];

const experience = [
  {
    role: 'Frontend Developer',
    company: 'Freelance',
    period: '2023 - Present',
    details: 'Designing and shipping responsive user interfaces for startups and small businesses.',
  },
  {
    role: 'UI Developer',
    company: 'Creative Studio',
    period: '2021 - 2023',
    details: 'Built elegant web experiences and contributed to design systems for diverse digital products.',
  },
  {
    role: 'Web Designer',
    company: 'Independent',
    period: '2019 - 2021',
    details: 'Created brand-driven digital experiences combining visual design, UX strategy, and front-end work.',
  },
];

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app-shell theme-${theme}`}>
      {showSplash ? <SplashScreen name="Sisonke Miya" /> : null}

      {!showSplash ? (
        <>
          <Header theme={theme} setTheme={setTheme} />

          <main>
            <Hero name="Sisonke Miya" />
            <AboutSection />
            <SkillsSection skills={skills} />
            <ProjectsSection projects={projects} />
            <ExperienceSection experience={experience} />
          </main>

          <Footer />
        </>
      ) : null}
    </div>
  );
}
