import { useEffect, useRef, useState } from 'react';

// Image imports (adjust paths as needed)
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';

// Component imports
import { Footer } from '~/components/footer';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';

// Utility imports
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch Draco decoder files
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
    },
  ];
};

// Metadata
export const meta = () => {
  return baseMeta({
    title: 'ML/AI Specialist + CyberSecurity Specialist + Designer + Entrepreneur',
    description: `Design portfolio of ${config.name} — a Software Developer working on web & mobile apps with a focus on usability, experience security, and accessibility.`,
  });
};

// Main Home component
export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef(null);
  const projectOne = useRef(null);
  const projectTwo = useRef(null);
  const projectThree = useRef(null);
  const projectFour = useRef(null);
  const projectFive = useRef(null);
  const details = useRef(null);

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections((prevSections) => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach((section) => {
      if (section.current) sectionObserver.observe(section.current);
    });

    if (intro.current) indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Taskr - Marketplace Platform"
        description="A comprehensive marketplace platform built with Flutter and Node.js, featuring real-time updates, secure payment processing with Stripe/Paystack, and Firebase integration. Includes advanced features like real-time chat, push notifications, and automated dispute resolution."
        buttonText="View project"
        buttonLink="/projects/taskr"
        model={{
          type: 'laptop',
          alt: 'Taskr Marketplace Platform',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Threat Detection AI"
        description="An advanced ANN-based threat detection system built with PyTorch, capable of real-time network traffic analysis and anomaly detection. Features include automated threat classification, behavioral analysis, and integration with existing security infrastructure."
        buttonText="View project"
        buttonLink="/projects/threat-detection"
        model={{
          type: 'laptop',
          alt: 'Threat Detection AI System',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Tocin Language"
        description="A modern programming language built on LLVM with Python-like syntax, featuring type inference, memory safety, and high-performance computing capabilities. Includes a custom compiler, standard library, and development tools."
        buttonText="View project"
        buttonLink="/projects/tocin"
        model={{
          type: 'laptop',
          alt: 'Tocin Programming Language',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Fluid Simulation Engine"
        description="A GPU-accelerated fluid simulation engine implementing Navier-Stokes equations using LBM/Eulerian methods. Features real-time visualization, multi-threaded computation, and support for complex boundary conditions."
        buttonText="View project"
        buttonLink="/projects/fluid-simulation"
        model={{
          type: 'laptop',
          alt: 'Fluid Simulation Engine',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Budget Analyzer"
        description="A comprehensive financial management tool built with Vue.js and Chart.js, featuring expense tracking, budget planning, and financial analytics. Includes data visualization, export capabilities, and secure data storage."
        buttonText="View project"
        buttonLink="/projects/budget-analyzer"
        model={{
          type: 'laptop',
          alt: 'Budget Analyzer Dashboard',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};

export default Home;
