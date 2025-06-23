import { useState, useEffect } from 'react';

export function useActiveSection(sections) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.link.replace('#', ''));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return activeSection;
}