import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageEpochLarge from '~/assets/epoch-vcs-large.jpg';
import imageEpochPlaceholder from '~/assets/epoch-vcs-placeholder.jpg';
import imageEpoch from '~/assets/epoch-vcs.jpg';
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
import styles from './epoch-vcs.module.css';

const title = 'EPOCH VCS - Distributed Version Control System';
const description =
  'A distributed Version Control System built in Rust using Merkle DAGs for history tracking, optimized for large binary assets with delta compression and cryptographic verification for commit integrity.';
const roles = [
  'Systems Architect',
  'Rust Developer',
  'Cryptography Engineer',
  'Performance Engineer',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const EpochVcs = () => {
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
          url="https://github.com/tafolabi009/epoch-vcs"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={`${imageEpoch} 1280w, ${imageEpochLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={imageEpochPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="EPOCH VCS branching visualization showing Merkle DAG history tracking"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              Existing version control systems like Git were originally designed for source code — 
              relatively small text files with line-based diffing. When repositories contain large binary 
              assets (game assets, ML model weights, scientific datasets), Git's performance degrades 
              significantly. Clone times balloon, storage requirements explode, and the lack of efficient 
              binary diffing means every revision stores a full copy.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The solution</ProjectSectionHeading>
              <ProjectSectionText>
                EPOCH is a distributed Version Control System engineered from the ground up in Rust, 
                using Merkle DAGs for history tracking with a focus on large binary assets and 
                high-throughput repositories. Unlike Git, EPOCH implements intelligent delta compression 
                algorithms that work efficiently on binary data, dramatically reducing storage requirements.
              </ProjectSectionText>
              <ProjectSectionText>
                The system integrates cryptographic verification at every level — from individual 
                chunks to complete commit histories — ensuring data integrity without sacrificing 
                performance. EPOCH's architecture leverages Rust's zero-cost abstractions and ownership 
                model to achieve memory safety without garbage collection overhead.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectSectionHeading>Technical implementation</ProjectSectionHeading>
              <ProjectSectionText>
                EPOCH's core is built on a content-addressable storage layer using Merkle DAGs, where 
                each node represents a content-hashed data chunk. The system implements advanced 
                distributed systems concepts with a focus on performance and reliability.
              </ProjectSectionText>
              <ProjectSectionText>
                Key technical features include:
              </ProjectSectionText>
              <ul>
                <li>Merkle DAG-based history with content-addressable storage</li>
                <li>Delta compression algorithms optimized for binary assets</li>
                <li>Cryptographic verification (SHA-256) for commit integrity</li>
                <li>Async I/O with zero-copy optimizations in Rust</li>
                <li>Chunked file storage with deduplication</li>
                <li>Efficient branching and merging with conflict resolution</li>
                <li>Network protocol for distributed repository synchronization</li>
              </ul>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectSectionHeading>Outcomes & impact</ProjectSectionHeading>
              <ProjectSectionText>
                EPOCH rivals Git in specific large-file benchmarks, demonstrating significant 
                improvements in storage efficiency and clone times for repositories with large 
                binary assets. The delta compression algorithms reduce storage requirements by 
                up to 60% compared to naive full-copy approaches.
              </ProjectSectionText>
              <ProjectSectionText>
                The project demonstrates deep expertise in distributed systems, cryptography, 
                and systems programming in Rust. The implementation showcases advanced concepts 
                including content-addressable storage, Merkle tree verification, and efficient 
                binary diffing algorithms — core infrastructure engineering typically found in 
                senior/staff-level systems work.
              </ProjectSectionText>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Architecture & future</ProjectSectionHeading>
              <ProjectSectionText>
                EPOCH's modular architecture separates the storage layer, DAG operations, network 
                protocol, and CLI into independent crates, allowing each component to be tested and 
                optimized independently. Future work includes implementing a distributed lock-free 
                merge algorithm, adding support for partial repository cloning (sparse checkout), 
                and building integrations with CI/CD pipelines for automated binary asset management.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
}; 
