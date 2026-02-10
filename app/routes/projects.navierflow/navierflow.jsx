import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageNavierflowLarge from '~/assets/navierflow-large.jpg';
import imageNavierflowPlaceholder from '~/assets/navierflow-placeholder.jpg';
import imageNavierflow from '~/assets/navierflow.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './navierflow.module.css';

const title = 'NavierFlow CFD Engine';
const description =
  'Professional-grade Computational Fluid Dynamics simulation engine supporting Eulerian (Navier-Stokes) and Lattice Boltzmann Method solvers with GPU-accelerated real-time visualization via Taichi.';
const roles = [
  'Scientific Computing',
  'GPU Programming',
  'Physics Simulation',
  'Visualization Engineer',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const NavierFlow = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/tafolabi009/navierflow"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={`${imageNavierflow} 1280w, ${imageNavierflowLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={imageNavierflowPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="NavierFlow CFD engine showing fluid dynamics simulation with velocity field visualization"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              Computational Fluid Dynamics simulations have traditionally required expensive commercial 
              software licenses and significant computational resources. Most open-source alternatives 
              lack real-time visualization capabilities, making iterative experimentation tedious. The 
              gap between academic CFD tools and commercial-grade engines leaves engineers and researchers 
              without accessible, high-performance simulation tools.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The solution</ProjectSectionHeading>
              <ProjectSectionText>
                NavierFlow is a professional-grade CFD simulation engine that combines two complementary 
                solver approaches: Eulerian (Navier-Stokes) for high-accuracy simulations and Lattice 
                Boltzmann Method (LBM) for real-time applications. The engine leverages Taichi for 
                massive GPU parallelism, enabling interactive visualization of complex fluid phenomena.
              </ProjectSectionText>
              <ProjectSectionText>
                The engine supports multi-phase flows, turbulence modeling (k-ε), and real-time 
                rendering via OpenGL. A comprehensive analytics dashboard provides detailed pressure, 
                velocity, and vorticity field analysis, while AI-enhanced optimization automatically 
                tunes simulation parameters for accuracy and performance.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectSectionHeading>Technical implementation</ProjectSectionHeading>
              <ProjectSectionText>
                NavierFlow is built in Python with Taichi as the GPU compute backend, NumPy for 
                numerical operations, and OpenGL for real-time rendering. The architecture separates 
                the solver layer from visualization, allowing headless batch processing or interactive 
                exploration.
              </ProjectSectionText>
              <ProjectSectionText>
                Key features of the implementation:
              </ProjectSectionText>
              <ul>
                <li>Navier-Stokes solver with pressure-velocity coupling (SIMPLE algorithm)</li>
                <li>Lattice Boltzmann Method (D2Q9/D3Q19) for real-time simulation</li>
                <li>Taichi-powered GPU parallelism for massive speedups</li>
                <li>Multi-phase flow simulation with surface tension modeling</li>
                <li>k-ε turbulence modeling for high Reynolds number flows</li>
                <li>Real-time OpenGL visualization with streamlines and particles</li>
                <li>AI-enhanced parameter optimization for convergence</li>
              </ul>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectSectionHeading>Outcomes & impact</ProjectSectionHeading>
              <ProjectSectionText>
                NavierFlow achieves real-time frame rates (60+ FPS) on consumer GPUs for 
                512×512 grid simulations, making interactive CFD exploration accessible without 
                HPC clusters. The dual-solver architecture allows users to trade accuracy for 
                speed depending on their requirements.
              </ProjectSectionText>
              <ProjectSectionText>
                The comprehensive analytics dashboard enables researchers to extract quantitative 
                data from simulations, including pressure distributions, velocity profiles, and 
                vorticity fields. The engine serves as both a research tool for fluid dynamics 
                studies and an educational platform for understanding complex flow phenomena, 
                demonstrating the intersection of physics, GPU computing, and scientific 
                visualization.
              </ProjectSectionText>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Future developments</ProjectSectionHeading>
              <ProjectSectionText>
                The roadmap for NavierFlow includes extending to 3D simulations with adaptive mesh 
                refinement, implementing fluid-structure interaction (FSI) coupling, and adding support 
                for compressible flows. We're also developing WebGPU-based visualization for browser-based 
                simulations and integration with machine learning models for surrogate flow prediction, 
                enabling 1000× speedups for parameter sweeps.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
}; 
