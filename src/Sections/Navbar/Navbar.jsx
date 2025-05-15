import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../common/ThemeContext';
import styles from './NavbarStyles.module.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -50% 0px'
      }
    );


    const sections = ['home', 'skills', 'projects', 'contact'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) sectionObserver.observe(element);
    });

    const handleScrollStart = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout.current);
    };

    const handleScrollEnd = () => {
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1500); // Hide indicator 1.5s after scrolling stops
    };

    window.addEventListener('scroll', handleScrollStart);
    window.addEventListener('scrollend', handleScrollEnd);

    return () => {
      sectionObserver.disconnect();
      window.removeEventListener('scroll', handleScrollStart);
      window.removeEventListener('scrollend', handleScrollEnd);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <ul>
        <li className={isScrolling && activeSection === 'home' ? styles.active : ''}>
          <a href="#subu">Home</a>
        </li>
        <li className={isScrolling && activeSection === 'skills' ? styles.active : ''}>
          <a href="#skills">Skills</a>
        </li>
        <li className={isScrolling && activeSection === 'projects' ? styles.active : ''}>
          <a href="#projects">Projects</a>
        </li>
        <li className={isScrolling && activeSection === 'contact' ? styles.active : ''}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
