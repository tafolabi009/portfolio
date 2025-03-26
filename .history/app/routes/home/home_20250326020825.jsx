import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState, RefObject } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoder wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Developer + CyberSecurity + Designer + Entrepreneur',
    description: `Design portfolio of ${config.name} — a Software Developer working on web & mobile apps with a focus on usability, experience security, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef<HTMLDivElement>(null);
  const projectOne = useRef<HTMLDivElement>(null);
  const projectTwo = useRef<HTMLDivElement>(null);
  const projectThree = useRef<HTMLDivElement>(null);
  const details = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Safely check if all refs are defined
    const sections = [
      intro, 
      projectOne, 
      projectTwo, 
      projectThree, 
      details
    ];

    // Validate refs before creating observers
    const validSections = sections.filter(
      (section) => section.current !== null
    );

    // If no valid sections, log and return
    if (validSections.length === 0) {
      console.warn('No valid sections found for observation');
      return;
    }

    // Create section observer with improved error handling
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          try {
            if (entry.isIntersecting) {
              const section = entry.target;
              observer.unobserve(section);
              
              // Prevent duplicate additions
              if (!visibleSections.includes(section)) {
                setVisibleSections(prevSections => [...prevSections, section]);
              }
            }
          } catch (error) {
            console.error('Error in section observer:', error);
          }
        });
      },
      { 
        rootMargin: '0px 0px -10% 0px', 
        threshold: 0.1 
      }
    );

    // Create scroll indicator observer
    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    // Observe valid sections
    validSections.forEach(section => {
      if (section.current) {
        try {
          sectionObserver.observe(section.current);
        } catch (error) {
          console.error(`Failed to observe section:`, section, error);
        }
      }
    });

    // Observe intro for scroll indicator
    if (intro.current) {
      try {
        indicatorObserver.observe(intro.current);
      } catch (error) {
        console.error('Failed to observe intro for scroll indicator:', error);
      }
    }

    // Cleanup function
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
        visible={projectOne.current ? visibleSections.includes(projectOne.current) : false}
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
        id="project-3"
        sectionRef={projectThree}
        visible={projectThree.current ? visibleSections.includes(projectThree.current) : false}
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
        visible={details.current ? visibleSections.includes(details.current) : false}
        id="details"
      />
      <Footer />
    </div>
  );
};
