import { useEffect, useRef, useState } from 'react';

// Image imports (adjust paths as needed for your project)
import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';

// Component imports (ensure these exist in your project)
import { Footer } from '~/components/footer';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';

// Utility imports
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch Draco decoder files for 3D models
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

// Metadata for the page
export const meta = () => {
  return baseMeta({
    title: 'Developer + CyberSecurity + Designer + Entrepreneur',
    description: `Design portfolio of ${config.name} — a Software Developer working on web & mobile apps with a focus on usability, experience security, and accessibility.`,
  });
};

// Main Home component
export const Home = () => {
  const [visibleSections, setVisibleSections] = useState<Element[]>([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef<HTMLDivElement>(null);
  const projectOne = useRef<HTMLDivElement>(null);
  const projectTwo = useRef<HTMLDivElement>(null);
  const projectThree = useRef<HTMLDivElement>(null);
  const details = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

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
        visible={visibleSections.includes(projectOne.current as Element)}
        index={1}
        title="Designing the future of education"
        description="Designing a graphing calculator to help students"
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Graphing Calculator',
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
        visible={visibleSections.includes(projectTwo.current as Element)}
        index={2}
        title="GameStack Portfolio"
        description="A portfolio management system for gamers"
        buttonText="View project"
        buttonLink="/projects/gamestack"
        model={{
          type: 'laptop',
          alt: 'GameStack Portfolio',
          textures: [
            {
              srcSet: `${gamestackTexture} 1280w, ${gamestackTextureLarge} 2560w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 1280w, ${gamestackTexture2Large} 2560w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current as Element)}
        index={3}
        title="Image recognition"
        description="An image recognition model"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'An Image recognition ML model',
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
        visible={visibleSections.includes(details.current as Element)}
        id="details"
      />
      <Footer />
    </div>
  );
};

export default Home;
