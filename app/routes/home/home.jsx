import taskrTextureLarge from '~/assets/taskr-new-large.jpg';
import taskrTexturePlaceholder from '~/assets/taskr-new-placeholder.jpg';
import taskrTexture from '~/assets/taskr-new.jpg';
import tocinTextureLarge from '~/assets/tocin-language-new-large.jpg';
import tocinTexturePlaceholder from '~/assets/tocin-language-new-placeholder.jpg';
import tocinTexture from '~/assets/tocin-language-new.jpg';
import synthosTextureLarge from '~/assets/synthos-large.jpg';
import synthosTexturePlaceholder from '~/assets/synthos-placeholder.jpg';
import synthosTexture from '~/assets/synthos.jpg';
import resonanceTextureLarge from '~/assets/resonance-nn-large.jpg';
import resonanceTexturePlaceholder from '~/assets/resonance-nn-placeholder.jpg';
import resonanceTexture from '~/assets/resonance-nn.jpg';
import rtosTextureLarge from '~/assets/tosin-rtos-large.jpg';
import rtosTexturePlaceholder from '~/assets/tosin-rtos-placeholder.jpg';
import rtosTexture from '~/assets/tosin-rtos.jpg';
import epochTextureLarge from '~/assets/epoch-vcs-large.jpg';
import epochTexturePlaceholder from '~/assets/epoch-vcs-placeholder.jpg';
import epochTexture from '~/assets/epoch-vcs.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
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
    title: 'Founder & CEO, Genovo Technologies | AI Researcher & Systems Engineer',
    description: `Portfolio of ${config.name} — Founder & CEO at Genovo Technologies (NVIDIA Inception). AI researcher, systems engineer, and HPC specialist. 6 published research papers. Builder of compilers, operating systems, and novel ML architectures.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
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

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

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
        title="SynthOS - Synthetic Data Validation Platform"
        description="Architected the first synthetic data validation platform with model collapse detection at Genovo Technologies (NVIDIA Inception). Multi-scale cascade validation using 15+ proxy models predicting collapse with 90%+ accuracy."
        buttonText="View project"
        buttonLink="/projects/synthos"
        model={{
          type: 'laptop',
          alt: 'SynthOS validation dashboard',
          textures: [
            {
              srcSet: `${synthosTexture} 1280w, ${synthosTextureLarge} 2560w`,
              placeholder: synthosTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="TosinLang Compiler (Tocin)"
        description="A statically-typed systems programming language targeting LLVM IR with goroutine-style concurrency, NUMA-aware scheduling, and V8 JavaScript integration. Built from scratch with custom Lexer, Parser, and Semantic Analyzer."
        buttonText="View project"
        buttonLink="/projects/tocin"
        model={{
          type: 'laptop',
          alt: 'Tocin programming language compiler',
          textures: [
            {
              srcSet: `${tocinTexture} 1280w, ${tocinTextureLarge} 2560w`,
              placeholder: tocinTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="EPOCH VCS - Distributed Version Control"
        description="A distributed Version Control System built in Rust using Merkle DAGs for history tracking, optimized for large binary assets with delta compression and cryptographic verification."
        buttonText="View project"
        buttonLink="/projects/epoch-vcs"
        model={{
          type: 'laptop',
          alt: 'EPOCH VCS branching visualization',
          textures: [
            {
              srcSet: `${epochTexture} 1280w, ${epochTextureLarge} 2560w`,
              placeholder: epochTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Taskr - Flutter Marketplace Platform"
        description="Architected Flutter + Node.js platform serving 5K+ concurrent users across Nigeria, US, UK with Stripe/Paystack integration and 99.9% uptime."
        buttonText="View project"
        buttonLink="/projects/taskr"
        model={{
          type: 'laptop',
          alt: 'Taskr marketplace application',
          textures: [
            {
              srcSet: `${taskrTexture} 1280w, ${taskrTextureLarge} 2560w`,
              placeholder: taskrTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Threat Detection AI System"
        description="AI-powered threat classification system achieving 94% accuracy, processing 10TB+ of security data daily with sub-500ms detection latency and 70% false positive reduction."
        buttonText="View project"
        buttonLink="/projects/threat-detection"
        model={{
          type: 'laptop',
          alt: 'Threat detection dashboard',
          textures: [
            {
              srcSet: `${threatTexture} 1280w, ${threatTextureLarge} 2560w`,
              placeholder: threatTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="NavierFlow CFD Engine"
        description="Professional-grade Computational Fluid Dynamics simulation engine supporting Navier-Stokes and Lattice Boltzmann solvers with GPU-accelerated real-time visualization via Taichi."
        buttonText="View project"
        buttonLink="/projects/navierflow"
        model={{
          type: 'laptop',
          alt: 'NavierFlow CFD simulation',
          textures: [
            {
              srcSet: `${navierflowTexture} 1280w, ${navierflowTextureLarge} 2560w`,
              placeholder: navierflowTexturePlaceholder,
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
