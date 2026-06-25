import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageEigenstateLarge from '~/assets/temporal-eigenstate-large.jpg';
import imageEigenstatePlaceholder from '~/assets/temporal-eigenstate-placeholder.jpg';
import imageEigenstate from '~/assets/temporal-eigenstate.jpg';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { useTheme } from '~/components/theme-provider';
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
import styles from './temporal-eigenstate.module.css';

const title = 'Temporal Eigenstate Networks';
const description =
  'Linear-Complexity Sequence Modeling via Spectral Decomposition. An O(T) sequence architecture that replaces O(T²) self-attention, delivering 3–28× speedups and up to 120× memory reduction on sequences of 512–8192 tokens — backed by universal approximation proofs and Lyapunov stability analysis. Accepted to the AAAI-26 AIDD Workshop.';
const roles = [
  'Lead Researcher',
  'Architecture Design',
  'Mathematical Proofs',
  'Benchmarking',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const TemporalEigenstate = () => {
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
          url="https://openreview.net/forum?id=DGgt5mCyY3"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={`${imageEigenstate} 1280w, ${imageEigenstateLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={imageEigenstatePlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Temporal Eigenstate Network visualization showing spectral decomposition of a sequence into eigenstate dynamics"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              Self-attention scales quadratically — O(T²) in sequence length — so the cost
              of transformers explodes as context grows. Long-document, long-horizon, and
              streaming workloads hit a wall where both compute and memory become
              prohibitive. The open question was whether a model could capture long-range
              temporal structure at genuinely linear cost without sacrificing accuracy or
              theoretical guarantees.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Eigenstate dynamics</ProjectSectionHeading>
              <ProjectSectionText>
                Temporal Eigenstate Networks model a sequence as the evolution of a set of
                temporal eigenstates, recovered through spectral decomposition. Rather than
                computing pairwise interactions across every pair of tokens, the architecture
                propagates state through a spectral basis in linear time — achieving O(T)
                complexity in place of the transformer's O(T²).
              </ProjectSectionText>
              <ProjectSectionText>
                The formulation is a companion to{' '}
                <Link href="/projects/resonance-nn">Resonance Neural Networks</Link> within a
                broader spectral-architecture research program at Genovo Technologies: both
                replace attention with frequency-domain processing, but Temporal Eigenstate
                Networks target strictly linear-time temporal modeling.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectSectionHeading>Benchmark results</ProjectSectionHeading>
              <ProjectSectionText>
                Across sequences from 512 to 8192 tokens, the architecture delivers 3–28×
                speedups over transformer baselines and up to 120× memory reduction, with the
                gap widening as sequence length grows. The linear complexity profile means the
                advantage compounds precisely where transformers struggle most — long context.
              </ProjectSectionText>
              <ProjectSectionText>
                The work was accepted to the AAAI-26 AIDD Workshop and is available on
                OpenReview and arXiv, accompanied by comprehensive benchmarks against
                transformer baselines.
              </ProjectSectionText>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectSectionHeading>Theoretical foundations</ProjectSectionHeading>
              <ProjectSectionText>
                The architecture is backed by formal guarantees rather than empirical results
                alone: universal approximation proofs establishing its expressive power, and a
                Lyapunov stability analysis establishing well-behaved temporal dynamics.
              </ProjectSectionText>
              <ProjectSectionText>
                It is one of three research papers in Genovo's architecture program, all
                following the same principle — every claimed result is paired with a working
                implementation and a mathematical proof.
              </ProjectSectionText>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
