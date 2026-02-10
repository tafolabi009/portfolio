import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageResonanceLarge from '~/assets/resonance-nn-large.jpg';
import imageResonancePlaceholder from '~/assets/resonance-nn-placeholder.jpg';
import imageResonance from '~/assets/resonance-nn.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
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
import styles from './resonance-nn.module.css';

const title = 'Resonance Neural Networks';
const description =
  'A novel neural network architecture replacing attention mechanisms with FFT-based spectral processing. Achieves O(n log n) complexity with 3–28× speedup over transformers, 83% fewer parameters, and 260K–300K token context windows. Accepted to AAAI 2026 Workshop.';
const roles = [
  'Lead Researcher',
  'Architecture Design',
  'ML Engineering',
  'Mathematical Proofs',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const ResonanceNN = () => {
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
          url="https://github.com/tafolabi009/NEURON_NEW"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={`${imageResonance} 1280w, ${imageResonanceLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={imageResonancePlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Resonance Neural Network architecture visualization showing FFT-based sequence processing"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              Transformer architectures have dominated sequence modeling but suffer from O(n²) 
              complexity in their attention mechanism, making them prohibitively expensive for 
              long-context tasks. Models struggle with sequences beyond 8K–32K tokens, and the 
              parameter counts required for competitive performance (often billions) make training 
              and deployment costly. The field needed an alternative that could match or exceed 
              transformer performance while being fundamentally more efficient.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Spectral decomposition approach</ProjectSectionHeading>
              <ProjectSectionText>
                Resonance Neural Networks replace self-attention entirely with frequency-domain 
                processing via Fast Fourier Transforms. Instead of computing pairwise token 
                interactions, the architecture decomposes input sequences into spectral components, 
                applies learned transformations in frequency space, and reconstructs the output — 
                achieving O(n log n) complexity with R² {'>'} 0.95 verified scaling.
              </ProjectSectionText>
              <ProjectSectionText>
                The architecture integrates holographic memory with physics-inspired interference 
                patterns, enabling ultra-long context windows of 260K–300K tokens via hierarchical 
                chunking. This is 10–30× longer than most transformer implementations without the 
                quadratic memory overhead.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectSectionHeading>Architecture details</ProjectSectionHeading>
              <ProjectSectionText>
                The model features 4–6× parameter efficiency compared to transformers — achieving 
                competitive performance with 83% fewer parameters. Model configurations scale from 
                50M parameters (small) through 200M (medium), 500M (large), to 1–3B (XLarge), 
                trained on the FineWebEdu 32K dataset on NVIDIA L40 GPUs.
              </ProjectSectionText>
              <ProjectSectionText>
                Key innovations include multimodal support via frequency-based cross-modal fusion 
                (vision, audio, text), large vocabulary handling (500K–1M tokens), and export to 
                multiple formats (PyTorch, ONNX, TorchScript, quantized).
              </ProjectSectionText>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectSectionHeading>Research results</ProjectSectionHeading>
              <ProjectSectionText>
                The work was accepted to the AAAI 2026 Workshop on Linear-Complexity Sequence 
                Modeling via Spectral Decomposition — demonstrating 3–28× speedups over 
                transformer baselines across standard benchmarks while maintaining or improving 
                accuracy.
              </ProjectSectionText>
              <ProjectSectionText>
                This is part of a broader research program at Genovo Technologies with 6 published 
                papers, 3 focused on novel architectures outperforming transformers, all with 
                strong mathematical and theoretical foundations including provable approximation 
                guarantees.
              </ProjectSectionText>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Technology stack</ProjectSectionHeading>
              <ProjectSectionText>
                Built with Python 3.8+, PyTorch 2.0+, torch.fft for spectral operations, 
                NumPy, SciPy, and einops for tensor manipulation. Training infrastructure 
                uses TensorBoard for visualization, tqdm for progress tracking, and matplotlib 
                for analysis. The architecture is proprietary to Genovo Technologies and represents 
                the core ML research driving our AI infrastructure products.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
