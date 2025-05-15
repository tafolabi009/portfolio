import { useEffect, useRef, useState } from 'react';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Meta } from '~/components/meta';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useScrollToHash } from '~/hooks/useScrollToHash';
import { usePrismicHomePage } from '~/hooks/usePrismicHomePage';
import { media } from '~/utils/style';
import styles from './fluid-simulation.module.css';

const FluidSimulationProject = () => {
  const { data: homeData } = usePrismicHomePage();
  const [titleReveal, setTitleReveal] = useState(false);
  const introRef = useRef();
  const detailsRef = useRef();
  const featuresRef = useRef();
  const techStackRef = useRef();
  const challengesRef = useRef();
  const demoRef = useRef();

  useScrollToHash();

  useEffect(() => {
    setTitleReveal(true);
  }, []);

  return (
    <div className={styles.fluidSimulation}>
      <Meta
        title="Fluid Simulation Engine - GPU-Accelerated Physics"
        description="A high-performance GPU-accelerated fluid simulation engine implementing Navier-Stokes equations using LBM/Eulerian methods with real-time visualization and interactive controls."
      />
      
      <Section className={styles.intro} ref={introRef}>
        <Transition in={titleReveal} timeout={2000}>
          {({ visible }) => (
            <div className={styles.content}>
              <Heading
                level={1}
                className={styles.title}
                data-visible={visible}
              >
                <DecoderText text="Fluid Simulation Engine" start={visible} delay={500} />
              </Heading>
              <Text className={styles.description} data-visible={visible} size="l">
                A GPU-accelerated physics simulation engine with real-time visualization and interactive controls.
              </Text>
              <div className={styles.links} data-visible={visible}>
                <Button
                  className={styles.githubButton}
                  href="https://github.com/tafolabi009/fluid-simulation"
                  icon="github"
                >
                  View on GitHub
                </Button>
                <Button
                  className={styles.demoButton}
                  href="https://demo.fluid-simulation.com"
                  icon="external"
                >
                  Live Demo
                </Button>
              </div>
            </div>
          )}
        </Transition>
      </Section>

      <Section className={styles.details} ref={detailsRef}>
        <div className={styles.content}>
          <Heading level={2}>Project Overview</Heading>
          <Text size="l">
            The Fluid Simulation Engine is a high-performance physics simulation system that accurately models fluid dynamics 
            using the Navier-Stokes equations. Built with GPU acceleration using CUDA/OpenCL, it provides real-time visualization 
            and interactive simulation capabilities, achieving 60 FPS with over 1 million particles.
          </Text>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <Heading level={3}>60 FPS</Heading>
              <Text>Real-time Performance</Text>
            </div>
            <div className={styles.stat}>
              <Heading level={3}>1M+</Heading>
              <Text>Particles Simulated</Text>
            </div>
            <div className={styles.stat}>
              <Heading level={3}>99%</Heading>
              <Text>Accuracy</Text>
            </div>
          </div>
        </div>
      </Section>

      <Section className={styles.features} ref={featuresRef}>
        <div className={styles.content}>
          <Heading level={2}>Key Features</Heading>
          <ul className={styles.featureList}>
            <li>
              <Heading level={3}>GPU Acceleration</Heading>
              <Text>CUDA/OpenCL implementation for massive parallel processing with optimized memory management</Text>
            </li>
            <li>
              <Heading level={3}>Multiple Methods</Heading>
              <Text>Support for LBM, SPH, and Eulerian simulation methods with adaptive switching</Text>
            </li>
            <li>
              <Heading level={3}>Real-time Visualization</Heading>
              <Text>OpenGL/Vulkan rendering with advanced lighting, shadows, and post-processing effects</Text>
            </li>
            <li>
              <Heading level={3}>Interactive Controls</Heading>
              <Text>Real-time parameter adjustment, boundary manipulation, and force application</Text>
            </li>
          </ul>
        </div>
      </Section>

      <Section className={styles.techStack} ref={techStackRef}>
        <div className={styles.content}>
          <Heading level={2}>Technology Stack</Heading>
          <ul className={styles.techList}>
            <li>
              <Heading level={3}>GPU Computing</Heading>
              <Text>CUDA/OpenCL for parallel computation with custom kernel optimization</Text>
            </li>
            <li>
              <Heading level={3}>Rendering</Heading>
              <Text>OpenGL/Vulkan for real-time visualization with compute shaders</Text>
            </li>
            <li>
              <Heading level={3}>Physics</Heading>
              <Text>Custom Navier-Stokes solver with adaptive time-stepping</Text>
            </li>
            <li>
              <Heading level={3}>UI Framework</Heading>
              <Text>ImGui for interactive controls and real-time parameter adjustment</Text>
            </li>
          </ul>
        </div>
      </Section>

      <Section className={styles.challenges} ref={challengesRef}>
        <div className={styles.content}>
          <Heading level={2}>Technical Challenges & Solutions</Heading>
          <ul className={styles.challengeList}>
            <li>
              <Heading level={3}>Performance Optimization</Heading>
              <Text>Implemented custom memory management and kernel optimization for maximum GPU utilization</Text>
            </li>
            <li>
              <Heading level={3}>Numerical Stability</Heading>
              <Text>Developed robust numerical methods and adaptive time-stepping for stable simulation</Text>
            </li>
            <li>
              <Heading level={3}>Visual Quality</Heading>
              <Text>Created advanced rendering techniques including ray marching and volume rendering</Text>
            </li>
          </ul>
        </div>
      </Section>

      <Section className={styles.demo} ref={demoRef}>
        <div className={styles.content}>
          <Heading level={2}>Implementation Details</Heading>
          <div className={styles.demoContainer}>
            <div className={styles.demoCode}>
              <pre>
                <code>
{`// Example of CUDA kernel for fluid simulation
__global__ void simulateFluid(
    float* velocity,
    float* pressure,
    float* density,
    int width,
    int height
) {
    int idx = blockIdx.x * blockDim.x + threadIdx.x;
    if (idx >= width * height) return;

    // Compute Navier-Stokes equations
    float2 v = velocity[idx];
    float p = pressure[idx];
    float d = density[idx];

    // Update velocity using pressure gradient
    float2 gradP = computePressureGradient(pressure, idx, width);
    v -= gradP * dt;

    // Apply viscosity
    v += viscosity * laplacian(velocity, idx, width);

    // Update density
    d += dt * divergence(velocity, idx, width);

    // Store results
    velocity[idx] = v;
    density[idx] = d;
}`}
                </code>
              </pre>
            </div>
            <div className={styles.demoStats}>
              <div className={styles.stat}>
                <Heading level={3}>Simulation Methods</Heading>
                <Text>LBM, SPH, and Eulerian approaches with adaptive switching</Text>
              </div>
              <div className={styles.stat}>
                <Heading level={3}>Performance</Heading>
                <Text>60 FPS with 1M+ particles on modern GPUs</Text>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className={styles.cta}>
        <div className={styles.content}>
          <Heading level={2}>Try the Simulation</Heading>
          <Text size="l">
            Experience real-time fluid dynamics simulation with interactive controls and 
            high-quality visualization. Perfect for research, education, and entertainment.
          </Text>
          <Button
            className={styles.button}
            href="/contact"
            icon="send"
          >
            Get Started
          </Button>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default FluidSimulationProject; 